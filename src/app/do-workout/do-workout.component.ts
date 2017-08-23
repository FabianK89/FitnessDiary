import { Component, OnInit } from "@angular/core";
import { ExerciseSet } from "../model/exercise-set";


@Component({
  selector: "app-do-workout",
  templateUrl: "./do-workout.component.html",
  styleUrls: ["./do-workout.component.css"]
})
export class DoWorkoutComponent implements OnInit {
  exerciseStarted = false;
  exerciseSet: ExerciseSet;
  sets: ExerciseSet[] = new Array();

  constructor() {
  }

  ngOnInit() {
  }

  addSet(): void {
    this.exerciseSet = new ExerciseSet();
    this.exerciseSet.id = this.sets.length;

    this.sets.push(this.exerciseSet);
  }

  startExercise(): void {
    this.exerciseStarted = true;

    this.addSet();
  }

  isDisabled(): boolean {
    return this.exerciseStarted;
  }
}
