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
import React, { useContext, useState, useRef, useEffect, useReducer, useMemo } from "react";
import "base-64";
import { Popover, Dialog } from "@headlessui/react";
import classNames from "classnames";
import { HashRouter, useLocation, Link as Link$1, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
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
const Format = {
  Map: (value, map) => {
    return get_1(map, value, value);
  }
};
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
class Icon$1 extends React.Component {
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
  icon = null
}) => {
  const location = useLocation();
  return /* @__PURE__ */ jsx(ElementWrapper, {
    children: /* @__PURE__ */ jsx(Link$1, {
      to: href,
      children: /* @__PURE__ */ jsxs(Element$d, {
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
const Element$c = styled("div", {
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
export { Button$2 as Button, Checkbox, FormObject as Form, Grid, Image, Input$1 as Input, LeafProvider, Link, List, ListItem, Modal, Notification, Notify, Page, PopoverWrapper as Popover, Radio, Screens, Select, Stack, Tab, TabContainer, TabNavigation, TabPanel, TabPanels, Table, Text, Textarea, Toggle, Tooltip, config, createTheme, css, getCssText, globalCss, keyframes, styled, theme };
