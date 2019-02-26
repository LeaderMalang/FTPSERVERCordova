cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-ftp/www/ftp.js",
        "id": "cordova-plugin-ftp.ftp",
        "pluginId": "cordova-plugin-ftp",
        "clobbers": [
            "cordova.plugin.ftp"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-ftp": "1.1.1"
}
// BOTTOM OF METADATA
});