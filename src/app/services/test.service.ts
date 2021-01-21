import { Injectable } from '@angular/core';
import {Task} from '../models/task';
@Injectable()
export class TestService {

  Algebra_tasks:Task[]= [
   {
 id:1, 
 title:'Linear Algebra1'
   },
   {
    id:2, 
    title:'Linear Algebra2'
      },
      {
       id:3, 
       title:'Linear Algebra3'
         } ,
         {
          id:4, 
          title:'Linear Algebra4'
            } 
  ];
  Discrete_tasks:Task[]= [
    {
  id:1, 
  title:'Discrete Mathematics1'
    },
    {
     id:2, 
     title:'Discrete Mathematics2'
       },
       {
        id:3, 
        title:'Discrete Mathematics3'
          } ,
          {
           id:4, 
           title:'Discrete Mathematics4'
             } 
   ];
  getLinearAlgebraTasks()
  {
    return this.Algebra_tasks;
  }

  getDiscreteMathsTasks()
  {
    return this.Discrete_tasks;
  }

  constructor() { }

}
