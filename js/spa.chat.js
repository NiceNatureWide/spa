/*js lint   browser: true, continue: true,
devel: true, indent: 2, maxerr: 50,
newcap: true, nomen: true, plusplus: true,
regexp: true, sloppy: true, vars: false
white: true
*/
/* global $, spa */

spa.chat = (function () {
    let configMap = {
        main_html : String()
            + '<div style="padding:1em; color:#fff;">'
                + 'Say hello to chat'
            + '</div>',
        settable_map : {}
    },
    stateMap = {$container : null},
    jqueryMap = {},

    setJqueryMap, configModule, initModule;

    setJqueryMap = () => {
        let $container = stateMap.$container;
        jqueryMap = {$container: $container}
    };

    configModule = (input_map) => {
        spa.util.setConfigMap({
            input_map,
            settable_map : configMap.settable_map,
            config_map : configMap
        });
        return true;
    };

    initModule = ($container) => {
        $container.html(configMap.main_html);
        stateMap.$container = $container;
        setJqueryMap();
        return true;
    };

    return {
        configModule,
        initModule
    };

}());