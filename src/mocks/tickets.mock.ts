import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Casablanca',
    description: '',
    date: dateToday,
    student: 'Youssef',
    major: 'SI'
  },
  {
    title: 'SI5 in Berlin',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: 'GB'
  },
];
