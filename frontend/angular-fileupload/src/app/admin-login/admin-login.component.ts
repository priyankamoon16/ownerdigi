import { Component } from '@angular/core';
import { loginModel } from './admin-login';
import { AuthServices } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})


export class AdminLoginComponent {
    public model: loginModel;
    showLoginWarningMessage: boolean = false;
    returnUrl: string = '';

    constructor(
        private auth: AuthServices,
        private router: Router,
        private toastr: ToastrService,
        private route: ActivatedRoute) {
        this.model = new loginModel();
    }


    ngOnInit() {
        if (this.auth.validateUserTocken()) {
            //update your logic accordingly
            //this will trigger while user clicks on back button,
            //before naviagting to login page
            this.toastr.error('You will be logged out');
        }
        //this.auth.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/uploadproperty';
    }

    login() {
        this.showLoginWarningMessage = false;
        if (this.auth.validateUserDetails(this.model)) {
            this.auth.setTocken();
            //this.router.navigate(['/uploadfile']);
            this.router.navigate([this.returnUrl]);
            //this.alreadyLogin = false;

        } else {
            console.log('Invalid credentials');
            this.showLoginWarningMessage = true;
        }

    }

}

