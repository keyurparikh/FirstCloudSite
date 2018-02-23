// globals.ts
import { Injectable } from '@angular/core';
import { Country } from '../view-models/country';

@Injectable()
export class Globals {
    public countriesList : Array<Country>;
    
}