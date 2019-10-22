function video3run () {
  video3.loadPixels();
  for (let i = 0; i < num3; i++) {
    cols3.push(video3.get(pxs3[i][0], pxs3[i][1]));
  }
  if (cols3.length > num3) {
    cols3.splice(0, num3);
  }

  for (i = 0; i < num3; i++) {
    noStroke();
    let gray3 = (cols3[i][0] + cols3[i][1] + cols3[i][2]) / 3
    if (frameCount % 5 == 0) {
      if (gray3 > 70) {
        state3.push(1);
      } else {
        state3.push(0);
      }
    }
  }

  if (pstate3) {
    for (i = 0; i < num3; i++) {
      pstate3.push(state3[i]);
    }
  }
  if (pstate3.length > num3) {
    pstate3.splice(0, num3);
  }
  if (state3.length > num3) {
    state3.splice(0, num3);
  }

  for (i = 0; i < num3; i++) {
    if (state3[i] > pstate3[i]) {
      sounds3[i].play();
    }
    if (knobs2[3] > pxs3[i][0]) {
      sounds3[i].setVolume(1);
    } else {
      sounds3[i].setVolume(0);
    }
  }
}
