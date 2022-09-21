import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebidComponent } from './createbid.component';

describe('CreatebidComponent', () => {
  let component: CreatebidComponent;
  let fixture: ComponentFixture<CreatebidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatebidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
