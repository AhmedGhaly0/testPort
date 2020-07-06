import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  imgMy:string = "../../assets/ghaly.png"
  imgLogo:string = "../../assets/web_logoo.png"  


  ngOnInit(): void {
  }

}
