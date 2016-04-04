/**
 * Created by thomasmichelet on 15/03/2016.
 */
DropboxAccounts = new Meteor.Collection('dropboxAccounts');

Meteor.methods({
    addUser: function(userId, apiKey, apiSecret, apiUrlRedirect) {
        console.log('addUser -----------------');
        var account = DropboxAccounts.findOne({userId: userId});
        var urlRedirect = process.env.DROPBOX_URL_REDIRECT;
        if ( !account ) {
            var accountId = DropboxAccounts.insert({
                userId: userId,
                apiKey: apiKey,
                apiSecret: apiSecret,
                apiUrlRedirect: urlRedirect,
                apiToken: '',
                apiCode: ''
            });

            return accountId;
        }

        return account._id;
    },

    accessToken: function(apiKey, apiSecret, apiCode) {
        console.log('accessToken');
        var node_dropbox = Meteor.npmRequire('node-dropbox');
        var response = Async.runSync( function(done) {
            node_dropbox.AccessToken(apiKey, apiSecret, apiCode, "http://localhost:3000/dropbox/token/", function(err,body) {
                if ( err ) done(new Meteor.Error('accessToken','pb accessToken'));
                else if ( body.error ) done(new Meteor.Error('accessToken', body.error_description));
                else done(null, body.access_token);
            });
        });

        if ( response.error ) throw response.error;


        return response.result;
    }
});