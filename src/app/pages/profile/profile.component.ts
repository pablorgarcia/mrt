import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DriversService } from '../../services/drivers.service';
import { DriverModel } from '../../models/driverModel';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public currentDriver: DriverModel | undefined;
  public socialClass: boolean | undefined;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService // TEST PARA LLAMAR A VIDEOS DESDE EL PROFILE
    ) {}

  ngOnInit(): void {
    const drivers: DriverModel[] = DriversService.getDrivers();
    this.route.params.subscribe((params: Params) => {
      this.currentDriver = drivers.find(driver => driver.urlProfile === params.id);
    });
    if (this.currentDriver) {
      if (this.currentDriver.twitter && this.currentDriver.youtube) { this.socialClass = true; }
      else { this.socialClass = false; }
    }

    // TEST PARA LLAMAR A VIDEOS DESDE EL PROFILE
    this.videoService.getYoutubeList().subscribe(data => console.log(data));
  }

  goToLink(url: string): void {
    window.open('https://' + url + '.com/' + this.currentDriver?.twitter, '_blank');
  }

}
