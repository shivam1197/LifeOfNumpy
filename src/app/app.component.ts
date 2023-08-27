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
  responseData_AccessArray: any = {}
  responseData_Access2DArray: any = {}
  responseData_Access3DArray: any = {}
  responseData_AccessNegativeIndexing: any = {}
  responseData_Arrayslicing: any = {}
  responseData_ArraySlicingStep: any = {}
  responseData_Slicing2DArray: any = {}
  responseData_ArrayWithDefinedDataTypes: any = {}
  responseData_typeConversionArray: any = {}

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
    });
  }

  arrayAccess(){
    this.http.get('http://localhost:5000/api/AccessArray').subscribe((data:any) =>
    {this.responseData_AccessArray = data});
  }

  Access2DArray(){
    this.http.get('http://localhost:5000/api/Access2DArray').subscribe((data:any) => {
      this.responseData_Access2DArray = data
    });
  }

  Access3DArray(){
    this.http.get('http://localhost:5000/api/Access3DArray').subscribe((data:any) => {
      this.responseData_Access3DArray = data
    });
  }

  ArrayNegativeIndexing(){
    this.http.get('http://localhost:5000/api/NegativeIndexing').subscribe((data:any) => {
      this.responseData_AccessNegativeIndexing = data
    });
  }

  Arrayslicing(){
    this.http.get('http://localhost:5000/api/Arrayslicing').subscribe((data:any) => {
        this.responseData_Arrayslicing = data
    });
  }
  ArraySlicingStep(){
    this.http.get('http://localhost:5000/api/ArraySlicingStep').subscribe((data:any) => {
      this.responseData_ArraySlicingStep = data
    });
  }

  Slicing2DArray(){
    this.http.get('http://localhost:5000/api/Slicing2DArray').subscribe((data:any) => {
      this.responseData_Slicing2DArray = data
    });
  }

  ArraywithDefinedDataType(){
    this.http.get('http://localhost:5000/api/ArraywithDefinedDataType').subscribe((data:any) => {
      this.responseData_ArrayWithDefinedDataTypes = data;
    });
  }

  typeConvertionArray(){
    this.http.get('http://localhost:5000/api/typeConvertionArray').subscribe((data:any) => {
      this.responseData_typeConversionArray = data;
    });
  }
}
