import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SubmittedDataPage } from './submitted-data.page';

describe('SubmittedDataPage', () => {
  let component: SubmittedDataPage;
  let fixture: ComponentFixture<SubmittedDataPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(SubmittedDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
