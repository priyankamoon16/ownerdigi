import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPropertyDetailComponent } from './view-property-detail/view-property-detail.component';
import { UploadPropertyDetailComponent } from './upload-property-detail/upload-property-detail.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ThreesixtyviewComponent } from './threesixtyview/threesixtyview.component';


import { InternalServerComponent } from './internal-server/internal-server.component';
import { AuthGuardService } from './authguard.guard';


const routes: Routes = [{
  path: '',
  component: ViewPropertyDetailComponent
},
{
  path: 'uploadproperty',
  component: UploadPropertyDetailComponent

},
{
  path: 'administrator',
  component: AdminLoginComponent
},
{
  path: 'propertydetail',
  component: ThreesixtyviewComponent
},

  { path: '500', component: InternalServerComponent },
  { path: "**", redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
