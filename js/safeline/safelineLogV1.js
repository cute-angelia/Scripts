const pathSystem = "/api/open/site/2/log/limit";

const url = $request.url;
var body = $response.body;
 
if (url.indexOf(pathSystem) >= 0) {
  var obj = JSON.parse(body);
  if (obj.hasOwnProperty('data')) {     
    obj = {
        "data" : true,
        "err":null,
        "msg":"" 
    }
  }
  body = JSON.stringify(obj)
}

$done({
    body:body
});