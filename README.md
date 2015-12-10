#Babel Tutorial

#Babel Setup
Install Babel Command Line
```shell
$ npm install -g babel-cli
```

#Getting Started
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

#Applying Transforms via Babel Plugins
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

#Applying Sets of Transformations via Babel Presets
In the previous example we converted the ``ES6`` ``class`` to a ``function``, but it still might not run in our browser because of the use of ``let``. Typically we want to apply a suite of transformations instead of just one. This is what [babel presets](http://babeljs.io/docs/plugins/preset-es2015/) are for

Edit ``.babelrc``, replace the plugin with the es2015 preset
```
{
  "presets": ["es2015"]
}
```


#Common Error Messages
Unknown plugin
```
ReferenceError: Unknown plugin "transform-es2015-classes" specified in "/work/javascript/node/babel-tutorial/.babel
```

You need to ``npm install`` the plugin referenced in your ``.babelrc``
```shell
$ npm install babel-plugin-transform-es2015-classes
```



##Other Types of Transforms
Create a ``.babelrc`` file
```
{
  "plugins": ["undeclared-variables-check"]
}
```

Remember to install the plugin
```shell
$ npm install babel-plugin-undeclared-variables-check
```

Run Babel on the file
```
$ babel src/hello_world.js
```

Now we see some output
```
ReferenceError: src/hello_world.js: Reference to undeclared variable "console"
  1 | function helloWorld(){
> 2 |   console.log('Hello World ' + name);
    |   ^
  3 | }
  4 | 
```


