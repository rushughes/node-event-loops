// node myfile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

myFile.runcontents();

function shouldContinue() {
  // Check one: any pending setTimeout, setInterval, setImmediate?
  // check two: any pending OS tasks?
  // check three: any pending long running operations?
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// entire body executes in one 'tick'
while (shouldContinue()) {
  // 1 node looks at pending timers to see if any functions are ready to be called

  // 2 node looks at pendingOSTasks and pendingOperations and calls relevant callbacks

  // 3 pause execution then continue
}

// exit back to terminal
