import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header-placeholder',
  templateUrl: './header-placeholder.component.html',
  styleUrls: ['./header-placeholder.component.sass'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderPlaceholderComponent {

  public quantityPlaceholder: number = 4;
  
  constructor() { }
}
