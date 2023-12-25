var $e = Object.defineProperty;
var Ve = (e, t, n) => t in e ? $e(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var J = (e, t, n) => (Ve(e, typeof t != "symbol" ? t + "" : t, n), n);
function Se(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: We } = Object.prototype, { getPrototypeOf: Y } = Object, I = /* @__PURE__ */ ((e) => (t) => {
  const n = We.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), A = (e) => (e = e.toLowerCase(), (t) => I(t) === e), H = (e) => (t) => typeof t === e, { isArray: C } = Array, U = H("undefined");
function Ke(e) {
  return e !== null && !U(e) && e.constructor !== null && !U(e.constructor) && R(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Re = A("ArrayBuffer");
function ve(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Re(e.buffer), t;
}
const Ge = H("string"), R = H("function"), Oe = H("number"), M = (e) => e !== null && typeof e == "object", Xe = (e) => e === !0 || e === !1, D = (e) => {
  if (I(e) !== "object")
    return !1;
  const t = Y(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Qe = A("Date"), Ze = A("File"), Ye = A("Blob"), et = A("FileList"), tt = (e) => M(e) && R(e.pipe), nt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || R(e.append) && ((t = I(e)) === "formdata" || // detect form-data instance
  t === "object" && R(e.toString) && e.toString() === "[object FormData]"));
}, rt = A("URLSearchParams"), st = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), C(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let u;
    for (r = 0; r < i; r++)
      u = o[r], t.call(null, e[u], u, e);
  }
}
function Ae(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const ge = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Te = (e) => !U(e) && e !== ge;
function v() {
  const { caseless: e } = Te(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Ae(t, s) || s;
    D(t[o]) && D(r) ? t[o] = v(t[o], r) : D(r) ? t[o] = v({}, r) : C(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && _(arguments[r], n);
  return t;
}
const ot = (e, t, n, { allOwnKeys: r } = {}) => (_(t, (s, o) => {
  n && R(s) ? e[o] = Se(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), it = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), at = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, ct = (e, t, n, r) => {
  let s, o, i;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !u[i] && (t[i] = e[i], u[i] = !0);
    e = n !== !1 && Y(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ut = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, lt = (e) => {
  if (!e)
    return null;
  if (C(e))
    return e;
  let t = e.length;
  if (!Oe(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ft = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Y(Uint8Array)), dt = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, pt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ht = A("HTMLFormElement"), mt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), oe = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), yt = A("RegExp"), xe = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  _(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, bt = (e) => {
  xe(e, (t, n) => {
    if (R(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (R(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Et = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return C(e) ? r(e) : r(String(e).split(t)), n;
}, wt = () => {
}, St = (e, t) => (e = +e, Number.isFinite(e) ? e : t), $ = "abcdefghijklmnopqrstuvwxyz", ie = "0123456789", Ne = {
  DIGIT: ie,
  ALPHA: $,
  ALPHA_DIGIT: $ + $.toUpperCase() + ie
}, Rt = (e = 16, t = Ne.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Ot(e) {
  return !!(e && R(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const At = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (M(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = C(r) ? [] : {};
        return _(r, (i, u) => {
          const p = n(i, s + 1);
          !U(p) && (o[u] = p);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, gt = A("AsyncFunction"), Tt = (e) => e && (M(e) || R(e)) && R(e.then) && R(e.catch), a = {
  isArray: C,
  isArrayBuffer: Re,
  isBuffer: Ke,
  isFormData: nt,
  isArrayBufferView: ve,
  isString: Ge,
  isNumber: Oe,
  isBoolean: Xe,
  isObject: M,
  isPlainObject: D,
  isUndefined: U,
  isDate: Qe,
  isFile: Ze,
  isBlob: Ye,
  isRegExp: yt,
  isFunction: R,
  isStream: tt,
  isURLSearchParams: rt,
  isTypedArray: ft,
  isFileList: et,
  forEach: _,
  merge: v,
  extend: ot,
  trim: st,
  stripBOM: it,
  inherits: at,
  toFlatObject: ct,
  kindOf: I,
  kindOfTest: A,
  endsWith: ut,
  toArray: lt,
  forEachEntry: dt,
  matchAll: pt,
  isHTMLForm: ht,
  hasOwnProperty: oe,
  hasOwnProp: oe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: xe,
  freezeMethods: bt,
  toObjectSet: Et,
  toCamelCase: mt,
  noop: wt,
  toFiniteNumber: St,
  findKey: Ae,
  global: ge,
  isContextDefined: Te,
  ALPHABET: Ne,
  generateString: Rt,
  isSpecCompliantForm: Ot,
  toJSONObject: At,
  isAsyncFn: gt,
  isThenable: Tt
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Pe = m.prototype, Ce = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ce[e] = { value: e };
});
Object.defineProperties(m, Ce);
Object.defineProperty(Pe, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(Pe);
  return a.toFlatObject(e, i, function(p) {
    return p !== Error.prototype;
  }, (u) => u !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const xt = null;
function G(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Fe(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ae(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Fe(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Nt(e) {
  return a.isArray(e) && !e.some(G);
}
const Pt = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function q(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(d, E) {
    return !a.isUndefined(E[d]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(f) {
    if (f === null)
      return "";
    if (a.isDate(f))
      return f.toISOString();
    if (!p && a.isBlob(f))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? p && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, d, E) {
    let S = f;
    if (f && !E && typeof f == "object") {
      if (a.endsWith(d, "{}"))
        d = r ? d : d.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && Nt(f) || (a.isFileList(f) || a.endsWith(d, "[]")) && (S = a.toArray(f)))
        return d = Fe(d), S.forEach(function(x, Je) {
          !(a.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? ae([d], Je, o) : i === null ? d : d + "[]",
            h(x)
          );
        }), !1;
    }
    return G(f) ? !0 : (t.append(ae(E, d, o), h(f)), !1);
  }
  const c = [], y = Object.assign(Pt, {
    defaultVisitor: l,
    convertValue: h,
    isVisitable: G
  });
  function w(f, d) {
    if (!a.isUndefined(f)) {
      if (c.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + d.join("."));
      c.push(f), a.forEach(f, function(S, T) {
        (!(a.isUndefined(S) || S === null) && s.call(
          t,
          S,
          a.isString(T) ? T.trim() : T,
          d,
          y
        )) === !0 && w(S, d ? d.concat(T) : [T]);
      }), c.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return w(e), t;
}
function ce(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ee(e, t) {
  this._pairs = [], e && q(e, this, t);
}
const Ue = ee.prototype;
Ue.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ue.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ce);
  } : ce;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Ct(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function _e(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Ct, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new ee(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Ft {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ue = Ft, Be = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ut = typeof URLSearchParams < "u" ? URLSearchParams : ee, _t = typeof FormData < "u" ? FormData : null, Bt = typeof Blob < "u" ? Blob : null, Dt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ut,
    FormData: _t,
    Blob: Bt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, De = typeof window < "u" && typeof document < "u", Lt = ((e) => De && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), jt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: De,
  hasStandardBrowserEnv: Lt,
  hasStandardBrowserWebWorkerEnv: jt
}, Symbol.toStringTag, { value: "Module" })), O = {
  ...kt,
  ...Dt
};
function It(e, t) {
  return q(e, new O.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ht(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Mt(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Le(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    const u = Number.isFinite(+i), p = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, p ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !u) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Mt(s[i])), !u);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(Ht(r), s, n, 0);
    }), n;
  }
  return null;
}
function qt(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const te = {
  transitional: Be,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s && s ? JSON.stringify(Le(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return It(t, this.formSerializer).toString();
      if ((u = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return q(
          u ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), qt(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || te.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (i)
          throw u.name === "SyntaxError" ? m.from(u, m.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: O.classes.FormData,
    Blob: O.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  te.headers[e] = {};
});
const ne = te, zt = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Jt = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && zt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, le = Symbol("internals");
function F(e) {
  return e && String(e).trim().toLowerCase();
}
function L(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(L) : String(e);
}
function $t(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Vt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function V(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Wt(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Kt(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class z {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(u, p, h) {
      const l = F(p);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const c = a.findKey(s, l);
      (!c || s[c] === void 0 || h === !0 || h === void 0 && s[c] !== !1) && (s[c || p] = L(u));
    }
    const i = (u, p) => a.forEach(u, (h, l) => o(h, l, p));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !Vt(t) ? i(Jt(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = F(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return $t(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = F(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || V(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = F(i), i) {
        const u = a.findKey(r, i);
        u && (!n || V(r, r[u], u, n)) && (delete r[u], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || V(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = L(s), delete n[o];
        return;
      }
      const u = t ? Wt(o) : String(o).trim();
      u !== o && delete n[o], n[u] = L(s), r[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[le] = this[le] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const u = F(i);
      r[u] || (Kt(s, i), r[u] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
z.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(z.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(z);
const g = z;
function W(e, t) {
  const n = this || ne, r = t || n, s = g.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(u) {
    o = u.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function je(e) {
  return !!(e && e.__CANCEL__);
}
function B(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(B, m, {
  __CANCEL__: !0
});
function vt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Gt = O.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Xt(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Qt(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ke(e, t) {
  return e && !Xt(t) ? Qt(e, t) : t;
}
const Zt = O.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(i) {
      const u = a.isString(i) ? s(i) : i;
      return u.protocol === r.protocol && u.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function Yt(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function en(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const h = Date.now(), l = r[o];
    i || (i = h), n[s] = p, r[s] = h;
    let c = o, y = 0;
    for (; c !== s; )
      y += n[c++], c = c % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), h - i < t)
      return;
    const w = l && h - l;
    return w ? Math.round(y * 1e3 / w) : void 0;
  };
}
function fe(e, t) {
  let n = 0;
  const r = en(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, u = o - n, p = r(u), h = o <= i;
    n = o;
    const l = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: u,
      rate: p || void 0,
      estimated: p && i && h ? (i - o) / p : void 0,
      event: s
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const tn = typeof XMLHttpRequest < "u", nn = tn && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = g.from(e.headers).normalize();
    let { responseType: i, withXSRFToken: u } = e, p;
    function h() {
      e.cancelToken && e.cancelToken.unsubscribe(p), e.signal && e.signal.removeEventListener("abort", p);
    }
    let l;
    if (a.isFormData(s)) {
      if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((l = o.getContentType()) !== !1) {
        const [d, ...E] = l ? l.split(";").map((S) => S.trim()).filter(Boolean) : [];
        o.setContentType([d || "multipart/form-data", ...E].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const d = e.auth.username || "", E = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(d + ":" + E));
    }
    const y = ke(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), _e(y, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function w() {
      if (!c)
        return;
      const d = g.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), S = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: d,
        config: e,
        request: c
      };
      vt(function(x) {
        n(x), h();
      }, function(x) {
        r(x), h();
      }, S), c = null;
    }
    if ("onloadend" in c ? c.onloadend = w : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, c.onabort = function() {
      c && (r(new m("Request aborted", m.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let E = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || Be;
      e.timeoutErrorMessage && (E = e.timeoutErrorMessage), r(new m(
        E,
        S.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        c
      )), c = null;
    }, O.hasStandardBrowserEnv && (u && a.isFunction(u) && (u = u(e)), u || u !== !1 && Zt(y))) {
      const d = e.xsrfHeaderName && e.xsrfCookieName && Gt.read(e.xsrfCookieName);
      d && o.set(e.xsrfHeaderName, d);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && a.forEach(o.toJSON(), function(E, S) {
      c.setRequestHeader(S, E);
    }), a.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", fe(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", fe(e.onUploadProgress)), (e.cancelToken || e.signal) && (p = (d) => {
      c && (r(!d || d.type ? new B(null, e, c) : d), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(p), e.signal && (e.signal.aborted ? p() : e.signal.addEventListener("abort", p)));
    const f = Yt(y);
    if (f && O.protocols.indexOf(f) === -1) {
      r(new m("Unsupported protocol " + f + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, X = {
  http: xt,
  xhr: nn
};
a.forEach(X, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const de = (e) => `- ${e}`, rn = (e) => a.isFunction(e) || e === null || e === !1, Ie = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !rn(n) && (r = X[(i = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([u, p]) => `adapter ${u} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(de).join(`
`) : " " + de(o[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: X
};
function K(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new B(null, e);
}
function pe(e) {
  return K(e), e.headers = g.from(e.headers), e.data = W.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ie.getAdapter(e.adapter || ne.adapter)(e).then(function(r) {
    return K(e), r.data = W.call(
      e,
      e.transformResponse,
      r
    ), r.headers = g.from(r.headers), r;
  }, function(r) {
    return je(r) || (K(e), r && r.response && (r.response.data = W.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = g.from(r.response.headers))), Promise.reject(r);
  });
}
const he = (e) => e instanceof g ? e.toJSON() : e;
function P(e, t) {
  t = t || {};
  const n = {};
  function r(h, l, c) {
    return a.isPlainObject(h) && a.isPlainObject(l) ? a.merge.call({ caseless: c }, h, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(h, l, c) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(h))
        return r(void 0, h, c);
    } else
      return r(h, l, c);
  }
  function o(h, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(h, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(h))
        return r(void 0, h);
    } else
      return r(void 0, l);
  }
  function u(h, l, c) {
    if (c in t)
      return r(h, l);
    if (c in e)
      return r(void 0, h);
  }
  const p = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: u,
    headers: (h, l) => s(he(h), he(l), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const c = p[l] || s, y = c(e[l], t[l], l);
    a.isUndefined(y) && c !== u || (n[l] = y);
  }), n;
}
const He = "1.6.2", re = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  re[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const me = {};
re.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + He + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, u) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !me[i] && (me[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, u) : !0;
  };
};
function sn(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const u = e[o], p = u === void 0 || i(u, o, e);
      if (p !== !0)
        throw new m("option " + o + " must be " + p, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const Q = {
  assertOptions: sn,
  validators: re
}, N = Q.validators;
let k = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ue(),
      response: new ue()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = P(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Q.assertOptions(r, {
      silentJSONParsing: N.transitional(N.boolean),
      forcedJSONParsing: N.transitional(N.boolean),
      clarifyTimeoutError: N.transitional(N.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Q.assertOptions(s, {
      encode: N.function,
      serialize: N.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete o[f];
      }
    ), n.headers = g.concat(i, o);
    const u = [];
    let p = !0;
    this.interceptors.request.forEach(function(d) {
      typeof d.runWhen == "function" && d.runWhen(n) === !1 || (p = p && d.synchronous, u.unshift(d.fulfilled, d.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(d) {
      h.push(d.fulfilled, d.rejected);
    });
    let l, c = 0, y;
    if (!p) {
      const f = [pe.bind(this), void 0];
      for (f.unshift.apply(f, u), f.push.apply(f, h), y = f.length, l = Promise.resolve(n); c < y; )
        l = l.then(f[c++], f[c++]);
      return l;
    }
    y = u.length;
    let w = n;
    for (c = 0; c < y; ) {
      const f = u[c++], d = u[c++];
      try {
        w = f(w);
      } catch (E) {
        d.call(this, E);
        break;
      }
    }
    try {
      l = pe.call(this, w);
    } catch (f) {
      return Promise.reject(f);
    }
    for (c = 0, y = h.length; c < y; )
      l = l.then(h[c++], h[c++]);
    return l;
  }
  getUri(t) {
    t = P(this.defaults, t);
    const n = ke(t.baseURL, t.url);
    return _e(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  k.prototype[t] = function(n, r) {
    return this.request(P(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, u) {
      return this.request(P(u || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  k.prototype[t] = n(), k.prototype[t + "Form"] = n(!0);
});
const j = k;
class se {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((u) => {
        r.subscribe(u), o = u;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, u) {
      r.reason || (r.reason = new B(o, i, u), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new se(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const on = se;
function an(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function cn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Z = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Z).forEach(([e, t]) => {
  Z[t] = e;
});
const un = Z;
function Me(e) {
  const t = new j(e), n = Se(j.prototype.request, t);
  return a.extend(n, j.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Me(P(e, s));
  }, n;
}
const b = Me(ne);
b.Axios = j;
b.CanceledError = B;
b.CancelToken = on;
b.isCancel = je;
b.VERSION = He;
b.toFormData = q;
b.AxiosError = m;
b.Cancel = b.CanceledError;
b.all = function(t) {
  return Promise.all(t);
};
b.spread = an;
b.isAxiosError = cn;
b.mergeConfig = P;
b.AxiosHeaders = g;
b.formToJSON = (e) => Le(a.isHTMLForm(e) ? new FormData(e) : e);
b.getAdapter = Ie.getAdapter;
b.HttpStatusCode = un;
b.default = b;
const ln = b;
var qe = /* @__PURE__ */ ((e) => (e.Japan = "jp", e.Global = "global", e.China = "cn", e))(qe || {});
const ye = {
  jp: 0,
  global: 1,
  cn: 2
};
var ze = /* @__PURE__ */ ((e) => (e.Japanese = "jp", e.English = "en", e.ChineseTraditional = "tw", e.ChineseSimplifiedUnofficial = "zh", e.ChineseSimplified = "cn", e))(ze || {});
const be = "https://schale.gg", Ee = qe.Japan, we = ze.ChineseSimplified;
class pn {
  constructor(t) {
    J(this, "options");
    J(this, "axios");
    const n = {
      baseURL: be,
      server: Ee,
      language: we
    };
    this.options = Object.assign(n, t), this.axios = ln.create({
      baseURL: this.baseURL
    });
  }
  get baseURL() {
    return this.options.baseURL ?? be;
  }
  get server() {
    return this.options.server ?? Ee;
  }
  get language() {
    return this.options.language ?? we;
  }
  getStudents(t, n, r = !1) {
    const s = t ?? this.server, u = `/data/${n ?? this.language}/students${r ? ".min" : ""}.json`, p = ye[s];
    return new Promise((h, l) => {
      this.axios.get(u).then((c) => {
        c.status != 200 && l(c.statusText);
        const y = c.data.filter((w) => w.IsReleased[p]);
        h(y);
      }).catch((c) => {
        l(c);
      });
    });
  }
  getItems(t, n, r = !1) {
    const s = t ?? this.server, u = `/data/${n ?? this.language}/items${r ? ".min" : ""}.json`, p = ye[s];
    return new Promise((h, l) => {
      this.axios.get(u).then((c) => {
        c.status != 200 && l(c.statusText);
        const y = c.data.filter((w) => w.IsReleased[p]);
        h(y);
      }).catch((c) => {
        l(c);
      });
    });
  }
}
export {
  pn as SchaleApi
};
