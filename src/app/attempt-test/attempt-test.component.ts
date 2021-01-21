import { Component, OnInit } from '@angular/core';
import { McqService } from '../services/mcq.service';
import {Question} from '../models/question';
import {Router} from '@angular/router'
@Component({
  selector: 'app-attempt-test',
  templateUrl: './attempt-test.component.html',
  styleUrls: ['./attempt-test.component.css']
 
})
export class AttemptTestComponent implements OnInit {
  linear_Algebra:Question[]=[];
  index_Number=0;
  question_Number=1;
  review_Flag:Boolean=false;
  question_Id;
  temp;
  answer_attempted:Number []=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
  button_id:Boolean[]=[false,false,false,false,false,
    ,false,false,false,false,false,,false,false,false,false,false,
    ,false,false,false,false,false,,false,false,false,false,false,
    ,false,false,false,false,false,,false,false,false,false,false,
    ,false,false,false,false,false]
  
  no_of_question_attempted=0;
  not_attempted1;
  attempted1;
  not_attempted2;
  attempted2;
  total_attempted;
  total_notattempted;
  rightanswer1;
  rightanswer2;
  wronganswer1;
  wronganswer2;
  notanswer1;
  notanswer2;
  totalmarks;
  totalrightanswer;
  totalwronganswer;
  totalnotanswer;
  
  marks1;
  marks2;
 constructor( private mcq : McqService,
             private router :Router ) { }

  ngOnInit() {
    this.linear_Algebra=this.mcq.getAllTask();
  
  }
nextQuestion()
{
  this.index_Number++;
this.question_Number=this.index_Number+1;
  if(this.index_Number==this.linear_Algebra.length)
{
  this.index_Number=0;
  this.question_Number=1;
}
}
previousQuestion()
{
  this.index_Number--;
  this.question_Number=this.index_Number+1;
  if(this.index_Number==-1)
{
  this.index_Number=this.linear_Algebra.length-1;
  this.question_Number=this.linear_Algebra.length;
}
}
updateTable(id,option_id)
{
 
 this.button_id[option_id]=true
 this.question_Id=id%10007;
 this.answer_attempted[this.question_Id]=option_id;
 }
Clear(id)
{
  this.question_Id=id%10007;
  let x=this.question_Id*4;
  this.answer_attempted[this.question_Id]=-1;
  if(this.answer_attempted[this.question_Id]==-1)
  {
    for(var i=x;i<4;i++)
    {
      this.button_id[i]=false;
    }
  }
}
reviewTest()
{
  
  this.review_Flag=true;
  this.not_attempted1=5;
  this.attempted1=0;
 this.not_attempted2=5;
 this.attempted2=0;
 this.total_attempted=0;
 this.total_notattempted=10
  for(var x=0;x<this.linear_Algebra.length;x++)
  {
    if(this.answer_attempted[x]!==-1)
    {
      if(x<5)
      {
this.not_attempted1--;
this.attempted1++;
      }
      else
      {
        this.not_attempted2--;
this.attempted2++;
      }
    }
  }
this.total_attempted=this.attempted1+this.attempted2;
this.total_notattempted=10-this.total_attempted
}


resumeTest()
{
  this.review_Flag=false;
}
logout()
{
  var ask=confirm("Do you want to terminate test?")
  if(ask)
  {
    this.router.navigate(['/test']);
  }
}
beforeReviewSubmitTest()
{
  var ask=confirm('Are you sure you want to submit it before reviewing?');
  if(ask)
  {
  this.router.navigate(['/test-status',{x:this.answer_attempted}]);
  }
}
submitTest()
{
  
   this.router.navigate(['/test-status',{x:this.answer_attempted}]);

}
}
