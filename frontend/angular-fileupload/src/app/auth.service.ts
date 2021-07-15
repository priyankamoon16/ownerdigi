import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ErrorHandlerService } from './services/error-handler.service';

@Injectable()

export class AuthServices {
    userData: Array<{}>;
    tocken: Number = 0;
    alreadyLogin: boolean = true;
    tockenDetails: String;
    data: Array<{}>;
    public errorMessage: string = '';

    // API url
    baseApiUrl = "http://127.0.0.1:8000/login/";

    constructor(private router: Router,private http:HttpClient,private toastr: ToastrService,private errorHandler: ErrorHandlerService) {
        this.userData = [{
            emailId: 'admin', password: 'admin@123'
        }]
    }
    setTocken() {

        this.tocken = new Date().getTime();
        localStorage.setItem('tocken', JSON.stringify(this.tocken));
         // Create form data
         const formData = new FormData();

        // Store form name as "file" with file data
        formData.append("username", "priyanka");
        formData.append("password", "admin@123");

        // Make http post request over api
        // with formData as req
        this.http.post<any>(this.baseApiUrl, formData).subscribe((data) => {this.displaydata(data)},
        (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
        });
    }
    validateUserTocken() {
        this.tockenDetails = localStorage.getItem('token');
        //let _tocken = JSON.parse
        if (this.tockenDetails != null) {
            return true;
        } else {
            return false;
        }

    }

    //it should be from backend
    validateUserDetails(user) {
        let _userList = this.userData;
        for (var i = 0; i < _userList.length; i++) {
            if (user.emailId.toLowerCase() == _userList[i]['emailId'].toLowerCase() && user.password == _userList[i]['password']) {
                return true;
            }
        }
    }

    logout() {
        localStorage.clear();
        this.toastr.success('You have been logged out successfully!!!');
    }

  displaydata(data){
  console.log(data)
  localStorage.setItem('token', data['token']);
  console.log("token---get------",data['token'])
  this.toastr.success('Login Successful!!!');
  }

}
