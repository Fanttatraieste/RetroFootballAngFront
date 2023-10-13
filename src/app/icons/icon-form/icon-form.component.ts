import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterService } from 'src/app/_services/formOptions.service';

@Component({
  selector: 'app-icon-form',
  templateUrl: './icon-form.component.html',
  styleUrls: ['./icon-form.component.css'],
})
export class IconFormComponent {
  countryFilter: any[];
  sortFilter: any[];
  positionFilter: any[];
  trophyFilter: any[];
  queryForm: FormGroup;

  constructor(filterSvr: FilterService) {
    this.countryFilter = filterSvr.getCountryFilter();
    this.sortFilter = filterSvr.getSortFilter();
    this.positionFilter = filterSvr.getPositionFilter();
    this.trophyFilter = filterSvr.getTrophyFilter();

    this.queryForm = new FormGroup({
      trophy: new FormControl(''),
      country: new FormControl(''),
      position: new FormControl(''),
      sort: new FormControl(''),
    });
  }
}
