var os = require('os')
var fs = require('fs')

var fileSystemFunctions = function() {

    this.getBrowserMetaData = function (browserCapibilities){

        var length = Object.keys(browserCapibilities).length;

        browserList = '';
        for(var i=0; i < length; i++) {
            temp = browserCapibilities[i].browserName + ",";
            browserList += temp
        }

        var text = 
        '<environment>\n' + 
        '   <parameter>\n' +
        '       <key>Browser(s)</key>\n' +
        '       <value>' + browserList.slice(0, -1) + '</value>\n' +
        '   </parameter>\n' +
        '   <parameter>\n' +
        '       <key>Operating System</key>\n' +
        '       <value>' + os.type + " " + os.release() + " - " + os.platform() + '</value>\n' +
        '   </parameter>\n' +
        '   <parameter>\n' +
        '       <key>Executed</key>\n' +
        '       <value>' + os.hostname + '</value>\n' +
        '   </parameter>\n' +
        '</environment>'                    

        var writeStream = fs.createWriteStream("tempFiles/environment.txt");
        writeStream.write(text);
        writeStream.end();

        setTimeout(function() {
            console.log('Waiting for file save');
        }, 1000);

        fs.renameSync("tempFiles/environment.txt", "tempFiles/environment.xml")

        setTimeout(function() {
            console.log('Waiting for file rename');
        }, 1000);
    }

  /*   this.onlyUnique = function (value, index, self) { 
        return self.indexOf(value) === index;
    } */

}

module.exports = new fileSystemFunctions();