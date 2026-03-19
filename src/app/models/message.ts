export interface Message {
  text: string;
  from: string; // 'me' o 'other'
  date: Date;
}