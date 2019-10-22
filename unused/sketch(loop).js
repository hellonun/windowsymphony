//midi
let knobs1 = [1,1,1,1];
let knobs2 = [1,1,1,1];
let videos = [];

let pxs1 = [
  [291, 354], //0
  [373, 353],
  [321, 293], //1 //2
  [495, 354], //3
  [564, 337], //4
  [573, 337], //5
  [599, 317] // 6
];

let sounds1 = [];
let pstate1 = []
let state1 = [];
let cols1 = [];
let num1 = 7;
let on1 = 0;

function preload() {
  for (let i = 0; i < num1; i++) {
  sounds1.push(loadSound("data2/" + i + ".mp3"));
}
}

function setup() {
  createCanvas(1920, 1080);
  webmidisetup();
  for (let i = 0; i < 4; i++) {
    videos.push(createVideo("videos/" + i + "_1.mp4"));
    videos[i].size(960, 540);
  }
}

function draw() {
  for (let i = 0; i < 4; i++) {
    videos[i].size(960, 540);
  }

  webmidi();
  background(0);

  fill (0);
  noStroke();

  image(videos[0], 0, 0);
  rect(knobs2[0],0,width, height/2);

  push();
  translate(width / 2, 0);
  image(videos[1], 0, 0);
  rect(knobs2[1],0,width, height/2);
  rect
  pop();

  push();
  translate(0,height / 2);
  image(videos[2], 0, 0);
  rect(knobs2[2],0,width, height/2);
  pop();

  push();
  translate(width / 2, height / 2);
  image(videos[3], 0, 0);
  rect(knobs2[3],0,width, height/2);
  pop();
}


function mousePressed() {
  for (let i = 0; i < 4; i++) {
    videos[i].loop();
  }
}
