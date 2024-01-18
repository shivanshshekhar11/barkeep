import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../cocktail.model';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cocktails$: Observable<Cocktail[]> = new Observable<Cocktail[]>();

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktails$ = this.cocktailService.listByFirstLetter('s');
  }
}
