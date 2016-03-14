/**
 * Created by thomasmichelet on 14/03/2016.
 */
Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'home'
});

Router.route('/profil', {
    name: 'profilEdit',
    template: 'profilEdit',
    data: function() {
        if ( Meteor.user() ) {
            return {
                username: Meteor.user().username,
                apiKey: Meteor.user().profile.apiKey,
                apiPassword: Meteor.user().profile.apiPassword
            }
        }
    }
});

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

Router.onBeforeAction(requireLogin, {except:['home']});