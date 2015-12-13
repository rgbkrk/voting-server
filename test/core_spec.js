import { List, Map } from 'immutable';
import { expect } from 'chai';

import { setEntries, next } from '../src/core';

describe('application logic', () => {
  describe('setEntries', () => {
    it('adds the entries to the state', () => {
      const state = new Map();
      const entries = List.of('Trainspotting', '28 Days Later');
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(new Map({
        entries: List.of('Trainspotting', '28 Days Later'),
      }));
    });

    it('converts to immutable', () => {
      const state = new Map();
      const entries = ['Trainspotting', '28 Days Later'];
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(new Map({
        entries: List.of('Trainspotting', '28 Days Later'),
      }));
    });
  });

  describe('next', () => {
    it('takes the next two entries under vote', () => {
      const state = new Map({
        entries: List.of('Trainspotting', '28 Days Later', 'Sunshine'),
      });
      const nextState = next(state);
      expect(nextState).to.equal(new Map({
        vote: new Map({
          pair: List.of('Trainspotting', '28 Days Later'),
        }),
        entries: List.of('Sunshine'),
      }));
    });
  });
});
