import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GstAddComponent } from './gst-add/gst-add.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { ShowPostComponent } from './show-post/show-post.component';
const routes = [{
  path: 'business/create',
  component: GstAddComponent
},
{
  path: 'business',
  component: GstGetComponent
},
{
  path: 'business/show',
  component: ShowPostComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
