import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  a:any 
  b:any 
  c:number=0
  
  
  //variable 
  constructor() { 
    console.log("constructor...")
    
  }

  ngOnInit(): void {
    console.log("ngOnInit");

  }

  add(){
    console.log("add() called...")
    console.log("a  = > ",this.a)
    console.log("b  = > ",this.b)
    this.c  = this.a + this.b  
  }


}
