/**
 * 番茄读书
 */

var body = $response.body;

var url = $request.url;

if (url.indexOf("api/ad/v1/banner") > 0) {
    var adbody = '{"ad_item":[],"code":0,"message":"success"}';
    body = adbody;
}

// 用户信息
if (url.indexOf("reading/user/info") > 0) {
    body = body.replace(/"is_vip":"0"/g, '"is_vip":"1"').replace(/"expire_time":"0"/g, '"expire_time":"4101678778"');
}

// ad setting
if (url.indexOf("service/settings") > 0) {
    body = body
        .replace(/"reading_splash_ad_enable":true/g, '"reading_splash_ad_enable":false')
        .replace(/"is_global_ad_available":true/g, '"is_global_ad_available":false')
        .replace(/ad":{"is_enabled":true/g, 'ad":{"is_enabled":false')
        .replace(/reader_ad_for_sati":{"is_enabled":true/g, 'reader_ad_for_sati":{"is_enabled":false')
        ;
}

$done({
    body
});