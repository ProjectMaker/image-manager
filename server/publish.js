/**
 * Created by thomasmichelet on 15/03/2016.
 */
Meteor.publish("accessToken", function() {
    console.log('publish accessToken');
    var self = this;
    var dropBox = new DropBox('jkynzmrrhxdw70t', '0dfmap3hqfedcqp');
    //var pageAccessToken = Async.runSync(function (done) {
        dropBox.accessToken(function (err, body) {
            self.added("accessToken","myAccessToken", {content: body});
            self.ready();
            //done(null, body);
        });

    //});
});