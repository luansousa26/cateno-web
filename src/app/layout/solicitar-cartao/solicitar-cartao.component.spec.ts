import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarCartaoComponent } from './solicitar-cartao.component';

describe('SolicitarCartaoComponent', () => {
  let component: SolicitarCartaoComponent;
  let fixture: ComponentFixture<SolicitarCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
