import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsapiService {
  url='http://localhost:8000/api/students'

  constructor(private http:HttpClient) { }
  getstudents$(){
    
    return this.http.get(this.url)
  }
  createStudent$(student:any){
    
    return this.http.post(this.url,student)
  }
  updateStudent$(student:any,id:number){
    const url=this.url+"/"+id
    return this.http.put(url,student)
  }
  destroyStudent$(id:number){
    const url=this.url+"/"+id
    return this.http.delete(url)
  }
}
