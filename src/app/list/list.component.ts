import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../cocktail.model';
import { CocktailService } from '../cocktail.service';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cocktails$: Observable<Cocktail[]> = new Observable<Cocktail[]>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    this.cocktails$ = this.activatedRoute.params.pipe(
      switchMap((params) => {
        const chr = params['char'];
        return this.cocktailService.listByFirstLetter(chr);
      })
    );
  }
}
