import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import {Task} from '../models/task';


@Component({
  selector: 'app-linear-algebra',
  templateUrl: './linear-algebra.component.html',
  styleUrls: ['./linear-algebra.component.css']
})
export class LinearAlgebraComponent implements OnInit {
  linear_Algebra:Task[]=[];
  marks:Number;
  number_of_questions:Number;
  query:String=''
   linear_Syllabus:String="";
  flag:Boolean=false;
  Setindex:Number=-1;
  Syllabus:String[]=[];
  
  constructor(private test:TestService) { }
 
  ngOnInit() {
    this.linear_Algebra =this.test.getLinearAlgebraTasks();
    this.number_of_questions=10;
    this.marks=15;
   this.Syllabus =["determinant","matrix","eigen value vector","System of equation"];
  }
  syllabus(index)
  {
    this.linear_Syllabus=this.Syllabus[index];
    this.Setindex=index;
    this.flag=true;
     }
     setSpan(index)
     {
       this.flag=false;
       
     }
  }


