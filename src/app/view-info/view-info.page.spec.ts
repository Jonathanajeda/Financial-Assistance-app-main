import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ViewInfoPage } from './view-info.page';

describe('ViewInfoPage', () => {
  let component: ViewInfoPage;
  let fixture: ComponentFixture<ViewInfoPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ViewInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
