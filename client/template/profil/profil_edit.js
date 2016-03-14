/**
 * Created by thomasmichelet on 14/03/2016.
 */
Template.profilEdit.helpers({

});

Template.profilEdit.events({
    'submit form': function(e) {
        e.preventDefault();

        var apiKey = $(e.target).find('[name=apiKey]').val();
        var apiPass = $(e.target).find('[name=apiPassword]').val();

        Meteor.users.update(Meteor.userId(), {$set: {profile: {apiKey: apiKey, apiPassword: apiPass}}});
        console.log('%s, %s', apiKey, apiPass);
    }
})