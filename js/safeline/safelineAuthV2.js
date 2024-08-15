const pathSystemAuth = "/api/open/system/authorize";

const url = $request.url;
var body = $response.body;

if (url.indexOf(pathSystemAuth) >= 0) {
    var obj = {
        "data": {
            "expired_at": 31558718892,
            "org_id": "1000",
            "org_name": "vanilla",
            "purchased": true,
            "river_url": "",
            "state": "true",
            "timeout": false
        },
        "err": null
    }
    body = JSON.stringify(obj)
}

$done({
    body: body
});


