/**
 * Created by thomasmichelet on 15/03/2016.
 */
Router.route('/dropbox/token/:code?',
    function() {
        Meteor.call('accessToken', Meteor.user().profile.apiKey, Meteor.user().profile.apiPassword, this.params.query.code, function(response) {
            /*
            if ( response.error ) console.log('error');
            else console.log(response);
            */

            console.log(arguments);
            this.redirect('home');
        });

    }, {
        name: "dropboxTokenCode",
        where: "client"
    }
);

//http://localhost:3000/dropbox/token/?code=UKtyn-gvo-MAAAAAAAAH3c6k2vpj94cqO0g9CBPb-Qk