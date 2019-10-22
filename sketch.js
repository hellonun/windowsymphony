//midi
let knobs1 = [1,1,1,1];
let knobs2 = [1,1,1,1];

let video0;
let video1;
let video2;
let video3;

// let testvideo;

let pxs0 = [
  [291, 354],
  [373, 353],
  [321, 293],
  [495, 354],
  [564, 337],
  [573, 337],
  [599, 317]
];
let pxs1 = [
  [152, 282],
  [168, 278],
  [182, 277],
  [188, 279],
  [188, 286], // flash
  [567, 385] // alone point
];
let pxs2 = [
  [152, 282],
  [168, 278],
  [182, 277],
  [188, 279],
  [188, 286], // flash
  [567, 385] // alone point
];
let pxs3 = [
  [291, 354], //0
  [373, 353],
  [321, 293], //1 //2
  [495, 354], //3
  [564, 337], //4
  [573, 337], //5
  [599, 317] // 6
];

let sounds0 = [];
let pstate0 = []
let state0 = [];
let cols0 = [];
let num0 = 7;
let on0 = 0;

let sounds1 = [];
let pstate1 = []
let state1 = [];
let cols1 = [];
let num1 = 6;
let on1 = 0;

let sounds2 = [];
let pstate2 = []
let state2 = [];
let cols2 = [];
let num2 = 6;
let on2 = 0;

let sounds3 = [];
let pstate3 = []
let state3 = [];
let cols3 = [];
let num3 = 7;
let on3 = 0;

let bgnoise;
function preload() {
  bgnoise = loadSound("noise.mp3");

  for (let i = 0; i < num0; i++) {
    sounds0.push(loadSound("data0/" + i + ".mp3"));
  }
  for (let i = 0; i < num1; i++) {
    sounds1.push(loadSound("data1/" + i + ".mp3"));
  }
  for (let i = 0; i < num2; i++) {
    sounds2.push(loadSound("data2/" + i + ".mp3"));
  }
  for (let i = 0; i < num3; i++) {
    sounds3.push(loadSound("data3/" + i + ".mp3"));
  }
}

function setup() {
  createCanvas(1920, 1080);
  webmidisetup();
  video0 =createVideo("videos/" + 0 + "_1.mp4");
  video1 =createVideo("videos/" + 1 + "_1.mp4");
  video2 =createVideo("videos/" + 2 + "_1.mp4");
  video3 =createVideo("videos/" + 3 + "_1.mp4");
  bgnoise.loop();
}

function draw() {
  video0.size(960, 540);
  video1.size(960, 540);
  video2.size(960, 540);
  video3.size(960, 540);

  webmidi();
  background(0);

  bgnoise.setVolume(knobs1[0]);
console.log(knobs1[0]);
  fill (0);
  noStroke();

  video0.speed(1.5);
  video1.speed(1.5);

  image(video0, 0, 0);
  rect(knobs2[0],0,width, height/2);
  video0run();

  push();
  translate(width / 2, 0);
  image(video1, 0, 0);
  rect(knobs2[1],0,width, height/2);
  video1run();
  pop();

  push();
  translate(0,height / 2);
  image(video2, 0, 0);
  rect(knobs2[2],0,width, height/2);
  video2run();
  pop();

  push();
  translate(width / 2, height / 2);
  image(video3, 0, 0);
  rect(knobs2[3],0,width, height/2);
  video3run();
  pop();

  // console.log(mouseX, mouseY);
}


function mousePressed() {
  video0.loop();
  video1.loop();
  video2.loop();
  video3.loop();
}
