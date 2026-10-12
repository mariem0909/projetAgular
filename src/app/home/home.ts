import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
 selector: 'app-home',
 imports: [FormsModule],
 templateUrl: './home.html',
 styleUrl: './home.css',
 changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
 nom = 'Nour';

 bonjour() {
   alert(`Bonjour ${this.nom} !`);
 }

 nom1 = 'Lina';
 students = ['Yasmine', 'Rania', 'Hiba', 'Salma', 'Ines'];
 students2 = [
   { name: 'Sami', age: 20 },
   { name: 'Younes', age: 21 },
   { name: 'Malak', age: 22 },
   { name: 'Maya', age: 23 },
   { name: 'Adam', age: 24 },
 ]

 count = 0;
 counts = signal(0);

 incrementSimple() {
   this.count++;
 }

 increment() {
   this.counts.update(v => v + 1);
 }
}
