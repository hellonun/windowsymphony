function webmidi() {
  WebMidi.enable(function(err) {
    inputSoftware.addListener('noteon', "all",
    function(e) {
      console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ") " + e.note.number + ".");
      midiOn = e.note.number;
    });

    inputSoftware.addListener('noteoff', "all",
    function(e) {
      console.log("Received 'noteoff' message (" + e.note.name + e.note.octave + ") " + e.note.number + ".");
      midiOff = e.note.number;
    });

    // Print knob values
    inputSoftware.addListener('controlchange', "all",
    function(e) {
      // console.log("ch:" + e.controller.number + "  value:" + e.value);
      // console.log(e.value);
      if (e.controller.number <=4) {
        knobv1 = map(e.value, 0, 127, 0,1 );
        knobs1.splice(e.controller.number-1, 1, knobv1);
      }
      if (e.controller.number >4) {
        knobv2 = map(e.value, 0, 127, 0,width/2 );
        knobs2.splice(e.controller.number-5, 1, knobv2);
        // console.log(knobv2);
      }
      // console.log(knobv);
    });
  });
}
