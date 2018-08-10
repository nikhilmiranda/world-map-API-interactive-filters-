import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { RegionService } from './../region.service';

@Component({
  selector: 'app-language-filter',
  templateUrl: './language-filter.component.html',
  styleUrls: ['./language-filter.component.css']
})
export class LanguageFilterComponent implements OnInit {

  public countryList = [];
  public languageName;
  constructor(private RegionService: RegionService, private router: Router, public route: ActivatedRoute) { console.log("language filter con"); }

  ngOnInit() {
    this.RegionService.getAllCountries_Data().subscribe(data => this.countryList = data);
    console.log("language filert ngon");
    let currentName = this.route.snapshot.paramMap.get('lang');
    this.languageName = currentName;
  }
  public onSelectCountry(country) {
    this.router.navigate(['/viewSingleCountry', country.name]);
  }
}
