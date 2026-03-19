import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ChatMessage } from '../chat-message/chat-message';
import { ChatInput } from '../chat-input/chat-input';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, ChatMessage, ChatInput],
  templateUrl: './chat-window.html',
  styleUrls: ['./chat-window.css']
})
export class ChatWindow {

  @Input() chat: any;
  @Input() currentUser: string | null = null;

  @Output() back = new EventEmitter<void>();
  @Output() messageSent = new EventEmitter<string>();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // 👉 enviar mensaje
  sendMessage(text: string) {
    this.messageSent.emit(text);
  }

  // 👉 volver (mobile)
  goBack() {
    this.back.emit();
  }

  // 👉 logout
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}