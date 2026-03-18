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

  // 📥 lista de chats
  @Input() chats: any[] = [];

  // 📤 evento para seleccionar chat
  @Output() chatSelected = new EventEmitter<any>();

  // 📤 evento para crear nuevo chat
  @Output() newChat = new EventEmitter<string>();

  // 🧠 control del input (form reactivo)
  newChatControl = new FormControl('');

  // 👉 seleccionar chat
  selectChat(chat: any) {
    this.chatSelected.emit(chat);
  }

  // 👉 crear chat nuevo
  createChat() {
    const name = this.newChatControl.value?.trim();

    if (!name) return;

    this.newChat.emit(name);
    this.newChatControl.setValue('');
  }
}