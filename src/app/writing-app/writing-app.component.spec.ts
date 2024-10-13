import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingAppComponent } from './writing-app.component';

describe('WritingAppComponent', () => {
  let component: WritingAppComponent;
  let fixture: ComponentFixture<WritingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
