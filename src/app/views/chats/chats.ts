import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatList } from '../../components/chat-list/chat-list';
import { ChatWindow } from '../../components/chat-window/chat-window';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [CommonModule, ChatList, ChatWindow],
  templateUrl: './chats.html',
  styleUrls: ['./chats.css']
})
export class Chats {

  chats = [
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

  selectedChat: any = null;

  currentUser = 'Yo'; // después lo conectamos con login

  // ✅ Seleccionar chat (SOLUCIÓN DEFINITIVA)
  selectChat(chat: any) {
  this.selectedChat = chat;
}

  // ✅ Crear nuevo chat
  addChat(name: string) {
    this.chats.push({
      id: Date.now(),
      name,
      avatar: 'https://i.pravatar.cc/50?u=' + name,
      status: 'online',
      lastSeen: '',
      messages: []
    });
  }

  // ✅ Agregar mensaje
  addMessage(message: any) {
    if (!this.selectedChat) return;

    this.selectedChat.messages.push({
      text: message.text,
      sender: this.currentUser
    });

    // 🤖 Respuesta automática
    setTimeout(() => {
      this.selectedChat.messages.push({
        text: 'Respuesta automática 🤖',
        sender: 'Bot'
      });
    }, 1000);
  }
}