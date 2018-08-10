import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { RegionService } from './../region.service';

@Component({
  selector: 'app-countryview',
  templateUrl: './currency-filter.component.html',
  styleUrls: ['./currency-filter.component.css']
})
export class CurrencyFilterComponent implements OnInit {
  public countryList = [];
  public currencyName;

  constructor(private RegionService: RegionService, private router: Router, public route: ActivatedRoute) { console.log("currency filter con"); }

  ngOnInit() {
    this.RegionService.getAllCountries_Data().subscribe(data => this.countryList = data);
    console.log("currency filert ngon");
    let currentName = this.route.snapshot.paramMap.get('curr');
    this.currencyName = currentName;
  }

  public onSelectCountry(country) {
    this.router.navigate(['/viewSingleCountry', country.name]);
  }
}
