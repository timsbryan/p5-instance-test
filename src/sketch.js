'use strict';

import p5 from 'p5';

export class Sketch extends p5 {
  constructor() {
    super(() => {});

    this.x = 100;
    this.y = 100;
  }
  

  setup() {
    this.createCanvas(200, 200);

  }

  draw () {
    this.background(0);
    this.fill(255);
    this.rect(this.x, this.y, 50, 50);
  }

  add (a, b) {
    return a + b;
  }
}

new Sketch();
