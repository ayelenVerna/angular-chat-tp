import { Message } from './message';

export interface Chat {
  id: number;
  name: string;
  avatar: string;
  status: string;
  lastSeen?: string;
  messages: Message[];
}
