'use strict';

import { s } from '../src/sketch.js';
import p5 from 'p5';

jest.mock('p5');

describe('The sketch should', () => {
  let thing = new s(p5);
  beforeEach(() => {
  });

  test('be setup', () => {
    expect(thing.y).toEqual(1);
  });
});