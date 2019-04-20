/*js lint   browser: true, continue: true,
devel: true, indent: 2, maxerr: 50,
newcap: true, nomen: true, plusplus: true,
regexp: true, sloppy: true, vars: false
white: true
*/
/* global $, spa */

spa.util = (function () {
    let makeError, setConfigMap;

    makeError = (name_text, msg_text, data) => {
        error.name = name_text;
        error.message = msg_text;

        if (data) {error.data = data;}

        return error;
    }

    setConfigMap = (arg_map) => {
        let input_map = arg_map.input_map;
        let settable_map = arg_map.settable_map;
        let config_map = arg_map.config_map;
        let key_name, error;

        for (key_name in input_map) {
            if (input_map.hasOwnProperty(key_name)) {
                if (settable_map.hasOwnProperty(key_name)) {
                    config_map[key_name] = input_map[key_name];
                } else {
                    error = makeError('Bad Input',
                                      'Setting config key |' + key_name + '| is not supported');
                    throw error;
                }
            }
        }
    };

        return {
            makeError,
            setConfigMap
        }
}());