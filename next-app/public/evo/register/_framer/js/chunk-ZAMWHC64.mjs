// ../../library/src/modules/cms/server-database/errors.ts
var ServerDatabaseError = class extends Error {
  constructor(...args) {
    const [message = "error", ...rest] = args;
    super(`server database: ${message}`, ...rest);
    this.name = "ServerDatabaseError";
  }
};
var UnsupportedQueryError = class extends ServerDatabaseError {
  constructor(...args) {
    const [message = "error", ...rest] = args;
    super(`unsupported: ${message}`, ...rest);
  }
};

export {
  ServerDatabaseError,
  UnsupportedQueryError
};
//# sourceMappingURL=chunk-ZAMWHC64.mjs.map
