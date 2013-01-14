/*
* Copyright (c) 2013, Liferay Inc. All rights reserved.
* Code licensed under the BSD License
*
* @author Eduardo Lundgren <eduardolundgren@gmail.com>
*/

// -- Header -------------------------------------------------------------------
var PREFIX = '',
    PREFIX_BG_COLOR = 'black',
    PREFIX_COLOR = 'cyanBright';

function log(content) {
    var prefixColor = (typeof PREFIX_COLOR === 'number') ?
                        clc.xterm(PREFIX_COLOR).bold : clc[PREFIX_COLOR].bold,

        prefixBgColor = (typeof PREFIX_BG_COLOR === 'number') ?
                        clc.bgXterm(PREFIX_BG_COLOR).bold : clc[PREFIX_BG_COLOR].bold;

    console.log.call(this, prefixBgColor(prefixColor(PREFIX)), content);
}

// -- Requires -----------------------------------------------------------------
var clc = require('cli-color');

// -- Utils --------------------------------------------------------------------
exports.init = function(config) {
    if (config.hasOwnProperty('prefix')) {
        PREFIX = config.prefix;
    }

    if (config.hasOwnProperty('prefixColor')) {
        PREFIX_COLOR = config.prefixColor;
    }

    if (config.hasOwnProperty('prefixBgColor')) {
        PREFIX_BG_COLOR = config.prefixBgColor;
    }

    return exports;
};

exports.log = function(content) {
    log(content);
};

exports.warn = function(content) {
    log(clc.yellow('[warn] ') + content);
};

exports.error = function(content, opt_err) {
    log(clc.red.bold('[error] ') + content);

    if (opt_err === undefined) {
        opt_err = 1;
    }

    process.exit(opt_err);
};

exports.oops = function(content, opt_err) {
    log(clc.red.bold('[Oops!] ') + content);

    if (opt_err === undefined) {
        opt_err = 1;
    }

    process.exit(opt_err);
};