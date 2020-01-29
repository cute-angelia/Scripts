/**
 * reddit
 */

var body = $response.body.replace(/"is_on":false/g, '"is_on":true');
$done({ body });