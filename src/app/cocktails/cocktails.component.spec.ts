import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocktailService } from '../cocktail.service';

import { CocktailsComponent } from './cocktails.component';

describe('CocktailsComponent', () => {
  let component: CocktailsComponent;
  let fixture: ComponentFixture<CocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientModule ],
      declarations: [ CocktailsComponent ],
      providers: [ CocktailService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table', () => {
    const fixture = TestBed.createComponent(CocktailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('table').textContent).toBeDefined();
    expect(compiled.querySelectorAll('table thead tr td').length).toBe(2);
  });
});
