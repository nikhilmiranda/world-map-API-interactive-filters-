import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { regionFormat } from './region.interface';
import { currencyFormat} from './currency.interface';
@Injectable({
  providedIn: 'root'
})
export class RegionService {
  public url = 'https://restcountries.eu/rest/v2/all';
  constructor(private http: HttpClient) { console.log("Region service CONSTRUCTOR"); }

  public getAllCountries_Data(): Observable<regionFormat[]> { return this.incomingDataByRegion(); }

  private incomingDataByRegion() {
    let localData = this.http.get<any>(this.url);
    console.log(" region service data incoming ");
    return localData;
  }

 

  
}


