import { Pagination } from 'src/app/models/pagination';
import { User } from 'src/app/models/user';

export const userFeatureName = 'userModule';

export type UIUserState = Readonly<{
  isLoading: boolean
}>;

export type UsersState = Readonly<{
  users: User[],
  pagination: Pagination,
  ui: UIUserState
}>;
