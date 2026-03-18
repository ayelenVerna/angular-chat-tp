import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chat-input.html',
  styleUrls: ['./chat-input.css']
})
export class ChatInput {

  @Output() messageSent = new EventEmitter<any>();

  messageControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1)
  ]);

  sendMessage() {
    const text = this.messageControl.value?.trim();

    if (!text) return;

    this.messageSent.emit({ text });

    this.messageControl.reset();
  }
}