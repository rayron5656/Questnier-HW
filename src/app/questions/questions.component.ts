
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



  constructor() { }

  ngOnInit(): void {
  }

  handleSubmitQuestions(Form:any){
    if (Form.name === null || Form.name === '' || Form.name === ' ') {
      alert('please fill out your name')
    }
    else{
      this.myResult.name = Form.name;
      this.myResult.score = 50;
      this.myResult.isDone = true;
      console.log(this.myResult);
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

}
