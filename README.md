#Babel Tutorial

#Babel Command Line
Install Babel Command Line
```shell
$ npm install -g babel-cli
```

##Getting Started
Create a JavaScript ``src/greeter.js`` file
```javascript
class Greeter {
  constructor(name) {
    this.name = name;
  }

  get greet() {
    return "Hello from " + this.name;
  }
}
```

Run Babel
```shell
$ babel src/greeter.js
```

Output is routed to the console
```javascript
class Greeter {
  constructor(name) {
    this.name = name;
  }

  get greet() {
    return "Hello from " + this.name;
  }
}
```

You can see that nothing has been changed in the code, this is because no transforms are applied to the code (and in this case none are needed)

* [Babel CLI Usage Docs](https://babeljs.io/docs/usage/cli/)

##Applying Transforms via Babel Plugins
Create a ``.babelrc`` file
```
{
  "plugins": ["transform-es2015-classes"]
}
```

Remember to install the plugin
```shell
$ npm install babel-plugin-transform-es2015-classes
```

Run Babel
```shell
$ babel src/greeter.js
```

Output is routed to the console
```javascript
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

let Greeter = (function () {
  function Greeter(name) {
    _classCallCheck(this, Greeter);

    this.name = name;
  }

  _createClass(Greeter, [{
    key: "greet",
    get: function () {
      return "Hello from " + this.name;
    }
  }]);

  return Greeter;
})();
```

##Applying Sets of Transformations via Babel Presets
In the previous example we converted the ``ES6`` ``class`` to a ``function``, but it still might not run in our browser because of the use of ``let``. Typically we want to apply a useful suite of transformations instead of just one. This is what [babel presets](http://babeljs.io/docs/plugins/preset-es2015/) are for

Edit ``.babelrc``, replace the plugin with the es2015 preset
```json
{
  "presets": ["es2015"]
}
```

Remember to install the preset
```shell
$ npm install babel-preset-es2015
```

Run Babel
```shell
$ babel src/greeter.js
```

Now we can see a full (and useful) set of transforms have been applied:
```javascript
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Greeter = (function () {
  function Greeter(name) {
    _classCallCheck(this, Greeter);

    this.name = name;
  }

  _createClass(Greeter, [{
    key: "greet",
    get: function get() {
      return "Hello from " + this.name;
    }
  }]);

  return Greeter;
})();
```

##Usable Output
Having the output of babel run to the console isn't always really useful. Instead we usually want to run babel on all the files in a directory and have the output go to a second build directory

```shell
$ babel src --out-dir build
```

Gives the output
```shell
src/greeter.js -> build/greeter.js
```

And places the babelized output into matching files in the build directory

##Common Error Messages
Unknown Plugin
```
ReferenceError: Unknown plugin "transform-es2015-classes" specified in "/work/javascript/node/babel-tutorial/.babel
```

You need to ``npm install`` the plugin referenced in your ``.babelrc``
```shell
$ npm install babel-plugin-transform-es2015-classes
```

Unknown Preset
```
Error: Couldn't find preset "es2015" relative to directory "/work/javascript/node/babel-tutorial"
```

You need to ``npm install`` the preset referenced in your ``.babelrc``
```shell
$ npm install babel-preset-es2015
```





