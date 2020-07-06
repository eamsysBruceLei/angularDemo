import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../services/person.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  username: string = "zhangsan";
  age: string = "123456";
  persons:any[]= null;
  constructor(public personService:PersonService) { }

  ngOnInit(): void {
    this.persons=this.personService.persons;
  }
  submit(username,age): void {
    this.personService.addPerson(username,age);
    this.persons=this.personService.persons;
    console.log(this.personService.persons);
    console.log(this.username);
  }

}
 