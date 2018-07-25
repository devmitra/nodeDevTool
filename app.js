/**
 * Created by pushanmitra on 22/06/17.
 */
/*jslint node: true, es6: true */

/*
 * Import / Require
 */
import minimist from "minimist";
import objMap from "./sources/objMap"

var argv = minimist(process.argv.slice(2));
var appList = [];
var helpMessages = ["Usage:app -a <app options>"];


// Logging
console.dir(argv);

var AppInfo = {};

// Adding App
AppInfo[objMap.name] = objMap;

var printMessages = function () {
    for(var i in helpMessages) {
        /*var split = helpMessages[i].split("\n");
        for (var j in split) {
            console.log(split[j]);
        }*/
        console.log(helpMessages[i]);
    }
};



// Parsing commands
(function PARSE() {
    var appName = argv["app"] || argv["a"];
    for(var app in AppInfo) {
        var application = AppInfo[app];
        if (app === appName) {
            var options = application.info.options;
            var success = true;
            var param = {};
            for (var index in options) {
                var cmdOption = options[index];
                var option = cmdOption.option;
                if(argv[option]) {
                    param[option] = argv[option];
                } else {
                    // Now check alternative options value
                    var alternative = cmdOption.alternativeOptions;
                    var found = false;
                    for (var i in alternative) {
                        var altOpt = alternative[i];

                        if(argv[altOpt]) {
                            param[option] = argv[altOpt];
                            found = true;
                            break;
                        }
                    }

                    // Now checking value is optional or not
                    var optional = cmdOption.optional;

                    if(!found && !optional) {
                        console.error(" ** No param for option: " + option);
                        success = false;
                        break;
                    }
                }
            }

            if(success) {
                appList.push({
                    app: application,
                    param: param
                });
            } else {
                helpMessages.push(application.info.description());
            }
        } else {
            helpMessages.push(application.info.description());
        }
    }

    // Now check any app is selected or not
    if(appList.length == 0) {
        // ShowHelpMessage
        printMessages();
    } else {
        // Application accepted;
        var appObj = appList[0];
        appObj.app.run(appObj.param);
    }
})();


