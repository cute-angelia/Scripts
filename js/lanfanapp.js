/**
 * lanfanapp
 * 懒饭 app
 */

var body = $response.body;

// var url = $request.url;
var obj = JSON.parse(body);
if (obj.hasOwnProperty('content')) {
    if (obj.content.hasOwnProperty('user')) {
        if (obj.content.user.hasOwnProperty('is_prime')) {
            obj.content.user.is_prime = true;
        }
    }
}

body = JSON.stringify(obj);

$done({
    body
});