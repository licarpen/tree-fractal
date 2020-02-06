import React from 'react';
import Sketch from 'react-p5';
export default function FirstFractal() {
  const deg_to_rad = Math.PI / 180.0;
  let depth = 12;
  //let blueChange = 2;

  function drawTree(p5, x1, y1, angle, depth){
    if(depth !== 0){
      p5.stroke(100 + depth * 10, 20, 250 - depth * 15);
      //p5.stroke(100, 20, 150 + 20 * Math.log2(blueChange));
      let x2 = x1 + (Math.cos(angle * deg_to_rad) * depth * 8.0);
      let y2 = y1 + (Math.sin(angle * deg_to_rad) * depth * 8.0);
      p5.line(x1, y1, x2, y2);
      //blueChange += 2;
      setTimeout(() => {
        drawTree(p5, x2, y2, angle - 20, depth - 1);
        setTimeout(() => drawTree(p5, x2, y2, angle + 20, depth - 1), 25);
      }, 25);
      
    }
  }
  const setup = p5 => {
    p5.createCanvas(1000, 800);
    p5.background(0);
    p5.stroke(0);
    p5.colorMode(p5.RGB);
  };
  const draw = p5 => {
    drawTree(p5, p5.width / 2, p5.height, -90, depth);
    p5.noLoop();
  };
  return (
    <Sketch setup={setup} draw={draw}/>
  );
}
