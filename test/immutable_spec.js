import { expect } from 'chai';
import { List, Map } from 'immutable';

describe('immutability', () => {
  // Test for learning sake
  describe('a number', () => {
    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      const state = 42;
      const nextState = increment(state);
      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  });

  // Learning the immutable library through testing
  describe('a list', () => {
    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', () => {
      const state = List.of('Trainspotting', '28 Days Later');
      const nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
      ));
      expect(state).to.equal(List.of(
        'Trainspotting',
        '28 Days Later'
      ));
    });
  });

  describe('a tree', () => {
    function addMovie(currentState, movie) {
      return currentState.set(
        'movies',
        currentState.get('movies').push(movie)
      );
    }

    it('is immutable', () => {
      const state = new Map({
        movies: List.of('Trainspotting', '28 Days Later'),
      });
      const nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(new Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        ),
      }));
      expect(state).to.equal(new Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        ),
      }));
    });
  });

});
