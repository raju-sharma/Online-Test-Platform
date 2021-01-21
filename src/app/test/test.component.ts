import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
topic="linear Algebra";
  categories:String[]=[
    "linear Algebra",
    "Discrete Mathematics"
  ];
  constructor(private router:Router) { }

  ngOnInit() {
  }
  selectTopic(selectedOption)
  {
this.topic=selectedOption.target.value;

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
