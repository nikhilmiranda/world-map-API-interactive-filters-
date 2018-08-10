import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { RegionService } from './../region.service';

@Component({
  selector: 'app-countryview',
  templateUrl: './countryview.component.html',
  styleUrls: ['./countryview.component.css']
})
export class CountryviewComponent implements OnInit {
  public countryList = [];
  public regionName;

  constructor(private RegionService: RegionService, private router: Router,public route: ActivatedRoute) { console.log("countryview con"); }

  ngOnInit() {
    this.RegionService.getAllCountries_Data().subscribe(data => this.countryList = data);
    console.log("countryview ngon");
    let currentName = this.route.snapshot.paramMap.get('region');
    this.regionName = currentName; 
  }

  public onSelectCountry(country) {
    this.router.navigate(['/viewSingleCountry',country.name]);
  }
}
