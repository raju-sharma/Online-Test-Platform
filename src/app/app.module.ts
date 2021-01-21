import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LinearAlgebraComponent } from './linear-algebra/linear-algebra.component';
import { DiscreteMathematicsComponent } from './discrete-mathematics/discrete-mathematics.component';
import { TestService } from './services/test.service';
import { CustomSearchPipe } from './pipes/custom-search.pipe';
import { AttemptTestComponent } from './attempt-test/attempt-test.component';
import { McqService } from './services/mcq.service';
import { TestStatusComponent } from './test-status/test-status.component';
import {Routes, RouterModule} from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';

const routes:Routes =[
 {path:'',redirectTo:'/login-form',pathMatch:'full' },
 { path : 'login-form',component : LoginFormComponent },
{ path : 'test',component : TestComponent },
 { path : 'attempt-test',component : AttemptTestComponent },
{ path : 'test-status', component: TestStatusComponent}
 ];
@NgModule({
  declarations: [
    AppComponent,
     TestComponent,
    LinearAlgebraComponent,
    DiscreteMathematicsComponent,
    CustomSearchPipe,
    AttemptTestComponent,
    TestStatusComponent,
    LoginFormComponent
  ],
 
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TestService,McqService],
  bootstrap: [AppComponent]
})

export class AppModule { }
