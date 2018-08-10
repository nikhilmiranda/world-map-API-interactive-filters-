import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionService } from './../app/region.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'World Map';

  public goBack() {
    window.history.back();
}
}

