import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../cocktail.model';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent implements OnInit {
  cocktail$: Observable<Cocktail> = new Observable<Cocktail>();

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktail$ = this.cocktailService.getRandom();
  }
}
