import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import {Task} from '../models/task';
@Component({
  selector: 'app-discrete-mathematics',
  templateUrl: './discrete-mathematics.component.html',
  styleUrls: ['./discrete-mathematics.component.css']
})
export class DiscreteMathematicsComponent implements OnInit {
  discrete_Maths:Task[]=[];
  marks:Number;
  number_of_questions:Number;
  query:String=''
  Syllabus:String[]=[];
  discrete_Syllabus:String="";
  flag:Boolean=false;
  Setindex:Number=-1;
 
  constructor(private test:TestService) { }

  ngOnInit() {
    this.discrete_Maths=this.test.getDiscreteMathsTasks();
    this.number_of_questions=10;
    this.marks=15;
   this.Syllabus =["proposition","graph","generating function","Sets, relation, function"];
  }
  syllabus(index)
  {
    this.discrete_Syllabus=this.Syllabus[index];
    this.Setindex=index;
    this.flag=true;
     }
     setSpan(index)
     {
       this.flag=false;
       
     }
}
