/**
 * Created by pushanmitra on 22/06/17.
 */
/*jslint node: true, es7: true,esversion: 6 */

var CommandOption = function (option, alternativeOptionsStr, usage, optional) {
    this.option = option;
    var firstChar = option[0];
    if (firstChar) {
        if (alternativeOptionsStr) {
            this.alternativeOptionsStr = firstChar + "|" + alternativeOptionsStr;
        } else {
            this.alternativeOptionsStr = firstChar + "";
        }

    } else {
        this.alternativeOptionsStr = alternativeOptionsStr;
    }

    this.alternativeOptions = this.alternativeOptionsStr.split("|");
    this.usgae = usage;

    this.optional = optional || false;
};

CommandOption.prototype.description = function () {
    return this.option.toString() + " [" + this.alternativeOptions.toString() + "] : " + this.usgae;
};

CommandOption.prototype.isOption = function () {
    return true;
};

/**
 * Export
 */
export default CommandOption;
