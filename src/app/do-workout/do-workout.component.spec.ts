import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DoWorkoutComponent } from "./do-workout.component";

describe("DoWorkoutComponent", () => {
  let component: DoWorkoutComponent;
  let fixture: ComponentFixture<DoWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoWorkoutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
