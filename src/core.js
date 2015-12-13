import { List, Map } from 'immutable';

export function setEntries(state, entries) {
  return state.set('entries', new List(entries));
}

export function next(state) {
  const entries = state.get('entries');
  return state.merge({
    vote: new Map({ pair: entries.take(2) }),
    entries: entries.skip(2),
  });
}
