import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { detailsResolver } from './details.resolver';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';
import { RandomComponent } from './random/random.component';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    resolve: {
      cocktail: detailsResolver,
    },
  },
  {
    path: 'random',
    component: RandomComponent,
  },
  {
    path: 'ingredient/:name',
    component: IngredientDetailsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent,
    NotFoundComponent,
    IngredientDetailsComponent,
    RandomComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
