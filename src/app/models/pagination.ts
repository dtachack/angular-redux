import { User } from './user';

export type Pagination = Readonly<{
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}>;

export type PaginationUsers = Readonly<{
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[]
}>;

