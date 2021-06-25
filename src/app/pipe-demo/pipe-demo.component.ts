import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  constructor() { }

  firstName:string = "royal"
  lastName :string ="EDUcatioN"
  num:number=12345.6789
  cur:number=12345.678
  todayDate = new Date()



  ngOnInit(): void {
  }

}
