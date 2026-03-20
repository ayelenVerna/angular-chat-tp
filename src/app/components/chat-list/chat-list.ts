import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chat-list.html',
  styleUrls: ['./chat-list.css']
})
export class ChatList {

  
  @Input() chats: any[] = [];

  
  @Output() chatSelected = new EventEmitter<any>();

  
  @Output() newChat = new EventEmitter<string>();

  
  newChatControl = new FormControl('');

  
  selectChat(chat: any) {
    this.chatSelected.emit(chat);
  }

  
  createChat() {
    const name = this.newChatControl.value?.trim();

    if (!name) return;

    this.newChat.emit(name);
    this.newChatControl.setValue('');
  }
}