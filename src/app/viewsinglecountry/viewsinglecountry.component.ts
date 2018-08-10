import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionService } from './../region.service';

@Component({
  selector: 'app-viewsinglecountry',
  templateUrl: './viewsinglecountry.component.html',
  styleUrls: ['./viewsinglecountry.component.css']
})
export class ViewsinglecountryComponent implements OnInit {

  public countryList = [];
  public countryName;
  constructor(public regionService: RegionService, public route: ActivatedRoute,private router: Router) { console.log("View Single country CUN"); }

  ngOnInit() {
    this.regionService.getAllCountries_Data().subscribe(data => this.countryList = data);
    console.log("View Single Country NGONINIT");
    let currentName = this.route.snapshot.paramMap.get('name');
    console.log(currentName);
    this.countryName = currentName;
    
  }

  public onSelectCurrency(curr) {
    this.router.navigate(['/currency',curr]);
  }

  public onSelectLanguage(lang) {
    this.router.navigate(['/language',lang]);
  }

}
