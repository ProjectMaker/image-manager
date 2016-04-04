/**
 * Created by thomasmichelet on 15/03/2016.
 */
var Authenticate = function(ckey, csecret, redirect_uri, cb) {
    var err = "";
    var redirect_url = "";

    if(ckey === "" || csecret === "" || redirect_uri === "") {
        err = "Missing client key and/or client secret key.";
    }else{
        redirect_url = authUrl + "client_id=" + ckey + "&response_type=code&redirect_uri=" + redirect_uri;
    }

    cb(err, redirect_url);
}