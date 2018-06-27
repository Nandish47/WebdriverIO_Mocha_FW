var json = require('json-file');
var homePage = json.read('./pageObjects/home.page.json');

class home {

    get vastRobotSelectionLink() { return $(homePage.get('homePage.selector.vastRobotSelectionLink')); }
    get AboutUsLink() { return $(homePage.get('homePage.selector.aboutUsLink')); }
  }
  
  module.exports = new home();