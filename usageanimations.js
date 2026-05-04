// =========================
// TRACK USAGE ANIMATION
// =========================

new p5((p) => {
  let mode = 0;
  let t = 0;

  p.setup = function () {
    let canvas = p.createCanvas(170, 140);
    canvas.parent("usage-animation");
  };

  p.draw = function () {
    p.clear();

    // Switch graph type every 180 frames
    if (p.frameCount % 180 === 0) {
      mode = (mode + 1) % 3;
    }

    // Draw axes for bar and line only
    if (mode !== 2) {
      p.stroke("#271e0c");
      p.strokeWeight(2);
      p.line(25, 115, 145, 115);
      p.line(25, 115, 25, 20);
    }

    // BAR GRAPH
    if (mode === 0) {
      p.noStroke();
      p.fill("#3a86b6");

      for (let i = 0; i < 4; i++) {
        let h = p.map(p.sin(t + i), -1, 1, 25, 80);
        p.rect(42 + i * 26, 115 - h, 16, h, 4);
      }
    }

    // LINE GRAPH
    else if (mode === 1) {
      p.noFill();
      p.stroke("#3a86b6");
      p.strokeWeight(3);

      p.beginShape();
      for (let i = 0; i < 4; i++) {
        let y = p.map(p.sin(t + i), -1, 1, 35, 95);
        p.vertex(42 + i * 26, y);
      }
      p.endShape();
    }

    // PIE CHART
else {
  p.noStroke();

  let spin = p.frameCount * 0.02;

  let a1 = p.map(p.sin(t), -1, 1, 0.25, 0.50);
  let a2 = p.map(p.sin(t + 2), -1, 1, 0.20, 0.40);
  let a3 = 1 - a1 - a2;

  let start = -p.HALF_PI;

  p.push();
  p.translate(90, 75);
  p.rotate(spin);

  p.fill("#3a86b6");
  p.arc(0, 0, 70, 70, start, start + p.TWO_PI * a1, p.PIE);

  p.fill("#4a88fa");
  p.arc(0, 0, 70, 70, start + p.TWO_PI * a1, start + p.TWO_PI * (a1 + a2), p.PIE);

  p.fill("#74b9d6");
  p.arc(0, 0, 70, 70, start + p.TWO_PI * (a1 + a2), start + p.TWO_PI, p.PIE);

  p.pop();
}

    t += 0.03;
  };
});


// =========================
// SAVE MONEY ANIMATION
// =========================

new p5((p) => {
  let coins = [];

  p.setup = function () {
    let canvas = p.createCanvas(170, 140);
    canvas.parent("money-animation");

    for (let i = 0; i < 12; i++) {
      coins.push({
        x: p.random(25, 145),
        y: p.random(-140, 0),
        speed: p.random(1, 3),
        size: p.random(16, 24)
      });
    }
  };

  p.draw = function () {
    p.clear();

    for (let coin of coins) {
      p.fill("#f3c622");
      p.stroke("#b8860b");
      p.strokeWeight(2);
      p.circle(coin.x, coin.y, coin.size);

      p.fill("#271e0c");
      p.noStroke();
      p.textAlign(p.CENTER, p.CENTER);
      p.textSize(coin.size * 0.55);
      p.text("$", coin.x, coin.y + 1);

      coin.y += coin.speed;

      if (coin.y > p.height + 20) {
        coin.y = p.random(-80, -10);
        coin.x = p.random(25, 145);
      }
    }
  };
});


// =========================
// BUILT FOR HOUSEHOLDS ANIMATION
// =========================

new p5((p) => {
  let t = 0;

  p.setup = function () {
    let canvas = p.createCanvas(170, 140);
    canvas.parent("home-animation");
  };

  p.draw = function () {
    p.clear();

    t += 0.01;

    let skyFade = (p.sin(t) + 1) / 2;

    let skyColor = p.lerpColor(
      p.color(20, 30, 60),
      p.color(135, 206, 235),
      skyFade
    );

    let darkness = p.map(skyFade, 0, 1, 120, 0);

    p.noStroke();
    p.fill(skyColor);
    p.rect(0, 0, 170, 140, 8);

    p.fill(0, 0, 20, darkness);
    p.rect(0, 0, 170, 140, 8);

    if (skyFade > 0.5) {
      p.fill(255, 210, 80);
      p.circle(138, 30, 22);
    } else {
      p.fill(240, 240, 220);
      p.circle(138, 30, 20);
    }

    p.fill(90, 150, 95);
    p.rect(0, 112, 170, 28);

    p.stroke("#271e0c");
    p.strokeWeight(2);

    p.fill(235, 240, 245);
    p.rect(50, 60, 70, 52, 4);

    p.fill(245, 248, 250);
    p.rect(60, 38, 50, 32, 4);

    p.fill(120, 145, 160);
    p.triangle(45, 60, 85, 30, 125, 60);

    p.fill(110, 130, 145);
    p.rect(78, 88, 15, 24, 3);

    let windowGlow = p.lerpColor(
      p.color(255, 240, 120),
      p.color(200, 230, 255),
      skyFade
    );

    p.fill(windowGlow);
    p.rect(60, 76, 12, 10, 2);
    p.rect(100, 76, 12, 10, 2);
    p.rect(67, 47, 10, 9, 2);
    p.rect(93, 47, 10, 9, 2);

    p.stroke(255);
    p.strokeWeight(3);

    for (let x = 8; x < 165; x += 14) {
      p.line(x, 103, x, 125);
    }

    p.line(5, 108, 165, 108);
    p.line(5, 118, 165, 118);
  };
});
