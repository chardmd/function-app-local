module.exports = function(context, myTimer) {
  context.bindings.outputSbQueueMsg = "Received new message = " + new Date().getTime();
  context.done();
};
