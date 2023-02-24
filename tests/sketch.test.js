'use strict';

import { Sketch } from '../src/sketch.js';
import p5 from 'p5';

jest.mock('p5');

describe('The sketch should', () => {
  let sketch;

  beforeEach(() => {
    sketch = new Sketch();
  });

  test('be setup', () => {
    expect(sketch.add(1,2)).toBe(3);
  });
});