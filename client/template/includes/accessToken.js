/**
 * Created by thomasmichelet on 15/03/2016.
 */
Template.dropboxAccessToken.onRendered(function() {
    var url = "https://www.dropbox.com/1/oauth2/authorize?client_id=jkynzmrrhxdw70t&response_type=code&redirect_uri=http://localhost:3000/dropbox/token/";
    console.log(this.$('#dropBoxAccessToken'));
    var iframe = this.$('#dropBoxAccessToken').get(0);
    console.log(this.data);
    iframe.src = 'about:blank';
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(this.data.content);
    iframe.contentWindow.document.close();
    //this.$('#dropBoxAccessToken').attr('src', url);
});

