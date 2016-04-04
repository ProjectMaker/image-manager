/**
 * Created by thomasmichelet on 15/03/2016.
 */
Template.dropboxAccount.onCreated( function() {
    var a = DropboxAccounts.findOne({userId: Meteor.userId()});
    console.log(a);
})

Template.dropboxAccount.events({
    'submit form': function(e) {
        e.preventDefault();

        var apiKey = $(e.target).find('[name=apiKey]').val();
        var apiPass = $(e.target).find('[name=apiPassword]').val();

        Meteor.call('addUser', Meteor.userId(), apiKey, apiPass, this.apiUrlRedirect, function(error,response) {
            console.log(arguments);
        });
    }
})