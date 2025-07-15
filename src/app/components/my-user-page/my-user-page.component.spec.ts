import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUserPageComponent } from './my-user-page.component';

describe('MyUserPageComponent', () => {
  let component: MyUserPageComponent;
  let fixture: ComponentFixture<MyUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyUserPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
