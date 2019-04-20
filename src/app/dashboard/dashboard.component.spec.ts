import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RecipeSearchComponent } from '../recipe-search/recipe-search.component';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { RECIPES } from '../mock-recipes';
import { RecipeService } from '../recipe.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let recipeService;
  let getRecipesSpy;

  beforeEach(async(() => {
    recipeService = jasmine.createSpyObj('RecipeService', ['getRecipes']);
    getRecipesSpy = recipeService.getRecipes.and.returnValue( of(RECIPES) );
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        RecipeSearchComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: RecipeService, useValue: recipeService }
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Recipes" as headline', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toEqual('Top Recipes');
  });

  it('should call recipeService', async(() => {
    expect(getRecipesSpy.calls.any()).toBe(true);
    }));

  it('should display 4 links', async(() => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
  }));

});
