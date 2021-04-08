import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  public title: string;
  public subtitle: string;
  public email: string


  constructor(){
    
    this.title = "Martin Pegoraro";
    this.subtitle= "Desarrollador Web";
    this.email = "martinpegoraro@gmail.com";
   }

  ngOnInit(): void {
  }

}
