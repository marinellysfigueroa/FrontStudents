import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL='http://127.0.0.1:8080/students';

  constructor(private http:HttpClient) { }

  getStudentList(): Observable<any>{
    return this.http.get(this.baseURL);

  }
  createStudent(student: object): Observable<object> {  
    return this.http.post(this.baseURL, student);  
  }  

  deleteStudent(id: number): Observable<any> {  
    return this.http.delete(this.baseURL+'/'+id, { responseType: 'text' });  
  }  

  getStudent(id: number): Observable<Object> {  
    return this.http.get(this.baseURL+'/'+id);  
  }  

  updateStudent(id: number, value: any): Observable<Object> {  
    return this.http.put(this.baseURL+'/'+id, value);  
  }  

}
