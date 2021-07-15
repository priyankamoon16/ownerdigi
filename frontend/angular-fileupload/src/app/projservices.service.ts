import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjservicesService {



// API url
baseApiUrl = "http://localhost:8000/api/v1/uploaddatagetprices";

//baseApiUrl = "https://file.io"

constructor(private http:HttpClient) { }



// Returns an observable
upload(file):Observable<any> {
    const myTokenDetails = localStorage.getItem('token');
    console.log('logged user token for post request----------------','Token '+ myTokenDetails);

    // Create form data
    const formData = new FormData();
    const headers = { 'Authorization': 'Token '+myTokenDetails,  }

    // Store form name as "file" with file data
    formData.append("stockfile", file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post<any>(this.baseApiUrl, formData, {headers})
}
}
