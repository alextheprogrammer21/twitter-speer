Make sure you are using a node version that's greater than 12. Alternatively, you can add `const { TextEncoder, TextDecoder } = require("util");` to the top of `encoding.js` in `node_modules`.

To chat make a post request to `/chat` with a `text` parameter containing your `message`. All chat messages are shown in the console by the user who sent it. 