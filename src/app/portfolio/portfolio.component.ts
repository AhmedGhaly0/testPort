import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  myimg:string = "../../assets/portfolio1.jpeg"
  myimg2:string = "../../assets/portfolio2.jpeg"



  ngOnInit(): void {
  }

}
