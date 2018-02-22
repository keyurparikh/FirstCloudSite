import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Country } from '../view-models/Country';

@Component({
  selector: 'app-country-maint',
  templateUrl: './country-maint.component.html',
  styleUrls: ['./country-maint.component.css']
})
export class CountryMaintComponent {

  filterCountries: Array<Country>;
  countries : Array<Country>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;
 
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value:string) {
    this._listFilter = value;
    this.filterCountries = this.listFilter ? this.performFilter(this.listFilter) : this.countries;
  }

  constructor(private dataService: AppDataService,
              private router: Router) { 
    dataService.getCountries().subscribe((data) => this.countries = data);
    this.filterCountries = this.countries;
    this.listFilter = "Australia";
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  createCountry() {
    this.router.navigate(['/authenticated/country-detail', 0, 'create']);
  }

  deleteCountry(id: number) {
    this.isDeleting = true;
    this.dataService.deleteCountry(id).subscribe(
      c => this.cancelDelete(),
      err => { this.deleteError = err; this.isDeleting = false; }
      );
  }

  deleteCountryQuestion(id:number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  editCountry(id: number) {
    this.router.navigate(['/authenticated/country-detail', id, 'edit']);
  }

  showCountryDetail(id: number) {
    this.router.navigate(['/authenticated/country-detail', id, 'details']);
  }

  performFilter(filterBy: string): Array<Country> {
    filterBy = filterBy.toLocaleLowerCase();
    return this.countries.filter(t => t.name.toLocaleLowerCase().indexOf(filterBy) !== -1 );
  }

}
