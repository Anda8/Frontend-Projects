import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowItemComponent } from './tv-show-item.component';

describe('TvShowItemComponent', () => {
  let component: TvShowItemComponent;
  let fixture: ComponentFixture<TvShowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvShowItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvShowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
