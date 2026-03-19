import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatMessage } from '../chat-message/chat-message';
import { ChatInput } from '../chat-input/chat-input';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, ChatMessage, ChatInput],
  templateUrl: './chat-window.html',
  styleUrls: ['./chat-window.css']
})
export class ChatWindow {

  @Input() chat: any;
@Input() currentUser: string = '';

  @Output() messageSent = new EventEmitter<any>();

  sendMessage(message: any) {
    this.messageSent.emit(message);
  }
}