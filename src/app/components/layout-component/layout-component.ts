import { Component,   } from '@angular/core';
import {  DrawerSelectEvent, KENDO_LAYOUT, } from "@progress/kendo-angular-layout";
import { KENDO_BUTTONS } from "@progress/kendo-angular-buttons";
import { KENDO_ICONS } from '@progress/kendo-angular-icons';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterLink, RouterLinkActive  } from "@angular/router";

@Component({
  selector: 'app-layout-component',
  imports: [KENDO_ICONS, KENDO_LAYOUT, KENDO_BUTTONS, MatSidenavModule, MatButtonModule, MatIconModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.scss',
})
export class LayoutComponent {

  public selected = "Inbox";

    public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }

}
