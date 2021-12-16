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
import { createStitches, styled as styled$1 } from "@stitches/react";
import React, { useContext, useState, useEffect, useReducer, useMemo, useRef } from "react";
import "base-64";
import { HashRouter, useLocation, Link as Link$1, Routes, Route } from "react-router-dom";
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
const LeafContext = React.createContext({});
const Notify = ({
  children
}) => {
  const [, dispatch] = useContext(LeafContext);
  return children((value) => dispatch({
    type: "SET_NOTIFICATION",
    value
  }));
};
styled("div", {
  flex: "none",
  height: "$4-5",
  width: "$4-5"
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
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
var f = React, g = 60103;
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
const Element$g = styled$1("a", {
  color: "$primary400",
  fontSize: "$text200",
  fontWeight: 500,
  "&:hover": {
    color: "$primary410"
  }
});
const Link = (props) => {
  const _a = props, {
    children
  } = _a, otherProps = __objRest(_a, [
    "children"
  ]);
  return /* @__PURE__ */ jsx(Element$g, __spreadProps(__spreadValues({}, otherProps), {
    children
  }));
};
const Element$f = styled$1("div", {
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
  return /* @__PURE__ */ jsx(Element$f, {
    visible: play,
    children: /* @__PURE__ */ jsx("span", {
      children: message
    })
  });
};
const Element$e = styled("button", {
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
}) => /* @__PURE__ */ jsxs(Element$e, {
  enabled: value ? true : false,
  onClick: () => onChange(!value),
  children: [value ? "on" : "off", /* @__PURE__ */ jsx(Control, {
    enabled: value ? true : false,
    "aria-hidden": true
  })]
});
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
const Element$d = styled$1("div", {
  margin: "-10px -20px 0 -22px",
  padding: 64
});
const Page = ({
  children
}) => {
  return /* @__PURE__ */ jsx(Element$d, {
    children
  });
};
const Element$c = styled("div", {
  minHeight: "100vh",
  margin: "-10px -20px 0 -22px",
  position: "relative"
});
const ScreenContainer = ({
  children,
  layout = "sidebar"
}) => {
  return /* @__PURE__ */ jsx(HashRouter, {
    children: /* @__PURE__ */ jsx(Element$c, {
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
const Element$b = styled("span", {
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
  icon = null
}) => {
  const location = useLocation();
  return /* @__PURE__ */ jsx(ElementWrapper, {
    children: /* @__PURE__ */ jsx(Link$1, {
      to: href,
      children: /* @__PURE__ */ jsxs(Element$b, {
        active: location.pathname === href,
        children: [icon && /* @__PURE__ */ jsx(Icon, {
          children: icon
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
const Element$a = styled("div", {
  padding: "$14"
});
const Content$1 = styled("div", {
  paddingTop: "$14"
});
const ScreensPage = ({
  actions = null,
  children = null,
  title = false
}) => /* @__PURE__ */ jsxs(Element$a, {
  children: [/* @__PURE__ */ jsxs(Stack, {
    children: [title && /* @__PURE__ */ jsx(Text, {
      size: "title",
      children: title
    }, "_ndx_title"), actions && /* @__PURE__ */ jsx(Stack, {
      gap: 12,
      css: {
        marginLeft: "auto"
      },
      children: actions
    })]
  }), /* @__PURE__ */ jsx(Content$1, {
    children
  })]
});
const Element$9 = styled("div", {
  position: "relative",
  left: "$80",
  width: "calc(100% - $80)"
});
const ScreensViews = ({
  children
}) => {
  return /* @__PURE__ */ jsx(Element$9, {
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
const Element$8 = styled("div", {
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
}) => /* @__PURE__ */ jsx(Element$8, {
  css: __spreadValues({
    gap
  }, css2),
  align,
  direction,
  children
});
const TabContext = React.createContext({});
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
const Element$7 = styled$1("div", {});
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
  return /* @__PURE__ */ jsxs(Element$7, {
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
    href = "",
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
    as: href !== "" ? "a" : "button",
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
      children: /* @__PURE__ */ jsx("svg", {
        fill: "none",
        height: size,
        style: {
          display: "block"
        },
        width: size,
        viewBox: "0 0 12 12",
        children: /* @__PURE__ */ jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.8 1.5C3.93517 1.5 3.37676 1.50117 2.95175 1.53589C2.54426 1.56918 2.39318 1.6257 2.31901 1.66349C2.03677 1.8073 1.8073 2.03677 1.66349 2.31901C1.6257 2.39318 1.56918 2.54426 1.53589 2.95175C1.50117 3.37676 1.5 3.93517 1.5 4.8V7.2C1.5 8.06483 1.50117 8.62324 1.53589 9.04825C1.56918 9.45574 1.6257 9.60682 1.66349 9.68099C1.8073 9.96323 2.03677 10.1927 2.31901 10.3365C2.39318 10.3743 2.54426 10.4308 2.95175 10.4641C3.37676 10.4988 3.93517 10.5 4.8 10.5H7.2C8.06483 10.5 8.62324 10.4988 9.04825 10.4641C9.45574 10.4308 9.60682 10.3743 9.68099 10.3365C9.96323 10.1927 10.1927 9.96323 10.3365 9.68099C10.3743 9.60682 10.4308 9.45574 10.4641 9.04825C10.4988 8.62324 10.5 8.25156 10.5 7.2C10.5 6.14844 12 6.11719 12 7.2C12 8.88016 12 9.72024 11.673 10.362C11.3854 10.9265 10.9265 11.3854 10.362 11.673C9.72024 12 8.88016 12 7.2 12H4.8C3.11984 12 2.27976 12 1.63803 11.673C1.07354 11.3854 0.614601 10.9265 0.32698 10.362C0 9.72024 0 8.88016 0 7.2V4.8C0 3.11984 0 2.27976 0.32698 1.63803C0.614601 1.07354 1.07354 0.614601 1.63803 0.32698C2.27976 0 3.11984 0 4.8 0C6 0 6 1.5 4.8 1.5ZM11.5008 3.55824C11.8091 3.28162 11.8348 2.80744 11.5582 2.49913C11.2816 2.19083 10.8074 2.16514 10.4991 2.44176L6.32947 6.18283L4.51724 4.4569C4.21729 4.17123 3.74256 4.18281 3.4569 4.48276C3.17123 4.78271 3.18281 5.25744 3.48276 5.5431L5.79704 7.74718L6.2991 8.22533L6.81515 7.76232L11.5008 3.55824Z",
          fill: selectedColor
        })
      })
    }), /* @__PURE__ */ jsx(CheckboxState, {
      visible: !checked,
      children: /* @__PURE__ */ jsx("svg", {
        className: classNames("blt-icon", className),
        fill: "none",
        height: size,
        style: {
          display: "block"
        },
        width: size,
        viewBox: "0 0 12 12",
        children: /* @__PURE__ */ jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.2 1.5H4.8C3.93517 1.5 3.37676 1.50117 2.95175 1.53589C2.54426 1.56918 2.39318 1.6257 2.31901 1.66349C2.03677 1.8073 1.8073 2.03677 1.66349 2.31901C1.6257 2.39318 1.56918 2.54426 1.53589 2.95175C1.50117 3.37676 1.5 3.93517 1.5 4.8V7.2C1.5 8.06483 1.50117 8.62324 1.53589 9.04825C1.56918 9.45574 1.6257 9.60682 1.66349 9.68099C1.8073 9.96323 2.03677 10.1927 2.31901 10.3365C2.39318 10.3743 2.54426 10.4308 2.95175 10.4641C3.37676 10.4988 3.93517 10.5 4.8 10.5H7.2C8.06483 10.5 8.62324 10.4988 9.04825 10.4641C9.45574 10.4308 9.60682 10.3743 9.68099 10.3365C9.96323 10.1927 10.1927 9.96323 10.3365 9.68099C10.3743 9.60682 10.4308 9.45574 10.4641 9.04825C10.4988 8.62324 10.5 8.06483 10.5 7.2V4.8C10.5 3.93517 10.4988 3.37676 10.4641 2.95175C10.4308 2.54426 10.3743 2.39318 10.3365 2.31901C10.1927 2.03677 9.96323 1.8073 9.68099 1.66349C9.60682 1.6257 9.45574 1.56918 9.04825 1.53589C8.62324 1.50117 8.06483 1.5 7.2 1.5ZM0.32698 1.63803C0 2.27976 0 3.11984 0 4.8V7.2C0 8.88016 0 9.72024 0.32698 10.362C0.614601 10.9265 1.07354 11.3854 1.63803 11.673C2.27976 12 3.11984 12 4.8 12H7.2C8.88016 12 9.72024 12 10.362 11.673C10.9265 11.3854 11.3854 10.9265 11.673 10.362C12 9.72024 12 8.88016 12 7.2V4.8C12 3.11984 12 2.27976 11.673 1.63803C11.3854 1.07354 10.9265 0.614601 10.362 0.32698C9.72024 0 8.88016 0 7.2 0H4.8C3.11984 0 2.27976 0 1.63803 0.32698C1.07354 0.614601 0.614601 1.07354 0.32698 1.63803Z",
          fill: color
        })
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
const FormContext = React.createContext({});
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
const Element$6 = styled$1("fieldset", {
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
}) => /* @__PURE__ */ jsxs(Element$6, {
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
const Element$5 = styled$1("form", {});
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
  return /* @__PURE__ */ jsx(Element$5, {
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
const Element$4 = styled("input", {
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
    }), /* @__PURE__ */ jsx(Element$4, __spreadProps(__spreadValues({}, otherProps), {
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
const Element$3 = styled("select", {
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
      children: [/* @__PURE__ */ jsx(Element$3, {
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
        children: /* @__PURE__ */ jsx("svg", {
          width: "14",
          height: "8",
          viewBox: "0 0 14 8",
          fill: "none",
          children: /* @__PURE__ */ jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.646484 1.35359L1.35359 0.646484L7.00004 6.29293L12.6465 0.646484L13.3536 1.35359L7.00004 7.70714L0.646484 1.35359Z",
            fill: "#23282D"
          })
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
const Element$2 = styled("textarea", {
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
    }), /* @__PURE__ */ jsx(Element$2, {
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
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return __spreadProps(__spreadValues({}, state), {
        notification: action.value
      });
    default:
      throw new Error();
  }
};
const LeafConsumer = ({
  children
}) => {
  const [, dispatch] = useContext(LeafContext);
  return children({
    setNotification: (value) => dispatch({
      type: "SET_NOTIFICATION",
      value
    })
  });
};
const LeafProvider = ({
  children
}) => {
  let [state, dispatch] = useReducer(reducer, {
    notification: false
  });
  let leafProvider = useMemo(() => {
    return [state, dispatch];
  }, [state, dispatch]);
  return /* @__PURE__ */ jsx(LeafContext.Provider, {
    value: leafProvider,
    children: /* @__PURE__ */ jsxs(Fragment, {
      children: [children, /* @__PURE__ */ jsx(NotificationListener, {}), /* @__PURE__ */ jsx(Modal, {})]
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
const TableContext = React.createContext({});
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
    children: /* @__PURE__ */ jsx("svg", {
      width: "8",
      height: "13",
      viewBox: "0 0 8 13",
      children: /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3ZM1.5 8C2.32843 8 3 7.32843 3 6.5C3 5.67157 2.32843 5 1.5 5C0.671573 5 0 5.67157 0 6.5C0 7.32843 0.671573 8 1.5 8ZM3 11.5C3 12.3284 2.32843 13 1.5 13C0.671573 13 0 12.3284 0 11.5C0 10.6716 0.671573 10 1.5 10C2.32843 10 3 10.6716 3 11.5ZM6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8ZM8 1.5C8 2.32843 7.32843 3 6.5 3C5.67157 3 5 2.32843 5 1.5C5 0.671573 5.67157 0 6.5 0C7.32843 0 8 0.671573 8 1.5ZM6.5 13C7.32843 13 8 12.3284 8 11.5C8 10.6716 7.32843 10 6.5 10C5.67157 10 5 10.6716 5 11.5C5 12.3284 5.67157 13 6.5 13Z",
        fill: "#6F7F86"
      })
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
const RenderTable = React.forwardRef(({
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
export { Button$2 as Button, Checkbox, FormObject as Form, Grid, Image, Input$1 as Input, LeafConsumer, LeafProvider, Link, List, ListItem, Notification, Notify, Page, Radio, Screens, Select, Stack, Tab, TabContainer, TabNavigation, TabPanel, TabPanels, Table, Text, Textarea, Toggle, Tooltip, config, createTheme, css, getCssText, globalCss, keyframes, styled, theme };
