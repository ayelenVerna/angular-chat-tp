import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private STORAGE_KEY = 'chats';

  // 📥 Obtener chats
  getChats(): Chat[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);

    if (stored) {
      return JSON.parse(stored);
    }

    // 🔥 DATA INICIAL (si no hay nada)
    const initialChats: Chat[] = [
      {
        id: 1,
        name: 'Juan',
       avatar: 'https://i.pravatar.cc/150?img=1',
        status: 'online',
        lastSeen: '',
        messages: [
          {
            text: 'Hola!',
            from: 'Juan',
            date: new Date()
          }
        ]
      },
      {
        id: 2,
        name: 'María',
       avatar: 'https://i.pravatar.cc/150?img=2',
        status: 'offline',
        lastSeen: 'Ayer',
        messages: [
          {
            text: '¿Cómo estás?',
            from: 'María',
            date: new Date()
          }
        ]
      }
    ];

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(initialChats));
    return initialChats;
  }

 
  saveChats(chats: Chat[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(chats));
  }

  
  sendMessage(chatId: number, text: string) {
    const chats = this.getChats();

    const chat = chats.find(c => c.id === chatId);
    if (!chat) return;

    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    const newMessage: Message = {
      text: text,
      from: currentUser.name || 'me',
      date: new Date()
    };

    chat.messages.push(newMessage);

    this.saveChats(chats);
  }
}