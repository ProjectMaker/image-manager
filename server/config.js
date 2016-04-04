/**
 * Created by thomasmichelet on 15/03/2016.
 */
Meteor.startup( function() {
   process.env.DROPBOX_URL_REDIRECT = "http://localhost:3000/dropbox/token/";
});