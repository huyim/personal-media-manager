self.__BUILD_MANIFEST = (function (a) {
  return {
    __rewrites: {
      afterFiles: [{ has: a, source: '\u002Fapi\u002F:path*', destination: a }],
      beforeFiles: [],
      fallback: [],
    },
    sortedPages: ['\u002F_app'],
  };
})(void 0);
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
