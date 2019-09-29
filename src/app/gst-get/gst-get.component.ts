import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import Business from '../model/bussines_model';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {
  Bisnis: Business[];
  constructor(private businessService: BusinessService) { }

  deleteBusiness(id) {
    this.businessService.deleteBusiness(id).subscribe(response => {
      console.log('deleted', response);
      this.ngOnInit();
    });


  }

  refresh() {
    location.reload();
  }
  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.businessService.getBusiness().subscribe((data: Business[]) => {
      this.Bisnis = data;
      console.log(this.Bisnis)
    });
  }
}
