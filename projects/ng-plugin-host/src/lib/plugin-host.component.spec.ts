import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgPluginHostComponent } from './plugin-host.component';


describe('NgPluginHostComponent', () => {
  let component: NgPluginHostComponent;
  let fixture: ComponentFixture<NgPluginHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgPluginHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPluginHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
