import { Component, OnInit, OnDestroy, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { UserFacade } from 'src/app/user.facade';
import { Pagination } from 'src/app/models/pagination';
import { PaginationNumbersPipe } from 'src/app/pipes/pagination-numbers.pipe';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public pagination: Pagination;
  public numbersPagination: number[] = [];

  constructor(
    private userFacade: UserFacade,
    private paginationNumbersPipe: PaginationNumbersPipe
  ) { }

  ngOnInit() {
    this.subscriptions.push(this.userFacade.pagintation$.subscribe(pagination => {
      this.pagination = pagination
      this.numbersPagination = this.paginationNumbersPipe.transform(this.pagination);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  get isLoading$(): Observable<boolean> {
    return this.userFacade.isLoading$;
  }

  get isNext(): boolean {
    return this.pagination.total_pages > this.pagination.page;
  }

  get isLast(): boolean {
    return this.pagination.page > 1;
  }

  public isActiveBox(index: number): boolean {
    return this.pagination.page === index;
  }

  public loadPage(page: number): void {
    this.userFacade.fetchUsers(page);
  }

  public next(): void {
    this.userFacade.fetchUsers(this.pagination.page + 1);
  }

  public last(): void {
    this.userFacade.fetchUsers(this.pagination.page - 1);
  }

}
