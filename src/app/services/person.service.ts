import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  persons:object[]=[{'username':'李思','age':20},{'username':'张三','age':30}];
  public getPersons(){
    return this.persons;
  }
  
  public addPerson(username,age){
    this.persons.push({'username':username,'age':age});
  }
}
