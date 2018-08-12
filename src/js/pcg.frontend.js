// ReSharper disable InconsistentNaming
// ReSharper disable UseOfImplicitGlobalInFunctionScope

var AccessWidget = require("./controls/access.widget");
var HomeSlick = require("./controls/homeslick");

function PcgFrontend() {
    this.init = function() {
        $.pcg = $.pcg || {};
        $.pcg.frontend = $.pcg.frontend || {};

        $.extend($.pcg.frontend, {
            accessWidget: new AccessWidget(),
            homeSlick: HomeSlick,
        });
    };
};

module.exports = new PcgFrontend();