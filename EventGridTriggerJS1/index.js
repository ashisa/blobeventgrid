module.exports = function (context, eventGridEvent) {
    context.log(typeof eventGridEvent);
    //context.log(eventGridEvent);
    context.log(eventGridEvent.eventTime);
    context.log(eventGridEvent.data.url);
    context.done();
};