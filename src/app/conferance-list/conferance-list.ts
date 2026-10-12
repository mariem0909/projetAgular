import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConferanceDetails } from '../conferance-details/conferance-details';

export interface Conference {
  name: string;
  date: string;
  location: string;
}

@Component({
  selector: 'app-conferance-list',
  imports: [ConferanceDetails],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConferanceList {
  conferances: Conference[] = [
    { name: 'Créer avec Angular', date: '15 novembre 2026', location: 'Tunis, Tunisie' },
    { name: 'Interfaces réactives', date: '22 novembre 2026', location: 'Sousse, Tunisie' },
    { name: 'Les bases de Vue.js', date: '3 décembre 2026', location: 'En ligne' },
  ];

  inc() {
    alert('Votre intérêt a bien été enregistré.');
  }
}
