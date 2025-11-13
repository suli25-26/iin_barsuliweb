import { Component } from '@angular/core';
import { ScoresapiService } from '../shared/scoresapi.service';

@Component({
  selector: 'app-scores',
  standalone: true,
  imports: [],
  templateUrl: './scores.component.html',
  styleUrl: './scores.component.css'
})
export class ScoresComponent {
    scores:any;
    constructor(private api: ScoresapiService){}
  
    ngOnInit(){
      this.getScores()
    }
  
    getScores(){
      this.api.getScores$().subscribe({
        next:(res:any)=>{
          console.log(res)
          this.scores=res; 
        },
        error:(err:any)=>{console.log(err)}
      })
    }
}
