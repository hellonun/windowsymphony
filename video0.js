function video0run () {
  video0.loadPixels();
  for (let i = 0; i < num0; i++) {
    cols0.push(video0.get(pxs0[i][0], pxs0[i][1]));
  }
  if (cols0.length > num0) {
    cols0.splice(0, num0);
  }

  for (i = 0; i < num0; i++) {
    noStroke();
    let gray0 = (cols0[i][0] + cols0[i][1] + cols0[i][2]) / 3
    if (frameCount % 2 == 0) {
      if (gray0 > 70) {
        state0.push(1);
      } else {
        state0.push(0);
      }
    }
  }

  if (pstate0) {
    for (i = 0; i < num0; i++) {
      pstate0.push(state0[i]);
    }
  }
  if (pstate0.length > num0) {
    pstate0.splice(0, num0);
  }
  if (state0.length > num0) {
    state0.splice(0, num0);
  }

  for (i = 0; i < num0; i++) {
    if (state0[i] > pstate0[i]) {
      sounds0[i].play();
    }
    if (knobs2[0] > pxs0[i][0]) {
      sounds0[i].setVolume(1);
    } else {
      sounds0[i].setVolume(0);
    }
  }
}
