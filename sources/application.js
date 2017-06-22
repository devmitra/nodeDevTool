/**
 * Created by pushanmitra on 22/06/17.
 */

/*
    Import / Require
 */
//import AppConst from "./AppConst"
import util from "./util"
import AppInfo from "./appInfo"
/**
 *
 * @param name
 * @param options
 * @param callback
 * @constructor
 */
var Application = function (name,example, run) {
    this.name = name;
    this.runFunction = util.isFunction(run)? run : null;

    this.errorCallback = util.emptyFunction;
    this.next = null;
    this.progress = util.emptyFunction;
    this.isApplication = true;
    this.nextAppParam = null;

    this.info = new AppInfo(name, example);
};

Application.prototype.run = function (info, error, prg) {
    if(this.runFunction) {
        this.runFunction(info,this.onNextAction.bind(this), this.errorCallback, this.progress);
    }
};

Application.prototype.setNextAction = function (next, param) {
    this.next = next;
    this.nextAppParam = param;
};


Application.prototype.onNextAction = function (info) {
    if(this.next && this.next.isApplication) {
        this.next.run(this.nextAppParam);
    } else if(util.isFunction(this.next)) {
        this.next(info);
    }
};

Application.prototype.setError = function (error) {
    this.errorCallback = util.isFunction(error)? error : util.emptyFunction;
};

Application.prototype.setProgress = function (progress) {
    this.progress = util.isFunction(progress)? progress : util.emptyFunction;
};





/*
    Export / API
 */
export default Application;