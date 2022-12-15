import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicItemComponent } from './graphic-item.component';

describe('GraphicItemComponent', () => {
  let component: GraphicItemComponent;
  let fixture: ComponentFixture<GraphicItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
