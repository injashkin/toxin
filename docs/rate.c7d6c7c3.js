// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"BrjS":[function(require,module,exports) {

},{}],"AvXk":[function(require,module,exports) {
"use strict";

require("./rate.scss");

$(function () {
  $(".rating__checkbox").on("click", function () {
    var elem = $(this).parent().parent().find(".rating__checkbox");
    var stars = $(this).parent().parent().find(".rating__star"); //удаление атрибута checked и обнуление звезд

    for (var i = 0; i < elem.length; i++) {
      $(elem[i]).attr("checked", false);
      $(stars[i]).text();
    }

    var check = [0, 0, 0, 0, 0];
    var star = [0, 0, 0, 0, 0]; //Установка атрибута checked нажатому элементу

    $(this).attr("checked", true);
    console.log($(this).attr("checked", true));
    elem = $(this).parent().parent().find(".rating__checkbox");

    for (var i = 0; i < elem.length; i++) {
      if ($(elem[i]).attr("checked")) {
        console.log($(elem[i]).attr("checked"));
        check[i] = 1;
        star[i] = 1;
      }
    } //var elem = $(this).parent().parent().find(".rating__checkbox");
    //var star = $(this).parent().parent().find(".rating__star");
    //Поиск элемента с атрибутом checked


    var trigger = 0;
    var j = check.length - 1;
    console.log("--------------------------------------------");

    for (j; j >= 0; j--) {
      if (check[j] == 1) {
        //$(elem[j]).attr("checked")
        trigger = 1;
      }

      if (trigger == 1) {//На нажатом и всех предшествующих ему элементах загорается звезда
        //$(this).parent().children(".rating__star").text("star");
        //$(star[j]).text("star");
      } else {
        //выключаем звезду
        //$(star[j]).text("star__border");
        star[j] = 0; //console.log("trigger " + trigger);
      }

      console.log("j " + j);
      console.log(star);
    }
  });
}); //console.log();
},{"./rate.scss":"BrjS"}]},{},["AvXk"], null)
//# sourceMappingURL=../rate.c7d6c7c3.js.map