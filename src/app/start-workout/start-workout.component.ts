import { Component, OnInit } from "@angular/core";

import { WorkoutService } from "../services/workout.service";
import { Workout } from "../model/workout";

@Component({
  selector: "app-start-workout",
  templateUrl: "./start-workout.component.html",
  styleUrls: ["./start-workout.component.css"],
  providers: [WorkoutService]
})
export class StartWorkoutComponent implements OnInit {
  selectedID: string;
  workouts: Workout[];

  constructor(private workoutService: WorkoutService) {
  }

  ngOnInit(): void {
    this.getWorkouts();
  }

  getWorkouts(): void {
    this.workoutService.getWorkouts().then(workouts => this.workouts = workouts);
  }
}
