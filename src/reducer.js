import { setEntries, next, upvote, INITIAL_STATE } from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_ENTRIES':
    return setEntries(state, action.entries);
  case 'NEXT':
    return next(state);
  case 'UPVOTE':
    return upvote(state, action.entry);
  }
  return state;
}
