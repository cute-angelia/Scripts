/**
 * 棒小孩 APP
 * webapi.91sst.cn
 */

var body = $response.body.replace(/"IsVip":0/g, '"IsVip":0');
$done({ body });