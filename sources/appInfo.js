/**
 * Created by pushanmitra on 22/06/17.
 */

var AppInfo = function (name,example) {
    this.name = name;
    this.options = [];
    this.example = example;
};

AppInfo.prototype.addOption = function (option) {
    if(option && option.isOption()) {
        this.options.push(option);
    }
};

AppInfo.prototype.description = function () {
    var result = " [" + this.name + "]:";


    for (var i in this.options) {
        var cmdOpt = this.options[i];
        result = result + "\n\t {" + cmdOpt.description() + "}";
    }

    result = result + "\n\t example: " + (this.example || "none");

    return result;
};

/**
 * Export
 */
export default AppInfo