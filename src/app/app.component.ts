import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifeofNumpy';
  responseData_version: any = {}
  responseData_array: any = {}
  responseData_ZeroDarray: any = {}
  responseData_twoDarray: any = {}
  responseData_threeDarray: any = {}
  responseData_checkDimArray: any = {}
  responseData_HigherDimArray: any = {}


  constructor(private http: HttpClient){}

  ngOnInit(){}

  printVersion(){
    this.http.get('http://localhost:5000/api/version').subscribe((data:any) =>{
      this.responseData_version= data;
    });
  }

  numpyArray(){
    this.http.get('http://localhost:5000/api/numpyArray').subscribe((data:any) => {
      this.responseData_array= data;
    });
  }

  zeroDArray(){
    this.http.get('http://localhost:5000/api/0Darray').subscribe((data:any)=>{
      this.responseData_ZeroDarray = data
    });
  }

  twoDArray(){
    this.http.get("http://localhost:5000/api/twoDArray").subscribe((data:any)=>  {
      this.responseData_twoDarray = data
    });
  }

  threeDimArray(){
    this.http.get('http://localhost:5000/api/threeDarray').subscribe((data:any) => {
      this.responseData_threeDarray = data
    })
  }

  checkDimArray(){
    this.http.get('http://localhost:5000/api/checkDimArray').subscribe((data:any) => {
      this.responseData_checkDimArray = data
    })
  }

  higherDimArray(){
    this.http.get('http://localhost:5000/api/HigherDim').subscribe((data:any) => {
      this.responseData_HigherDimArray = data
    })
  }
}
