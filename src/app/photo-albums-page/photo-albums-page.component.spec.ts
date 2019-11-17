import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAlbumsPageComponent } from './photo-albums-page.component';

describe('PhotoAlbumsPageComponent', () => {
  let component: PhotoAlbumsPageComponent;
  let fixture: ComponentFixture<PhotoAlbumsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoAlbumsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAlbumsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
