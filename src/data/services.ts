import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'sim-card',
    title: 'SIM Card',
    description: 'Get connected immediately upon arrival with our pre-activated SIM cards, ensuring you have phone and internet access from day one.',
    icon: 'smartphone',
    isOptional: false
  },
  {
    id: 'pickup-dropoff',
    title: 'Pick-up/Drop-off',
    description: 'Seamless transportation from the airport to your accommodation, taking the stress out of your arrival in a new country.',
    icon: 'car',
    isOptional: false
  },
  {
    id: 'banking',
    title: 'Banking Services',
    description: 'Assistance with setting up a U.S. bank account, understanding the banking system, and managing your finances abroad.',
    icon: 'credit-card',
    isOptional: false
  },
  {
    id: 'accommodation',
    title: 'Accommodation Assistance',
    description: 'Help finding suitable housing options based on your preferences, budget, and proximity to your institution.',
    icon: 'home',
    isOptional: true
  },
  {
    id: 'travel-card',
    title: 'Travel Card',
    description: 'Get access to public transportation with pre-loaded travel cards to help you navigate your new city with ease.',
    icon: 'train',
    isOptional: true
  }
];