import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../cocktail.service';
import { Observable } from 'rxjs';
import { Cocktail } from '../cocktail.model';
import { delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  //cocktail$: Observable<Cocktail> = new Observable<Cocktail>();
  cocktail: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    /*this.cocktail$ = this.activatedRoute.params.pipe(
      //delay(2000),
      switchMap((params) => {
        const id = params['id'];

        return this.cocktailService.getById(id);
      })
    );*/

    this.activatedRoute.data.subscribe((data) => {
      this.cocktail = data['cocktail'];
    });
  }
}
