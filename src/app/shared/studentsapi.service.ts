import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsapiService {

  constructor(private http:HttpClient) { }
  getstudents$(){
    const url='http://localhost:3000/students'
    return this.http.get(url)
  }
  createStudent$(student:any){
    const url='http://localhost:3000/students'
    return this.http.post(url,student)
  }
  updateStudent$(student:any,id:number){
    const url='http://localhost:3000/students/'+id
    return this.http.put(url,student)
  }
  destroyStudent$(id:number){
    const url='http://localhost:3000/students/'+id
    return this.http.delete(url)
  }
}
