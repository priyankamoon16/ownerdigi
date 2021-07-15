import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPropertyDetailComponent } from './view-property-detail/view-property-detail.component';
import { UploadPropertyDetailComponent } from './upload-property-detail/upload-property-detail.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ThreesixtyviewComponent } from './threesixtyview/threesixtyview.component';
import { AuthGuardService } from './authguard.guard';
import { AuthServices } from './auth.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { ProjservicesService } from './projservices.service';
import { ThreesixtyviewService } from './threesixtyview.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewPropertyDetailComponent,
    UploadPropertyDetailComponent,
    AdminLoginComponent,
    ThreesixtyviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot(),

    FormsModule,

  ],
  exports:[FormsModule],
  providers: [AuthGuardService,AuthServices,ErrorHandlerService,ProjservicesService,ThreesixtyviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
