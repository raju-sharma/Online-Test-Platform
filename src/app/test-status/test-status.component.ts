import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Question} from '../models/question';
import { McqService } from '../services/mcq.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-test-status',
  templateUrl: './test-status.component.html',
  styleUrls: ['./test-status.component.css']
})
export class TestStatusComponent implements OnInit {
  linear_Algebra:Question[]=[];
  question_number:Number[]=[1,2,3,4,5,6,7,8,9,10];
  received:String;
  answer_attempted = new Array();
  correctanswer=new Array();
  marks1=0;
  marks2=0;
  total_attempted=0;
  rightanswer1=0;
  rightanswer2=0;
  wronganswer1=0;
  wronganswer2=0;
  notanswer1=5;
  notanswer2=5;
  totalmarks=0;
  totalrightanswer=0;
  totalwronganswer=0;
  totalnotanswer=10;
  reviewanswer=false;
 temp;

  constructor(private route:ActivatedRoute,
    private mcq : McqService,
   private router:Router) 
  { 
    
  }

  ngOnInit() {
    this.linear_Algebra=this.mcq.getAllTask();
   this.received=this.route.snapshot.paramMap.get('x');
   this.answer_attempted = this.received.split(',');
  this.perform();
  }
  perform(){
    var x;
  
    
    for(x in this.linear_Algebra){
      
       this.temp=(this.linear_Algebra[x].correct_answer);
       this.temp=this.temp%1616161;
       this.correctanswer[x]=this.temp;
  if(this.answer_attempted[x]==this.temp)
  {
    
   if(x<5){
     this.rightanswer1++;
    this.notanswer1--;
   this.marks1=this.marks1+1;
   }
   else
   {
     this.rightanswer2++;
    this.notanswer2--;
    this.marks2=this.marks2+2;
   }
  }
  else if(this.answer_attempted[x]!=-1)
  {
    if(x<5){
     this.notanswer1--;
      this.wronganswer1++
      this.marks1=this.marks1-0.33;
      }
      else
      {
      this.notanswer2--;
        this.wronganswer2++
       this.marks2=this.marks2-0.66;
      }
  }
  else
  {
    
  }
  
    } 
   this.marks1= Math.round(this.marks1 * 100) / 100
    this.marks2=Math.round(this.marks2 * 100) / 100
    this.totalrightanswer=this.rightanswer1+this.rightanswer2;
    this.totalnotanswer=this.notanswer1+this.notanswer2;
    this.totalwronganswer=this.wronganswer1+this.wronganswer2;
     this.totalmarks=this.marks1+this.marks2;
     
   
}
reviewPaper()
{
  this.reviewanswer=true;
}
Back()
{
  this.reviewanswer=false; 
}
logout()
{
  var ask=confirm("Do you want to logout?")
  if(ask)
  {
    this.router.navigate(['/login-form']);
  }
}
}
