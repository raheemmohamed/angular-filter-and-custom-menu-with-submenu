import { Component, OnInit, HostBinding, ElementRef, ViewChild, QueryList, HostListener, AfterViewChecked } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-menu-filter',
  templateUrl: './menu-filter.component.html',
  styleUrls: ['./menu-filter.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero, form', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
          ]),
        ])
      ]),
    ]),
  ]
})
export class MenuFilterComponent implements OnInit{
  @HostBinding('@pageAnimations')
  public animatePage = true;
  mockData =[
    { id: 11, siteName: 'Site1' },
    { id: 12, siteName: 'Site10' },
    { id: 13, siteName: 'Site9' },
    { id: 14, siteName: 'Site8' },
    { id: 15, siteName: 'Site7' },
    { id: 16, siteName: 'beeta area' },
    { id: 17, siteName: 'Site5' },
    { id: 18, siteName: 'Site4' },
    { id: 19, siteName: 'Site3' },
    { id: 20, siteName: 'alpha street' }
  ];

  subMenuData = [
    {id: 1, value: "sub menu 1"},
    {id: 2, value: "sub menu 2"},
    {id: 3, value: "sub menu 3"},
    {id: 4, value: "sub menu 4"}
  ]

  items =[];

  _mockSiteData = [];
  totalMockSiteData = -1;

  get mockSiteData() {
    return this._mockSiteData;
  }
  @ViewChild('customModel', {static: false}) el:ElementRef;

  //displayCustomModal = false;

  @HostListener('document:click', ['$event']) onDocumentClick(event) {
    
    let htmlElement =  this.el && this.el.nativeElement as HTMLElement;
    htmlElement.style.opacity = "0";
  }
  
  constructor() { }

  ngOnInit() {
    this._mockSiteData = this.mockData;

      this.items = [
          {label: 'New'},
          {label: 'Open'},
          {label: 'Undo'}
      ];
  }

  updateCriteria(searchCriteria){
    console.log("actual", searchCriteria);
    searchCriteria = searchCriteria ? searchCriteria.trim() : '';

    this._mockSiteData = this.mockData.filter(dataRes => dataRes.siteName.toLowerCase().includes(searchCriteria.toLowerCase()));
   
    const newTotal = this.mockSiteData.length;

    if (this.totalMockSiteData !== newTotal) {
      this.totalMockSiteData = newTotal;
    } else if (!searchCriteria) {
      this.totalMockSiteData = -1;
    }
  }

  showModal(e){
    let htmlElement =  this.el && this.el.nativeElement as HTMLElement;
    let spotX = e.pageX - e.offsetX;
    let spotY = e.pageY - e.offsetY;

    htmlElement.style.top = spotY + 55 +"px" ;
    htmlElement.style.opacity = "1"; 

    e.stopPropagation();
  }

  onClickedOutside(e){
    let htmlElement =  this.el && this.el.nativeElement as HTMLElement;
    htmlElement.style.opacity = "0"; 
  }


}
