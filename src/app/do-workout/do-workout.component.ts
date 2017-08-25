import { Component, OnDestroy, OnInit } from "@angular/core";
import { ExerciseSet } from "../model/exercise-set";
import { ActivatedRoute } from "@angular/router";
import { WorkoutService } from "../services/workout.service";
import { Workout } from "../model/workout";


@Component({
  selector: "app-do-workout",
  templateUrl: "./do-workout.component.html",
  styleUrls: ["./do-workout.component.css"],
  providers: [WorkoutService]
})
export class DoWorkoutComponent implements OnInit, OnDestroy {
  private exerciseStarted;
  private exerciseSet: ExerciseSet;
  private sets: ExerciseSet[];
  private workout: Workout;
  private workoutId: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private workoutService: WorkoutService) {
    this.exerciseStarted = false;
    this.sets = new Array();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => this.workoutId = params["workoutId"]);
    this.workoutService.getWorkoutForID(this.workoutId).then(workout => this.workout = workout);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  addSet(): void {
    this.exerciseSet = new ExerciseSet();
    this.exerciseSet.setNumber = this.sets.length + 1;
    this.exerciseSet.date = new Date();

    this.sets.push(this.exerciseSet);
  }

  saveAndNext(): void {
    this.exerciseStarted = false;
    this.sets = new Array();
  }

  startExercise(): void {
    this.exerciseStarted = true;

    this.addSet();
  }

  isExerciseStarted(): boolean {
    return this.exerciseStarted;
  }

  getSets(): ExerciseSet[] {
    return this.sets;
  }

  getWorkout(): Workout {
    return this.workout;
  }

  getWorkoutName(): string {
    return this.workout.name;
  }
}
