import {Transaction} from '../types';
import {transactionIcon} from './images';

export const events = [
  {
    id: '1',
    name: 'Lonavala',
    amount: 3000,
  },
  {
    id: '2',
    name: 'Pratham Visit',
    amount: 6000,
  },
  {
    id: '3',
    name: 'Pune Travel',
    amount: 3000,
  },
  {
    id: '4',
    name: 'Ghar Groceries',
    amount: 3000,
  },
];

export const transactions: Transaction[] = [
  {id: '1', name: 'Upwork', date: 'Today', amount: 850, icon: transactionIcon},
  {
    id: '2',
    name: 'Transfer',
    date: 'Yesterday',
    amount: -85,
    icon: transactionIcon,
  },
  {
    id: '3',
    name: 'Paypal',
    date: 'Jan 30, 2022',
    amount: 1406,
    icon: transactionIcon,
  },
  {
    id: '4',
    name: 'Youtube',
    date: 'Jan 16, 2022',
    amount: -11.99,
    icon: transactionIcon,
  },
  {
    id: '5',
    name: 'Youtube',
    date: 'Jan 16, 2022',
    amount: -11.99,
    icon: transactionIcon,
  },
  {
    id: '6',
    name: 'Youtube',
    date: 'Jan 16, 2022',
    amount: -11.99,
    icon: transactionIcon,
  },
  {
    id: '7',
    name: 'Youtube',
    date: 'Jan 16, 2022',
    amount: 30000,
    icon: transactionIcon,
  },
];

export const Bills: Transaction[] = [
  {
    id: '1',
    name: 'Rent',
    date: 'Aug 1, 2024',
    amount: -9500,
    icon: transactionIcon,
  },
  {
    id: '2',
    name: 'Electricity Bill',
    date: 'Aug 4, 2024',
    amount: -400,
    icon: transactionIcon,
  },
  {
    id: '2',
    name: 'Internet Bill',
    date: 'Aug 4, 2024',
    amount: -300,
    icon: transactionIcon,
  },
];
