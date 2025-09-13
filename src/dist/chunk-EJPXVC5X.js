import {
  __commonJS,
  __require
} from "./chunk-PJNRM37X.js";

// ../node_modules/.pnpm/node-domexception@1.0.0/node_modules/node-domexception/index.js
var require_node_domexception = __commonJS({
  "../node_modules/.pnpm/node-domexception@1.0.0/node_modules/node-domexception/index.js"(exports, module) {
    if (!globalThis.DOMException) {
      try {
        const { MessageChannel } = __require("worker_threads"), port = new MessageChannel().port1, ab = new ArrayBuffer();
        port.postMessage(ab, [ab, ab]);
      } catch (err) {
        err.constructor.name === "DOMException" && (globalThis.DOMException = err.constructor);
      }
    }
    module.exports = globalThis.DOMException;
  }
});

export {
  require_node_domexception
};
/*! Bundled license information:

node-domexception/index.js:
  (*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> *)
*/
//# sourceMappingURL=chunk-EJPXVC5X.js.map
