export interface StoreAction<T> {
  type: string;
  payload?: T;
}