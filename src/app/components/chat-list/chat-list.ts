import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  standalone: true,
  templateUrl: './chat-list.html',
  styleUrls: ['./chat-list.css']
})
export class ChatList {

  // Recibe los chats desde el componente padre
  @Input() chats: any[] = [];

  // Emite el chat seleccionado al componente padre
  @Output() chatSelected = new EventEmitter<any>();

}