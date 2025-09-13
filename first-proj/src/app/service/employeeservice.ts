import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iemployee } from '../model/iemployee';

@Injectable({
  providedIn: 'root'
})
export class Employeeservice {
  base_url = 'http://localhost:3000/employees';
  constructor(private httpClient: HttpClient) { }

  getEmployees() {  
    return this.httpClient.get<Iemployee[]>(this.base_url);
  }
  postEmployeeData(empData:Iemployee) {   
    return this.httpClient.post<Iemployee>(this.base_url,empData);
  }
  getEmployeebyid(id: number){
    return this.httpClient.get<Iemployee>(`${this.base_url}/${id}`);
  }
  updateEmployee(id:number, iemployee:Iemployee){
    return this.httpClient.put<Iemployee>(`${this.base_url}/${id}`,iemployee);
  }
  deleteEmployee(id:number){    
    return this.httpClient.delete<Iemployee>(`${this.base_url}/${id}`);
  }
}