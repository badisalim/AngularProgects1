import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from './hero';

import { HeroesService } from './heroes.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Array<Hero>>;
  selectedHero: Hero;

  constructor(private heroService: HeroesService) {}

  ngOnInit() {
    this.heroes$ = this.heroService.getHeroes();
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
