import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="input-area">
      <input
        type="text"
        placeholder="Escribí un mensaje"
        [formControl]="messageControl"
        (keydown.enter)="send()"
      >
      <button (click)="send()">Enviar</button>
    </div>
  `,
  styleUrls: ['./chat-input.css']
})
export class ChatInput {

  @Output() messageSent = new EventEmitter<any>();
  messageControl = new FormControl('', Validators.required);

  send() {
    const text = this.messageControl.value?.trim();
    if (!text) return;

    this.messageSent.emit({ text }); // emitimos el mensaje al padre
    this.messageControl.reset();
  }
}