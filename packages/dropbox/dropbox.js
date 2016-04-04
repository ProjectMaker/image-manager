// Write your package code here!
var node_dropbox = Meteor.npmRequire('node-dropbox');

DropBox = function(apiKey, apiSecret) {
    this.initialize(apiKey, apiSecret);
};

_.extend(DropBox.prototype, {
    initialize: function(apiKey, apiSecret) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;

        this.token = null;
    },

    setToken: function(token) {
        this.token = token;
    },

    accessToken: function(cb) {
        if ( !this.token ) {
            node_dropbox.Authenticate(this.apiKey,this.apiSecret, 'http://localhost:3000/dropbox/token/',function(err, urlApi) {
                console.log(urlApi);
                HTTP.get(urlApi, function(err, result) {
                    cb(err, result.content);
                });


            });
        }
    },

    getAccount: function() {
        if ( !this.token ) {
            node_dropbox.Authenticate(this.apiKey,this.apiSecret, 'http://localhost:3000/dropbox/token/',function(err, urlApi) {
                console.log(urlApi);
                HTTP.get(urlApi, function(err, result) {
                    console.log(err);
                    console.log(result.content);
                });


            });

        }
        //var api = node_dropbox.api(this.token);

        //api.account(cb);
    }

});



