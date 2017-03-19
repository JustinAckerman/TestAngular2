"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = require("./app.component");
var testing_1 = require("@angular/router/testing");
var testing_2 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    var MockHomeComponent = (function () {
        function MockHomeComponent() {
        }
        return MockHomeComponent;
    }());
    beforeEach(testing_2.async(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
            imports: [testing_1.RouterTestingModule.withRoutes([
                    {
                        path: 'home',
                        component: MockHomeComponent
                    }
                ])
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have expected <h1> text', function () {
        fixture.detectChanges();
        var h1 = de.nativeElement;
        console.log(h1.innerText);
        expect(h1.innerText).toMatch(/angular/i, '<h1> should say something about "Angular"');
    });
    // it('Should navigate to the home tab when home is clicked', () => {   
    //      spyOn(comp.router, 'navigate');
    //      expect(comp.router.navigate).toHaveBeenCalledWith(['/home']);
    //      expect(comp.router.navigate).toHaveBeenCalledTimes(1);
    // });
});
//# sourceMappingURL=app.component.spec.js.map