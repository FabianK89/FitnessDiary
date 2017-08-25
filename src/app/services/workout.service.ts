import { Injectable } from "@angular/core";

import { Workout } from "../model/workout";
import { WORKOUTS } from "../model/mock/mock-workouts";

@Injectable()
export class WorkoutService {

  constructor() {
  }

  getWorkouts(): Promise<Workout[]> {
    return Promise.resolve(WORKOUTS);
  }

  getWorkoutForID(id: string): Promise<Workout> {
    return Promise.resolve(WORKOUTS.find(workout => workout.id === id));
  }
}
