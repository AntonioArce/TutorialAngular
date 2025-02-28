import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'Ezavalar';
  isLoggedIn = false; // <- Funciona como un state
  favGame = '';

  getFavorite( gameName: string){
    this.favGame = gameName
  }

  greet(){
    alert('Hola!!!!!!!!');
  }

  logUser(){

  }
}
