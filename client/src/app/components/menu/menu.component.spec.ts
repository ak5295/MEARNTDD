import { TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


describe('MenuComponent Test Suite', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.debugElement.componentInstance;

  });

  it('should create component', () => {
    expect(component).toBeTruthy('component');
  });

  it('should start with a blank name', () => {
    const menuName: string = component.model.menuName;
    expect(menuName).toBeDefined('menuName is defined');
    expect(typeof menuName).toBe("string", 'typeof menuName to be string');
    expect(menuName.length).toBe(0, 'menuName.length == 0');
  });

  it('should start with a (empty) list of menu items', () => {
    const menuItems = component.model.menuItems;
    expect(menuItems).toBeTruthy('menuItems');
    expect(Array.isArray(menuItems)).toBe(true, 'Array.isArray(menuItems)');
    expect(menuItems.length).toBe(0, 'menuItems.length == 0');
  });

  it('should be able to add menu items', () => {
    component.menuItems = [
      {name: 'item 1', price: 1, description: 'The first item'}
    ];
    fixture.detectChanges();

    const menuItems = component.model.menuItems;
    expect(menuItems).toBeTruthy('menuItems');
    expect(Array.isArray(menuItems)).toBe(true, 'Array.isArray(menuItems)');
    expect(menuItems.length).toBe(1, 'menuItems.length == 1');

    expect(menuItems[0].name).toBe('item 1', 'menuItems[0].name = "item1"');
    expect(menuItems[0].price).toBe(1, 'menuItems[0].price = 1');
    expect(menuItems[0].description).toBe('The first item', 'menuItems[0].description = "The first item"');
  });

  it('should display content of menu items', () => {
    fixture.detectChanges();
    const rootElem: HTMLElement = fixture.debugElement.nativeElement;
    const disName = rootElem.querySelectorAll("th#name");
    console.log('disName=', disName);
    expect(disName.length).toBe(1,'disName.length == 1');
    //
    expect(disName[0].textContent).toBe('Name', 'textContent');
  });

  it('should have table', () => {
    fixture.detectChanges();
    const rootElem: HTMLElement = fixture.debugElement.nativeElement;
    const tableElem = rootElem.querySelector("table");
    expect(tableElem).toBeTruthy('tableElem');
  });

  it('should table have a thead element', () => {
    fixture.detectChanges();
    const rootElem: HTMLElement = fixture.debugElement.nativeElement;
    //const theadElem = rootElem.querySelector("table > thead")
    const tableElem = rootElem.querySelector("table");
    const theadElem = tableElem.querySelector("thead");;
    expect(theadElem).toBeTruthy('theadElem');
  });

  it('should table have three columns in our thead element', () => {
    fixture.detectChanges();
    const rootElem: HTMLElement = fixture.debugElement.nativeElement;
    const theadElem = rootElem.querySelector("table > thead")

    expect(theadElem.children.length).toBe(3, 'theadElem has three children');
  });

  it('table should have headers Name, Description, Price', () => {
    fixture.detectChanges();
    const rootElem: HTMLElement = fixture.debugElement.nativeElement;
    const theadElem = rootElem.querySelector("table > thead")

    const thElem0: Element = theadElem.children[0];
    const thElem1: Element = theadElem.children[1];
    const thElem2: Element = theadElem.children[2];

    expect(thElem0.nodeName.toLowerCase()).toBe('th', 'thElem0.nodeName == th');
    expect(thElem0.id).toBe('name', 'thElem0.id == name');
    expect(thElem0.textContent).toBe('Name', 'thElem0.textContent == Name');
    expect(thElem1.nodeName.toLowerCase()).toBe('th','thElem1.nodeName == th');
    expect(thElem1.textContent).toBe('Description','thElem1.textContent == Description');
    expect(thElem2.nodeName.toLowerCase()).toBe('th','thElem2.nodeName == th');
    expect(thElem2.textContent).toBe('Price','thElem2.textContent == Price');
  });

  it('should display the rows for menu item', () => {
    const rootElem: HTMLElement = fixture.debugElement.nativeElement;
    const disRow = rootElem.querySelectorAll( 'tr > td');
    console.log('disRow = ', disRow);
  });
  // component.menuItems = [
  //   {name: 'item 1', price: 1, description: 'The first item'}
  // ];
  // fixture.detectChanges();

  // const menuItems = component.model.menuItems;
  // expect(menuItems).toBeTruthy('menuItems');
  // expect(Array.isArray(menuItems)).toBe(true, 'Array.isArray(menuItems)');
  // expect(menuItems.length).toBe(1, 'menuItems.length == 1');

  // expect(menuItems[0].name).toBe('item 1', 'menuItems[0].name = "item1"');
  // expect(menuItems[0].price).toBe(1, 'menuItems[0].price = 1');
  // expect(menuItems[0].description).toBe('The first item', 'menuItems[0].description = "The first item"');
  // fixture.detectChanges();
    // const rootElem: HTMLElement = fixture.debugElement.nativeElement;
    // const disName = rootElem.querySelectorAll("tr > td");
    // console.log('disName=', disName);
    // expect(disName.length).toBe(1,'disName.length == 1');
    // //
    // expect(disName[0].textContent).toBe('Name', 'textContent');
});


