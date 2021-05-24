import { Component, OnInit } from '@angular/core';
import { DriversService } from '../../../services/drivers.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {

  datas: any = [];

  constructor() {}

  ngOnInit(): void {
    this.datas = DriversService.getDrivers();
    console.log('datas', this.datas)
  }

}
