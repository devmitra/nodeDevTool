/**
 * Created by pushanmitra on 22/06/17.
 */

/*
    Import
 */

import AppConst from "./AppConst"



var Util = function () {
    this.emptyFunction = function () {};
};

Util.prototype.isFunction = function (obj) {
    return typeof obj === AppConst.Type.$function;
};

/*
    Exports /
 */
export default new Util();