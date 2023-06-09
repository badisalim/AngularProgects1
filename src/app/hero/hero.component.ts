import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() selectedHero: Hero;
  constructor() { }

  ngOnInit() { }
}
