import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from './user.service';
import { Country } from '../view-models/country';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Globals } from './global';

@Injectable()
export class AppDataService {
  private _countriesUrl = "/assets/country.json";
  private countries : Array<Country>;

  constructor(private _http: HttpClient, private userService: UserService, 
    private global: Globals) {
  }

  createCountry(vm: Country) : Observable<any> {
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Unable to create country'));
    let id = 0;
    this.countries.forEach(c => { if (c.id >= id) id = c.id+1 });
    vm.id = id;
    this.countries.push(vm);
    return Observable.of(vm);
  }

  deleteCountry(id: number) : Observable<any> {
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Delete error.'));
    return Observable.of({}).delay(2000)
     .do(e => this.countries.splice(this.countries.findIndex(c => c.id == id), 1));
  }

  getCountries() : Observable<Country[]> {
   // return Observable.of(this.countries);   
    var countries =  this._http.get<Country[]>(this._countriesUrl)                
                .catch(this.handleError);
 
    return countries;
  }

  private handleError(err: HttpErrorResponse)
  {
      console.log(err.message);
      return Observable.throw(err.message);
  }

  getCountry(id: number) : Observable<Country> {
    this.countries = this.global.countriesList;
    var country = this.countries.find(c => c.id == id);
    return Observable.of(country);
  }

  updateCountry(updatedCountry: Country) : Observable<any> {
   console.log("update: " + this.global.countriesList) ;
   this.countries = this.global.countriesList;
    var country = this.countries.find(c => c.id == updatedCountry.id);
    Object.assign(country, updatedCountry);
    return Observable.of(country).delay(2000);
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw(''));
    
  }
  
}
