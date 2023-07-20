import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RequirementListPage } from './requirement-list.page';

describe('RequirementListPage', () => {
  let component: RequirementListPage;
  let fixture: ComponentFixture<RequirementListPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(RequirementListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
