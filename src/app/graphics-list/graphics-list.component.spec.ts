import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsListComponent } from './graphics-list.component';

describe('GraphicsListComponent', () => {
  let component: GraphicsListComponent;
  let fixture: ComponentFixture<GraphicsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
