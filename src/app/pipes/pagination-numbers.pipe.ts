import { PipeTransform, Pipe } from '@angular/core';
import { Pagination } from '../models/pagination';

@Pipe({
  name: 'paginationNumbers',
})
export class PaginationNumbersPipe implements PipeTransform {

  constructor() { }

  transform(pagination: Pagination, numberLastAndNext?: number): number[] {
    numberLastAndNext = numberLastAndNext ? numberLastAndNext : 2;
    let numberMaxPagination = pagination.page;
    for (let i = 0; i < numberLastAndNext; i++) {
      if ((numberMaxPagination + 1) <= pagination.total_pages) {
        numberMaxPagination = numberMaxPagination + 1;
      }
    }
    let numbers = [];
    while (numberMaxPagination > 0 && numbers.length < (numberLastAndNext * 2 + 1)) {
      numbers.push(numberMaxPagination);
      numberMaxPagination = numberMaxPagination - 1;
    }
    return numbers.sort((a, b) => a - b);
  }
}
