import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  html:string = "../../assets/images2.png"
  css:string = "../../assets/imagesx.png"
  js:string = "../../assets/imagessj.png"
  jquery:string = "../../assets/imagesjj.png"
  bootstrap:string = "../../assets/imagesboot.png"
  angular:string = "../../assets/images.png"
  media:string = "../../assets/th (3).jpg"
  git:string = "../../assets/download.png"
  github:string = "../../assets/download (1).png"


  ngOnInit(): void {
  }

}
