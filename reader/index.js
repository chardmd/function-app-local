module.exports = function (context, mySbMsg) {
  context.log("===== Process Message from Service Bus ===== :", mySbMsg);
  context.done();
};
