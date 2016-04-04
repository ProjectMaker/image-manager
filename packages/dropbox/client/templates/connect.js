/**
 * Created by thomasmichelet on 15/03/2016.
 */
Template.dropboxConnect.events({
    'click .dropboxConnect': function(e) {
        e.preventDefault();

        var url = DROPBOX_URL_AUTH + "client_id=" + this.apiKey + "&response_type=code&redirect_uri=" + this.apiUrlRedirect;
        window.location = url;
    }
});