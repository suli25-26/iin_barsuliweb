import { Component } from '@angular/core';
import { StudentsapiService } from '../shared/studentsapi.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
//import { group } from '@angular/animations';
import Swal from 'sweetalert2';
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
        this.students=res.data; 
      },
      error:(err:any)=>{console.log(err)}
    })
  }

  createStudent(){
    const newstudent ={
      name:this.studentForm.value.name,
      gender:this.studentForm.value.gender,
      group:this.studentForm.value.group,
    }
    this.api.createStudent$(newstudent).subscribe({
      next:(res:any)=>{
        if (res.success){
          Swal.fire({
            title: "Diák felvéve!",
            text: "Sikeres hozzáadás :)!",
            icon: "success"
          });
        } 
        else{
          Swal.fire({
            title: "Diák nem felvéve!",
            text: "Nem sikeres hozzáadás :(!",
            icon: "error"
            });
        }
        console.log(res)
        this.studentForm.reset()
        this.getStudent()
      },
      error:(err:any)=>{
        console.log(err)
        Swal.fire({
            title: "Diák nem felvéve!",
            text: "Nem sikeres hozzáadás :(!",
            icon: "error"
            });
      }
    })
  }

  startDestroyStudent(id:number){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.destroyStudent(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
   
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
