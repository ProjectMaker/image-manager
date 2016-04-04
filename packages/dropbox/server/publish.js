/**
 * Created by thomasmichelet on 19/03/2016.
 */
Meteor.publish('DropboxAccounts.account', function() {
    if ( !this.userId ) return this.ready();
    
   return DropboxAccounts.findOne({userId: Meteor.userId()});
});