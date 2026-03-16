import { Component } from '@angular/core';
import { ChatWindow } from '../../components/chat-window/chat-window';
import { ChatList } from '../../components/chat-list/chat-list';


@Component({
  selector: 'app-chats',
  imports: [ChatWindow,ChatList],
  templateUrl: './chats.html',
  styleUrl: './chats.css',
})
export class Chats {}
