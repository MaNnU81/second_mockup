import { Component,   } from '@angular/core';
import {  DrawerSelectEvent, KENDO_LAYOUT, } from "@progress/kendo-angular-layout";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import {
  cameraIcon,
  heartIcon,
  starIcon,
  bellIcon,
  gearIcon,
  homeIcon,
  plusOutlineIcon,
  calendarIcon,
  buildingsOutlineIcon,
  bookIcon,
  inboxIcon,
} from "@progress/kendo-svg-icons";


import { RouterOutlet, RouterLink, RouterLinkActive  } from "@angular/router";

type NavItem = {
  id: string;
  route: string;
  icon: any;          
  exact?: boolean;
  ariaLabel: string;
};

@Component({
  selector: 'app-layout-component',
  imports: [KENDO_ICONS, KENDO_LAYOUT, KENDO_BUTTONS, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.scss',
})
export class LayoutComponent {

  public selected = "Inbox";

    public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }


  public icons = {
    camera: cameraIcon,
    heart: heartIcon,
    star: starIcon,
    bell: bellIcon,
    gear: gearIcon,
    home: homeIcon,
    plusCircle: plusOutlineIcon,
    calendar: calendarIcon,
    building: buildingsOutlineIcon,
    book: bookIcon,
    inbox: inboxIcon,
  };


  
    public navTop: readonly NavItem[] = [
    { id: 'home', route: '/home', icon:  this.icons.home, exact: true, ariaLabel: 'Home' },
    { id: 'upload', route: '/upload', icon: this.icons.calendar, ariaLabel: 'Upload' },
    { id: 'newQuotation', route: '/newquotation', icon: this.icons.plusCircle, ariaLabel: 'New quotation' },
    { id: 'buildings', route: '/buildings', icon: this.icons.building, ariaLabel: 'Buildings' },
    { id: 'buildings', route: '/buildings', icon: this.icons.building, ariaLabel: 'Buildings' },
    { id: 'buildings', route: '/buildings', icon: this.icons.building, ariaLabel: 'Buildings' },
    { id: 'buildings', route: '/buildings', icon: this.icons.building, ariaLabel: 'Buildings' },
    { id: 'buildings', route: '/buildings', icon: this.icons.building, ariaLabel: 'Buildings' },
  ];

  // bottom
  public navBottom: readonly NavItem[] = [
    { id: 'quotationSearch', route: '/quotation_search', icon: this.icons.book, ariaLabel: 'Quotation search' },
    { id: 'inbox', route: '/inbox', icon: this.icons.inbox, ariaLabel: 'Inbox' },
    { id: 'settings', route: '/settings', icon: this.icons.gear, ariaLabel: 'Settings' },
  ];

}
