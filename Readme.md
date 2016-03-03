# error-to-html

A simple module for rendering an `Error` object as an HTML snippet.

```javascript
const errorToHtml = require('error-to-html');
const error = new Error('this is an error!');
const html = errorToHtml(error);

/*
<dl class="error-object">
  <dt class="error-term">message</dt>
  <dd class="error-message">this is an error!</dd>
  <dt class="error-term">stack</dt>
  <dd class="error-stack"><pre>Error: this is an error!
    at repl:1:13
    at REPLServer.defaultEval (repl.js:252:27)
    at bound (domain.js:287:14)
    at REPLServer.runBound [as eval] (domain.js:300:12)
    at REPLServer.<anonymous> (repl.js:417:12)
    at emitOne (events.js:82:20)
    at REPLServer.emit (events.js:169:7)
    at REPLServer.Interface._onLine (readline.js:210:10)
    at REPLServer.Interface._line (readline.js:549:8)
    at REPLServer.Interface._ttyWrite (readline.js:826:14)</pre></dd>
</dl>
*/
```

```javascript
const errorToHtml = require('error-to-html').errorToHTMLPromise;
const error = new Error('this is an error!');

errorToHtml(error)
  .then(console.log)
  .catch((e) => {
    console.error('You did not supply an error object.');
    console.error(e);
  });
```

## License

[MIT License](http://jsumners.mit-license.org/)
