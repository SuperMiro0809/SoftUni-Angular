var Request = /** @class */ (function () {
    function Request(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    return Request;
}());
var myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
