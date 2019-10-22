function video1run () {
  video1.loadPixels();
  for (let i = 0; i < num1; i++) {
    cols1.push(video1.get(pxs1[i][0], pxs1[i][1]));
  }
  if (cols1.length > num1) {
    cols1.splice(0, num1);
  }


  for (i = 0; i < num1; i++) {
    noStroke();

    let gray1 = (cols1[i][0] + cols1[i][1] + cols1[i][2]) / 3

    // console.log(gray1);

    if (gray1 > 30) {
      fill(255, 0, 0); // for rect
      state1.push(1);
    } else {
      fill(0); // for rect
      // noStroke();
      state1.push(0);
    }
    // rect(i * width / num1, height - 30, width / num1, 30);
  }

  if (pstate1) {
    for (i = 0; i < num1; i++) {
      pstate1.push(state1[i]);
    }
  }
  if (pstate1.length > num1) {
    pstate1.splice(0, num1);
  }

  if (state1.length > num1) {
    state1.splice(0, num1);
  }

  for (i = 0; i < num1; i++) {
    // if (state1[i] > pstate1[i]) {
    //   if (i>4) {
    //     sounds1[0].play();
    //   } else if (i == 4) {
    //     sounds1[1].play();
    //   } else {
    //     sounds1[2].play();
    //   }
    // }
    if (state1[i] > pstate1[i]) {
      sounds1[i].play();
    }
    if (knobs2[1] > pxs1[i][0]) {
      sounds1[i].setVolume(1);
    } else {
      sounds1[i].setVolume(0);
    }
  }
}
