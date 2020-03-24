import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-placeholder',
  templateUrl: './list-placeholder.component.html',
  styleUrls: ['./list-placeholder.component.sass'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPlaceholderComponent {

  public quantityPlaceholder: number = 6;

  constructor() { }

}
