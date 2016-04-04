/**
 * Created by thomasmichelet on 15/03/2016.
 */
if ( Meteor.isServer ) {
    process.env.DROPBOX_URL_REDIRECT = "http://localhost:3000/dropbox/token/";
}