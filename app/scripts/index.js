window.$ = window.jQuery = require("jquery");
var $ = require("jQuery");
var Backbone = require("backbone");
require('./router');

$(function(){
  Backbone.history.start();
});
