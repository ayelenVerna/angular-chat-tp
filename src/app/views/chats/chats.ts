import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatList } from '../../components/chat-list/chat-list';
import { ChatWindow } from '../../components/chat-window/chat-window';

import { ChatService } from '../../services/chat';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [CommonModule, ChatList, ChatWindow],
  templateUrl: './chats.html',
  styleUrls: ['./chats.css']
})
export class Chats {

  constructor(public chatService: ChatService) {}

}