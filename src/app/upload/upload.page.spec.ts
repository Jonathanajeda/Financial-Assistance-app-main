import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UploadPage } from './upload.page';

describe('UploadPage', () => {
  let component: UploadPage;
  let fixture: ComponentFixture<UploadPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(UploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
