import { Component, OnInit } from '@angular/core';
import { SponsorsService } from 'src/app/services/sponsors.service';

@Component({
  selector: 'app-sponsors-list',
  templateUrl: './sponsors-list.component.html',
  styleUrls: ['./sponsors-list.component.scss']
})
export class SponsorsListComponent implements OnInit {

  public sponsorsData: any = [];

  constructor() {}

  ngOnInit(): void {
    this.sponsorsData = SponsorsService.getSponsors();
  }

}
