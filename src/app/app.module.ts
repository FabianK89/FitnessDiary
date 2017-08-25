import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { StartWorkoutComponent } from "./start-workout/start-workout.component";
import { DoWorkoutComponent } from "./do-workout/do-workout.component";
import { FormsModule } from "@angular/forms";
import { CreateWorkoutComponent } from "./create-workout/create-workout.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StartWorkoutComponent,
    DoWorkoutComponent,
    CreateWorkoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
