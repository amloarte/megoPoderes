import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { LayoutService } from '../../../../../_theme/core';
import { KTUtil } from '../../../../../../assets/js/components/util';
import KTLayoutHeader from '../../../../../../assets/js/layout/base/header';
import KTLayoutHeaderMenu from '../../../../../../assets/js/layout/base/header-menu';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {
  ulCSSClasses: string;
  rootArrowEnabled: boolean;
  headerMenuDesktopToggle: string;
  @ViewChild('ktHeaderMenu', { static: true }) ktHeaderMenu: ElementRef;

  constructor() {}

  ngOnInit(): void { }
  
  ngAfterViewInit(): void {
    console.log(this.ktHeaderMenu)
    if (this.ktHeaderMenu) {
      // for (const key in this.headerMenuHTMLAttributes) {
      //   if (this.headerMenuHTMLAttributes.hasOwnProperty(key)) {
      //     this.ktHeaderMenu.nativeElement.attributes[
      //       key
      //     ] = this.headerMenuHTMLAttributes[key];
      //   }
      // }
    }

    KTUtil.ready(() => {
      // Init Desktop & Mobile Headers
      KTLayoutHeader.init('kt_header', 'kt_header_mobile');
      // Init Header Menu
      KTLayoutHeaderMenu.init('kt_header_menu', 'kt_header_menu_wrapper');
    });
  }
}
