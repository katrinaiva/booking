// CSS
require("./scss/styles.scss");

//JS
//bootstrap vendors
require("jquery");
require("slick-carousel");
require("jquery-validation");
require("jquery-validation/dist/additional-methods");
require("jquery-validation-unobtrusive");

require("bootstrap");

//bootstrap pcg app
require("./js/extensions/jquery.extensions");
require("./js/extensions/jquery.validation.extensions");
require("./js/pcg.frontend").init();