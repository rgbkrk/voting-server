/* eslint no-undefined: 0 */
import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
  it('handles SET_ENTRIES', () => {
    const initialState = new Map();
    const action = {
      type: 'SET_ENTRIES',
      entries: ['Trainspotting'],
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      entries: ['Trainspotting'],
    }));
  });

  it('handles NEXT', () => {
    const initialState = fromJS({
      entries: ['Trainspotting', '28 Days Later'],
    });
    const action = { type: 'NEXT' };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
      },
      entries: [],
    }));
  });

  it('handles UPVOTE', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
      },
      entries: [],
    });
    const action = { type: 'UPVOTE', entry: 'Trainspotting' };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Trainspotting', '28 Days Later'],
        tally: { Trainspotting: 1 },
      },
      entries: [],
    }));
  });

  it('has an intitial state', () => {
    const action = { type: 'SET_ENTRIES', entries: ['Trainspotting'] };
    const nextState = reducer(undefined, action);
    expect(nextState).to.equal(fromJS({
      entries: ['Trainspotting'],
    }));
  });

  it('can be used with reduce', () => {
    const actions = [
      { type: 'SET_ENTRIES', entries: ['Trainspotting', '28 Days Later'] },
      { type: 'NEXT' },
      { type: 'UPVOTE', entry: 'Trainspotting' },
      { type: 'UPVOTE', entry: '28 Days Later' },
      { type: 'UPVOTE', entry: 'Trainspotting' },
      { type: 'NEXT' },
    ];
    const finalState = actions.reduce(reducer, new Map());
    expect(finalState).to.equal(fromJS({
      winner: 'Trainspotting',
    }));
  });

});
