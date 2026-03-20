import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat';
import { Chat } from '../../models/chat';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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

constructor(
  private chatService: ChatService,
  private route: ActivatedRoute,
  private router: Router
) {}

  ngOnInit(): void {
  this.chats = this.chatService.getChats();

  const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
  this.currentUserName = user.name || '';

  
  this.route.params.subscribe(params => {
    const id = +params['id'];

    if (id) {
      const chat = this.chats.find(c => c.id === id);
      if (chat) {
        this.selectedChat = chat;
      }
    } else {
      
      if (this.chats.length > 0) {
        this.selectedChat = this.chats[0];
      }
    }
  });
}

 selectChat(chat: Chat) {
  this.selectedChat = chat;

 
  this.router.navigate(['/chats', chat.id]);
}

  sendMessage() {
    if (!this.selectedChat || !this.newMessage.trim()) return;

    this.chatService.sendMessage(this.selectedChat.id, this.newMessage);
    this.newMessage = '';

    
    this.chats = this.chatService.getChats();

    
    this.selectedChat = this.chats.find(
      c => c.id === this.selectedChat!.id
    ) || null;
  }

  logout() {
    localStorage.removeItem('currentUser');
    location.href = '/login';
  }
}