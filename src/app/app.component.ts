import { Component, OnInit } from '@angular/core';
import { user } from './user.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  users$:user[];
  constructor(private dataServices: DataService){}
  
  ngOnInit(){
    return this.dataServices.getUsers()
    .subscribe(data=> this.users$ = data)
  }
}
