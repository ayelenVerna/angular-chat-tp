import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat';
import { Chat } from '../../models/chat';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chats.html',
  styleUrls: ['./chats.css']
})
export class ChatsComponent implements OnInit {

  chats: Chat[] = [];
  selectedChat: Chat | null = null;
  newMessage: string = '';
  currentUserName: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chats = this.chatService.getChats();

    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.currentUserName = user.name || '';

    // 🔥 CLAVE: seleccionar un chat automáticamente
    if (this.chats.length > 0) {
      this.selectedChat = this.chats[0];
    }
  }

  selectChat(chat: Chat) {
    this.selectedChat = chat;
  }

  sendMessage() {
    if (!this.selectedChat || !this.newMessage.trim()) return;

    this.chatService.sendMessage(this.selectedChat.id, this.newMessage);
    this.newMessage = '';

    // refrescar chats
    this.chats = this.chatService.getChats();

    // mantener seleccionado el mismo chat
    this.selectedChat = this.chats.find(
      c => c.id === this.selectedChat!.id
    ) || null;
  }

  logout() {
    localStorage.removeItem('currentUser');
    location.href = '/login';
  }
}