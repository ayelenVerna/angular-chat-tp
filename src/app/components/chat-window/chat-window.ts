import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatInput } from '../chat-input/chat-input';
import { ChatMessage } from '../chat-message/chat-message';

@Component({
  selector: 'app-chat-window',
  standalone: true,
  imports: [CommonModule, ChatInput, ChatMessage],
  templateUrl: './chat-window.html',
  styleUrls: ['./chat-window.css']
})
export class ChatWindow implements AfterViewChecked {

  @Input() chat: any; // chat seleccionado
  @Output() messageSent = new EventEmitter<any>(); // emite mensajes al padre

  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  // Se llama desde chat-input
  addMessage(message: any) {
    this.messageSent.emit(message); // lo envía al componente padre Chats
  }

  private scrollToBottom() {
    try {
      if (this.messagesContainer)
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch {}
  }
}
