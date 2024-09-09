import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
      <h1>Los juegos de {{username}}</h1>
      <ul>
        @for( game of games; track game.id ){
          <li (click)="fav(game.name)">{{game.name}}</li>
        }
      </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  //@Input() isLoggedIn = false;

  @Output() addFavoriteEvent = new EventEmitter<string>();
  fav( gameName: string ){
    this.addFavoriteEvent.emit(gameName)
  }
  games = [
    {
      id: 1,
      name: 'Dark Souls'
    },
    {
      id: 2,
      name: 'BloodBorne'
    },
    {
      id: 3,
      name: 'Smash Ultimate'
    },
    {
      id: 4,
      name: 'Sekiro'
    }
  ]
}
