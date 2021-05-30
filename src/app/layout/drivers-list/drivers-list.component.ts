import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';
import { DriversService } from '../../services/drivers.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {

  data: any = [];
  currentUrl: string = '';

  constructor() {}

  ngOnInit(): void {
    // Cogemos los datos de los pilotos con el Servicio y los guardamos en la Clase
    this.data = DriversService.getDrivers();
    console.log('DRIVER LIST - datas', this.data)

    this.currentUrl = UrlService.getCurrentUrl();
    console.log('Servicio URL desde DRIVER LIST', this.currentUrl)
  }

}
