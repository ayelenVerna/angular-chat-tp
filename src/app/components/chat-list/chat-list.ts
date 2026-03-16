import { Component } from '@angular/core';
import { ChatInput } from "../chat-input/chat-input";
import { ChatWindow } from '../chat-window/chat-window';

@Component({
  selector: 'app-chat-list',
  imports: [ChatInput,ChatWindow],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.css',
})
export class ChatList {}
