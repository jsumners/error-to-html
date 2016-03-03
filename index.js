'use strict';

function errorToHTML(error) {
  if (!(error instanceof Error)) {
    throw new Error('Input must be an instance of Error.');
  }

  let output = '<dl class="error-object">\n  ';
  output += '<dt class="error-term">message</dt>\n  ';
  output += `<dd class="error-message">${error.message}</dd>\n  `;
  output += '<dt class="error-term">stack</dt>\n  ';
  output += `<dd class="error-stack"><pre>${error.stack}</pre></dd>\n  `;
  for (let prop of Object.getOwnPropertyNames(error)) {
    if (typeof error === 'function') {
      continue;
    }
    if (prop === 'message' || prop === 'stack') {
      continue;
    }

    output += `<dt>${prop}</dt>\n  `;
    output += `<dd>${error[prop]}</dd>\n  `;
  }

  return output.trim() + '\n</dl>\n';
};

module.exports = errorToHTML;

module.exports.errorToHTMLPromise = function errorToHTMLPromise(error) {
  return new Promise((resolve, reject) => {
    try {
      const result = errorToHTML(error);
      return resolve(result);
    } catch (e) {
      return reject(e);
    }
  });
};
