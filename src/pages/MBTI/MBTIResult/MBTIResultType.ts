export enum ActionType {
  SET_USER_COUNTER = 'SET_USER_COUNTER',
}

export interface Action {
  types: ActionType;
  data?: number;
}
