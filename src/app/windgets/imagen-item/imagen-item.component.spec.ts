import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenItemComponent } from './imagen-item.component';

describe('ImagenItemComponent', () => {
  let component: ImagenItemComponent;
  let fixture: ComponentFixture<ImagenItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
