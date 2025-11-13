import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoresapiService {

  constructor(private http:HttpClient) { }
  getScores$(){
    const url='http://localhost:3000/scores'
    return this.http.get(url)
  }
  createScores$(scores:any){
    const url='http://localhost:3000/scores'
    return this.http.post(url,scores)
  }
  updateScores$(scores:any,id:number){
    const url='http://localhost:3000/scores/'+id
    return this.http.put(url,scores)
  }
  destroyScores$(id:number){
    const url='http://localhost:3000/scores/'+id
    return this.http.delete(url)
  }
}
