import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxListModule, IgxIconModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { DashboardsViewerComponent } from './dashboards-viewer.component';

describe('DashboardsViewerComponent', () => {
  let component: DashboardsViewerComponent;
  let fixture: ComponentFixture<DashboardsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardsViewerComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxListModule, IgxIconModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
