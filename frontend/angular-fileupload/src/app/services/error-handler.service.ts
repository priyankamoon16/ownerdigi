import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  public errorMessage: string = "500 SERVER ERROR, CONTACT ADMINISTRATOR!!!!";

  constructor(private router: Router,private toastr: ToastrService) { }

  public handleError = (error: HttpErrorResponse) => {
    if(error.status === 500){
      this.handle500Error(error);
    }
    else if(error.status === 406){
      this.handle400Error(error)
    }
    else if(error.status === 404){
      this.handle404Error(error)
    }
    else if(error.status === 401 || error.status === 403) {
      this.handle401Error(error)
    }
     else if(error.status === 400){
      this.handle400Error(error)
    }
    else{
      this.handleOtherError(error);

    }
  }

  private handle500Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.toastr.error("Internal Sever error, Contact Administrator!!!!");
    this.router.navigate(['/500']);
   return throwError("Internal Sever error, Contact Administrator!!!!");
  }
   private handle406Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.toastr.error(error.error.msg);
    return throwError("406 Not Acceptable!!!");
  }

  private handle404Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.toastr.error("404 Page Not Found!!!!");
    this.router.navigate(['/404']);
    return throwError("404 Page Not Found!!!!");
  }

   private handle401Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.toastr.error(error.error.msg);
    this.router.navigate(['login']);
   return throwError(error.error.msg)
  }
   private handle400Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.toastr.error(error.error.msg);
    return throwError("400 Bad request!!!");
  }

  private handleOtherError = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    //TODO: this will be fixed later;
    this.toastr.error("An error occurred! Please check server running OR not!!");
    return throwError("An error occurred! Please Check Server Running OR Not!!");
  }

  private createErrorMessage = (error: HttpErrorResponse) => {
  console.log
    this.errorMessage = error.error ? error.error : error.statusText;
   // return error.error, error.error.msg
  }
}
