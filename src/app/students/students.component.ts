import { Component } from '@angular/core';
import { StudentsapiService } from '../shared/studentsapi.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { group } from '@angular/animations';
@Component({
  selector: 'app-students',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students:any;
  studentForm!:FormGroup ;
  constructor(private api: StudentsapiService, private builder: FormBuilder){}

  ngOnInit(){
    this.getStudent();
    this.studentForm=this.builder.group({
      id:[""],
      name:["", Validators.required],
      gender:[""],
      group:[""]
    })
  }

  getStudent(){
    this.api.getstudents$().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.students=res; 
      },
      error:(err:any)=>{console.log(err)}
    })
  }

  createStudent(){
    this.api.createStudent$(this.studentForm.value).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.studentForm.reset()
        this.getStudent()
      },
      error:(err:any)=>{console.log(err)}
    })
  }

  destroyStudent(id:number){
    this.api.destroyStudent$(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.getStudent()
      }
    }
    )
  }

}
