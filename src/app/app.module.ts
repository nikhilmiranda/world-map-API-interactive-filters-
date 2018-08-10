import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CountryviewComponent } from './countryview/countryview.component';
import { RegionService } from './region.service';
import { ViewsinglecountryComponent } from './viewsinglecountry/viewsinglecountry.component';
import { CurrencyFilterComponent } from './currency-filter/currency-filter.component';
import { LanguageFilterComponent } from './language-filter/language-filter.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryviewComponent,
    ViewsinglecountryComponent,
    CurrencyFilterComponent,
    LanguageFilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'continent', component: HomeComponent, pathMatch: 'full' },
      { path: 'countryView/:region', component: CountryviewComponent, pathMatch: 'full' },
      { path: 'viewSingleCountry/:name', component: ViewsinglecountryComponent },
      { path: 'currency/:curr', component: CurrencyFilterComponent },
      { path: 'language/:lang', component: LanguageFilterComponent },
      { path: '', redirectTo: 'continent', pathMatch: 'full' }
    ])
  ],
  providers: [RegionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
