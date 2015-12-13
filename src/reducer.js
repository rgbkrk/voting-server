import { setEntries, next, upvote } from './core';

export default function reducer(state, action) {
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
