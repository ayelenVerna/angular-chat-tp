import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';
import { Message } from '../models/message';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private authService: AuthService) {}

  chats: Chat[] = [
    {
      id: 1,
      name: 'Juan',
      avatar: 'https://i.pravatar.cc/50?img=1',
      status: 'online',
      lastSeen: '',
      messages: [
        { text: 'Hola 👋', sender: 'Juan' }
      ]
    },
    {
      id: 2,
      name: 'María',
      avatar: 'https://i.pravatar.cc/50?img=2',
      status: 'offline',
      lastSeen: 'hace 5 min',
      messages: []
    }
  ];

  selectedChat: Chat | null = null;

  get currentUser(): string {
  return this.authService.currentUser?.username || 'Anon';
}

  selectChat(chat: Chat) {
    this.selectedChat = chat;
  }

  addChat(name: string) {
    const newChat: Chat = {
      id: Date.now(),
      name,
      avatar: 'https://i.pravatar.cc/50?u=' + name,
      status: 'online',
      lastSeen: '',
      messages: []
    };

    this.chats.push(newChat);
  }

  addMessage(text: string) {
    if (!this.selectedChat) return;

    const newMessage: Message = {
      text,
      sender: this.currentUser
    };

    this.selectedChat.messages.push(newMessage);

    setTimeout(() => {
      const botMessage: Message = {
        text: 'Respuesta automática 🤖',
        sender: 'Bot'
      };

      this.selectedChat?.messages.push(botMessage);
    }, 1000);
  }
}