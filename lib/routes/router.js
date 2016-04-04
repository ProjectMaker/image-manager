/**
 * Created by thomasmichelet on 14/03/2016.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.route('/', {
    name: 'home'
});

Router.route('/profil', {
    name: 'profilEdit',
    template: 'profilEdit'/*,
    data: function() {
        if ( Meteor.user() ) {
            return {
                dropBox: {
                    apiUrlRedirect: DROPBOX_URL_REDIRECT
                }
            }
        }
    }
    */
});

Router.route('/dropbox/accesstoken', {
        waitOn: function() {
            return Meteor.subscribe('accessToken');
        },
        loadingTemplate: 'loading',
        name: "dropboxAccessToken",
        data: function() {
            return AccessToken.findOne('myAccessToken');
        }
    }
);

var requireLogin = function() {
    if ( !Meteor.user() ) {
        if ( Meteor.loggingIn() ) {
            this.render(this.loadingTemplate);
        }
        else {
            this.redirect('home');
        }
    }
    else {
        this.next();
    }
};

Router.onBeforeAction(requireLogin, {except:['home','dropboxToken']});