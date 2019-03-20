var start_val = "100% 200%";
var end_val = "0% 1%";
var time = 3;

function run_scene() {
  TweenMax.fromTo(
    "#red",
    time,
    { drawSVG: start_val },
    { drawSVG: end_val, repeat: -1 }
  );
  TweenMax.fromTo(
    "#orange",
    time,
    { drawSVG: start_val },
    { drawSVG: end_val, repeat: -1 }
  );
  TweenMax.fromTo(
    "#yellow",
    time,
    { drawSVG: start_val },
    { drawSVG: end_val, repeat: -1 }
  );
  TweenMax.fromTo(
    "#green",
    time,
    { drawSVG: start_val },
    { drawSVG: end_val, repeat: -1 }
  );
  TweenMax.fromTo(
    "#blue",
    time,
    { drawSVG: start_val },
    { drawSVG: end_val, repeat: -1 }
  );
  TweenMax.fromTo(
    "#purple",
    time,
    { drawSVG: start_val },
    { drawSVG: end_val, repeat: -1 }
  );
}

var master = new TimelineLite();
master.add(run_scene());
