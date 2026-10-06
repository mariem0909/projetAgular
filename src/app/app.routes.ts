import { Routes } from '@angular/router';
import { Body } from './body/body';
import { ConferenceList } from './conferancelist/conferancelist';

export const routes: Routes = [
  { path: '', redirectTo: 'body', pathMatch: 'full' },
  { path: 'body', component: Body },
  { path: 'conferencelist', component: ConferenceList },
];
