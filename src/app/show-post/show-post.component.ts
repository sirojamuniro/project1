import { Component, OnInit } from '@angular/core';
import { BusinessService } from '../business.service';
import Business from '../model/bussines_model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  show: Business[];
  constructor(private route: ActivatedRoute,
  ) { }

  show(data) {
    this.businessService.show(data).subscribe(response => {
      console.log('show', response);
      this.ngOnInit();
    })
  }


  ngOnInit() {
  }

}
