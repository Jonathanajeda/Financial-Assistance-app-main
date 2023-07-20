import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminInterfacePage } from './admin-interface.page';

describe('AdminInterfacePage', () => {
  let component: AdminInterfacePage;
  let fixture: ComponentFixture<AdminInterfacePage>;

  beforeEach(waitForAsync(async() => {
    await TestBed.configureTestingModule({
      declarations: [AdminInterfacePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminInterfacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
