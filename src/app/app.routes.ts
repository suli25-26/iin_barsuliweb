import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { ScoresComponent } from './scores/scores.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"students",component:StudentsComponent},
    {path:"scores",component:ScoresComponent},
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent}
];
