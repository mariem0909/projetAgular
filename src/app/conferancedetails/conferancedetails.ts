import { Component, input } from '@angular/core';

@Component({
  selector: 'app-conference-details',
  imports: [],
  templateUrl: './conferancedetails.html',
  styleUrl: './conferancedetails.css',
})
export class ConferenceDetails {
  conference = input<any>();
}