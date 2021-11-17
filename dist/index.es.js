var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { createStitches, styled as styled$1 } from "@stitches/react";
import * as React from "react";
import React__default, { useContext, useState, useRef, useEffect, useLayoutEffect, createElement, forwardRef, useCallback, useReducer, useMemo } from "react";
import { Popover, Dialog } from "@headlessui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Router, useHref, useNavigate, useLocation, useResolvedPath, Routes, Route } from "react-router";
import update from "immutability-helper";
import { DndProvider, useDrop, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const spaces = {
  0: "0",
  "0-5": ".125rem",
  1: ".25rem",
  "1-5": ".375rem",
  2: ".5rem",
  "2-5": ".675rem",
  3: ".75rem",
  "3-5": ".875rem",
  4: "1rem",
  "4-5": "1.125rem",
  5: "1.25rem",
  "5-5": "1.375rem",
  6: "1.5rem",
  "6-5": "1.625rem",
  7: "1.75rem",
  "7-5": "1.875rem",
  8: "2rem",
  "8-5": "2.125rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};
const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      black900: "#23282D",
      black600: "#737578",
      black500: "#505C61",
      black310: "#D3D7DA",
      black300: "#D9DDDF",
      black100: "#F0F1F2",
      primary410: "#1D6096",
      primary400: "#2271B1",
      warning400: "#d63638"
    },
    space: spaces,
    fontSizes: {
      text900: "2rem",
      text800: "1.5rem",
      text700: "1.25rem",
      text600: "1.0625rem",
      text500: ".9375rem",
      text400: "0.9375rem",
      text300: "0.875rem",
      text200: ".75rem",
      text100: ".625rem"
    },
    fonts: {
      body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif"
    },
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.35,
      normal: 1.5,
      loose: 1.65,
      looser: 2
    },
    letterSpacings: {
      none: 0,
      tight: "-0.025em",
      snug: "-0.0125em",
      loose: "0.025em",
      wide: "0.05em",
      wider: "0.075em"
    },
    sizes: __spreadProps(__spreadValues({}, spaces), {
      sm: "20rem",
      md: "28rem",
      lg: "36rem",
      xl: "40rem",
      "2xl": "48rem",
      "3xl": "56rem",
      "4xl": "64rem",
      "5xl": "72rem",
      "6xl": "80rem",
      full: "100%"
    }),
    borderWidths: {},
    borderStyles: {},
    radii: {
      sm: "0.25rem",
      md: "0.5rem",
      lg: "0.75rem",
      xl: "1rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "1.75rem",
      "5xl": "2rem",
      "full": "100%"
    },
    shadows: {
      card: "0px 10px 32px -4px rgba(35, 40, 45, 0.1), 0px 6px 14px -6px rgba(35, 40, 45, 0.12)",
      "lg-above": "0 -8px 15px -2px rgba(0, 0, 0, 0.06), 0 -4px 6px -1px rgba(0, 0, 0, 0.03)",
      shallow: "0px 4px 4px -2px rgba(24, 39, 75, 0.08), 0px 2px 4px -2px rgba(24, 39, 75, 0.12)"
    },
    zIndices: {
      "-1": -1,
      100: 100,
      1001: 1001
    },
    transitions: {}
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)"
  },
  utils: {
    inset: (value) => ({
      left: value,
      right: value,
      top: value,
      bottom: value
    }),
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    reset: () => ({
      margin: 0,
      padding: 0,
      boxSizing: "border-box"
    })
  }
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var base64$1 = {
  exports: {}
};
/*! https://mths.be/base64 v1.0.0 by @mathias | MIT license */
(function(module, exports) {
  (function(root2) {
    var freeExports = exports;
    var freeModule = module && module.exports == freeExports && module;
    var freeGlobal2 = typeof commonjsGlobal == "object" && commonjsGlobal;
    if (freeGlobal2.global === freeGlobal2 || freeGlobal2.window === freeGlobal2) {
      root2 = freeGlobal2;
    }
    var InvalidCharacterError = function(message) {
      this.message = message;
    };
    InvalidCharacterError.prototype = new Error();
    InvalidCharacterError.prototype.name = "InvalidCharacterError";
    var error = function(message) {
      throw new InvalidCharacterError(message);
    };
    var TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;
    var decode = function(input) {
      input = String(input).replace(REGEX_SPACE_CHARACTERS, "");
      var length = input.length;
      if (length % 4 == 0) {
        input = input.replace(/==?$/, "");
        length = input.length;
      }
      if (length % 4 == 1 || /[^+a-zA-Z0-9/]/.test(input)) {
        error("Invalid character: the string to be decoded is not correctly encoded.");
      }
      var bitCounter = 0;
      var bitStorage;
      var buffer;
      var output = "";
      var position = -1;
      while (++position < length) {
        buffer = TABLE.indexOf(input.charAt(position));
        bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
        if (bitCounter++ % 4) {
          output += String.fromCharCode(255 & bitStorage >> (-2 * bitCounter & 6));
        }
      }
      return output;
    };
    var encode = function(input) {
      input = String(input);
      if (/[^\0-\xFF]/.test(input)) {
        error("The string to be encoded contains characters outside of the Latin1 range.");
      }
      var padding = input.length % 3;
      var output = "";
      var position = -1;
      var a;
      var b;
      var c;
      var buffer;
      var length = input.length - padding;
      while (++position < length) {
        a = input.charCodeAt(position) << 16;
        b = input.charCodeAt(++position) << 8;
        c = input.charCodeAt(++position);
        buffer = a + b + c;
        output += TABLE.charAt(buffer >> 18 & 63) + TABLE.charAt(buffer >> 12 & 63) + TABLE.charAt(buffer >> 6 & 63) + TABLE.charAt(buffer & 63);
      }
      if (padding == 2) {
        a = input.charCodeAt(position) << 8;
        b = input.charCodeAt(++position);
        buffer = a + b;
        output += TABLE.charAt(buffer >> 10) + TABLE.charAt(buffer >> 4 & 63) + TABLE.charAt(buffer << 2 & 63) + "=";
      } else if (padding == 1) {
        buffer = input.charCodeAt(position);
        output += TABLE.charAt(buffer >> 2) + TABLE.charAt(buffer << 4 & 63) + "==";
      }
      return output;
    };
    var base642 = {
      "encode": encode,
      "decode": decode,
      "version": "1.0.0"
    };
    if (freeExports && !freeExports.nodeType) {
      if (freeModule) {
        freeModule.exports = base642;
      } else {
        for (var key in base642) {
          base642.hasOwnProperty(key) && (freeExports[key] = base642[key]);
        }
      }
    } else {
      root2.base64 = base642;
    }
  })(commonjsGlobal);
})(base64$1, base64$1.exports);
var base64 = base64$1.exports;
const LeafContext = React__default.createContext({});
const Notify = ({
  children
}) => {
  const [, dispatch] = useContext(LeafContext);
  return children((value) => dispatch({
    type: "SET_NOTIFICATION",
    value
  }));
};
const fetchWithAuthorization = (endpoint, args) => {
  const {
    VITE_WORDPRESS_URL,
    VITE_WORDPRESS_USERNAME,
    VITE_WORDPRESS_PASSWORD,
    PROD
  } = { "VITE_WORDPRESS_URL": "theory.local", "VITE_WORDPRESS_USERNAME": "david", "VITE_WORDPRESS_PASSWORD": "MQiw FNk7 NKFI 2Ctv ipet 77Hp", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true };
  var requestHeaders = new Headers();
  requestHeaders.append("Content-Type", "application/json");
  requestHeaders.append("Accept", "application/json");
  if (PROD === true) {
    leaf.root;
    requestHeaders.append("X-WP-Nonce", leaf.nonce);
  } else {
    requestHeaders.append("Authorization", `Basic ${base64.encode(VITE_WORDPRESS_USERNAME + ":" + VITE_WORDPRESS_PASSWORD)}`);
  }
  return fetch(`//${VITE_WORDPRESS_URL}${endpoint}`, __spreadValues({
    headers: requestHeaders
  }, args));
};
const Icon$2 = styled("div", {
  flex: "none",
  height: "$4-5",
  width: "$4-5"
});
var isArray$3 = Array.isArray;
var isArray_1 = isArray$3;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$3 = freeGlobal || freeSelf || Function("return this")();
var _root = root$3;
var root$2 = _root;
var Symbol$4 = root$2.Symbol;
var _Symbol = Symbol$4;
var Symbol$3 = _Symbol;
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
var nativeObjectToString$1 = objectProto$4.toString;
var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$4.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$3 = Object.prototype;
var nativeObjectToString = objectProto$3.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$2 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag$2(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$2;
function isObjectLike$1(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$1;
var baseGetTag$1 = _baseGetTag, isObjectLike = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$3(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag$1(value) == symbolTag;
}
var isSymbol_1 = isSymbol$3;
var isArray$2 = isArray_1, isSymbol$2 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$1(value, object) {
  if (isArray$2(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$1;
function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$2;
var baseGetTag = _baseGetTag, isObject$1 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$1(value) {
  if (!isObject$1(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$1;
var root$1 = _root;
var coreJsData$1 = root$1["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$1;
var isFunction = isFunction_1, isMasked = _isMasked, isObject = isObject_1, toSource = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$2 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$3 = objectProto$2.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$3).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$2(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$2;
var getNative$1 = _getNative;
var nativeCreate$4 = getNative$1(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$1 = Object.prototype;
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto = Object.prototype;
var hasOwnProperty$1 = objectProto.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$1.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$1(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$1;
var eq = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index = assocIndexOf$3(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index = assocIndexOf$2(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$1.prototype.clear = listCacheClear;
ListCache$1.prototype["delete"] = listCacheDelete;
ListCache$1.prototype.get = listCacheGet;
ListCache$1.prototype.has = listCacheHas;
ListCache$1.prototype.set = listCacheSet;
var _ListCache = ListCache$1;
var getNative = _getNative, root = _root;
var Map$1 = getNative(root, "Map");
var _Map = Map$1;
var Hash = _Hash, ListCache = _ListCache, Map = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map || ListCache)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype["delete"] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;
var _MapCache = MapCache$1;
var MapCache = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache)();
  return memoized;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
function arrayMap$1(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var _arrayMap = arrayMap$1;
var Symbol$1 = _Symbol, arrayMap = _arrayMap, isArray$1 = isArray_1, isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString$1) + "";
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$1;
var isArray = isArray_1, isKey = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$1(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}
var _castPath = castPath$1;
var isSymbol = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$1(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey$1;
var castPath = _castPath, toKey = _toKey;
function baseGet$1(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var _baseGet = baseGet$1;
var baseGet = _baseGet;
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get;
const Format = {
  Map: (value, map) => {
    return get_1(map, value, value);
  }
};
function SvgDashiconsAdminAppearance(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.48 11.06L7.41 3.99L8.91 2.49C9.41 1.93 11.21 2.02 12.42 2.81C13.63 3.61 13.85 4.09 15.33 4.91C16.51 5.55 17.78 6.17 19.78 5.76L14.48 11.06ZM13.77 11.77L6.7 4.7L4.93 6.47C4.83729 6.56252 4.76375 6.67241 4.71357 6.79338C4.66338 6.91435 4.63755 7.04403 4.63755 7.175C4.63755 7.30597 4.66338 7.43565 4.71357 7.55663C4.76375 7.6776 4.83729 7.78749 4.93 7.88L5.99 8.94C6.38 9.33 6.38 9.97 5.99 10.36C5.39 10.96 4.56 11.47 3.78 12.05C3.43 12.31 3.08 12.58 2.77 12.89C1.43 14.23 0.399998 16.08 1.4 17.07C2.39 18.07 4.24 17.04 5.58 15.71C5.89 15.4 6.16 15.05 6.43 14.69C7 13.91 7.51 13.08 8.12 12.48C8.21251 12.3873 8.3224 12.3138 8.44337 12.2636C8.56435 12.2134 8.69403 12.1876 8.825 12.1876C8.95597 12.1876 9.08565 12.2134 9.20662 12.2636C9.3276 12.3138 9.43748 12.3873 9.53 12.48L10.59 13.54C10.98 13.93 11.61 13.93 12 13.54L13.77 11.77Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAdminCollapse(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9.99997 2.16C11.5506 2.16 13.0664 2.61981 14.3556 3.48128C15.6449 4.34275 16.6498 5.56719 17.2432 6.99977C17.8366 8.43234 17.9918 10.0087 17.6893 11.5295C17.3868 13.0503 16.6401 14.4473 15.5437 15.5437C14.4472 16.6402 13.0503 17.3869 11.5295 17.6894C10.0087 17.9919 8.43231 17.8366 6.99973 17.2432C5.56716 16.6498 4.34272 15.645 3.48125 14.3557C2.61978 13.0664 2.15997 11.5506 2.15997 10C2.15997 5.67 5.70997 2.16 9.99997 2.16ZM12 13.88V6.12L6.17997 9.97L12 13.88Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAdminComments(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 2H14C15.1 2 16 2.9 16 4V11C16 12.1 15.1 13 14 13H12L7 18V13H5C3.9 13 3 12.1 3 11V4C3 2.9 3.9 2 5 2Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAdminCustomizer(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.33 3.57C18.33 3.57 18.6 2.77 18.02 2.21C17.49 1.69 16.8 1.97 16.8 1.97C16.19 2.27 11.04 5.44 9.13002 7.54C8.27002 8.5 7.07002 11.33 8.04002 12.36C8.96002 13.34 12 12.19 12.83 11.36C14.89 9.3 18.04 4.19 18.33 3.57ZM1.40002 17.65C3.77002 16.09 2.86002 14.24 4.63002 13.01C5.56002 12.36 6.85002 12.39 7.71002 13.3C8.34002 13.97 8.51002 15.87 7.55002 16.76C5.98002 18.21 3.55002 18.31 1.40002 17.65Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAdminGeneric(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 12H15.82C15.65 12.7 15.38 13.35 15.01 13.93L16.55 15.47L14.45 17.57L12.91 16.03C12.33 16.39 11.68 16.66 11 16.82V19H8V16.82C7.32 16.66 6.67 16.39 6.09 16.03L4.55 17.57L2.43 15.45L3.97 13.91C3.61 13.33 3.34 12.68 3.18 12H1V9.03H3.17C3.33 8.33 3.61 7.68 3.97 7.09L2.43 5.55L4.53 3.45L6.07 4.99C6.65 4.62 7.31 4.35 8 4.18V2H11V4.18C11.68 4.34 12.33 4.61 12.91 4.97L14.45 3.43L16.57 5.55L15.03 7.09C15.39 7.68 15.67 8.33 15.83 9.03H18V12ZM9.5 13.5C11.16 13.5 12.5 12.16 12.5 10.5C12.5 8.84 11.16 7.5 9.5 7.5C7.84 7.5 6.5 8.84 6.5 10.5C6.5 12.16 7.84 13.5 9.5 13.5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAdminHome(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16 8.5L17.53 10.03L16.47 11.09L9.99997 4.62L3.52997 11.09L2.46997 10.03L9.99997 2.5L14 6.5V4.5H16V8.5ZM9.99997 6.04L16 12.03V18H3.99997V12.03L9.99997 6.04ZM12 17V12H7.99997V17H12Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAdminLinks(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.74 2.76C18.5471 3.5699 19.0002 4.66665 19.0002 5.81C19.0002 6.95335 18.5471 8.0501 17.74 8.86L16.21 10.38C15.09 11.5 13.51 11.85 12.07 11.47L14.69 8.86L15.45 8.09L16.21 7.33C17.05 6.49 17.05 5.13 16.21 4.29C16.0117 4.08803 15.7752 3.92759 15.5142 3.81807C15.2532 3.70856 14.973 3.65215 14.69 3.65215C14.407 3.65215 14.1268 3.70856 13.8658 3.81807C13.6048 3.92759 13.3683 4.08803 13.17 4.29L12.4 5.05L9.02001 8.43C8.65001 6.99 9.00001 5.41 10.12 4.29L11.64 2.76C12.4499 1.95296 13.5467 1.49981 14.69 1.49981C15.8334 1.49981 16.9301 1.95296 17.74 2.76ZM8.59001 13.43L13.93 8.09C14.35 7.67 14.35 6.99 13.93 6.57C13.49 6.14 12.8 6.18 12.4 6.57L7.07001 11.91C6.65001 12.33 6.65001 13.01 7.07001 13.43C7.51001 13.86 8.20001 13.82 8.59001 13.43ZM7.83001 15.72L11.97 11.57C12.35 13.01 12 14.59 10.88 15.71L9.36001 17.24C8.55011 18.047 7.45336 18.5002 6.31001 18.5002C5.16666 18.5002 4.06991 18.047 3.26001 17.24C2.45297 16.4301 1.99982 15.3334 1.99982 14.19C1.99982 13.0466 2.45297 11.9499 3.26001 11.14L4.79001 9.62C5.91001 8.5 7.49001 8.15 8.93001 8.52L4.79001 12.67C3.94001 13.51 3.94001 14.87 4.79001 15.72C5.63001 16.56 6.99001 16.56 7.83001 15.72Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAdminMedia(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 11V4C13 3.45 12.55 3 12 3H10.33L9 1H5L3.67 3H2C1.45 3 1 3.45 1 4V11C1 11.55 1.45 12 2 12H12C12.55 12 13 11.55 13 11ZM7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.66304 9.23661 8.29893 8.76777 8.76777C8.29893 9.23661 7.66304 9.5 7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5ZM14 6H19V16.5C19 17.163 18.7366 17.7989 18.2678 18.2678C17.7989 18.7366 17.163 19 16.5 19C15.837 19 15.2011 18.7366 14.7322 18.2678C14.2634 17.7989 14 17.163 14 16.5C13.9999 16.1292 14.0823 15.7631 14.2412 15.4281C14.4001 15.0931 14.6315 14.7977 14.9187 14.5632C15.2058 14.3286 15.5416 14.1609 15.9015 14.0722C16.2615 13.9834 16.6367 13.9758 17 14.05V9H14V6ZM10 14.05V13H12V16.5C12 17.163 11.7366 17.7989 11.2678 18.2678C10.7989 18.7366 10.163 19 9.5 19C8.83696 19 8.20107 18.7366 7.73223 18.2678C7.26339 17.7989 7 17.163 7 16.5C6.99992 16.1292 7.08231 15.7631 7.2412 15.4281C7.40009 15.0931 7.6315 14.7977 7.91866 14.5632C8.20583 14.3286 8.54156 14.1609 8.90154 14.0722C9.26152 13.9834 9.63673 13.9758 10 14.05Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAdminMultisite(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.27 6.87L10 3.14L5.73 6.87L5 6.14L10 1.76L15 6.14L14.27 6.87ZM14 8.42L9.95 11.85L6 8.38V7.64L10 4.14L14 7.64V8.42ZM11 9.7V8H9V9.7H11ZM9.27 13.73L5 10L0.73 13.73L0 13L5 8.62L10 13L9.27 13.73ZM19.27 13.73L15 10L10.73 13.73L10 13L15 8.62L20 13L19.27 13.73ZM5 11L9 14.5V18H1V14.5L5 11ZM15 11L19 14.5V18H11V14.5L15 11ZM6 17V15H4V17H6ZM16 17V15H14V17H16Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAdminNetwork(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.95 2.58C17.4159 3.04327 17.7857 3.59407 18.038 4.20073C18.2903 4.8074 18.4202 5.45796 18.4202 6.115C18.4202 6.77204 18.2903 7.4226 18.038 8.02926C17.7857 8.63593 17.4159 9.18673 16.95 9.65C15.44 11.16 13.2 11.49 11.36 10.66L9.49 13.97L6.5 14.28L5 18H2L1 16L8.95 8.31C8.03 6.44 8.33 4.13 9.88 2.58C10.3433 2.11407 10.8941 1.74433 11.5007 1.49202C12.1074 1.23971 12.758 1.10983 13.415 1.10983C14.072 1.10983 14.7226 1.23971 15.3293 1.49202C15.9359 1.74433 16.4867 2.11407 16.95 2.58ZM14.44 6.37C15.18 6.37 15.77 5.77 15.77 5.03C15.77 4.67726 15.6299 4.33897 15.3805 4.08955C15.131 3.84012 14.7927 3.7 14.44 3.7C14.0873 3.7 13.749 3.84012 13.4995 4.08955C13.2501 4.33897 13.11 4.67726 13.11 5.03C13.11 5.77 13.71 6.37 14.44 6.37Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAdminPage(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 15V2H16V15H6ZM5 16H13V18H3V5H5V16Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAdminPlugins(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.11 4.36L9.87002 7.6L8.00002 5.73L11.24 2.49C11.59 2.15 12.29 2.29 12.8 2.81C13.32 3.32 13.46 4.02 13.11 4.36ZM5.11002 6.13L6.02002 5.01L15.03 14.02L13.84 14.86C13.13 15.57 11.21 16.02 10.02 16.02H6.14002L4.90002 17.26C4.31002 17.85 3.36002 17.85 2.78002 17.26C2.63973 17.1214 2.52835 16.9564 2.45232 16.7744C2.3763 16.5924 2.33716 16.3972 2.33716 16.2C2.33716 16.0028 2.3763 15.8076 2.45232 15.6256C2.52835 15.4436 2.63973 15.2786 2.78002 15.14L4.02002 13.9V10.02C4.02002 8.89 4.42002 6.83 5.11002 6.13ZM12.37 10.1L15.61 6.86C15.95 6.51 16.65 6.65 17.16 7.17C17.68 7.68 17.82 8.38 17.47 8.72L14.23 11.97L12.37 10.1Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAdminPost(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.44 3.02L12.26 1.2L18.62 7.55L16.79 9.37C16.266 9.03151 15.6419 8.88262 15.0215 8.94812C14.4011 9.01362 13.8218 9.28954 13.38 9.73L12.63 10.48C11.71 11.41 11.59 12.83 12.28 13.89L10.45 15.71L8.04 13.3L5.24 16.09C4.82 16.51 1.86 18.8 1.44 18.38C1.02 17.96 3.3 14.99 3.72 14.57L6.51 11.78L4.1 9.36L5.93 7.54C6.98 8.23 8.41 8.11 9.33 7.18L10.08 6.43C11.01 5.51 11.13 4.08 10.44 3.02Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAdminSettings(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 16V4C18 3.45 17.55 3 17 3H4C3.45 3 3 3.45 3 4V16C3 16.55 3.45 17 4 17H17C17.55 17 18 16.55 18 16ZM8 11H9C9.55 11 10 11.45 10 12C10 12.55 9.55 13 9 13H8V14.5C8 14.78 7.78 15 7.5 15C7.22 15 7 14.78 7 14.5V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H7V5.5C7 5.22 7.22 5 7.5 5C7.78 5 8 5.22 8 5.5V11ZM13 9H12C11.45 9 11 8.55 11 8C11 7.45 11.45 7 12 7H13V5.5C13 5.22 13.22 5 13.5 5C13.78 5 14 5.22 14 5.5V7H15C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9H14V14.5C14 14.78 13.78 15 13.5 15C13.22 15 13 14.78 13 14.5V9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAdminSiteAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("g", {
    clipPath: "url(#clip0_3:1747)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9 0C6.61305 0 4.32387 0.948212 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0V0ZM16.5 6.48C16.3645 6.92347 16.1392 7.33431 15.8382 7.68699C15.5371 8.03966 15.1667 8.32661 14.75 8.53C14.528 7.6965 14.1178 6.92503 13.5509 6.27492C12.984 5.62482 12.2755 5.1134 11.48 4.78C11.6095 4.3363 11.8886 3.95113 12.27 3.69C11.84 3.41 11.27 3.27 10.93 3.76C10.4 4.45 10.93 5.37 11.14 5.76V5.9C10.5848 5.56323 10.1506 5.05906 9.9 4.46C8.93375 4.42897 7.97797 4.66791 7.14 5.15C7.05301 4.5854 7.108 4.00803 7.3 3.47C7.66111 3.50447 8.02515 3.44952 8.36 3.31C8.69485 3.17048 8.9902 2.95068 9.22 2.67C9.68 2.15 9.09 1.49 8.63 1.09H8.99C10.3514 1.08082 11.6918 1.4254 12.88 2.09C13.5516 2.58635 14.1039 3.22637 14.4966 3.96337C14.8893 4.70036 15.1126 5.51574 15.15 6.35C15.39 6.35 15.85 5.8 16.06 5.43C16.232 5.769 16.379 6.12 16.5 6.48ZM9 16.84C6.95 14.76 9.25 13.09 8 11.6C7.08 10.75 5.71 11.34 4.89 10.37C4.75158 9.64686 4.81142 8.89974 5.06317 8.20785C5.31493 7.51596 5.74922 6.90509 6.32 6.44C6.84 6 10.32 5.44 11.74 6.66C12.5705 7.37534 13.1548 8.33398 13.41 9.4C13.8689 9.43467 14.3279 9.33383 14.73 9.11C15.14 12.09 11.58 15.85 9 16.84ZM5.15 2.09C5.53218 1.94429 5.95202 1.93007 6.34318 2.04959C6.73434 2.16911 7.07453 2.41556 7.31 2.75C6.89 3.13 6.37 3.38 5.81 3.47C5.83068 3.17555 5.8947 2.88576 6 2.61L5.15 2.09Z",
    fill: "currentColor"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0_3:1747"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: 20,
    height: 20,
    fill: "white"
  }))));
}
function SvgDashiconsAdminSiteAlt2(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("g", {
    clipPath: "url(#clip0_3:1727)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9 0C6.61305 0 4.32387 0.948212 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0V0ZM11.92 12.34C11.92 12.69 12.06 12.97 12.28 13C12.5 13.03 12.75 12.78 12.86 12.4L13.06 12.48C13.4084 12.6662 13.6821 12.9667 13.835 13.3309C13.988 13.6951 14.0109 14.1009 13.9 14.48C13.8265 14.8165 13.645 15.1197 13.3833 15.3436C13.1215 15.5674 12.7938 15.6996 12.45 15.72C11.96 14.51 10.34 15.78 8.89 15.5C8.58854 15.4241 8.31 15.2762 8.07833 15.0689C7.84667 14.8616 7.66879 14.6012 7.56 14.31C8.75 14.2 10.41 12.58 11.92 12.34ZM8 11.27C8.44419 11.2693 8.87312 11.1079 9.20763 10.8157C9.54214 10.5234 9.75965 10.1201 9.82 9.68C10.0321 9.94173 10.1418 10.2716 10.129 10.6082C10.1161 10.9448 9.98143 11.2652 9.75 11.51C9.62402 11.6203 9.47582 11.7023 9.31543 11.7504C9.15504 11.7985 8.98619 11.8116 8.8203 11.7889C8.6544 11.7661 8.49532 11.708 8.3538 11.6185C8.21229 11.529 8.09163 11.4102 8 11.27ZM11 10.51C11.41 10.9 14 10.45 14.52 11.6C13.57 11.4 11.57 12.21 11.05 10.52L11 10.51ZM9.73 5.45V5.72C9.08 4.95 8.4 4.65 8.12 5.15C7.84 5.65 9.12 6.26 8.88 7.03C8.64 7.8 7.61 7.59 7 8.64C6.39 9.69 6.51 11.06 8.24 12.31C7.65664 12.2453 7.10506 12.011 6.65358 11.6359C6.2021 11.2609 5.87055 10.7616 5.7 10.2C5.3 9 5.61 7.94 4.92 7.74C4 7.46 3 8.71 3 9.8C1.74 8.54 3.05 6.94 1.8 5.62C2.62181 3.87013 4.05748 2.48287 5.83451 1.72155C7.61154 0.960234 9.60624 0.877836 11.44 1.49C10.8953 1.99486 10.4618 2.6078 10.1674 3.28966C9.87293 3.97152 9.72397 4.70731 9.73 5.45Z",
    fill: "currentColor"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0_3:1727"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: 20,
    height: 20,
    fill: "white"
  }))));
}
function SvgDashiconsAdminSiteAlt3(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("g", {
    clipPath: "url(#clip0_3:1657)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9 0C6.61305 0 4.32387 0.948212 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0V0ZM1.11 9.68H3.62C3.66 10.59 3.787 11.494 4 12.38H1.84C1.43721 11.5309 1.18996 10.6164 1.11 9.68ZM9.68 4.28V1.19C10.6437 1.55622 11.4356 2.26962 11.9 3.19C12.105 3.537 12.286 3.898 12.44 4.27L9.68 4.28ZM12.9 5.63C13.132 6.513 13.27 7.418 13.31 8.33H9.68V5.63H12.9ZM8.32 1.19V4.28H5.56C5.71426 3.9077 5.89471 3.54679 6.1 3.2C6.56247 2.27585 7.35459 1.55866 8.32 1.19ZM8.32 5.63V8.33H4.7C4.74 7.418 4.878 6.513 5.11 5.63H8.32ZM3.62 8.32H1.11C1.18996 7.38359 1.43721 6.46912 1.84 5.62H4C3.78659 6.50565 3.65933 7.40985 3.62 8.32ZM4.7 9.68H8.32V12.38H5.11C4.87804 11.4971 4.7406 10.592 4.7 9.68ZM8.33 13.68V16.77C7.36632 16.4038 6.57445 15.6904 6.11 14.77C5.90471 14.4232 5.72426 14.0623 5.57 13.69L8.33 13.68ZM9.68 16.77V13.73H12.44C12.2857 14.1023 12.1053 14.4632 11.9 14.81C11.4356 15.7304 10.6437 16.4438 9.68 16.81V16.77ZM9.68 12.33V9.63H13.3C13.2594 10.542 13.122 11.4471 12.89 12.33H9.68ZM14.39 9.63H16.9C16.82 10.5664 16.5728 11.4809 16.17 12.33H14C14.21 11.46 14.337 10.573 14.38 9.68L14.39 9.63ZM14.39 8.28C14.3442 7.38631 14.2136 6.49899 14 5.63H16.16C16.563 6.48 16.81 7.394 16.89 8.33L14.39 8.28ZM15.39 4.28H13.6C13.2761 3.3703 12.8067 2.51923 12.21 1.76C13.4544 2.31858 14.5353 3.18605 15.35 4.28H15.39ZM5.79 1.76C5.19332 2.51923 4.72388 3.3703 4.4 4.28H2.65C3.46472 3.18605 4.54562 2.31858 5.79 1.76ZM2.64 13.76H4.4C4.72388 14.6697 5.19332 15.5208 5.79 16.28C4.54218 15.713 3.46095 14.8349 2.65 13.73L2.64 13.76ZM12.2 16.28C12.7967 15.5208 13.2661 14.6697 13.59 13.76H15.35C14.5303 14.8393 13.4498 15.6927 12.21 16.24L12.2 16.28Z",
    fill: "currentColor"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0_3:1657"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: 20,
    height: 20,
    fill: "white"
  }))));
}
function SvgDashiconsAdminSite(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("g", {
    clipPath: "url(#clip0_3:1738)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9 0C6.61305 0 4.32387 0.948212 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0V0ZM12.46 11.95C12.46 13.42 11.66 15.25 8.4 16.65C8.7 12.48 5.88 12.96 5.2 11.65C5.26193 11.1081 5.45927 10.5904 5.77384 10.1448C6.08841 9.69913 6.51008 9.33984 7 9.1C5.44817 8.83383 4.00093 8.14137 2.82 7.1C2.87 7.57 3.099 8.004 3.46 8.31C2.67791 8.0152 2.00216 7.49271 1.52 6.81C1.99677 5.2364 2.95032 3.84963 4.24898 2.84115C5.54763 1.83268 7.12735 1.25225 8.77 1.18C7.93 2.56 7.27 5.31 8.77 6.75C7.23 7 6.26 5 5.41 5.79C4.28 6.85 5.74 8.3 8.83 8.87C12.12 9.46 12.49 10.45 12.46 11.95ZM13.8 7.95C13.48 6.84 14.42 5.72 15.49 4.81C16.1582 5.77322 16.5836 6.88375 16.7299 8.0469C16.8761 9.21006 16.7389 10.3913 16.33 11.49C15.56 9.6 14.16 9.17 13.8 7.92V7.95Z",
    fill: "currentColor"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0_3:1738"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: 20,
    height: 20,
    fill: "white"
  }))));
}
function SvgDashiconsAdminTools(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.68 9.77C16.0453 10.406 15.2363 10.8396 14.3552 11.0158C13.4741 11.192 12.5605 11.103 11.73 10.76L6.32 17.28C5.33 18.27 3.73 18.27 2.74 17.28C1.75 16.29 1.75 14.69 2.74 13.71L9.26 8.29C8.58 6.64 8.91 4.68 10.25 3.34C11.53 2.06 13.37 1.72 14.97 2.28L12.08 5.17L14.9 7.99L17.76 5.12C18.29 6.7 17.94 8.51 16.68 9.77ZM3.81 16.21C4.21 16.6 4.85 16.6 5.24 16.21C5.64 15.81 5.64 15.17 5.24 14.78C4.85 14.38 4.21 14.38 3.81 14.78C3.6225 14.9708 3.51744 15.2275 3.51744 15.495C3.51744 15.7625 3.6225 16.0192 3.81 16.21Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAdminUsers(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 9.25C7.73001 9.25 7.27001 5.81 7.27001 5.81C7.00001 4.02 7.82001 2 9.97001 2C12.13 2 12.95 4.02 12.68 5.81C12.68 5.81 12.27 9.25 10 9.25ZM10 11.82L12.72 10C15.11 10 17.24 12.33 17.24 14.53V17.02C17.24 17.02 13.59 18.15 10 18.15C6.35001 18.15 2.76001 17.02 2.76001 17.02V14.53C2.76001 12.28 4.70001 10.05 7.23001 10.05L10 11.82Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAirplane(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.6 2.4C16.8 1.6 15.5 2.3 14.9 2.9L11.4 6.7L9 5.7L9.6 5.1C9.8 4.9 9.8 4.6 9.6 4.4C9.5 4.2 9.2 4.3 9 4.4L8.1 5.3L6.3 4.5L6.8 4C7 3.8 7 3.5 6.8 3.4C6.6 3.2 6.3 3.2 6.1 3.4L5.3 4.2L4.8 4C4 3.6 3.1 3.7 2.5 4.4L8.3 10.2L6 12.6L2.5 12.4L2 13.1L5.1 14.9L6.9 18L7.6 17.5L7.4 14L9.9 11.7L15.7 17.5C16.3 16.9 16.5 15.9 16.1 15.2L15.9 14.7L16.7 13.9C16.9 13.7 16.9 13.4 16.7 13.2C16.5 13 16.2 13 16 13.2L15.5 13.7L14.7 11.8L15.6 10.9C15.8 10.7 15.8 10.4 15.6 10.2C15.4 10 15.1 10 15 10.2L14.4 10.8L13.4 8.4L17.2 5C17.8 4.5 18.4 3.1 17.6 2.4Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAlbum(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("g", {
    clipPath: "url(#clip0_3:1723)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 18H10V17.74C11.52 18.14 13.17 18.09 14.76 17.5C18.9 15.98 21.03 11.38 19.51 7.24C18.08 3.35 13.93 1.24 10 2.26V2H0V18ZM9 3V17H1V3H9ZM14.45 11.22C14.1246 11.8681 13.5561 12.3611 12.8686 12.5915C12.181 12.822 11.4302 12.7711 10.78 12.45C10.47 12.3 10.21 12.1 10 11.86V8.13C10.8 7.27 12.11 7 13.22 7.55C14.57 8.23 15.12 9.87 14.45 11.22ZM11.7 10.4C11.92 10.56 12.23 10.52 12.4 10.3C12.56 10.08 12.52 9.77 12.3 9.6C12.08 9.43 11.77 9.48 11.6 9.7C11.44 9.91 11.48 10.23 11.7 10.4ZM14.71 14.07C13.54 14.85 12.15 15.06 10.88 14.76C10.61 14.7 10.44 14.42 10.51 14.15C10.58 13.88 10.85 13.72 11.13 13.79L11.3 13.83C12.26 14 13.28 13.82 14.16 13.24C14.63 12.92 15.02 12.52 15.3 12.06C15.45 11.83 15.75 11.76 15.99 11.9C16.22 12.05 16.29 12.36 16.15 12.59C15.79 13.16 15.31 13.67 14.71 14.07ZM15.76 15.64C14.3388 16.5929 12.6093 16.9716 10.92 16.7C10.855 16.6869 10.7932 16.6611 10.7382 16.6241C10.6832 16.587 10.636 16.5396 10.5993 16.4843C10.5626 16.4291 10.5372 16.3671 10.5244 16.302C10.5117 16.237 10.5119 16.17 10.525 16.105C10.5381 16.04 10.5639 15.9782 10.6009 15.9232C10.638 15.8682 10.6854 15.821 10.7407 15.7843C10.7959 15.7476 10.8579 15.7222 10.923 15.7094C10.988 15.6967 11.055 15.6969 11.12 15.71L11.34 15.75C12.65 15.9 14.02 15.61 15.21 14.81C15.92 14.34 16.48 13.74 16.91 13.07C17.05 12.83 17.36 12.76 17.59 12.91C17.83 13.05 17.9 13.36 17.75 13.6C17.26 14.39 16.59 15.09 15.76 15.64Z",
    fill: "currentColor"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0_3:1723"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: 20,
    height: 20,
    fill: "white"
  }))));
}
function SvgDashiconsAlignCenter(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 5H17V3H3V5ZM15 13V7H5V13H15ZM3 17H17V15H3V17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAlignFullWidth(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 13V3H3V13H17ZM5 17H15V15H5V17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAlignLeft(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 5H17V3H3V5ZM12 13V7H3V13H12ZM14 9H17V7H14V9ZM14 13H17V11H14V13ZM3 17H17V15H3V17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAlignNone(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 5H17V3H3V5ZM13 13V7H3V13H13ZM3 17H17V15H3V17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAlignPullLeft(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 16V4H3V16H9ZM11 9H17V7H11V9ZM11 13H17V11H11V13Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAlignPullRight(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 16V4H11V16H17ZM9 7H3V9H9V7ZM9 11H3V13H9V11Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAlignRight(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 5H17V3H3V5ZM3 9H6V7H3V9ZM17 13V7H8V13H17ZM3 13H6V11H3V13ZM3 17H17V15H3V17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAlignWide(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 5H15V3H5V5ZM17 13V7H3V13H17ZM5 17H15V15H5V17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAmazon(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.2 14.9C14.3 15.7 12.2 16.1 10.1 16.1C7.29998 16.1 4.59999 15.4 2.19998 14C1.99998 13.9 1.89998 14.1 1.99998 14.2C4.19999 16.2 6.99998 17.2 9.89998 17.2C12.2 17.2 14.5 16.5 16.4 15.2C16.8 15.1 16.5 14.7 16.2 14.9ZM18 13.9C17.1 13.5 16 13.6 15.2 14.2C15 14.3 15.1 14.5 15.2 14.4C15.8 14.3 17 14.2 17.2 14.5C17.4 14.8 17 16 16.7 16.5C16.6 16.7 16.8 16.7 16.9 16.6C17.7 15.9 18.1 14.9 18 13.9ZM8.99998 12.6C10.1 12.7 11.2 12.2 11.9 11.3C12.2 11.7 12.5 12.1 12.9 12.5C13 12.6 13.2 12.6 13.3 12.5C13.6 12.2 14.3 11.6 14.6 11.3C14.7 11.2 14.7 11 14.6 10.8C14.2 10.4 14 9.8 13.9 9.2V6.5C13.9 5.4 14 4.3 13.1 3.5C12.4 2.9 11.4 2.6 10.5 2.6C8.89998 2.7 6.99998 3.3 6.69998 5.3C6.69998 5.5 6.79998 5.6 6.99998 5.6L8.69998 5.8C8.89998 5.8 8.99998 5.6 8.99998 5.5C9.09998 4.8 9.69998 4.4 10.4 4.5C10.8 4.5 11.1 4.7 11.4 5C11.6 5.4 11.7 5.8 11.6 6.3V6.5C10.5 6.5 9.39998 6.7 8.29998 7.1C7.09999 7.5 6.29998 8.6 6.39998 9.9V10.3C6.39998 11.6 7.59998 12.7 8.99998 12.6ZM11.5 7.8V8.2C11.6 8.8 11.5 9.5 11.2 10C11 10.5 10.5 10.8 9.99998 10.8C9.29998 10.8 8.89998 10.3 8.89998 9.5C8.89998 8.1 10.2 7.8 11.5 7.8Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAnalytics(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 18V2H2V18H18ZM16 5H4V4H16V5ZM7 7V10H10C10 11.66 8.66 13 7 13C5.34 13 4 11.66 4 10C4 8.34 5.34 7 7 7ZM8 9V7C9.1 7 10 7.9 10 9H8ZM16 8H12V7H16V8ZM16 11H12V9H16V11ZM16 13H12V12H16V13ZM16 16H4V15H16V16Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsArchive(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19 4V6H1V4H19ZM2 7H18V17H2V7ZM13 10V9H7V10H13Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsArrowDownAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 2H11V14L15 10L17 11L10 18L3 11L5 10L9 14V2Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsArrowDownAlt2(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 6L10 11L15 6L17 7L10 14L3 7L5 6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsArrowDown(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 8L10.97 14L7 8H15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsArrowLeftAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 9V11H6L10 15L9 17L2 10L9 3L10 5L6 9H18Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsArrowLeftAlt2(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 5L9 10L14 15L13 17L6 10L13 3L14 5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsArrowLeft(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 14L7 9.97L13 6V14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsArrowRightAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 11V9H14L10 5L11 3L18 10L11 17L10 15L14 11H2Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsArrowRightAlt2(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsArrowRight(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8 6L14 10.03L8 14V6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsArrowUpAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11 18H9V6L5 10L3 9L10 2L17 9L15 10L11 6V18Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsArrowUpAlt2(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 14L10 9L5 14L3 13L10 6L17 13L15 14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsArrowUpDuplicate(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7 13L11.03 7L15 13H7Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsArrowUp(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11 7L7 13H15L11 7Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsArt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8.54998 3.06C9.55998 3.4 6.59998 5.07 8.44998 6.19C9.48998 6.82 11.76 3.97 12.9 3.33C13.87 2.79 15.57 2.68 16.43 4.56C17.52 6.94 16.57 13.13 12.64 15.62C8.66998 18.12 3.66998 16.85 1.93998 12.96C-0.0700189 8.43 5.05998 1.87 8.54998 3.06ZM9.75998 9.51C10.49 11.15 14.46 9.01 13.55 6.71C12.96 5.22 9.06998 7.96 9.75998 9.51Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsAwards(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4.45998 5.16L4.99998 7.46L4.45998 9.75L6.46998 10.99L7.69998 13L9.99998 12.46L12.3 13L13.53 10.99L15.54 9.75L15 7.46L15.54 5.16L13.54 3.92L12.3 1.91L9.99998 2.46L7.70998 1.92L6.45998 3.92L4.45998 5.16ZM10.01 11.5C8.94911 11.5 7.93169 11.0786 7.18155 10.3284C6.4314 9.57828 6.00998 8.56087 6.00998 7.5C6.00998 6.43913 6.4314 5.42172 7.18155 4.67157C7.93169 3.92143 8.94911 3.5 10.01 3.5C12.21 3.5 14 5.29 14 7.49C14 9.71 12.21 11.5 10.01 11.5ZM9.98998 10.5C8.32998 10.5 6.99998 9.16 6.99998 7.5C6.99998 5.85 8.32998 4.5 9.98998 4.5C11.65 4.5 13 5.85 13 7.5C13 9.16 11.65 10.5 9.98998 10.5ZM13.83 11.6L12.55 13.84L10.47 13.37L13 19.2L14.4 17H16.9L13.83 11.6ZM6.12998 11.67L7.37998 13.92L9.50998 13.41L6.99998 19.2L5.59998 17H3.09998L6.12998 11.67Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBackup(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.65 2.88C17.58 4.89 19.13 9.72 17.12 13.65C15.11 17.58 10.29 19.13 6.34998 17.12C4.55006 16.1982 3.16955 14.6246 2.48998 12.72L4.12998 11.69C4.35962 12.4937 4.75135 13.2419 5.28105 13.8886C5.81074 14.5352 6.46719 15.0666 7.20998 15.45C10.22 16.99 13.9 15.8 15.44 12.79C15.8153 12.0748 16.0452 11.2923 16.1164 10.4877C16.1876 9.68308 16.0986 8.87236 15.8547 8.10234C15.6107 7.33233 15.2166 6.61829 14.6951 6.00147C14.1736 5.38465 13.535 4.87728 12.8163 4.50868C12.0976 4.14007 11.3129 3.91753 10.5077 3.85391C9.70249 3.79029 8.89264 3.88686 8.12496 4.13803C7.35727 4.38921 6.64696 4.79001 6.03507 5.31728C5.42317 5.84455 4.92182 6.48785 4.55998 7.21L6.43998 8.18L1.48998 11.26L1.09998 5.44L2.87998 6.35C4.89998 2.4 9.74998 0.889999 13.65 2.88ZM9.28998 10.71C9.19716 10.6167 9.12375 10.5059 9.07397 10.384C9.0242 10.2621 8.99905 10.1316 8.99998 10C8.99998 9.93 9.02998 9.88 9.03998 9.81H9.02998L9.99998 5L10.97 9.81L14 13L9.49998 10.88L9.51998 10.86C9.43998 10.82 9.35997 10.77 9.28998 10.71Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBank(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 2L3 6V7H17V6L10 2ZM5 8L4.8 15H7.3L7 8H5ZM9 8L8.8 15H11.3L11 8H9ZM13 8L12.8 15H15.3L15 8H13ZM3 18H17V16H3V18Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBeer(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.8 9.3C13 9.2 12.3 8.9 11.8 8.3C11.3 7.7 10.9 7 10.8 6.3C10.4 6.2 10.1 6 9.79998 5.7C9.39998 5.2 9.19998 4.7 9.09998 4.2L8.19998 5.1L7.39998 4.4C6.79998 3.7 5.69998 3.7 4.99998 4.4L2.49998 6.9C1.79998 7.6 1.79998 8.7 2.49998 9.4L3.19998 10.2L2.59998 10.8C1.89998 11.5 1.89998 12.6 2.59998 13.3L6.89998 17.6C7.59998 18.3 8.69998 18.3 9.29998 17.6L15.7 11.1C15.2 11 14.7 10.8 14.3 10.4C14.2 10 14 9.6 13.8 9.3ZM3.59998 7.6L5.59998 5.6C5.89998 5.3 6.39998 5.3 6.59998 5.6L7.09998 6.1L4.19998 9.2L3.59998 8.6C3.39998 8.3 3.39998 7.9 3.59998 7.6ZM4.19998 12.3C3.89998 12 3.89998 11.6 4.19998 11.4L8.49998 7C8.79998 6.7 9.19998 6.7 9.39998 7C9.69998 7.3 9.69998 7.7 9.39998 7.9L5.09998 12.2C4.79998 12.5 4.39998 12.5 4.19998 12.3ZM5.99998 14.1C5.69998 13.8 5.69998 13.4 5.99998 13.2L10.3 8.9C10.6 8.6 11 8.6 11.2 8.9C11.5 9.2 11.5 9.6 11.2 9.8L6.89998 14.1C6.69998 14.4 6.29998 14.4 5.99998 14.1ZM13.1 11.6L8.79998 16C8.49998 16.3 8.09998 16.3 7.89998 16C7.59998 15.7 7.59998 15.3 7.89998 15.1L12.2 10.8C12.5 10.5 12.9 10.5 13.1 10.8C13.3 10.9 13.3 11.4 13.1 11.6ZM17.5 7.2C17.3 7 17 6.8 16.8 6.8C17.2 5.8 17 4.6 16.2 3.9C15.4 3.1 14.3 2.9 13.3 3.3C13.2 3 13 2.7 12.8 2.5C12.1 1.8 11 1.8 10.4 2.5C9.69998 3.2 9.69998 4.3 10.4 5C10.7 5.3 11.2 5.5 11.6 5.5C11.5 6.3 11.8 7.1 12.4 7.7C13 8.3 13.8 8.5 14.6 8.5C14.6 9 14.8 9.4 15.1 9.7C15.8 10.4 16.9 10.4 17.5 9.7C18.2 9 18.2 7.9 17.5 7.2Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBell(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9.99998 18C11.1 18 12 17.1 12 16H7.99998C7.99998 17.1 8.89998 18 9.99998 18ZM14 9.8V7.5C14 5.7 12.8 4.1 11 3.6C11.1 3.4 11.1 3.2 11.2 3.1C11.1 2.5 10.6 2 9.99998 2C9.39998 2 8.89998 2.5 8.89998 3.1C8.89998 3.3 8.99998 3.5 9.09998 3.6C7.29998 4 6.09998 5.6 6.09998 7.5V9.7C5.99998 10.9 5.19998 12 4.09998 12.5V15H16.1V12.5C14.9 12.1 14.1 11 14 9.8Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBlockDefault(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 6V4H12V6H8V4H5V6H4C3.4 6 3 6.4 3 7V15H17V7C17 6.4 16.6 6 16 6H15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBookAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 17H18V19H5C3.34 19 2 17.66 2 16V4C2 2.34 3.34 1 5 1H18V15H5C4.45 15 4 15.45 4 16C4 16.55 4.45 17 5 17ZM7 13.5V2.5C7 2.22 6.78 2 6.5 2C6.22 2 6 2.22 6 2.5V13.5C6 13.78 6.22 14 6.5 14C6.78 14 7 13.78 7 13.5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBook(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16 3H18V19H5C3.34 19 2 17.66 2 16V4C2 2.34 3.34 1 5 1H14V15H5C4.45 15 4 15.45 4 16C4 16.55 4.45 17 5 17H16V3Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBuddiconsActivity(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8 1V8H10V6C10 4.48 11.45 3 13 3V3.86C13.55 3.34 14.26 3 15 3V6H16C17.1 6 18 6.9 18 8C18 9.1 17.1 10 16 10H15V16C15 16.55 14.55 17 14 17C13.45 17 13 16.55 13 16V13.82C12.69 13.93 12.35 14 12 14V16C12 16.55 11.55 17 11 17C10.45 17 10 16.55 10 16V14H8V16C8 16.55 7.55 17 7 17C6.45 17 6 16.55 6 16V14C5.65 14 5.31 13.93 5 13.82V16C5 16.55 4.55 17 4 17C3.45 17 3 16.55 3 16V12H2V11C2 9.34 3.34 8 5 8H7V1H8ZM13 8C13.55 8 14 7.55 14 7C14 6.45 13.55 6 13 6C12.45 6 12 6.45 12 7C12 7.55 12.45 8 13 8Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBuddiconsBbpressLogo(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4.5 6.2C3.7 7.3 3.3 8.6 3.3 10C3.3 11 3.5 11.9 3.9 12.8L4.9 8.2C5.2 6.5 5.3 6.2 4.5 6.2ZM8.5 12.6C8.8 11.3 8.5 10.3 7.4 10.3C6.6 10.3 5.8 10.9 5.6 11.8L5.3 13.5C5 14.5 5.6 15 6.3 15C7.5 15 8.2 13.9 8.5 12.6ZM10 2C5.6 2 2 5.6 2 10C2 14.4 5.6 18 10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2ZM10 17.5C7.9 17.5 6 16.7 4.7 15.3C4.4 14.9 4 14.5 3.7 14.1C3 12.9 2.5 11.5 2.5 10C2.5 5.9 5.9 2.5 10 2.5C14.1 2.5 17.5 5.9 17.5 10C17.5 14.1 14.1 17.5 10 17.5ZM13.8 12.6C14.1 11.3 13.8 10.3 12.7 10.3C11.9 10.3 11.1 10.9 10.9 11.8L10.5 13.5C10.3 14.6 10.9 15.1 11.6 15.1C12.7 15 13.5 13.9 13.8 12.6ZM10 3.3C8 3.3 6.1 4.2 4.9 5.6C5.5 5.5 6.3 5.4 6.7 5.3C6.9 5.3 6.9 5.4 6.9 5.5C6.9 5.7 5.9 10.3 5.9 10.3C6.4 10 7.1 9.6 7.7 9.6C8.6 9.6 9.2 10 9.6 10.5L10.1 8.1C10.5 6.5 10.5 6.2 9.7 6.2C9.3 6.2 9.3 5.7 9.7 5.6C10.3 5.5 11.5 5.4 12 5.3C12.2 5.3 12.2 5.4 12.2 5.5L11.2 10.3C11.7 9.9 12.4 9.6 13.1 9.6C14.8 9.6 15.6 10.9 15.2 12.6C14.9 14.3 13.2 15.6 11.4 15.6C10.1 15.6 9.3 14.9 9.1 14.2C8.4 15 7.4 15.5 6.3 15.6C7.4 16.3 8.7 16.7 10 16.7C11.777 16.7 13.4811 15.9941 14.7376 14.7376C15.9941 13.4811 16.7 11.777 16.7 10C16.7 8.22305 15.9941 6.51888 14.7376 5.26238C13.4811 4.00589 11.777 3.3 10 3.3Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBuddiconsBuddypressLogo(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 0.5C4.75 0.5 0.5 4.75 0.5 10C0.5 15.25 4.75 19.5 10 19.5C15.25 19.5 19.5 15.25 19.5 10C19.5 4.75 15.25 0.5 10 0.5ZM10 1.5C14.7 1.5 18.5 5.3 18.5 10C18.5 14.7 14.7 18.5 10 18.5C5.3 18.5 1.5 14.7 1.5 10C1.5 5.3 5.3 1.5 10 1.5ZM11.8 3.21C11.23 3.21 10.7 3.38 10.25 3.66C11.0267 3.84438 11.7185 4.28515 12.2139 4.91112C12.7092 5.5371 12.9791 6.31175 12.98 7.11C12.98 7.8 12.77 8.44 12.43 8.98C13.0794 8.83708 13.6604 8.4766 14.0769 7.95828C14.4934 7.43996 14.7203 6.79491 14.72 6.13C14.72 4.52 13.41 3.21 11.8 3.21ZM9.42 4.21C9.03128 4.20358 8.64517 4.27469 8.28424 4.41918C7.92331 4.56367 7.5948 4.77864 7.31789 5.05153C7.04098 5.32441 6.82123 5.64975 6.67147 6.00853C6.52172 6.3673 6.44496 6.75233 6.4457 7.1411C6.44643 7.52988 6.52463 7.91461 6.67573 8.27282C6.82683 8.63103 7.0478 8.95554 7.32574 9.22738C7.60367 9.49923 7.93299 9.71296 8.29446 9.85609C8.65593 9.99922 9.0423 10.0689 9.431 10.061C10.1975 10.0455 10.9274 9.72967 11.4635 9.18155C11.9996 8.63344 12.2991 7.8968 12.2977 7.1301C12.2962 6.3634 11.9939 5.62789 11.4558 5.0818C10.9176 4.53571 10.1866 4.22266 9.42 4.21ZM13.67 9.22L13.16 9.81C15.5 10.5 15.61 13.42 15.61 13.42H16.89C16.89 8.71 13.67 9.22 13.67 9.22ZM11.57 10.02L9.45 12.11L7.33 10.02C3.12 10.24 3.89 15 3.89 15H14.97C15.44 10.02 11.57 10.02 11.57 10.02Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBuddiconsCommunity(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 3C9 2.33 8.53 1.57 8 1C7.5 1.5 7 2.38 7 3C7 3.48 7.45 4 8 4C8.55 4 9 3.53 9 3ZM13 3C13 2.33 12.53 1.57 12 1C11.5 1.5 11 2.38 11 3C11 3.48 11.45 4 12 4C12.55 4 13 3.53 13 3ZM9 9V5.5C9 4.95 8.55 4.5 8 4.5C7.43 4.5 7 4.99 7 5.5V9C7 9.55 7.45 10 8 10C8.57 10 9 9.51 9 9ZM13 9V5.5C13 4.95 12.55 4.5 12 4.5C11.43 4.5 11 4.99 11 5.5V9C11 9.55 11.45 10 12 10C12.57 10 13 9.51 13 9ZM17 10C17 8.52 15.59 7.23 13.5 6.54V9C13.5 9.83 12.83 10.5 12 10.5C11.17 10.5 10.5 9.83 10.5 9V6.01C10.33 6.01 10.17 6 10 6C9.83 6 9.67 6.01 9.5 6.01V9C9.5 9.83 8.83 10.5 8 10.5C7.17 10.5 6.5 9.83 6.5 9V6.54C4.41 7.23 3 8.52 3 10C3 11.41 3.95 12.65 6.21 13.37C7.32 13.72 8.6 14.49 10 14.49C11.4 14.49 12.69 13.71 13.79 13.36C16.04 12.65 17 11.41 17 10ZM10 15.43C11.43 15.43 12.74 14.64 13.88 14.32C15.78 13.79 16.37 12.98 17 12V15C17 17.21 13.87 19 10 19C6.13 19 3 17.21 3 15V12C3.64 12.99 4.32 13.8 6.15 14.33C7.28 14.66 8.59 15.43 10 15.43Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBuddiconsForums(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.5 7H6.5C5.67 7 5 6.33 5 5.5C5 4.67 5.67 4 6.5 4H8.09C8.03421 3.83902 8.00385 3.67033 8 3.5C8 2.67 8.67 2 9.5 2H10.5C11.33 2 12 2.67 12 3.5C12 3.68 11.96 3.84 11.91 4H13.5C14.33 4 15 4.67 15 5.5C15 6.33 14.33 7 13.5 7ZM4 8H16C16.55 8 17 8.45 17 9C17 9.55 16.55 10 16 10H4C3.45 10 3 9.55 3 9C3 8.45 3.45 8 4 8ZM5 11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13H5C4.45 13 4 12.55 4 12C4 11.45 4.45 11 5 11ZM7 14H13C13.55 14 14 14.45 14 15C14 15.55 13.55 16 13 16H11.91C11.96 16.16 12 16.32 12 16.5C12 17.33 11.33 18 10.5 18H9.5C8.67 18 8 17.33 8 16.5C8 16.32 8.04 16.16 8.09 16H7C6.45 16 6 15.55 6 15C6 14.45 6.45 14 7 14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBuddiconsFriends(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8.75 5.77C8.75 4.39 7 2 7 2C7 2 5.25 4.39 5.25 5.77C5.25 7.15 5.9 7.5 7 7.5C8.1 7.5 8.75 7.15 8.75 5.77ZM14.75 5.77C14.75 4.39 13 2 13 2C13 2 11.25 4.39 11.25 5.77C11.25 7.15 11.9 7.5 13 7.5C14.1 7.5 14.75 7.15 14.75 5.77ZM9 17V9C9 8.45 8.55 8 8 8H6C5.45 8 5 8.45 5 9V17C5 17.55 5.45 18 6 18H8C8.55 18 9 17.55 9 17ZM15 17V9C15 8.45 14.55 8 14 8H12C11.45 8 11 8.45 11 9V17C11 17.55 11.45 18 12 18H14C14.55 18 15 17.55 15 17ZM6 11L8 10V12L6 13V11ZM12 11L14 10V12L12 13V11ZM6 14L8 13V15L6 16V14ZM12 14L14 13V15L12 16V14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBuddiconsGroups(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.45 6.25C17.28 7.19 17.43 9.43 16.15 11.23C15.35 12.35 13.82 13.11 12.69 13.01L10.05 18H9.00002L6.35002 13.01C5.22002 13.17 3.62002 12.38 2.80002 11.22C1.52002 9.42 1.67002 7.18 3.51002 6.25C3.99002 6.01 4.47002 5.92 4.94002 5.94C4.93002 6.34 4.95002 6.74 5.01002 7.15C5.27002 8.84 6.42002 10.68 7.87002 11.52C7.68002 12.07 7.38002 12.51 6.99002 12.77L9.00002 16.58V10.92C7.64002 10.55 6.26002 8.76 6.00002 7C5.60002 4.35 7.00002 2 9.50002 2C12 2 13.4 4.35 13 7C12.74 8.76 11.36 10.55 10 10.92V16.69L12.07 12.85C11.63 12.62 11.3 12.14 11.08 11.55C12.56 10.72 13.73 8.86 13.99 7.15C14.05 6.74 14.07 6.33 14.06 5.93C14.52 5.92 14.98 6.01 15.45 6.25Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBuddiconsPm(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 2C13 2 18 7 18 7V18H2V7C2 7 7 2 10 2ZM17 16.72L13.27 13.8L17 11L16.57 10.63L14.31 11.93L14.55 7.62L5.78 7.1L5.32 11.64L3.33 10.69L3 11L6.73 13.8L3.29 16.65L3.69 17.08L10 13L16.53 17.15L17 16.72Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBuddiconsReplies(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.54 10.29C18.1019 10.8545 18.4174 11.6185 18.4174 12.415C18.4174 13.2115 18.1019 13.9755 17.54 14.54C16.9755 15.1019 16.2115 15.4174 15.415 15.4174C14.6185 15.4174 13.8544 15.1019 13.29 14.54L12.95 14.02C12.95 17.68 10.95 18.4 9.99998 19C9.17998 18.4 7.04998 17.72 7.04998 14.02L6.70998 14.54C6.14552 15.1019 5.38146 15.4174 4.58498 15.4174C3.7885 15.4174 3.02444 15.1019 2.45998 14.54C1.89805 13.9755 1.58258 13.2115 1.58258 12.415C1.58258 11.6185 1.89805 10.8545 2.45998 10.29C2.45998 10.29 3.47998 9.62 4.55998 8.99C3.67703 7.8016 3.20017 6.3605 3.19998 4.88C3.19998 4.54 3.22998 4.21 3.27998 3.88C3.53168 5.61869 4.43196 7.19776 5.79998 8.3C6.46998 7.95 7.64998 7.47 8.16998 7.38H7.99998C6.89998 7.38 5.99998 6.48 5.99998 5.38C5.99998 4.28 6.89998 3.38 7.99998 3.38V2.88C7.99998 2.6 8.21998 2.38 8.49998 2.38C8.77998 2.38 8.99998 2.6 8.99998 2.88V3.38H11V2.88C11 2.6 11.22 2.38 11.5 2.38C11.78 2.38 12 2.6 12 2.88V3.38C13.1 3.38 14 4.28 14 5.38C14 6.48 13.1 7.38 12 7.38H11.83C12.34 7.47 13.61 7.99 14.21 8.3C15.578 7.19776 16.4783 5.61869 16.73 3.88C16.78 4.21 16.81 4.54 16.81 4.88C16.81 6.42 16.3 7.84 15.45 8.99C16.53 9.62 17.54 10.29 17.54 10.29ZM8.49998 6.38C8.99998 6.38 9.49998 5.93 9.49998 5.38C9.49998 4.83 9.04998 4.38 8.49998 4.38C7.94998 4.38 7.49998 4.83 7.49998 5.38C7.49998 5.93 7.94998 6.38 8.49998 6.38ZM11.5 4.38C10.95 4.38 10.5 4.83 10.5 5.38C10.5 5.93 10.95 6.38 11.5 6.38C12.05 6.38 12.5 5.93 12.5 5.38C12.5 4.83 12.05 4.38 11.5 4.38ZM9.19998 10.11C9.07998 10.22 9.00998 10.37 9.00998 10.54C9.0199 10.6638 9.07558 10.7796 9.16617 10.8646C9.25675 10.9496 9.37575 10.9979 9.49998 11H10.5C10.6242 10.9979 10.7432 10.9496 10.8338 10.8646C10.9244 10.7796 10.9801 10.6638 10.99 10.54C10.99 10.39 10.92 10.25 10.8 10.11C10.7148 10.0414 10.6093 10.0027 10.5 10H9.49998C9.37998 10 9.27998 10.05 9.19998 10.11ZM12 12.5C12 12.38 11.94 12.22 11.81 12.12C11.7234 12.0457 11.614 12.0033 11.5 12H8.49998C8.37998 12 8.27998 12.05 8.18998 12.12C8.07998 12.22 7.99998 12.37 7.99998 12.5C7.99998 12.78 8.21998 13 8.49998 13H11.5C11.78 13 12 12.78 12 12.5ZM8.49998 15H11.5C11.78 15 12 14.78 12 14.5C12 14.22 11.78 14 11.5 14H8.49998C8.21998 14 7.99998 14.22 7.99998 14.5C7.99998 14.78 8.21998 15 8.49998 15ZM9.49998 17H10.5C10.78 17 11 16.78 11 16.5C11 16.22 10.78 16 10.5 16H9.49998C9.21998 16 8.99998 16.22 8.99998 16.5C8.99998 16.78 9.21998 17 9.49998 17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBuddiconsTopics(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.44 1.66C9.85 1.08 8.9 1.08 8.32 1.66L2.66 7.32C2.08 7.9 2.08 8.85 2.66 9.44C3.26 10.04 4.22 10 4.78 9.44L10.44 3.78C10.7209 3.49875 10.8787 3.1175 10.8787 2.72C10.8787 2.3225 10.7209 1.94125 10.44 1.66ZM13.27 4.49C13.1314 4.34971 12.9664 4.23832 12.7844 4.1623C12.6024 4.08628 12.4072 4.04714 12.21 4.04714C12.0128 4.04714 11.8176 4.08628 11.6356 4.1623C11.4536 4.23832 11.2886 4.34971 11.15 4.49L5.49 10.15C5.34971 10.2886 5.23833 10.4536 5.1623 10.6356C5.08628 10.8176 5.04714 11.0128 5.04714 11.21C5.04714 11.4072 5.08628 11.6024 5.1623 11.7844C5.23833 11.9664 5.34971 12.1314 5.49 12.27C6.09 12.87 7.05 12.82 7.61 12.27L13.27 6.61C13.85 6.03 13.85 5.08 13.27 4.49ZM14.33 11.21L18.51 15.39C19.1 15.97 19.1 16.92 18.51 17.51C17.92 18.1 16.97 18.1 16.39 17.51L12.21 13.33L10.44 15.1C9.85 15.68 8.9 15.68 8.32 15.1C7.73 14.51 7.73 13.56 8.32 12.97L13.98 7.32C14.1186 7.17971 14.2836 7.06832 14.4656 6.9923C14.6476 6.91628 14.8428 6.87714 15.04 6.87714C15.2372 6.87714 15.4324 6.91628 15.6144 6.9923C15.7964 7.06832 15.9614 7.17971 16.1 7.32C16.68 7.9 16.68 8.85 16.1 9.44L14.33 11.21ZM5 15C5 13.41 3.34 11 3.34 11C3.34 11 2 13.78 2 15C2 16.22 2.6 17 3.34 17H3.66C4.4 17 5 16.59 5 15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBuddiconsTracking(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.98 6.78L15.5 15C14.5 17 12 18 10 18C8 18 5.5 17 4.5 15L9 6.82C8.25 5.59 6.72 4.84 4.71 4.79L7.17 1.87C8.85 3.06 9.63 4.19 10.14 5.18C10.7 4.31 11.34 3.5 12.84 3.06L14.67 5.92C13.25 5.58 12.03 6 10.98 6.78ZM8.17 10.4L7.24 12.09C7.73 12.2 8.24 12.25 8.78 12.25C10.13 12.25 11.36 11.89 12.33 11.3L11.32 9.48C10.45 10.01 9.36 10.34 8.17 10.4ZM9.03 15.78C11.02 15.78 12.76 15.04 13.77 13.92L12.79 12.16C11.79 13.28 10.05 14.03 8.05 14.03C7.43 14.03 6.84 13.95 6.29 13.82L5.66 14.97C6.6 15.47 7.76 15.78 9.03 15.78Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBuilding(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 20H17V0H3V20ZM7 3H5V1H7V3ZM11 3H9V1H11V3ZM15 3H13V1H15V3ZM7 6H5V4H7V6ZM11 6H9V4H11V6ZM15 6H13V4H15V6ZM7 9H5V7H7V9ZM11 9H9V7H11V9ZM15 9H13V7H15V9ZM7 12H5V10H7V12ZM11 12H9V10H11V12ZM15 12H13V10H15V12ZM11 19H5V13H11V19ZM15 15H13V13H15V15ZM15 18H13V16H15V18Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBusinessman(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 16.9V14.4C17 13.7 16.9 13 16.5 12.3C16.1 11.6 15.6 11 14.9 10.6C14.2 10.1 12.7 10 12 10L10.4 11.7L11 13V16L10 17.1L9 16V13L9.7 11.7L8 10C7.2 10 5.7 10.1 5 10.6C4.3 11 3.9 11.6 3.5 12.3C3.1 13 3 13.6 3 14.4V16.9C3 16.9 5.6 18 10 18C14.4 18 17 16.9 17 16.9Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 2.1C8.10002 2.1 7.00002 3.9 7.30002 5.9C7.60002 7.9 8.60002 9.3 10 9.3C11.4 9.3 12.4 7.9 12.7 5.9C13 3.8 11.9 2.1 10 2.1Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBusinessperson(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.2 10L11 13L10 11.6L9 13L6.8 10C3 11 3 13 3 16.9C3 16.9 6 18 9.4 18H10.6C14 17.9 17 16.9 17 16.9C17 13 17 11 13.2 10ZM10 10.7L8.4 10L10 11.6L11.6 10L10 10.7Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 2.1C8.10002 2.1 7.00002 3.9 7.30002 5.9C7.60002 7.9 8.60002 9.3 10 9.3C11.4 9.3 12.4 7.9 12.7 5.9C13 3.8 11.9 2.1 10 2.1Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsBusinesswoman(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16 11C15.1 10.2 13.8 10.1 12.6 10L13.6 12.1L10 15.8L6.4 12.2L7.4 10C6.2 10 4.9 10.2 4 11C3.2 11.7 3 12.9 3 14.1V16.9C3 16.9 6.4 18.1 10 18C13.6 18.1 17 16.9 17 16.9V14.1C17 13 16.8 11.8 16 11Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6.60001 9.3C7.40001 9.3 8.60001 8.9 8.80001 8.6C8.00001 7.6 7.30001 6.6 8.00001 4.7C8.00001 4.7 9.10001 5.9 12.3 6.2C12.3 7.2 11.8 7.9 11.2 8.6C11.4 8.9 12.6 9.3 13.4 9.3C14.2 9.3 14.8 9.1 14.8 8.8C14.8 8.5 13.5 7.5 13.2 6.6C12.9 5.7 13.1 4.7 12.7 3.5C12.1 2.1 10.7 2 10 2C9.30001 2 7.90001 2.1 7.30001 3.5C6.90001 4.7 7.10001 5.7 6.80001 6.6C6.50001 7.5 5.20001 8.5 5.20001 8.8C5.20001 9.1 5.80001 9.3 6.60001 9.3Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 11L7.70001 10L10 15.8L12.3 10L10 11Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsButton(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 5H3C1.9 5 1 5.9 1 7V13C1 14.1 1.9 15 3 15H17C18.1 15 19 14.1 19 13V7C19 5.9 18.1 5 17 5ZM18 12C18 12.6 17.6 13 17 13H3C2.4 13 2 12.6 2 12V7C2 6.4 2.4 6 3 6H17C17.6 6 18 6.4 18 7V12Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsCalculator(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 2H5C4.4 2 4 2.4 4 3V17C4 17.6 4.4 18 5 18H15C15.6 18 16 17.6 16 17V3C16 2.4 15.6 2 15 2ZM6.5 16.8C5.8 16.8 5.3 16.2 5.3 15.6C5.3 15 5.9 14.4 6.5 14.4C7.1 14.4 7.7 15 7.7 15.6C7.7 16.2 7.2 16.8 6.5 16.8ZM6.5 13.2C5.8 13.2 5.3 12.6 5.3 12C5.3 11.4 5.9 10.8 6.5 10.8C7.1 10.8 7.7 11.4 7.7 12C7.7 12.6 7.2 13.2 6.5 13.2ZM6.5 9.8C5.8 9.8 5.3 9.2 5.3 8.6C5.3 8 5.9 7.4 6.5 7.4C7.1 7.4 7.7 8 7.7 8.6C7.7 9.2 7.2 9.8 6.5 9.8ZM10 16.8C9.3 16.8 8.8 16.2 8.8 15.6C8.8 15 9.4 14.4 10 14.4C10.6 14.4 11.2 15 11.2 15.6C11.2 16.2 10.7 16.8 10 16.8ZM10 13.2C9.3 13.2 8.8 12.6 8.8 12C8.8 11.4 9.4 10.8 10 10.8C10.6 10.8 11.2 11.4 11.2 12C11.2 12.6 10.7 13.2 10 13.2ZM10 9.8C9.3 9.8 8.8 9.2 8.8 8.6C8.8 8 9.3 7.2 10 7.2C10.7 7.2 11.2 7.8 11.2 8.4C11.2 9 10.7 9.8 10 9.8ZM14.8 15.5C14.8 16.2 14.2 16.7 13.6 16.7C13 16.7 12.4 16.1 12.4 15.5V12C12.4 11.3 13 10.8 13.6 10.8C14.2 10.8 14.8 11.4 14.8 12V15.5ZM13.5 9.8C12.8 9.8 12.3 9.2 12.3 8.6C12.3 8 12.9 7.4 13.5 7.4C14.1 7.4 14.7 8 14.7 8.6C14.7 9.2 14.2 9.8 13.5 9.8ZM15 6.4H5V3H15V6.4Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsCalendarAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 4H18V19H2V4H5V3C5 2.59 5.15 2.24 5.44 1.94C5.73 1.65 6.09 1.5 6.5 1.5C6.91 1.5 7.27 1.65 7.56 1.94C7.85 2.24 8 2.59 8 3V4H12V3C12 2.59 12.15 2.24 12.44 1.94C12.73 1.65 13.09 1.5 13.5 1.5C13.91 1.5 14.27 1.65 14.56 1.94C14.85 2.24 15 2.59 15 3V4ZM6 3V5.5C5.99878 5.566 6.01088 5.63156 6.03557 5.69278C6.06027 5.75399 6.09705 5.8096 6.14373 5.85627C6.1904 5.90295 6.24601 5.93973 6.30722 5.96443C6.36844 5.98912 6.434 6.00122 6.5 6C6.566 6.00122 6.63156 5.98912 6.69278 5.96443C6.75399 5.93973 6.8096 5.90295 6.85627 5.85627C6.90295 5.8096 6.93973 5.75399 6.96443 5.69278C6.98912 5.63156 7.00122 5.566 7 5.5V3C7 2.86 6.95 2.74 6.85 2.65C6.76 2.55 6.64 2.5 6.5 2.5C6.36 2.5 6.24 2.55 6.15 2.65C6.05 2.74 6 2.86 6 3ZM13 3V5.5C13 5.64 13.05 5.76 13.14 5.86C13.24 5.95 13.36 6 13.5 6C13.64 6 13.76 5.95 13.86 5.86C13.95 5.76 14 5.64 14 5.5V3C14.0012 2.934 13.9891 2.86844 13.9644 2.80722C13.9397 2.74601 13.9029 2.6904 13.8563 2.64373C13.8096 2.59705 13.754 2.56027 13.6928 2.53557C13.6316 2.51088 13.566 2.49878 13.5 2.5C13.434 2.49878 13.3684 2.51088 13.3072 2.53557C13.246 2.56027 13.1904 2.59705 13.1437 2.64373C13.0971 2.6904 13.0603 2.74601 13.0356 2.80722C13.0109 2.86844 12.9988 2.934 13 3ZM17 18V8H3V18H17ZM7 9V11H5V9H7ZM9 9H11V11H9V9ZM13 11V9H15V11H13ZM7 12V14H5V12H7ZM9 12H11V14H9V12ZM13 14V12H15V14H13ZM7 15V17H5V15H7ZM11 17H9V15H11V17ZM15 17H13V15H15V17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsCalendar(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 4H18V18H2V4H5V3C5 2.17 5.67 1.5 6.5 1.5C7.33 1.5 8 2.17 8 3V4H12V3C12 2.17 12.67 1.5 13.5 1.5C14.33 1.5 15 2.17 15 3V4ZM6 3V5.5C6 5.78 6.22 6 6.5 6C6.78 6 7 5.78 7 5.5V3C7 2.72 6.78 2.5 6.5 2.5C6.22 2.5 6 2.72 6 3ZM13 3V5.5C13 5.78 13.22 6 13.5 6C13.78 6 14 5.78 14 5.5V3C14 2.72 13.78 2.5 13.5 2.5C13.22 2.5 13 2.72 13 3ZM17 17V8H3V17H17ZM7 16V9H5V16H7ZM11 16V9H9V16H11ZM15 16V9H13V16H15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsCameraAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 4H17.94C18.53 4 19 4.47 19 5.06V16.87C19 17.46 18.53 18 17.94 18H2.06C1.47 18 1 17.46 1 16.87V5.06C1 4.47 1.47 4 2.06 4H5L8 2H12L15 4ZM10 15C12.21 15 14 13.21 14 11C14 8.79 12.21 7 10 7C7.79 7 6 8.79 6 11C6 13.21 7.79 15 10 15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsCamera(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 5V3H3V5H6ZM18 15V4H9L7 6H2V15H18ZM11 7C12.66 7 14 8.34 14 10C14 11.66 12.66 13 11 13C9.34 13 8 11.66 8 10C8 8.34 9.34 7 11 7Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsCar(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 15C14.8284 15 15.5 14.3284 15.5 13.5C15.5 12.6716 14.8284 12 14 12C13.1716 12 12.5 12.6716 12.5 13.5C12.5 14.3284 13.1716 15 14 15Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.1 9.00001H14.5C13.9 6.30001 11.3 4.50001 8.6 5.10001C6.6 5.50001 5 7.00001 4.6 9.00001H3.9C2.9 9.00001 2 9.90001 2 10.9V12.2C2 12.9 2.6 13.5 3.3 13.5H3.6C3.6 12.2 4.7 11.1 6 11.1C7.3 11.1 8.4 12.2 8.4 13.5H11.6C11.6 12.2 12.7 11.1 14 11.1C15.3 11.1 16.4 12.2 16.4 13.5H16.7C17.4 13.5 18 12.9 18 12.2V11C18 9.90001 17.1 9.00001 16.1 9.00001ZM6.2 9.00001C6.7 7.10001 8.7 6.10001 10.5 6.60001C11.6 6.90001 12.5 7.80001 12.9 9.00001H6.2ZM6 12C5.2 12 4.5 12.7 4.5 13.5C4.5 14.3 5.2 15 6 15C6.8 15 7.5 14.3 7.5 13.5C7.5 12.7 6.8 12 6 12Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsCarrot(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1.99999 18.43C3.50999 19.79 13.64 13.76 15.14 11.22C15.86 10 15.01 8.21 13.62 6.78C15.2 5.73 16.59 9 17.91 8.31C18.51 7.99 18.9 7 18.61 6.39C18.09 5.31 16.36 5.31 15.19 5.18C16.02 4.98 18.01 4.13 18.05 2.93C18.09 2.01 16.92 0.959999 16 1.07C14.79 1.21 14.35 2.95 13.94 4.07C13.89 3.36 13.74 1.8 12.96 1.12C11.92 0.209999 10.67 1.07 10.64 2.17C10.6 3.5 13.46 4.24 12.56 5.84C11.04 4.67 9.24999 4.03 8.09999 4.7C7.60999 5.01 7.04999 5.61 6.46999 6.39C7.35999 7.33 8.58999 8.46 9.55999 9.11C9.75999 9.25 9.81999 9.53 9.66999 9.73C9.52999 9.94 9.24999 9.99 9.04999 9.85C8.05999 9.18 6.84999 8.07 5.94999 7.14C5.49999 7.81 5.03999 8.57 4.60999 9.37C5.45999 10.23 6.53999 11.2 7.39999 11.78C7.59999 11.92 7.64999 12.2 7.50999 12.4C7.36999 12.61 7.08999 12.66 6.87999 12.52C6.02999 11.94 5.01999 11.04 4.16999 10.2C2.39999 13.69 1.09999 17.63 1.99999 18.43Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsCart(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 13H15C15.55 13 16 13.45 16 14C16 14.55 15.55 15 15 15H5C4.45 15 4 14.55 4 14V4H2C1.45 4 1 3.55 1 3C1 2.45 1.45 2 2 2H5C5.55 2 6 2.45 6 3V5H19L15 12H6V13ZM5.5 16C6.33 16 7 16.67 7 17.5C7 18.33 6.33 19 5.5 19C4.67 19 4 18.33 4 17.5C4 16.67 4.67 16 5.5 16ZM14.5 16C15.33 16 16 16.67 16 17.5C16 18.33 15.33 19 14.5 19C13.67 19 13 18.33 13 17.5C13 16.67 13.67 16 14.5 16Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsCategory(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 7H18V17H2V4H9L11 6H4V15H5V7Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsChartArea(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 18L18.01 5.72C18.6 5.37 19 4.73 19 4C19 2.9 18.1 2 17 2C15.9 2 15 2.9 15 4C15 4.8 15.47 5.48 16.14 5.8L12.01 12.38C11.68 12.14 11.28 12 10.85 12C10.01 12 9.3 12.51 9 13.24L6.86 11.71C6.95 11.49 7 11.25 7 11C7 9.89 6.11 9 5 9C4.46957 9 3.96086 9.21071 3.58579 9.58579C3.21071 9.96086 3 10.4696 3 11C3.00179 11.3454 3.093 11.6844 3.26474 11.9841C3.43648 12.2838 3.6829 12.5339 3.98 12.71L1 18H18ZM17 3C17.55 3 18 3.45 18 4C18 4.55 17.55 5 17 5C16.45 5 16 4.55 16 4C16 3.45 16.45 3 17 3ZM5 10C5.55 10 6 10.45 6 11C6 11.55 5.55 12 5 12C4.45 12 4 11.55 4 11C4 10.45 4.45 10 5 10ZM10.85 13C11.4 13 11.85 13.45 11.85 14C11.85 14.55 11.4 15 10.85 15C10.3 15 9.85 14.55 9.85 14C9.85 13.45 10.3 13 10.85 13Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsChartBar(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 18V2H14V18H18ZM12 18V7H8V18H12ZM6 18V10H2V18H6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsChartLine(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 3.5C18 4.12 17.62 4.66 17.08 4.88V17.99H1.98999L6.20999 11.26C6.07436 11.0295 6.00192 10.7674 5.99999 10.5C5.99999 9.67 6.66999 9 7.49999 9C8.32999 9 8.99999 9.67 8.99999 10.5C8.99999 10.63 8.97999 10.75 8.94999 10.87L10.39 11.5C10.66 11.2 11.06 11 11.5 11C11.68 11 11.85 11.04 12.01 11.09L15.59 4.68C15.23 4.41 15 3.98 15 3.5C15 2.67 15.67 2 16.5 2C16.69 2 16.86 2.04 17.03 2.1L17.08 2.01V2.12C17.62 2.34 18 2.88 18 3.5ZM16.08 16.99V5.85L12.79 11.74C12.92 11.97 13 12.22 13 12.5C13 13.33 12.33 14 11.5 14C10.67 14 9.99999 13.33 9.99999 12.5L10.01 12.43L8.37999 11.71C8.12999 11.89 7.82999 12 7.49999 12C7.31999 12 7.14999 11.96 6.98999 11.9L3.78999 16.99H16.08Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsChartPie(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 10V3C13.87 3 17 6.13 17 10H10ZM9 4V11H16C16 14.87 12.87 18 9 18C5.13 18 2 14.87 2 11C2 7.13 5.13 4 9 4Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsClipboard(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.9 0.389993L13.3 1.78999C14.91 1.97999 16.8 1.04999 17.91 2.15999C19.02 3.26999 18.09 5.15999 18.28 6.76999L19.68 8.16999C20.07 8.55999 20.07 9.18999 19.68 9.57999L10.49 18.78C10.09 19.17 9.46 19.17 9.07 18.78L1.29 11C0.899998 10.61 0.899998 9.97999 1.29 9.57999L10.49 0.389993C10.5825 0.29729 10.6924 0.223742 10.8134 0.173561C10.9343 0.123379 11.064 0.0975494 11.195 0.0975494C11.326 0.0975494 11.4556 0.123379 11.5766 0.173561C11.6976 0.223742 11.8075 0.29729 11.9 0.389993ZM12.48 2.63999L11.9 3.21999L16.85 8.16999L17.43 7.58999C17.24 6.98999 17.23 6.36999 17.28 5.76999C17.3 5.45999 17.33 5.14999 17.37 4.84999C17.49 3.84999 17.55 3.21999 17.2 2.86999C16.85 2.51999 16.22 2.57999 15.22 2.69999C14.92 2.73999 14.61 2.76999 14.3 2.78999C13.7 2.83999 13.08 2.82999 12.48 2.63999ZM16.5 3.56999C16.89 3.95999 16.89 4.59999 16.5 4.98999C16.11 5.37999 15.47 5.37999 15.08 4.98999C14.69 4.59999 14.69 3.95999 15.08 3.56999C15.47 3.17999 16.11 3.17999 16.5 3.56999ZM9.78 3.92999L9.07 4.62999L15.44 11L16.14 10.29L9.78 3.92999ZM8.36 5.33999L7.66 6.04999L14.02 12.41L14.73 11.71L8.36 5.33999ZM6.95 6.75999L6.24 7.45999L12.61 13.83L13.31 13.12L6.95 6.75999ZM5.54 8.16999L4.83 8.87999L11.19 15.24L11.9 14.53L5.54 8.16999ZM4.12 9.57999L3.41 10.29L9.78 16.66L10.49 15.95L4.12 9.57999Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsClock(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2ZM10 16C13.31 16 16 13.31 16 10C16 6.69 13.31 4 10 4C6.69 4 4 6.69 4 10C4 13.31 6.69 16 10 16ZM9.29 10.71C9.36 10.76 9.43 10.81 9.52 10.86L9.5 10.88L14 13L10.97 9.81L10 5L9.03 9.81H9.04C9.04 9.83 9.03 9.86 9.02 9.9C9.01 9.94 9 9.97 9 10C9 10.28 9.1 10.52 9.29 10.71Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsCloudSaved(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.8 9C14.9 8.7 15 8.4 15 8C15 5.8 13.2 4 11 4C9.5 4 8.1 4.9 7.5 6.2C7.2 6.1 6.8 6 6.5 6C5.1 6 4 7.1 4 8.5C4 8.7 4 8.9 4.1 9C2.3 9.3 1 10.7 1 12.5C1 14.4 2.6 16 4.5 16H14.5C16.4 16 18 14.4 18 12.5C18 10.7 16.6 9.2 14.8 9ZM8.5 14.9L5.3 11.7L6.7 10.3L8.5 12.1L12.3 8.3L13.7 9.7L8.5 14.9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsCloudUpload(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.8 9C14.9 8.7 15 8.4 15 8C15 5.8 13.2 4 11 4C9.5 4 8.1 4.9 7.5 6.2C7.2 6.1 6.8 6 6.5 6C5.1 6 4 7.1 4 8.5C4 8.7 4 8.9 4.1 9C2.3 9.3 1 10.7 1 12.5C1 14.4 2.6 16 4.5 16H8V13H5L9.5 8.5L14 13H11V16H14.5C16.4 16 18 14.4 18 12.5C18 10.7 16.6 9.2 14.8 9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsCloud(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.9 9C14.9 8.7 15 8.4 15 8C15 5.8 13.2 4 11 4C9.4 4 8.1 4.9 7.4 6.2C7.2 6.1 6.8 6 6.5 6C5.1 6 4 7.1 4 8.5C4 8.7 4 8.9 4.1 9C2.3 9.3 1 10.7 1 12.5C1 14.4 2.6 16 4.5 16H14.5C16.4 16 18 14.4 18 12.5C18 10.7 16.7 9.2 14.9 9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsCodeStandards(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6.09998 9.5V8.4C6.09998 7.9 5.89998 7.7 5.39998 7.6C5.99998 7.5 6.19998 7.3 6.19998 6.7V5.6C6.19998 5.2 6.29998 5.1 6.89998 5.1H7.19998V4.6H6.59998C5.69998 4.6 5.29998 4.8 5.29998 5.6C5.29998 6.1 5.39998 6.4 5.39998 6.8C5.39998 7 5.19998 7.3 4.49998 7.3V7.9C5.19998 7.9 5.39998 8.2 5.39998 8.4C5.39998 8.8 5.29998 9.1 5.29998 9.6C5.29998 10.4 5.69998 10.6 6.59998 10.6H7.09998V10H6.79998C6.29998 10 6.09998 9.9 6.09998 9.5ZM16.5 13.9C15.7 13.1 14.8 12.5 13.9 11.9C13.8 11.8 12.8 10.8 12.4 10.5C14.8 6.5 11.3 1.3 6.69998 2C2.29998 2.7 0.399976 8.2 3.49998 11.4C5.19998 13.3 8.09998 13.7 10.4 12.5C11 13.1 11.5 13.6 12 14.2C12.7 15.1 13.2 16 14.1 16.7C14.7 17.2 15.5 17.9 16.4 18C17.5 18.1 18.1 17.4 18.1 16.4C18 15.5 17.1 14.5 16.5 13.9ZM7.59998 11.6C5.39998 11.6 3.59998 9.8 3.59998 7.6C3.59998 5.4 5.39998 3.6 7.59998 3.6C9.79998 3.6 11.6 5.4 11.6 7.6C11.6 9.8 9.79998 11.6 7.59998 11.6ZM9.69998 6.8C9.69998 6.4 9.79998 6.1 9.79998 5.6C9.79998 4.8 9.39998 4.6 8.49998 4.6H7.99998V5.1H8.29998C8.79998 5.1 8.99998 5.2 8.99998 5.6V6.7C8.99998 7.2 9.19998 7.4 9.69998 7.5C9.09998 7.7 8.89998 7.9 8.89998 8.4V9.5C8.99998 9.9 8.79998 10 8.29998 10H7.99998V10.6H8.49998C9.39998 10.6 9.79998 10.4 9.79998 9.6C9.79998 9.1 9.69998 8.8 9.69998 8.4C9.69998 8.2 9.89998 7.9 10.6 7.9V7.3C9.89998 7.3 9.69998 7 9.69998 6.8Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsCoffee(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 15C4 16.1 4.9 17 6 17H16C17.1 17 18 16.1 18 15H4ZM6 11.2V12C6 13.1 6.9 14 8 14H15C16.1 14 17 13.1 17 12V4H5.6C3.6 4 2 5.4 2 7.6C2 9.9 3.6 11.2 5.6 11.2H6ZM3.9 7.6C3.9 6.6 4.6 5.8 5.6 5.8H6V9.4H5.6C4.6 9.4 3.9 8.7 3.9 7.6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsColorPicker(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.8 2.2C16.8 1.2 15.2 1.2 14.2 2.2L12.4 4L11.7 3.3C11.3 2.9 10.7 2.9 10.3 3.3L9.5 4C9.1 4.4 9.1 5 9.5 5.4L14.5 10.4C14.9 10.8 15.5 10.8 15.9 10.4L16.6 9.7C17 9.3 17 8.7 16.6 8.3L16 7.6L17.8 5.8C18.8 4.8 18.8 3.2 17.8 2.2ZM4.4 12C2.2 14.2 3.5 15.2 1.5 17.8L2.2 18.5C4.8 16.5 5.8 17.8 8 15.6L13.1 10.5L9.5 6.9L4.4 12Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsColumns(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 15H9V5H3V15ZM11 15H17V5H11V15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsControlsBack(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 10L12 4V7.6L18 4V16L12 12.4V16L2 10Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsControlsForward(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 10L8 16V12.4L2 16V4L8 7.6V4L18 10Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsControlsPause(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 16V4H8V16H5ZM12 4H15V16H12V4Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsControlsPlay(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 4L15 10L5 16V4Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsControlsRepeat(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 7V10L3 11.5V5H14V3L18 6.01L14 9V7H5ZM15 13V10L17 8.5V15H6V17L2 13.99L6 11V13H15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsControlsSkipback(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.98 7.63L17.98 4.03V16.03L11.98 12.43V16.03L3.97998 11.23V16.03H1.97998V4.03H3.97998V8.83L11.98 4.03V7.63Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsControlsSkipforward(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8 12.4L2 16V4L8 7.6V4L16 8.8V4H18V16H16V11.2L8 16V12.4Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsControlsVolumeoff(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 7H6L11 3V17L6 13H2V7Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsControlsVolumeon(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 7H6L11 3V17L6 13H2V7ZM14.69 4.54C14.82 4.59 18 5.92 18 10C18 14.08 14.82 15.41 14.69 15.46C14.6297 15.4862 14.5648 15.4999 14.4991 15.5004C14.4334 15.501 14.3683 15.4882 14.3077 15.463C14.247 15.4378 14.192 15.4007 14.146 15.3538C14.1 15.3069 14.064 15.2512 14.04 15.19C13.93 14.93 14.06 14.64 14.31 14.54C14.42 14.49 17 13.39 17 10C17 6.59 14.34 5.47 14.31 5.46C14.2492 5.43556 14.1939 5.39925 14.1473 5.35317C14.1006 5.3071 14.0637 5.2522 14.0386 5.19168C14.0134 5.13116 14.0006 5.06623 14.0008 5.00069C14.0011 4.93516 14.0144 4.87033 14.04 4.81C14.14 4.56 14.43 4.43 14.69 4.54ZM16 10C16 12.57 13.77 13.43 13.68 13.47C13.62 13.49 13.56 13.5 13.5 13.5C13.3 13.5 13.11 13.38 13.03 13.18C12.93 12.92 13.07 12.63 13.32 12.53C13.39 12.51 15 11.86 15 10C15 8.14 13.39 7.49 13.32 7.47C13.1981 7.41883 13.1002 7.32314 13.0464 7.20239C12.9925 7.08164 12.9866 6.94491 13.03 6.82C13.13 6.57 13.42 6.43 13.68 6.53C13.77 6.57 16 7.43 16 10Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsCoverImage(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.2 1H17.7C18.4 1 19 1.6 19 2.2V13.7C19 14.4 18.4 14.9 17.8 14.9H2.2C1.6 15 1 14.4 1 13.8V2.2C1 1.6 1.6 1 2.2 1ZM17 13V3H3V13H17ZM13 9C13 9 13 4 16 4V11C16 11.6 15.6 12 15 12H5C4.4 12 4 11.6 4 11V7C6 7 7 11 7 11C7 11 8 7 10 7C12 7 13 9 13 9Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 17H16V19H4V17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsDashboard(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.75998 16H16.24C17.1825 14.824 17.7736 13.4056 17.9452 11.9083C18.1167 10.411 17.8617 8.89571 17.2095 7.53702C16.5574 6.17833 15.5346 5.03155 14.259 4.22884C12.9835 3.42613 11.5071 3.00016 9.99998 3C8.49288 3.00016 7.01648 3.42613 5.74094 4.22884C4.46539 5.03155 3.4426 6.17833 2.79043 7.53702C2.13826 8.89571 1.88325 10.411 2.05479 11.9083C2.22632 13.4056 2.81743 14.824 3.75998 16ZM9.99998 4C10.55 4 11 4.45 11 5C11 5.55 10.55 6 9.99998 6C9.44998 6 8.99998 5.55 8.99998 5C8.99998 4.45 9.44998 4 9.99998 4ZM5.99998 6C6.54998 6 6.99998 6.45 6.99998 7C6.99998 7.55 6.54998 8 5.99998 8C5.44998 8 4.99998 7.55 4.99998 7C4.99998 6.45 5.44998 6 5.99998 6ZM14 6C14.55 6 15 6.45 15 7C15 7.55 14.55 8 14 8C13.45 8 13 7.55 13 7C13 6.45 13.45 6 14 6ZM8.62998 11.55L12 7V13C12 14.1 11.1 15 9.99998 15C8.89998 15 7.99998 14.1 7.99998 13C7.99998 12.43 8.23998 11.92 8.62998 11.55ZM3.99998 10C4.54998 10 4.99998 10.45 4.99998 11C4.99998 11.55 4.54998 12 3.99998 12C3.44998 12 2.99998 11.55 2.99998 11C2.99998 10.45 3.44998 10 3.99998 10ZM16 10C16.55 10 17 10.45 17 11C17 11.55 16.55 12 16 12C15.45 12 15 11.55 15 11C15 10.45 15.45 10 16 10ZM11 13C11 12.45 10.55 12 9.99998 12C9.44998 12 8.99998 12.45 8.99998 13C8.99998 13.55 9.44998 14 9.99998 14C10.55 14 11 13.55 11 13Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsDatabaseAdd(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 10C16.2 10 18 8.2 18 6C18 3.8 16.2 2 14 2C11.8 2 10 3.8 10 6C10 8.2 11.8 10 14 10ZM13 5V3H15V5H17V7H15V9H13V7H11V5H13ZM9 6C9 4.4 9.8 3 11 2H10C6.1 2 3 2.9 3 4C3 5 5.6 5.8 9 6ZM10 15C6.1 15 3 14.1 3 13V16C3 17.1 6.1 18 10 18C13.9 18 17 17.1 17 16V13C17 14.1 13.9 15 10 15ZM12.8 10.8C11.9 10.9 10.9 11 10 11C6.1 11 3 10.1 3 9V12C3 13.1 6.1 14 10 14C13.9 14 17 13.1 17 12V10C16.1 10.7 15.1 11 14 11C13.6 11 13.2 10.9 12.8 10.8ZM10 10H11C10 9.3 9.3 8.2 9.1 7C5.7 6.9 3 6 3 5V8C3 9.1 6.1 10 10 10Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsDatabaseExport(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 6C9 4.4 9.8 3 11 2H10C6.1 2 3 2.9 3 4C3 5 5.6 5.8 9 6ZM12.8 10.8C11.9 10.9 10.9 11 10 11C6.1 11 3 10.1 3 9V12C3 13.1 6.1 14 10 14C13.9 14 17 13.1 17 12V10C16.1 10.7 15.1 11 14 11C13.6 11 13.2 10.9 12.8 10.8ZM10 15C6.1 15 3 14.1 3 13V16C3 17.1 6.1 18 10 18C13.9 18 17 17.1 17 16V13C17 14.1 13.9 15 10 15ZM10 10H11C10 9.3 9.3 8.2 9.1 7C5.7 6.9 3 6 3 5V8C3 9.1 6.1 10 10 10ZM14 10C16.2 10 18 8.2 18 6C18 3.8 16.2 2 14 2C11.8 2 10 3.8 10 6C10 8.2 11.8 10 14 10ZM13 6V3H15V6H17L14 9L11 6H13Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsDatabaseImport(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 6C9 4.4 9.8 3 11 2H10C6.1 2 3 2.9 3 4C3 5 5.6 5.8 9 6ZM10 15C6.1 15 3 14.1 3 13V16C3 17.1 6.1 18 10 18C13.9 18 17 17.1 17 16V13C17 14.1 13.9 15 10 15ZM12.8 10.8C11.9 10.9 10.9 11 10 11C6.1 11 3 10.1 3 9V12C3 13.1 6.1 14 10 14C13.9 14 17 13.1 17 12V10C16.1 10.7 15.1 11 14 11C13.6 11 13.2 10.9 12.8 10.8ZM10 10H11C10 9.3 9.3 8.2 9.1 7C5.7 6.9 3 6 3 5V8C3 9.1 6.1 10 10 10ZM14 10C16.2 10 18 8.2 18 6C18 3.8 16.2 2 14 2C11.8 2 10 3.8 10 6C10 8.2 11.8 10 14 10ZM14 3L17 6H15V9H13V6H11L14 3Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsDatabaseRemove(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 10C16.2 10 18 8.2 18 6C18 3.8 16.2 2 14 2C11.8 2 10 3.8 10 6C10 8.2 11.8 10 14 10ZM17 5V7H11V5H17ZM9 6C9 4.4 9.8 3 11 2H10C6.1 2 3 2.9 3 4C3 5 5.6 5.8 9 6ZM12.8 10.8C11.9 10.9 10.9 11 10 11C6.1 11 3 10.1 3 9V12C3 13.1 6.1 14 10 14C13.9 14 17 13.1 17 12V10C16.1 10.7 15.1 11 14 11C13.6 11 13.2 10.9 12.8 10.8ZM10 10H11C10 9.3 9.3 8.2 9.1 7C5.7 6.9 3 6 3 5V8C3 9.1 6.1 10 10 10ZM10 15C6.1 15 3 14.1 3 13V16C3 17.1 6.1 18 10 18C13.9 18 17 17.1 17 16V13C17 14.1 13.9 15 10 15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsDatabaseView(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 6C9 4.4 9.8 3 11 2H10C6.1 2 3 2.9 3 4C3 5 5.6 5.8 9 6ZM12.8 10.8C11.9 10.9 10.9 11 10 11C6.1 11 3 10.1 3 9V12C3 13.1 6.1 14 10 14C13.9 14 17 13.1 17 12V10C16.1 10.7 15.1 11 14 11C13.6 11 13.2 10.9 12.8 10.8ZM10 15C6.1 15 3 14.1 3 13V16C3 17.1 6.1 18 10 18C13.9 18 17 17.1 17 16V13C17 14.1 13.9 15 10 15ZM10 10H11C10 9.3 9.3 8.2 9.1 7C5.7 6.9 3 6 3 5V8C3 9.1 6.1 10 10 10ZM14 10C16.2 10 18 8.2 18 6C18 3.8 16.2 2 14 2C11.8 2 10 3.8 10 6C10 8.2 11.8 10 14 10ZM11.7 5.6L13.4 7.3L16.3 4.4L17 5.1L13.4 8.7L11 6.3L11.7 5.6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsDatabase(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 6C13.9 6 17 5.1 17 4C17 2.9 13.9 2 10 2C6.1 2 3 2.9 3 4C3 5.1 6.1 6 10 6ZM10 15C6.1 15 3 14.1 3 13V16C3 17.1 6.1 18 10 18C13.9 18 17 17.1 17 16V13C17 14.1 13.9 15 10 15ZM10 11C6.1 11 3 10.1 3 9V12C3 13.1 6.1 14 10 14C13.9 14 17 13.1 17 12V9C17 10.1 13.9 11 10 11ZM10 7C6.1 7 3 6.1 3 5V8C3 9.1 6.1 10 10 10C13.9 10 17 9.1 17 8V5C17 6.1 13.9 7 10 7Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsDesktop(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 2H17C17.55 2 18 2.45 18 3V13C18 13.55 17.55 14 17 14H12V16H14C14.55 16 15 16.45 15 17V18H5V17C5 16.45 5.45 16 6 16H8V14H3C2.45 14 2 13.55 2 13V3C2 2.45 2.45 2 3 2ZM16 11V4H4V11H16ZM5 5H14L5 9V5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsDismiss(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2ZM15 13L12 10L15 7L13 5L10 8L7 5L5 7L8 10L5 13L7 15L10 12L13 15L15 13Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsDownload(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.01 4V10H16.01V2H4V10H6.01V4H14.01ZM12.01 6V12H15.01L10.01 18L5.01 12H8.01V6H12.01Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsDrumstick(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.2 4.49999C16.8 3.79999 16.2 3.29999 15.6 2.89999C13 1.29999 9.69997 1.99999 8.09997 4.49999C7.59997 5.29999 7.29997 6.29999 7.29997 7.19999C7.29997 8.69999 6.69997 10.2 5.69997 11.3L4.89997 12.1C4.39997 12.6 2.99997 12.3 2.39997 13.3C1.29997 15.2 3.09997 15.9 3.59997 16.4C4.09997 16.9 4.79997 18.8 6.69997 17.6C7.59997 17 7.29997 15.7 7.89997 15.1L8.69997 14.3C9.79997 13.3 11.3 12.7 12.8 12.7C13.1 12.7 13.4 12.7 13.6 12.6C12.8 11 13.4 9.09999 14.9 8.29999C15.8 7.79999 17 7.79999 17.9 8.29999C18.2 6.99999 17.9 5.59999 17.2 4.49999Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditLarge(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6.39999 14.1L7.69999 15.4L14.6 8.50001L13.3 7.20001L6.39999 14.1ZM12.7 6.60001L11.4 5.30001L4.49999 12.2L5.89999 13.6L12.7 6.60001ZM14.8 1.90001L18.1 5.20001C18.7 5.80001 18.6 6.70001 18.1 7.20001L8.19999 17.1L1.29999 18.5L2.69999 11.6C8.89999 5.30001 12.2 2.00001 12.6 1.70001C13.2 1.30001 14.2 1.30001 14.8 1.90001Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditPage(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 5H2V18H12V16H4V5ZM17.9 3.4L16.6 2.1C16.2 1.7 15.5 1.6 15 2L14 3H5V15H14V9L18 5C18.4 4.5 18.3 3.8 17.9 3.4ZM12.2 9.4L9.7 10.3L10.6 7.8L15 3.4L16.6 5L12.2 9.4Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEdit(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.89 3.39L16.6 6.11C17.06 6.57 17.02 7.35 16.63 7.75L8.62 15.77L3.06 16.93L4.22 11.35C4.22 11.35 11.82 3.72 12.21 3.32C12.6 2.93 13.43 2.93 13.89 3.39ZM11.16 6.18L5.57 11.79L6.68 12.9L12.22 7.25L11.16 6.18ZM8.19 14.41L13.77 8.81L12.7 7.73L7.11 13.33L8.19 14.41Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorAligncenter(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 5V3H6V5H14ZM17 9V7H3V9H17ZM14 13V11H6V13H14ZM17 17V15H3V17H17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorAlignleft(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 5V3H3V5H12ZM17 9V7H3V9H17ZM12 13V11H3V13H12ZM17 17V15H3V17H17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorAlignright(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 5V3H8V5H17ZM17 9V7H3V9H17ZM17 13V11H8V13H17ZM17 17V15H3V17H17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorBold(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 4V17H10.54C11.91 17 13 16.67 13.8 16C14.6 15.34 15 14.42 15 13.23C15 12.39 14.83 11.72 14.49 11.22C14.15 10.72 13.59 10.37 12.82 10.19V10.1C13.39 10 13.84 9.7 14.18 9.2C14.52 8.7 14.69 8.07 14.69 7.29C14.69 6.15 14.3 5.31 13.52 4.79C12.75 4.26 11.5 4 9.78 4H6ZM8.57 9.15V6.26H9.93C10.66 6.26 11.2 6.37 11.54 6.58C11.88 6.8 12.05 7.16 12.05 7.65C12.05 8.19 11.89 8.57 11.58 8.8C11.27 9.03 10.76 9.15 10.07 9.15H8.57ZM8.57 11.34H10.17C11.61 11.34 12.33 11.87 12.33 12.95C12.33 13.55 12.16 14 11.82 14.29C11.48 14.58 10.96 14.72 10.25 14.72H8.57V11.34Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorBreak(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16 4H18V13H7V16L2 12L7 8V11H16V4Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorCodeDuplicate(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 6L5 10L9 14L8 16L2 10L8 4L9 6ZM11 14L15 10L11 6L12 4L18 10L12 16L11 14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorCode(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 6L5 10L9 14L8 16L2 10L8 4L9 6ZM11 14L15 10L11 6L12 4L18 10L12 16L11 14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorContract(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.75 6.75L18 3V17L15.75 13.25L17 12H13V16L14.25 14.75L18 17H2L5.75 14.75L7 16V12H3L4.25 13.25L2 17V3L4.25 6.75L3 8H7V4L5.75 5.25L2 3H18L14.25 5.25L13 4V8H17L15.75 6.75Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorCustomchar(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 5.40001C11.27 5.40001 12.24 5.76001 12.91 6.48001C13.57 7.19001 13.91 8.24001 13.91 9.61001C13.91 10.89 13.68 11.98 13.22 12.88C12.75 13.77 11.95 14.4 11 15V17H17V15H13.31C14.23 14.36 14.93 13.66 15.43 12.66C15.92 11.65 16.17 10.53 16.17 9.31001C16.17 7.53001 15.62 6.12001 14.52 5.09001C13.42 4.06001 11.92 3.54001 10 3.54001C8.08 3.54001 6.57 4.07001 5.48 5.11001C4.38 6.15001 3.83 7.55001 3.83 9.31001C3.83 10.52 4.07 11.62 4.56 12.64C5.04 13.65 5.75 14.35 6.66 15H3V17H9V15C8.02 14.36 7.2 13.72 6.76 12.83C6.31 11.94 6.09 10.87 6.09 9.61001C6.09 8.24001 6.42 7.20001 7.09 6.48001C7.75 5.76001 8.72 5.40001 10 5.40001Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorExpand(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7 8H13V12H7V8ZM2 13V17H6L4.8 15.8L7 12L3.2 14.2L2 13ZM14 17H18V13L16.8 14.2L13 12L15.2 15.8L14 17ZM14 3L15.3 4.3L13 8L16.8 5.8L18 7V3H14ZM6 3H2V7L3.2 5.8L7 8L4.7 4.3",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorHelp(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 10C17 6.13 13.86 3 10 3C6.13 3 3 6.13 3 10C3 13.87 6.13 17 10 17C13.86 17 17 13.87 17 10ZM10.7 11.48H9.14V11.05C9.14 10.67 9.22 10.35 9.38 10.07C9.54 9.79 9.84 9.5 10.26 9.18C10.67 8.89 10.94 8.65 11.07 8.47C11.21 8.29 11.27 8.08 11.27 7.85C11.27 7.6 11.18 7.41 10.99 7.27C10.8 7.14 10.54 7.08 10.2 7.08C9.62 7.08 8.95 7.27 8.2 7.65L7.56 6.37C8.43 5.88 9.36 5.63 10.33 5.63C11.14 5.63 11.78 5.83 12.25 6.21C12.73 6.6 12.96 7.12 12.96 7.76C12.96 8.19 12.87 8.56 12.67 8.87C12.48 9.19 12.1 9.54 11.56 9.93C11.18 10.21 10.95 10.42 10.85 10.56C10.75 10.71 10.7 10.9 10.7 11.13V11.48ZM9.23 14.22C9.05 14.05 8.96 13.8 8.96 13.49C8.96 13.16 9.04 12.91 9.22 12.74C9.4 12.57 9.65 12.49 9.99 12.49C10.31 12.49 10.56 12.58 10.74 12.75C10.92 12.92 11.01 13.17 11.01 13.49C11.01 13.79 10.92 14.04 10.74 14.21C10.56 14.39 10.31 14.48 9.99 14.48C9.66 14.48 9.41 14.39 9.23 14.22Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorIndent(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 5V3H12V5H3ZM13 4V3H17V4H13ZM13 7H15V5L19 8.5L15 12V10H13V7ZM3 8V6H12V8H3ZM5 11V9H12V11H5ZM3 14V12H12V14H3ZM13 14V13H17V14H13ZM9 17V15H12V17H9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorInsertmore(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 7V3H3V7H17ZM6 11V9H3V11H6ZM12 11V9H8V11H12ZM17 11V9H14V11H17ZM17 17V13H3V17H17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorItalic(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.78 6H12.65L9.84998 15H11.97L11.35 17H4.59998L5.21998 15H7.35998L10.16 6H8.02998L8.64998 4H15.4L14.78 6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorJustify(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 3H18V5H2V3ZM2 7H18V9H2V7ZM2 11H18V13H2V11ZM2 15H18V17H2V15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorKitchensink(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19 2V8H1V2H19ZM18 7V3H2V7H18ZM5 4V6H3V4H5ZM8 4V6H6V4H8ZM11 4V6H9V4H11ZM14 4V6H12V4H14ZM17 4V6H15V4H17ZM19 9V18H1V9H19ZM18 17V10H2V17H18ZM5 11V13H3V11H5ZM8 11V13H6V11H8ZM11 11V13H9V11H11ZM17 11V13H12V11H17ZM11 14V16H3V14H11ZM14 14V16H12V14H14ZM17 14V16H15V14H17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorLtr(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 2H5.5C3 2 1 4 1 6.5C1 9 3 11 5.5 11H6V17C6 17.5 6.5 18 7 18C7.5 18 8 17.5 8 17V5C8 4.5 8.5 4 9 4C9.5 4 10 4.5 10 5V17C10 17.5 10.5 18 11 18C11.5 18 12 17.5 12 17V4H13C13.5 4 14 3.5 14 3C14 2.5 13.5 2 13 2ZM14 6V14L19 10L14 6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorOlRtl(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 8.8C15.1 8.7 15.3 8.7 15.4 8.7C15.5 8.7 15.7 8.7 15.8 8.8C15.9 8.9 16 9 16 9.1C16 9.2 16 9.3 15.9 9.4C15.9 9.5 15.8 9.6 15.7 9.7L15.1 10.3L14.1 11.3V12H16.9V11.3H15.2L15.7 10.8L16.4 10.1C16.5 10 16.6 9.8 16.7 9.6C16.8 9.4 16.8 9.3 16.8 9.1C16.8 8.9 16.7 8.7 16.6 8.5C16.5 8.3 16.3 8.2 16.2 8.1C16 8 15.8 7.9 15.5 8C15.3 8 15.2 8 15 8.1C14.9 8.1 14.7 8.2 14.6 8.2C14.4 8.3 14.3 8.4 14.1 8.6L14.6 9C14.7 8.9 14.9 8.8 15 8.8ZM16.7 15.3C16.5 15.1 16.2 15 16 15C16.3 14.9 16.5 14.8 16.6 14.6C16.8 14.4 16.8 14.2 16.8 14C16.8 13.7 16.7 13.4 16.4 13.3C16.1 13.1 15.8 13 15.4 13C14.9 13 14.5 13.1 14.1 13.4L14.5 14C14.6 13.9 14.8 13.8 15 13.8C15.1 13.8 15.3 13.7 15.4 13.7C15.8 13.7 16 13.9 16 14.2C16 14.4 15.9 14.5 15.8 14.6C15.6 14.7 15.3 14.7 15.1 14.7H14.8V15.4H15.1C15.4 15.4 15.6 15.4 15.9 15.5C16.1 15.6 16.1 15.7 16.1 15.9C16.1 16.1 16 16.3 15.9 16.4C15.7 16.5 15.5 16.6 15.3 16.6C15.1 16.6 14.9 16.6 14.7 16.5C14.5 16.5 14.3 16.4 14.2 16.3V17C14.6 17.2 15 17.2 15.4 17.2C15.8 17.2 16.3 17.1 16.6 16.9C16.9 16.7 17 16.3 17 16C17 15.7 16.9 15.5 16.7 15.3ZM15 4.2C15.1 4.2 15.2 4.1 15.3 3.9V7H16.1V3H15.4L14.1 4L14.5 4.5L15 4.2ZM4 6H13V5H4V6ZM4 11H13V10H4V11ZM4 16H13V15H4V16Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorOl(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 7V3H5.31L4.02 4.03L4.42 4.54L4.88 4.17C4.94 4.12 5.04 4.03 5.18 3.89L5.16 4.31V7H6ZM8 5H17V6H8V5ZM6.77 11.95V11.25H5.05V11.21L5.56 10.73C5.89 10.42 6.13 10.19 6.26 10.02C6.4 9.85 6.5 9.69 6.56 9.53C6.63 9.37 6.66 9.2 6.66 9.02C6.66 8.81 6.61 8.62 6.5 8.46C6.4 8.3 6.25 8.18 6.06 8.09C5.87 8 5.65 7.95 5.41 7.95C5.22 7.95 5.05 7.97 4.9 8.01C4.75 8.04 4.61 8.1 4.48 8.16C4.36 8.23 4.19 8.35 4 8.51L4.45 9.05C4.61 8.92 4.76 8.82 4.9 8.75C5.05 8.68 5.2 8.65 5.35 8.65C5.49 8.65 5.61 8.68 5.7 8.76C5.79 8.84 5.83 8.96 5.83 9.12C5.83 9.22 5.81 9.32 5.77 9.42C5.73 9.52 5.67 9.63 5.58 9.75C5.49 9.86 5.29 10.07 5 10.37L4.01 11.37V11.95H6.77ZM8 10H17V11H8V10ZM6.71 13.95C6.71 13.65 6.59 13.41 6.34 13.24C6.1 13.07 5.76 12.98 5.34 12.98C4.82 12.98 4.38 13.11 4.01 13.38L4.41 13.98C4.58 13.87 4.73 13.79 4.87 13.75C5.01 13.7 5.14 13.68 5.28 13.68C5.66 13.68 5.86 13.83 5.86 14.14C5.86 14.34 5.79 14.49 5.64 14.57C5.49 14.65 5.26 14.69 4.94 14.69H4.63V15.35H4.94C5.28 15.35 5.53 15.39 5.69 15.47C5.84 15.55 5.92 15.69 5.92 15.88C5.92 16.1 5.85 16.25 5.72 16.35C5.58 16.45 5.37 16.5 5.09 16.5C4.9 16.5 4.71 16.47 4.52 16.42C4.33 16.37 4.16 16.3 4 16.22V16.96C4.34 17.11 4.74 17.18 5.18 17.18C5.71 17.18 6.12 17.07 6.4 16.85C6.69 16.63 6.83 16.33 6.83 15.93C6.83 15.66 6.74 15.45 6.57 15.29C6.4 15.13 6.15 15.03 5.83 14.99V14.97C6.1 14.91 6.32 14.78 6.48 14.6C6.63 14.42 6.71 14.21 6.71 13.95ZM8 15H17V16H8V15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorOutdent(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7 4V3H3V4H7ZM17 5V3H8V5H17ZM7 7H5V5L1 8.5L5 12V10H7V7ZM17 8V6H8V8H17ZM15 11V9H8V11H15ZM17 14V12H8V14H17ZM7 14V13H3V14H7ZM11 17V15H8V17H11Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorParagraph(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 2H7.54C6.71 2 5.95 2.2 5.26 2.6C4.56 3.01 4.01 3.56 3.61 4.25C3.2 4.94 3 5.7 3 6.52C3 7.34 3.2 8.1 3.61 8.79C4.01 9.48 4.56 10.03 5.26 10.43C5.95 10.84 6.71 11.04 7.54 11.04H7.97V17C7.97 17.27 8.07 17.51 8.26 17.71C8.46 17.9 8.7 18 8.97 18C9.25 18 9.48 17.9 9.68 17.71C9.88 17.51 9.98 17.27 9.98 17V5C9.98 4.73 10.07 4.49 10.27 4.29C10.47 4.1 10.71 4 10.98 4C11.25 4 11.49 4.1 11.69 4.29C11.88 4.49 11.98 4.73 11.98 5V17C11.98 17.27 12.08 17.51 12.28 17.71C12.48 17.9 12.71 18 12.99 18C13.26 18 13.5 17.9 13.7 17.71C13.89 17.51 13.99 17.27 13.99 17V4H15C15.27 4 15.5 3.9 15.7 3.7C15.9 3.51 16 3.27 16 3C16 2.73 15.9 2.49 15.7 2.29C15.6083 2.1978 15.4992 2.1247 15.379 2.07493C15.2589 2.02515 15.1301 1.99968 15 2Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorPasteText(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.38 2L15 5V6H5V5L7.64 2H12.38ZM10 5C10.55 5 11 4.56 11 4C11 3.45 10.55 3 10 3C9.45 3 9 3.45 9 4C9 4.56 9.45 5 10 5ZM15.45 4H17C17.55 4 18 4.45 18 5V17C18 17.56 17.55 18 17 18H3C2.45 18 2 17.56 2 17V5C2 4.45 2.45 4 3 4H4.55L4 4.63V7H16V4.63L15.45 4ZM14 11V9H6V11H9V16H11V11H14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorPasteWord(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.38 2L15 5V6H5V5L7.64 2H12.38ZM10 5C10.55 5 11 4.55 11 4C11 3.45 10.55 3 10 3C9.45 3 9 3.45 9 4C9 4.55 9.45 5 10 5ZM18 17V5C18 4.45 17.55 4 17 4H15.46L16 4.63V7H4V4.62L4.55 4H3C2.45 4 2 4.45 2 5V17C2 17.55 2.45 18 3 18H17C17.55 18 18 17.55 18 17ZM15 9L13 16H11L10 11L9 16H6.92L5 9H7L8 14L9 9H11L12 14L13 9H15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorQuote(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9.49001 13.22C9.49001 12.48 9.29001 11.84 8.88001 11.32C8.26001 10.54 7.05001 10.44 6.35001 10.6C6.06001 8.95 7.46001 6.85 9.27001 5.95L7.88001 4C5.15001 5.3 2.46001 8.28 2.92001 12.05C3.21001 14.43 4.59001 16 6.54001 16C7.39001 16 8.10001 15.75 8.66001 15.25C9.22001 14.75 9.49001 14.07 9.49001 13.22ZM17.54 13.22C17.54 12.48 17.34 11.84 16.93 11.32C16.3 10.54 15.1 10.44 14.4 10.6C14.11 8.95 15.51 6.85 17.32 5.95L15.93 4C13.2 5.3 10.52 8.28 10.98 12.05C11.27 14.43 12.64 16 14.59 16C15.44 16 16.15 15.75 16.71 15.25C17.27 14.75 17.54 14.07 17.54 13.22Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorRemoveformatting(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.29 4.59L15.39 5.7C15.8 6.1 16 6.64 16 7.17V9.29C16 9.82 15.8 10.36 15.39 10.76L8.76 17.39C8.36 17.8 7.82 18 7.29 18C6.76 18 6.22 17.8 5.82 17.39L4.71 16.29L3.61 15.18C3.2 14.78 3 14.24 3 13.71V11.59C3 11.05 3.2 10.52 3.61 10.11L10.24 3.49C10.64 3.08 11.18 2.88 11.71 2.88C12.24 2.88 12.77 3.08 13.18 3.49L14.29 4.59ZM8.08 14.29L14.5 7.87C14.89 7.48 14.89 6.84 14.5 6.44L12.36 4.3C12.17 4.11 11.91 4.01 11.64 4.01C11.37 4.01 11.12 4.11 10.93 4.3L4.51 10.72C4.12 11.12 4.12 11.76 4.51 12.15L6.65 14.29C7.03 14.67 7.69 14.67 8.08 14.29Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorRtl(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 2H5.5C3 2 1 4 1 6.5C1 9 3 11 5.5 11H6V17C6 17.5 6.5 18 7 18C7.5 18 8 17.5 8 17V5C8 4.5 8.5 4 9 4C9.5 4 10 4.5 10 5V17C10 17.5 10.5 18 11 18C11.5 18 12 17.5 12 17V4H13C13.5 4 14 3.5 14 3C14 2.5 13.5 2 13 2ZM14 10L19 14V6L14 10Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorSpellcheck(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.84 2.76001C16.09 2.76001 16.33 2.80001 16.55 2.87001C16.78 2.94001 16.99 3.03001 17.19 3.12001L17.54 2.31001C17.02 2.05001 16.46 1.92001 15.85 1.92001C15.27 1.92001 14.76 2.05001 14.33 2.29001C13.9 2.54001 13.57 2.90001 13.34 3.37001C13.11 3.83001 13 4.38001 13 5.00001C13 5.99001 13.23 6.75001 13.7 7.28001C14.17 7.81001 14.85 8.07001 15.72 8.07001C16.32 8.07001 16.85 7.98001 17.32 7.81001V6.97001C17.06 7.05001 16.81 7.11001 16.58 7.16001C16.34 7.21001 16.09 7.24001 15.84 7.24001C15.25 7.24001 14.8 7.05001 14.5 6.67001C14.18 6.30001 14.03 5.74001 14.03 5.01001C14.03 4.31001 14.19 3.76001 14.51 3.36001C14.84 2.96001 15.28 2.76001 15.84 2.76001ZM6.5 8.00001H7.54L5.3 2.00001H4.24L2 8.00001H3.03L3.61 6.34001H5.9L6.5 8.00001ZM8 2.00001V8.00001H10.17C10.84 8.00001 11.36 7.85001 11.74 7.54001C12.12 7.24001 12.3 6.82001 12.3 6.28001C12.3 5.88001 12.2 5.56001 12 5.33001C11.81 5.09001 11.5 4.94001 11.07 4.86001V4.82001C11.42 4.76001 11.67 4.61001 11.85 4.38001C12.03 4.14001 12.13 3.85001 12.13 3.50001C12.13 2.98001 11.94 2.60001 11.57 2.36001C11.21 2.12001 10.61 2.00001 9.78 2.00001H8ZM8.98 4.48001V2.82001H9.83C10.27 2.82001 10.6 2.88001 10.8 3.01001C11.01 3.13001 11.11 3.34001 11.11 3.62001C11.11 3.93001 11.01 4.15001 10.82 4.28001C10.64 4.41001 10.34 4.48001 9.93 4.48001H8.98ZM5.64 5.50001H3.9L4.44 3.94001C4.58 3.54001 4.69 3.18001 4.76 2.84001L4.91 3.36001C4.98 3.59001 5.04 3.76001 5.08 3.87001L5.64 5.50001ZM8.98 5.27001H9.97C10.41 5.27001 10.73 5.35001 10.95 5.50001C11.16 5.65001 11.27 5.88001 11.27 6.19001C11.27 6.53001 11.16 6.78001 10.95 6.94001C10.74 7.10001 10.43 7.18001 10.02 7.18001H8.98V5.27001ZM4 13L9 18L18 10L17 9.00001L9 15L5 12L4 13Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorStrikethrough(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.82 12.25C16.08 12.25 16.32 12.23 16.56 12.18C16.79 12.13 17.04 12.06 17.29 11.98V12.82C16.83 12.99 16.3 13.08 15.71 13.08C14.83 13.08 14.17 12.82 13.7 12.29C13.31 11.85 13.08 11.25 13.02 10.5H12.08C12.2 10.71 12.26 10.98 12.26 11.29C12.26 11.83 12.08 12.24 11.71 12.55C11.33 12.85 10.81 13 10.15 13H8V10.5H6.59L7.52 13H6.49L5.9 11.33H3.62L3.04 13H2L2.93 10.5H2V9.5H3.31L4.24 7.01H5.3L6.22 9.5H8V7H9.77C10.77 7 11.18 7.17 11.54 7.41C11.91 7.65 12.09 8.03 12.09 8.54C12.09 8.89 12 9.18 11.82 9.41L11.74 9.5H13.03C13.08 9.1 13.18 8.73 13.34 8.4C13.57 7.94 13.89 7.58 14.32 7.34C14.75 7.09 15.25 6.97 15.83 6.97C16.44 6.97 17 7.09 17.52 7.35L17.17 8.16C16.97 8.06 16.75 7.98 16.53 7.91C16.31 7.84 16.07 7.8 15.82 7.8C15.27 7.8 14.83 8 14.51 8.39C14.28 8.68 14.13 9.05 14.07 9.5H17V10.5H14.05C14.11 11 14.25 11.4 14.49 11.69C14.79 12.06 15.24 12.25 15.82 12.25ZM4.44 8.96L4.26 9.5H5.3L5.08 8.89C5.04 8.78 4.99 8.61 4.91 8.38C4.84 8.14 4.79 7.97 4.77 7.87C4.69 8.2 4.59 8.56 4.44 8.96ZM8.97 7.87V9.5H10.16C10.44 9.48 10.65 9.41 10.8 9.32C10.99 9.19 11.08 8.97 11.08 8.66C11.08 8.38 10.98 8.18 10.78 8.05C10.58 7.93 10.25 7.87 9.81 7.87H8.97ZM5.64 10.51V10.5H3.91V10.51H5.64ZM10.92 10.52L10.89 10.5H8.97V12.18H10.01C10.41 12.18 10.72 12.1 10.93 11.95C11.14 11.79 11.24 11.55 11.24 11.21C11.24 10.9 11.13 10.67 10.92 10.52Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorTable(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 17V3H2V17H18ZM16 7H4V5H16V7ZM9 11H4V9H9V11ZM16 11H11V9H16V11ZM9 15H4V13H9V15ZM16 15H11V13H16V15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorTextcolor(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.23 15H15.13L11 4H9L5 15H6.88L7.95 12H12.13L13.23 15ZM11.7 10.46H8.51L10 5.6L11.7 10.46Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorUl(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5.5 7C4.67 7 4 6.33 4 5.5C4 4.68 4.67 4 5.5 4C6.32 4 7 4.68 7 5.5C7 6.33 6.32 7 5.5 7ZM8 5H17V6H8V5ZM5.5 12C4.67 12 4 11.33 4 10.5C4 9.68 4.67 9 5.5 9C6.32 9 7 9.68 7 10.5C7 11.33 6.32 12 5.5 12ZM8 10H17V11H8V10ZM5.5 17C4.67 17 4 16.33 4 15.5C4 14.68 4.67 14 5.5 14C6.32 14 7 14.68 7 15.5C7 16.33 6.32 17 5.5 17ZM8 15H17V16H8V15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorUnderline(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 5H12V10.71C12 12.7 10.88 13.69 9.55 13.69C8.23 13.69 7 12.69 7 10.73V5H5V10.87C5 12.78 6 15.41 9.48 15.41C12.97 15.41 14 12.83 14 10.91V5ZM14 18V16H5V18H14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorUnlink(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.74 2.26001C18.5471 3.06991 19.0002 4.16666 19.0002 5.31001C19.0002 6.45336 18.5471 7.55011 17.74 8.36001L16.21 9.88001C15.89 10.21 15.52 10.46 15.13 10.65L13 10L14.69 8.36001L15.45 7.59001L16.21 6.83001C17.05 5.99001 17.05 4.63001 16.21 3.79001C16.0117 3.58803 15.7752 3.4276 15.5142 3.31808C15.2532 3.20856 14.973 3.15216 14.69 3.15216C14.407 3.15216 14.1268 3.20856 13.8658 3.31808C13.6048 3.4276 13.3683 3.58803 13.17 3.79001L12.4 4.55001L11.64 5.31001L10 7.00001L9.35001 4.86001C9.54001 4.48001 9.79001 4.11001 10.12 3.79001L11.64 2.26001C12.4499 1.45297 13.5467 0.999817 14.69 0.999817C15.8334 0.999817 16.9301 1.45297 17.74 2.26001ZM2.00001 4.00001L10 10L4.00001 2.00001L2.00001 4.00001ZM6.00001 2.00001L10 10L8.00001 2.00001H6.00001ZM2.00001 6.00001L10 10L2.00001 8.00001V6.00001ZM9.36001 13.69L10 13L10.74 15.35L9.36001 16.74C8.55011 17.5471 7.45336 18.0002 6.31001 18.0002C5.16666 18.0002 4.06991 17.5471 3.26001 16.74C2.45297 15.9301 1.99982 14.8334 1.99982 13.69C1.99982 12.5467 2.45297 11.4499 3.26001 10.64L4.65001 9.26001L7.00001 10L6.31001 10.64L4.79001 12.17C3.94001 13.01 3.94001 14.37 4.79001 15.21C5.63001 16.06 6.99001 16.06 7.83001 15.21L9.36001 13.69ZM18 16L10 10L16 18L18 16ZM14 18L10 10L12 18H14ZM18 14L10 10L18 12V14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEditorVideo(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16 2H13V3H7V2H4V17H7V16H13V17H16V2ZM6 3V4H5V3H6ZM15 3V4H14V3H15ZM13 4V9H7V4H13ZM6 5V6H5V5H6ZM15 5V6H14V5H15ZM6 7V8H5V7H6ZM15 7V8H14V7H15ZM6 9V10H5V9H6ZM15 9V10H14V9H15ZM13 10V15H7V10H13ZM6 11V12H5V11H6ZM15 11V12H14V11H15ZM6 13V14H5V13H6ZM15 13V14H14V13H15ZM6 15V16H5V15H6ZM15 15V16H14V15H15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEllipsis(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 10C5 11.1 4.1 12 3 12C1.9 12 1 11.1 1 10C1 8.9 1.9 8 3 8C4.1 8 5 8.9 5 10ZM17 8C15.9 8 15 8.9 15 10C15 11.1 15.9 12 17 12C18.1 12 19 11.1 19 10C19 8.9 18.1 8 17 8ZM10 8C8.9 8 8 8.9 8 10C8 11.1 8.9 12 10 12C11.1 12 12 11.1 12 10C12 8.9 11.1 8 10 8Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEmailAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19 14.5V5.5C19 4.67 18.33 4 17.5 4H3.48999C2.65999 4 1.98999 4.67 1.98999 5.5V14.5C1.98999 15.33 2.65999 16 3.48999 16H17.5C18.33 16 19 15.33 19 14.5ZM17.69 5.39C18.02 5.72 17.84 6.06 17.66 6.23L13.6 9.95L17.5 14.01C17.62 14.15 17.7 14.37 17.56 14.52C17.43 14.68 17.13 14.67 17 14.57L12.63 10.84L10.49 12.79L8.35999 10.84L3.98999 14.57C3.85999 14.67 3.55999 14.68 3.42999 14.52C3.28999 14.37 3.36999 14.15 3.48999 14.01L7.38999 9.95L3.32999 6.23C3.14999 6.06 2.96999 5.72 3.29999 5.39C3.62999 5.06 3.96999 5.22 4.24999 5.46L10.49 10.5L16.74 5.46C17.02 5.22 17.36 5.06 17.69 5.39Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEmailAlt2(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16 1.1L4 5.9C2.9 6.3 2 7.7 2 8.9V17.6C2 18.8 2.9 19.4 4 19L16 14.2C17.1 13.8 18 12.4 18 11.2V2.5C18 1.3 17.1 0.700002 16 1.1ZM16.6 3.7L10.6 13L3.9 8.5C3.8 8.4 3.5 8.1 3.7 7.8C3.9 7.4 4.4 7.6 4.4 7.6L10.7 9.9C10.7 9.9 15.5 3.6 15.8 3.2C15.9 3 16.2 2.9 16.5 3.1C16.8 3.3 16.7 3.6 16.6 3.7Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEmail(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.86999 4H17.12C18.37 4 19 4.59 19 5.79V14.21C19 15.4 18.37 16 17.12 16H3.86999C2.61999 16 1.98999 15.4 1.98999 14.21V5.79C1.98999 4.59 2.61999 4 3.86999 4ZM10.49 12.6L17.23 7.07C17.47 6.87 17.66 6.41 17.36 6C17.07 5.59 16.54 5.58 16.19 5.83L10.49 9.69L4.79999 5.83C4.44999 5.58 3.91999 5.59 3.62999 6C3.32999 6.41 3.51999 6.87 3.75999 7.07L10.49 12.6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEmbedAudio(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 4H3C1.9 4 1 4.9 1 6V14C1 15.1 1.9 16 3 16H17C18.1 16 19 15.1 19 14V6C19 4.9 18.1 4 17 4ZM10 7H7V11C7 12.1 6.1 13 5 13C3.9 13 3 12.1 3 11C3 9.9 3.9 9 5 9C5.4 9 5.7 9.1 6 9.3V5H10V7ZM14 10.5L12.5 12L14 13.5V15L11 12L14 9V10.5ZM15 15V13.5L16.5 12L15 10.5V9L18 12L15 15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEmbedGeneric(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 4H3C1.9 4 1 4.9 1 6V14C1 15.1 1.9 16 3 16H17C18.1 16 19 15.1 19 14V6C19 4.9 18.1 4 17 4ZM14 10.5L12.5 12L14 13.5V15L11 12L14 9V10.5ZM15 15V13.5L16.5 12L15 10.5V9L18 12L15 15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEmbedPhoto(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 4H3C1.9 4 1 4.9 1 6V14C1 15.1 1.9 16 3 16H17C18.1 16 19 15.1 19 14V6C19 4.9 18.1 4 17 4ZM10 12H3V6H10V12ZM14 10.5L12.5 12L14 13.5V15L11 12L14 9V10.5ZM15 15V13.5L16.5 12L15 10.5V9L18 12L15 15ZM9 11V8.5L7.2 10L6 9.2L4 11H9ZM4.6 8.6C5.2 8.6 5.6 8.2 5.6 7.6C5.6 7 5.2 6.6 4.6 6.6C4 6.6 3.6 7 3.6 7.6C3.6 8.2 4 8.6 4.6 8.6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEmbedPost(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 4H3C1.9 4 1 4.9 1 6V14C1 15.1 1.9 16 3 16H17C18.1 16 19 15.1 19 14V6C19 4.9 18.1 4 17 4ZM8.6 9L8.2 9.3C7.8 9.7 7.7 10.4 8 10.9L7.2 11.7L6.1 10.6L4.8 11.9C4.6 12.1 3.2 13.2 3 13C2.8 12.8 3.9 11.4 4.1 11.2L5.4 9.9L4.3 8.8L5.1 8C5.6 8.3 6.3 8.3 6.7 7.8L7 7.5C7.5 7 7.5 6.3 7.2 5.8L8 5L11 7.9L10.2 8.7C9.7 8.5 9 8.5 8.6 9ZM14 10.5L12.5 12L14 13.5V15L11 12L14 9V10.5ZM15 15V13.5L16.5 12L15 10.5V9L18 12L15 15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsEmbedVideo(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 4H3C1.9 4 1 4.9 1 6V14C1 15.1 1.9 16 3 16H17C18.1 16 19 15.1 19 14V6C19 4.9 18.1 4 17 4ZM10 10.5L8 9.1V11H3V6H8V7.8L10 6.5V10.5ZM14 10.5L12.5 12L14 13.5V15L11 12L14 9V10.5ZM15 15V13.5L16.5 12L15 10.5V9L18 12L15 15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsExcerptView(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19 18V2C19 1.45 18.55 1 18 1H2C1.45 1 1 1.45 1 2V18C1 18.55 1.45 19 2 19H18C18.55 19 19 18.55 19 18ZM4 3C4.55 3 5 3.45 5 4C5 4.55 4.55 5 4 5C3.45 5 3 4.55 3 4C3 3.45 3.45 3 4 3ZM17 3V9H6V3H17ZM4 11C4.55 11 5 11.45 5 12C5 12.55 4.55 13 4 13C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11ZM17 11V17H6V11H17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsExit(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 3V5H15V15H13V17H17V3H13ZM13 11V9H5.39998L9.69998 4.7L8.29998 3.3L1.59998 10L8.29998 16.7L9.69998 15.3L5.39998 11H13Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsExternal(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 3H17V11L15 10V6.92L9.4 12.51L7.99 11.1L14.08 5H10L9 3ZM12 15V12L14 10V17H3V6H11L9 8H5V15H12Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFacebookAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8.46 18H11.39V10.7H13.84L14.21 7.86H11.39V6.04C11.39 5.22 11.62 4.66 12.8 4.66H14.31V2.11C14.05 2.08 13.16 2 12.12 2C9.94 2 8.46 3.33 8.46 5.76V7.86H6V10.7H8.46V18Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFacebook(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.89 2H17.12C17.61 2 18 2.39 18 2.88V17.12C18 17.6 17.61 18 17.12 18H13.04V11.8H15.12L15.43 9.39H13.04V7.85C13.04 7.15 13.24 6.67 14.24 6.67H15.52V4.51C15.3 4.48 14.54 4.42 13.66 4.42C11.81 4.42 10.55 5.54 10.55 7.61V9.39H8.46V11.8H10.55V18H2.89C2.65568 18 2.43081 17.9076 2.26418 17.7429C2.09756 17.5781 2.00263 17.3543 2 17.12V2.88C2 2.39 2.4 2 2.89 2Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFeedback(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 2H18C18.55 2 19 2.45 19 3V17C19 17.55 18.55 18 18 18H2C1.45 18 1 17.55 1 17V3C1 2.45 1.45 2 2 2ZM17 16V7H3V16H17ZM4 8V9H7V8H4ZM8 8V11H16V8H8ZM4 12V13H7V12H4ZM8 12V15H16V12H8Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFilter(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 4.5V2.5C3 2.5 6.34 1.5 10 1.5C13.66 1.5 17 2.5 17 2.5V4.5L12 11.53V18.5C12 18.5 10.78 18.41 9.75 17.91C8.72 17.41 8 16.5 8 16.5V11.53L3 4.5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFlag(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 18V3H3V18H5ZM6 12V4C9 3 13 5 17 4V12C14 13.27 9 11 6 12Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFood(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7 4.5C6.7 4.5 6.5 4.8 6.5 5V7.5H5.5V5C5.5 4.7 5.3 4.5 5 4.5C4.7 4.5 4.5 4.8 4.5 5V7.5H3.5V5C3.5 4.7 3.3 4.5 3 4.5C2.7 4.5 2.5 4.8 2.5 5V8.3C2.5 9.2 3.2 9.9 4 10V17C4 17.6 4.4 18 5 18C5.6 18 6 17.6 6 17V10C6.8 9.9 7.5 9.2 7.5 8.3V5C7.5 4.8 7.3 4.5 7 4.5ZM9 5V11H10V17C10 17.6 10.4 18 11 18C11.6 18 12 17.6 12 17V2C10.3 2 9 3.3 9 5ZM16 4C14.6 4 13.5 5.5 13.5 7.3C13.4 8.5 14 9.6 15 10.3V17C15 17.6 15.4 18 16 18C16.6 18 17 17.6 17 17V10.3C18 9.6 18.6 8.5 18.5 7.3C18.5 5.5 17.4 4 16 4Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFormatAside(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1 1H19V13L13 19H1V1ZM4 4V5H16V4H4ZM4 8V9H16V8H4ZM10 13V12H4V13H10ZM12 17L17 12H12V17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFormatAudio(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6.99 3.08L18.01 1.08C18.56 1 19 1.53 19 2.08V14.5C19 16.44 17.43 18 15.5 18C13.57 18 12 16.44 12 14.5C12 12.57 13.57 11 15.5 11C16.04 11 16.54 11.14 17 11.35V5.08L8 7.08V16C7.76 17.7 6.26 19 4.5 19C2.57 19 1 17.44 1 15.5C1 13.57 2.57 12 4.5 12C5.04 12 5.54 12.14 6 12.35V4.08C6 3.53 6.44 3.17 6.99 3.08Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFormatChat(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11 6H10.18C9.07 6 8 7.2 8 8.16V10L5 13V10H3C1.9 10 1 9.1 1 8V3C1 1.9 1.9 1 3 1H9C10.1 1 11 1.9 11 3V6ZM11 7H17C18.1 7 19 7.9 19 9V14C19 15.1 18.1 16 17 16H15V19L12 16H11C9.9 16 9 15.1 9 14V9C9 7.9 9.9 7 11 7Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFormatGallery(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16 4H17.96C18.53 4 19 4.47 19 5.04V17.96C19 18.53 18.53 19 17.96 19H5.04C4.47 19 4 18.53 4 17.96V16H2.04C1.47 16 1 15.53 1 14.96V2.04C1 1.47 1.47 1 2.04 1H14.96C15.53 1 16 1.47 16 2.04V4ZM3 14H14V3H3V14ZM8 5.5C8 4.67 7.33 4 6.5 4C5.67 4 5 4.67 5 5.5C5 6.33 5.67 7 6.5 7C7.33 7 8 6.33 8 5.5ZM10 10C10 10 11 5 13 5V13H4V7C6 7 6 10 6 10C6 10 6.33 8 8 8C9.67 8 10 10 10 10ZM17 17V6H16V14.96C16 15.53 15.53 16 14.96 16H6V17H17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFormatImage(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.25 1H17.75C18.44 1 19 1.56 19 2.25V17.75C19 18.44 18.44 19 17.75 19H2.25C1.56 19 1 18.44 1 17.75V2.25C1 1.56 1.56 1 2.25 1ZM17 17V3H3V17H17ZM10 6C10 4.9 9.1 4 8 4C6.9 4 6 4.9 6 6C6 7.1 6.9 8 8 8C9.1 8 10 7.1 10 6ZM13 11C13 11 13 5 16 5V15C16 15.55 15.55 16 15 16H5C4.45 16 4 15.55 4 15V8C6 8 7 12 7 12C7 12 8 9 10 9C12 9 13 11 13 11Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFormatQuote(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8.54001 12.74C8.54001 11.87 8.30001 11.13 7.82001 10.52C7.09001 9.6 5.68001 9.49 4.86001 9.67C4.52001 7.74 6.16001 5.28 8.28 4.22L6.65001 1.94C3.45001 3.46 0.310005 6.96 0.850005 11.37C1.19001 14.16 2.80001 16 5.08001 16C6.08001 16 6.91001 15.71 7.56001 15.12C8.22001 14.53 8.54001 13.74 8.54001 12.74ZM17.97 12.74C17.97 11.87 17.73 11.13 17.25 10.52C16.52 9.6 15.11 9.49 14.29 9.67C13.95 7.74 15.59 5.28 17.71 4.22L16.08 1.94C12.88 3.46 9.74 6.96 10.28 11.37C10.62 14.16 12.23 16 14.51 16C15.51 16 16.34 15.71 16.99 15.12C17.65 14.53 17.97 13.74 17.97 12.74Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFormatStatus(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 1C17 1 19 3.91 19 7.5C19 11.09 17 14 10 14C3 14 1 11.09 1 7.5C1 3.91 3 1 10 1ZM5.5 9C6.33 9 7 8.33 7 7.5C7 6.67 6.33 6 5.5 6C4.67 6 4 6.67 4 7.5C4 8.33 4.67 9 5.5 9ZM10 9C10.83 9 11.5 8.33 11.5 7.5C11.5 6.67 10.83 6 10 6C9.17 6 8.5 6.67 8.5 7.5C8.5 8.33 9.17 9 10 9ZM14.5 9C15.33 9 16 8.33 16 7.5C16 6.67 15.33 6 14.5 6C13.67 6 13 6.67 13 7.5C13 8.33 13.67 9 14.5 9ZM6 14.5C6.83 14.5 7.5 15.17 7.5 16C7.5 16.83 6.83 17.5 6 17.5C5.17 17.5 4.5 16.83 4.5 16C4.5 15.17 5.17 14.5 6 14.5ZM3 16.5C3.55 16.5 4 16.95 4 17.5C4 18.05 3.55 18.5 3 18.5C2.45 18.5 2 18.05 2 17.5C2 16.95 2.45 16.5 3 16.5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFormatVideo(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 1H18C18.55 1 19 1.45 19 2V18L1 17.98V2C1 1.45 1.45 1 2 1ZM6 2L4 5H5L7 2H6ZM10 2H9L7 5H8L10 2ZM13 2H12L10 5H11L13 2ZM16 2H15L13 5H14L16 2ZM17 16V6H3V16H17ZM8 7L14 11L8 15V7Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsForms(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 2H9V9H2V2ZM11 2V9H18V2H11ZM5.5 4.5L7 3H4L5.5 4.5ZM12 8V3H17V8H12ZM4.5 5.5L3 4V7L4.5 5.5ZM8 4L6.5 5.5L8 7V4ZM5.5 6.5L4 8H7L5.5 6.5ZM9 18V11H2V18H9ZM18 18H11V11H18V18ZM8 12V17H3V12H8ZM14.5 13.5L16 12H13L14.5 13.5ZM12 16L13.5 14.5L12 13V16ZM15.5 14.5L17 16V13L15.5 14.5ZM14.5 15.5L13 17H16L14.5 15.5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFullscreenAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7 2H2V7L3.8 5.2L6.5 8L8 6.5L5.2 3.8L7 2ZM13 2L14.8 3.8L12 6.5L13.5 8L16.2 5.3L18 7V2H13ZM13.5 12L12 13.5L14.7 16.2L13 18H18V13L16.2 14.8L13.5 12ZM6.5 12L3.8 14.7L2 13V18H7L5.2 16.2L8 13.5L6.5 12Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsFullscreenExitAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.4 2L2 3.4L4.8 6.2L3 8H8V3L6.2 4.8L3.4 2ZM15.2 6.2L18 3.4L16.6 2L13.8 4.8L12 3V8H17L15.2 6.2ZM4.8 13.8L2 16.6L3.4 18L6.2 15.2L8 17V12H3L4.8 13.8ZM17 12H12V17L13.8 15.2L16.6 18L18 16.6L15.2 13.8L17 12Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsGames(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.9 5.5C15.3 4.5 14.2 4 13 4H6.99997C5.79997 4 4.69997 4.5 4.09997 5.5C1.79997 9 1.29997 14.3 2.89997 15.4C4.49997 16.5 8.09997 11.7 9.99997 11.7C11.9 11.7 15.4 16.5 17.1 15.4C18.7 14.3 18.2 9 15.9 5.5ZM7.99997 9H6.99997V10H5.99997V9H4.99997V8H5.99997V7H6.99997V8H7.99997V9ZM13.4 9.5C13.4 10 13 10.4 12.5 10.4C12 10.4 11.6 10 11.6 9.5C11.6 9 12 8.6 12.5 8.6C13 8.6 13.4 9 13.4 9.5ZM15.3 7.5C15.3 8 14.9 8.4 14.4 8.4C13.9 8.4 13.5 8 13.5 7.5C13.5 7 13.9 6.6 14.4 6.6C14.9 6.6 15.3 7 15.3 7.5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsGoogle(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.6 8.5H10.1V11.5H14.5C14.1 13.6 12.2 15 10.1 14.9C7.50001 14.8 5.50001 12.8 5.40001 10.2C5.30001 7.5 7.40001 5.2 10.1 5.1C11.2 5.1 12.3 5.5 13.2 6.3L15.5 4.1C14.1 2.7 12.1 2 10.2 2C5.80001 2 2.20001 5.6 2.20001 10C2.20001 14.4 5.80001 18 10.2 18C14.8 18 17.9 14.8 17.9 10.2C17.8 9.6 17.8 9.1 17.6 8.5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsGoogleplus(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.6 8.5H10.1V11.5H14.5C14.1 13.6 12.2 15 10.1 14.9C7.50001 14.8 5.50001 12.8 5.40001 10.2C5.30001 7.5 7.40001 5.2 10.1 5.1C11.2 5.1 12.3 5.5 13.2 6.3L15.5 4.1C14.1 2.7 12.1 2 10.2 2C5.80001 2 2.20001 5.6 2.20001 10C2.20001 14.4 5.80001 18 10.2 18C14.8 18 17.9 14.8 17.9 10.2C17.8 9.6 17.8 9.1 17.6 8.5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsGridView(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 1H18C18.55 1 19 1.45 19 2V18C19 18.55 18.55 19 18 19H2C1.45 19 1 18.55 1 18V2C1 1.45 1.45 1 2 1ZM9.01 8.99V2.99H3V8.99H9.01ZM17.01 8.99V2.99H11.01V8.99H17.01ZM9.01 17V11H3V17H9.01ZM17.01 17V11H11.01V17H17.01Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsGroups(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8.03002 4.46002C7.74002 5.74002 8.58002 7.92002 10 7.92002C11.41 7.92002 12.25 5.74002 11.96 4.46002C11.74 3.48002 10.88 2.83002 10 2.83002C9.11002 2.83002 8.26002 3.48002 8.03002 4.46002ZM3.90002 5.36002C3.65002 6.44002 4.37002 8.29002 5.57002 8.29002C6.77002 8.29002 7.49002 6.44002 7.24002 5.36002C7.05002 4.53002 6.32002 3.97002 5.57002 3.97002C4.82002 3.97002 4.09002 4.53002 3.90002 5.36002ZM12.76 5.36002C12.51 6.44002 13.23 8.29002 14.42 8.29002C15.62 8.29002 16.34 6.44002 16.09 5.36002C15.9 4.53002 15.17 3.97002 14.42 3.97002C13.68 3.97002 12.95 4.53002 12.76 5.36002ZM12.17 16.79L13.42 12.49C14.2 10 12.71 8.47002 10 8.47002C7.28002 8.47002 5.79002 10 6.56002 12.49L7.82002 16.79C8.05002 17.51 9.00002 18 10 18C10.98 18 11.94 17.51 12.17 16.79ZM6.07002 9.16002C5.58002 9.83002 5.11002 10.99 5.65002 12.75L6.77002 16.54C6.43002 16.74 6.00002 16.85 5.57002 16.85C4.72002 16.85 3.92002 16.44 3.72002 15.82L2.65002 12.17C2.00002 10.06 3.26002 8.77002 5.57002 8.77002C5.84002 8.77002 6.11002 8.79002 6.36002 8.83002C6.26002 8.93002 6.16002 9.05002 6.07002 9.16002ZM14.42 8.77002C16.73 8.77002 18 10.06 17.34 12.17L16.27 15.82C16.07 16.44 15.27 16.85 14.42 16.85C13.99 16.85 13.56 16.74 13.22 16.54L14.33 12.77C14.88 10.99 14.41 9.83002 13.91 9.16002C13.83 9.05002 13.73 8.93002 13.63 8.83002C13.88 8.79002 14.14 8.77002 14.42 8.77002Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsHammer(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.7 6.32001L19.11 7.74001L15.64 11.15L14.22 9.73001L15.06 8.91001C14.74 8.15001 14.25 7.34001 13.55 6.60001L8.94002 13.19L3.68002 17.89C3.29002 18.28 2.66002 18.28 2.26002 17.89L1.06002 16.68C0.967319 16.5875 0.893771 16.4776 0.84359 16.3566C0.793408 16.2357 0.767578 16.106 0.767578 15.975C0.767578 15.844 0.793408 15.7144 0.84359 15.5934C0.893771 15.4724 0.967319 15.3625 1.06002 15.27L12.03 5.35001C10.66 4.49001 8.82002 3.89001 6.36002 3.87001C9.06002 3.05001 11.31 2.94001 12.94 3.57001C14.64 4.23001 15.76 5.77001 16.85 7.15001L17.7 6.32001Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsHeading(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.5 4V9.2H7.5V4H5V17H7.5V11.8H12.5V17H15V4H12.5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsHeart(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 17.12C13.33 15.72 15.74 13.33 17.04 10.91C18.32 8.49997 18.5 6.09997 17.36 4.65997C16.33 3.36997 14.99 2.87997 13.63 2.91997C12.27 2.95997 10.95 3.54997 10 4.37997C9.05 3.54997 7.73 2.95997 6.37 2.91997C5.01 2.87997 3.67 3.36997 2.64 4.65997C1.5 6.09997 1.68 8.49997 2.98 10.91C4.26 13.33 6.67 15.72 10 17.12Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsHidden(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.3 3.3C16.9 2.9 16.2 2.9 15.7 3.3L13.3 5.7C12.2437 5.3079 11.1267 5.1048 10 5.1C6.2 5.2 2.8 7.2 1 10.5C1.2 10.9 1.5 11.3 1.8 11.7C2.6 12.8 3.6 13.7 4.7 14.4L3 16.1C2.6 16.5 2.5 17.2 3 17.7C3.4 18.1 4.1 18.2 4.6 17.7L17.3 4.9C17.7 4.4 17.7 3.7 17.3 3.3ZM6.7 12.3L5.4 13.6C4.2 12.9 3.1 11.9 2.3 10.7C3.5 9 5.1 7.8 7 7.2C5.7 8.6 5.6 10.8 6.7 12.3ZM10.1 9C9.6 8.5 9.7 7.7 10.2 7.2C10.7 6.8 11.4 6.8 11.9 7.2L10.1 9ZM18.3 9.5C17.8 8.8 17.2 8.1 16.5 7.6L15.5 8.6C16.3 9.2 17 9.9 17.6 10.8C15.9 13.4 13 15 9.9 15H9.1L8.1 16C8.8 15.9 9.4 16 10 16C13.3 16 16.4 14.4 18.3 11.7C18.6 11.3 18.8 10.9 19.1 10.5C18.8 10.2 18.6 9.8 18.3 9.5ZM14 10L10 14C12.2 14 14 12.2 14 10Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsHourglass(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.5 16H15C14.9 13.5 14.4 11.6 11.7 10C14.3 8.4 14.9 6.5 15 4H15.5C16.1 4 16.5 3.6 16.5 3C16.5 2.4 16.1 2 15.5 2H4.5C3.9 2 3.5 2.4 3.5 3C3.5 3.6 3.9 4 4.5 4H5C5.1 6.5 5.6 8.4 8.3 10C5.7 11.6 5.1 13.5 5 16H4.5C3.9 16 3.5 16.4 3.5 17C3.5 17.6 3.9 18 4.5 18H15.5C16.1 18 16.5 17.6 16.5 17C16.5 16.4 16.1 16 15.5 16Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsHtml(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 16V14H2V16H1V11H2V13H4V11H5V16H4Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6.99998 16V12H5.59998V11H9.29998V12H7.99998V16H6.99998Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 16V11H11L12.4 14.4H12.5L14 11H15V16H14V12.9H13.9L12.8 15.4H12.2L11.1 12.9H11V16H10Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19 16H16V11H17V15H19V16Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9.39999 4.2L7.09999 6.5L9.39999 8.8L8.79999 10L5.29999 6.5L8.79999 3L9.39999 4.2ZM10.6 8.8L12.9 6.5L10.6 4.2L11.2 3L14.7 6.5L11.2 10L10.6 8.8Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsIdAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 18H2V2H18V18ZM8.05 7.53C8.18 7.46 8.29 7.38 8.38 7.29C8.47 7.19 8.55 7.08 8.62 6.95C8.69 6.81 8.75 6.69 8.79 6.58C8.83 6.47 8.86 6.36 8.89 6.24L8.95 6C8.95 5.96 8.96 5.93 8.96 5.91C9.01 5.59 8.99 5.3 8.92 5.01C8.84 4.73 8.69 4.49 8.46 4.29C8.23 4.1 7.95 4 7.6 4C7.4 4 7.21 4.04 7.04 4.11C6.87 4.19 6.73 4.29 6.63 4.41C6.52 4.54 6.43 4.68 6.36 4.85C6.29 5.01 6.25 5.18 6.24 5.36C6.23 5.54 6.24 5.72 6.25 5.91L6.27 6C6.28 6.06 6.3 6.15 6.33 6.25C6.36 6.35 6.39 6.46 6.43 6.58C6.47 6.7 6.53 6.83 6.6 6.95C6.68 7.07 6.76 7.18 6.85 7.28C6.94 7.38 7.05 7.47 7.19 7.53C7.32 7.59 7.47 7.62 7.62 7.62C7.77 7.62 7.92 7.59 8.05 7.53ZM16 5V4H11V5H16ZM16 7V6H11V7H16ZM7.62 8.83L6.24 7.95C5.83 7.95 5.45 8.06 5.1 8.27C4.75 8.49 4.48 8.77 4.29 9.12C4.1 9.46 4 9.82 4 10.19V11.44L4.2 11.49C4.33 11.53 4.51 11.58 4.75 11.63C4.99 11.69 5.26 11.75 5.55 11.8C5.84 11.86 6.17 11.9 6.55 11.94C6.92 11.98 7.28 12 7.62 12C7.96 12 8.31 11.98 8.69 11.94C9.07 11.9 9.39 11.85 9.67 11.8C9.94 11.75 10.21 11.7 10.49 11.63C10.76 11.57 10.94 11.52 11.03 11.5C11.12 11.47 11.19 11.45 11.24 11.44V10.19C11.24 9.83 11.14 9.47 10.93 9.12C10.72 8.77 10.44 8.48 10.09 8.26C9.74 8.04 9.37 7.93 8.98 7.93L7.62 8.83ZM16 9V8H13V9H16ZM16 11V10H13V11H16ZM16 14V13H4V14H16ZM16 16V15H4V16H16Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsId(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 16H2V4H18V16ZM7.05 8.53C7.18 8.46 7.29 8.38 7.38 8.29C7.47 8.19 7.55 8.08 7.62 7.95C7.69 7.81 7.75 7.69 7.79 7.58C7.83 7.47 7.86 7.36 7.89 7.24L7.95 7C7.95 6.96 7.96 6.93 7.96 6.91C8.01 6.59 7.99 6.3 7.92 6.01C7.84 5.73 7.69 5.49 7.46 5.29C7.23 5.1 6.95 5 6.6 5C6.4 5 6.21 5.04 6.04 5.11C5.87 5.19 5.73 5.29 5.63 5.41C5.52 5.54 5.43 5.68 5.36 5.85C5.29 6.01 5.25 6.18 5.24 6.36C5.23 6.54 5.24 6.72 5.25 6.91L5.27 7C5.28 7.06 5.3 7.15 5.33 7.25C5.36 7.35 5.39 7.46 5.43 7.58C5.47 7.7 5.53 7.83 5.6 7.95C5.68 8.07 5.76 8.18 5.85 8.28C5.94 8.38 6.05 8.47 6.19 8.53C6.32 8.59 6.47 8.62 6.62 8.62C6.77 8.62 6.92 8.59 7.05 8.53ZM17 9V5H12V9H17ZM6.62 9.83L5.24 8.95C4.83 8.95 4.45 9.06 4.1 9.27C3.75 9.49 3.48 9.77 3.29 10.12C3.1 10.46 3 10.82 3 11.19V12.44L3.2 12.49C3.33 12.53 3.51 12.58 3.75 12.63C3.99 12.69 4.26 12.75 4.55 12.8C4.84 12.86 5.17 12.9 5.55 12.94C5.92 12.98 6.28 13 6.62 13C6.96 13 7.31 12.98 7.69 12.94C8.07 12.9 8.39 12.85 8.67 12.8C8.94 12.75 9.21 12.7 9.49 12.63C9.76 12.57 9.94 12.52 10.03 12.5C10.12 12.47 10.19 12.45 10.24 12.44V11.19C10.24 10.83 10.14 10.47 9.93 10.12C9.72 9.77 9.44 9.48 9.09 9.26C8.74 9.04 8.37 8.93 7.98 8.93L6.62 9.83ZM17 11V10H12V11H17ZM17 13V12H12V13H17ZM17 15V14H3V15H17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsImageCrop(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19 12V15H15V19H12V15H4V7H0V4H4V0H7V4H14L17 1L18 2L15 5V12H19ZM11 7H7V11L11 7ZM8 12H12V8L8 12Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsImageFilter(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 5.87C14 3.67 12.21 1.87 10 1.87C7.79002 1.87 6.00002 3.67 6.00002 5.87C6.00002 8.08 7.79002 9.87 10 9.87C12.21 9.87 14 8.08 14 5.87ZM3.24002 10.66C2.78467 10.9217 2.38538 11.2706 2.065 11.6867C1.74462 12.1028 1.50943 12.5781 1.3729 13.0852C1.23637 13.5923 1.20116 14.1214 1.2693 14.6421C1.33745 15.1629 1.5076 15.6651 1.77002 16.12C2.30062 17.0401 3.17491 17.7119 4.20067 17.9875C5.22642 18.2632 6.31966 18.1202 7.24002 17.59C7.69507 17.3267 8.09382 16.9764 8.41347 16.559C8.73312 16.1416 8.96743 15.6653 9.103 15.1574C9.23858 14.6495 9.27277 14.1198 9.20363 13.5986C9.13448 13.0775 8.96335 12.575 8.70002 12.12C7.60002 10.21 5.15002 9.56 3.24002 10.66ZM12.76 17.59C14.68 18.69 17.12 18.04 18.23 16.13C19.33 14.21 18.68 11.77 16.76 10.66C14.85 9.56 12.4 10.21 11.3 12.12C11.0367 12.575 10.8656 13.0775 10.7964 13.5986C10.7273 14.1198 10.7615 14.6495 10.897 15.1574C11.0326 15.6653 11.2669 16.1416 11.5866 16.559C11.9062 16.9764 12.305 17.3267 12.76 17.59Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsImageFlipHorizontal(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19 3V17H11V20H9V17H1V3H9V0H11V3H19ZM10.5 17V3H9.5V17H10.5ZM7 6.5L3 10L7 13.5V6.5ZM17 10L13 6.5V13.5L17 10Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsImageFlipVertical(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20 9V11H17V19H3V11H0V9H3V1H17V9H20ZM6.5 7H13.5L10 3L6.5 7ZM17 9.5H3V10.5H17V9.5ZM13.5 13H6.5L10 17L13.5 13Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsImageRotateLeft(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7 5H5.05C5.05 3.26 5.9 2.1 8 2.1V0C4.85 0 2.96 2.11 2.96 5H1.18L3.8 8.39L7 5ZM20 1V15H15V20H1V10H10V1H20ZM18 3H12V10H15V13H18V3ZM13 12H3V18H13V12Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsImageRotateRight(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.95 5H14L17.2 8.39L19.82 5H18.04C18.04 2.11 16.15 0 13 0V2.1C15.1 2.1 15.95 3.26 15.95 5ZM1 1H11V10H20V20H6V15H1V1ZM3 3V13H6V10H9V3H3ZM8 12V18H18V12H8Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsImageRotate(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.25 1.01998C15.35 1.01998 19 5.05998 19 10.02C19 14.98 15.35 19.02 10.25 19.02C8.74263 19.0256 7.2564 18.6654 5.91878 17.9705C4.58115 17.2756 3.43204 16.2665 2.57 15.03L5.16 13.51C6.26 15.01 8.02 16.02 10 16.02C13.3 16.02 16 13.23 16 10.02C16 6.80998 13.3 4.01998 10 4.01998C8.03 4.01998 6.28 5.01998 5.18 6.50998L7 8.01998L1 10.02V3.01998L2.89 4.59998C3.76327 3.48228 4.88024 2.57877 6.15575 1.95834C7.43126 1.33792 8.83161 1.01697 10.25 1.01998Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsImagesAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 15V12H2V2H14V5H16V8H18V18H6V15H4ZM11 3C9.9 3 9 3.9 9 5H13C13 4.46957 12.7893 3.96086 12.4142 3.58579C12.0391 3.21071 11.5304 3 11 3ZM4 11V6H3V11H4ZM11 8H15C15 7.46957 14.7893 6.96086 14.4142 6.58579C14.0391 6.21071 13.5304 6 13 6C12.4696 6 11.9609 6.21071 11.5858 6.58579C11.2107 6.96086 11 7.46957 11 8ZM6 14V9H5V14H6ZM15 13C15.2663 13.006 15.5312 12.9588 15.779 12.861C16.0269 12.7633 16.2527 12.617 16.4432 12.4308C16.6337 12.2446 16.7851 12.0222 16.8885 11.7767C16.9919 11.5311 17.0451 11.2674 17.0452 11.001C17.0453 10.7346 16.9921 10.4709 16.8889 10.2253C16.7856 9.97971 16.6343 9.75723 16.4439 9.57093C16.2535 9.38462 16.0277 9.23823 15.78 9.14036C15.5322 9.04249 15.2673 8.99511 15.001 9.001C14.4784 9.01256 13.9812 9.22822 13.6156 9.60184C13.2501 9.97545 13.0453 10.4773 13.0452 11C13.0451 11.5227 13.2496 12.0247 13.6149 12.3985C13.9803 12.7723 14.4774 12.9882 15 13ZM17 17V15C12 15 12 12 7 12V17H17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsImagesAlt2(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 3H19V14H17V16H15V18H1V7H3V5H5V3ZM18 13V4H6V13H18ZM15 9C13.9 9 13 8.1 13 7C13 5.9 13.9 5 15 5C16.1 5 17 5.9 17 7C17 8.1 16.1 9 15 9ZM16 15V14H5V6H4V15H16ZM7 6L17 12H7V6ZM14 17V16H3V8H2V17H14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsIndexCard(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1 3.17V18H19V4H8V3.17C8 2.85 7.88 2.57 7.65 2.34C7.42 2.11 7.14 2 6.82 2H2.18C1.85 2 1.58 2.11 1.35 2.34C1.11 2.57 1 2.85 1 3.17ZM10 6V8H3V6H10ZM17 6V16H12V6H17ZM10 10V12H3V10H10ZM10 14V16H3V14H10Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsInfoOutline(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 15H11V9H9V15ZM10 5C9.5 5 9 5.5 9 6C9 6.5 9.5 7 10 7C10.5 7 11 6.5 11 6C11 5.5 10.5 5 10 5ZM10 1C5 1 1 5 1 10C1 15 5 19 10 19C15 19 19 15 19 10C19 5 15 1 10 1ZM10 17C6.1 17 3 13.9 3 10C3 6.1 6.1 3 10 3C13.9 3 17 6.1 17 10C17 13.9 13.9 17 10 17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsInfo(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2ZM11 6C11 5.45 10.55 5 10 5C9.45 5 9 5.45 9 6C9 6.55 9.45 7 10 7C10.55 7 11 6.55 11 6ZM11 15V9H9V15H11Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsInsertAfter(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 12H11V10H13V8H11V6H9V8H7V10H9V12ZM10 16C13.9 16 17 12.9 17 9C17 5.1 13.9 2 10 2C6.1 2 3 5.1 3 9C3 12.9 6.1 16 10 16ZM10 4C12.8 4 15 6.2 15 9C15 11.8 12.8 14 10 14C7.2 14 5 11.8 5 9C5 6.2 7.2 4 10 4ZM3 19H17V17H3V19Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsInsertBefore(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11 8H9V10H7V12H9V14H11V12H13V10H11V8ZM10 4C6.1 4 3 7.1 3 11C3 14.9 6.1 18 10 18C13.9 18 17 14.9 17 11C17 7.1 13.9 4 10 4ZM10 16C7.2 16 5 13.8 5 11C5 8.2 7.2 6 10 6C12.8 6 15 8.2 15 11C15 13.8 12.8 16 10 16ZM3 1V3H17V1H3Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsInsert(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 1C5 1 1 5 1 10C1 15 5 19 10 19C15 19 19 15 19 10C19 5 15 1 10 1ZM10 17C6.1 17 3 13.9 3 10C3 6.1 6.1 3 10 3C13.9 3 17 6.1 17 10C17 13.9 13.9 17 10 17ZM11 6H9V9H6V11H9V14H11V11H14V9H11V6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsInstagram(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.7 10C12.7 8.5 11.5 7.3 10 7.3C8.5 7.3 7.3 8.5 7.3 10C7.3 11.5 8.5 12.7 10 12.7C11.5 12.7 12.7 11.5 12.7 10ZM14.1 10C14.1 12.3 12.3 14.1 10 14.1C7.7 14.1 5.9 12.3 5.9 10C5.9 7.7 7.7 5.9 10 5.9C12.3 5.9 14.1 7.7 14.1 10ZM15.2 5.7C15.2 6.3 14.8 6.7 14.2 6.7C13.6 6.7 13.2 6.3 13.2 5.7C13.2 5.1 13.6 4.7 14.2 4.7C14.8 4.7 15.2 5.2 15.2 5.7ZM10 3.4C8.8 3.4 6.3 3.3 5.3 3.7C4.6 4 4 4.6 3.8 5.3C3.4 6.3 3.5 8.8 3.5 10C3.5 11.2 3.4 13.7 3.8 14.7C4 15.4 4.6 16 5.3 16.2C6.3 16.6 8.9 16.5 10 16.5C11.1 16.5 13.7 16.6 14.7 16.2C15.4 15.9 15.9 15.4 16.2 14.7C16.6 13.6 16.5 11.1 16.5 10C16.5 8.9 16.6 6.3 16.2 5.3C16 4.6 15.4 4 14.7 3.8C13.7 3.3 11.2 3.4 10 3.4ZM18 10V13.3C18 14.5 17.6 15.7 16.7 16.7C15.8 17.6 14.6 18 13.3 18H6.7C5.5 18 4.3 17.6 3.3 16.7C2.5 15.8 2 14.6 2 13.3V10V6.7C2 5.4 2.5 4.2 3.3 3.3C4.3 2.5 5.5 2 6.7 2H13.3C14.5 2 15.7 2.4 16.7 3.3C17.5 4.2 18 5.4 18 6.7V10Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsLaptop(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 3H17C17.6 3 18 3.4 18 4V14C18 14.6 17.6 15 17 15H3C2.4 15 2 14.6 2 14V4C2 3.4 2.4 3 3 3ZM16 5H4V13H16V5ZM13 6H5V10L13 6ZM19 17V16H1V17C1 17.6 1.5 18 2.1 18H17.9C18.5 18 19 17.6 19 17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsLayout(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 2H7V13H2V2ZM8 2H13V7H8V2ZM14 2H18V18H14V2ZM8 8H13V13H8V8ZM2 14H13V18H2V14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsLeftright(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 10.03L9 6V14L3 10.03ZM11 6L17 10.03L11 14V6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsLightbulb(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 1C13.11 1 15.63 3.52 15.63 6.62C15.63 8.46 13.6 11.2 13.6 11.2C13.27 11.64 13 12.45 13 13V14C13 14.55 12.55 15 12 15H8C7.45 15 7 14.55 7 14V13C7 12.45 6.73 11.64 6.4 11.2C6.4 11.2 4.38 8.46 4.38 6.62C4.38 3.52 6.89 1 10 1ZM7 16.87V16H13V16.87C13 17.49 12.87 18 12.25 18H12C12 18.62 11.6 19 10.98 19H8.98C8.37 19 8 18.62 8 18H7.75C7.13 18 7 17.49 7 16.87Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsLinkedin(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2.50001 18H5.50001V6.9H2.50001V18ZM4.00001 2C3.00001 2 2.20001 2.8 2.20001 3.8C2.20001 4.8 3.00001 5.6 4.00001 5.6C5.00001 5.6 5.80001 4.8 5.80001 3.8C5.80001 2.8 5.00001 2 4.00001 2ZM10.6 8.6V6.9H7.60001V18H10.6V12.3C10.6 9.1 14.7 8.9 14.7 12.3V18H17.7V11.2C17.7 5.8 12 6 10.6 8.6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsListView(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 19H18C18.55 19 19 18.55 19 18V2C19 1.45 18.55 1 18 1H2C1.45 1 1 1.45 1 2V18C1 18.55 1.45 19 2 19ZM4 3C4.55 3 5 3.45 5 4C5 4.55 4.55 5 4 5C3.45 5 3 4.55 3 4C3 3.45 3.45 3 4 3ZM17 3V5H6V3H17ZM4 7C4.55 7 5 7.45 5 8C5 8.55 4.55 9 4 9C3.45 9 3 8.55 3 8C3 7.45 3.45 7 4 7ZM17 7V9H6V7H17ZM4 11C4.55 11 5 11.45 5 12C5 12.55 4.55 13 4 13C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11ZM17 11V13H6V11H17ZM4 15C4.55 15 5 15.45 5 16C5 16.55 4.55 17 4 17C3.45 17 3 16.55 3 16C3 15.45 3.45 15 4 15ZM17 15V17H6V15H17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsLocationAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13 13.14L14.17 7.2C14.96 6.77 15.5 5.95 15.5 5C15.5 4.33696 15.2366 3.70107 14.7678 3.23223C14.2989 2.76339 13.663 2.5 13 2.5C12.337 2.5 11.7011 2.76339 11.2322 3.23223C10.7634 3.70107 10.5 4.33696 10.5 5C10.5 5.95 11.04 6.77 11.83 7.2L13 13.14ZM13 3.5C13.83 3.5 14.5 4.17 14.5 5C14.5 5.83 13.83 6.5 13 6.5C12.17 6.5 11.5 5.83 11.5 5C11.5 4.17 12.17 3.5 13 3.5ZM14.72 8.3L18 6.97V15.97L13.12 18L7 15.97L2 17.97V8.97L7 6.97L11.27 8.38L13 15.68L14.72 8.3Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsLocation(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 2C6.69 2 4 4.69 4 8C4 10.02 5.17 11.71 6.53 12.89C6.96 13.26 7.71 13.85 8.38 14.72C9.12 15.69 9.79 16.73 10 17.43C10.21 16.73 10.88 15.69 11.62 14.72C12.29 13.85 13.04 13.26 13.47 12.89C14.83 11.71 16 10.02 16 8C16 4.69 13.31 2 10 2ZM10 4.56C10.4517 4.56 10.8991 4.64898 11.3164 4.82185C11.7338 4.99473 12.113 5.24812 12.4324 5.56755C12.7519 5.88699 13.0053 6.26621 13.1781 6.68357C13.351 7.10093 13.44 7.54825 13.44 8C13.44 8.45175 13.351 8.89907 13.1781 9.31643C13.0053 9.73379 12.7519 10.113 12.4324 10.4324C12.113 10.7519 11.7338 11.0053 11.3164 11.1781C10.8991 11.351 10.4517 11.44 10 11.44C9.08766 11.44 8.21268 11.0776 7.56755 10.4324C6.92243 9.78732 6.56 8.91234 6.56 8C6.56 7.08766 6.92243 6.21268 7.56755 5.56755C8.21268 4.92243 9.08766 4.56 10 4.56Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsLockAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 6V8C16.1 8 17 8.9 17 10V17C17 18.1 16.1 19 15 19H5C3.9 19 3 18.1 3 17V10C3 8.9 3.9 8 5 8V6C5 3.24 7.24 1 10 1C12.76 1 15 3.24 15 6ZM8 6V8H12V6C12 4.9 11.1 4 10 4C8.9 4 8 4.9 8 6ZM10.8 16.25V14.08C11.5 13.77 12 13.07 12 12.25C12 11.15 11.1 10.25 10 10.25C8.9 10.25 8 11.15 8 12.25C8 13.07 8.5 13.77 9.2 14.08V16.25H10.8Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsLockDuplicate(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 9H14V6C14 3.8 12.2 2 10 2C7.8 2 6 3.8 6 6V9H5C4.5 9 4 9.5 4 10V17C4 17.5 4.5 18 5 18H15C15.5 18 16 17.5 16 17V10C16 9.5 15.5 9 15 9ZM11 16H9L9.4 13.8C8.9 13.6 8.5 13 8.5 12.5C8.5 11.7 9.2 11 10 11C10.8 11 11.5 11.7 11.5 12.5C11.5 13.1 11.2 13.6 10.6 13.8L11 16ZM12 9H8V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsLock(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 9H14V6C14 3.8 12.2 2 10 2C7.8 2 6 3.8 6 6V9H5C4.5 9 4 9.5 4 10V17C4 17.5 4.5 18 5 18H15C15.5 18 16 17.5 16 17V10C16 9.5 15.5 9 15 9ZM11 16H9L9.4 13.8C8.9 13.6 8.5 13 8.5 12.5C8.5 11.7 9.2 11 10 11C10.8 11 11.5 11.7 11.5 12.5C11.5 13.1 11.2 13.6 10.6 13.8L11 16ZM12 9H8V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMarker(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2ZM10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMediaArchive(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 2L16 6V18H4V2H12ZM12 6H15L12 3V6ZM8 3.5V5.5L9.8 4.5L8 3.5ZM11 5L9.2 6L11 7V5ZM8 6.5V8.5L9.8 7.5L8 6.5ZM11 8L9.2 9L11 10V8ZM8 9.5V11.5L9.8 10.5L8 9.5ZM11 11L9.2 12L11 13V11ZM9.5 17C10.33 17 11.12 16.28 11 15.37C10.95 14.99 10.51 13.76 10.51 13.76L8.52 12.66C8.52 12.66 8.07 14.61 8 15.37C7.93 16.14 8.67 17 9.5 17ZM9.5 14.61C9.92 14.61 10.26 14.95 10.26 15.37C10.26 15.8 9.92 16.14 9.5 16.14C9.08 16.14 8.74 15.8 8.74 15.37C8.74 14.95 9.08 14.61 9.5 14.61Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMediaAudio(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 2L16 6V18H4V2H12ZM12 6H15L12 3V6ZM13 13.26V8.09C13.0006 8.03607 12.9903 7.98258 12.9696 7.93274C12.949 7.8829 12.9185 7.83775 12.88 7.8C12.847 7.76203 12.805 7.73297 12.7578 7.71549C12.7106 7.69802 12.6598 7.69269 12.61 7.7C12.61 7.7 8.64 8.41 8.36 8.48C8.07 8.54 8 8.8 8 9V12.37C7.8 12.28 7.58 12.3 7.4 12.3C7.02 12.3 6.7 12.43 6.44 12.69C6.18 12.96 6.04 13.27 6.04 13.65C6.04 14.02 6.18 14.34 6.44 14.6C6.7 14.87 7.02 15 7.4 15C7.74 15 8.1 14.96 8.36 14.74C8.62 14.51 9 14.09 9 13.62V10.3L12 9.7V12C11.33 11.8 10.83 12.04 10.56 12.31C10.3 12.57 10.17 12.89 10.17 13.26C10.17 13.64 10.3 13.95 10.56 14.22C10.83 14.48 11.27 14.61 11.64 14.61C12.02 14.61 12.34 14.48 12.6 14.22C12.86 13.95 13 13.64 13 13.26Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMediaCode(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 2L16 6V18H4V2H12ZM9 13L7 11L9 9L8 8L5 11L8 14L9 13ZM12 14L15 11L12 8L11 9L13 11L11 13L12 14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMediaDefault(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 2L16 6V18H4V2H12ZM12 6H15L12 3V6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMediaDocument(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 2L16 6V18H4V2H12ZM5 3V4H11V3H5ZM12 6H15L12 3V6ZM5 5V6H11V5H5ZM15 8V7H5V8H15ZM5 9V10H9V9H5ZM15 12V9H10V12H15ZM5 11V12H9V11H5ZM15 14V13H5V14H15ZM12 16V15H5V16H12Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMediaInteractive(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 2L16 6V18H4V2H12ZM12 6H15L12 3V6ZM14 14V8H6V14H9L8 16H9L10 14L11 16H12L11 14H14ZM8 11C7.45 11 7 10.55 7 10C7 9.45 7.45 9 8 9C8.55 9 9 9.45 9 10C9 10.55 8.55 11 8 11ZM13 9V11H10V9H13ZM13 12V13H7V12H13Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMediaSpreadsheet(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 2L16 6V18H4V2H12ZM11 6V3H5V6H11ZM8 8V7H5V8H8ZM11 8V7H9V8H11ZM15 8V7H12V8H15ZM8 10V9H5V10H8ZM11 10V9H9V10H11ZM15 10V9H12V10H15ZM8 12V11H5V12H8ZM11 12V11H9V12H11ZM15 12V11H12V12H15ZM8 14V13H5V14H8ZM11 14V13H9V14H11ZM15 14V13H12V14H15ZM8 16V15H5V16H8ZM11 16V15H9V16H11Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMediaText(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 2L16 6V18H4V2H12ZM5 3V4H11V3H5ZM12 6H15L12 3V6ZM5 5V6H11V5H5ZM15 8V7H5V8H15ZM15 10V9H5V10H15ZM15 12V11H5V12H15ZM11 14V13H5V14H11Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMediaVideo(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 2L16 6V18H4V2H12ZM12 6H15L12 3V6ZM11 14V11C11 10.73 10.9 10.49 10.71 10.29C10.51 10.1 10.27 10 10 10H7C6.73 10 6.49 10.1 6.29 10.29C6.1 10.49 6 10.73 6 11V14C6 14.27 6.1 14.51 6.29 14.71C6.49 14.9 6.73 15 7 15H10C10.27 15 10.51 14.9 10.71 14.71C10.9 14.51 11 14.27 11 14ZM14 15V10L12 12V13L14 15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMegaphone(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.15 5.93999C18.61 7.55999 18.53 9.15999 18.13 10.42C17.71 11.7 16.87 12.6 15.83 12.9C15.67 12.96 15.57 12.96 15.43 12.96C15.37 12.98 15.31 12.98 15.25 12.98C15.19 13 15.11 13 15.03 13H8.22999L10.45 18.5C10.47 18.64 10.39 18.76 10.31 18.84C10.23 18.94 10.07 19 9.96999 19H6.94999C6.84999 19 6.68999 18.94 6.60999 18.84C6.52999 18.76 6.44999 18.64 6.46999 18.5L5.46999 13H4.24999L4.22999 12.98C3.72999 13.04 3.14999 12.8 2.68999 12.36C2.22999 11.92 1.80999 11.28 1.62999 10.48C1.38999 9.67999 1.42999 8.91999 1.60999 8.27999C1.78999 7.65999 2.18999 7.19999 2.66999 6.97999L2.68999 6.95999L11.69 1.55999C11.79 1.49999 11.87 1.45999 11.93 1.39999C11.99 1.35999 12.07 1.31999 12.17 1.27999C12.33 1.19999 12.45 1.15999 12.67 1.09999C13.71 0.799992 14.91 1.19999 15.89 2.07999C16.87 2.95999 17.73 4.31999 18.15 5.93999ZM15.57 11.92H15.55C15.95 11.82 16.29 11.58 16.59 11.22C17.17 10.52 17.45 9.45999 17.45 8.17999C17.45 7.53999 17.35 6.87999 17.17 6.19999C16.83 4.83999 16.15 3.69999 15.39 2.95999C14.63 2.21999 13.71 1.85999 12.93 2.07999C12.11 2.29999 11.53 3.03999 11.23 4.07999C10.91 5.11999 10.95 6.43999 11.29 7.79999C11.67 9.15999 12.29 10.3 13.09 11.04C13.87 11.78 14.71 12.14 15.57 11.92ZM13.03 4.83999C13.25 4.79999 13.45 4.81999 13.65 4.87999C14.03 5.03999 14.41 5.35999 14.67 5.87999C14.93 6.39999 15.09 7.07999 15.09 7.65999C15.09 7.95999 15.05 8.21999 14.97 8.45999C14.79 8.93999 14.53 9.29999 14.11 9.39999C13.77 9.49999 13.31 9.33999 12.97 8.99999C12.63 8.65999 12.33 8.13999 12.19 7.49999C12.01 6.87999 12.07 6.25999 12.21 5.77999C12.35 5.29999 12.69 4.93999 13.03 4.83999Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMenuAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 11H17V9H3V11ZM3 16H17V14H3V16ZM3 4V6H17V4H3Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMenuAlt2(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 15H15V13H5V15ZM5 5V7H15V5H5ZM5 11H15V9H5V11Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMenuAlt3(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20 5V2H0V5H20ZM20 11V8H0V11H20ZM20 17V14H0V17H20Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMenu(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 15H17V13H3V15ZM3 5V7H17V5H3ZM3 11H17V9H3V11Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMenu2(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 7V5H5V7H15ZM15 11V9H5V11H15ZM15 15V13H5V15H15Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMicrophone(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 9V3C12 2.46957 11.7893 1.96086 11.4142 1.58579C11.0391 1.21071 10.5304 1 10 1C8.88 1 8 1.94 8 3V9C8 10.1 8.9 11 10 11C11.13 11 12 10.06 12 9ZM16 9C16 11.97 13.84 14.43 11 14.91V17H13C13.56 17 14 17.45 14 18C14 18.55 13.56 19 13 19H7C6.45 19 6 18.55 6 18C6 17.45 6.45 17 7 17H9V14.91C6.17 14.43 4 11.97 4 9C4 8.45 4.45 8 5 8C5.56 8 6 8.45 6 9C6 10.0609 6.42143 11.0783 7.17157 11.8284C7.92172 12.5786 8.93913 13 10 13C11.0609 13 12.0783 12.5786 12.8284 11.8284C13.5786 11.0783 14 10.0609 14 9C14 8.45 14.45 8 15 8C15.56 8 16 8.45 16 9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMigrate(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 6H10V4H2V16.01H10V14H4V6ZM6 8H12V5L18 10L12 15V12H6V8Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMinus(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 9H16V11H4V9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMoneyAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.6 9C10.2 8.9 9.8 8.7 9.5 8.4C9.2 8.3 9.1 8 9.1 7.8C9.1 7.6 9.2 7.3 9.4 7.2C9.7 7 10 6.8 10.3 6.9C10.9 6.9 11.4 7.2 11.7 7.6L12.6 6.4C12.3 6.1 12 5.9 11.7 5.7C11.4 5.5 11 5.4 10.6 5.4V4H9.4V5.4C8.9 5.5 8.4 5.8 8 6.2C7.6 6.7 7.3 7.3 7.4 7.9C7.4 8.5 7.6 9.1 8 9.5C8.5 10 9.2 10.3 9.8 10.6C10.1 10.7 10.5 10.9 10.8 11.1C11 11.3 11.1 11.6 11.1 11.9C11.1 12.2 11 12.5 10.8 12.8C10.5 13.1 10.1 13.2 9.8 13.2C9.4 13.2 8.9 13.1 8.6 12.8C8.3 12.6 8 12.3 7.8 12L6.8 13.1C7.1 13.5 7.4 13.8 7.8 14.1C8.3 14.4 8.9 14.7 9.5 14.7V16H10.6V14.5C11.2 14.4 11.7 14.1 12.1 13.7C12.6 13.2 12.9 12.4 12.9 11.7C12.9 11.1 12.7 10.4 12.2 10C11.7 9.5 11.2 9.2 10.6 9ZM10 2C5.6 2 2 5.6 2 10C2 14.4 5.6 18 10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2ZM10 16.9C6.2 16.9 3.1 13.8 3.1 10C3.1 6.2 6.2 3.1 10 3.1C13.8 3.1 16.9 6.2 16.9 10C16.9 13.8 13.8 16.9 10 16.9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMoney(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M0 3H20V15H19.25C19.25 13.21 17.79 11.75 16 11.75C14.69 11.75 13.58 12.54 13.06 13.66C12.81 13.56 12.54 13.5 12.25 13.5C11.27 13.5 10.45 14.13 10.14 15H0V3ZM8.37 6.11C8.31 6.26 8.27 6.42 8.26 6.58C8.25 6.74 8.25 6.91 8.27 7.08L8.29 7.16C8.3 7.22 8.31 7.3 8.34 7.39C8.36 7.49 8.4 7.59 8.44 7.7C8.47 7.81 8.53 7.92 8.59 8.03C8.66 8.15 8.74 8.25 8.82 8.34C8.9 8.43 9 8.51 9.13 8.57C9.25 8.63 9.38 8.66 9.53 8.66C9.67 8.66 9.8 8.63 9.92 8.57C10.04 8.51 10.14 8.43 10.22 8.35C10.31 8.26 10.38 8.15 10.44 8.03C10.51 7.91 10.56 7.8 10.6 7.7C10.64 7.6 10.67 7.5 10.69 7.39C10.72 7.28 10.73 7.21 10.74 7.17C10.75 7.13 10.75 7.1 10.75 7.08C10.8 6.79 10.78 6.52 10.71 6.26C10.64 6 10.5 5.78 10.3 5.6C10.09 5.42 9.83 5.33 9.51 5.33C9.32 5.33 9.15 5.36 8.99 5.43C8.84 5.5 8.71 5.59 8.61 5.71C8.52 5.82 8.44 5.96 8.37 6.11ZM12.85 12.15V11.01C12.85 10.68 12.75 10.35 12.56 10.03C12.37 9.71 12.11 9.44 11.79 9.24C11.47 9.03 11.13 8.93 10.77 8.93L9.53 9.77L8.25 8.95C7.88 8.95 7.53 9.05 7.21 9.25C6.9 9.45 6.65 9.71 6.47 10.02C6.29 10.34 6.2 10.67 6.2 11.01V12.15L6.38 12.2C6.5 12.24 6.67 12.28 6.89 12.34C7.12 12.39 7.36 12.44 7.63 12.49C7.89 12.54 8.2 12.58 8.54 12.62C8.88 12.65 9.21 12.67 9.53 12.67C9.83 12.67 10.16 12.65 10.51 12.62C10.85 12.58 11.15 12.54 11.4 12.49C11.65 12.45 11.9 12.39 12.16 12.33L12.66 12.21C12.74 12.19 12.8 12.17 12.85 12.15ZM16 12.25C17.52 12.25 18.75 13.48 18.75 15C18.75 16.52 17.52 17.75 16 17.75C15.27 17.75 14.62 17.45 14.13 16.98C14.4558 16.4875 14.5735 15.8861 14.4573 15.3071C14.3412 14.7281 14.0006 14.2187 13.51 13.89C13.94 12.93 14.88 12.25 16 12.25ZM10.5 15.75C10.5 14.79 11.29 14 12.25 14C13.21 14 14 14.79 14 15.75C14 16.71 13.21 17.5 12.25 17.5C11.29 17.5 10.5 16.71 10.5 15.75Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsMove(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19 10L15 14V11H11V15H14L10 19L6 15H9V11H5V14L1 10L5 6V9H9V5H6L10 1L14 5H11V9H15V6L19 10Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsNametag(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 5V2C12 1.45 11.55 1 11 1H9C8.45 1 8 1.45 8 2V5C8 5.55 8.45 6 9 6H11C11.55 6 12 5.55 12 5ZM10 2C10.55 2 11 2.45 11 3C11 3.55 10.55 4 10 4C9.45 4 9 3.55 9 3C9 2.45 9.45 2 10 2ZM18 15V7C18 5.9 17.1 5 16 5H13V5.33C13 6.25 12.25 7 11.33 7H8.67C7.75 7 7 6.25 7 5.33V5H4C2.9 5 2 5.9 2 7V15C2 16.1 2.9 17 4 17H16C17.1 17 18 16.1 18 15ZM17 9V15H3V9H17ZM9 11C9 10.45 8.78 10 8.5 10C8.22 10 8 10.45 8 11C8 11.55 8.22 12 8.5 12C8.78 12 9 11.55 9 11ZM12 11C12 10.45 11.78 10 11.5 10C11.22 10 11 10.45 11 11C11 11.55 11.22 12 11.5 12C11.78 12 12 11.55 12 11ZM6.04 12.21C6.96 12.69 8.38 13 10 13C11.62 13 13.04 12.69 13.96 12.21C13.75 13.21 12.07 14 10 14C7.93 14 6.25 13.21 6.04 12.21Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsNetworking(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 13H19C19.55 13 20 13.45 20 14.01V16.99C20 17.55 19.55 18 19 18H15C14.45 18 14 17.55 14 16.99V14.01C14 13.45 14.45 13 15 13H16V11H11V13H12C12.55 13 13 13.45 13 14.01V16.99C13 17.55 12.55 18 12 18H8C7.45 18 7 17.55 7 16.99V14.01C7 13.45 7.45 13 8 13H9V11H4V13H5C5.55 13 6 13.45 6 14.01V16.99C6 17.55 5.55 18 5 18H1C0.45 18 0 17.55 0 16.99V14.01C0 13.45 0.45 13 1 13H2V11C2 9.9 2.9 9 4 9H9V7H8C7.45 7 7 6.55 7 5.99V3.01C7 2.45 7.45 2 8 2H12C12.55 2 13 2.45 13 3.01V5.99C13 6.55 12.55 7 12 7H11V9H16C17.1 9 18 9.9 18 11V13Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsNoAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.95 6.45999L11.41 9.99999L14.95 13.54L13.54 14.95L9.99999 11.42L6.46999 14.95L5.04999 13.53L8.57999 9.99999L5.04999 6.46999L6.46999 5.04999L9.99999 8.57999L13.54 5.04999L14.95 6.45999Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsNo(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.12 10L15.65 13.53L13.53 15.65L10 12.12L6.46003 15.66L4.34003 13.54L7.88003 10L4.34003 6.46003L6.46003 4.34003L10 7.88003L13.54 4.35003L15.66 6.47003L12.12 10Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsOpenFolder(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.5 6L8.5 4H2L2.7 13.5L4.2 6H10.5ZM5 7L3 17H16L18 7H5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPalmtree(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8.58 2.39001C8.9 2.39001 9.17 2.44001 9.39 2.53001C10.64 3.08001 11.08 4.77001 11.09 6.50001C11.68 5.68001 13.24 4.21001 14.5 4.21001C15.76 4.21001 17.44 4.94001 18.03 7.76001C16.9 7.11001 15.61 6.82001 14.38 6.82001C13.12 6.82001 11.93 7.14001 11.09 7.71001C11.49 7.60001 11.95 7.55001 12.42 7.55001C13.81 7.55001 15.32 8.00001 15.82 8.86001C16.5 10.02 16.29 12.24 15.06 13C14.92 10.9 13.37 8.88001 11.59 8.88001C11.15 8.88001 10.71 9.00001 10.26 9.26001C8 10.62 7 14.56 7 19H2C2 13.47 6.21 9.35001 9.68 8.21001C9.12 8.12001 8.51 8.06001 7.86 8.06001C6.1 8.06001 4.05 8.50001 2 10C2.76 7.04001 4.78 5.90001 6.69 5.90001C7.94 5.90001 9.14 6.40001 9.89 7.19001C9.23 4.95001 7.4 4.33001 5.81 4.33001C5.01 4.33001 4.26 4.49001 3.76 4.68001C4.67 3.39001 7.07 2.39001 8.58 2.39001ZM13 11.5C13 10.67 12.33 10 11.5 10C10.67 10 10 10.67 10 11.5C10 12.33 10.67 13 11.5 13C12.33 13 13 12.33 13 11.5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPaperclip(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.05 2.70003C18.98 4.64003 18.98 7.83003 17.05 9.77003L10 16.84C8.12 18.73 5.09 18.77 3.14 16.99C3.08 16.94 3.01 16.9 2.95 16.84C1.02 14.9 1.02 11.72 2.95 9.77003L7.89 4.82003C8.8 3.90003 10.17 3.72003 11.28 4.24003C11.58 4.39003 11.87 4.57003 12.11 4.82003C12.6718 5.38253 12.9874 6.14503 12.9874 6.94003C12.9874 7.73503 12.6718 8.49753 12.11 9.06003L7.18 14.01C6.99302 14.197 6.73943 14.3021 6.475 14.3021C6.21058 14.3021 5.95698 14.197 5.77 14.01C5.58302 13.8231 5.47798 13.5695 5.47798 13.305C5.47798 13.0406 5.58302 12.787 5.77 12.6L10.7 7.65003C10.7927 7.55752 10.8663 7.44763 10.9164 7.32665C10.9666 7.20568 10.9924 7.076 10.9924 6.94503C10.9924 6.81406 10.9666 6.68438 10.9164 6.5634C10.8663 6.44243 10.7927 6.33254 10.7 6.24003C10.6085 6.14739 10.4995 6.07384 10.3793 6.02364C10.2592 5.97344 10.1302 5.94759 10 5.94759C9.86978 5.94759 9.74085 5.97344 9.62069 6.02364C9.50053 6.07384 9.39153 6.14739 9.3 6.24003L4.36 11.19C3.45 12.11 3.26 13.48 3.79 14.59C3.93 14.89 4.11 15.18 4.36 15.43C4.61 15.68 4.9 15.86 5.2 16C6.31 16.53 7.67 16.35 8.59 15.43L15.64 8.36003C16.1976 7.79328 16.5101 7.03008 16.5101 6.23503C16.5101 5.43998 16.1976 4.67678 15.64 4.11003C15.08 3.56003 14.36 3.28003 13.64 3.25003C13.4888 3.26773 13.3356 3.25278 13.1907 3.2062C13.0458 3.15963 12.9126 3.0825 12.8 2.98003C12.41 2.58003 12.42 1.93003 12.82 1.53003C12.98 1.37003 13.18 1.29003 13.38 1.25003C13.52 1.23003 13.65 1.24003 13.78 1.27003C14.97 1.33003 16.14 1.79003 17.05 2.70003Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPdf(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.8 14H5V15H5.8C6.1 15 6.3 14.8 6.3 14.5C6.3 14.2 6.1 14 5.8 14ZM11 2H3V18H16V7L11 2ZM7.2 14.6C7.2 15.4 6.6 16 5.8 16H5V17H4V13H5.8C6.6 13 7.2 13.6 7.2 14.4V14.6ZM11.3 15.1C11.3 16.1 10.5 17 9.4 17H8V13H9.4C10.4 13 11.3 13.8 11.3 14.9V15.1ZM15 14H13V15H14.5V16H13V17H12V13H15V14ZM15 12H4V3H11V7H15V12ZM9.4 14H9V16H9.4C10 16 10.4 15.6 10.4 15C10.4 14.4 9.9 14 9.4 14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPerformance(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3.76 17.01H16.24C17.3806 15.5894 18.0016 13.8218 18 12C18 7.59 14.42 4 10 4C5.58 4 2 7.59 2 12C2 13.9 2.66 15.63 3.76 17.01ZM9 6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6C11 6.56 10.55 7 10 7C9.45 7 9 6.56 9 6ZM4 8C4 7.45 4.45 7 5 7C5.55 7 6 7.45 6 8C6 8.56 5.55 9 5 9C4.45 9 4 8.56 4 8ZM8.52 11.4C9.36 10.57 15.03 7.9 15.03 7.9C15.03 7.9 12.37 13.58 11.54 14.41C10.7 15.25 9.36 15.25 8.52 14.41C8.12124 14.0106 7.89727 13.4694 7.89727 12.905C7.89727 12.3406 8.12124 11.7994 8.52 11.4ZM3 13C3 12.45 3.45 12 4 12C4.55 12 5 12.45 5 13C5 13.56 4.55 14 4 14C3.45 14 3 13.56 3 13ZM9 13C9 12.45 9.45 12 10 12C10.55 12 11 12.45 11 13C11 13.56 10.55 14 10 14C9.45 14 9 13.56 9 13ZM15 13C15 12.45 15.45 12 16 12C16.55 12 17 12.45 17 13C17 13.56 16.55 14 16 14C15.45 14 15 13.56 15 13Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPets(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.9 8.4C13.2 8.4 14 6.5 14 5.3C14 4.3 13.5 3.1 12.5 3.1C11.2 3.1 10.4 5 10.4 6.2C10.4 7.2 10.9 8.4 11.9 8.4ZM8.09999 8.4C9.09999 8.4 9.59999 7.2 9.59999 6.2C9.59999 4.9 8.79999 3 7.49999 3C6.49999 3 5.99999 4.2 5.99999 5.2C5.89999 6.5 6.69999 8.4 8.09999 8.4ZM15.5 7.4C14.2 7.4 13.3 9.2 13.3 10.5C13.3 11.4 13.7 12.3 14.6 12.3C15.9 12.3 16.8 10.5 16.8 9.2C16.8 8.3 16.3 7.4 15.5 7.4ZM6.79999 10.5C6.79999 9.2 5.79999 7.4 4.59999 7.4C3.69999 7.4 3.29999 8.3 3.29999 9.2C3.29999 10.5 4.29999 12.3 5.49999 12.3C6.39999 12.3 6.79999 11.4 6.79999 10.5ZM9.99999 10.3C7.99999 10.3 5.29999 13.5 5.29999 15.7C5.29999 16.7 5.99999 17 6.79999 17C7.99999 17 8.89999 16.2 9.99999 16.2C11 16.2 11.9 17 13 17C13.8 17 14.7 16.8 14.7 15.7C14.7 13.5 12 10.3 9.99999 10.3Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPhone(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.06 5.99999L11.85 5.79999C11.33 5.25999 11.42 5.00999 11.93 4.49999L14.65 1.74999C15.46 0.929987 15.61 0.539987 16.38 1.26999L16.59 1.46999L12.06 5.99999ZM12.59 6.44999L16.99 2.04999C17.69 2.98999 19.33 5.51999 18.52 7.38999C17.79 9.05999 17.43 9.13999 16.52 10.39C14.67 12.5 12.34 14.76 10.52 16.46C9.25998 17.37 9.20997 17.79 7.51997 18.46C5.71997 19.17 3.11998 17.57 2.13997 16.9L6.53997 12.5L7.71997 14.12C8.05997 14.58 8.91998 14.06 9.51998 13.46C10.56 12.41 12.7 10.28 13.52 9.38999C14.11 8.79999 14.64 7.93999 14.18 7.58999L12.59 6.44999ZM1.56997 16.5L1.35997 16.29C0.679975 15.55 1.06997 15.39 1.87997 14.59L4.61997 11.87C5.12997 11.38 5.36997 11.27 5.88997 11.76L6.08997 11.97L1.56997 16.5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPinterest(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.2 2C5.8 2 3.5 4.8 3.5 7.9C3.5 9.4 4.3 10.9 5.6 11.7C6 11.9 5.9 11.7 6.2 10.5C6.2 10.4 6.2 10.3 6.1 10.2C4.3 8 5.8 3.7 10 3.7C16.1 3.7 14.9 12.1 11.1 12.1C10.3 12.2 9.6 11.6 9.6 10.8V10.4C10 9.3 10.3 8.3 10.4 7.2C10.4 5.1 7.3 5.4 7.3 8.2C7.3 8.7 7.4 9.2 7.6 9.6C7.6 9.6 6.6 13.7 6.4 14.4C6.2 15.6 6.3 16.8 6.5 17.9C6.4 18 6.5 18 6.5 18H6.6C7.3 17 7.9 16 8.3 14.9C8.4 14.4 8.9 12.6 8.9 12.6C9.4 13.3 10.3 13.7 11.2 13.7C14.3 13.7 16.5 11 16.5 7.7C16.5 4.4 13.7 2 10.2 2Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPlaylistAudio(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 3V1H2V3H17ZM17 7V5H2V7H17ZM10 11V9H2V11H10ZM17.45 9.04L11.45 10.16C11.29 10.18 11.26 10.19 11.16 10.29C11.05 10.38 11 10.51 11 10.66V15.25C10.71 15.12 10.34 15.11 10.07 15.11C9.53 15.11 9.07 15.3 8.69 15.68C8.31 16.06 8.13 16.52 8.13 17.06C8.13 17.59 8.31 18.05 8.69 18.43C9.07 18.81 9.53 19 10.07 19C10.56 19 10.99 18.84 11.36 18.52C11.73 18.2 11.95 17.81 12.01 17.33V12.38L17 11.27V14.75C16.71 14.62 16.44 14.56 16.17 14.56C15.63 14.56 15.06 14.75 14.68 15.13C14.3 15.5 14.11 15.96 14.11 16.5C14.11 17.04 14.3 17.49 14.68 17.87C15.06 18.25 15.52 18.44 16.06 18.44C16.59 18.44 17.05 18.25 17.43 17.87C17.81 17.49 18 17.04 18 16.5V9.6C18 9.44 17.95 9.3 17.84 9.19C17.7932 9.13375 17.7328 9.09043 17.6645 9.06417C17.5963 9.03791 17.5224 9.02959 17.45 9.04ZM8 15V13H2V15H8ZM6 19V17H2V19H6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPlaylistVideo(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 3V1H2V3H17ZM17 7V5H2V7H17ZM6 11V9H2V11H6ZM8 9H17C17.55 9 18 9.45 18 10V18C18 18.55 17.55 19 17 19H8C7.45 19 7 18.55 7 18V10C7 9.45 7.45 9 8 9ZM11 16L14.33 14L11 12V16ZM6 15V13H2V15H6ZM6 19V17H2V19H6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPluginsChecked(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.6 5.09997L10.5 8.19997L12.3 9.99997L15.4 6.89997C15.7 6.59997 15.6 5.89997 15.1 5.39997C14.6 4.89997 14 4.79997 13.6 5.09997ZM13.9 0.299974C13.2 -0.100026 4.1 7.59997 4.1 7.59997C4.1 7.59997 0.599999 5.49997 0.0999994 5.89997C-0.400001 6.29997 4.1 10.9 4.1 10.9C4.1 10.9 14.6 0.599974 13.9 0.299974ZM19.4 9.59997C18.9 9.09997 18.2 8.99997 17.9 9.29997L14.8 12.4L16.6 14.2L19.7 11C20 10.8 19.9 10.1 19.4 9.59997ZM7.7 8.59997C7 9.29997 6.6 11.3 6.6 12.4V16.2L5.4 17.4C4.8 18 4.8 18.9 5.4 19.5C6 20.1 6.9 20.1 7.5 19.5L8.7 18.3H12.5C13.7 18.3 15.5 17.9 16.2 17.2L17.4 16.4L8.5 7.49997L7.7 8.59997Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPlusAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.8 4.19999C19 7.40999 19 12.59 15.8 15.8C14.261 17.3369 12.175 18.2001 10 18.2001C7.82503 18.2001 5.73898 17.3369 4.2 15.8C2.66311 14.261 1.79987 12.175 1.79987 9.99999C1.79987 7.82502 2.66311 5.73897 4.2 4.19999C7.41 0.999988 12.59 0.999988 15.8 4.19999ZM11.5 15.5V11.5H15.5V8.49999H11.5V4.49999H8.5V8.49999H4.5V11.5H8.5V15.5H11.5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPlusAlt2(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 9V11H11V17H9V11H3V9H9V3H11V9H17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPlus(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 7V10H12V15H9V10H4V7H9V2H12V7H17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPodio(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.2 13.8L9.10002 9.70001C8.90002 9.50001 8.70002 9.20001 8.70002 8.80001C8.70002 8.10001 9.30002 7.50001 10 7.50001C10.1 7.50001 10.3 7.50001 10.4 7.60001C11.1 7.80001 11.5 8.50001 11.3 9.20001C11.2 9.70001 11.4 10.2 11.9 10.3C12.4 10.4 12.9 10.2 13 9.70001C13.1 9.40001 13.1 9.10001 13.1 8.80001C13.1 7.10001 11.7 5.70001 10 5.70001C9.20002 5.70001 8.40002 6.00001 7.80002 6.60001C6.60002 7.80001 6.60002 9.80001 7.80002 11L11.9 15.1C12.3 15.5 12.8 15.5 13.2 15.1C13.6 14.8 13.6 14.2 13.2 13.8ZM14.9 4.00001C12.2 1.40001 8.00002 1.30001 5.30002 4.00001C2.60002 6.70001 2.60002 11 5.30002 13.6L9.40002 17.7C9.80002 18.1 10.3 18.1 10.7 17.7C11.1 17.3 11.1 16.8 10.7 16.4L6.60002 12.3C4.70002 10.4 4.70002 7.20001 6.60002 5.30001C8.50002 3.40001 11.7 3.40001 13.6 5.30001C15.2 7.00001 15.4 9.70001 14.1 11.6C13.8 12 14 12.6 14.4 12.9C14.8 13.2 15.4 13 15.7 12.6C17.4 9.90001 17.1 6.30001 14.9 4.00001Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPortfolio(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4.00001 5H0.780006C0.410006 5 0.0400063 5.32 0.0900063 5.84L1.65001 15.83C1.65001 15.83 3.50001 8.47 3.86001 6.7C3.97001 6.17 4.47001 6 4.84001 6H10C10 6 9.30001 3.92 9.23001 3.69C9.11001 3.25 8.89001 3 8.45001 3H5.14001C4.78001 3 4.44001 3.23 4.34001 3.64C4.25001 4.04 4.00001 5 4.00001 5ZM8.88001 5H4.88001C4.88001 5 5.30001 4 5.75001 4H7.88001C8.36001 4 8.88001 5 8.88001 5ZM2.67001 16.25C2.36001 16.72 1.91001 17 1.41001 17H17.14C17.68 17 18.06 16.69 18.17 16.17C18.61 13.98 19.85 7.73 19.85 7.73C19.92 7.23 19.55 7 19.23 7H16V5.53C16 5.37 15.74 5 15.34 5H11.58C11.06 5 10.71 5.58 10.71 5.58L10 7H5.59001C5.27001 7 4.96001 7.19 4.90001 7.5C4.90001 7.5 3.31001 14.2 3.18001 14.83C3.11001 15.2 2.96001 15.82 2.67001 16.25ZM15.38 7H11C11 7 11.58 6 12.13 6H14.42C15.13 6 15.38 7 15.38 7Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPostStatus(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 6C14 7.86 12.72 9.41 11 9.86V16C11 17 9 18 9 18V9.86C7.28 9.41 6 7.86 6 6C6 3.79 7.79 2 10 2C12.21 2 14 3.79 14 6ZM8 5C8 5.55 8.45 6 9 6C9.55 6 10 5.55 10 5C10 4.45 9.55 4 9 4C8.45 4 8 4.45 8 5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPressthis(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.76 1C15.6067 1.02102 16.4116 1.37213 17.003 1.97839C17.5944 2.58466 17.9254 3.39806 17.9254 4.245C17.9254 5.09194 17.5944 5.90534 17.003 6.5116C16.4116 7.11787 15.6067 7.46898 14.76 7.49C14.53 7.49 14.29 7.46 14.06 7.41L13 8.47V19H2V4H11.54C11.67 2 13.06 1 14.76 1ZM14.76 6.49C15.3554 6.49 15.9264 6.25347 16.3475 5.83245C16.7685 5.41144 17.005 4.84041 17.005 4.245C17.005 3.64959 16.7685 3.07856 16.3475 2.65755C15.9264 2.23653 15.3554 2 14.76 2C13.52 2 12.52 3.01 12.52 4.25C12.52 4.62 12.62 4.97 12.79 5.28L9.57 8.5C9.29 8.78 7.8 10.72 8.07 10.99C8.09 11.02 8.13 11.03 8.17 11.03C8.66 11.03 10.31 9.75 10.56 9.5L13.8 6.26C14.09 6.4 14.41 6.49 14.76 6.49Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPrinter(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 11H7V12H12V11ZM13 15H7V16H13V15ZM10 13H7V14H10V13ZM17 6H15V2H5V6H3C2.4 6 2 6.4 2 7V12C2 12.6 2.4 13 3 13H5V18H15V13H17C17.6 13 18 12.6 18 12V7C18 6.4 17.6 6 17 6ZM14 17H6V10H14V17ZM14 6H6V3H14V6ZM16 9H15V8H16V9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsPrivacy(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 9.6C9.4 9.6 9 10 9 10.6C9 11 9.3 11.3 9.6 11.4L9.3 12.8H10.6L10.3 11.4C10.7 11.3 10.9 11 10.9 10.6C11 10 10.6 9.6 10 9.6ZM10.1 5.3C9.4 5.3 8.7 5.8 8.7 6.5V8H11.4V6.5C11.3 5.8 10.8 5.3 10.1 5.3ZM10 2L3 5V8C3.1 12.4 5.9 16.3 10 17.9C14.1 16.3 16.9 12.4 17 8V5L10 2ZM14 13C14 13.6 13.6 14 13 14H7C6.4 14 6 13.6 6 13V9C6 8.4 6.4 8 7 8H7.3V6.5C7.4 5.1 8.6 4 10 4C11.4 4 12.6 5.1 12.7 6.5V8H13C13.6 8 14 8.4 14 9V13Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsProducts(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 8H18V19H2V8H3V6C3 3.24 5.24 1 8 1C8.71 1 9.39 1.15 10 1.42C10.6301 1.14213 11.3113 0.99907 12 1C14.76 1 17 3.24 17 6V8ZM5 6V8H7V6C7 4.87 7.39 3.84 8.02 3H8C6.35 3 5 4.35 5 6ZM15 8V6C15 4.35 13.65 3 12 3H11.98C12.6376 3.86228 12.9957 4.91562 13 6V8H15ZM10 3.78C9.39 4.33 9 5.12 9 6V8H11V6C11 5.12 10.61 4.33 10 3.78Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsRandomize(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 6.01L14 9V7H10L5 15H2V13H4L9 5H14V3L18 6.01ZM2 5H5L6.15 7.17L5.03 8.97L4 7H2V5ZM18 14.01L14 17V15H9L7.85 12.83L8.97 11.03L10 13H14V11L18 14.01Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsReddit(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 10.1C18 9.10002 17.2 8.30002 16.2 8.40002C15.8 8.40002 15.3 8.60002 15 8.90002C13.6 8.00002 12 7.40002 10.3 7.40002L11.1 3.60002L13.7 4.20002C13.7 4.90002 14.3 5.40002 15 5.40002C15.7 5.40002 16.2 4.80002 16.2 4.10002C16.2 3.40002 15.6 2.90002 14.9 2.90002C14.4 2.90002 14 3.20002 13.8 3.60002L11 2.90002H10.8C10.7 2.90002 10.7 3.00002 10.7 3.10002L9.69998 7.40002C7.99998 7.40002 6.39998 7.90002 4.99998 8.90002C4.29998 8.20002 3.19998 8.20002 2.49998 8.90002C1.79998 9.60002 1.79998 10.7 2.49998 11.4C2.59998 11.5 2.79998 11.7 2.99998 11.7V12.2C2.99998 14.9 6.09998 17.1 9.99998 17.1C13.9 17.1 17 14.9 17 12.2V11.7C17.6 11.4 18 10.8 18 10.1ZM5.99998 11.4C5.99998 10.7 6.59998 10.2 7.19998 10.2C7.89998 10.2 8.39998 10.8 8.39998 11.4C8.39998 12 7.79998 12.6 7.19998 12.6C6.49998 12.6 5.99998 12.1 5.99998 11.4ZM13 14.7C12.1 15.3 11.1 15.7 9.99998 15.6C8.89998 15.6 7.89998 15.3 6.99998 14.7C6.89998 14.6 6.89998 14.4 6.99998 14.2C7.09998 14.1 7.29998 14.1 7.39998 14.2C8.09998 14.7 8.99998 15 9.89998 14.9C10.8 15 11.7 14.7 12.4 14.2C12.5 14.1 12.7 14.1 12.9 14.2C13.1 14.3 13.1 14.5 13 14.7ZM12.7 12.6C12 12.6 11.5 12 11.5 11.4C11.5 10.8 12.1 10.2 12.7 10.2C13.4 10.2 13.9 10.8 13.9 11.4C14 12.1 13.4 12.6 12.7 12.6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsRedo(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8 5H13V2L19 6L13 10V7H8C5.8 7 4 8.8 4 11C4 13.2 5.8 15 8 15H13V17H8C4.7 17 2 14.3 2 11C2 7.7 4.7 5 8 5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsRemove(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 1C5 1 1 5 1 10C1 15 5 19 10 19C15 19 19 15 19 10C19 5 15 1 10 1ZM10 17C6.1 17 3 13.9 3 10C3 6.1 6.1 3 10 3C13.9 3 17 6.1 17 10C17 13.9 13.9 17 10 17ZM6 9V11H14V9H6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsRestApi(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16 13C14.7 13 13.6 13.8 13.2 15H9C9 14.3 8.8 13.7 8.5 13.2L15.6 5.9C15.9 5.9 16.2 6 16.5 6C17.9 6 19 4.9 19 3.5C19 2.1 17.9 1 16.5 1C15.1 1 14 2.1 14 3.5C14 3.8 14.1 4.2 14.2 4.5L7.2 11.7C6.6 11.2 5.8 11 5 11V6.8C6.2 6.4 7 5.3 7 4C7 2.3 5.7 1 4 1C2.3 1 1 2.3 1 4C1 5.3 1.8 6.4 3 6.8V11.5C1.8 12.2 1 13.5 1 14.9C1 17.1 2.8 18.9 5 18.9C6.5 18.9 7.8 18.1 8.4 16.9H13.1C13.5 18 14.6 18.9 15.9 18.9C17.5 18.9 18.9 17.6 18.9 15.9C19 14.3 17.6 13 16 13Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsRss(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.92 18H18C18 9.32 10.82 2.25 2 2.25V5.27C9.12 5.27 14.92 10.98 14.92 18ZM9.48 18H12.56C12.56 12.27 7.82 7.6 2 7.6V10.62C4 10.62 5.87 11.39 7.29 12.78C7.98456 13.4602 8.53611 14.2724 8.9122 15.1688C9.2883 16.0653 9.48135 17.0279 9.48 18ZM4.13 17.98C5.3 17.98 6.26 17.05 6.26 15.89C6.26 14.74 5.3 13.8 4.13 13.8C2.95 13.8 2 14.74 2 15.89C2 17.05 2.95 17.98 4.13 17.98Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsSaved(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15.3 5.29999L8.49999 12.1L5.69999 9.29999L4.29999 10.7L8.49999 14.9L16.7 6.69999L15.3 5.29999Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsSchedule(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 2H18V6H2V2ZM2 12V8H6V12H2ZM8 10V8H12V10H8ZM14 13V8H18V13H14ZM8 18V12H12V18H8ZM2 18V14H6V18H2ZM14 18V15H18V18H14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsScreenoptions(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M9 9V3H3V9H9ZM17 9V3H11V9H17ZM9 17V11H3V17H9ZM17 17V11H11V17H17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsSearch(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.14 4.17998C13.0311 5.07218 13.5889 6.24332 13.7199 7.4975C13.851 8.75167 13.5474 10.0128 12.86 11.07C12.98 11.17 13.08 11.28 13.22 11.38C13.42 11.54 13.69 11.74 14.03 11.97C14.37 12.21 14.59 12.36 14.69 12.44C15.11 12.75 15.42 13.01 15.63 13.22C15.95 13.54 16.23 13.87 16.47 14.22C16.72 14.57 16.91 14.91 17.06 15.26C17.2 15.61 17.27 15.94 17.24 16.26C17.22 16.58 17.1 16.85 16.88 17.07C16.66 17.29 16.39 17.41 16.07 17.43C15.76 17.45 15.42 17.39 15.08 17.24C14.73 17.1 14.38 16.9 14.04 16.65C13.69 16.41 13.36 16.13 13.04 15.81C12.83 15.6 12.57 15.29 12.27 14.88C12.17 14.75 12.02 14.53 11.8 14.22C11.58 13.9 11.4 13.65 11.24 13.44C11.08 13.24 10.95 13.09 10.8 12.94C9.76205 13.4835 8.57772 13.6815 7.41942 13.5052C6.26112 13.329 5.18931 12.7876 4.36 11.96C2.22 9.80998 2.22 6.31998 4.36 4.17998C4.87063 3.66874 5.47701 3.26317 6.14449 2.98646C6.81197 2.70975 7.52744 2.56732 8.25 2.56732C8.97257 2.56732 9.68804 2.70975 10.3555 2.98646C11.023 3.26317 11.6294 3.66874 12.14 4.17998ZM10.73 10.54C11.3833 9.88191 11.7499 8.99225 11.7499 8.06498C11.7499 7.13771 11.3833 6.24804 10.73 5.58998C10.4053 5.26434 10.0196 5.00597 9.59488 4.82968C9.17017 4.65339 8.71485 4.56265 8.255 4.56265C7.79516 4.56265 7.33984 4.65339 6.91513 4.82968C6.49042 5.00597 6.10468 5.26434 5.78 5.58998C5.45437 5.91465 5.196 6.3004 5.01971 6.7251C4.84342 7.14981 4.75268 7.60513 4.75268 8.06498C4.75268 8.52482 4.84342 8.98014 5.01971 9.40485C5.196 9.82956 5.45437 10.2153 5.78 10.54C6.10468 10.8656 6.49042 11.124 6.91513 11.3003C7.33984 11.4766 7.79516 11.5673 8.255 11.5673C8.71485 11.5673 9.17017 11.4766 9.59488 11.3003C10.0196 11.124 10.4053 10.8656 10.73 10.54Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsShareAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.22 5.79999C16.69 6.48999 16.51 7.41999 15.82 7.87999C15.13 8.34999 14.2 8.16999 13.74 7.47999C13.58 7.23999 13.39 7.01999 13.19 6.80999C12.7788 6.39713 12.2892 6.07072 11.75 5.84999C11.48 5.72999 11.2 5.63999 10.91 5.58999C10.32 5.45999 9.68 5.45999 9.09 5.57999C8.8 5.63999 8.52 5.72999 8.25 5.84999C7.98 5.95999 7.72 6.09999 7.48 6.25999C7.24 6.41999 7.02 6.60999 6.82 6.80999C6.61 7.01999 6.42 7.23999 6.26 7.47999C6.1 7.71999 5.96 7.97999 5.85 8.23999C5.84 8.25999 5.84 8.26999 5.84 8.27999C5.74 8.51999 5.67 8.75999 5.61 8.99999H1V5.99999H3.66C3.7 5.92999 3.73 5.86999 3.78 5.79999C4.05 5.39999 4.35 5.02999 4.69 4.68999C5.03 4.34999 5.41 4.03999 5.8 3.77999C6.2 3.50999 6.63 3.26999 7.08 3.07999C7.53 2.88999 8.01 2.73999 8.49 2.64999C9.48 2.43999 10.52 2.43999 11.51 2.64999C11.99 2.73999 12.47 2.88999 12.92 3.07999C13.37 3.26999 13.8 3.50999 14.2 3.77999C14.59 4.03999 14.97 4.34999 15.31 4.68999C15.65 5.02999 15.95 5.39999 16.22 5.79999ZM12.5 9.99999C12.5 9.33695 12.2366 8.70107 11.7678 8.23223C11.2989 7.76338 10.663 7.49999 10 7.49999C9.33696 7.49999 8.70107 7.76338 8.23223 8.23223C7.76339 8.70107 7.5 9.33695 7.5 9.99999C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 9.99999ZM3.78 14.2C3.66969 14.0372 3.59253 13.8542 3.55294 13.6615C3.51334 13.4689 3.51207 13.2703 3.54922 13.0771C3.58636 12.884 3.66118 12.7001 3.76941 12.5358C3.87764 12.3716 4.01716 12.2303 4.18 12.12C4.34284 12.0097 4.52581 11.9325 4.71847 11.8929C4.91113 11.8533 5.1097 11.8521 5.30284 11.8892C5.49599 11.9264 5.67993 12.0012 5.84416 12.1094C6.00839 12.2176 6.14969 12.3572 6.26 12.52C6.42 12.76 6.61 12.98 6.81 13.19C7.22115 13.6029 7.71076 13.9293 8.25 14.15C8.52 14.27 8.8 14.35 9.09 14.41C9.68 14.54 10.32 14.53 10.91 14.41C11.2 14.35 11.48 14.27 11.75 14.15C12.02 14.04 12.28 13.9 12.52 13.74C12.76 13.58 12.98 13.39 13.18 13.19C13.39 12.98 13.58 12.75 13.74 12.52C13.9 12.27 14.04 12.02 14.15 11.76C14.16 11.74 14.16 11.73 14.16 11.72C14.26 11.48 14.33 11.24 14.39 11H19V14H16.34C16.3 14.06 16.27 14.13 16.22 14.2C15.95 14.6 15.65 14.97 15.31 15.31C14.97 15.65 14.59 15.96 14.2 16.22C13.8 16.49 13.37 16.73 12.92 16.92C12.47 17.11 11.99 17.25 11.51 17.35C10.52 17.56 9.48 17.56 8.49 17.35C8.01 17.25 7.53 17.11 7.08 16.92C6.63 16.73 6.2 16.49 5.8 16.22C5.41 15.96 5.03 15.65 4.69 15.31C4.35 14.97 4.05 14.6 3.78 14.2Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsShareAlt2(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 8L13 12V9.01C10.42 9.07 8.12 9.46 6 12C6.29 8.43 8.66 6.34 13 6.06V3L18 8ZM4 14H15V12L17 10.4V16H2V5H11.43C9.6 5.32 8.12 6 7.02 7H4V14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsShare(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.5 12C16.16 12 17.5 13.34 17.5 15C17.5 16.66 16.16 18 14.5 18C12.84 18 11.5 16.66 11.5 15C11.5 14.76 11.53 14.54 11.59 14.31L7.21 12.01C6.66 12.62 5.88 13 5 13C3.34 13 2 11.66 2 10C2 8.34 3.34 7 5 7C5.88 7 6.66 7.39 7.21 7.99L11.59 5.69C11.53 5.46 11.5 5.24 11.5 5C11.5 3.34 12.84 2 14.5 2C16.16 2 17.5 3.34 17.5 5C17.5 6.66 16.16 8 14.5 8C13.62 8 12.84 7.61 12.29 7.01L7.91 9.31C8.03112 9.76203 8.03112 10.238 7.91 10.69L12.29 12.99C12.84 12.38 13.62 12 14.5 12Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsShieldAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 2C10 2 13 4 17 4C17 15 10 18 10 18C10 18 3 15 3 4C7 4 10 2 10 2Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsShield(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 2C10 2 13 4 17 4C17 15 10 18 10 18C10 18 3 15 3 4C7 4 10 2 10 2ZM10 10H15C15 10 16 9 16 5C16 5 11 4 10 3V10H5C6 14 10 17 10 17V10Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsShortcode(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 14H4V6H6V4H2V16H6V14Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7.09998 17H9.19998L12.9 3H10.8L7.09998 17Z",
    fill: "currentColor"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14 4V6H16V14H14V16H18V4H14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsSlides(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 14V6H15V14H5ZM2 13V7H4V13H2ZM6 7V13H14V7H6ZM16 7H18V13H16V7ZM13 9V8H7V9H13ZM13 12V10H7V12H13Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsSmartphone(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 2H14C14.55 2 15 2.45 15 3V17C15 17.55 14.55 18 14 18H6C5.45 18 5 17.55 5 17V3C5 2.45 5.45 2 6 2ZM13 14V4H7V14H13ZM8 5H12L8 10V5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsSmiley(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7.00002 5.20001C7.53045 5.20001 8.03916 5.41073 8.41423 5.7858C8.78931 6.16087 9.00002 6.66958 9.00002 7.20001C9.00002 7.57001 8.89002 7.91001 8.72002 8.20001C8.72002 8.20001 8.00002 8.00001 7.00002 8.00001C6.00002 8.00001 5.28002 8.20001 5.28002 8.20001C5.11002 7.91001 5.00002 7.57001 5.00002 7.20001C5.00002 6.66958 5.21073 6.16087 5.58581 5.7858C5.96088 5.41073 6.46959 5.20001 7.00002 5.20001ZM13 5.20001C14.11 5.20001 15 6.09001 15 7.20001C15 7.57001 14.89 7.91001 14.72 8.20001C14.72 8.20001 14 8.00001 13 8.00001C12 8.00001 11.28 8.20001 11.28 8.20001C11.11 7.91001 11 7.57001 11 7.20001C11 6.09001 11.89 5.20001 13 5.20001ZM10 18.9C11.8139 18.9014 13.5828 18.3352 15.0587 17.2808C16.5345 16.2263 17.6435 14.7364 18.23 13.02L16.91 12.56C15.9 15.52 13.12 17.5 10 17.5C6.88002 17.5 4.10002 15.52 3.09002 12.56L1.77002 13.02C2.35656 14.7364 3.46549 16.2263 4.94139 17.2808C6.41728 18.3352 8.18614 18.9014 10 18.9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsSort(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11 7H1L6 14L11 7ZM9 14H19L14 7L9 14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsSos(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10ZM7.23 3.57L8.72 7.3C8.1 7.59 7.59 8.1 7.3 8.72L3.57 7.23C4.28072 5.58933 5.58933 4.28072 7.23 3.57ZM16.43 7.23L12.7 8.72C12.41 8.1 11.9 7.59 11.28 7.3L12.77 3.57C14.41 4.28 15.72 5.59 16.43 7.23ZM10 12C8.9 12 8 11.1 8 10C8 8.9 8.9 8 10 8C11.1 8 12 8.9 12 10C12 11.1 11.1 12 10 12ZM3.57 12.77L7.3 11.28C7.59 11.9 8.1 12.41 8.72 12.7L7.23 16.43C5.58933 15.7193 4.28072 14.4107 3.57 12.77ZM12.77 16.43L11.28 12.7C11.9 12.41 12.41 11.9 12.7 11.28L16.43 12.77C15.7193 14.4107 14.4107 15.7193 12.77 16.43Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsSpotify(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 2C5.6 2 2 5.6 2 10C2 14.4 5.6 18 10 18C14.4 18 18 14.4 18 10C18 5.6 14.4 2 10 2ZM13.7 13.5C13.6 13.7 13.2 13.8 13 13.7C10.9 12.5 8.3 12.2 6 12.9C5.7 12.9 5.5 12.8 5.4 12.5C5.4 12.3 5.5 12 5.8 11.9C8.4 11.1 11.2 11.5 13.6 12.8C13.7 13 13.8 13.3 13.7 13.5ZM14.7 11.4C14.6 11.4 14.6 11.4 14.7 11.4C14.5 11.7 14.1 11.8 13.8 11.6C11.4 10.2 8.5 9.9 5.8 10.7C5.5 10.8 5.1 10.6 5 10.3C4.9 9.9 5.1 9.6 5.4 9.4C8.4 8.5 11.7 8.9 14.4 10.5C14.7 10.7 14.8 11.1 14.7 11.4ZM14.7 9.1C12.1 7.6 7.9 7.4 5.4 8.2C5 8.3 4.6 8.1 4.5 7.7C4.4 7.3 4.6 6.9 5 6.7C7.8 5.9 12.5 6 15.5 7.8C15.9 8 16 8.5 15.8 8.8C15.5 9.2 15.1 9.3 14.7 9.1Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsStarEmpty(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 1L7 7L1 7.75L5.13 12.37L4 19L10 16L16 19L14.88 12.37L19 7.75L13 7L10 1ZM10 3.24L12.34 7.93L16.99 8.51L13.81 12.07L14.68 17.22L10 14.88L5.32 17.22L6.19 12.07L3.01 8.51L7.66 7.93L10 3.24Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsStarFilled(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 1L13 7L19 7.75L14.88 12.37L16 19L10 16L4 19L5.13 12.37L1 7.75L7 7L10 1Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsStarHalf(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 1L7 7L1 7.75L5.13 12.37L4 19L10 16L16 19L14.88 12.37L19 7.75L13 7L10 1ZM10 3.24L12.34 7.93L16.99 8.51L13.81 12.07L14.68 17.22L10 14.88V3.24Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsSticky(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 3.61003V1.04003L13.99 1.03003L13.98 3.61003C13.3693 3.74173 12.822 4.07839 12.4291 4.56409C12.0362 5.04979 11.8213 5.6553 11.82 6.28003V6.78003C11.83 8.09003 12.75 9.18003 13.99 9.44003L13.98 12.02H10.57L10.56 14.59C10.56 15.19 10.09 19 9.5 19C8.9 19 8.42 15.19 8.42 14.59V12.03L5 12.02L5.01 9.44003C5.61976 9.31182 6.16663 8.97719 6.55831 8.49259C6.95 8.008 7.16251 7.40312 7.16 6.78003V6.28003C7.16 4.97003 6.24 3.87003 5 3.61003Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsStore(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M1 10C1.41 10.29 1.96 10.43 2.5 10.43C3.05 10.43 3.59 10.29 4 10C4.62 9.54 5 8.83 5 8C5 8.83 5.37 9.54 6 10C6.41 10.29 6.96 10.43 7.5 10.43C8.05 10.43 8.59 10.29 9 10C9.62 9.54 10 8.83 10 8C10 8.83 10.37 9.54 11 10C11.41 10.29 11.96 10.43 12.51 10.43C13.05 10.43 13.59 10.29 14 10C14.62 9.54 15 8.83 15 8C15 8.83 15.37 9.54 16 10C16.41 10.29 16.96 10.43 17.5 10.43C18.05 10.43 18.59 10.29 19 10C19.63 9.54 20 8.83 20 8V7L17 0H4L0 7V8C0 8.83 0.37 9.54 1 10ZM3 18.99H8V13.99H12V18.99H17V11.99C16.63 11.94 16.28 11.77 16 11.56C15.37 11.11 15 10.83 15 10C15 10.83 14.62 11.11 14 11.56C13.59 11.86 13.05 11.99 12.51 12C11.96 12 11.41 11.86 11 11.56C10.37 11.11 10 10.83 10 10C10 10.83 9.62 11.11 9 11.56C8.59 11.86 8.05 11.99 7.5 12C6.96 12 6.41 11.86 6 11.56C5.37 11.11 5 10.83 5 9.99C5 10.83 4.62 11.11 4 11.56C3.71 11.77 3.37 11.94 3 12V18.99Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsSuperheroAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M15 5H5L2 8L10 16L18 8L15 5ZM11.7 11.9L10 11L8.3 11.9L8.6 10L7.2 8.6L9.1 8.3L10 6.6L10.9 8.4L12.8 8.7L11.4 10L11.7 11.9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsSuperhero(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11.1 10L18 2L7 10H9L2 18L13 10H11.1ZM6.8 11H3.9L6.4 9.2L13.9 3.7L10 2L3 5V8C3 10 3.5 11.9 4.5 13.6L6.8 11ZM13.2 9H16L13.6 10.8L6.5 16C7.5 16.9 8.7 17.6 10 18C14.2 16.5 17.1 12.5 17 8V5L16.8 4.9L13.2 9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsTableColAfter(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("g", {
    clipPath: "url(#clip0_3:1428)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M14.08 12.864V9.216H17.728V7.424H14.08V3.776H12.352V7.424H8.64V9.216H12.352V12.864H14.08ZM0 17.92V0H20.48V17.92H0ZM6.4 1.28H1.28V5.12H6.4V1.28ZM6.4 6.4H1.28V10.24H6.4V6.4ZM6.4 11.52H1.28V15.36H6.4V11.52ZM19.2 1.28H7.68V15.36H19.2V1.28Z",
    fill: "currentColor"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0_3:1428"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: 20,
    height: 20,
    fill: "white"
  }))));
}
function SvgDashiconsTableColBefore(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("g", {
    clipPath: "url(#clip0_3:1529)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M6.4 3.776V7.424H2.752V9.216H6.4V12.864H8.128V9.216H11.84V7.424H8.128V3.776H6.4ZM0 17.92V0H20.48V17.92H0ZM12.8 1.28H1.28V15.36H12.8V1.28ZM19.2 1.28H14.08V5.12H19.2V1.28ZM19.2 6.4H14.08V10.24H19.2V6.4ZM19.2 11.52H14.08V15.36H19.2V11.52Z",
    fill: "currentColor"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0_3:1529"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: 20,
    height: 20,
    fill: "white"
  }))));
}
function SvgDashiconsTableColDelete(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("g", {
    clipPath: "url(#clip0_3:1520)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M6.4 9.98L7.68 8.7V8.444L6.4 7.164V9.98ZM12.8 8.448L14.08 7.168V9.92L12.8 8.64V8.448ZM20.48 17.92V0H0V17.92H20.48ZM19.2 15.36H14.08V14.336L13.824 14.592L12.8 13.568V15.36H7.68V13.568L6.656 14.592L6.4 14.336V15.36H1.28V1.28H6.4V3.648L7.104 2.944L7.68 3.52V1.216H12.8V3.52L13.76 2.56L14.08 2.88V1.216H19.2V15.36ZM13.44 13.248L10.304 10.112L7.04 13.376L5.504 11.84L8.768 8.576L5.632 5.44L7.168 3.904L10.304 7.04L13.504 3.84L15.04 5.376L11.84 8.576L14.976 11.712L13.44 13.248Z",
    fill: "currentColor"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0_3:1520"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: 20,
    height: 20,
    fill: "white"
  }))));
}
function SvgDashiconsTableRowAfter(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("g", {
    clipPath: "url(#clip0_3:1405)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M13.824 10.176H10.944V7.296H9.536V10.176H6.656V11.52H9.536V14.4H10.944V11.52H13.824V10.176ZM0 17.92V0H20.48V17.92H0ZM6.4 1.28H1.28V5.12H6.4V1.28ZM12.8 1.28H7.68V5.12H12.8V1.28ZM19.2 1.28H14.08V5.12H19.2V1.28ZM19.2 6.336H1.28V15.36H19.2V6.336Z",
    fill: "currentColor"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0_3:1405"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: 20,
    height: 20,
    fill: "white"
  }))));
}
function SvgDashiconsTableRowBefore(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("g", {
    clipPath: "url(#clip0_3:1522)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M6.656 6.464H9.536V9.344H10.944V6.464H13.824V5.12H10.944V2.24H9.536V5.12H6.656V6.464ZM0 17.92V0H20.48V17.92H0ZM7.68 15.36H12.8V11.52H7.68V15.36ZM1.28 15.36H6.4V11.52H1.28V15.36ZM19.2 1.28H1.28V10.304H19.2V1.28ZM19.2 11.52H14.08V15.36H19.2V11.52Z",
    fill: "currentColor"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0_3:1522"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: 20,
    height: 20,
    fill: "white"
  }))));
}
function SvgDashiconsTableRowDelete(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("g", {
    clipPath: "url(#clip0_3:1516)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M17.728 11.456L14.592 8.32L17.792 5.12L16.256 3.584L13.056 6.784L9.92 3.648L8.384 5.12L11.584 8.32L8.32 11.584L9.856 13.12L13.12 9.856L16.256 12.992L17.728 11.456ZM0 17.92V0H20.48V17.92H0ZM19.2 11.52H18.752L17.472 10.24H19.2V6.4H17.408L18.688 5.12H19.2V1.28H1.28V5.12H7.488L8.768 6.4H1.28V10.24H8.704L7.424 11.52H1.28V15.36H19.2V11.52Z",
    fill: "currentColor"
  })), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("clipPath", {
    id: "clip0_3:1516"
  }, /* @__PURE__ */ React.createElement("rect", {
    width: 20,
    height: 20,
    fill: "white"
  }))));
}
function SvgDashiconsTablet(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 2H16C16.55 2 17 2.45 17 3V17C17 17.55 16.55 18 16 18H4C3.45 18 3 17.55 3 17V3C3 2.45 3.45 2 4 2ZM15 16V4H5V16H15ZM6 5H12L6 10V5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsTag(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11 2H18V9L8 19L1 12L11 2ZM14 8C15.1 8 16 7.1 16 6C16 4.9 15.1 4 14 4C12.9 4 12 4.9 12 6C12 7.1 12.9 8 14 8Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsTagcloud(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11 3V7H1V3H11ZM19 3V7H12V3H19ZM7 8V11H1V8H7ZM19 8V11H8V8H19ZM9 12V14H1V12H9ZM19 12V14H10V12H19ZM6 15V16H1V15H6ZM11 15V16H7V15H11ZM14 15V16H12V15H14ZM19 15V16H15V15H19Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsTestimonial(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M4 3H16C16.55 3 17.02 3.2 17.41 3.59C17.8 3.98 18 4.45 18 5V12C18 12.55 17.8 13.02 17.41 13.41C17.02 13.8 16.55 14 16 14H15L10 19V14H4C3.45 14 2.98 13.8 2.59 13.41C2.2 13.02 2 12.55 2 12V5C2 4.45 2.2 3.98 2.59 3.59C2.98 3.2 3.45 3 4 3ZM15 5H4V6H15V5ZM16 8H4V9H16V8ZM13 11H4V12H13V11Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsTextPage(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 1V19H17V1H3ZM12 14H6V13H12V14ZM14 11H6V10H14V11ZM14 8H6V7H14V8ZM14 5H6V4H14V5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsText(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 3V5H2V3H18ZM12 7V9H2V7H12ZM18 7V9H14V7H18ZM8 11V13H2V11H8ZM18 11V13H10V11H18ZM14 15V17H2V15H14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsThumbsDown(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7.27999 18C7.12999 18.02 7.01999 17.98 6.86999 17.93C6.30999 17.74 6.03999 17.14 6.20999 16.58C6.37999 16.03 7.20999 13.54 7.20999 13C7.20999 12.47 6.45999 12 5.85999 12H2.85999C2.25999 12 1.85999 11.6 1.85999 11C1.85999 10.4 3.85999 4 3.85999 4C4.02999 3.61 4.40999 3 4.85999 3H14V12H11.86C11.45 12.41 8.55999 16.71 8.27998 17.27C8.06998 17.68 7.67999 17.95 7.27999 18ZM18 12H16V3H18V12Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsThumbsUp(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12.72 2.00001C12.87 1.98001 12.98 2.02001 13.13 2.07001C13.69 2.26001 13.96 2.86001 13.79 3.42001C13.62 3.97001 12.79 6.46001 12.79 7.00001C12.79 7.53001 13.54 8.00001 14.14 8.00001H17.14C17.74 8.00001 18.14 8.40001 18.14 9.00001C18.14 9.60001 16.14 16 16.14 16C15.97 16.39 15.59 17 15.14 17H6V8.00001H8.14C8.55 7.59001 11.44 3.29001 11.72 2.73001C11.93 2.32001 12.32 2.05001 12.72 2.00001ZM2 8.00001H4V17H2V8.00001Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsTicketsAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20 6.38L18.99 9.2V9.19C18.47 9 17.96 9.03 17.46 9.27C16.96 9.51 16.61 9.89 16.42 10.41C16.23 10.93 16.26 11.44 16.49 11.94C16.73 12.44 17.11 12.78 17.64 12.97V12.98L16.63 15.8L1.57 10.42L2.56 7.63C3.08 7.82 3.59 7.79 4.09 7.55C4.59 7.32 4.93 6.94 5.12 6.42C5.31 5.9 5.28 5.39 5.04 4.89C4.93064 4.65225 4.77407 4.43923 4.57981 4.26389C4.38555 4.08854 4.15767 3.95453 3.91 3.87L4.93 1L20 6.38ZM15.03 12.07L16.4 8.31C16.52 8 16.5 7.66 16.36 7.36C16.22 7.06 15.97 6.83 15.66 6.71L8.14 3.98C7.5 3.75 6.77 4.1 6.54 4.72L5.17 8.48C4.93 9.13 5.27 9.85 5.91 10.08L13.43 12.82C13.57 12.87 13.71 12.9 13.86 12.9C14.38 12.9 14.86 12.57 15.03 12.07ZM7.97 4.45L15.48 7.18C15.67 7.25 15.82 7.39 15.91 7.57C15.99 7.75 16 7.95 15.93 8.14L14.56 11.9C14.43 12.28 13.98 12.49 13.6 12.35L6.09 9.61C5.90307 9.5423 5.75067 9.40316 5.66629 9.22315C5.58191 9.04313 5.57245 8.83698 5.64 8.65L7.01 4.89C7.11 4.6 7.4 4.4 7.71 4.4C7.8 4.4 7.88 4.42 7.97 4.45ZM14.79 16.59C15.14 16.86 15.54 17 15.99 17H16V20H0V17.04C0.55 17.04 1.03 16.84 1.41 16.45C1.8 16.07 2 15.59 2 15.04C2 14.49 1.8 14.02 1.41 13.63C1.02 13.24 0.55 13.04 0 13.04V10H1.05L0.77 10.8L3.64 11.82C3.13 11.98 2.75 12.44 2.75 13V17C2.75 17.69 3.31 18.25 4 18.25H12C12.69 18.25 13.25 17.69 13.25 17V15.25L14.08 15.55C14.2 15.98 14.44 16.33 14.79 16.59ZM3.25 17V13C3.25 12.59 3.59 12.25 4 12.25H4.83L12.75 15.08V17C12.75 17.41 12.41 17.75 12 17.75H4C3.59 17.75 3.25 17.41 3.25 17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsTickets(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20 5.38L18.99 8.2V8.19C17.95 7.82 16.8 8.37 16.42 9.41C16.05 10.45 16.59 11.6 17.64 11.97V11.98L16.63 14.8L1.57 9.42L2.56 6.63C3.6 7.01 4.75 6.46 5.12 5.42C5.49 4.38 4.95 3.24 3.91 2.87L4.93 0L20 5.38ZM14.55 8.75C15.29 6.67 14.21 4.38 12.13 3.63C10.05 2.89 7.76 3.98 7.02 6.05C6.28 8.13 7.36 10.43 9.44 11.17C10.4387 11.5234 11.5366 11.4673 12.4941 11.0139C13.4515 10.5604 14.1906 9.74656 14.55 8.75ZM11.99 4.01C12.88 4.33 13.56 4.95 13.96 5.72C13.95 5.71 13.94 5.71 13.92 5.7C13.59 5.58 13.25 5.79 13.14 6.1C13.04 6.38 13.11 6.67 13.19 7.01C13.23 7.28 13.28 7.63 13.13 8.05C13.03 8.34 12.8 8.63 12.48 9.05L11.74 10.06L11.82 5.98L12.22 6.09C12.41 6.13 12.48 5.85 12.3 5.8C12.3 5.8 11.73 5.65 11.38 5.52C11.04 5.4 10.5 5.16 10.5 5.16C10.32 5.08 10.2 5.35 10.38 5.43C10.38 5.43 10.54 5.51 10.72 5.59L10.73 7.22L9.2 9.18L9.28 5.07C9.48 5.13 9.68 5.18 9.68 5.18C9.87 5.22 9.94 4.95 9.75 4.89C9.75 4.89 9.19 4.74 8.84 4.61C8.77 4.59 8.7 4.56 8.62 4.53C9.55 3.83 10.81 3.59 11.99 4.01ZM7.4 6.19C7.57 5.7 7.84 5.27 8.18 4.92L8.22 9.92C7.28 8.97 6.92 7.53 7.4 6.19ZM11.44 10.94L13.54 8.31C13.91 7.9 14.11 7.54 14.23 7.19C14.28 7.07 14.31 6.95 14.34 6.84C14.43 7.41 14.38 8.02 14.17 8.61C13.9582 9.20303 13.5947 9.7302 13.1157 10.139C12.6367 10.5478 12.0589 10.824 11.44 10.94ZM10.74 7.72L10.76 10.94C10.76 10.96 10.76 10.98 10.77 11C10.0141 11.001 9.27798 10.7591 8.67 10.31L10.74 7.72ZM11.98 13.8L14.08 14.55C14.32 15.39 15.08 16 15.99 16H16V19H0V16.04C0.530433 16.04 1.03914 15.8293 1.41421 15.4542C1.78929 15.0791 2 14.5704 2 14.04C2 13.5096 1.78929 13.0009 1.41421 12.6258C1.03914 12.2507 0.530433 12.04 0 12.04L0 9H1.05L0.77 9.8L5.05 11.32C4.37623 12.05 4.00146 13.0066 4 14C4 16.21 5.79 18 8 18C10.21 18 12 16.21 12 14C12 13.93 11.98 13.87 11.98 13.8ZM5.45 11.47L6.93 12C6.79 12.04 6.78 12.27 6.96 12.28C6.96 12.28 7.14 12.3 7.33 12.31L7.89 13.85L7.11 16.21L5.8 12.31C6.01 12.3 6.21 12.28 6.21 12.28C6.4 12.26 6.38 11.97 6.19 11.98C6.19 11.98 5.6 12.03 5.23 12.03C5.16 12.03 5.08 12.03 5 12.02C5.13 11.82 5.28 11.64 5.45 11.47ZM4.4 14C4.4 13.48 4.52 12.98 4.72 12.54L6.43 17.24C5.82267 16.9436 5.31056 16.4829 4.95175 15.9102C4.59294 15.3376 4.4018 14.6758 4.4 14ZM8.59 12.59L10.31 13.21C10.38 13.38 10.43 13.58 10.43 13.82C10.43 14.13 10.31 14.48 10.15 14.98L9.8 16.18L8.59 12.59ZM11.6 14C11.6 15.33 10.88 16.49 9.81 17.11L10.91 13.93C10.97 13.76 11.01 13.62 11.05 13.47L11.57 13.66C11.59 13.77 11.6 13.88 11.6 14ZM6.98 17.45L8.06 14.31L9.17 17.34C9.18 17.36 9.18 17.38 9.19 17.39C8.82 17.52 8.42 17.6 8 17.6C7.65 17.6 7.31 17.54 6.98 17.45Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsTide(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M3 12.8V17H17V9.9C14.5 10.5 12.2 11.5 10 12.9V10C7.8 11.3 5.5 12.3 3 12.8ZM17 3H3V10.1C5.5 9.5 7.9 8.5 10 7V10C12.1 8.6 14.5 7.7 17 7.2V3Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsTranslation(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M11 7H9.49C8.86 7 8.24 7.3 7.9 7.7L7 5H4.13L1.74 12H3.43L4.17 10H7V14H2C0.9 14 0 13.1 0 12V5C0 3.9 0.9 3 2 3H9C10.1 3 11 3.9 11 5V7ZM6.51 9H4.49L5.49 6.07L6.51 9ZM10 8H17C18.1 8 19 8.9 19 10V17C19 18.1 18.1 19 17 19H10C8.9 19 8 18.1 8 17V10C8 8.9 8.9 8 10 8ZM17.25 13V11.92H14.08V9.75H12.92V11.92H9.75V13H11.03C11.14 13.85 11.59 14.85 12.31 15.62C11.44 15.98 10.42 16.24 10 16.24C9.99 16.26 10.22 17.21 10.2 17.7C11.04 17.7 12.41 17.2 13.48 16.55C14.57 17.2 15.96 17.7 16.82 17.7C16.8 17.21 17.02 16.26 17.02 16.24C16.59 16.24 15.53 15.97 14.64 15.61C15.34 14.84 15.78 13.84 15.89 13H17.25ZM13.44 14.93C12.94 14.47 12.59 13.8 12.43 13H14.52C14.35 13.8 14.01 14.47 13.52 14.93L13.48 14.96C13.48 14.96 13.45 14.94 13.44 14.93Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsTrash(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 4H15C15.6 4 16 4.4 16 5V6H3V5C3 4.4 3.5 4 4 4H7C7.2 2.9 8.3 2 9.5 2C10.7 2 11.8 2.9 12 4ZM8 4H11C10.8 3.4 10.1 3 9.5 3C8.9 3 8.2 3.4 8 4ZM4 7H15L14.1 17.1C14.1 17.6 13.6 18 13.1 18H5.9C5.4 18 5 17.6 4.9 17.1L4 7Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsTwitch(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.7 2L2 4.6V16.4H5.2V18H7L8.8 16.4H11.7L17.4 11.2V2H2.7ZM16 10.5L13.5 12.8H9.5L7.3 14.8V12.8H4.2V3.3H16V10.5ZM13.5 5.9H12.1V9.8H13.5V5.9ZM9.5 5.9H8.1V9.8H9.5V5.9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsTwitterAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M13.9 13.8H8.5C8.3 13.8 8.2 13.7 8.2 13.4V10.4H13.9C15 10.4 16 9.5 16 8.3C16 7.1 15 6.2 13.9 6.2H8.2V4.1C8.2 2.9 7.2 2 6 2C4.9 2 4 2.9 4 4.1V13.3C4 16 5.5 17.9 8.6 18H14C15.1 18 16.1 17 16.1 15.9C16 14.7 15 13.8 13.9 13.8Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsTwitter(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.94 4.45999C18.45 5.18999 17.83 5.83999 17.11 6.35999C17.12 6.50999 17.12 6.66999 17.12 6.82999C17.12 11.68 13.43 17.27 6.69 17.27C4.62 17.27 2.69 16.66 1.06 15.62C1.35 15.65 1.64 15.67 1.94 15.67C3.66 15.67 5.24 15.08 6.49 14.1C5.72534 14.0842 4.98472 13.8299 4.37157 13.3728C3.75843 12.9156 3.30338 12.2783 3.07 11.55C3.29 11.59 3.52 11.62 3.76 11.62C4.09 11.62 4.42 11.57 4.72 11.49C3.8906 11.3197 3.14528 10.8687 2.60972 10.2129C2.07415 9.5571 1.78111 8.73668 1.78 7.88999V7.84999C2.28 8.11999 2.84 8.28999 3.44 8.30999C2.9378 7.97313 2.52636 7.51769 2.24206 6.98398C1.95776 6.45026 1.80936 5.85471 1.81 5.24999C1.81 4.57999 1.99 3.94999 2.31 3.40999C4.12 5.62999 6.82 7.08999 9.87 7.23999C9.81 6.96999 9.77 6.68999 9.77 6.39999C9.77265 5.42838 10.1605 4.49747 10.8484 3.81137C11.5364 3.12527 12.4684 2.73999 13.44 2.73999C14.5 2.73999 15.45 3.17999 16.12 3.89999C16.95 3.72999 17.74 3.42999 18.45 3.00999C18.17 3.85999 17.59 4.57999 16.83 5.02999C17.5586 4.95035 18.2704 4.75806 18.94 4.45999Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsUndo(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 5H7V2L1 6L7 10V7H12C14.2 7 16 8.8 16 11C16 13.2 14.2 15 12 15H7V17H12C15.3 17 18 14.3 18 11C18 7.7 15.3 5 12 5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsUniversalAccessAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19 10C19 8.81804 18.7671 7.64766 18.3147 6.5557C17.8623 5.46373 17.1993 4.47156 16.3635 3.63583C15.5277 2.8001 14.5354 2.13719 13.4434 1.68493C12.3514 1.23267 11.181 0.999934 9.99902 1C8.81706 1.00007 7.64668 1.23294 6.55472 1.68531C5.46275 2.13769 4.47058 2.80072 3.63486 3.63654C2.79913 4.47236 2.13621 5.4646 1.68395 6.55662C1.2317 7.64864 0.998958 8.81904 0.999023 10.001C0.999156 12.3881 1.94755 14.6773 3.63556 16.3652C5.32358 18.053 7.61294 19.0011 10 19.001C12.3871 19.0009 14.6764 18.0525 16.3642 16.3645C18.052 14.6764 19.0002 12.3871 19 10ZM10 2.6C10.83 2.6 11.5 3.27 11.5 4.1C11.5 4.93 10.83 5.61 10 5.61C9.18002 5.61 8.50002 4.93 8.50002 4.1C8.50002 3.27 9.18002 2.6 10 2.6ZM3.40002 7.36C3.40002 6.71 10 6.6 10 6.6C10 6.6 16.6 6.71 16.6 7.36C16.6 8.01 12.13 8.76 12.13 8.76C12.13 8.76 13.82 16.9 13.19 17.14C12.57 17.38 10 11.95 10 11.95C10 11.95 7.44002 17.38 6.82002 17.14C6.19002 16.9 7.88002 8.76 7.88002 8.76C7.88002 8.76 3.40002 8.01 3.40002 7.36Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsUniversalAccess(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 2.59998C10.83 2.59998 11.5 3.26998 11.5 4.09998C11.5 4.92998 10.83 5.60998 10 5.60998C9.18002 5.60998 8.50002 4.92998 8.50002 4.09998C8.50002 3.26998 9.18002 2.59998 10 2.59998ZM3.40002 7.35998C3.40002 6.70998 10 6.59998 10 6.59998C10 6.59998 16.6 6.70998 16.6 7.35998C16.6 8.00998 12.13 8.75998 12.13 8.75998C12.13 8.75998 13.82 16.9 13.19 17.14C12.57 17.38 10 11.95 10 11.95C10 11.95 7.44002 17.38 6.82002 17.14C6.19002 16.9 7.88002 8.75998 7.88002 8.75998C7.88002 8.75998 3.40002 8.00998 3.40002 7.35998Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsUnlock(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 9V6C12 4.9 11.1 4 10 4C8.9 4 8 4.9 8 6H6C6 3.79 7.79 2 10 2C12.21 2 14 3.79 14 6V9H15C15.55 9 16 9.45 16 10V17C16 17.55 15.55 18 15 18H5C4.45 18 4 17.55 4 17V10C4 9.45 4.45 9 5 9H12ZM11 16L10.64 13.85C11.15 13.61 11.5 13.1 11.5 12.5C11.5 11.67 10.83 11 10 11C9.17 11 8.5 11.67 8.5 12.5C8.5 13.1 8.85 13.61 9.36 13.85L9 16H11Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsUpdateAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5.7 9C6.1 7 7.9 5.5 10 5.5C11.5 5.5 12.7 6.2 13.5 7.3L15.2 5.3C14 3.9 12.1 3 10 3C6.5 3 3.6 5.6 3.1 9H1L4.5 13L8 9H5.7ZM15.5 7L12 11H14.3C13.8 13 12.1 14.5 10 14.5C8.5 14.5 7.3 13.8 6.5 12.7L4.8 14.6C6 16.1 7.9 17 10 17C13.5 17 16.4 14.4 16.9 11H19L15.5 7Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsUpdate(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10.2 3.28003C13.73 3.28003 16.63 5.89003 17.12 9.28003H19.2L15.7 13.28L12.2 9.28003H14.52C14.2963 8.30114 13.7473 7.42701 12.9626 6.8004C12.178 6.17379 11.2041 5.83171 10.2 5.83003C8.74999 5.83003 7.46999 6.54003 6.65999 7.61003L4.94999 5.66003C5.6045 4.91159 6.41167 4.31195 7.31722 3.90143C8.22278 3.49092 9.20573 3.27903 10.2 3.28003ZM9.79999 16.72C6.27999 16.72 3.36999 14.11 2.87999 10.72H0.799988L4.29999 6.72003C5.46999 8.05003 6.62999 9.39003 7.79999 10.72H5.47999C5.7037 11.6989 6.2527 12.5731 7.03733 13.1997C7.82196 13.8263 8.79586 14.1684 9.79999 14.17C11.25 14.17 12.53 13.46 13.34 12.39L15.05 14.34C14.3961 15.0892 13.5891 15.6894 12.6834 16.1C11.7777 16.5106 10.7944 16.722 9.79999 16.72Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsUpdate2(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 3C12.09 3 13.97 3.92 15.25 5.38L13.54 7.33C13.1281 6.77945 12.5939 6.3321 11.9796 6.02321C11.3653 5.71432 10.6876 5.55233 10 5.55C7.89 5.55 6.13 7.03 5.68 9H8L4.5 13L1 9H3.08C3.57 5.61 6.47 3 10 3ZM10 17.04C7.9 17.04 6.03 16.12 4.75 14.66L6.46 12.71C6.87194 13.2605 7.40611 13.7079 8.02043 14.0168C8.63474 14.3257 9.3124 14.4877 10 14.49C12.11 14.49 13.87 13.01 14.32 11.04H12L15.5 7.04L19 11.04H16.92C16.43 14.43 13.52 17.04 10 17.04Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsUpload(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8 14V8H5L10 2L15 8H12V14H8ZM6 16V10H4V18H16.01V10H14V16H6Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsVault(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 17V3C18 2.45 17.55 2 17 2H3C2.45 2 2 2.45 2 3V17C2 17.55 2.45 18 3 18H17C17.55 18 18 17.55 18 17ZM17 17H3V3H17V17ZM4.75 4H15.25C15.66 4 16 4.34 16 4.75V6H15V9H16V11H15V14H16V15.25C16 15.66 15.66 16 15.25 16H4.75C4.34 16 4 15.66 4 15.25V4.75C4 4.34 4.34 4 4.75 4ZM13 10C13 7.79 11.21 6 9 6C6.79 6 5 7.79 5 10C5 12.21 6.79 14 9 14C11.21 14 13 12.21 13 10ZM9 7L9.77 8.15C10.1334 8.30441 10.4436 8.56193 10.6622 8.89073C10.8808 9.21952 10.9982 9.60517 11 10C11 11.1 10.1 12 9 12C7.9 12 7 11.1 7 10C7 9.17 7.51 8.46 8.23 8.15L9 7Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsVideoAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M8 5C8 4.45 7.55 4 7 4H2C1.45 4 1 4.45 1 5C1 5.57 1.49 6 2 6H7C7.55 6 8 5.55 8 5ZM14 10L18 6V16L14 12V10ZM13 14V8C13 7.45 12.55 7 12 7H4C3.45 7 3 7.45 3 8V14C3 14.55 3.45 15 4 15H12C12.55 15 13 14.55 13 14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsVideoAlt2(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M12 13V7C12 5.9 11.1 5 10 5H3C1.9 5 1 5.9 1 7V13C1 14.1 1.9 15 3 15H10C11.1 15 12 14.1 12 13ZM13 10.5L19 15V5L13 9.5V10.5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsVideoAlt3(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19 15V5C19 3.9 18.1 3 17 3H4C2.9 3 2 3.9 2 5V15C2 16.1 2.9 17 4 17H17C18.1 17 19 16.1 19 15ZM8 14V6L14 10L8 14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsVisibility(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18.3 9.49999C15 4.89999 8.50002 3.79999 3.90002 7.19999C2.70002 8.09999 1.70002 9.29999 0.900024 10.6C1.10002 11 1.40002 11.4 1.70002 11.8C5.00002 16.4 11.3 17.4 15.9 14.2C16.8 13.5 17.6 12.8 18.3 11.8C18.6 11.4 18.8 11 19.1 10.6C18.8 10.2 18.6 9.79999 18.3 9.49999ZM10.1 7.19999C10.6 6.69999 11.4 6.69999 11.9 7.19999C12.4 7.69999 12.4 8.49999 11.9 8.99999C11.4 9.49999 10.6 9.49999 10.1 8.99999C9.60003 8.49999 9.60003 7.69999 10.1 7.19999ZM10 14.9C6.90002 14.9 4.00002 13.3 2.30002 10.7C3.50002 8.99999 5.10002 7.79999 7.00002 7.19999C6.30002 7.99999 6.00002 8.89999 6.00002 9.89999C6.00002 12.1 7.70002 14 10 14C12.2 14 14.1 12.3 14.1 9.99999V9.89999C14.1 8.89999 13.7 7.89999 13 7.19999C14.9 7.79999 16.5 8.99999 17.7 10.7C16 13.3 13.1 14.9 10 14.9Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsWarning(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2ZM11.13 11.38L11.48 4.92H8.52L8.87 11.38H11.13ZM11.04 14.74C11.28 14.51 11.41 14.19 11.41 13.78C11.41 13.36 11.29 13.04 11.05 12.81C10.81 12.58 10.46 12.46 9.99 12.46C9.52 12.46 9.17 12.58 8.92 12.81C8.67 13.04 8.55 13.36 8.55 13.78C8.55 14.19 8.68 14.51 8.93 14.74C9.19 14.97 9.54 15.08 9.99 15.08C10.44 15.08 10.79 14.97 11.04 14.74Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsWelcomeAddPage(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17 7V4H15V2H12V3H3V18H14V9H15V7H17ZM16 5V6H14V8H13V6H11V5H13V3H14V5H16Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsWelcomeComments(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 2H15C16.1 2 17 2.9 17 4V12C17 13.1 16.1 14 15 14H13L8 19V14H5C3.9 14 3 13.1 3 12V4C3 2.9 3.9 2 5 2ZM13.5 10.5L11 8L13.5 5.5L12.5 4.5L10 7L7.5 4.5L6.5 5.5L9 8L6.5 10.5L7.5 11.5L10 9L12.5 11.5L13.5 10.5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsWelcomeLearnMore(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 10L2.54 7.02L3 18H1L1.48 6.59L0 6L10 2L20 6L10 10ZM10 5C9.45 5 9 5.22 9 5.5C9 5.78 9.45 6 10 6C10.55 6 11 5.78 11 5.5C11 5.22 10.55 5 10 5ZM10 11L15.57 8.77C16.28 9.71 16.77 10.84 16.93 12.07C16.63 12.03 16.32 12 16 12C13.45 12 11.22 13.37 10 15.41C9.38075 14.3708 8.50224 13.5101 7.45048 12.9124C6.39872 12.3146 5.20976 12.0002 4 12C3.68 12 3.37 12.03 3.07 12.07C3.23 10.84 3.72 9.71 4.43 8.77L10 11Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsWelcomeViewSite(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M18 14V4C18 3.45 17.55 3 17 3H3C2.45 3 2 3.45 2 4V14C2 14.55 2.45 15 3 15H17C17.55 15 18 14.55 18 14ZM10 6C12.3 6 14.4 7.14 16 9C14.4 10.86 12.3 12 10 12C7.7 12 5.6 10.86 4 9C5.6 7.14 7.7 6 10 6ZM12 9C12 7.9 11.1 7 10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9ZM14 17H17V18H3V17H6V16H14V17Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsWelcomeWidgetsMenus(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M19 16V3C19 2.45 18.55 2 18 2H3C2.45 2 2 2.45 2 3V16C2 16.55 2.45 17 3 17H18C18.55 17 19 16.55 19 16ZM4 4H17V8H4V4ZM5 5V7H8V5H5ZM9 5V7H12V5H9ZM13 5V7H16V5H13ZM4.5 10C4.78 10 5 10.22 5 10.5C5 10.78 4.78 11 4.5 11C4.22 11 4 10.78 4 10.5C4 10.22 4.22 10 4.5 10ZM6 10H10V11H6V10ZM12 10H17V15H12V10ZM4.5 12C4.78 12 5 12.22 5 12.5C5 12.78 4.78 13 4.5 13C4.22 13 4 12.78 4 12.5C4 12.22 4.22 12 4.5 12ZM6 12H10V13H6V12ZM13 12V14H16V12H13ZM4.5 14C4.78 14 5 14.22 5 14.5C5 14.78 4.78 15 4.5 15C4.22 15 4 14.78 4 14.5C4 14.22 4.22 14 4.5 14ZM6 14H10V15H6V14Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsWelcomeWriteBlog(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.89 1.19995L18.3 2.60995C18.69 2.99995 18.69 3.62995 18.3 4.01995L14 8.32995V17.9999H3V2.99995H13.67L15.47 1.19995C15.87 0.809948 16.5 0.799948 16.89 1.19995ZM11.23 9.67995L16.6 4.31995L15.18 2.89995L9.82 8.26995L9.11 10.3899L11.23 9.67995Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsWhatsapp(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M16.8 5.7C14.4 2 9.50002 0.9 5.70002 3.2C2.00002 5.5 0.800024 10.5 3.20002 14.2L3.40002 14.5L2.60002 17.5L5.60002 16.7L5.90002 16.9C7.20002 17.6 8.60002 18 10 18C11.5 18 13 17.6 14.3 16.8C18 14.4 19.1 9.5 16.8 5.7ZM14.7 13.4C14.3 14 13.8 14.4 13.1 14.5C12.7 14.5 12.2 14.7 10.2 13.9C8.50002 13.1 7.10002 11.8 6.10002 10.3C5.50002 9.6 5.20002 8.7 5.10002 7.8C5.10002 7 5.40002 6.3 5.90002 5.8C6.10002 5.6 6.30002 5.5 6.50002 5.5H7.00002C7.20002 5.5 7.40002 5.5 7.50002 5.9C7.70002 6.4 8.20002 7.6 8.20002 7.7C8.30002 7.8 8.30002 8 8.20002 8.1C8.30002 8.3 8.20002 8.5 8.10002 8.6C8.00002 8.7 7.90002 8.9 7.80002 9C7.60002 9.1 7.50002 9.3 7.60002 9.5C8.00002 10.1 8.50002 10.7 9.00002 11.2C9.60002 11.7 10.2 12.1 10.9 12.4C11.1 12.5 11.3 12.5 11.4 12.3C11.5 12.1 12 11.6 12.2 11.4C12.4 11.2 12.5 11.2 12.7 11.3L14.3 12.1C14.5 12.2 14.7 12.3 14.8 12.4C14.9 12.7 14.9 13.1 14.7 13.4Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsWordpressAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20 10C20 4.49 15.51 0 10 0C4.48 0 0 4.49 0 10C0 15.52 4.48 20 10 20C15.51 20 20 15.52 20 10ZM7.78 15.37L4.37 6.22C4.92 6.2 5.54 6.14 5.54 6.14C6.04 6.08 5.98 5.01 5.48 5.03C5.48 5.03 4.03 5.14 3.11 5.14C2.93 5.14 2.74 5.14 2.53 5.13C3.34023 3.88929 4.44839 2.87133 5.75328 2.16911C7.05816 1.46688 8.51818 1.10276 10 1.11C12.33 1.11 14.45 1.98 16.05 3.45C15.37 3.34 14.4 3.84 14.4 5.03C14.4 5.77 14.85 6.39 15.3 7.13C15.65 7.74 15.85 8.49 15.85 9.59C15.85 11.08 14.45 14.59 14.45 14.59L11.42 6.22C11.96 6.2 12.24 6.05 12.24 6.05C12.74 6 12.68 4.8 12.18 4.83C12.18 4.83 10.74 4.95 9.8 4.95C8.93 4.95 7.47 4.83 7.47 4.83C6.97 4.8 6.91 6.03 7.41 6.05L8.33 6.13L9.59 9.54L7.78 15.37ZM17.41 10C17.65 9.36 18.15 8.13 17.84 5.75C18.54 7.04 18.89 8.46 18.89 10C18.89 13.29 17.16 16.24 14.49 17.78C15.46 15.19 16.43 12.58 17.41 10ZM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10C1.11 8.7 1.34 7.52 1.83 6.41C3.25 10.3 4.67 14.2 6.1 18.09ZM10.13 11.46L12.71 18.44C11.85 18.73 10.95 18.89 10 18.89C9.21 18.89 8.43 18.78 7.71 18.56C8.52 16.18 9.33 13.82 10.13 11.46Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsWordpress(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10ZM10 1.01C14.97 1.01 18.99 5.03 18.99 10C18.99 14.97 14.97 18.99 10 18.99C5.03 18.99 1.01 14.97 1.01 10C1.01 5.03 5.03 1.01 10 1.01ZM8.01 14.82L4.96 6.61C5.45 6.58 6.01 6.53 6.01 6.53C6.44 6.48 6.39 5.52 5.95 5.54C5.95 5.54 4.66 5.64 3.82 5.64C3.67 5.64 3.49 5.64 3.3 5.63C4.74 3.46 7.2 2.03 10 2.03C12.09 2.03 13.99 2.82 15.41 4.12C14.81 4.04 13.96 4.47 13.96 5.54C13.96 6.2 14.34 6.76 14.75 7.42C15.06 7.96 15.25 8.64 15.25 9.63C15.25 10.97 13.98 14.11 13.98 14.11L11.27 6.61C11.75 6.58 12.02 6.45 12.02 6.45C12.45 6.4 12.4 5.35 11.97 5.37C11.97 5.37 10.67 5.48 9.83 5.48C9.05 5.48 7.72 5.37 7.72 5.37C7.29 5.35 7.24 6.43 7.67 6.45L8.51 6.53L9.63 9.57L8.01 14.82ZM14.03 16.97L16.64 10C16.64 10 17.31 8.31 17.03 6.19C17.66 7.33 17.97 8.61 17.97 10C17.97 12.96 16.41 15.58 14.03 16.97ZM2.68 6.77L6.5 17.25C3.83 15.95 2.03 13.17 2.03 10C2.03 8.84 2.23 7.77 2.68 6.77ZM10.13 11.3L12.42 17.55C11.67 17.82 10.85 17.97 10 17.97C9.28 17.97 8.59 17.86 7.94 17.67L10.13 11.3Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsXing(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M7.4 5.6C7.3 5.3 7 5.2 6.7 5.2H4.4C4.2 5.2 4.1 5.3 4 5.5C4 5.6 4 5.7 4.1 5.7L5.7 8.4L3.2 12.7C3.1 12.8 3.1 12.9 3.2 13.1C3.3 13.2 3.4 13.3 3.5 13.3H5.8C6.1 13.3 6.3 13.1 6.4 12.9C6.4 12.9 8.8 8.7 8.9 8.5L7.4 5.6ZM16.8 2.5C16.9 2.4 16.9 2.3 16.8 2.1C16.7 2 16.6 2 16.5 2H14.2C13.9 2 13.7 2.2 13.6 2.4C13.6 2.4 8.6 11.2 8.5 11.5L11.8 17.5C11.9 17.8 12.2 17.9 12.4 17.9H14.7C14.8 17.9 14.9 17.9 15 17.8C15.1 17.7 15.1 17.6 15 17.5L11.8 11.6L16.8 2.5Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsYesAlt(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2ZM9.385 14.66H8.045L4.805 10.12L6.146 8.87L8.715 11.27L13.856 5.339L15.196 6.279L9.385 14.66Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsYes(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M14.83 4.89001L16.17 5.83001L10.36 14.21H9.02003L5.78003 9.67001L7.12003 8.42001L9.69003 10.82L14.83 4.89001Z",
    fill: "currentColor"
  }));
}
function SvgDashiconsYoutube(props) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({}, props, {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M17.7 5.29996C17.5 4.59996 17 4.09996 16.3 3.89996C14.2 3.69996 12.1 3.49996 9.99999 3.59996C7.89999 3.59996 5.79999 3.69996 3.69999 3.89996C3.09999 4.09996 2.49999 4.69996 2.29999 5.29996C1.90122 8.42061 1.90122 11.5793 2.29999 14.7C2.49999 15.4 2.99999 15.9 3.69999 16.1C5.79999 16.3 7.89999 16.5 9.99999 16.4C12.1 16.4 14.2 16.3 16.3 16.1C17 15.9 17.5 15.4 17.7 14.7C18.0988 11.5793 18.0988 8.42061 17.7 5.29996ZM7.99999 13V6.99996L13.2 9.99996L7.99999 13Z",
    fill: "currentColor"
  }));
}
var jsxRuntime = {
  exports: {}
};
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = React__default, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  k !== void 0 && (e = "" + k);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return {
    $$typeof: g,
    type: c,
    key: e,
    ref: l,
    props: d,
    _owner: m.current
  };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
const Dashicon = ({
  variant = ""
}) => /* @__PURE__ */ jsx(Icon$2, {
  variant,
  children: Format.Map(variant, {
    "admin-appearance": React__default.createElement(SvgDashiconsAdminAppearance, {}, null),
    "admin-collapse": React__default.createElement(SvgDashiconsAdminCollapse, {}, null),
    "admin-comments": React__default.createElement(SvgDashiconsAdminComments, {}, null),
    "admin-customizer": React__default.createElement(SvgDashiconsAdminCustomizer, {}, null),
    "admin-generic": React__default.createElement(SvgDashiconsAdminGeneric, {}, null),
    "admin-home": React__default.createElement(SvgDashiconsAdminHome, {}, null),
    "admin-links": React__default.createElement(SvgDashiconsAdminLinks, {}, null),
    "admin-media": React__default.createElement(SvgDashiconsAdminMedia, {}, null),
    "admin-multisite": React__default.createElement(SvgDashiconsAdminMultisite, {}, null),
    "admin-network": React__default.createElement(SvgDashiconsAdminNetwork, {}, null),
    "admin-page": React__default.createElement(SvgDashiconsAdminPage, {}, null),
    "admin-plugins": React__default.createElement(SvgDashiconsAdminPlugins, {}, null),
    "admin-post": React__default.createElement(SvgDashiconsAdminPost, {}, null),
    "admin-settings": React__default.createElement(SvgDashiconsAdminSettings, {}, null),
    "admin-site-alt": React__default.createElement(SvgDashiconsAdminSiteAlt, {}, null),
    "admin-site-alt2": React__default.createElement(SvgDashiconsAdminSiteAlt2, {}, null),
    "admin-site-alt3": React__default.createElement(SvgDashiconsAdminSiteAlt3, {}, null),
    "admin-site": React__default.createElement(SvgDashiconsAdminSite, {}, null),
    "admin-tools": React__default.createElement(SvgDashiconsAdminTools, {}, null),
    "admin-users": React__default.createElement(SvgDashiconsAdminUsers, {}, null),
    "airplane": React__default.createElement(SvgDashiconsAirplane, {}, null),
    "album": React__default.createElement(SvgDashiconsAlbum, {}, null),
    "align-center": React__default.createElement(SvgDashiconsAlignCenter, {}, null),
    "align-full-width": React__default.createElement(SvgDashiconsAlignFullWidth, {}, null),
    "align-left": React__default.createElement(SvgDashiconsAlignLeft, {}, null),
    "align-none": React__default.createElement(SvgDashiconsAlignNone, {}, null),
    "align-pull-left": React__default.createElement(SvgDashiconsAlignPullLeft, {}, null),
    "align-pull-right": React__default.createElement(SvgDashiconsAlignPullRight, {}, null),
    "align-right": React__default.createElement(SvgDashiconsAlignRight, {}, null),
    "align-wide": React__default.createElement(SvgDashiconsAlignWide, {}, null),
    "amazon": React__default.createElement(SvgDashiconsAmazon, {}, null),
    "analytics": React__default.createElement(SvgDashiconsAnalytics, {}, null),
    "archive": React__default.createElement(SvgDashiconsArchive, {}, null),
    "arrow-down-alt": React__default.createElement(SvgDashiconsArrowDownAlt, {}, null),
    "arrow-down-alt2": React__default.createElement(SvgDashiconsArrowDownAlt2, {}, null),
    "arrow-down": React__default.createElement(SvgDashiconsArrowDown, {}, null),
    "arrow-left-alt": React__default.createElement(SvgDashiconsArrowLeftAlt, {}, null),
    "arrow-left-alt2": React__default.createElement(SvgDashiconsArrowLeftAlt2, {}, null),
    "arrow-left": React__default.createElement(SvgDashiconsArrowLeft, {}, null),
    "arrow-right-alt": React__default.createElement(SvgDashiconsArrowRightAlt, {}, null),
    "arrow-right-alt2": React__default.createElement(SvgDashiconsArrowRightAlt2, {}, null),
    "arrow-right": React__default.createElement(SvgDashiconsArrowRight, {}, null),
    "arrow-up-alt": React__default.createElement(SvgDashiconsArrowUpAlt, {}, null),
    "arrow-up-alt2": React__default.createElement(SvgDashiconsArrowUpAlt2, {}, null),
    "arrow-up-duplicate": React__default.createElement(SvgDashiconsArrowUpDuplicate, {}, null),
    "arrow-up": React__default.createElement(SvgDashiconsArrowUp, {}, null),
    "art": React__default.createElement(SvgDashiconsArt, {}, null),
    "awards": React__default.createElement(SvgDashiconsAwards, {}, null),
    "backup": React__default.createElement(SvgDashiconsBackup, {}, null),
    "bank": React__default.createElement(SvgDashiconsBank, {}, null),
    "beer": React__default.createElement(SvgDashiconsBeer, {}, null),
    "bell": React__default.createElement(SvgDashiconsBell, {}, null),
    "block-default": React__default.createElement(SvgDashiconsBlockDefault, {}, null),
    "book-alt": React__default.createElement(SvgDashiconsBookAlt, {}, null),
    "book": React__default.createElement(SvgDashiconsBook, {}, null),
    "buddicons-activity": React__default.createElement(SvgDashiconsBuddiconsActivity, {}, null),
    "buddicons-bbpress-logo": React__default.createElement(SvgDashiconsBuddiconsBbpressLogo, {}, null),
    "buddicons-buddypress-logo": React__default.createElement(SvgDashiconsBuddiconsBuddypressLogo, {}, null),
    "buddicons-community": React__default.createElement(SvgDashiconsBuddiconsCommunity, {}, null),
    "buddicons-forums": React__default.createElement(SvgDashiconsBuddiconsForums, {}, null),
    "buddicons-friends": React__default.createElement(SvgDashiconsBuddiconsFriends, {}, null),
    "buddicons-groups": React__default.createElement(SvgDashiconsBuddiconsGroups, {}, null),
    "buddicons-pm": React__default.createElement(SvgDashiconsBuddiconsPm, {}, null),
    "buddicons-replies": React__default.createElement(SvgDashiconsBuddiconsReplies, {}, null),
    "buddicons-topics": React__default.createElement(SvgDashiconsBuddiconsTopics, {}, null),
    "buddicons-tracking": React__default.createElement(SvgDashiconsBuddiconsTracking, {}, null),
    "building": React__default.createElement(SvgDashiconsBuilding, {}, null),
    "businessman": React__default.createElement(SvgDashiconsBusinessman, {}, null),
    "businessperson": React__default.createElement(SvgDashiconsBusinessperson, {}, null),
    "businesswoman": React__default.createElement(SvgDashiconsBusinesswoman, {}, null),
    "button": React__default.createElement(SvgDashiconsButton, {}, null),
    "calculator": React__default.createElement(SvgDashiconsCalculator, {}, null),
    "calendar-alt": React__default.createElement(SvgDashiconsCalendarAlt, {}, null),
    "calendar": React__default.createElement(SvgDashiconsCalendar, {}, null),
    "camera-alt": React__default.createElement(SvgDashiconsCameraAlt, {}, null),
    "camera": React__default.createElement(SvgDashiconsCamera, {}, null),
    "car": React__default.createElement(SvgDashiconsCar, {}, null),
    "carrot": React__default.createElement(SvgDashiconsCarrot, {}, null),
    "cart": React__default.createElement(SvgDashiconsCart, {}, null),
    "category": React__default.createElement(SvgDashiconsCategory, {}, null),
    "chart-area": React__default.createElement(SvgDashiconsChartArea, {}, null),
    "chart-bar": React__default.createElement(SvgDashiconsChartBar, {}, null),
    "chart-line": React__default.createElement(SvgDashiconsChartLine, {}, null),
    "chart-pie": React__default.createElement(SvgDashiconsChartPie, {}, null),
    "clipboard": React__default.createElement(SvgDashiconsClipboard, {}, null),
    "clock": React__default.createElement(SvgDashiconsClock, {}, null),
    "cloud-saved": React__default.createElement(SvgDashiconsCloudSaved, {}, null),
    "cloud-upload": React__default.createElement(SvgDashiconsCloudUpload, {}, null),
    "cloud": React__default.createElement(SvgDashiconsCloud, {}, null),
    "code-standards": React__default.createElement(SvgDashiconsCodeStandards, {}, null),
    "coffee": React__default.createElement(SvgDashiconsCoffee, {}, null),
    "color-picker": React__default.createElement(SvgDashiconsColorPicker, {}, null),
    "columns": React__default.createElement(SvgDashiconsColumns, {}, null),
    "controls-back": React__default.createElement(SvgDashiconsControlsBack, {}, null),
    "controls-forward": React__default.createElement(SvgDashiconsControlsForward, {}, null),
    "controls-pause": React__default.createElement(SvgDashiconsControlsPause, {}, null),
    "controls-play": React__default.createElement(SvgDashiconsControlsPlay, {}, null),
    "controls-repeat": React__default.createElement(SvgDashiconsControlsRepeat, {}, null),
    "controls-skipback": React__default.createElement(SvgDashiconsControlsSkipback, {}, null),
    "controls-skipforward": React__default.createElement(SvgDashiconsControlsSkipforward, {}, null),
    "controls-volumeoff": React__default.createElement(SvgDashiconsControlsVolumeoff, {}, null),
    "controls-volumeon": React__default.createElement(SvgDashiconsControlsVolumeon, {}, null),
    "cover-image": React__default.createElement(SvgDashiconsCoverImage, {}, null),
    "dashboard": React__default.createElement(SvgDashiconsDashboard, {}, null),
    "database-add": React__default.createElement(SvgDashiconsDatabaseAdd, {}, null),
    "database-export": React__default.createElement(SvgDashiconsDatabaseExport, {}, null),
    "database-import": React__default.createElement(SvgDashiconsDatabaseImport, {}, null),
    "database-remove": React__default.createElement(SvgDashiconsDatabaseRemove, {}, null),
    "database-view": React__default.createElement(SvgDashiconsDatabaseView, {}, null),
    "database": React__default.createElement(SvgDashiconsDatabase, {}, null),
    "desktop": React__default.createElement(SvgDashiconsDesktop, {}, null),
    "dismiss": React__default.createElement(SvgDashiconsDismiss, {}, null),
    "download": React__default.createElement(SvgDashiconsDownload, {}, null),
    "drumstick": React__default.createElement(SvgDashiconsDrumstick, {}, null),
    "edit-large": React__default.createElement(SvgDashiconsEditLarge, {}, null),
    "edit-page": React__default.createElement(SvgDashiconsEditPage, {}, null),
    "edit": React__default.createElement(SvgDashiconsEdit, {}, null),
    "editor-aligncenter": React__default.createElement(SvgDashiconsEditorAligncenter, {}, null),
    "editor-alignleft": React__default.createElement(SvgDashiconsEditorAlignleft, {}, null),
    "editor-alignright": React__default.createElement(SvgDashiconsEditorAlignright, {}, null),
    "editor-bold": React__default.createElement(SvgDashiconsEditorBold, {}, null),
    "editor-break": React__default.createElement(SvgDashiconsEditorBreak, {}, null),
    "editor-code-duplicate": React__default.createElement(SvgDashiconsEditorCodeDuplicate, {}, null),
    "editor-code": React__default.createElement(SvgDashiconsEditorCode, {}, null),
    "editor-contract": React__default.createElement(SvgDashiconsEditorContract, {}, null),
    "editor-customchar": React__default.createElement(SvgDashiconsEditorCustomchar, {}, null),
    "editor-expand": React__default.createElement(SvgDashiconsEditorExpand, {}, null),
    "editor-help": React__default.createElement(SvgDashiconsEditorHelp, {}, null),
    "editor-indent": React__default.createElement(SvgDashiconsEditorIndent, {}, null),
    "editor-insertmore": React__default.createElement(SvgDashiconsEditorInsertmore, {}, null),
    "editor-italic": React__default.createElement(SvgDashiconsEditorItalic, {}, null),
    "editor-justify": React__default.createElement(SvgDashiconsEditorJustify, {}, null),
    "editor-kitchensink": React__default.createElement(SvgDashiconsEditorKitchensink, {}, null),
    "editor-ltr": React__default.createElement(SvgDashiconsEditorLtr, {}, null),
    "editor-ol-rtl": React__default.createElement(SvgDashiconsEditorOlRtl, {}, null),
    "editor-ol": React__default.createElement(SvgDashiconsEditorOl, {}, null),
    "editor-outdent": React__default.createElement(SvgDashiconsEditorOutdent, {}, null),
    "editor-paragraph": React__default.createElement(SvgDashiconsEditorParagraph, {}, null),
    "editor-paste-text": React__default.createElement(SvgDashiconsEditorPasteText, {}, null),
    "editor-paste-word": React__default.createElement(SvgDashiconsEditorPasteWord, {}, null),
    "editor-quote": React__default.createElement(SvgDashiconsEditorQuote, {}, null),
    "editor-removeformatting": React__default.createElement(SvgDashiconsEditorRemoveformatting, {}, null),
    "editor-rtl": React__default.createElement(SvgDashiconsEditorRtl, {}, null),
    "editor-spellcheck": React__default.createElement(SvgDashiconsEditorSpellcheck, {}, null),
    "editor-strikethrough": React__default.createElement(SvgDashiconsEditorStrikethrough, {}, null),
    "editor-table": React__default.createElement(SvgDashiconsEditorTable, {}, null),
    "editor-textcolor": React__default.createElement(SvgDashiconsEditorTextcolor, {}, null),
    "editor-ul": React__default.createElement(SvgDashiconsEditorUl, {}, null),
    "editor-underline": React__default.createElement(SvgDashiconsEditorUnderline, {}, null),
    "editor-unlink": React__default.createElement(SvgDashiconsEditorUnlink, {}, null),
    "editor-video": React__default.createElement(SvgDashiconsEditorVideo, {}, null),
    "ellipsis": React__default.createElement(SvgDashiconsEllipsis, {}, null),
    "email-alt": React__default.createElement(SvgDashiconsEmailAlt, {}, null),
    "email-alt2": React__default.createElement(SvgDashiconsEmailAlt2, {}, null),
    "email": React__default.createElement(SvgDashiconsEmail, {}, null),
    "embed-audio": React__default.createElement(SvgDashiconsEmbedAudio, {}, null),
    "embed-generic": React__default.createElement(SvgDashiconsEmbedGeneric, {}, null),
    "embed-photo": React__default.createElement(SvgDashiconsEmbedPhoto, {}, null),
    "embed-post": React__default.createElement(SvgDashiconsEmbedPost, {}, null),
    "embed-video": React__default.createElement(SvgDashiconsEmbedVideo, {}, null),
    "excerpt-view": React__default.createElement(SvgDashiconsExcerptView, {}, null),
    "exit": React__default.createElement(SvgDashiconsExit, {}, null),
    "external": React__default.createElement(SvgDashiconsExternal, {}, null),
    "facebook-alt": React__default.createElement(SvgDashiconsFacebookAlt, {}, null),
    "facebook": React__default.createElement(SvgDashiconsFacebook, {}, null),
    "feedback": React__default.createElement(SvgDashiconsFeedback, {}, null),
    "filter": React__default.createElement(SvgDashiconsFilter, {}, null),
    "flag": React__default.createElement(SvgDashiconsFlag, {}, null),
    "food": React__default.createElement(SvgDashiconsFood, {}, null),
    "format-aside": React__default.createElement(SvgDashiconsFormatAside, {}, null),
    "format-audio": React__default.createElement(SvgDashiconsFormatAudio, {}, null),
    "format-chat": React__default.createElement(SvgDashiconsFormatChat, {}, null),
    "format-gallery": React__default.createElement(SvgDashiconsFormatGallery, {}, null),
    "format-image": React__default.createElement(SvgDashiconsFormatImage, {}, null),
    "format-quote": React__default.createElement(SvgDashiconsFormatQuote, {}, null),
    "format-status": React__default.createElement(SvgDashiconsFormatStatus, {}, null),
    "format-video": React__default.createElement(SvgDashiconsFormatVideo, {}, null),
    "forms": React__default.createElement(SvgDashiconsForms, {}, null),
    "fullscreen-alt": React__default.createElement(SvgDashiconsFullscreenAlt, {}, null),
    "fullscreen-exit-alt": React__default.createElement(SvgDashiconsFullscreenExitAlt, {}, null),
    "games": React__default.createElement(SvgDashiconsGames, {}, null),
    "google": React__default.createElement(SvgDashiconsGoogle, {}, null),
    "googleplus": React__default.createElement(SvgDashiconsGoogleplus, {}, null),
    "grid-view": React__default.createElement(SvgDashiconsGridView, {}, null),
    "groups": React__default.createElement(SvgDashiconsGroups, {}, null),
    "hammer": React__default.createElement(SvgDashiconsHammer, {}, null),
    "heading": React__default.createElement(SvgDashiconsHeading, {}, null),
    "heart": React__default.createElement(SvgDashiconsHeart, {}, null),
    "hidden": React__default.createElement(SvgDashiconsHidden, {}, null),
    "hourglass": React__default.createElement(SvgDashiconsHourglass, {}, null),
    "html": React__default.createElement(SvgDashiconsHtml, {}, null),
    "id-alt": React__default.createElement(SvgDashiconsIdAlt, {}, null),
    "id": React__default.createElement(SvgDashiconsId, {}, null),
    "image-crop": React__default.createElement(SvgDashiconsImageCrop, {}, null),
    "image-filter": React__default.createElement(SvgDashiconsImageFilter, {}, null),
    "image-flip-horizontal": React__default.createElement(SvgDashiconsImageFlipHorizontal, {}, null),
    "image-flip-vertical": React__default.createElement(SvgDashiconsImageFlipVertical, {}, null),
    "image-rotate-left": React__default.createElement(SvgDashiconsImageRotateLeft, {}, null),
    "image-rotate-right": React__default.createElement(SvgDashiconsImageRotateRight, {}, null),
    "image-rotate": React__default.createElement(SvgDashiconsImageRotate, {}, null),
    "images-alt": React__default.createElement(SvgDashiconsImagesAlt, {}, null),
    "images-alt2": React__default.createElement(SvgDashiconsImagesAlt2, {}, null),
    "index-card": React__default.createElement(SvgDashiconsIndexCard, {}, null),
    "info-outline": React__default.createElement(SvgDashiconsInfoOutline, {}, null),
    "info": React__default.createElement(SvgDashiconsInfo, {}, null),
    "insert-after": React__default.createElement(SvgDashiconsInsertAfter, {}, null),
    "insert-before": React__default.createElement(SvgDashiconsInsertBefore, {}, null),
    "insert": React__default.createElement(SvgDashiconsInsert, {}, null),
    "instagram": React__default.createElement(SvgDashiconsInstagram, {}, null),
    "laptop": React__default.createElement(SvgDashiconsLaptop, {}, null),
    "layout": React__default.createElement(SvgDashiconsLayout, {}, null),
    "leftright": React__default.createElement(SvgDashiconsLeftright, {}, null),
    "lightbulb": React__default.createElement(SvgDashiconsLightbulb, {}, null),
    "linkedin": React__default.createElement(SvgDashiconsLinkedin, {}, null),
    "list-view": React__default.createElement(SvgDashiconsListView, {}, null),
    "location-alt": React__default.createElement(SvgDashiconsLocationAlt, {}, null),
    "location": React__default.createElement(SvgDashiconsLocation, {}, null),
    "lock-alt": React__default.createElement(SvgDashiconsLockAlt, {}, null),
    "lock-duplicate": React__default.createElement(SvgDashiconsLockDuplicate, {}, null),
    "lock": React__default.createElement(SvgDashiconsLock, {}, null),
    "marker": React__default.createElement(SvgDashiconsMarker, {}, null),
    "media-archive": React__default.createElement(SvgDashiconsMediaArchive, {}, null),
    "media-audio": React__default.createElement(SvgDashiconsMediaAudio, {}, null),
    "media-code": React__default.createElement(SvgDashiconsMediaCode, {}, null),
    "media-default": React__default.createElement(SvgDashiconsMediaDefault, {}, null),
    "media-document": React__default.createElement(SvgDashiconsMediaDocument, {}, null),
    "media-interactive": React__default.createElement(SvgDashiconsMediaInteractive, {}, null),
    "media-spreadsheet": React__default.createElement(SvgDashiconsMediaSpreadsheet, {}, null),
    "media-text": React__default.createElement(SvgDashiconsMediaText, {}, null),
    "media-video": React__default.createElement(SvgDashiconsMediaVideo, {}, null),
    "megaphone": React__default.createElement(SvgDashiconsMegaphone, {}, null),
    "menu-alt": React__default.createElement(SvgDashiconsMenuAlt, {}, null),
    "menu-alt2": React__default.createElement(SvgDashiconsMenuAlt2, {}, null),
    "menu-alt3": React__default.createElement(SvgDashiconsMenuAlt3, {}, null),
    "menu": React__default.createElement(SvgDashiconsMenu, {}, null),
    "menu2": React__default.createElement(SvgDashiconsMenu2, {}, null),
    "microphone": React__default.createElement(SvgDashiconsMicrophone, {}, null),
    "migrate": React__default.createElement(SvgDashiconsMigrate, {}, null),
    "minus": React__default.createElement(SvgDashiconsMinus, {}, null),
    "money-alt": React__default.createElement(SvgDashiconsMoneyAlt, {}, null),
    "money": React__default.createElement(SvgDashiconsMoney, {}, null),
    "move": React__default.createElement(SvgDashiconsMove, {}, null),
    "nametag": React__default.createElement(SvgDashiconsNametag, {}, null),
    "networking": React__default.createElement(SvgDashiconsNetworking, {}, null),
    "no-alt": React__default.createElement(SvgDashiconsNoAlt, {}, null),
    "no": React__default.createElement(SvgDashiconsNo, {}, null),
    "open-folder": React__default.createElement(SvgDashiconsOpenFolder, {}, null),
    "palmtree": React__default.createElement(SvgDashiconsPalmtree, {}, null),
    "paperclip": React__default.createElement(SvgDashiconsPaperclip, {}, null),
    "pdf": React__default.createElement(SvgDashiconsPdf, {}, null),
    "performance": React__default.createElement(SvgDashiconsPerformance, {}, null),
    "pets": React__default.createElement(SvgDashiconsPets, {}, null),
    "phone": React__default.createElement(SvgDashiconsPhone, {}, null),
    "pinterest": React__default.createElement(SvgDashiconsPinterest, {}, null),
    "playlist-audio": React__default.createElement(SvgDashiconsPlaylistAudio, {}, null),
    "playlist-video": React__default.createElement(SvgDashiconsPlaylistVideo, {}, null),
    "plugins-checked": React__default.createElement(SvgDashiconsPluginsChecked, {}, null),
    "plus-alt": React__default.createElement(SvgDashiconsPlusAlt, {}, null),
    "plus-alt2": React__default.createElement(SvgDashiconsPlusAlt2, {}, null),
    "plus": React__default.createElement(SvgDashiconsPlus, {}, null),
    "podio": React__default.createElement(SvgDashiconsPodio, {}, null),
    "portfolio": React__default.createElement(SvgDashiconsPortfolio, {}, null),
    "post-status": React__default.createElement(SvgDashiconsPostStatus, {}, null),
    "pressthis": React__default.createElement(SvgDashiconsPressthis, {}, null),
    "printer": React__default.createElement(SvgDashiconsPrinter, {}, null),
    "privacy": React__default.createElement(SvgDashiconsPrivacy, {}, null),
    "products": React__default.createElement(SvgDashiconsProducts, {}, null),
    "randomize": React__default.createElement(SvgDashiconsRandomize, {}, null),
    "reddit": React__default.createElement(SvgDashiconsReddit, {}, null),
    "redo": React__default.createElement(SvgDashiconsRedo, {}, null),
    "remove": React__default.createElement(SvgDashiconsRemove, {}, null),
    "rest-api": React__default.createElement(SvgDashiconsRestApi, {}, null),
    "rss": React__default.createElement(SvgDashiconsRss, {}, null),
    "saved": React__default.createElement(SvgDashiconsSaved, {}, null),
    "schedule": React__default.createElement(SvgDashiconsSchedule, {}, null),
    "screenoptions": React__default.createElement(SvgDashiconsScreenoptions, {}, null),
    "search": React__default.createElement(SvgDashiconsSearch, {}, null),
    "share-alt": React__default.createElement(SvgDashiconsShareAlt, {}, null),
    "share-alt2": React__default.createElement(SvgDashiconsShareAlt2, {}, null),
    "share": React__default.createElement(SvgDashiconsShare, {}, null),
    "shield-alt": React__default.createElement(SvgDashiconsShieldAlt, {}, null),
    "shield": React__default.createElement(SvgDashiconsShield, {}, null),
    "shortcode": React__default.createElement(SvgDashiconsShortcode, {}, null),
    "slides": React__default.createElement(SvgDashiconsSlides, {}, null),
    "smartphone": React__default.createElement(SvgDashiconsSmartphone, {}, null),
    "smiley": React__default.createElement(SvgDashiconsSmiley, {}, null),
    "sort": React__default.createElement(SvgDashiconsSort, {}, null),
    "sos": React__default.createElement(SvgDashiconsSos, {}, null),
    "spotify": React__default.createElement(SvgDashiconsSpotify, {}, null),
    "star-empty": React__default.createElement(SvgDashiconsStarEmpty, {}, null),
    "star-filled": React__default.createElement(SvgDashiconsStarFilled, {}, null),
    "star-half": React__default.createElement(SvgDashiconsStarHalf, {}, null),
    "sticky": React__default.createElement(SvgDashiconsSticky, {}, null),
    "store": React__default.createElement(SvgDashiconsStore, {}, null),
    "superhero-alt": React__default.createElement(SvgDashiconsSuperheroAlt, {}, null),
    "superhero": React__default.createElement(SvgDashiconsSuperhero, {}, null),
    "table-col-after": React__default.createElement(SvgDashiconsTableColAfter, {}, null),
    "table-col-before": React__default.createElement(SvgDashiconsTableColBefore, {}, null),
    "table-col-delete": React__default.createElement(SvgDashiconsTableColDelete, {}, null),
    "table-row-after": React__default.createElement(SvgDashiconsTableRowAfter, {}, null),
    "table-row-before": React__default.createElement(SvgDashiconsTableRowBefore, {}, null),
    "table-row-delete": React__default.createElement(SvgDashiconsTableRowDelete, {}, null),
    "tablet": React__default.createElement(SvgDashiconsTablet, {}, null),
    "tag": React__default.createElement(SvgDashiconsTag, {}, null),
    "tagcloud": React__default.createElement(SvgDashiconsTagcloud, {}, null),
    "testimonial": React__default.createElement(SvgDashiconsTestimonial, {}, null),
    "text-page": React__default.createElement(SvgDashiconsTextPage, {}, null),
    "text": React__default.createElement(SvgDashiconsText, {}, null),
    "thumbs-down": React__default.createElement(SvgDashiconsThumbsDown, {}, null),
    "thumbs-up": React__default.createElement(SvgDashiconsThumbsUp, {}, null),
    "tickets-alt": React__default.createElement(SvgDashiconsTicketsAlt, {}, null),
    "tickets": React__default.createElement(SvgDashiconsTickets, {}, null),
    "tide": React__default.createElement(SvgDashiconsTide, {}, null),
    "translation": React__default.createElement(SvgDashiconsTranslation, {}, null),
    "trash": React__default.createElement(SvgDashiconsTrash, {}, null),
    "twitch": React__default.createElement(SvgDashiconsTwitch, {}, null),
    "twitter-alt": React__default.createElement(SvgDashiconsTwitterAlt, {}, null),
    "twitter": React__default.createElement(SvgDashiconsTwitter, {}, null),
    "undo": React__default.createElement(SvgDashiconsUndo, {}, null),
    "universal-access-alt": React__default.createElement(SvgDashiconsUniversalAccessAlt, {}, null),
    "universal-access": React__default.createElement(SvgDashiconsUniversalAccess, {}, null),
    "unlock": React__default.createElement(SvgDashiconsUnlock, {}, null),
    "update-alt": React__default.createElement(SvgDashiconsUpdateAlt, {}, null),
    "update": React__default.createElement(SvgDashiconsUpdate, {}, null),
    "update2": React__default.createElement(SvgDashiconsUpdate2, {}, null),
    "upload": React__default.createElement(SvgDashiconsUpload, {}, null),
    "vault": React__default.createElement(SvgDashiconsVault, {}, null),
    "video-alt": React__default.createElement(SvgDashiconsVideoAlt, {}, null),
    "video-alt2": React__default.createElement(SvgDashiconsVideoAlt2, {}, null),
    "video-alt3": React__default.createElement(SvgDashiconsVideoAlt3, {}, null),
    "visibility": React__default.createElement(SvgDashiconsVisibility, {}, null),
    "warning": React__default.createElement(SvgDashiconsWarning, {}, null),
    "welcome-add-page": React__default.createElement(SvgDashiconsWelcomeAddPage, {}, null),
    "welcome-comments": React__default.createElement(SvgDashiconsWelcomeComments, {}, null),
    "welcome-learn-more": React__default.createElement(SvgDashiconsWelcomeLearnMore, {}, null),
    "welcome-view-site": React__default.createElement(SvgDashiconsWelcomeViewSite, {}, null),
    "welcome-widgets-menus": React__default.createElement(SvgDashiconsWelcomeWidgetsMenus, {}, null),
    "welcome-write-blog": React__default.createElement(SvgDashiconsWelcomeWriteBlog, {}, null),
    "whatsapp": React__default.createElement(SvgDashiconsWhatsapp, {}, null),
    "wordpress-alt": React__default.createElement(SvgDashiconsWordpressAlt, {}, null),
    "wordpress": React__default.createElement(SvgDashiconsWordpress, {}, null),
    "xing": React__default.createElement(SvgDashiconsXing, {}, null),
    "yes-alt": React__default.createElement(SvgDashiconsYesAlt, {}, null),
    "yes": React__default.createElement(SvgDashiconsYes, {}, null),
    "youtube": React__default.createElement(SvgDashiconsYoutube, {}, null)
  })
});
const Element$g = styled$1("a", {
  color: "$primary400",
  fontSize: "$text200",
  fontWeight: 500,
  "&:hover": {
    color: "$primary410"
  }
});
const Link$1 = (props) => {
  const _a = props, {
    children
  } = _a, otherProps = __objRest(_a, [
    "children"
  ]);
  return /* @__PURE__ */ jsx(Element$g, __spreadProps(__spreadValues({}, otherProps), {
    children
  }));
};
const buttonStyles = {
  appearance: "none",
  "-webkit-appearance": "none",
  alignItems: "center",
  borderRadius: "$md",
  boxSizing: "border-box",
  display: "inline-flex",
  cursor: "pointer",
  fontFamily: "$body",
  fontSize: "$text300",
  fontWeight: 600,
  height: "$10",
  justifyContent: "center",
  lineHeight: 1,
  paddingY: "$2-5",
  paddingX: "$3",
  textAlign: "left",
  textDecoration: "none",
  transition: "all 125ms ease",
  "&:focus": {
    outline: "none"
  },
  "@md": {
    height: "$9",
    paddingX: "$6"
  },
  variants: {
    size: {
      small: {
        height: "$7",
        paddingY: "$1-5",
        paddingX: "$2-5",
        "@md": {
          height: "$8"
        }
      },
      tiny: {
        fontSize: "$text200",
        height: "$6",
        paddingY: "$0-5",
        paddingX: "$1-5",
        "@md": {
          height: "$7"
        }
      }
    },
    variant: {
      normal: {
        border: "0",
        backgroundColor: "$black300",
        color: "$black900",
        "&:hover": {
          background: "$black310",
          color: "$black900"
        }
      },
      primary: {
        border: "1px solid $primary400",
        background: "$primary400",
        color: "$white",
        "&:hover": {
          background: "$primary410",
          color: "$white"
        }
      },
      warning: {
        border: "1px solid $warning400",
        background: "transparent",
        color: "$warning400",
        "&:hover": {
          background: "$warning400",
          color: "$white"
        }
      },
      simple: {
        background: "transparent",
        border: "none",
        color: "$text900"
      },
      plain: {
        background: "transparent",
        border: "none",
        color: "$text900",
        padding: 0
      }
    }
  }
};
const ButtonElement = styled("button", buttonStyles);
const Button$2 = (props) => {
  const _a = props, {
    children,
    css: css2 = {},
    disabled = false,
    href = false,
    onClick = void 0,
    variant = "normal",
    size = "normal",
    title = ""
  } = _a, otherProps = __objRest(_a, [
    "children",
    "css",
    "disabled",
    "href",
    "onClick",
    "variant",
    "size",
    "title"
  ]);
  return /* @__PURE__ */ jsx(ButtonElement, __spreadProps(__spreadValues({
    as: href ? "a" : "button",
    css: css2,
    size,
    variant,
    disabled,
    onClick,
    title,
    href
  }, otherProps), {
    children
  }));
};
var classnames = {
  exports: {}
};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classNames = classnames.exports;
const ArrowDown = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: "14",
  height: "8",
  viewBox: "0 0 14 8",
  fill: "none",
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.646484 1.35359L1.35359 0.646484L7.00004 6.29293L12.6465 0.646484L13.3536 1.35359L7.00004 7.70714L0.646484 1.35359Z",
    fill: color
  })]
});
const ArrowLeft = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: "8",
  height: "14",
  viewBox: "0 0 8 14",
  fill: "none",
  style: {
    display: "block"
  },
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.64641 0.646484L7.35352 1.35359L1.70707 7.00004L7.35352 12.6465L6.64641 13.3536L0.292855 7.00004L6.64641 0.646484Z",
    fill: color
  })]
});
const ArrowRight = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: "8",
  height: "14",
  viewBox: "0 0 8 14",
  fill: "none",
  style: {
    display: "block"
  },
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.35359 0.646484L0.646484 1.35359L6.29293 7.00004L0.646485 12.6465L1.35359 13.3536L7.70715 7.00004L1.35359 0.646484Z",
    fill: color
  })]
});
const ArrowDetailedSmall = ({
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  width: "11",
  height: "12",
  viewBox: "0 0 11 12",
  fill: "none",
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    d: "M5.5 1V11M5.5 11L10 6.55556M5.5 11L1 6.55556",
    stroke: color,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});
const Calendar = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: "14",
  height: "12",
  viewBox: "0 0 14 12",
  fill: "none",
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.5 0C0.671573 0 0 0.671573 0 1.5V10.5C0 11.3284 0.671573 12 1.5 12H12.5C13.3284 12 14 11.3284 14 10.5V1.5C14 0.671573 13.3284 0 12.5 0H1.5ZM1.66667 2.4C1.39052 2.4 1.16667 2.62386 1.16667 2.9V10.3C1.16667 10.5761 1.39052 10.8 1.66667 10.8H12.3333C12.6095 10.8 12.8333 10.5761 12.8333 10.3V2.9C12.8333 2.62386 12.6095 2.4 12.3333 2.4H1.66667ZM5.25 6.4C5.25 6.25999 5.25 6.18998 5.27725 6.1365C5.30122 6.08946 5.33946 6.05122 5.3865 6.02725C5.43998 6 5.50999 6 5.65 6H6.01667C6.15668 6 6.22669 6 6.28016 6.02725C6.32721 6.05122 6.36545 6.08946 6.38942 6.1365C6.41667 6.18998 6.41667 6.25999 6.41667 6.4V6.8C6.41667 6.94001 6.41667 7.01002 6.38942 7.0635C6.36545 7.11054 6.32721 7.14878 6.28016 7.17275C6.22669 7.2 6.15668 7.2 6.01667 7.2H5.65C5.50999 7.2 5.43998 7.2 5.3865 7.17275C5.33946 7.14878 5.30122 7.11054 5.27725 7.0635C5.25 7.01002 5.25 6.94001 5.25 6.8V6.4ZM2.94392 6.1365C2.91667 6.18998 2.91667 6.25999 2.91667 6.4V6.8C2.91667 6.94001 2.91667 7.01002 2.94392 7.0635C2.96789 7.11054 3.00613 7.14878 3.05317 7.17275C3.10665 7.2 3.17666 7.2 3.31667 7.2H3.68334C3.82335 7.2 3.89336 7.2 3.94684 7.17275C3.99388 7.14878 4.03212 7.11054 4.05609 7.0635C4.08334 7.01002 4.08334 6.94001 4.08334 6.8V6.4C4.08334 6.25999 4.08334 6.18998 4.05609 6.1365C4.03212 6.08946 3.99388 6.05122 3.94684 6.02725C3.89336 6 3.82335 6 3.68334 6H3.31667C3.17666 6 3.10665 6 3.05317 6.02725C3.00613 6.05122 2.96789 6.08946 2.94392 6.1365ZM2.91667 8.7999C2.91667 8.65989 2.91667 8.58988 2.94392 8.5364C2.96789 8.48936 3.00613 8.45112 3.05317 8.42715C3.10665 8.3999 3.17666 8.3999 3.31667 8.3999H3.68334C3.82335 8.3999 3.89336 8.3999 3.94684 8.42715C3.99388 8.45112 4.03212 8.48936 4.05609 8.5364C4.08334 8.58988 4.08334 8.65989 4.08334 8.7999V9.1999C4.08334 9.33992 4.08334 9.40992 4.05609 9.4634C4.03212 9.51044 3.99388 9.54869 3.94684 9.57265C3.89336 9.5999 3.82335 9.5999 3.68334 9.5999H3.31667C3.17666 9.5999 3.10665 9.5999 3.05317 9.57265C3.00613 9.54869 2.96789 9.51044 2.94392 9.4634C2.91667 9.40992 2.91667 9.33992 2.91667 9.1999V8.7999ZM7.61058 3.7366C7.58333 3.79008 7.58333 3.86008 7.58333 4.0001V4.4001C7.58333 4.54011 7.58333 4.61012 7.61058 4.6636C7.63454 4.71064 7.67279 4.74888 7.71983 4.77285C7.77331 4.8001 7.84332 4.8001 7.98333 4.8001H8.34999C8.49001 4.8001 8.56001 4.8001 8.61349 4.77285C8.66053 4.74888 8.69878 4.71064 8.72275 4.6636C8.74999 4.61012 8.74999 4.54011 8.74999 4.4001V4.0001C8.74999 3.86008 8.74999 3.79008 8.72275 3.7366C8.69878 3.68956 8.66053 3.65131 8.61349 3.62735C8.56001 3.6001 8.49001 3.6001 8.34999 3.6001H7.98333C7.84332 3.6001 7.77331 3.6001 7.71983 3.62735C7.67279 3.65131 7.63454 3.68956 7.61058 3.7366ZM5.25 4.0001C5.25 3.86008 5.25 3.79008 5.27725 3.7366C5.30122 3.68956 5.33946 3.65131 5.3865 3.62735C5.43998 3.6001 5.50999 3.6001 5.65 3.6001H6.01667C6.15668 3.6001 6.22669 3.6001 6.28016 3.62735C6.32721 3.65131 6.36545 3.68956 6.38942 3.7366C6.41667 3.79008 6.41667 3.86008 6.41667 4.0001V4.4001C6.41667 4.54011 6.41667 4.61012 6.38942 4.6636C6.36545 4.71064 6.32721 4.74888 6.28016 4.77285C6.22669 4.8001 6.15668 4.8001 6.01667 4.8001H5.65C5.50999 4.8001 5.43998 4.8001 5.3865 4.77285C5.33946 4.74888 5.30122 4.71064 5.27725 4.6636C5.25 4.61012 5.25 4.54011 5.25 4.4001V4.0001ZM7.61058 6.1365C7.58333 6.18998 7.58333 6.25999 7.58333 6.4V6.8C7.58333 6.94001 7.58333 7.01002 7.61058 7.0635C7.63454 7.11054 7.67279 7.14878 7.71983 7.17275C7.77331 7.2 7.84332 7.2 7.98333 7.2H8.34999C8.49001 7.2 8.56001 7.2 8.61349 7.17275C8.66053 7.14878 8.69878 7.11054 8.72275 7.0635C8.74999 7.01002 8.74999 6.94001 8.74999 6.8V6.4C8.74999 6.25999 8.74999 6.18998 8.72275 6.1365C8.69878 6.08946 8.66053 6.05122 8.61349 6.02725C8.56001 6 8.49001 6 8.34999 6H7.98333C7.84332 6 7.77331 6 7.71983 6.02725C7.67279 6.05122 7.63454 6.08946 7.61058 6.1365ZM5.25 8.7999C5.25 8.65989 5.25 8.58988 5.27725 8.5364C5.30122 8.48936 5.33946 8.45112 5.3865 8.42715C5.43998 8.3999 5.50999 8.3999 5.65 8.3999H6.01667C6.15668 8.3999 6.22669 8.3999 6.28016 8.42715C6.32721 8.45112 6.36545 8.48936 6.38942 8.5364C6.41667 8.58988 6.41667 8.65989 6.41667 8.7999V9.1999C6.41667 9.33992 6.41667 9.40992 6.38942 9.4634C6.36545 9.51044 6.32721 9.54869 6.28016 9.57265C6.22669 9.5999 6.15668 9.5999 6.01667 9.5999H5.65C5.50999 9.5999 5.43998 9.5999 5.3865 9.57265C5.33946 9.54869 5.30122 9.51044 5.27725 9.4634C5.25 9.40992 5.25 9.33992 5.25 9.1999V8.7999ZM9.94392 3.7366C9.91667 3.79008 9.91667 3.86008 9.91667 4.0001V4.4001C9.91667 4.54011 9.91667 4.61012 9.94392 4.6636C9.96789 4.71064 10.0061 4.74888 10.0532 4.77285C10.1067 4.8001 10.1767 4.8001 10.3167 4.8001H10.6833C10.8234 4.8001 10.8934 4.8001 10.9468 4.77285C10.9939 4.74888 11.0321 4.71064 11.0561 4.6636C11.0833 4.61012 11.0833 4.54011 11.0833 4.4001V4.0001C11.0833 3.86008 11.0833 3.79008 11.0561 3.7366C11.0321 3.68956 10.9939 3.65131 10.9468 3.62735C10.8934 3.6001 10.8234 3.6001 10.6833 3.6001H10.3167C10.1767 3.6001 10.1067 3.6001 10.0532 3.62735C10.0061 3.65131 9.96789 3.68956 9.94392 3.7366ZM9.91667 6.4C9.91667 6.25999 9.91667 6.18998 9.94392 6.1365C9.96789 6.08946 10.0061 6.05122 10.0532 6.02725C10.1067 6 10.1767 6 10.3167 6H10.6833C10.8234 6 10.8934 6 10.9468 6.02725C10.9939 6.05122 11.0321 6.08946 11.0561 6.1365C11.0833 6.18998 11.0833 6.25999 11.0833 6.4V6.8C11.0833 6.94001 11.0833 7.01002 11.0561 7.0635C11.0321 7.11054 10.9939 7.14878 10.9468 7.17275C10.8934 7.2 10.8234 7.2 10.6833 7.2H10.3167C10.1767 7.2 10.1067 7.2 10.0532 7.17275C10.0061 7.14878 9.96789 7.11054 9.94392 7.0635C9.91667 7.01002 9.91667 6.94001 9.91667 6.8V6.4ZM7.61058 8.5364C7.58333 8.58988 7.58333 8.65989 7.58333 8.7999V9.1999C7.58333 9.33992 7.58333 9.40992 7.61058 9.4634C7.63454 9.51044 7.67279 9.54869 7.71983 9.57265C7.77331 9.5999 7.84332 9.5999 7.98333 9.5999H8.34999C8.49001 9.5999 8.56001 9.5999 8.61349 9.57265C8.66053 9.54869 8.69878 9.51044 8.72275 9.4634C8.74999 9.40992 8.74999 9.33992 8.74999 9.1999V8.7999C8.74999 8.65989 8.74999 8.58988 8.72275 8.5364C8.69878 8.48936 8.66053 8.45112 8.61349 8.42715C8.56001 8.3999 8.49001 8.3999 8.34999 8.3999H7.98333C7.84332 8.3999 7.77331 8.3999 7.71983 8.42715C7.67279 8.45112 7.63454 8.48936 7.61058 8.5364Z",
    fill: color
  })]
});
const Checkmark = ({
  className = [],
  size = 20,
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon transform", className),
  fill: "none",
  height: size,
  style: {
    display: "block"
  },
  width: size,
  viewBox: "0 0 12 12",
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.8 1.5C3.93517 1.5 3.37676 1.50117 2.95175 1.53589C2.54426 1.56918 2.39318 1.6257 2.31901 1.66349C2.03677 1.8073 1.8073 2.03677 1.66349 2.31901C1.6257 2.39318 1.56918 2.54426 1.53589 2.95175C1.50117 3.37676 1.5 3.93517 1.5 4.8V7.2C1.5 8.06483 1.50117 8.62324 1.53589 9.04825C1.56918 9.45574 1.6257 9.60682 1.66349 9.68099C1.8073 9.96323 2.03677 10.1927 2.31901 10.3365C2.39318 10.3743 2.54426 10.4308 2.95175 10.4641C3.37676 10.4988 3.93517 10.5 4.8 10.5H7.2C8.06483 10.5 8.62324 10.4988 9.04825 10.4641C9.45574 10.4308 9.60682 10.3743 9.68099 10.3365C9.96323 10.1927 10.1927 9.96323 10.3365 9.68099C10.3743 9.60682 10.4308 9.45574 10.4641 9.04825C10.4988 8.62324 10.5 8.25156 10.5 7.2C10.5 6.14844 12 6.11719 12 7.2C12 8.88016 12 9.72024 11.673 10.362C11.3854 10.9265 10.9265 11.3854 10.362 11.673C9.72024 12 8.88016 12 7.2 12H4.8C3.11984 12 2.27976 12 1.63803 11.673C1.07354 11.3854 0.614601 10.9265 0.32698 10.362C0 9.72024 0 8.88016 0 7.2V4.8C0 3.11984 0 2.27976 0.32698 1.63803C0.614601 1.07354 1.07354 0.614601 1.63803 0.32698C2.27976 0 3.11984 0 4.8 0C6 0 6 1.5 4.8 1.5ZM11.5008 3.55824C11.8091 3.28162 11.8348 2.80744 11.5582 2.49913C11.2816 2.19083 10.8074 2.16514 10.4991 2.44176L6.32947 6.18283L4.51724 4.4569C4.21729 4.17123 3.74256 4.18281 3.4569 4.48276C3.17123 4.78271 3.18281 5.25744 3.48276 5.5431L5.79704 7.74718L6.2991 8.22533L6.81515 7.76232L11.5008 3.55824Z",
    fill: color
  })]
});
const ChevronLeft = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: "8",
  height: "14",
  viewBox: "0 0 8 14",
  fill: "none",
  style: {
    display: "block"
  },
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("g", {
    style: {
      transform: "rotateZ(180deg)",
      transformOrigin: "50% 50%"
    },
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z",
      fill: color
    })
  })]
});
const ChevronRight = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: "8",
  height: "14",
  viewBox: "0 0 8 14",
  fill: "none",
  style: {
    display: "block"
  },
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z",
    fill: color
  })]
});
const CloseLarge = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: "23",
  height: "23",
  viewBox: "0 0 23 23",
  fill: "none",
  style: {
    display: "block"
  },
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5ZM23 11.5C23 17.8513 17.8513 23 11.5 23C5.14873 23 0 17.8513 0 11.5C0 5.14873 5.14873 0 11.5 0C17.8513 0 23 5.14873 23 11.5ZM8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.0858 11.5L7.29289 14.2929C6.90237 14.6834 6.90237 15.3166 7.29289 15.7071C7.68342 16.0976 8.31658 16.0976 8.70711 15.7071L11.5 12.9142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.9142 11.5L15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289L11.5 10.0858L8.70711 7.29289Z",
    fill: color
  })]
});
const Content$2 = ({
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  fill: "none",
  height: "7",
  viewBox: "0 0 22 7",
  width: "22",
  style: {
    display: "block"
  },
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.0908203 3.5C0.0908203 1.61721 1.61712 0.0909119 3.49991 0.0909119C5.3827 0.0909119 6.909 1.61721 6.909 3.5C6.909 5.38279 5.3827 6.90909 3.49991 6.90909C1.61712 6.90909 0.0908203 5.38279 0.0908203 3.5ZM9.63623 2.13638C9.63623 1.75982 9.94149 1.45456 10.318 1.45456H21.2271C21.6037 1.45456 21.909 1.75982 21.909 2.13638C21.909 2.51294 21.6037 2.8182 21.2271 2.8182H10.318C9.94149 2.8182 9.63623 2.51294 9.63623 2.13638ZM10.318 4.18182C9.94149 4.18182 9.63623 4.48708 9.63623 4.86364C9.63623 5.2402 9.94149 5.54546 10.318 5.54546H15.7726C16.1492 5.54546 16.4544 5.2402 16.4544 4.86364C16.4544 4.48708 16.1492 4.18182 15.7726 4.18182H10.318Z",
    fill: color
  })]
});
const DragHandle = ({
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  width: "8",
  height: "13",
  viewBox: "0 0 8 13",
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3ZM1.5 8C2.32843 8 3 7.32843 3 6.5C3 5.67157 2.32843 5 1.5 5C0.671573 5 0 5.67157 0 6.5C0 7.32843 0.671573 8 1.5 8ZM3 11.5C3 12.3284 2.32843 13 1.5 13C0.671573 13 0 12.3284 0 11.5C0 10.6716 0.671573 10 1.5 10C2.32843 10 3 10.6716 3 11.5ZM6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8ZM8 1.5C8 2.32843 7.32843 3 6.5 3C5.67157 3 5 2.32843 5 1.5C5 0.671573 5.67157 0 6.5 0C7.32843 0 8 0.671573 8 1.5ZM6.5 13C7.32843 13 8 12.3284 8 11.5C8 10.6716 7.32843 10 6.5 10C5.67157 10 5 10.6716 5 11.5C5 12.3284 5.67157 13 6.5 13Z",
    fill: color
  })]
});
const Eye = ({
  className = [],
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: "blt-icon",
  fill: "none",
  height: "12",
  width: "17",
  viewBox: "0 0 19 13",
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.6766 5.45083C18.1726 6.07204 18.1726 6.92796 17.6766 7.54917C16.2789 9.29961 13.1436 12.6259 9.49998 12.6259C5.85633 12.6259 2.72104 9.29961 1.32337 7.54917C0.827351 6.92796 0.827352 6.07204 1.32337 5.45083C2.72104 3.70039 5.85633 0.374115 9.49998 0.374115C13.1436 0.374115 16.2789 3.70039 17.6766 5.45083ZM13.741 6.5C13.741 8.84224 11.8422 10.741 9.49998 10.741C7.15774 10.741 5.25898 8.84224 5.25898 6.5C5.25898 4.15776 7.15774 2.259 9.49998 2.259C11.8422 2.259 13.741 4.15776 13.741 6.5ZM9.50001 8.85611C10.8013 8.85611 11.8561 7.80124 11.8561 6.5C11.8561 5.19875 10.8013 4.14389 9.50001 4.14389C8.19877 4.14389 7.1439 5.19875 7.1439 6.5C7.1439 7.80124 8.19877 8.85611 9.50001 8.85611Z",
    fill: color
  })]
});
const Filter = ({
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: "blt-icon",
  height: "15",
  width: "17",
  viewBox: "0 0 17 15",
  style: {
    display: "block",
    marginTop: -1
  },
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.73077 0.96152C4.73077 0.611031 4.44664 0.326904 4.09615 0.326904C3.74567 0.326904 3.46154 0.611031 3.46154 0.96152V4.34614C3.46154 4.69662 3.74567 4.98075 4.09615 4.98075C4.44664 4.98075 4.73077 4.69662 4.73077 4.34614V0.96152ZM1.13462 2.01921H2.82692V3.28844H1.13462C0.784127 3.28844 0.5 3.00432 0.5 2.65383C0.5 2.30334 0.784127 2.01921 1.13462 2.01921ZM16.3654 3.28844H5.36539V2.01921H16.3654C16.7159 2.01921 17 2.30334 17 2.65383C17 3.00432 16.7159 3.28844 16.3654 3.28844ZM8.96154 10.9038C8.96154 10.5533 8.67741 10.2692 8.32692 10.2692C7.97644 10.2692 7.69231 10.5533 7.69231 10.9038V14.2884C7.69231 14.6389 7.97644 14.9231 8.32692 14.9231C8.67741 14.9231 8.96154 14.6389 8.96154 14.2884V10.9038ZM7.05769 11.9615V13.2308H1.13462C0.784127 13.2308 0.5 12.9466 0.5 12.5961C0.5 12.2456 0.784127 11.9615 1.13462 11.9615H7.05769ZM16.3654 13.2308H9.59615V11.9615H16.3654C16.7159 11.9615 17 12.2456 17 12.5961C17 12.9466 16.7159 13.2308 16.3654 13.2308ZM13.4038 5.19229C13.0534 5.19229 12.7692 5.47642 12.7692 5.8269V9.21152C12.7692 9.56201 13.0534 9.84614 13.4038 9.84614C13.7543 9.84614 14.0385 9.56201 14.0385 9.21152V5.8269C14.0385 5.47642 13.7543 5.19229 13.4038 5.19229ZM14.6731 6.8846H16.3654C16.7159 6.8846 17 7.16872 17 7.51921C17 7.8697 16.7159 8.15383 16.3654 8.15383H14.6731V6.8846ZM12.1346 8.15383H1.13462C0.784127 8.15383 0.5 7.8697 0.5 7.51921C0.5 7.16872 0.784127 6.8846 1.13462 6.8846H12.1346V8.15383Z",
    fill: color
  })]
});
const More = ({
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: "blt-icon",
  fill: "none",
  height: "6",
  width: "26",
  viewBox: "0 0 26 6",
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 3C6 4.65686 4.65686 6 3 6C1.34314 6 0 4.65686 0 3C0 1.34314 1.34314 0 3 0C4.65686 0 6 1.34314 6 3ZM16 3C16 4.65686 14.6569 6 13 6C11.3431 6 10 4.65686 10 3C10 1.34314 11.3431 0 13 0C14.6569 0 16 1.34314 16 3ZM23 6C24.6569 6 26 4.65686 26 3C26 1.34314 24.6569 0 23 0C21.3431 0 20 1.34314 20 3C20 4.65686 21.3431 6 23 6Z",
    fill: color
  })]
});
const NoImage = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: "66",
  height: "66",
  viewBox: "0 0 66 66",
  fill: "none",
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 0C1.79086 0 0 1.79086 0 4V62C0 64.2091 1.79086 66 4 66H62C64.2091 66 66 64.2091 66 62V4C66 1.79086 64.2091 0 62 0H4ZM2 4C2 2.89543 2.89543 2 4 2H62C63.1046 2 64 2.89543 64 4V62C64 63.1046 63.1046 64 62 64H4C2.89543 64 2 63.1046 2 62V4ZM44.7071 23.7071C45.0976 23.3166 45.0976 22.6834 44.7071 22.2929C44.3166 21.9024 43.6834 21.9024 43.2929 22.2929L22.2929 43.2929C21.9024 43.6834 21.9024 44.3166 22.2929 44.7071C22.6834 45.0976 23.3166 45.0976 23.7071 44.7071L44.7071 23.7071Z",
    fill: color
  })]
});
const Pencil = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  fill: "none",
  height: "15",
  width: "15",
  viewBox: "0 0 15 15",
  style: {
    display: "block"
  },
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.9754 0.53124L10.3851 1.1215L10.3707 1.13573L10.0166 1.48989L10.0084 1.49825L9.77043 1.73619C9.769 1.73761 9.76758 1.73903 9.76615 1.74046L9.41199 2.09462C9.41115 2.09546 9.41031 2.09631 9.40947 2.09716L1.20666 10.3C0.95346 10.5532 0.78087 10.8756 0.710644 11.2268L0 14.78L3.55322 14.0694C3.90435 13.9991 4.22684 13.8265 4.48004 13.5733L12.6854 5.368L13.0395 5.01384L14.2488 3.80462C14.9571 3.0963 14.9571 1.94788 14.2488 1.23956L13.5404 0.531241C12.8321 -0.177079 11.6837 -0.177082 10.9754 0.53124ZM11.8278 4.51552C11.8287 4.51467 11.8295 4.51382 11.8303 4.51298L12.1845 4.15882C12.4206 3.92271 12.4206 3.5399 12.1845 3.3038L11.4762 2.59548C11.2409 2.36019 10.86 2.35937 10.6237 2.59301C10.6228 2.59383 10.622 2.59465 10.6212 2.59548L10.267 2.94964L2.06168 11.155C1.97728 11.2394 1.91975 11.3469 1.89634 11.4639L1.54141 13.2386L3.31608 12.8837C3.43313 12.8602 3.54062 12.8027 3.62502 12.7183L11.8278 4.51552Z",
    fill: color
  })]
});
const Plus = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  style: {
    display: "block"
  },
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.5962 3.40381C15.1346 5.94221 15.1346 10.0578 12.5962 12.5962C10.0578 15.1346 5.94221 15.1346 3.40381 12.5962C0.865398 10.0578 0.865398 5.94221 3.40381 3.40381C5.94221 0.865398 10.0578 0.865398 12.5962 3.40381ZM13.6569 2.34315C16.781 5.46734 16.781 10.5327 13.6569 13.6569C10.5327 16.781 5.46734 16.781 2.34315 13.6569C-0.781049 10.5327 -0.781049 5.46734 2.34315 2.34315C5.46734 -0.781049 10.5327 -0.781049 13.6569 2.34315ZM8.79013 4.59682C8.79013 4.1826 8.45434 3.84682 8.04013 3.84682C7.62592 3.84682 7.29013 4.1826 7.29013 4.59682V7.29012H4.59683C4.18261 7.29012 3.84683 7.62591 3.84683 8.04012C3.84683 8.45433 4.18261 8.79012 4.59683 8.79012L7.29013 8.79012V11.4834C7.29013 11.8976 7.62592 12.2334 8.04013 12.2334C8.45434 12.2334 8.79013 11.8976 8.79013 11.4834V8.79012L11.4834 8.79012C11.8976 8.79012 12.2334 8.45433 12.2334 8.04012C12.2334 7.62591 11.8976 7.29012 11.4834 7.29012H8.79013V4.59682Z",
    fill: color
  })]
});
const Profile = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.1992 11.2543C10.767 8.58196 5.23304 8.58186 1.80086 11.2543C1.28942 10.2821 1 9.17484 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 9.17482 14.7106 10.282 14.1992 11.2543ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.8913 2.5C6.57062 2.5 5.5 3.57062 5.5 4.8913V5.5C5.5 6.88071 6.61929 8 8 8C9.38071 8 10.5 6.88071 10.5 5.5V4.8913C10.5 3.57062 9.42938 2.5 8.1087 2.5H7.8913Z",
    fill: color
  })]
});
const Redo = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: "17",
  height: "12",
  viewBox: "0 0 17 12",
  fill: "none",
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.959 0.469671C10.6661 0.762564 10.6661 1.23744 10.959 1.53033L13.8787 4.44999H4.68935C2.61828 4.44999 0.939338 6.12893 0.939338 8.2C0.939338 10.2711 2.61828 11.95 4.68935 11.95H5.68934C6.10355 11.95 6.43934 11.6142 6.43934 11.2C6.43934 10.7858 6.10355 10.45 5.68934 10.45H4.68935C3.4467 10.45 2.43934 9.44265 2.43934 8.2C2.43934 6.95735 3.4467 5.94999 4.68935 5.94999H13.8787L10.959 8.86966C10.6661 9.16255 10.6661 9.63743 10.959 9.93032C11.2519 10.2232 11.7268 10.2232 12.0197 9.93032L16.75 5.19999L12.0197 0.469669C11.7268 0.176776 11.2519 0.176777 10.959 0.469671Z",
    fill: color
  })]
});
const Search = ({
  className = [],
  size = 16,
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: size,
  height: 0.9411764706 * size,
  viewBox: "0 0 17 16",
  fill: "none",
  style: {
    display: "block"
  },
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.2296 6.86479C12.2296 9.82768 9.82768 12.2296 6.86479 12.2296C3.9019 12.2296 1.5 9.82768 1.5 6.86479C1.5 3.9019 3.9019 1.5 6.86479 1.5C9.82768 1.5 12.2296 3.9019 12.2296 6.86479ZM11.446 11.9774C10.2309 13.0669 8.62526 13.7296 6.86479 13.7296C3.07347 13.7296 0 10.6561 0 6.86479C0 3.07347 3.07347 0 6.86479 0C10.6561 0 13.7296 3.07347 13.7296 6.86479C13.7296 8.27872 13.3021 9.59281 12.5693 10.6849C12.7655 10.7188 12.9535 10.8116 13.105 10.963L15.5741 13.4321C15.9646 13.8227 15.9646 14.4558 15.5741 14.8464C15.1836 15.2369 14.5504 15.2369 14.1599 14.8464L11.6908 12.3773C11.5747 12.2612 11.4931 12.1236 11.446 11.9774Z",
    fill: color
  })]
});
const SortDown = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: "17",
  height: "13",
  viewBox: "0 0 17 13",
  fill: "none",
  style: {
    display: "block"
  },
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4.5 1L4.5 12M4.5 12L1 8.55556M4.5 12L8 8.55556M8.5 1L15.5 1M10 4.5L15.5 4.5M11.5 8L15.5 8M13 11.5L15.5 11.5",
    stroke: color
  })]
});
const SortUp = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: "17",
  height: "13",
  viewBox: "0 0 17 13",
  fill: "none",
  style: {
    display: "block"
  },
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4.5 12L4.5 1M4.5 1L1 4.44444M4.5 1L8 4.44444M8.5 12L15.5 12M10 8.5L15.5 8.5M11.5 5L15.5 5M13 1.5L15.5 1.5",
    stroke: color
  })]
});
const Square = ({
  className = [],
  size = 20,
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  fill: "none",
  height: size,
  style: {
    display: "block"
  },
  width: size,
  viewBox: "0 0 12 12",
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.2 1.5H4.8C3.93517 1.5 3.37676 1.50117 2.95175 1.53589C2.54426 1.56918 2.39318 1.6257 2.31901 1.66349C2.03677 1.8073 1.8073 2.03677 1.66349 2.31901C1.6257 2.39318 1.56918 2.54426 1.53589 2.95175C1.50117 3.37676 1.5 3.93517 1.5 4.8V7.2C1.5 8.06483 1.50117 8.62324 1.53589 9.04825C1.56918 9.45574 1.6257 9.60682 1.66349 9.68099C1.8073 9.96323 2.03677 10.1927 2.31901 10.3365C2.39318 10.3743 2.54426 10.4308 2.95175 10.4641C3.37676 10.4988 3.93517 10.5 4.8 10.5H7.2C8.06483 10.5 8.62324 10.4988 9.04825 10.4641C9.45574 10.4308 9.60682 10.3743 9.68099 10.3365C9.96323 10.1927 10.1927 9.96323 10.3365 9.68099C10.3743 9.60682 10.4308 9.45574 10.4641 9.04825C10.4988 8.62324 10.5 8.06483 10.5 7.2V4.8C10.5 3.93517 10.4988 3.37676 10.4641 2.95175C10.4308 2.54426 10.3743 2.39318 10.3365 2.31901C10.1927 2.03677 9.96323 1.8073 9.68099 1.66349C9.60682 1.6257 9.45574 1.56918 9.04825 1.53589C8.62324 1.50117 8.06483 1.5 7.2 1.5ZM0.32698 1.63803C0 2.27976 0 3.11984 0 4.8V7.2C0 8.88016 0 9.72024 0.32698 10.362C0.614601 10.9265 1.07354 11.3854 1.63803 11.673C2.27976 12 3.11984 12 4.8 12H7.2C8.88016 12 9.72024 12 10.362 11.673C10.9265 11.3854 11.3854 10.9265 11.673 10.362C12 9.72024 12 8.88016 12 7.2V4.8C12 3.11984 12 2.27976 11.673 1.63803C11.3854 1.07354 10.9265 0.614601 10.362 0.32698C9.72024 0 8.88016 0 7.2 0H4.8C3.11984 0 2.27976 0 1.63803 0.32698C1.07354 0.614601 0.614601 1.07354 0.32698 1.63803Z",
    fill: color
  })]
});
const Trash = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  style: {
    display: "block"
  },
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.16816 1.6876C5.16816 0.776327 5.90689 0.0375977 6.81816 0.0375977H9.18179C10.0931 0.0375977 10.8318 0.776326 10.8318 1.6876V2.28488H14C14.359 2.28488 14.65 2.57589 14.65 2.93488C14.65 3.29386 14.359 3.58488 14 3.58488H1.99998C1.64099 3.58488 1.34998 3.29386 1.34998 2.93488C1.34998 2.57589 1.64099 2.28488 1.99998 2.28488H5.16816V1.6876ZM6.46816 2.28488H9.53179V1.6876C9.53179 1.4943 9.37509 1.3376 9.18179 1.3376H6.81816C6.62486 1.3376 6.46816 1.4943 6.46816 1.6876V2.28488ZM13.0406 4.19506C13.3989 4.2175 13.6712 4.52615 13.6487 4.88443L13.1298 13.1657C13.0423 14.5622 11.8842 15.65 10.485 15.65H5.54883C4.13135 15.65 2.96486 14.5346 2.90148 13.1185L2.53244 4.87284C2.51639 4.51422 2.79411 4.21048 3.15273 4.19443C3.51136 4.17838 3.81509 4.45609 3.83114 4.81472L4.20018 13.0604C4.23247 13.7818 4.82672 14.35 5.54883 14.35H10.485C11.1978 14.35 11.7878 13.7959 11.8324 13.0845L12.3512 4.80314C12.3737 4.44485 12.6823 4.17261 13.0406 4.19506ZM6.49998 4.85003C6.85896 4.85003 7.14998 5.14105 7.14998 5.50003V12.5001C7.14998 12.8591 6.85896 13.1501 6.49998 13.1501C6.14099 13.1501 5.84998 12.8591 5.84998 12.5001V5.50003C5.84998 5.14105 6.14099 4.85003 6.49998 4.85003ZM9.49998 4.8501C9.85896 4.8501 10.15 5.14111 10.15 5.5001V12.5002C10.15 12.8591 9.85896 13.1502 9.49998 13.1502C9.14099 13.1502 8.84998 12.8591 8.84998 12.5002V5.5001C8.84998 5.14111 9.14099 4.8501 9.49998 4.8501Z",
    fill: color
  })]
});
const Undo = ({
  className = [],
  size = "small",
  color = "black",
  title = false
}) => /* @__PURE__ */ jsxs("svg", {
  className: classNames("blt-icon", className),
  width: "17",
  height: "12",
  viewBox: "0 0 17 12",
  fill: "none",
  children: [title && /* @__PURE__ */ jsx("title", {
    children: title
  }), /* @__PURE__ */ jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.73032 0.469671C7.02322 0.762564 7.02322 1.23744 6.73032 1.53033L3.81066 4.44999H13C15.0711 4.44999 16.75 6.12893 16.75 8.2C16.75 10.2711 15.0711 11.95 13 11.95H12C11.5858 11.95 11.25 11.6142 11.25 11.2C11.25 10.7858 11.5858 10.45 12 10.45H13C14.2426 10.45 15.25 9.44265 15.25 8.2C15.25 6.95735 14.2426 5.94999 13 5.94999H3.81065L6.73032 8.86966C7.02322 9.16255 7.02322 9.63743 6.73032 9.93032C6.43743 10.2232 5.96256 10.2232 5.66966 9.93032L0.939331 5.19999L5.66966 0.469669C5.96256 0.176776 6.43743 0.176777 6.73032 0.469671Z",
    fill: color
  })]
});
class Icon$1 extends React__default.Component {
}
__publicField(Icon$1, "ArrowDown", ArrowDown);
__publicField(Icon$1, "ArrowLeft", ArrowLeft);
__publicField(Icon$1, "ArrowRight", ArrowRight);
__publicField(Icon$1, "ArrowDetailedSmall", ArrowDetailedSmall);
__publicField(Icon$1, "Calendar", Calendar);
__publicField(Icon$1, "Checkmark", Checkmark);
__publicField(Icon$1, "ChevronLeft", ChevronLeft);
__publicField(Icon$1, "ChevronRight", ChevronRight);
__publicField(Icon$1, "CloseLarge", CloseLarge);
__publicField(Icon$1, "Content", Content$2);
__publicField(Icon$1, "DragHandle", DragHandle);
__publicField(Icon$1, "Eye", Eye);
__publicField(Icon$1, "Filter", Filter);
__publicField(Icon$1, "More", More);
__publicField(Icon$1, "NoImage", NoImage);
__publicField(Icon$1, "Pencil", Pencil);
__publicField(Icon$1, "Plus", Plus);
__publicField(Icon$1, "Profile", Profile);
__publicField(Icon$1, "Redo", Redo);
__publicField(Icon$1, "Search", Search);
__publicField(Icon$1, "SortDown", SortDown);
__publicField(Icon$1, "SortUp", SortUp);
__publicField(Icon$1, "Square", Square);
__publicField(Icon$1, "Trash", Trash);
__publicField(Icon$1, "Undo", Undo);
const Container$1 = styled("div", {
  display: "grid"
});
const GridContainer = ({
  children,
  columns = 3,
  css: css2 = {},
  gap = "$6"
}) => /* @__PURE__ */ jsx(Container$1, {
  css: __spreadValues({
    gridTemplateColumns: `repeat(1, 1fr)`,
    gridGap: gap,
    "@md": {
      gridTemplateColumns: `repeat(${columns > 4 ? Math.floor(columns / 2) : columns}, 1fr)`
    },
    "@lg": {
      gridTemplateColumns: `repeat(${columns}, 1fr)`
    }
  }, css2),
  children
});
const Item$3 = styled("div", {});
const GridItem = ({
  children,
  css: css2 = {}
}) => /* @__PURE__ */ jsx(Item$3, {
  css: css2,
  children
});
let Grid = {};
Grid.Container = GridContainer;
Grid.Item = GridItem;
const Item$2 = styled("div", {
  alignItems: "center",
  borderBottom: "1px solid $black300",
  display: "flex",
  fontSize: "$text400",
  fontWeight: 500,
  margin: 0,
  height: "$12",
  width: "$full",
  "&:last-child": {
    borderBottom: 0
  },
  "@md": {
    height: "$9"
  }
});
const Container = styled("div", {
  variants: {
    padded: {
      true: {
        [`& ${Item$2}`]: {
          paddingX: "$3"
        }
      }
    }
  }
});
const List = ({
  children,
  css: css2 = {},
  padded = false
}) => {
  return /* @__PURE__ */ jsx(Container, {
    css: css2,
    padded,
    children
  });
};
const ListItem = ({
  children,
  css: css2,
  dir = "ltr"
}) => /* @__PURE__ */ jsx(Item$2, {
  css: css2,
  dir,
  children
});
const Element$f = styled$1("div", {
  margin: "-10px -20px 0 -22px",
  padding: 64
});
const Page = ({
  children
}) => {
  return /* @__PURE__ */ jsx(Element$f, {
    children
  });
};
const Transition = ({
  children,
  enter = "all .1s ease",
  enterFrom = {
    opacity: 0
  },
  enterTo = {
    opacity: 1
  },
  leaveTo = {
    opacity: 0
  },
  leave = "all .1s ease",
  show = false,
  styles
}) => {
  const [css2, setCSS] = useState(__spreadProps(__spreadValues({}, enterFrom), {
    transition: enter
  }));
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
    if (!show) {
      setCSS(__spreadProps(__spreadValues(__spreadValues({}, css2), leaveTo), {
        transition: leave
      }));
    } else {
      setVisible(true);
      setTimeout(() => {
        setCSS(__spreadProps(__spreadValues(__spreadValues({}, css2), enterTo), {
          transition: enter
        }));
      }, 1);
    }
  }, [show]);
  return /* @__PURE__ */ jsx("div", {
    style: __spreadProps(__spreadValues({}, styles), {
      opacity: show ? 1 : 0,
      transition: show ? enter : leave
    }),
    onTransitionEnd: () => {
      if (!show) {
        setVisible(false);
      }
    },
    ref,
    children: children({
      css: css2,
      show: visible
    })
  });
};
const PopoverElement = styled(Popover, {
  position: "relative"
});
const PopoverPanel = styled(Popover.Panel, {
  backgroundColor: "$white",
  borderRadius: "$lg",
  boxShadow: "$shallow",
  position: "absolute",
  padding: "$4",
  left: 0,
  top: "$2",
  width: "100%"
});
const PopoverButton = styled(Popover.Button, buttonStyles);
const PopoverWrapper = ({
  button = null,
  buttonVariant = "normal",
  buttonSize = "normal",
  css: css2 = {},
  origin = "top-left",
  children = null
}) => {
  return /* @__PURE__ */ jsx(PopoverElement, {
    css: css2,
    children: ({
      open
    }) => {
      return /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx(PopoverButton, {
          size: buttonSize,
          variant: buttonVariant,
          children: button
        }), /* @__PURE__ */ jsx(Transition, {
          show: open,
          styles: {
            position: "relative"
          },
          enter: "all .3s ease",
          leave: "all .2s ease",
          enterFrom: {
            opacity: 0,
            transform: "translateY(4px) scale(.75)",
            top: "100%",
            width: "100%",
            zIndex: 100,
            transformOrigin: Format.Map(origin, {
              "center": "50% 50%",
              "left": "0 50%",
              "right": "100% 50%",
              "bottom": "50% 100%",
              "top": "50% 0",
              "bottom-left": "0% 100%",
              "top-left": "0 0",
              "bottom-right": "100% 10%",
              "top-right": "100% 0"
            })
          },
          enterTo: {
            opacity: 1,
            transform: "translateY(0) scale(1)"
          },
          leaveTo: {
            opacity: 0,
            transform: "translateY(4px) scale(.75)"
          },
          children: ({
            css: css22,
            show
          }) => /* @__PURE__ */ jsx(PopoverPanel, {
            css: css22,
            children
          })
        })]
      });
    }
  });
};
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var r, B = r || (r = {});
B.Pop = "POP";
B.Push = "PUSH";
B.Replace = "REPLACE";
var C = function(b) {
  return b;
};
function E(b) {
  b.preventDefault();
  b.returnValue = "";
}
function F() {
  var b = [];
  return {
    get length() {
      return b.length;
    },
    push: function(h) {
      b.push(h);
      return function() {
        b = b.filter(function(k) {
          return k !== h;
        });
      };
    },
    call: function(h) {
      b.forEach(function(k) {
        return k && k(h);
      });
    }
  };
}
function H() {
  return Math.random().toString(36).substr(2, 8);
}
function I(b) {
  var h = b.pathname, k = b.search;
  b = b.hash;
  return (h === void 0 ? "/" : h) + (k === void 0 ? "" : k) + (b === void 0 ? "" : b);
}
function J(b) {
  var h = {};
  if (b) {
    var k = b.indexOf("#");
    0 <= k && (h.hash = b.substr(k), b = b.substr(0, k));
    k = b.indexOf("?");
    0 <= k && (h.search = b.substr(k), b = b.substr(0, k));
    b && (h.pathname = b);
  }
  return h;
}
function createHashHistory(b) {
  function h() {
    var a = J(m2.location.hash.substr(1)), e = a.pathname, l = a.search;
    a = a.hash;
    var g2 = u.state || {};
    return [g2.idx, C({
      pathname: e === void 0 ? "/" : e,
      search: l === void 0 ? "" : l,
      hash: a === void 0 ? "" : a,
      state: g2.usr || null,
      key: g2.key || "default"
    })];
  }
  function k() {
    if (t)
      c.call(t), t = null;
    else {
      var a = r.Pop, e = h(), l = e[0];
      e = e[1];
      if (c.length) {
        if (l != null) {
          var g2 = q2 - l;
          g2 && (t = {
            action: a,
            location: e,
            retry: function() {
              p2(-1 * g2);
            }
          }, p2(g2));
        }
      } else
        A(a);
    }
  }
  function x(a) {
    var e = document.querySelector("base"), l = "";
    e && e.getAttribute("href") && (e = m2.location.href, l = e.indexOf("#"), l = l === -1 ? e : e.slice(0, l));
    return l + "#" + (typeof a === "string" ? a : I(a));
  }
  function z(a, e) {
    e === void 0 && (e = null);
    return C(_extends$1({
      pathname: d.pathname,
      hash: "",
      search: ""
    }, typeof a === "string" ? J(a) : a, {
      state: e,
      key: H()
    }));
  }
  function A(a) {
    v = a;
    a = h();
    q2 = a[0];
    d = a[1];
    f2.call({
      action: v,
      location: d
    });
  }
  function y(a, e) {
    function l() {
      y(a, e);
    }
    var g2 = r.Push, n2 = z(a, e);
    if (!c.length || (c.call({
      action: g2,
      location: n2,
      retry: l
    }), false)) {
      var G = [{
        usr: n2.state,
        key: n2.key,
        idx: q2 + 1
      }, x(n2)];
      n2 = G[0];
      G = G[1];
      try {
        u.pushState(n2, "", G);
      } catch (K) {
        m2.location.assign(G);
      }
      A(g2);
    }
  }
  function w(a, e) {
    function l() {
      w(a, e);
    }
    var g2 = r.Replace, n2 = z(a, e);
    c.length && (c.call({
      action: g2,
      location: n2,
      retry: l
    }), 1) || (n2 = [{
      usr: n2.state,
      key: n2.key,
      idx: q2
    }, x(n2)], u.replaceState(n2[0], "", n2[1]), A(g2));
  }
  function p2(a) {
    u.go(a);
  }
  b === void 0 && (b = {});
  b = b.window;
  var m2 = b === void 0 ? document.defaultView : b, u = m2.history, t = null;
  m2.addEventListener("popstate", k);
  m2.addEventListener("hashchange", function() {
    var a = h()[1];
    I(a) !== I(d) && k();
  });
  var v = r.Pop;
  b = h();
  var q2 = b[0], d = b[1], f2 = F(), c = F();
  q2 == null && (q2 = 0, u.replaceState(_extends$1({}, u.state, {
    idx: q2
  }), ""));
  return {
    get action() {
      return v;
    },
    get location() {
      return d;
    },
    createHref: x,
    push: y,
    replace: w,
    go: p2,
    back: function() {
      p2(-1);
    },
    forward: function() {
      p2(1);
    },
    listen: function(a) {
      return f2.push(a);
    },
    block: function(a) {
      var e = c.push(a);
      c.length === 1 && m2.addEventListener("beforeunload", E);
      return function() {
        e();
        c.length || m2.removeEventListener("beforeunload", E);
      };
    }
  };
}
/**
 * React Router DOM v6.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
function HashRouter(_ref2) {
  let {
    basename,
    children,
    window: window2
  } = _ref2;
  let historyRef = useRef();
  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window: window2
    });
  }
  let history = historyRef.current;
  let [state, setState] = useState({
    action: history.action,
    location: history.location
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
const Link = /* @__PURE__ */ forwardRef(function LinkWithRef(_ref3, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to
  } = _ref3, rest = _objectWithoutPropertiesLoose(_ref3, _excluded);
  let href = useHref(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }
  return /* @__PURE__ */ createElement("a", _extends({}, rest, {
    href,
    onClick: handleClick,
    ref,
    target
  }));
});
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to);
  return useCallback((event) => {
    if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
      event.preventDefault();
      let replace = !!replaceProp || I(location) === I(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}
const Element$e = styled("div", {
  minHeight: "100vh",
  margin: "-10px -20px 0 -22px",
  position: "relative"
});
const ScreenContainer = ({
  children,
  layout = "sidebar"
}) => {
  return /* @__PURE__ */ jsx(HashRouter, {
    children: /* @__PURE__ */ jsx(Element$e, {
      children
    })
  });
};
const Icon = styled("span", {
  color: "$black500",
  opacity: 0.6
});
const ElementWrapper = styled("div", {
  "& a": {
    textDecoration: "none"
  }
});
const Element$d = styled("span", {
  alignItems: "center",
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "$md",
  display: "flex",
  gap: "$3",
  height: "$11",
  marginX: "-$4",
  marginY: "$1",
  paddingX: "$4",
  textAlign: "left",
  transition: "all .15s ease",
  variants: {
    active: {
      true: {
        backgroundColor: "$black100",
        color: "$primary400",
        [`& ${Icon}`]: {
          color: "$primary400",
          opacity: 1
        },
        "&:hover": {
          backgroundColor: "$black100"
        }
      },
      false: {
        color: "$black900"
      }
    }
  },
  "&:hover": {
    backgroundColor: "$black310"
  }
});
const Item$1 = ({
  children,
  href = "#",
  icon = false
}) => {
  const location = useLocation();
  return /* @__PURE__ */ jsx(ElementWrapper, {
    children: /* @__PURE__ */ jsx(Link, {
      to: href,
      children: /* @__PURE__ */ jsxs(Element$d, {
        active: location.pathname === href,
        children: [icon && /* @__PURE__ */ jsx(Icon, {
          children: /* @__PURE__ */ jsx(Dashicon, {
            variant: icon
          })
        }), /* @__PURE__ */ jsx(Text, {
          size: "label",
          children
        })]
      })
    })
  });
};
const Footer = styled("nav", {
  marginTop: "auto"
});
const Navigation$1 = styled("nav", {
  display: "flex",
  flexDirection: "column",
  left: 0,
  padding: "$16 $10 $8",
  position: "absolute",
  height: "100%",
  top: 0,
  width: "$80",
  "&:before": {
    backgroundColor: "$black300",
    content: "",
    opacity: 0.8,
    position: "absolute",
    inset: "$0",
    zIndex: -1
  }
});
const ScreensNavigation = ({
  children,
  footer = null,
  title = false
}) => {
  return /* @__PURE__ */ jsxs(Navigation$1, {
    children: [title && /* @__PURE__ */ jsx(Text, {
      size: "subheading",
      weight: "bold",
      css: {
        paddingBottom: "$7"
      },
      children: title
    }), children, footer && /* @__PURE__ */ jsx(Footer, {
      children: footer
    })]
  });
};
const Element$c = styled("div", {
  overflow: "scroll",
  padding: "$14"
});
const Content$1 = styled("div", {
  paddingTop: "$14"
});
const ScreensPage = ({
  actions = null,
  children = null,
  title = false
}) => /* @__PURE__ */ jsxs(Element$c, {
  children: [/* @__PURE__ */ jsxs(Stack, {
    children: [title && /* @__PURE__ */ jsx(Text, {
      size: "title",
      children: title
    }), actions && /* @__PURE__ */ jsx(Stack, {
      gap: 12,
      css: {
        marginLeft: "auto"
      },
      children: actions.map((action) => action)
    })]
  }), /* @__PURE__ */ jsx(Content$1, {
    children
  })]
});
const Element$b = styled("div", {
  position: "relative",
  left: "$80",
  width: "calc(100% - $80)"
});
const ScreensViews = ({
  children
}) => {
  return /* @__PURE__ */ jsx(Element$b, {
    children: /* @__PURE__ */ jsx(Routes, {
      children: [].concat(children).map((c, index) => {
        console.log(c);
        return /* @__PURE__ */ jsx(Route, {
          exact: true,
          path: c.props.path,
          element: /* @__PURE__ */ jsx(ScreensPage, {
            title: c.props.title,
            actions: c.props.actions,
            children: c.props.children
          })
        }, index);
      })
    })
  });
};
const Screens = {
  Container: ScreenContainer,
  Item: Item$1,
  Navigation: ScreensNavigation,
  Page: ScreensPage,
  Views: ScreensViews
};
const Element$a = styled("div", {
  display: "flex",
  variants: {
    direction: {
      horizontal: {
        flexDirection: "row"
      },
      vertical: {
        flexDirection: "column"
      }
    },
    align: {}
  },
  compoundVariants: [{
    direction: "horizontal",
    align: "center",
    css: {
      alignItems: "center"
    }
  }, {
    direction: "horizontal",
    align: "leading",
    css: {
      alignItems: "flex-start"
    }
  }, {
    direction: "horizontal",
    align: "trailing",
    css: {
      alignItems: "flex-end"
    }
  }, {
    direction: "vertical",
    align: "center",
    css: {
      justifyContent: "center"
    }
  }, {
    direction: "vertical",
    align: "leading",
    css: {
      justifyContent: "flex-start"
    }
  }, {
    direction: "vertical",
    align: "trailing",
    css: {
      justifyContent: "flex-end"
    }
  }],
  defaultVariants: {
    align: "center"
  }
});
const Stack = ({
  align = "leading",
  children,
  css: css2 = {},
  direction = "horizontal",
  gap = 0
}) => /* @__PURE__ */ jsx(Element$a, {
  css: __spreadValues({
    gap
  }, css2),
  align,
  direction,
  children
});
const TabContext = React__default.createContext({});
const reducer$2 = (state, action) => {
  switch (action.type) {
    case "ADD_TAB":
      return __spreadProps(__spreadValues({}, state), {
        tabs: state.tabs.concat(action.tab)
      });
    case "ADD_PANEL":
      return __spreadProps(__spreadValues({}, state), {
        panels: state.panels.concat(action.panel)
      });
    case "CHANGE_TAB":
      return __spreadProps(__spreadValues({}, state), {
        active: action.index
      });
    default:
      throw new Error();
  }
};
const TabContainer = ({
  children
}) => {
  let [state, dispatch] = useReducer(reducer$2, {
    active: 0,
    tabs: [],
    panels: []
  });
  let providerBag = useMemo(() => [state, dispatch], [state, dispatch]);
  return /* @__PURE__ */ jsx(TabContext.Provider, {
    value: providerBag,
    children
  });
};
const Navigation = styled("ul", {
  borderBottom: "1px solid $black300",
  display: "flex"
});
const Item = styled("li", {
  alignItems: "center",
  border: "1px solid $black310",
  display: "flex",
  height: "$9",
  marginBottom: -1,
  marginRight: -1,
  paddingX: "$4-5",
  "&:first-child": {
    borderRadius: "$md 0 0 0"
  },
  "&:last-child": {
    borderRadius: "0 $md 0 0"
  },
  variants: {
    active: {
      true: {
        backgroundColor: "$black300"
      }
    }
  }
});
const Tab = ({
  children
}) => {
  let id = `leaf-tabs-tab-${Math.random()}`;
  const [{
    active,
    tabs
  }, dispatch] = useContext(TabContext);
  const tabRef = useRef(null);
  useEffect(() => {
    dispatch({
      type: "ADD_TAB",
      tab: tabRef
    });
  }, [tabRef]);
  return /* @__PURE__ */ jsx(Item, {
    id,
    ref: tabRef,
    active: tabs.indexOf(tabRef) === active,
    onClick: (e) => {
      dispatch({
        type: "CHANGE_TAB",
        index: tabs.indexOf(tabRef)
      });
    },
    children: /* @__PURE__ */ jsx(Text, {
      size: "label",
      children
    })
  });
};
const TabNavigation = ({
  children
}) => {
  return /* @__PURE__ */ jsx(Navigation, {
    children
  });
};
const TabPanels = ({
  children
}) => {
  return /* @__PURE__ */ jsx("div", {
    children
  });
};
const Panel = styled("div", {
  variants: {
    active: {
      true: {
        display: "block"
      },
      false: {
        display: "none"
      }
    }
  }
});
const TabPanel = ({
  children
}) => {
  let id = `leaf-tabs-panel-${Math.random()}`;
  const [{
    active,
    panels
  }, dispatch] = useContext(TabContext);
  const panelRef = useRef(null);
  useEffect(() => {
    dispatch({
      type: "ADD_PANEL",
      panel: panelRef
    });
  }, [panelRef]);
  return /* @__PURE__ */ jsx(Panel, {
    id,
    ref: panelRef,
    active: panels.indexOf(panelRef) === active,
    children
  });
};
const Text = styled("span", {
  display: "block",
  fontFamily: "$body",
  variants: {
    size: {
      title: {
        fontSize: "$text900",
        fontWeight: 700,
        letterSpacing: "$snug",
        lineHeight: "$none"
      },
      heading: {
        fontSize: "$text800",
        fontWeight: 700,
        letterSpacing: "$snug",
        lineHeight: "$tight"
      },
      subheading: {
        fontSize: "$text700",
        fontWeight: 500,
        lineHeight: "$tight"
      },
      body: {
        fontSize: "$text500",
        fontWeight: 400,
        lineHeight: "$snug"
      },
      label: {
        fontSize: "$text300",
        fontWeight: 500
      },
      footnote: {
        fontSize: "$text200",
        fontWeight: 500
      }
    },
    weight: {
      black: {
        fontWeight: 900
      },
      bold: {
        fontWeight: 700
      },
      semibold: {
        fontWeight: 600
      },
      medium: {
        fontWeight: 500
      },
      regular: {
        fontWeight: 400
      },
      light: {
        fontWeight: 300
      }
    },
    leading: {
      none: {
        lineHeight: "$none"
      },
      tight: {
        lineHeight: "$tight"
      },
      snug: {
        lineHeight: "$snug"
      },
      normal: {
        lineHeight: "$normal"
      },
      loose: {
        lineHeight: "$loose"
      },
      looser: {
        lineHeight: "$looser"
      }
    },
    tracking: {
      none: {
        letterSpacing: "$none"
      },
      tight: {
        letterSpacing: "$tight"
      },
      snug: {
        letterSpacing: "$snug"
      },
      loose: {
        letterSpacing: "$loose"
      },
      wide: {
        letterSpacing: "$wide"
      },
      wider: {
        letterSpacing: "$wider"
      }
    }
  }
});
const Label$1 = styled("label", {
  alignItems: "center",
  cursor: "pointer",
  display: "inline-flex",
  gap: "$2",
  transition: "colors .1s ease"
});
const Button$1 = styled("span", {
  appearance: "none",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  display: "grid",
  alignItems: "center",
  margin: 0,
  padding: 0,
  position: "relative",
  transform: "translate3d(0,0,0)"
});
const CheckboxState = styled("div", {
  transition: "opacity 125ms ease",
  gridArea: "1/1/1/1",
  variants: {
    visible: {
      true: {
        opacity: 1
      },
      false: {
        opacity: 0
      }
    }
  }
});
const Input$2 = styled("input", {
  appearance: "none",
  background: "transparent",
  border: "none",
  height: "$full",
  left: 0,
  margin: 0,
  padding: 0,
  position: "absolute",
  top: 0,
  width: "$full"
});
const Checkbox = ({
  color = "#000",
  checked = false,
  dir = "ltr",
  label = false,
  name = "",
  onClick = void 0,
  selectedColor = "#000",
  size = 12,
  value = ""
}) => /* @__PURE__ */ jsxs(Label$1, {
  dir,
  children: [/* @__PURE__ */ jsxs(Button$1, {
    onClick: () => {
      onClick && onClick(!checked);
    },
    css: {
      height: size + "px",
      width: size + "px"
    },
    children: [/* @__PURE__ */ jsx(CheckboxState, {
      visible: checked,
      children: /* @__PURE__ */ jsx(Checkmark, {
        color: selectedColor,
        size
      })
    }), /* @__PURE__ */ jsx(CheckboxState, {
      visible: !checked,
      children: /* @__PURE__ */ jsx(Square, {
        color,
        size
      })
    }), /* @__PURE__ */ jsx(CheckboxState, {
      visible: true,
      children: /* @__PURE__ */ jsx(Input$2, {
        type: "checkbox",
        onChange: () => {
          onClick && onClick(!checked);
        },
        name,
        value,
        checked
      })
    })]
  }), label && /* @__PURE__ */ jsx(Text, {
    dir,
    size: "label",
    weight: "regular",
    css: {
      cursor: "pointer"
    },
    children: label
  })]
});
const FormContext = React__default.createContext({});
const FormCheckbox = (props) => {
  const {
    name,
    value,
    checked = false
  } = props;
  const [{
    values,
    errors
  }, dispatch] = useContext(FormContext);
  useEffect(() => {
    dispatch({
      type: "SET_CHECKBOX",
      id: name,
      checked,
      value
    });
  }, [checked]);
  return /* @__PURE__ */ jsx(Checkbox, __spreadProps(__spreadValues({}, props), {
    onClick: (checked2) => {
      dispatch({
        type: "SET_CHECKBOX",
        id: name,
        checked: checked2,
        value
      });
    },
    invalid: get_1(errors, name, false),
    checked: get_1(values, name, []).includes(value)
  }));
};
const Element$9 = styled$1("fieldset", {
  border: "none",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "$2",
  padding: "$2 0",
  position: "relative",
  transition: "all .175s ease"
});
const Fieldset = ({
  children,
  dir,
  label
}) => /* @__PURE__ */ jsxs(Element$9, {
  children: [label && /* @__PURE__ */ jsx(Text, {
    dir,
    size: "label",
    weight: "medium",
    children: label
  }), /* @__PURE__ */ jsx(Stack, {
    direction: "vertical",
    gap: 4,
    children
  })]
});
const Element$8 = styled$1("form", {});
const reducer$1 = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return __spreadProps(__spreadValues({}, state), {
        values: __spreadProps(__spreadValues({}, state.values), {
          [action.id]: action.value
        })
      });
    case "SET_CHECKBOX":
      const values = get_1(state, `values.${action.id}`, []).filter((value) => value !== action.value);
      return __spreadProps(__spreadValues({}, state), {
        values: __spreadProps(__spreadValues({}, state.values), {
          [action.id]: action.checked ? values.concat([action.value]) : values
        })
      });
    case "SET_ERROR":
      return __spreadProps(__spreadValues({}, state), {
        errors: state.errors.filter((id) => id !== action.id).concat([action.id])
      });
    case "REMOVE_ERROR":
      return __spreadProps(__spreadValues({}, state), {
        errors: state.errors.filter((id) => id !== action.id)
      });
    case "SUBMIT_FORM":
      return __spreadProps(__spreadValues({}, state), {
        submit_form: action.value
      });
    default:
      throw new Error();
  }
};
const FormElement = ({
  children,
  css: css2,
  onChange,
  onSubmit
}) => {
  const [{
    values,
    errors,
    submit_form
  }, dispatch] = useContext(FormContext);
  useEffect(() => {
    let timer = null;
    if (onChange) {
      timer = setTimeout(() => {
        onChange(values, errors);
      }, 300);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [values]);
  useEffect(() => {
    if (submit_form) {
      onSubmit && onSubmit(values, errors);
      dispatch({
        type: "SUBMIT_FORM",
        value: false
      });
    }
  }, [submit_form]);
  return /* @__PURE__ */ jsx(Element$8, {
    css: css2,
    onSubmit: (e) => {
      e.preventDefault();
      onSubmit && onSubmit(values, errors);
    },
    children
  });
};
const Form = ({
  children,
  css: css2 = {},
  onChange = void 0,
  onSubmit = void 0
}) => {
  let [state, dispatch] = useReducer(reducer$1, {
    values: {},
    errors: [],
    submit_form: false
  });
  let formProvider = useMemo(() => {
    return [state, dispatch];
  }, [state, dispatch]);
  return /* @__PURE__ */ jsx(FormContext.Provider, {
    value: formProvider,
    children: /* @__PURE__ */ jsx(FormElement, {
      css: css2,
      onChange,
      onSubmit,
      children
    })
  });
};
const validatePrice = (input) => {
  return /^\d+(?:[.,]\d{2})*$/gm.test(input);
};
const validateFormField = (name, value, validateAs, required, dispatch) => {
  if (value) {
    if (validateAs === "price" && !validatePrice(value)) {
      dispatch({
        type: "SET_ERROR",
        id: name
      });
    } else if (validateAs === "number" && isNaN(value)) {
      dispatch({
        type: "SET_ERROR",
        id: name
      });
    } else {
      dispatch({
        type: "REMOVE_ERROR",
        id: name
      });
    }
  } else {
    if (required) {
      dispatch({
        type: "SET_ERROR",
        id: name
      });
    } else {
      dispatch({
        type: "REMOVE_ERROR",
        id: name
      });
    }
  }
};
const FormInput = (props) => {
  const {
    name,
    required = false,
    value = "",
    validateAs = null
  } = props;
  const [{
    values,
    errors
  }, dispatch] = useContext(FormContext);
  useEffect(() => {
    dispatch({
      type: "SET_VALUE",
      id: name,
      value
    });
  }, [value]);
  return /* @__PURE__ */ jsx(Input$1, __spreadProps(__spreadValues({}, props), {
    onChange: (value2) => {
      dispatch({
        type: "SET_VALUE",
        id: name,
        value: value2
      });
    },
    onBlur: (value2) => {
      validateFormField(name, value2, validateAs, required, dispatch);
    },
    onFocus: () => {
      dispatch({
        type: "REMOVE_ERROR",
        id: name
      });
    },
    invalid: errors.includes(name),
    value: get_1(values, name, "")
  }));
};
const FormRadio = (props) => {
  const {
    name,
    value
  } = props;
  const [{
    values,
    errors
  }, dispatch] = useContext(FormContext);
  useEffect(() => {
    dispatch({
      type: "SET_VALUE",
      id: name,
      value
    });
  }, [value]);
  return /* @__PURE__ */ jsx(Radio, __spreadProps(__spreadValues({}, props), {
    onClick: () => {
      dispatch({
        type: "SET_VALUE",
        id: name,
        value
      });
    },
    invalid: get_1(errors, name, false),
    checked: get_1(values, name, "") === value
  }));
};
const Row$1 = ({
  children
}) => /* @__PURE__ */ jsx(Stack, {
  gap: 16,
  children
});
const FormSelect = (props) => {
  const {
    children,
    name,
    value = false
  } = props;
  const [{
    values,
    errors
  }, dispatch] = useContext(FormContext);
  useEffect(() => {
    dispatch({
      type: "SET_VALUE",
      id: name,
      value
    });
  }, [value]);
  return /* @__PURE__ */ jsx(Select, __spreadProps(__spreadValues({}, props), {
    onChange: (value2) => {
      dispatch({
        type: "SET_VALUE",
        id: name,
        value: value2
      });
    },
    invalid: get_1(errors, name, false),
    value: get_1(values, name, ""),
    children
  }));
};
const FormSubmit = (props) => {
  const {
    value = ""
  } = props;
  const [, dispatch] = useContext(FormContext);
  return /* @__PURE__ */ jsx(Button$2, {
    type: "submit",
    variant: "primary",
    onSubmit: () => {
      dispatch({
        type: "SUBMIT_FORM",
        value: true
      });
    },
    children: value
  });
};
const FormTextarea = (props) => {
  const {
    name,
    required = false,
    value = "",
    validateAs = null
  } = props;
  const [{
    values,
    errors
  }, dispatch] = useContext(FormContext);
  useEffect(() => {
    dispatch({
      type: "SET_VALUE",
      id: name,
      value
    });
  }, [value]);
  return /* @__PURE__ */ jsx(Textarea, __spreadProps(__spreadValues({}, props), {
    onChange: (value2) => {
      dispatch({
        type: "SET_VALUE",
        id: name,
        value: value2
      });
    },
    onBlur: (value2) => {
      validateFormField(name, value2, validateAs, required, dispatch);
    },
    invalid: get_1(errors, name, false),
    value: get_1(values, name, "")
  }));
};
const FormObject = {
  Checkbox: FormCheckbox,
  Fieldset,
  Input: FormInput,
  Radio: FormRadio,
  Row: Row$1,
  Select: FormSelect,
  Submit: FormSubmit,
  Textarea: FormTextarea,
  Wrapper: Form
};
const Wrapper$2 = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "$2",
  paddingY: "$2",
  position: "relative",
  transition: "all .175s ease"
});
const Element$7 = styled("input", {
  backgroundColor: "$white",
  border: "1px solid $black300",
  borderRadius: "$md",
  boxShadow: "0 1px 4px rgba(35, 40, 45, 0.08)",
  cursor: "text",
  color: "$black900",
  fontSize: "$text300",
  fontWeight: 500,
  height: "$9",
  minHeight: "$9",
  margin: 0,
  paddingX: "$3",
  width: "100%",
  variants: {
    hasError: {
      true: {
        backgroundColorRGBA: "#d63638|.1",
        color: "$warning400",
        border: "1px solid $warning400"
      }
    }
  },
  "&:focus": {
    border: "1px solid rgba(34, 113, 177, 0.5)",
    boxShadow: "0 1px 4px rgba(34, 113, 177, 0.22)",
    outline: "none"
  },
  "&:autofill": {
    backgroundColor: "$white !important",
    "-webkit-box-shadow": "0 0 0 30px white inset !important",
    fontWeight: 600
  },
  "&:-webkit-autofill": {
    backgroundColor: "$white !important",
    "-webkit-box-shadow": "0 0 0 30px white inset !important",
    fontWeight: 600
  }
});
const Input$1 = (props) => {
  const _a = props, {
    css: css2 = {},
    dir = "ltr",
    description = false,
    onBlur = void 0,
    onChange = void 0,
    onFocus = void 0,
    invalid = false,
    label = false,
    sublabel = false
  } = _a, otherProps = __objRest(_a, [
    "css",
    "dir",
    "description",
    "onBlur",
    "onChange",
    "onFocus",
    "invalid",
    "label",
    "sublabel"
  ]);
  const [focus, setFocus] = useState(false);
  const ref = useRef();
  useEffect(() => {
    if (focus) {
      ref.current.focus();
    }
  }, [focus]);
  return /* @__PURE__ */ jsxs(Wrapper$2, {
    css: css2,
    dir,
    onClick: () => setFocus(true),
    children: [label && /* @__PURE__ */ jsx(Text, {
      as: "label",
      dir,
      size: "label",
      weight: "medium",
      css: {
        color: invalid ? "$warning400" : "$black900",
        cursor: "pointer"
      },
      children: label
    }), description && /* @__PURE__ */ jsx(Tooltip, {
      css: {
        position: "absolute",
        right: "0",
        top: "$2",
        zIndex: 2
      },
      value: description
    }), /* @__PURE__ */ jsx(Element$7, __spreadProps(__spreadValues({}, otherProps), {
      ref,
      dir,
      hasError: invalid,
      onFocus: () => {
        setFocus(true);
        onFocus && onFocus();
      },
      onBlur: (e) => {
        setFocus(false);
        onBlur && onBlur(e.target.value);
      },
      onChange: (e) => {
        onChange && onChange(e.target.value);
      }
    })), sublabel && /* @__PURE__ */ jsx(Text, {
      as: "span",
      dir,
      size: "footnote",
      weight: "medium",
      css: {
        opacity: 0.7,
        marginTop: "-$1"
      },
      children: sublabel
    })]
  });
};
const Label = styled("label", {
  alignItems: "center",
  cursor: "pointer",
  display: "inline-flex",
  gap: "$2",
  transition: "colors .1s ease"
});
const Button = styled("span", {
  appearance: "none",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  alignItems: "center",
  margin: 0,
  padding: 0,
  position: "relative",
  transform: "translate3d(0,0,0)"
});
const Ring = styled("span", {
  border: "1.5px solid $black900",
  borderRadius: "$full",
  transition: "opacity 125ms ease",
  position: "absolute",
  inset: -1,
  variants: {
    checked: {
      true: {
        opacity: 1
      },
      false: {
        opacity: 0
      }
    }
  }
});
const State = styled("span", {
  backgroundColor: "$black900",
  borderRadius: "$full",
  position: "absolute",
  transition: "opacity 125ms ease",
  inset: 2,
  variants: {
    checked: {
      true: {
        opacity: 1
      },
      false: {
        opacity: 0
      }
    }
  }
});
const Input = styled("input", {
  appearance: "none",
  background: "transparent",
  border: "none",
  height: "$full",
  left: 0,
  margin: 0,
  padding: 0,
  position: "absolute",
  top: 0,
  width: "$full"
});
const Radio = ({
  color = "#000",
  checked = false,
  dir = "ltr",
  label = false,
  name = "",
  onClick = void 0,
  selectedColor = "#000",
  size = 12,
  value = ""
}) => {
  const ref = useRef();
  return /* @__PURE__ */ jsxs(Label, {
    dir,
    children: [/* @__PURE__ */ jsxs(Button, {
      onClick: () => {
        if (onClick !== void 0 && ref.current) {
          ref.current.click();
        }
      },
      css: {
        height: size + "px",
        width: size + "px"
      },
      children: [/* @__PURE__ */ jsx(Ring, {
        color: selectedColor,
        children: /* @__PURE__ */ jsx(State, {
          checked
        })
      }), /* @__PURE__ */ jsx(Input, {
        ref,
        type: "radio",
        onChange: (e) => {
          onClick && onClick(e.target.value);
        },
        name,
        value,
        checked
      })]
    }), label && /* @__PURE__ */ jsx(Text, {
      dir,
      size: "label",
      weight: "regular",
      css: {
        cursor: "pointer"
      },
      children: label
    })]
  });
};
const Wrapper$1 = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "$2",
  paddingY: "$2",
  transition: "all .175s ease"
});
const SelectWrapper = styled("div", {
  position: "relative"
});
const IconWrapper = styled("div", {
  marginTop: -1,
  right: "$3",
  pointerEvents: "none",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1
});
const Element$6 = styled("select", {
  appearance: "none",
  backgroundColor: "$white",
  border: "1px solid $black300",
  borderRadius: "$md",
  boxShadow: "0 1px 4px rgba(35, 40, 45, 0.08)",
  color: "$black900",
  display: "block",
  fontWeight: 500,
  height: "$9",
  minHeight: "$9",
  flex: 1,
  margin: 0,
  paddingY: 0,
  paddingLeft: "$3",
  paddingRight: "$8",
  minWidth: "unset",
  position: "relative",
  fontSize: "$text300",
  width: "100%",
  zIndex: 1,
  "&:focus": {
    border: "1px solid rgba(34, 113, 177, 0.5)",
    boxShadow: "0 1px 4px rgba(34, 113, 177, 0.22)",
    outline: "none"
  },
  variants: {
    isDisabled: {
      true: {
        cursor: "not-allowed",
        opacity: 0.5,
        [`& + ${IconWrapper}`]: {
          opacity: 0.5
        }
      }
    }
  }
});
const Select = ({
  children,
  dir = "ltr",
  name,
  disabled = false,
  invalid = false,
  label = false,
  sublabel = false,
  onChange = void 0,
  value = "",
  css: css2 = {}
}) => {
  const [focus, setFocus] = useState(false);
  const ref = useRef();
  useEffect(() => {
    if (focus) {
      ref.current.focus();
    }
  }, [focus]);
  return /* @__PURE__ */ jsxs(Wrapper$1, {
    css: css2,
    onClick: () => setFocus(true),
    children: [label && /* @__PURE__ */ jsx(Text, {
      as: "label",
      dir,
      size: "label",
      weight: "medium",
      css: {
        color: invalid ? "$warning400" : "$black900",
        cursor: "pointer"
      },
      children: label
    }), /* @__PURE__ */ jsxs(SelectWrapper, {
      children: [/* @__PURE__ */ jsx(Element$6, {
        ref,
        name,
        disabled,
        isDisabled: disabled,
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        onChange: (e) => {
          onChange && onChange(e.target.value);
        },
        value,
        children
      }), /* @__PURE__ */ jsx(IconWrapper, {
        children: /* @__PURE__ */ jsx(Icon$1.ArrowDown, {
          color: "#23282D"
        })
      })]
    }), sublabel && /* @__PURE__ */ jsx(Text, {
      as: "span",
      dir,
      size: "footnote",
      weight: "medium",
      css: {
        opacity: 0.7,
        marginTop: "-$1"
      },
      children: sublabel
    })]
  });
};
const Wrapper = styled("div", {
  cursor: "text",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  paddingY: "$2",
  transition: "colors .1s ease"
});
const Element$5 = styled("textarea", {
  backgroundColor: "$white",
  borderRadius: "$md",
  border: "1px solid $black300",
  boxShadow: "0 1px 4px rgba(35, 40, 45, 0.08)",
  cursor: "text",
  color: "$black900",
  fontSize: "$text300",
  height: "$16",
  margin: 0,
  padding: "$3",
  "&:focus": {
    border: "1px solid rgba(34, 113, 177, 0.5)",
    boxShadow: "0 1px 4px rgba(34, 113, 177, 0.22)",
    outline: "none"
  },
  variants: {
    hasError: {
      true: {
        backgroundColorRGBA: "#d63638|.1",
        color: "$warning400",
        border: "1px solid $warning400"
      }
    },
    resizeable: {
      true: {
        resize: "both"
      },
      false: {
        resize: "none"
      }
    }
  }
});
const Textarea = ({
  css: css2 = {},
  dir = "ltr",
  invalid = false,
  label = false,
  placeholder = "",
  resizeable = false,
  onBlur = void 0,
  onChange = void 0,
  onFocus = void 0,
  value = ""
}) => {
  const [focus, setFocus] = useState(false);
  const ref = useRef();
  useEffect(() => {
    if (focus) {
      ref.current.focus();
    }
  }, [focus]);
  return /* @__PURE__ */ jsxs(Wrapper, {
    css: css2,
    dir,
    onClick: () => setFocus(true),
    children: [label && /* @__PURE__ */ jsx(Text, {
      as: "label",
      dir,
      size: "label",
      weight: "medium",
      css: {
        color: invalid ? "$warning400" : "$black900",
        cursor: "pointer"
      },
      children: label
    }), /* @__PURE__ */ jsx(Element$5, {
      ref,
      dir,
      hasError: invalid,
      onFocus: () => {
        setFocus(true);
        onFocus && onFocus();
      },
      onBlur: () => {
        setFocus(false);
        onBlur && onBlur(value);
      },
      onChange: (e) => {
        onChange && onChange(e.target.value);
      },
      placeholder,
      resizeable,
      value
    })]
  });
};
const DialogWrapper = styled(Dialog, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  inset: 0,
  overflowY: "scroll",
  transition: "all 250ms ease",
  position: "fixed",
  zIndex: 100
});
const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: "$black900",
  opacity: 0.5,
  position: "fixed",
  inset: 0,
  zIndex: -1
});
const DialogInt = styled("div", {
  backgroundColor: "$white",
  borderRadius: "$lg",
  boxShadow: "$card",
  maxWidth: "$128",
  padding: "$9 $12 $6 $12",
  textAlign: "center",
  transition: "all .25s ease",
  transform: "scale(.9)",
  width: "$full"
});
const Modal = ({
  dismiss = void 0,
  title = "",
  description = "",
  primaryAction = void 0,
  primaryText = "Confirm",
  dismissText = "Cancel",
  variant = "primary",
  visible = false
}) => {
  return /* @__PURE__ */ jsx(Transition, {
    show: visible,
    enter: "all .25s ease",
    leave: "all .15s ease",
    enterFrom: {
      opacity: 0
    },
    enterTo: {
      opacity: 1
    },
    leaveTo: {
      opacity: 0
    },
    children: ({
      css: css2,
      show
    }) => /* @__PURE__ */ jsxs(DialogWrapper, {
      css: css2,
      open: show,
      onClose: dismiss,
      children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsx(Transition, {
        show: visible,
        enter: "all .25s ease",
        leave: "all .15s ease",
        enterFrom: {
          transform: "scale(.9)"
        },
        enterTo: {
          transform: "scale(1)"
        },
        leaveTo: {
          transform: "translateY(24px)"
        },
        children: ({
          css: css22,
          visible: visible2
        }) => {
          console.log(css22);
          return /* @__PURE__ */ jsxs(DialogInt, {
            css: css22,
            visible: visible2,
            children: [/* @__PURE__ */ jsx(Dialog.Title, {
              children: /* @__PURE__ */ jsx(Text, {
                size: "heading",
                weight: "bold",
                children: title
              })
            }), /* @__PURE__ */ jsx(Dialog.Description, {
              children: /* @__PURE__ */ jsx(Text, {
                size: "body",
                css: {
                  opacity: 0.9,
                  paddingTop: "$2"
                },
                children: description
              })
            }), /* @__PURE__ */ jsxs(Stack, {
              align: "center",
              direction: "vertical",
              gap: "$1",
              css: {
                paddingTop: "$6"
              },
              children: [/* @__PURE__ */ jsx(Button$2, {
                onClick: () => {
                  primaryAction && primaryAction();
                  dismiss();
                },
                variant,
                children: primaryText
              }), /* @__PURE__ */ jsx(Button$2, {
                onClick: dismiss,
                variant: "simple",
                children: dismissText
              })]
            })]
          });
        }
      })]
    })
  });
};
const Element$4 = styled$1("div", {
  bottom: "$8",
  left: "50%",
  position: "fixed",
  transform: "translateX(-50%)",
  transition: "all 150ms ease",
  zIndex: 1001,
  "& span": {
    backgroundColor: "$black900",
    borderRadius: "$md",
    boxShadow: "$md",
    color: "$white",
    display: "block",
    fontSize: "$text300",
    padding: "$4 $6",
    transition: "all 150ms cubic-bezier(0.19, 1, 0.22, 1)"
  },
  variants: {
    visible: {
      true: {
        opacity: 1,
        visibility: "visible",
        "& span": {
          transform: "scale(1)"
        }
      },
      false: {
        opacity: 0,
        visibility: "invisible",
        "& span": {
          transform: "scale(.75)"
        }
      }
    }
  }
});
const Notification = ({
  message,
  shouldPlay,
  isDismissed
}) => {
  const [play, setPlay] = useState(shouldPlay);
  useEffect(() => {
    let animationTimer = null;
    if (play) {
      animationTimer = setTimeout(() => {
        setPlay(false);
        isDismissed();
      }, 3e3);
    }
    return () => {
      clearTimeout(animationTimer);
    };
  }, [play]);
  useEffect(() => {
    setPlay(shouldPlay);
  }, [shouldPlay]);
  return /* @__PURE__ */ jsx(Element$4, {
    visible: play,
    children: /* @__PURE__ */ jsx("span", {
      children: message
    })
  });
};
const Element$3 = styled("button", {
  display: "block",
  backgroundColor: "transparent",
  border: "2px solid $black600",
  borderRadius: "9999px",
  color: "transparent",
  cursor: "pointer",
  height: "$5",
  position: "relative",
  transition: "background-color .3s cubic-bezier(0.19, 1, 0.22, 1)",
  width: "$9",
  variants: {
    enabled: {
      true: {
        backgroundColor: "$primary400",
        border: "2px solid $primary400"
      }
    }
  },
  "&:hover": {
    color: "transparent"
  }
});
const Control = styled("span", {
  backgroundColor: "$black600",
  borderRadius: "100%",
  display: "block",
  height: "$3",
  left: "$0-5",
  position: "absolute",
  top: "50%",
  transition: "transform 300ms ease",
  transform: "translateX(0) translateY(-50%)",
  width: "$3",
  variants: {
    enabled: {
      true: {
        backgroundColor: "$white",
        transform: "translateX(16px) translateY(-50%)"
      }
    }
  }
});
const Toggle = ({
  onChange,
  value = 0
}) => /* @__PURE__ */ jsxs(Element$3, {
  enabled: value ? true : false,
  onClick: () => onChange(!value),
  children: [value ? "on" : "off", /* @__PURE__ */ jsx(Control, {
    enabled: value ? true : false,
    "aria-hidden": true
  })]
});
const Element$2 = styled$1("div", {});
const Content = styled$1("span", {
  backgroundColor: "$black300",
  borderRadius: "$md",
  display: "block",
  marginRight: "$2",
  padding: "$2",
  position: "absolute",
  right: "100%",
  transition: "all 75ms ease",
  top: "-$2",
  width: "$40",
  zIndex: -1,
  variants: {
    visible: {
      true: {
        opacity: 1,
        visibility: "visible"
      },
      false: {
        opacity: 0,
        visibility: "invisible"
      }
    }
  }
});
const Tooltip = ({
  css: css2 = {},
  value
}) => {
  const [visible, setVisible] = useState(false);
  return /* @__PURE__ */ jsxs(Element$2, {
    css: css2,
    children: [/* @__PURE__ */ jsx("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      onMouseEnter: () => setVisible(true),
      onMouseLeave: () => setVisible(false),
      children: /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM7 12.5C10.0376 12.5 12.5 10.0376 12.5 7C12.5 3.96243 10.0376 1.5 7 1.5C3.96243 1.5 1.5 3.96243 1.5 7C1.5 10.0376 3.96243 12.5 7 12.5ZM7 6C7.41421 6 7.75 6.33579 7.75 6.75V9.25C7.75 9.66421 7.41421 10 7 10C6.58579 10 6.25 9.66421 6.25 9.25V6.75C6.25 6.33579 6.58579 6 7 6ZM7.75 4.75C7.75 4.33579 7.41421 4 7 4C6.58579 4 6.25 4.33579 6.25 4.75C6.25 5.16421 6.58579 5.5 7 5.5C7.41421 5.5 7.75 5.16421 7.75 4.75Z",
        fill: "#2271B1"
      })
    }), /* @__PURE__ */ jsx(Content, {
      visible,
      children: /* @__PURE__ */ jsx(Text, {
        size: "footnote",
        leading: "snug",
        weight: "regular",
        children: value
      })
    })]
  });
};
const ModalListener = () => {
  const [{
    modal
  }, dispatch] = useContext(LeafContext);
  return /* @__PURE__ */ jsx(Modal, {
    dismiss: () => {
      dispatch({
        type: "SET_MODAL",
        value: false
      });
    },
    title: get_1(modal, "title", ""),
    description: get_1(modal, "description", ""),
    primaryAction: () => {
      get_1(modal, "action", void 0) && modal.action();
      dispatch({
        type: "SET_MODAL",
        value: false
      });
    },
    primaryText: "Confirm",
    dismissText: "Cancel",
    variant: get_1(modal, "variant", "primary"),
    visible: modal !== false
  });
};
const NotificationListener = () => {
  const [{
    notification
  }, dispatch] = useContext(LeafContext);
  return /* @__PURE__ */ jsx(Notification, {
    message: notification ? notification : "",
    shouldPlay: notification,
    isDismissed: () => {
      setTimeout(() => {
        dispatch({
          type: "SET_NOTIFICATION",
          value: false
        });
      }, 500);
    }
  });
};
const queryClient = new QueryClient();
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MODAL":
      return __spreadProps(__spreadValues({}, state), {
        modal: action.value
      });
    case "SET_NOTIFICATION":
      return __spreadProps(__spreadValues({}, state), {
        notification: action.value
      });
    default:
      throw new Error();
  }
};
const LeafProvider = ({
  children
}) => {
  let [state, dispatch] = useReducer(reducer, {
    modal: false,
    notification: false
  });
  let leafProvider = useMemo(() => {
    return [state, dispatch];
  }, [state, dispatch]);
  return /* @__PURE__ */ jsx(LeafContext.Provider, {
    value: leafProvider,
    children: /* @__PURE__ */ jsxs(QueryClientProvider, {
      client: queryClient,
      children: [children, /* @__PURE__ */ jsx(NotificationListener, {}), /* @__PURE__ */ jsx(ModalListener, {})]
    })
  });
};
const Element$1 = styled("img", {
  objectFit: "cover",
  display: "block",
  height: "auto",
  width: "100%",
  variants: {
    size: {
      icon: {
        maxWidth: "$8"
      },
      tiny: {
        maxWidth: "$12"
      },
      small: {
        maxWidth: "$16"
      },
      medium: {
        maxWidth: "$32"
      },
      large: {
        maxWidth: "$48"
      },
      xlarge: {
        maxWidth: "$96"
      }
    },
    ratio: {
      square: {
        aspectRatio: 1
      },
      portrait: {
        aspectRatio: 3 / 4
      },
      landscape: {
        aspectRatio: 16 / 9
      }
    },
    fit: {
      contain: {
        objectFit: "contain"
      }
    },
    image_style: {
      raised: {
        border: "2px solid $white",
        boxShadow: "$card"
      }
    },
    rounded: {
      true: {
        borderRadius: "$full"
      }
    }
  }
});
const Image = ({
  alt = "",
  css: css2 = {},
  fit = "",
  ratio = "default",
  rounded = false,
  size = "small",
  src = "",
  style = ""
}) => /* @__PURE__ */ jsx(Element$1, {
  alt,
  css: css2,
  fit,
  ratio,
  rounded,
  size,
  src,
  image_style: style
});
const TableConstants = {
  DELETE_COLUMN_ID: "__leaf-delete-column",
  REORDER_COLUMN_ID: "__leaf-reorder-column"
};
const TableContext = React__default.createContext({});
const getTrack = (track, columns) => {
  if (track) {
    if (track.length === columns.length) {
      return track.join(" ");
    }
  }
  return columns.map((c) => {
    if (c.id === TableConstants.DELETE_COLUMN_ID) {
      return "40px";
    }
    if (c.id === TableConstants.REORDER_COLUMN_ID) {
      return "50px";
    }
    return "1fr";
  }).join(" ");
};
const Element = styled("div", {});
const HeaderRow = styled("div", {
  display: "grid"
});
const HeaderColumn = styled("div", {
  alignItems: "center",
  backgroundColor: "$black300",
  color: "$black500",
  display: "flex",
  fontSize: "$text300",
  fontWeight: 500,
  height: "$10",
  margin: 0,
  padding: "0 $4",
  position: "relative",
  textTransform: "capitalize",
  transition: "all 0.15s ease-in-out",
  zIndex: 1,
  "&:first-child": {
    borderRadius: "$md 0 0 $md"
  },
  "&:last-child": {
    borderRadius: "0 $md $md 0"
  },
  "& + div": {
    paddingLeft: 0
  },
  variants: {
    align: {
      leading: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      trailing: {
        justifyContent: "flex-end"
      }
    }
  }
});
const Row = styled("div", {
  display: "grid"
});
const Cell = styled("div", {
  alignItems: "center",
  borderBottom: "1px solid $black300",
  display: "flex",
  minHeight: "$10",
  margin: 0,
  leading: "$tight",
  padding: "$2 $4",
  position: "relative",
  transition: "all 0.15s ease-in-out",
  zIndex: 1,
  variants: {
    align: {
      leading: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      trailing: {
        justifyContent: "flex-end"
      }
    }
  },
  "& + div": {
    paddingLeft: 0
  }
});
const DeleteButton = styled("button", {
  appearance: "none",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  transition: "all .1s ease",
  "&:hover": {
    opacity: 0.5
  }
});
const RankColumnHandle = styled("span", {
  cursor: "grab",
  variants: {
    dragging: {
      true: {
        cursor: "grabbing"
      }
    }
  }
});
const DragHandleColumn = ({
  id,
  handleDragging,
  moveItem,
  findItem
}) => {
  const originalIndex = findItem(id).index;
  const [{
    isDragging
  }, drag] = useDrag({
    type: TableConstants.REORDER_COLUMN_ID,
    item: {
      id,
      originalIndex
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    end: (dropResult, monitor) => {
      const {
        id: droppedId,
        originalIndex: originalIndex2
      } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveItem(droppedId, originalIndex2);
      } else {
        handleDragging(false);
      }
    }
  });
  const [, drop] = useDrop({
    accept: TableConstants.REORDER_COLUMN_ID,
    canDrop: () => false,
    hover({
      id: draggedId
    }) {
      if (draggedId !== id) {
        const {
          index: overIndex
        } = findItem(id);
        moveItem(draggedId, overIndex);
      }
    }
  });
  return /* @__PURE__ */ jsx(RankColumnHandle, {
    onMouseDown: () => {
      handleDragging(true);
    },
    dragging: isDragging,
    ref: (node) => drag(drop(node)),
    children: /* @__PURE__ */ jsx(DragHandle, {
      color: "#6F7F86"
    })
  });
};
const TableHeader = () => /* @__PURE__ */ jsx(TableContext.Consumer, {
  children: ({
    columns,
    track
  }) => /* @__PURE__ */ jsx(HeaderRow, {
    css: {
      gridTemplateColumns: track
    },
    children: columns.map((column) => /* @__PURE__ */ jsx(HeaderColumn, {
      onClick: () => {
        "onClick" in column && column.onClick();
      },
      align: get_1(column, "align", "leading"),
      children: column.name
    }, column.id))
  })
});
const TableRow = ({
  children
}) => /* @__PURE__ */ jsx(TableContext.Consumer, {
  children: ({
    track
  }) => /* @__PURE__ */ jsx(Row, {
    css: {
      gridTemplateColumns: track
    },
    children
  })
});
const TableCell = ({
  children
}) => /* @__PURE__ */ jsx(Cell, {
  children
});
const RenderTable = React__default.forwardRef(({
  children,
  css: css2 = {}
}, ref) => /* @__PURE__ */ jsx(TableContext.Consumer, {
  children: ({
    source
  }) => /* @__PURE__ */ jsx(Element, {
    ref,
    css: css2,
    children: children(source)
  })
}));
const TableProvider = ({
  children,
  css: css2 = {},
  columns = [],
  onDelete = void 0,
  onOrder = void 0,
  source = [],
  track = null
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const moveItem = (id, atIndex) => {
    const {
      row,
      index
    } = findItem(id);
    onOrder(update(source, {
      $splice: [[index, 1], [atIndex, 0, row]]
    }).map((item) => item.id));
  };
  const findItem = (id) => {
    const row = source.filter((i) => i.id === id)[0];
    return {
      row,
      index: source.indexOf(row)
    };
  };
  const [, drop] = useDrop({
    accept: TableConstants.REORDER_COLUMN_ID
  });
  let mapped_columns = columns;
  let mapped_track = track;
  if (onDelete !== void 0) {
    mapped_columns = mapped_columns.concat([{
      id: TableConstants.DELETE_COLUMN_ID
    }]);
    if (mapped_track !== null) {
      mapped_track = mapped_track.concat(["20px"]);
    }
  }
  if (onOrder !== void 0) {
    mapped_columns = [{
      id: TableConstants.REORDER_COLUMN_ID
    }].concat(mapped_columns);
    if (mapped_track !== null) {
      mapped_track = ["50px"].concat(mapped_track);
    }
  }
  return /* @__PURE__ */ jsx(TableContext.Provider, {
    value: {
      columns: mapped_columns,
      source: source.map((item) => mapped_columns.map((c) => {
        if (c.id === TableConstants.DELETE_COLUMN_ID) {
          return /* @__PURE__ */ jsx(DeleteButton, {
            onClick: () => onDelete(item.id),
            children: /* @__PURE__ */ jsx("svg", {
              width: "10",
              height: "10",
              viewBox: "0 0 10 10",
              children: /* @__PURE__ */ jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L5 3.93934L8.46967 0.46967C8.76256 0.176777 9.23744 0.176777 9.53033 0.46967C9.82322 0.762563 9.82322 1.23744 9.53033 1.53033L6.06066 5L9.53033 8.46967C9.82322 8.76256 9.82322 9.23744 9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033L5 6.06066L1.53033 9.53033C1.23744 9.82322 0.762563 9.82322 0.46967 9.53033C0.176777 9.23744 0.176777 8.76256 0.46967 8.46967L3.93934 5L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z",
                fill: "#EB5757"
              })
            })
          });
        }
        if (c.id === TableConstants.REORDER_COLUMN_ID) {
          return /* @__PURE__ */ jsx(DragHandleColumn, {
            id: item.id,
            moveItem,
            findItem,
            handleDragging: (dragging) => {
              setIsDragging(dragging ? item.id : false);
            }
          });
        }
        return get_1(item, c.id, "");
      })),
      track: getTrack(mapped_track, mapped_columns),
      dragging: isDragging
    },
    children: /* @__PURE__ */ jsx(DndProvider, {
      backend: HTML5Backend,
      children: /* @__PURE__ */ jsx(RenderTable, {
        css: css2,
        ref: drop,
        children
      })
    })
  });
};
const TableWrapper = (props) => /* @__PURE__ */ jsx(DndProvider, {
  backend: HTML5Backend,
  children: /* @__PURE__ */ jsx(TableProvider, __spreadValues({}, props))
});
const Table = {
  Wrapper: TableWrapper,
  Row: TableRow,
  Header: TableHeader,
  Cell: TableCell
};
export { Button$2 as Button, Checkbox, Dashicon, FormObject as Form, Grid, Image, Input$1 as Input, LeafProvider, Link$1 as Link, List, ListItem, Modal, Notification, Notify, Page, PopoverWrapper as Popover, Radio, Screens, Select, Stack, Tab, TabContainer, TabNavigation, TabPanel, TabPanels, Table, Text, Textarea, Toggle, Tooltip, config, createTheme, css, fetchWithAuthorization, getCssText, globalCss, keyframes, styled, theme };
