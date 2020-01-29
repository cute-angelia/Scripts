/**
 * acgmiao
 */

var body = $response.body
    .replace(/"signed":true/g, '"signed":false')
    .replace(/"active":false/g, '"active":true')
    //.replace(/"point":\d/g, '"point":2000')
    .replace(/"points":\d/g, '"points":2000');

var url = $request.url;
var obj = JSON.parse(body);

if (obj.hasOwnProperty('user')) {
    if (obj.user.hasOwnProperty('id')) {
        obj.user.id = 100001;
    }
    body = JSON.stringify(obj);
}

$done({ body });


