/**
 * pocket
 */

var body = $response.body;

var body = $response.body.replace(/"premium_status":"0","premium_alltime_status":"0"/g, '"premium_status":"1","premium_alltime_status":"1"');
$done({ body });