import { Component, OnInit } from '@angular/core';
import { Heros } from '../heros';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  Lero = "A vingança do Homem Aranha";
  heros: Heros = {
    id: 1,
    name: 'Windstorm',

  };


  constructor() { }

  ngOnInit() {
    console.log(this.heroes)
  }

}





