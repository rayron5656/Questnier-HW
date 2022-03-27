
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'

interface result{
  name:string;
  score:number;
  isDone:boolean
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})



export class QuestionsComponent implements OnInit {

  firstQ:boolean = false;
  secQ:boolean = false;
  thirdQ:boolean = false;

  

  petpic:number = 0;
  icepic:number = 0;
  sportpic:number = 0;
  counter:number = 0;

  myResult:result = {name:'',score:0,isDone:false};
  
  readonly RESULLT_KEY = 'result';


  constructor() { }

  ngOnInit(): void {
    let savedTasks = localStorage.getItem(this.RESULLT_KEY);
    if (savedTasks != null) {
      this.myResult = JSON.parse(savedTasks);
    }
  }

  handleSubmitQuestions(Form:any){
    if (Form.name === null || Form.name === '' || Form.name === ' ') {
      alert('please fill out your name')
    }
    else{
      this.myResult.name = Form.name;
      this.myResult.score = this.setScore();
      this.myResult.isDone = true;
      console.log(this.myResult);
      console.log(Form);
      localStorage.setItem('result',JSON.stringify(this.myResult));

    }
  }

  changePetPic(num:number){
    if (this.petpic != num) {
      this.petpic = num;
     
    }
    this.firstQ = true;
    
  }

  changeIcePic(num:number){
    if (this.icepic != num) {
      this.icepic = num;
      
    }
    this.secQ = true;

  }

  changeSportPic(num:number){
    if (this.sportpic != num) {
      this.sportpic = num;
      
    }
    this.thirdQ = true;
    

  }

  setScore():number{
    let score:Number = this.petpic + this.icepic + this.sportpic;
    switch (score) {
      case 3:
          return 100;
        
        case 4:
          return 85;
        
        case 5:
          return 70;
        
        case 6:
          return 55;
        
        case 7:
          return 40;
        
        case 8:
          return 25;
        
        case 9:
          return 10;
        default:
        return 50;
    }

  }

}
