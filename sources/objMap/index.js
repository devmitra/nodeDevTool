/**
 * Created by pushanmitra on 22/06/17.
 */

import Application from "../application";
import CommandOption from "../commandOption";

var example = "objMap -s <path of source json> -d <path of destination swift file>";
var app = new Application("objMap", example, function (param, next, error, progress) {
    console.log("objMap: run");
    console.dir(param);
});

app.info.addOption(new CommandOption("source", "src", "source json file path"));
app.info.addOption(new CommandOption("destination", "desti", "destination swift file path"));
app.info.addOption(new CommandOption("className", "", "class name of swift map class", true));


/*
    Export
 */

export default app;