import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent} from './add-student/add-student.component';
import { ListStudentComponent} from './list-student/list-student.component';

const routes: Routes = 
[
  {path:'',redirectTo:'view-student',pathMatch:'full'},
  {path:'view-student',component: ListStudentComponent},
  {path:'add-student',component: AddStudentComponent}
]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
