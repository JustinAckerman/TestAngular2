import { AppComponent } from './app.component';

import { RouterTestingModule  } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  class MockHomeComponent { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ RouterTestingModule.withRoutes([
        {
          path: 'home',
          component: MockHomeComponent
        }
      ])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    console.log(h1.innerText);
    expect(h1.innerText).toMatch(/angular/i,
      '<h1> should say something about "Angular"');
  });

  // it('Should navigate to the home tab when home is clicked', () => {   
  //      spyOn(comp.router, 'navigate');
  //      expect(comp.router.navigate).toHaveBeenCalledWith(['/home']);
  //      expect(comp.router.navigate).toHaveBeenCalledTimes(1);
  // });

});
