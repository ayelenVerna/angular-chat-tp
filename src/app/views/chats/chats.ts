import { Component } from '@angular/core';
import { ChatList } from '../../components/chat-list/chat-list';
import { ChatWindow } from '../../components/chat-window/chat-window';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [ChatList, ChatWindow],
  template: `
    <div class="layout">
      <app-chat-list [chats]="chats" (chatSelected)="selectChat($event)"></app-chat-list>
      <app-chat-window [chat]="selectedChat" (messageSent)="addMessage($event)"></app-chat-window>
    </div>
  `,
  styleUrls: ['./chats.css']
})
export class Chats {
  currentUser = localStorage.getItem('currentUser') || 'Usuario';

  chats = [
    { id: 1, name: 'Juan', messages: [] },
    { id: 2, name: 'Maria', messages: [] }
  ];

  selectedChat: any = null;

  selectChat(chat: any) { this.selectedChat = chat; }

  addMessage(message: any) {
  console.log('MENSAJE RECIBIDO:', message);
  console.log('CHAT ACTUAL:', this.selectedChat);

  if (!this.selectedChat) return;

  this.selectedChat.messages.push({
    ...message,
    sender: this.currentUser || 'Yo'
  });
  }}