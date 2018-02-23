import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();
  startWidth: number;
  constructor() { }

  ngOnInit() {
  }

  onClick() : void {
    console.log(`${this.rating}`)
    this.ratingClicked.emit(this.rating);
  }

  ngOnChanges() {
    
  }

}
