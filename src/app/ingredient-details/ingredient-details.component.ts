import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../cocktail.service';
import { delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.css'],
})
export class IngredientDetailsComponent implements OnInit {
  ingredient$: Observable<any> = new Observable<any>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    this.ingredient$ = this.activatedRoute.params.pipe(
      //delay(2000),
      switchMap((params) => {
        const name = params['name'];

        return this.cocktailService.getIngredientByName(name);
      })
    );
  }
}
