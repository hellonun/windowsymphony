function video2run () {
  video2.loadPixels();
  for (let i = 0; i < num2; i++) {
    cols2.push(video2.get(pxs2[i][0], pxs2[i][1]));
  }
  if (cols2.length > num2) {
    cols2.splice(0, num2);
  }


  for (i = 0; i < num2; i++) {
    noStroke();

    let gray2 = (cols2[i][0] + cols2[i][1] + cols2[i][2]) / 3

    // console.log(gray2);

    if (gray2 > 30) {
      fill(255, 0, 0); // for rect
      state2.push(1);
    } else {
      fill(0); // for rect
      // noStroke();
      state2.push(0);
    }
    // rect(i * width / num2, height - 30, width / num2, 30);
  }

  if (pstate2) {
    for (i = 0; i < num2; i++) {
      pstate2.push(state2[i]);
    }
  }
  if (pstate2.length > num2) {
    pstate2.splice(0, num2);
  }

  if (state2.length > num2) {
    state2.splice(0, num2);
  }

  for (i = 0; i < num2; i++) {

    //   if (state2[i] > pstate2[i]) {
    //     if (i>4) {
    //       sounds2[0].play();
    //     } else if (i == 4) {
    //       sounds2[1].play();
    //     } else {
    //       sounds2[2].play();
    //     }
    //   }
    // }

    if (state2[i] > pstate2[i]) {
      sounds2[i].play();
    }
    if (knobs2[2] > pxs2[i][0]) {
      sounds2[i].setVolume(1);
    } else {
      sounds2[i].setVolume(0);
    }
  }
}
