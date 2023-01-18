import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HousingLocation } from '../../interfaces/housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.scss']
})
export class HousingListComponent {
  @Input() locationList: HousingLocation[] = []
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>()

  results: HousingLocation[] = []

  searchHousingLocations(searchText: string) {
    if (!searchText) return
    this.results = this.locationList.filter(
      (location: HousingLocation) =>
        location.city.toLowerCase().includes(searchText.toLowerCase())
    )
  }
  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location)
  }
}
