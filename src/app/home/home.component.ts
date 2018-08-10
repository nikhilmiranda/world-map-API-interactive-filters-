import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private countryName;
  public countryList = [];

  constructor(private RegionService: RegionService, public route: ActivatedRoute, public router: Router) { console.log("home con"); }

  ngOnInit() {
    this.RegionService.getAllCountries_Data().subscribe(data => this.countryList = data);
    let currentName = this.route.snapshot.paramMap.get('name');
    console.log("home ngon");
    this.countryName = currentName;
  }

  public onSelectRegion(region) {
    this.router.navigate(['/countryView', region]);
    console.log(region);
  }

}
