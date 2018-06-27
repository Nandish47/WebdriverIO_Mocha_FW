var imgComp = require('./resources/constants.js');
/**
 * 
 */
browser.addCommand("ValiateImage", function(selector, imageID){

    console.log("executed compareImage()" + imageID);

    imgComp.uniqueImageID = imageID;

    console.log("ValiateImage" + imgComp.uniqueImageID);

    return browser.checkElement(selector);

});

