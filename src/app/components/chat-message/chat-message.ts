import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 IMPORTANTE

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [CommonModule], // 👈 AGREGAR ESTO
  templateUrl: './chat-message.html',
  styleUrls: ['./chat-message.css']
})
export class ChatMessage {
  @Input() message: any;
}