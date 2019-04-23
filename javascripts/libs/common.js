/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
! function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
	var c = [],
		d = c.slice,
		e = c.concat,
		f = c.push,
		g = c.indexOf,
		h = {},
		i = h.toString,
		j = h.hasOwnProperty,
		k = {},
		l = a.document,
		m = "2.1.4",
		n = function (a, b) {
			return new n.fn.init(a, b)
		},
		o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		p = /^-ms-/,
		q = /-([\da-z])/gi,
		r = function (a, b) {
			return b.toUpperCase()
		};
	n.fn = n.prototype = {
		jquery: m,
		constructor: n,
		selector: "",
		length: 0,
		toArray: function () {
			return d.call(this)
		},
		get: function (a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
		},
		pushStack: function (a) {
			var b = n.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		},
		each: function (a, b) {
			return n.each(this, a, b)
		},
		map: function (a) {
			return this.pushStack(n.map(this, function (b, c) {
				return a.call(b, c, b)
			}))
		},
		slice: function () {
			return this.pushStack(d.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (a) {
			var b = this.length,
				c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor(null)
		},
		push: f,
		sort: c.sort,
		splice: c.splice
	}, n.extend = n.fn.extend = function () {
		var a, b, c, d, e, f, g = arguments[0] || {},
			h = 1,
			i = arguments.length,
			j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
			if (null != (a = arguments[h]))
				for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
		return g
	}, n.extend({
		expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (a) {
			throw new Error(a)
		},
		noop: function () {},
		isFunction: function (a) {
			return "function" === n.type(a)
		},
		isArray: Array.isArray,
		isWindow: function (a) {
			return null != a && a === a.window
		},
		isNumeric: function (a) {
			return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
		},
		isPlainObject: function (a) {
			return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
		},
		isEmptyObject: function (a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		type: function (a) {
			return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
		},
		globalEval: function (a) {
			var b, c = eval;
			a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
		},
		camelCase: function (a) {
			return a.replace(p, "ms-").replace(q, r)
		},
		nodeName: function (a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function (a, b, c) {
			var d, e = 0,
				f = a.length,
				g = s(a);
			if (c) {
				if (g) {
					for (; f > e; e++)
						if (d = b.apply(a[e], c), d === !1) break
				} else
					for (e in a)
						if (d = b.apply(a[e], c), d === !1) break
			} else if (g) {
				for (; f > e; e++)
					if (d = b.call(a[e], e, a[e]), d === !1) break
			} else
				for (e in a)
					if (d = b.call(a[e], e, a[e]), d === !1) break;
			return a
		},
		trim: function (a) {
			return null == a ? "" : (a + "").replace(o, "")
		},
		makeArray: function (a, b) {
			var c = b || [];
			return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
		},
		inArray: function (a, b, c) {
			return null == b ? -1 : g.call(b, a, c)
		},
		merge: function (a, b) {
			for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
			return a.length = e, a
		},
		grep: function (a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		},
		map: function (a, b, c) {
			var d, f = 0,
				g = a.length,
				h = s(a),
				i = [];
			if (h)
				for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
			else
				for (f in a) d = b(a[f], f, c), null != d && i.push(d);
			return e.apply([], i)
		},
		guid: 1,
		proxy: function (a, b) {
			var c, e, f;
			return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
				return a.apply(b || this, e.concat(d.call(arguments)))
			}, f.guid = a.guid = a.guid || n.guid++, f) : void 0
		},
		now: Date.now,
		support: k
	}), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
		h["[object " + b + "]"] = b.toLowerCase()
	});

	function s(a) {
		var b = "length" in a && a.length,
			c = n.type(a);
		return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}
	var t = function (a) {
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
			v = a.document,
			w = 0,
			x = 0,
			y = ha(),
			z = ha(),
			A = ha(),
			B = function (a, b) {
				return a === b && (l = !0), 0
			},
			C = 1 << 31,
			D = {}.hasOwnProperty,
			E = [],
			F = E.pop,
			G = E.push,
			H = E.push,
			I = E.slice,
			J = function (a, b) {
				for (var c = 0, d = a.length; d > c; c++)
					if (a[c] === b) return c;
				return -1
			},
			K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			L = "[\\x20\\t\\r\\n\\f]",
			M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			N = M.replace("w", "w#"),
			O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
			P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
			Q = new RegExp(L + "+", "g"),
			R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
			S = new RegExp("^" + L + "*," + L + "*"),
			T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
			U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
			V = new RegExp(P),
			W = new RegExp("^" + N + "$"),
			X = {
				ID: new RegExp("^#(" + M + ")"),
				CLASS: new RegExp("^\\.(" + M + ")"),
				TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + O),
				PSEUDO: new RegExp("^" + P),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + K + ")$", "i"),
				needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
			},
			Y = /^(?:input|select|textarea|button)$/i,
			Z = /^h\d$/i,
			$ = /^[^{]+\{\s*\[native \w/,
			_ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			aa = /[+~]/,
			ba = /'|\\/g,
			ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
			da = function (a, b, c) {
				var d = "0x" + b - 65536;
				return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
			},
			ea = function () {
				m()
			};
		try {
			H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
		} catch (fa) {
			H = {
				apply: E.length ? function (a, b) {
					G.apply(a, I.call(b))
				} : function (a, b) {
					var c = a.length,
						d = 0;
					while (a[c++] = b[d++]);
					a.length = c - 1
				}
			}
		}

		function ga(a, b, d, e) {
			var f, h, j, k, l, o, r, s, w, x;
			if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
			if (!e && p) {
				if (11 !== k && (f = _.exec(a)))
					if (j = f[1]) {
						if (9 === k) {
							if (h = b.getElementById(j), !h || !h.parentNode) return d;
							if (h.id === j) return d.push(h), d
						} else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
					} else {
						if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
						if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
					} if (c.qsa && (!q || !q.test(a))) {
					if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
						o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
						while (l--) o[l] = s + ra(o[l]);
						w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
					}
					if (x) try {
						return H.apply(d, w.querySelectorAll(x)), d
					} catch (y) {} finally {
						r || b.removeAttribute("id")
					}
				}
			}
			return i(a.replace(R, "$1"), b, d, e)
		}

		function ha() {
			var a = [];

			function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
			}
			return b
		}

		function ia(a) {
			return a[u] = !0, a
		}

		function ja(a) {
			var b = n.createElement("div");
			try {
				return !!a(b)
			} catch (c) {
				return !1
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null
			}
		}

		function ka(a, b) {
			var c = a.split("|"),
				e = a.length;
			while (e--) d.attrHandle[c[e]] = b
		}

		function la(a, b) {
			var c = b && a,
				d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
			if (d) return d;
			if (c)
				while (c = c.nextSibling)
					if (c === b) return -1;
			return a ? 1 : -1
		}

		function ma(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function na(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}

		function oa(a) {
			return ia(function (b) {
				return b = +b, ia(function (c, d) {
					var e, f = a([], c.length, b),
						g = f.length;
					while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function pa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a
		}
		c = ga.support = {}, f = ga.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, m = ga.setDocument = function (a) {
			var b, e, g = a ? a.ownerDocument || a : v;
			return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
				return a.className = "i", !a.getAttribute("className")
			}), c.getElementsByTagName = ja(function (a) {
				return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
			}), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
				return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
			}), c.getById ? (d.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);
					return c && c.parentNode ? [c] : []
				}
			}, d.filter.ID = function (a) {
				var b = a.replace(ca, da);
				return function (a) {
					return a.getAttribute("id") === b
				}
			}) : (delete d.find.ID, d.filter.ID = function (a) {
				var b = a.replace(ca, da);
				return function (a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
			} : function (a, b) {
				var c, d = [],
					e = 0,
					f = b.getElementsByTagName(a);
				if ("*" === a) {
					while (c = f[e++]) 1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
				return p ? b.getElementsByClassName(a) : void 0
			}, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
			}), ja(function (a) {
				var b = g.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
			})), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
				c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function (a, b) {
				if (b)
					while (b = b.parentNode)
						if (b === a) return !0;
				return !1
			}, B = b ? function (a, b) {
				if (a === b) return l = !0, 0;
				var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
			} : function (a, b) {
				if (a === b) return l = !0, 0;
				var c, d = 0,
					e = a.parentNode,
					f = b.parentNode,
					h = [a],
					i = [b];
				if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
				if (e === f) return la(a, b);
				c = a;
				while (c = c.parentNode) h.unshift(c);
				c = b;
				while (c = c.parentNode) i.unshift(c);
				while (h[d] === i[d]) d++;
				return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
			}, g) : n
		}, ga.matches = function (a, b) {
			return ga(a, null, null, b)
		}, ga.matchesSelector = function (a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
				var d = s.call(a, b);
				if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
			} catch (e) {}
			return ga(b, n, null, [a]).length > 0
		}, ga.contains = function (a, b) {
			return (a.ownerDocument || a) !== n && m(a), t(a, b)
		}, ga.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);
			var e = d.attrHandle[b.toLowerCase()],
				f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
			return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
		}, ga.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a)
		}, ga.uniqueSort = function (a) {
			var b, d = [],
				e = 0,
				f = 0;
			if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while (b = a[f++]) b === a[f] && (e = d.push(f));
				while (e--) a.splice(d[e], 1)
			}
			return k = null, a
		}, e = ga.getText = function (a) {
			var b, c = "",
				d = 0,
				f = a.nodeType;
			if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent) return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
				} else if (3 === f || 4 === f) return a.nodeValue
			} else
				while (b = a[d++]) c += e(b);
			return c
		}, d = ga.selectors = {
			cacheLength: 50,
			createPseudo: ia,
			match: X,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function (a) {
					return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
				},
				CHILD: function (a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
				},
				PSEUDO: function (a) {
					var b, c = !a[6] && a[2];
					return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			},
			filter: {
				TAG: function (a) {
					var b = a.replace(ca, da).toLowerCase();
					return "*" === a ? function () {
						return !0
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b
					}
				},
				CLASS: function (a) {
					var b = y[a + " "];
					return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
					})
				},
				ATTR: function (a, b, c) {
					return function (d) {
						var e = ga.attr(d, a);
						return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
					}
				},
				CHILD: function (a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
						g = "last" !== a.slice(-4),
						h = "of-type" === b;
					return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode
					} : function (b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
							q = b.parentNode,
							r = h && b.nodeName.toLowerCase(),
							s = !i && !h;
						if (q) {
							if (f) {
								while (p) {
									l = b;
									while (l = l[p])
										if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
								while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
									if (1 === l.nodeType && ++m && l === b) {
										k[a] = [w, n, m];
										break
									}
							} else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
							else
								while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
									if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
							return m -= e, m === d || m % d === 0 && m / d >= 0
						}
					}
				},
				PSEUDO: function (a, b) {
					var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
					return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
						var d, f = e(a, b),
							g = f.length;
						while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
					}) : function (a) {
						return e(a, 0, c)
					}) : e
				}
			},
			pseudos: {
				not: ia(function (a) {
					var b = [],
						c = [],
						d = h(a.replace(R, "$1"));
					return d[u] ? ia(function (a, b, c, e) {
						var f, g = d(a, null, e, []),
							h = a.length;
						while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function (a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
					}
				}),
				has: ia(function (a) {
					return function (b) {
						return ga(a, b).length > 0
					}
				}),
				contains: ia(function (a) {
					return a = a.replace(ca, da),
						function (b) {
							return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
						}
				}),
				lang: ia(function (a) {
					return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
						function (b) {
							var c;
							do
								if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
							return !1
						}
				}),
				target: function (b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				},
				root: function (a) {
					return a === o
				},
				focus: function (a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
				},
				enabled: function (a) {
					return a.disabled === !1
				},
				disabled: function (a) {
					return a.disabled === !0
				},
				checked: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				},
				selected: function (a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
				},
				empty: function (a) {
					for (a = a.firstChild; a; a = a.nextSibling)
						if (a.nodeType < 6) return !1;
					return !0
				},
				parent: function (a) {
					return !d.pseudos.empty(a)
				},
				header: function (a) {
					return Z.test(a.nodeName)
				},
				input: function (a) {
					return Y.test(a.nodeName)
				},
				button: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				},
				text: function (a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				},
				first: oa(function () {
					return [0]
				}),
				last: oa(function (a, b) {
					return [b - 1]
				}),
				eq: oa(function (a, b, c) {
					return [0 > c ? c + b : c]
				}),
				even: oa(function (a, b) {
					for (var c = 0; b > c; c += 2) a.push(c);
					return a
				}),
				odd: oa(function (a, b) {
					for (var c = 1; b > c; c += 2) a.push(c);
					return a
				}),
				lt: oa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
					return a
				}),
				gt: oa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
					return a
				})
			}
		}, d.pseudos.nth = d.pseudos.eq;
		for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) d.pseudos[b] = ma(b);
		for (b in {
				submit: !0,
				reset: !0
			}) d.pseudos[b] = na(b);

		function qa() {}
		qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
			var c, e, f, g, h, i, j, k = z[a + " "];
			if (k) return b ? 0 : k.slice(0);
			h = a, i = [], j = d.preFilter;
			while (h) {
				(!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
					value: c,
					type: e[0].replace(R, " ")
				}), h = h.slice(c.length));
				for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
					value: c,
					type: g,
					matches: e
				}), h = h.slice(c.length));
				if (!c) break
			}
			return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
		};

		function ra(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
			return d
		}

		function sa(a, b, c) {
			var d = b.dir,
				e = c && "parentNode" === d,
				f = x++;
			return b.first ? function (b, c, f) {
				while (b = b[d])
					if (1 === b.nodeType || e) return a(b, c, f)
			} : function (b, c, g) {
				var h, i, j = [w, f];
				if (g) {
					while (b = b[d])
						if ((1 === b.nodeType || e) && a(b, c, g)) return !0
				} else
					while (b = b[d])
						if (1 === b.nodeType || e) {
							if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
							if (i[d] = j, j[2] = a(b, c, g)) return !0
						}
			}
		}

		function ta(a) {
			return a.length > 1 ? function (b, c, d) {
				var e = a.length;
				while (e--)
					if (!a[e](b, c, d)) return !1;
				return !0
			} : a[0]
		}

		function ua(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
			return c
		}

		function va(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}

		function wa(a, b, c, d, e, f) {
			return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
				var j, k, l, m = [],
					n = [],
					o = g.length,
					p = f || ua(b || "*", h.nodeType ? [h] : h, []),
					q = !a || !f && b ? p : va(p, m, a, h, i),
					r = c ? e || (f ? a : o || d) ? [] : g : q;
				if (c && c(q, r, h, i), d) {
					j = va(r, n), d(j, [], h, i), k = j.length;
					while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
				}
				if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;
							while (k--)(l = r[k]) && j.push(q[k] = l);
							e(null, r = [], j, i)
						}
						k = r.length;
						while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
					}
				} else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
			})
		}

		function xa(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
					return a === b
				}, h, !0), l = sa(function (a) {
					return J(b, a) > -1
				}, h, !0), m = [function (a, c, d) {
					var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
					return b = null, e
				}]; f > i; i++)
				if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
				else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; f > e; e++)
							if (d.relative[a[e].type]) break;
						return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
							value: " " === a[i - 2].type ? "*" : ""
						})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
					}
					m.push(c)
				} return ta(m)
		}

		function ya(a, b) {
			var c = b.length > 0,
				e = a.length > 0,
				f = function (f, g, h, i, k) {
					var l, m, o, p = 0,
						q = "0",
						r = f && [],
						s = [],
						t = j,
						u = f || e && d.find.TAG("*", k),
						v = w += null == t ? 1 : Math.random() || .1,
						x = u.length;
					for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
						if (e && l) {
							m = 0;
							while (o = a[m++])
								if (o(l, g, h)) {
									i.push(l);
									break
								} k && (w = v)
						}
						c && ((l = !o && l) && p--, f && r.push(l))
					}
					if (p += q, c && q !== p) {
						m = 0;
						while (o = b[m++]) o(r, s, g, h);
						if (f) {
							if (p > 0)
								while (q--) r[q] || s[q] || (s[q] = F.call(i));
							s = va(s)
						}
						H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
					}
					return k && (w = v, j = t), r
				};
			return c ? ia(f) : f
		}
		return h = ga.compile = function (a, b) {
			var c, d = [],
				e = [],
				f = A[a + " "];
			if (!f) {
				b || (b = g(a)), c = b.length;
				while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
				f = A(a, ya(e, d)), f.selector = a
			}
			return f
		}, i = ga.select = function (a, b, e, f) {
			var i, j, k, l, m, n = "function" == typeof a && a,
				o = !f && g(a = n.selector || a);
			if (e = e || [], 1 === o.length) {
				if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
					if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
					n && (b = b.parentNode), a = a.slice(j.shift().value.length)
				}
				i = X.needsContext.test(a) ? 0 : j.length;
				while (i--) {
					if (k = j[i], d.relative[l = k.type]) break;
					if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
						if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
						break
					}
				}
			}
			return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
			return 1 & a.compareDocumentPosition(n.createElement("div"))
		}), ja(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
		}) || ka("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
		}), c.attributes && ja(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
		}) || ka("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
		}), ja(function (a) {
			return null == a.getAttribute("disabled")
		}) || ka(K, function (a, b, c) {
			var d;
			return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), ga
	}(a);
	n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
	var u = n.expr.match.needsContext,
		v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		w = /^.[^:#\[\.,]*$/;

	function x(a, b, c) {
		if (n.isFunction(b)) return n.grep(a, function (a, d) {
			return !!b.call(a, d, a) !== c
		});
		if (b.nodeType) return n.grep(a, function (a) {
			return a === b !== c
		});
		if ("string" == typeof b) {
			if (w.test(b)) return n.filter(b, a, c);
			b = n.filter(b, a)
		}
		return n.grep(a, function (a) {
			return g.call(b, a) >= 0 !== c
		})
	}
	n.filter = function (a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
			return 1 === a.nodeType
		}))
	}, n.fn.extend({
		find: function (a) {
			var b, c = this.length,
				d = [],
				e = this;
			if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
				for (b = 0; c > b; b++)
					if (n.contains(e[b], this)) return !0
			}));
			for (b = 0; c > b; b++) n.find(a, e[b], d);
			return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
		},
		filter: function (a) {
			return this.pushStack(x(this, a || [], !1))
		},
		not: function (a) {
			return this.pushStack(x(this, a || [], !0))
		},
		is: function (a) {
			return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
		}
	});
	var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		A = n.fn.init = function (a, b) {
			var c, d;
			if (!a) return this;
			if ("string" == typeof a) {
				if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
				if (c[1]) {
					if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
						for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
					return this
				}
				return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
			}
			return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
		};
	A.prototype = n.fn, y = n(l);
	var B = /^(?:parents|prev(?:Until|All))/,
		C = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	n.extend({
		dir: function (a, b, c) {
			var d = [],
				e = void 0 !== c;
			while ((a = a[b]) && 9 !== a.nodeType)
				if (1 === a.nodeType) {
					if (e && n(a).is(c)) break;
					d.push(a)
				} return d
		},
		sibling: function (a, b) {
			for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	}), n.fn.extend({
		has: function (a) {
			var b = n(a, this),
				c = b.length;
			return this.filter(function () {
				for (var a = 0; c > a; a++)
					if (n.contains(this, b[a])) return !0
			})
		},
		closest: function (a, b) {
			for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
				for (c = this[d]; c && c !== b; c = c.parentNode)
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
						f.push(c);
						break
					} return this.pushStack(f.length > 1 ? n.unique(f) : f)
		},
		index: function (a) {
			return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (a, b) {
			return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
		},
		addBack: function (a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
		}
	});

	function D(a, b) {
		while ((a = a[b]) && 1 !== a.nodeType);
		return a
	}
	n.each({
		parent: function (a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		},
		parents: function (a) {
			return n.dir(a, "parentNode")
		},
		parentsUntil: function (a, b, c) {
			return n.dir(a, "parentNode", c)
		},
		next: function (a) {
			return D(a, "nextSibling")
		},
		prev: function (a) {
			return D(a, "previousSibling")
		},
		nextAll: function (a) {
			return n.dir(a, "nextSibling")
		},
		prevAll: function (a) {
			return n.dir(a, "previousSibling")
		},
		nextUntil: function (a, b, c) {
			return n.dir(a, "nextSibling", c)
		},
		prevUntil: function (a, b, c) {
			return n.dir(a, "previousSibling", c)
		},
		siblings: function (a) {
			return n.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function (a) {
			return n.sibling(a.firstChild)
		},
		contents: function (a) {
			return a.contentDocument || n.merge([], a.childNodes)
		}
	}, function (a, b) {
		n.fn[a] = function (c, d) {
			var e = n.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
		}
	});
	var E = /\S+/g,
		F = {};

	function G(a) {
		var b = F[a] = {};
		return n.each(a.match(E) || [], function (a, c) {
			b[c] = !0
		}), b
	}
	n.Callbacks = function (a) {
		a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
		var b, c, d, e, f, g, h = [],
			i = !a.once && [],
			j = function (l) {
				for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
					if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
						b = !1;
						break
					} d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
			},
			k = {
				add: function () {
					if (h) {
						var c = h.length;
						! function g(b) {
							n.each(b, function (b, c) {
								var d = n.type(c);
								"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
							})
						}(arguments), d ? f = h.length : b && (e = c, j(b))
					}
					return this
				},
				remove: function () {
					return h && n.each(arguments, function (a, b) {
						var c;
						while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
					}), this
				},
				has: function (a) {
					return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
				},
				empty: function () {
					return h = [], f = 0, this
				},
				disable: function () {
					return h = i = b = void 0, this
				},
				disabled: function () {
					return !h
				},
				lock: function () {
					return i = void 0, b || k.disable(), this
				},
				locked: function () {
					return !i
				},
				fireWith: function (a, b) {
					return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
				},
				fire: function () {
					return k.fireWith(this, arguments), this
				},
				fired: function () {
					return !!c
				}
			};
		return k
	}, n.extend({
		Deferred: function (a) {
			var b = [
					["resolve", "done", n.Callbacks("once memory"), "resolved"],
					["reject", "fail", n.Callbacks("once memory"), "rejected"],
					["notify", "progress", n.Callbacks("memory")]
				],
				c = "pending",
				d = {
					state: function () {
						return c
					},
					always: function () {
						return e.done(arguments).fail(arguments), this
					},
					then: function () {
						var a = arguments;
						return n.Deferred(function (c) {
							n.each(b, function (b, f) {
								var g = n.isFunction(a[b]) && a[b];
								e[f[1]](function () {
									var a = g && g.apply(this, arguments);
									a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
								})
							}), a = null
						}).promise()
					},
					promise: function (a) {
						return null != a ? n.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, n.each(b, function (a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function () {
					c = h
				}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
					return e[f[0] + "With"](this === e ? d : this, arguments), this
				}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function (a) {
			var b = 0,
				c = d.call(arguments),
				e = c.length,
				f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
				g = 1 === f ? a : n.Deferred(),
				h = function (a, b, c) {
					return function (e) {
						b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
					}
				},
				i, j, k;
			if (e > 1)
				for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
			return f || g.resolveWith(k, c), g.promise()
		}
	});
	var H;
	n.fn.ready = function (a) {
		return n.ready.promise().done(a), this
	}, n.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function (a) {
			a ? n.readyWait++ : n.ready(!0)
		},
		ready: function (a) {
			(a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
		}
	});

	function I() {
		l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
	}
	n.ready.promise = function (b) {
		return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
	}, n.ready.promise();
	var J = n.access = function (a, b, c, d, e, f, g) {
		var h = 0,
			i = a.length,
			j = null == c;
		if ("object" === n.type(c)) {
			e = !0;
			for (h in c) n.access(a, b, h, c[h], !0, f, g)
		} else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
				return j.call(n(a), c)
			})), b))
			for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
	};
	n.acceptData = function (a) {
		return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
	};

	function K() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function () {
				return {}
			}
		}), this.expando = n.expando + K.uid++
	}
	K.uid = 1, K.accepts = n.acceptData, K.prototype = {
		key: function (a) {
			if (!K.accepts(a)) return 0;
			var b = {},
				c = a[this.expando];
			if (!c) {
				c = K.uid++;
				try {
					b[this.expando] = {
						value: c
					}, Object.defineProperties(a, b)
				} catch (d) {
					b[this.expando] = c, n.extend(a, b)
				}
			}
			return this.cache[c] || (this.cache[c] = {}), c
		},
		set: function (a, b, c) {
			var d, e = this.key(a),
				f = this.cache[e];
			if ("string" == typeof b) f[b] = c;
			else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
			else
				for (d in b) f[d] = b[d];
			return f
		},
		get: function (a, b) {
			var c = this.cache[this.key(a)];
			return void 0 === b ? c : c[b]
		},
		access: function (a, b, c) {
			var d;
			return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
		},
		remove: function (a, b) {
			var c, d, e, f = this.key(a),
				g = this.cache[f];
			if (void 0 === b) this.cache[f] = {};
			else {
				n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
				while (c--) delete g[d[c]]
			}
		},
		hasData: function (a) {
			return !n.isEmptyObject(this.cache[a[this.expando]] || {})
		},
		discard: function (a) {
			a[this.expando] && delete this.cache[a[this.expando]]
		}
	};
	var L = new K,
		M = new K,
		N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		O = /([A-Z])/g;

	function P(a, b, c) {
		var d;
		if (void 0 === c && 1 === a.nodeType)
			if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
				try {
					c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
				} catch (e) {}
				M.set(a, b, c)
			} else c = void 0;
		return c
	}
	n.extend({
		hasData: function (a) {
			return M.hasData(a) || L.hasData(a)
		},
		data: function (a, b, c) {
			return M.access(a, b, c)
		},
		removeData: function (a, b) {
			M.remove(a, b)
		},
		_data: function (a, b, c) {
			return L.access(a, b, c)
		},
		_removeData: function (a, b) {
			L.remove(a, b)
		}
	}), n.fn.extend({
		data: function (a, b) {
			var c, d, e, f = this[0],
				g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
					c = g.length;
					while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
					L.set(f, "hasDataAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function () {
				M.set(this, a)
			}) : J(this, function (b) {
				var c, d = n.camelCase(a);
				if (f && void 0 === b) {
					if (c = M.get(f, a), void 0 !== c) return c;
					if (c = M.get(f, d), void 0 !== c) return c;
					if (c = P(f, d, void 0), void 0 !== c) return c
				} else this.each(function () {
					var c = M.get(this, d);
					M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
				})
			}, null, b, arguments.length > 1, null, !0)
		},
		removeData: function (a) {
			return this.each(function () {
				M.remove(this, a)
			})
		}
	}), n.extend({
		queue: function (a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
		},
		dequeue: function (a, b) {
			b = b || "fx";
			var c = n.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = n._queueHooks(a, b),
				g = function () {
					n.dequeue(a, b)
				};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function (a, b) {
			var c = b + "queueHooks";
			return L.get(a, c) || L.access(a, c, {
				empty: n.Callbacks("once memory").add(function () {
					L.remove(a, [b + "queue", c])
				})
			})
		}
	}), n.fn.extend({
		queue: function (a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = n.queue(this, a, b);
				n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
			})
		},
		dequeue: function (a) {
			return this.each(function () {
				n.dequeue(this, a)
			})
		},
		clearQueue: function (a) {
			return this.queue(a || "fx", [])
		},
		promise: function (a, b) {
			var c, d = 1,
				e = n.Deferred(),
				f = this,
				g = this.length,
				h = function () {
					--d || e.resolveWith(f, [f])
				};
			"string" != typeof a && (b = a, a = void 0), a = a || "fx";
			while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		R = ["Top", "Right", "Bottom", "Left"],
		S = function (a, b) {
			return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
		},
		T = /^(?:checkbox|radio)$/i;
	! function () {
		var a = l.createDocumentFragment(),
			b = a.appendChild(l.createElement("div")),
			c = l.createElement("input");
		c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
	}();
	var U = "undefined";
	k.focusinBubbles = "onfocusin" in a;
	var V = /^key/,
		W = /^(?:mouse|pointer|contextmenu)|click/,
		X = /^(?:focusinfocus|focusoutblur)$/,
		Y = /^([^.]*)(?:\.(.+)|)$/;

	function Z() {
		return !0
	}

	function $() {
		return !1
	}

	function _() {
		try {
			return l.activeElement
		} catch (a) {}
	}
	n.event = {
		global: {},
		add: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
			if (r) {
				c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
					return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
				}), b = (b || "").match(E) || [""], j = b.length;
				while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
					type: o,
					origType: q,
					data: d,
					handler: c,
					guid: c.guid,
					selector: e,
					needsContext: e && n.expr.match.needsContext.test(e),
					namespace: p.join(".")
				}, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
			}
		},
		remove: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
			if (r && (i = r.events)) {
				b = (b || "").match(E) || [""], j = b.length;
				while (j--)
					if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
						l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
						while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
						g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
					} else
						for (o in i) n.event.remove(a, o + b[j], c, d, !0);
				n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
			}
		},
		trigger: function (b, c, d, e) {
			var f, g, h, i, k, m, o, p = [d || l],
				q = j.call(b, "type") ? b.type : b,
				r = j.call(b, "namespace") ? b.namespace.split(".") : [];
			if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
				if (!e && !o.noBubble && !n.isWindow(d)) {
					for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
					h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
				}
				f = 0;
				while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
				return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
			}
		},
		dispatch: function (a) {
			a = n.event.fix(a);
			var b, c, e, f, g, h = [],
				i = d.call(arguments),
				j = (L.get(this, "events") || {})[a.type] || [],
				k = n.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				h = n.event.handlers.call(this, a, j), b = 0;
				while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, c = 0;
					while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
				}
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		},
		handlers: function (a, b) {
			var c, d, e, f, g = [],
				h = b.delegateCount,
				i = a.target;
			if (h && i.nodeType && (!a.button || "click" !== a.type))
				for (; i !== this; i = i.parentNode || this)
					if (i.disabled !== !0 || "click" !== a.type) {
						for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
						d.length && g.push({
							elem: i,
							handlers: d
						})
					} return h < b.length && g.push({
				elem: this,
				handlers: b.slice(h)
			}), g
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (a, b) {
				return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (a, b) {
				var c, d, e, f = b.button;
				return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
			}
		},
		fix: function (a) {
			if (a[n.expando]) return a;
			var b, c, d, e = a.type,
				f = a,
				g = this.fixHooks[e];
			g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
			while (b--) c = d[b], a[c] = f[c];
			return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					return this !== _() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					return this === _() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function (a) {
					return n.nodeName(a.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
				}
			}
		},
		simulate: function (a, b, c, d) {
			var e = n.extend(new n.Event, c, {
				type: a,
				isSimulated: !0,
				originalEvent: {}
			});
			d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, n.removeEvent = function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	}, n.Event = function (a, b) {
		return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
	}, n.Event.prototype = {
		isDefaultPrevented: $,
		isPropagationStopped: $,
		isImmediatePropagationStopped: $,
		preventDefault: function () {
			var a = this.originalEvent;
			this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
		},
		stopPropagation: function () {
			var a = this.originalEvent;
			this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, n.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (a, b) {
		n.event.special[a] = {
			delegateType: b,
			bindType: b,
			handle: function (a) {
				var c, d = this,
					e = a.relatedTarget,
					f = a.handleObj;
				return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), k.focusinBubbles || n.each({
		focus: "focusin",
		blur: "focusout"
	}, function (a, b) {
		var c = function (a) {
			n.event.simulate(b, a.target, n.event.fix(a), !0)
		};
		n.event.special[b] = {
			setup: function () {
				var d = this.ownerDocument || this,
					e = L.access(d, b);
				e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
			},
			teardown: function () {
				var d = this.ownerDocument || this,
					e = L.access(d, b) - 1;
				e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
			}
		}
	}), n.fn.extend({
		on: function (a, b, c, d, e) {
			var f, g;
			if ("object" == typeof a) {
				"string" != typeof b && (c = c || b, b = void 0);
				for (g in a) this.on(g, b, c, a[g], e);
				return this
			}
			if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
			else if (!d) return this;
			return 1 === e && (f = d, d = function (a) {
				return n().off(a), f.apply(this, arguments)
			}, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
				n.event.add(this, a, d, c, b)
			})
		},
		one: function (a, b, c, d) {
			return this.on(a, b, c, d, 1)
		},
		off: function (a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a) this.off(e, b, a[e]);
				return this
			}
			return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
				n.event.remove(this, a, c, b)
			})
		},
		trigger: function (a, b) {
			return this.each(function () {
				n.event.trigger(a, b, this)
			})
		},
		triggerHandler: function (a, b) {
			var c = this[0];
			return c ? n.event.trigger(a, b, c, !0) : void 0
		}
	});
	var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		ba = /<([\w:]+)/,
		ca = /<|&#?\w+;/,
		da = /<(?:script|style|link)/i,
		ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
		fa = /^$|\/(?:java|ecma)script/i,
		ga = /^true\/(.*)/,
		ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		ia = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;

	function ja(a, b) {
		return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
	}

	function ka(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
	}

	function la(a) {
		var b = ga.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function ma(a, b) {
		for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
	}

	function na(a, b) {
		var c, d, e, f, g, h, i, j;
		if (1 === b.nodeType) {
			if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};
				for (e in j)
					for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
			}
			M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
		}
	}

	function oa(a, b) {
		var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
		return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
	}

	function pa(a, b) {
		var c = b.nodeName.toLowerCase();
		"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
	}
	n.extend({
		clone: function (a, b, c) {
			var d, e, f, g, h = a.cloneNode(!0),
				i = n.contains(a.ownerDocument, a);
			if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
				for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
			if (b)
				if (c)
					for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);
				else na(a, h);
			return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h
		},
		buildFragment: function (a, b, c, d) {
			for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
				if (e = a[m], e || 0 === e)
					if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
					else if (ca.test(e)) {
				f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];
				while (j--) f = f.lastChild;
				n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
			} else l.push(b.createTextNode(e));
			k.textContent = "", m = 0;
			while (e = l[m++])
				if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
					j = 0;
					while (e = f[j++]) fa.test(e.type || "") && c.push(e)
				} return k
		},
		cleanData: function (a) {
			for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
				if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
					if (b.events)
						for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
					L.cache[e] && delete L.cache[e]
				}
				delete M.cache[c[M.expando]]
			}
		}
	}), n.fn.extend({
		text: function (a) {
			return J(this, function (a) {
				return void 0 === a ? n.text(this) : this.empty().each(function () {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
				})
			}, null, a, arguments.length)
		},
		append: function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);
					b.appendChild(a)
				}
			})
		},
		prepend: function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = ja(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		},
		before: function () {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this)
			})
		},
		after: function () {
			return this.domManip(arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
			})
		},
		remove: function (a, b) {
			for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
			return this
		},
		empty: function () {
			for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
			return this
		},
		clone: function (a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
				return n.clone(this, a, b)
			})
		},
		html: function (a) {
			return J(this, function (a) {
				var b = this[0] || {},
					c = 0,
					d = this.length;
				if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
				if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = a.replace(aa, "<$1></$2>");
					try {
						for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
						b = 0
					} catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		},
		replaceWith: function () {
			var a = arguments[0];
			return this.domManip(arguments, function (b) {
				a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this)
			}), a && (a.length || a.nodeType) ? this : this.remove()
		},
		detach: function (a) {
			return this.remove(a, !0)
		},
		domManip: function (a, b) {
			a = e.apply([], a);
			var c, d, f, g, h, i, j = 0,
				l = this.length,
				m = this,
				o = l - 1,
				p = a[0],
				q = n.isFunction(p);
			if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
				var d = m.eq(c);
				q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
			});
			if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
				for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
				if (g)
					for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")))
			}
			return this
		}
	}), n.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (a, b) {
		n.fn[a] = function (a) {
			for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
			return this.pushStack(d)
		}
	});
	var qa, ra = {};

	function sa(b, c) {
		var d, e = n(c.createElement(b)).appendTo(c.body),
			f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
		return e.detach(), f
	}

	function ta(a) {
		var b = l,
			c = ra[a];
		return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c
	}
	var ua = /^margin/,
		va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
		wa = function (b) {
			return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
		};

	function xa(a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
	}

	function ya(a, b) {
		return {
			get: function () {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}! function () {
		var b, c, d = l.documentElement,
			e = l.createElement("div"),
			f = l.createElement("div");
		if (f.style) {
			f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

			function g() {
				f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
				var g = a.getComputedStyle(f, null);
				b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
			}
			a.getComputedStyle && n.extend(k, {
				pixelPosition: function () {
					return g(), b
				},
				boxSizingReliable: function () {
					return null == c && g(), c
				},
				reliableMarginRight: function () {
					var b, c = f.appendChild(l.createElement("div"));
					return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
				}
			})
		}
	}(), n.swap = function (a, b, c, d) {
		var e, f, g = {};
		for (f in b) g[f] = a.style[f], a.style[f] = b[f];
		e = c.apply(a, d || []);
		for (f in b) a.style[f] = g[f];
		return e
	};
	var za = /^(none|table(?!-c[ea]).+)/,
		Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
		Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
		Ca = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Da = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ea = ["Webkit", "O", "Moz", "ms"];

	function Fa(a, b) {
		if (b in a) return b;
		var c = b[0].toUpperCase() + b.slice(1),
			d = b,
			e = Ea.length;
		while (e--)
			if (b = Ea[e] + c, b in a) return b;
		return d
	}

	function Ga(a, b, c) {
		var d = Aa.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function Ha(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
		return g
	}

	function Ia(a, b, c) {
		var d = !0,
			e = "width" === b ? a.offsetWidth : a.offsetHeight,
			f = wa(a),
			g = "border-box" === n.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
			d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}

	function Ja(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
		for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}
	n.extend({
		cssHooks: {
			opacity: {
				get: function (a, b) {
					if (b) {
						var c = xa(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function (a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = n.camelCase(b),
					i = a.style;
				return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
			}
		},
		css: function (a, b, c, d) {
			var e, f, g, h = n.camelCase(b);
			return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
		}
	}), n.each(["height", "width"], function (a, b) {
		n.cssHooks[b] = {
			get: function (a, c, d) {
				return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
					return Ia(a, b, d)
				}) : Ia(a, b, d) : void 0
			},
			set: function (a, c, d) {
				var e = d && wa(a);
				return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
		return b ? n.swap(a, {
			display: "inline-block"
		}, xa, [a, "marginRight"]) : void 0
	}), n.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (a, b) {
		n.cssHooks[a + b] = {
			expand: function (c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, ua.test(a) || (n.cssHooks[a + b].set = Ga)
	}), n.fn.extend({
		css: function (a, b) {
			return J(this, function (a, b, c) {
				var d, e, f = {},
					g = 0;
				if (n.isArray(b)) {
					for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
			}, a, b, arguments.length > 1)
		},
		show: function () {
			return Ja(this, !0)
		},
		hide: function () {
			return Ja(this)
		},
		toggle: function (a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				S(this) ? n(this).show() : n(this).hide()
			})
		}
	});

	function Ka(a, b, c, d, e) {
		return new Ka.prototype.init(a, b, c, d, e)
	}
	n.Tween = Ka, Ka.prototype = {
		constructor: Ka,
		init: function (a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
		},
		cur: function () {
			var a = Ka.propHooks[this.prop];
			return a && a.get ? a.get(this) : Ka.propHooks._default.get(this)
		},
		run: function (a) {
			var b, c = Ka.propHooks[this.prop];
			return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this
		}
	}, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
		_default: {
			get: function (a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			},
			set: function (a) {
				n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
		set: function (a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, n.easing = {
		linear: function (a) {
			return a
		},
		swing: function (a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, n.fx = Ka.prototype.init, n.fx.step = {};
	var La, Ma, Na = /^(?:toggle|show|hide)$/,
		Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
		Pa = /queueHooks$/,
		Qa = [Va],
		Ra = {
			"*": [function (a, b) {
				var c = this.createTween(a, b),
					d = c.cur(),
					e = Oa.exec(b),
					f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
					g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
					h = 1,
					i = 20;
				if (g && g[3] !== f) {
					f = f || g[3], e = e || [], g = +d || 1;
					do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
				}
				return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
			}]
		};

	function Sa() {
		return setTimeout(function () {
			La = void 0
		}), La = n.now()
	}

	function Ta(a, b) {
		var c, d = 0,
			e = {
				height: a
			};
		for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
		return b && (e.opacity = e.width = a), e
	}

	function Ua(a, b, c) {
		for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++)
			if (d = e[f].call(c, b, a)) return d
	}

	function Va(a, b, c) {
		var d, e, f, g, h, i, j, k, l = this,
			m = {},
			o = a.style,
			p = a.nodeType && S(a),
			q = L.get(a, "fxshow");
		c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
			h.unqueued || i()
		}), h.unqueued++, l.always(function () {
			l.always(function () {
				h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
			})
		})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
			o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
		}));
		for (d in b)
			if (e = b[d], Na.exec(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
					if ("show" !== e || !q || void 0 === q[d]) continue;
					p = !0
				}
				m[d] = q && q[d] || n.style(a, d)
			} else j = void 0;
		if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
		else {
			q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
				n(a).hide()
			}), l.done(function () {
				var b;
				L.remove(a, "fxshow");
				for (b in m) n.style(a, b, m[b])
			});
			for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}

	function Wa(a, b) {
		var c, d, e, f, g;
		for (c in a)
			if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for (c in f) c in a || (a[c] = f[c], b[c] = e)
			} else b[d] = e
	}

	function Xa(a, b, c) {
		var d, e, f = 0,
			g = Qa.length,
			h = n.Deferred().always(function () {
				delete i.elem
			}),
			i = function () {
				if (e) return !1;
				for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
				return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: n.extend({}, b),
				opts: n.extend(!0, {
					specialEasing: {}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: La || Sa(),
				duration: c.duration,
				tweens: [],
				createTween: function (b, c) {
					var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(d), d
				},
				stop: function (b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					if (e) return this;
					for (e = !0; d > c; c++) j.tweens[c].run(1);
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		for (Wa(k, j.opts.specialEasing); g > f; f++)
			if (d = Qa[f].call(j, a, k, j.opts)) return d;
		return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
			elem: a,
			anim: j,
			queue: j.opts.queue
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}
	n.Animation = n.extend(Xa, {
			tweener: function (a, b) {
				n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
				for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b)
			},
			prefilter: function (a, b) {
				b ? Qa.unshift(a) : Qa.push(a)
			}
		}), n.speed = function (a, b, c) {
			var d = a && "object" == typeof a ? n.extend({}, a) : {
				complete: c || !c && b || n.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !n.isFunction(b) && b
			};
			return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
				n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
			}, d
		}, n.fn.extend({
			fadeTo: function (a, b, c, d) {
				return this.filter(S).css("opacity", 0).show().end().animate({
					opacity: b
				}, a, c, d)
			},
			animate: function (a, b, c, d) {
				var e = n.isEmptyObject(a),
					f = n.speed(b, c, d),
					g = function () {
						var b = Xa(this, n.extend({}, a), f);
						(e || L.get(this, "finish")) && b.stop(!0)
					};
				return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
			},
			stop: function (a, b, c) {
				var d = function (a) {
					var b = a.stop;
					delete a.stop, b(c)
				};
				return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
					var b = !0,
						e = null != a && a + "queueHooks",
						f = n.timers,
						g = L.get(this);
					if (e) g[e] && g[e].stop && d(g[e]);
					else
						for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
					for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
					(b || !c) && n.dequeue(this, a)
				})
			},
			finish: function (a) {
				return a !== !1 && (a = a || "fx"), this.each(function () {
					var b, c = L.get(this),
						d = c[a + "queue"],
						e = c[a + "queueHooks"],
						f = n.timers,
						g = d ? d.length : 0;
					for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
					for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
					delete c.finish
				})
			}
		}), n.each(["toggle", "show", "hide"], function (a, b) {
			var c = n.fn[b];
			n.fn[b] = function (a, d, e) {
				return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e)
			}
		}), n.each({
			slideDown: Ta("show"),
			slideUp: Ta("hide"),
			slideToggle: Ta("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (a, b) {
			n.fn[a] = function (a, c, d) {
				return this.animate(b, a, c, d)
			}
		}), n.timers = [], n.fx.tick = function () {
			var a, b = 0,
				c = n.timers;
			for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
			c.length || n.fx.stop(), La = void 0
		}, n.fx.timer = function (a) {
			n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
		}, n.fx.interval = 13, n.fx.start = function () {
			Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
		}, n.fx.stop = function () {
			clearInterval(Ma), Ma = null
		}, n.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, n.fn.delay = function (a, b) {
			return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
				var d = setTimeout(b, a);
				c.stop = function () {
					clearTimeout(d)
				}
			})
		},
		function () {
			var a = l.createElement("input"),
				b = l.createElement("select"),
				c = b.appendChild(l.createElement("option"));
			a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
		}();
	var Ya, Za, $a = n.expr.attrHandle;
	n.fn.extend({
		attr: function (a, b) {
			return J(this, n.attr, a, b, arguments.length > 1)
		},
		removeAttr: function (a) {
			return this.each(function () {
				n.removeAttr(this, a)
			})
		}
	}), n.extend({
		attr: function (a, b, c) {
			var d, e, f = a.nodeType;
			if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)),
				void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
		},
		removeAttr: function (a, b) {
			var c, d, e = 0,
				f = b && b.match(E);
			if (f && 1 === a.nodeType)
				while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
		},
		attrHooks: {
			type: {
				set: function (a, b) {
					if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		}
	}), Za = {
		set: function (a, b, c) {
			return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
		}
	}, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = $a[b] || n.find.attr;
		$a[b] = function (a, b, d) {
			var e, f;
			return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e
		}
	});
	var _a = /^(?:input|select|textarea|button)$/i;
	n.fn.extend({
		prop: function (a, b) {
			return J(this, n.prop, a, b, arguments.length > 1)
		},
		removeProp: function (a) {
			return this.each(function () {
				delete this[n.propFix[a] || a]
			})
		}
	}), n.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function (a, b, c) {
			var d, e, f, g = a.nodeType;
			if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		},
		propHooks: {
			tabIndex: {
				get: function (a) {
					return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1
				}
			}
		}
	}), k.optSelected || (n.propHooks.selected = {
		get: function (a) {
			var b = a.parentNode;
			return b && b.parentNode && b.parentNode.selectedIndex, null
		}
	}), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		n.propFix[this.toLowerCase()] = this
	});
	var ab = /[\t\r\n\f]/g;
	n.fn.extend({
		addClass: function (a) {
			var b, c, d, e, f, g, h = "string" == typeof a && a,
				i = 0,
				j = this.length;
			if (n.isFunction(a)) return this.each(function (b) {
				n(this).addClass(a.call(this, b, this.className))
			});
			if (h)
				for (b = (a || "").match(E) || []; j > i; i++)
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
						f = 0;
						while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
						g = n.trim(d), c.className !== g && (c.className = g)
					} return this
		},
		removeClass: function (a) {
			var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
				i = 0,
				j = this.length;
			if (n.isFunction(a)) return this.each(function (b) {
				n(this).removeClass(a.call(this, b, this.className))
			});
			if (h)
				for (b = (a || "").match(E) || []; j > i; i++)
					if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
						f = 0;
						while (e = b[f++])
							while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
						g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
					} return this
		},
		toggleClass: function (a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
				n(this).toggleClass(a.call(this, c, this.className, b), b)
			} : function () {
				if ("string" === c) {
					var b, d = 0,
						e = n(this),
						f = a.match(E) || [];
					while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
				} else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
			})
		},
		hasClass: function (a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
				if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
			return !1
		}
	});
	var bb = /\r/g;
	n.fn.extend({
		val: function (a) {
			var b, c, d, e = this[0]; {
				if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
						return null == a ? "" : a + ""
					})), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
			}
		}
	}), n.extend({
		valHooks: {
			option: {
				get: function (a) {
					var b = n.find.attr(a, "value");
					return null != b ? b : n.trim(n.text(a))
				}
			},
			select: {
				get: function (a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
						if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
							if (b = n(c).val(), f) return b;
							g.push(b)
						} return g
				},
				set: function (a, b) {
					var c, d, e = a.options,
						f = n.makeArray(b),
						g = e.length;
					while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
					return c || (a.selectedIndex = -1), f
				}
			}
		}
	}), n.each(["radio", "checkbox"], function () {
		n.valHooks[this] = {
			set: function (a, b) {
				return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
			}
		}, k.checkOn || (n.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value
		})
	}), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
		n.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
		}
	}), n.fn.extend({
		hover: function (a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		},
		bind: function (a, b, c) {
			return this.on(a, null, b, c)
		},
		unbind: function (a, b) {
			return this.off(a, null, b)
		},
		delegate: function (a, b, c, d) {
			return this.on(b, a, c, d)
		},
		undelegate: function (a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
		}
	});
	var cb = n.now(),
		db = /\?/;
	n.parseJSON = function (a) {
		return JSON.parse(a + "")
	}, n.parseXML = function (a) {
		var b, c;
		if (!a || "string" != typeof a) return null;
		try {
			c = new DOMParser, b = c.parseFromString(a, "text/xml")
		} catch (d) {
			b = void 0
		}
		return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
	};
	var eb = /#.*$/,
		fb = /([?&])_=[^&]*/,
		gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		ib = /^(?:GET|HEAD)$/,
		jb = /^\/\//,
		kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		lb = {},
		mb = {},
		nb = "*/".concat("*"),
		ob = a.location.href,
		pb = kb.exec(ob.toLowerCase()) || [];

	function qb(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0,
				f = b.toLowerCase().match(E) || [];
			if (n.isFunction(c))
				while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function rb(a, b, c, d) {
		var e = {},
			f = a === mb;

		function g(h) {
			var i;
			return e[h] = !0, n.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
			}), i
		}
		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}

	function sb(a, b) {
		var c, d, e = n.ajaxSettings.flatOptions || {};
		for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		return d && n.extend(!0, a, d), a
	}

	function tb(a, b, c) {
		var d, e, f, g, h = a.contents,
			i = a.dataTypes;
		while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		if (d)
			for (e in h)
				if (h[e] && h[e].test(d)) {
					i.unshift(e);
					break
				} if (i[0] in c) f = i[0];
		else {
			for (e in c) {
				if (!i[0] || a.converters[e + " " + i[0]]) {
					f = e;
					break
				}
				g || (g = e)
			}
			f = f || g
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function ub(a, b, c, d) {
		var e, f, g, h, i, j = {},
			k = a.dataTypes.slice();
		if (k[1])
			for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
		f = k.shift();
		while (f)
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
				if ("*" === f) f = i;
				else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g)
				for (e in j)
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
						break
					} if (g !== !0)
				if (g && a["throws"]) b = g(b);
				else try {
					b = g(b)
				} catch (l) {
					return {
						state: "parsererror",
						error: g ? l : "No conversion from " + i + " to " + f
					}
				}
		}
		return {
			state: "success",
			data: b
		}
	}
	n.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: ob,
			type: "GET",
			isLocal: hb.test(pb[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": nb,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": n.parseJSON,
				"text xml": n.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (a, b) {
			return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a)
		},
		ajaxPrefilter: qb(lb),
		ajaxTransport: qb(mb),
		ajax: function (a, b) {
			"object" == typeof a && (b = a, a = void 0), b = b || {};
			var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
				l = k.context || k,
				m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
				o = n.Deferred(),
				p = n.Callbacks("once memory"),
				q = k.statusCode || {},
				r = {},
				s = {},
				t = 0,
				u = "canceled",
				v = {
					readyState: 0,
					getResponseHeader: function (a) {
						var b;
						if (2 === t) {
							if (!f) {
								f = {};
								while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2]
							}
							b = f[a.toLowerCase()]
						}
						return null == b ? null : b
					},
					getAllResponseHeaders: function () {
						return 2 === t ? e : null
					},
					setRequestHeader: function (a, b) {
						var c = a.toLowerCase();
						return t || (a = s[c] = s[c] || a, r[a] = b), this
					},
					overrideMimeType: function (a) {
						return t || (k.mimeType = a), this
					},
					statusCode: function (a) {
						var b;
						if (a)
							if (2 > t)
								for (b in a) q[b] = [q[b], a[b]];
							else v.always(a[v.status]);
						return this
					},
					abort: function (a) {
						var b = a || u;
						return c && c.abort(b), x(0, b), this
					}
				};
			if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;
			i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
			for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
			if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
			u = "abort";
			for (j in {
					success: 1,
					error: 1,
					complete: 1
				}) v[j](k[j]);
			if (c = rb(mb, k, b, v)) {
				v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
					v.abort("timeout")
				}, k.timeout));
				try {
					t = 1, c.send(r, x)
				} catch (w) {
					if (!(2 > t)) throw w;
					x(-1, w)
				}
			} else x(-1, "No Transport");

			function x(a, b, f, h) {
				var j, r, s, u, w, x = b;
				2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
			}
			return v
		},
		getJSON: function (a, b, c) {
			return n.get(a, b, c, "json")
		},
		getScript: function (a, b) {
			return n.get(a, void 0, b, "script")
		}
	}), n.each(["get", "post"], function (a, b) {
		n[b] = function (a, c, d, e) {
			return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
				url: a,
				type: b,
				dataType: e,
				data: c,
				success: d
			})
		}
	}), n._evalUrl = function (a) {
		return n.ajax({
			url: a,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, n.fn.extend({
		wrapAll: function (a) {
			var b;
			return n.isFunction(a) ? this.each(function (b) {
				n(this).wrapAll(a.call(this, b))
			}) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
				var a = this;
				while (a.firstElementChild) a = a.firstElementChild;
				return a
			}).append(this)), this)
		},
		wrapInner: function (a) {
			return this.each(n.isFunction(a) ? function (b) {
				n(this).wrapInner(a.call(this, b))
			} : function () {
				var b = n(this),
					c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		},
		wrap: function (a) {
			var b = n.isFunction(a);
			return this.each(function (c) {
				n(this).wrapAll(b ? a.call(this, c) : a)
			})
		},
		unwrap: function () {
			return this.parent().each(function () {
				n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
			}).end()
		}
	}), n.expr.filters.hidden = function (a) {
		return a.offsetWidth <= 0 && a.offsetHeight <= 0
	}, n.expr.filters.visible = function (a) {
		return !n.expr.filters.hidden(a)
	};
	var vb = /%20/g,
		wb = /\[\]$/,
		xb = /\r?\n/g,
		yb = /^(?:submit|button|image|reset|file)$/i,
		zb = /^(?:input|select|textarea|keygen)/i;

	function Ab(a, b, c, d) {
		var e;
		if (n.isArray(b)) n.each(b, function (b, e) {
			c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
		});
		else if (c || "object" !== n.type(b)) d(a, b);
		else
			for (e in b) Ab(a + "[" + e + "]", b[e], c, d)
	}
	n.param = function (a, b) {
		var c, d = [],
			e = function (a, b) {
				b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
			e(this.name, this.value)
		});
		else
			for (c in a) Ab(c, a[c], b, e);
		return d.join("&").replace(vb, "+")
	}, n.fn.extend({
		serialize: function () {
			return n.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var a = n.prop(this, "elements");
				return a ? n.makeArray(a) : this
			}).filter(function () {
				var a = this.type;
				return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a))
			}).map(function (a, b) {
				var c = n(this).val();
				return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
					return {
						name: b.name,
						value: a.replace(xb, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(xb, "\r\n")
				}
			}).get()
		}
	}), n.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest
		} catch (a) {}
	};
	var Bb = 0,
		Cb = {},
		Db = {
			0: 200,
			1223: 204
		},
		Eb = n.ajaxSettings.xhr();
	a.attachEvent && a.attachEvent("onunload", function () {
		for (var a in Cb) Cb[a]()
	}), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
		var b;
		return k.cors || Eb && !a.crossDomain ? {
			send: function (c, d) {
				var e, f = a.xhr(),
					g = ++Bb;
				if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
					for (e in a.xhrFields) f[e] = a.xhrFields[e];
				a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
				for (e in c) f.setRequestHeader(e, c[e]);
				b = function (a) {
					return function () {
						b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
							text: f.responseText
						} : void 0, f.getAllResponseHeaders()))
					}
				}, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
				try {
					f.send(a.hasContent && a.data || null)
				} catch (h) {
					if (b) throw h
				}
			},
			abort: function () {
				b && b()
			}
		} : void 0
	}), n.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (a) {
				return n.globalEval(a), a
			}
		}
	}), n.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
	}), n.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, c;
			return {
				send: function (d, e) {
					b = n("<script>").prop({
						async: !0,
						charset: a.scriptCharset,
						src: a.url
					}).on("load error", c = function (a) {
						b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
					}), l.head.appendChild(b[0])
				},
				abort: function () {
					c && c()
				}
			}
		}
	});
	var Fb = [],
		Gb = /(=)\?(?=&|$)|\?\?/;
	n.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var a = Fb.pop() || n.expando + "_" + cb++;
			return this[a] = !0, a
		}
	}), n.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || n.error(e + " was not called"), g[0]
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments
		}, d.always(function () {
			a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
		}), "script") : void 0
	}), n.parseHTML = function (a, b, c) {
		if (!a || "string" != typeof a) return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || l;
		var d = v.exec(a),
			e = !c && [];
		return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
	};
	var Hb = n.fn.load;
	n.fn.load = function (a, b, c) {
		if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
		var d, e, f, g = this,
			h = a.indexOf(" ");
		return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
			url: a,
			type: e,
			dataType: "html",
			data: b
		}).done(function (a) {
			f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
		}).complete(c && function (a, b) {
			g.each(c, f || [a.responseText, b, a])
		}), this
	}, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		n.fn[b] = function (a) {
			return this.on(b, a)
		}
	}), n.expr.filters.animated = function (a) {
		return n.grep(n.timers, function (b) {
			return a === b.elem
		}).length
	};
	var Ib = a.document.documentElement;

	function Jb(a) {
		return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
	}
	n.offset = {
		setOffset: function (a, b, c) {
			var d, e, f, g, h, i, j, k = n.css(a, "position"),
				l = n(a),
				m = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
		}
	}, n.fn.extend({
		offset: function (a) {
			if (arguments.length) return void 0 === a ? this : this.each(function (b) {
				n.offset.setOffset(this, a, b)
			});
			var b, c, d = this[0],
				e = {
					top: 0,
					left: 0
				},
				f = d && d.ownerDocument;
			if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
				top: e.top + c.pageYOffset - b.clientTop,
				left: e.left + c.pageXOffset - b.clientLeft
			}) : e
		},
		position: function () {
			if (this[0]) {
				var a, b, c = this[0],
					d = {
						top: 0,
						left: 0
					};
				return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
					top: b.top - d.top - n.css(c, "marginTop", !0),
					left: b.left - d.left - n.css(c, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				var a = this.offsetParent || Ib;
				while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
				return a || Ib
			})
		}
	}), n.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (b, c) {
		var d = "pageYOffset" === c;
		n.fn[b] = function (e) {
			return J(this, function (b, e, f) {
				var g = Jb(b);
				return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
			}, b, e, arguments.length, null)
		}
	}), n.each(["top", "left"], function (a, b) {
		n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
			return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0
		})
	}), n.each({
		Height: "height",
		Width: "width"
	}, function (a, b) {
		n.each({
			padding: "inner" + a,
			content: b,
			"": "outer" + a
		}, function (c, d) {
			n.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d),
					g = c || (d === !0 || e === !0 ? "margin" : "border");
				return J(this, function (b, c, d) {
					var e;
					return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), n.fn.size = function () {
		return this.length
	}, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
		return n
	});
	var Kb = a.jQuery,
		Lb = a.$;
	return n.noConflict = function (b) {
		return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
	}, typeof b === U && (a.jQuery = a.$ = n), n
});

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=9b6ba0b99bbdcd75b518c364eab3139c)
 * Config saved to config.json and https://gist.github.com/9b6ba0b99bbdcd75b518c364eab3139c
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (t) {
	"use strict";
	var e = t.fn.jquery.split(" ")[0].split(".");
	if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function (t) {
	"use strict";

	function e(e) {
		return this.each(function () {
			var i = t(this),
				n = i.data("bs.alert");
			n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
		})
	}
	var i = '[data-dismiss="alert"]',
		o = function (e) {
			t(e).on("click", i, this.close)
		};
	o.VERSION = "3.3.6", o.TRANSITION_DURATION = 150, o.prototype.close = function (e) {
		function i() {
			a.detach().trigger("closed.bs.alert").remove()
		}
		var n = t(this),
			s = n.attr("data-target");
		s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
		var a = t(s);
		e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
	};
	var n = t.fn.alert;
	t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function () {
		return t.fn.alert = n, this
	}, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), + function (t) {
	"use strict";

	function e(e) {
		return this.each(function () {
			var o = t(this),
				n = o.data("bs.button"),
				s = "object" == typeof e && e;
			n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
		})
	}
	var i = function (e, o) {
		this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
	};
	i.VERSION = "3.3.6", i.DEFAULTS = {
		loadingText: "loading..."
	}, i.prototype.setState = function (e) {
		var i = "disabled",
			o = this.$element,
			n = o.is("input") ? "val" : "html",
			s = o.data();
		e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function () {
			o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
		}, this), 0)
	}, i.prototype.toggle = function () {
		var t = !0,
			e = this.$element.closest('[data-toggle="buttons"]');
		if (e.length) {
			var i = this.$element.find("input");
			"radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
	};
	var o = t.fn.button;
	t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
		return t.fn.button = o, this
	}, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
		var o = t(i.target);
		o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
		t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
	})
}(jQuery), + function (t) {
	"use strict";

	function e(e) {
		return this.each(function () {
			var o = t(this),
				n = o.data("bs.carousel"),
				s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
				a = "string" == typeof e ? e : s.slide;
			n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
		})
	}
	var i = function (e, i) {
		this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
	};
	i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, i.prototype.keydown = function (t) {
		if (!/input|textarea/i.test(t.target.tagName)) {
			switch (t.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			t.preventDefault()
		}
	}, i.prototype.cycle = function (e) {
		return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
	}, i.prototype.getItemIndex = function (t) {
		return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
	}, i.prototype.getItemForDirection = function (t, e) {
		var i = this.getItemIndex(e),
			o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
		if (o && !this.options.wrap) return e;
		var n = "prev" == t ? -1 : 1,
			s = (i + n) % this.$items.length;
		return this.$items.eq(s)
	}, i.prototype.to = function (t) {
		var e = this,
			i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
			e.to(t)
		}) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
	}, i.prototype.pause = function (e) {
		return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, i.prototype.next = function () {
		return this.sliding ? void 0 : this.slide("next")
	}, i.prototype.prev = function () {
		return this.sliding ? void 0 : this.slide("prev")
	}, i.prototype.slide = function (e, o) {
		var n = this.$element.find(".item.active"),
			s = o || this.getItemForDirection(e, n),
			a = this.interval,
			r = "next" == e ? "left" : "right",
			l = this;
		if (s.hasClass("active")) return this.sliding = !1;
		var h = s[0],
			d = t.Event("slide.bs.carousel", {
				relatedTarget: h,
				direction: r
			});
		if (this.$element.trigger(d), !d.isDefaultPrevented()) {
			if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var p = t(this.$indicators.children()[this.getItemIndex(s)]);
				p && p.addClass("active")
			}
			var c = t.Event("slid.bs.carousel", {
				relatedTarget: h,
				direction: r
			});
			return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function () {
				s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
					l.$element.trigger(c)
				}, 0)
			}).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
		}
	};
	var o = t.fn.carousel;
	t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
		return t.fn.carousel = o, this
	};
	var n = function (i) {
		var o, n = t(this),
			s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
		if (s.hasClass("carousel")) {
			var a = t.extend({}, s.data(), n.data()),
				r = n.attr("data-slide-to");
			r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
		}
	};
	t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
		t('[data-ride="carousel"]').each(function () {
			var i = t(this);
			e.call(i, i.data())
		})
	})
}(jQuery), + function (t) {
	"use strict";

	function e(e) {
		var i = e.attr("data-target");
		i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
		var o = i && t(i);
		return o && o.length ? o : e.parent()
	}

	function i(i) {
		i && 3 === i.which || (t(n).remove(), t(s).each(function () {
			var o = t(this),
				n = e(o),
				s = {
					relatedTarget: this
				};
			n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
		}))
	}

	function o(e) {
		return this.each(function () {
			var i = t(this),
				o = i.data("bs.dropdown");
			o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
		})
	}
	var n = ".dropdown-backdrop",
		s = '[data-toggle="dropdown"]',
		a = function (e) {
			t(e).on("click.bs.dropdown", this.toggle)
		};
	a.VERSION = "3.3.6", a.prototype.toggle = function (o) {
		var n = t(this);
		if (!n.is(".disabled, :disabled")) {
			var s = e(n),
				a = s.hasClass("open");
			if (i(), !a) {
				"ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
				var r = {
					relatedTarget: this
				};
				if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented()) return;
				n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
			}
			return !1
		}
	}, a.prototype.keydown = function (i) {
		if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
			var o = t(this);
			if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
				var n = e(o),
					a = n.hasClass("open");
				if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
				var r = " li:not(.disabled):visible a",
					l = n.find(".dropdown-menu" + r);
				if (l.length) {
					var h = l.index(i.target);
					38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
				}
			}
		}
	};
	var r = t.fn.dropdown;
	t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
		return t.fn.dropdown = r, this
	}, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
		t.stopPropagation()
	}).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), + function (t) {
	"use strict";

	function e(e, o) {
		return this.each(function () {
			var n = t(this),
				s = n.data("bs.modal"),
				a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
			s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
		})
	}
	var i = function (e, i) {
		this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, i.prototype.toggle = function (t) {
		return this.isShown ? this.hide() : this.show(t)
	}, i.prototype.show = function (e) {
		var o = this,
			n = t.Event("show.bs.modal", {
				relatedTarget: e
			});
		this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			o.$element.one("mouseup.dismiss.bs.modal", function (e) {
				t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function () {
			var n = t.support.transition && o.$element.hasClass("fade");
			o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
			var s = t.Event("shown.bs.modal", {
				relatedTarget: e
			});
			n ? o.$dialog.one("bsTransitionEnd", function () {
				o.$element.trigger("focus").trigger(s)
			}).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
		}))
	}, i.prototype.hide = function (e) {
		e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
	}, i.prototype.enforceFocus = function () {
		t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
			this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
		}, this))
	}, i.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
			27 == t.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, i.prototype.resize = function () {
		this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
	}, i.prototype.hideModal = function () {
		var t = this;
		this.$element.hide(), this.backdrop(function () {
			t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
		})
	}, i.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, i.prototype.backdrop = function (e) {
		var o = this,
			n = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var s = t.support.transition && n;
			if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
					return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
				}, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
			s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var a = function () {
				o.removeBackdrop(), e && e()
			};
			t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
		} else e && e()
	}, i.prototype.handleUpdate = function () {
		this.adjustDialog()
	}, i.prototype.adjustDialog = function () {
		var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
		})
	}, i.prototype.resetAdjustments = function () {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, i.prototype.checkScrollbar = function () {
		var t = window.innerWidth;
		if (!t) {
			var e = document.documentElement.getBoundingClientRect();
			t = e.right - Math.abs(e.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
	}, i.prototype.setScrollbar = function () {
		var t = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
	}, i.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad)
	}, i.prototype.measureScrollbar = function () {
		var t = document.createElement("div");
		t.className = "modal-scrollbar-measure", this.$body.append(t);
		var e = t.offsetWidth - t.clientWidth;
		return this.$body[0].removeChild(t), e
	};
	var o = t.fn.modal;
	t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
		return t.fn.modal = o, this
	}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
		var o = t(this),
			n = o.attr("href"),
			s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
			a = s.data("bs.modal") ? "toggle" : t.extend({
				remote: !/#/.test(n) && n
			}, s.data(), o.data());
		o.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
			t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
				o.is(":visible") && o.trigger("focus")
			})
		}), e.call(s, a, this)
	})
}(jQuery), + function (t) {
	"use strict";

	function e(e) {
		return this.each(function () {
			var o = t(this),
				n = o.data("bs.tooltip"),
				s = "object" == typeof e && e;
			(n || !/destroy|hide/.test(e)) && (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
		})
	}
	var i = function (t, e) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
	};
	i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, i.prototype.init = function (e, i, o) {
		if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
				click: !1,
				hover: !1,
				focus: !1
			}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
			var a = n[s];
			if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
			else if ("manual" != a) {
				var r = "hover" == a ? "mouseenter" : "focusin",
					l = "hover" == a ? "mouseleave" : "focusout";
				this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = t.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, i.prototype.getDefaults = function () {
		return i.DEFAULTS
	}, i.prototype.getOptions = function (e) {
		return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
			show: e.delay,
			hide: e.delay
		}), e
	}, i.prototype.getDelegateOptions = function () {
		var e = {},
			i = this.getDefaults();
		return this._options && t.each(this._options, function (t, o) {
			i[t] != o && (e[t] = o)
		}), e
	}, i.prototype.enter = function (e) {
		var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
			"in" == i.hoverState && i.show()
		}, i.options.delay.show)) : i.show())
	}, i.prototype.isInStateTrue = function () {
		for (var t in this.inState)
			if (this.inState[t]) return !0;
		return !1
	}, i.prototype.leave = function (e) {
		var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
			"out" == i.hoverState && i.hide()
		}, i.options.delay.hide)) : i.hide())
	}, i.prototype.show = function () {
		var e = t.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(e);
			var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (e.isDefaultPrevented() || !o) return;
			var n = this,
				s = this.tip(),
				a = this.getUID(this.type);
			this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
			var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
				l = /\s?auto?\s?/i,
				h = l.test(r);
			h && (r = r.replace(l, "") || "top"), s.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
			var d = this.getPosition(),
				p = s[0].offsetWidth,
				c = s[0].offsetHeight;
			if (h) {
				var f = r,
					u = this.getPosition(this.$viewport);
				r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r)
			}
			var g = this.getCalculatedOffset(r, d, p, c);
			this.applyPlacement(g, r);
			var v = function () {
				var t = n.hoverState;
				n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
			};
			t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
		}
	}, i.prototype.applyPlacement = function (e, i) {
		var o = this.tip(),
			n = o[0].offsetWidth,
			s = o[0].offsetHeight,
			a = parseInt(o.css("margin-top"), 10),
			r = parseInt(o.css("margin-left"), 10);
		isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
			using: function (t) {
				o.css({
					top: Math.round(t.top),
					left: Math.round(t.left)
				})
			}
		}, e), 0), o.addClass("in");
		var l = o[0].offsetWidth,
			h = o[0].offsetHeight;
		"top" == i && h != s && (e.top = e.top + s - h);
		var d = this.getViewportAdjustedDelta(i, e, l, h);
		d.left ? e.left += d.left : e.top += d.top;
		var p = /top|bottom/.test(i),
			c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
			f = p ? "offsetWidth" : "offsetHeight";
		o.offset(e), this.replaceArrow(c, o[0][f], p)
	}, i.prototype.replaceArrow = function (t, e, i) {
		this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
	}, i.prototype.setContent = function () {
		var t = this.tip(),
			e = this.getTitle();
		t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
	}, i.prototype.hide = function (e) {
		function o() {
			"in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
		}
		var n = this,
			s = t(this.$tip),
			a = t.Event("hide.bs." + this.type);
		return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
	}, i.prototype.fixTitle = function () {
		var t = this.$element;
		(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	}, i.prototype.hasContent = function () {
		return this.getTitle()
	}, i.prototype.getPosition = function (e) {
		e = e || this.$element;
		var i = e[0],
			o = "BODY" == i.tagName,
			n = i.getBoundingClientRect();
		null == n.width && (n = t.extend({}, n, {
			width: n.right - n.left,
			height: n.bottom - n.top
		}));
		var s = o ? {
				top: 0,
				left: 0
			} : e.offset(),
			a = {
				scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
			},
			r = o ? {
				width: t(window).width(),
				height: t(window).height()
			} : null;
		return t.extend({}, n, a, r, s)
	}, i.prototype.getCalculatedOffset = function (t, e, i, o) {
		return "bottom" == t ? {
			top: e.top + e.height,
			left: e.left + e.width / 2 - i / 2
		} : "top" == t ? {
			top: e.top - o,
			left: e.left + e.width / 2 - i / 2
		} : "left" == t ? {
			top: e.top + e.height / 2 - o / 2,
			left: e.left - i
		} : {
			top: e.top + e.height / 2 - o / 2,
			left: e.left + e.width
		}
	}, i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
		var n = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return n;
		var s = this.options.viewport && this.options.viewport.padding || 0,
			a = this.getPosition(this.$viewport);
		if (/right|left/.test(t)) {
			var r = e.top - s - a.scroll,
				l = e.top + s - a.scroll + o;
			r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
		} else {
			var h = e.left - s,
				d = e.left + s + i;
			h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
		}
		return n
	}, i.prototype.getTitle = function () {
		var t, e = this.$element,
			i = this.options;
		return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
	}, i.prototype.getUID = function (t) {
		do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
		return t
	}, i.prototype.tip = function () {
		if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	}, i.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, i.prototype.enable = function () {
		this.enabled = !0
	}, i.prototype.disable = function () {
		this.enabled = !1
	}, i.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	}, i.prototype.toggle = function (e) {
		var i = this;
		e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
	}, i.prototype.destroy = function () {
		var t = this;
		clearTimeout(this.timeout), this.hide(function () {
			t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
		})
	};
	var o = t.fn.tooltip;
	t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
		return t.fn.tooltip = o, this
	}
}(jQuery), + function (t) {
	"use strict";

	function e(e) {
		return this.each(function () {
			var o = t(this),
				n = o.data("bs.popover"),
				s = "object" == typeof e && e;
			(n || !/destroy|hide/.test(e)) && (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
		})
	}
	var i = function (t, e) {
		this.init("popover", t, e)
	};
	if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
	i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
		return i.DEFAULTS
	}, i.prototype.setContent = function () {
		var t = this.tip(),
			e = this.getTitle(),
			i = this.getContent();
		t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
	}, i.prototype.hasContent = function () {
		return this.getTitle() || this.getContent()
	}, i.prototype.getContent = function () {
		var t = this.$element,
			e = this.options;
		return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
	}, i.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var o = t.fn.popover;
	t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
		return t.fn.popover = o, this
	}
}(jQuery), + function (t) {
	"use strict";

	function e(e) {
		return this.each(function () {
			var o = t(this),
				n = o.data("bs.tab");
			n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
		})
	}
	var i = function (e) {
		this.element = t(e)
	};
	i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
		var e = this.element,
			i = e.closest("ul:not(.dropdown-menu)"),
			o = e.data("target");
		if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
			var n = i.find(".active:last a"),
				s = t.Event("hide.bs.tab", {
					relatedTarget: e[0]
				}),
				a = t.Event("show.bs.tab", {
					relatedTarget: n[0]
				});
			if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
				var r = t(o);
				this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
					n.trigger({
						type: "hidden.bs.tab",
						relatedTarget: e[0]
					}), e.trigger({
						type: "shown.bs.tab",
						relatedTarget: n[0]
					})
				})
			}
		}
	}, i.prototype.activate = function (e, o, n) {
		function s() {
			a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
		}
		var a = o.find("> .active"),
			r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
		a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
	};
	var o = t.fn.tab;
	t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
		return t.fn.tab = o, this
	};
	var n = function (i) {
		i.preventDefault(), e.call(t(this), "show")
	};
	t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), + function (t) {
	"use strict";

	function e(e) {
		return this.each(function () {
			var o = t(this),
				n = o.data("bs.affix"),
				s = "object" == typeof e && e;
			n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
		})
	}
	var i = function (e, o) {
		this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
	};
	i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
		offset: 0,
		target: window
	}, i.prototype.getState = function (t, e, i, o) {
		var n = this.$target.scrollTop(),
			s = this.$element.offset(),
			a = this.$target.height();
		if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
		if ("bottom" == this.affixed) return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";
		var r = null == this.affixed,
			l = r ? n : s.top,
			h = r ? a : e;
		return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1
	}, i.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(i.RESET).addClass("affix");
		var t = this.$target.scrollTop(),
			e = this.$element.offset();
		return this.pinnedOffset = e.top - t
	}, i.prototype.checkPositionWithEventLoop = function () {
		setTimeout(t.proxy(this.checkPosition, this), 1)
	}, i.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var e = this.$element.height(),
				o = this.options.offset,
				n = o.top,
				s = o.bottom,
				a = Math.max(t(document).height(), t(document.body).height());
			"object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
			var r = this.getState(a, e, n, s);
			if (this.affixed != r) {
				null != this.unpin && this.$element.css("top", "");
				var l = "affix" + (r ? "-" + r : ""),
					h = t.Event(l + ".bs.affix");
				if (this.$element.trigger(h), h.isDefaultPrevented()) return;
				this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == r && this.$element.offset({
				top: a - e - s
			})
		}
	};
	var o = t.fn.affix;
	t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
		return t.fn.affix = o, this
	}, t(window).on("load", function () {
		t('[data-spy="affix"]').each(function () {
			var i = t(this),
				o = i.data();
			o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
		})
	})
}(jQuery), + function (t) {
	"use strict";

	function e(e) {
		var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
		return t(o)
	}

	function i(e) {
		return this.each(function () {
			var i = t(this),
				n = i.data("bs.collapse"),
				s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
			!n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
		})
	}
	var o = function (e, i) {
		this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	o.VERSION = "3.3.6", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
		toggle: !0
	}, o.prototype.dimension = function () {
		var t = this.$element.hasClass("width");
		return t ? "width" : "height"
	}, o.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
				var s = t.Event("show.bs.collapse");
				if (this.$element.trigger(s), !s.isDefaultPrevented()) {
					n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
					var a = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var r = function () {
						this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!t.support.transition) return r.call(this);
					var l = t.camelCase(["scroll", a].join("-"));
					this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l]);
				}
			}
		}
	}, o.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var e = t.Event("hide.bs.collapse");
			if (this.$element.trigger(e), !e.isDefaultPrevented()) {
				var i = this.dimension();
				this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var n = function () {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
			}
		}
	}, o.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, o.prototype.getParent = function () {
		return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
			var n = t(o);
			this.addAriaAndCollapsedClass(e(n), n)
		}, this)).end()
	}, o.prototype.addAriaAndCollapsedClass = function (t, e) {
		var i = t.hasClass("in");
		t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
	};
	var n = t.fn.collapse;
	t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function () {
		return t.fn.collapse = n, this
	}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
		var n = t(this);
		n.attr("data-target") || o.preventDefault();
		var s = e(n),
			a = s.data("bs.collapse"),
			r = a ? "toggle" : n.data();
		i.call(s, r)
	})
}(jQuery), + function (t) {
	"use strict";

	function e(i, o) {
		this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
	}

	function i(i) {
		return this.each(function () {
			var o = t(this),
				n = o.data("bs.scrollspy"),
				s = "object" == typeof i && i;
			n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
		})
	}
	e.VERSION = "3.3.6", e.DEFAULTS = {
		offset: 10
	}, e.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, e.prototype.refresh = function () {
		var e = this,
			i = "offset",
			o = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
			var e = t(this),
				n = e.data("target") || e.attr("href"),
				s = /^#./.test(n) && t(n);
			return s && s.length && s.is(":visible") && [
				[s[i]().top + o, n]
			] || null
		}).sort(function (t, e) {
			return t[0] - e[0]
		}).each(function () {
			e.offsets.push(this[0]), e.targets.push(this[1])
		})
	}, e.prototype.process = function () {
		var t, e = this.$scrollElement.scrollTop() + this.options.offset,
			i = this.getScrollHeight(),
			o = this.options.offset + i - this.$scrollElement.height(),
			n = this.offsets,
			s = this.targets,
			a = this.activeTarget;
		if (this.scrollHeight != i && this.refresh(), e >= o) return a != (t = s[s.length - 1]) && this.activate(t);
		if (a && e < n[0]) return this.activeTarget = null, this.clear();
		for (t = n.length; t--;) a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
	}, e.prototype.activate = function (e) {
		this.activeTarget = e, this.clear();
		var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
			o = t(i).parents("li").addClass("active");
		o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
	}, e.prototype.clear = function () {
		t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var o = t.fn.scrollspy;
	t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
		return t.fn.scrollspy = o, this
	}, t(window).on("load.bs.scrollspy.data-api", function () {
		t('[data-spy="scroll"]').each(function () {
			var e = t(this);
			i.call(e, e.data())
		})
	})
}(jQuery), + function (t) {
	"use strict";

	function e() {
		var t = document.createElement("bootstrap"),
			e = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var i in e)
			if (void 0 !== t.style[i]) return {
				end: e[i]
			};
		return !1
	}
	t.fn.emulateTransitionEnd = function (e) {
		var i = !1,
			o = this;
		t(this).one("bsTransitionEnd", function () {
			i = !0
		});
		var n = function () {
			i || t(o).trigger(t.support.transition.end)
		};
		return setTimeout(n, e), this
	}, t(function () {
		t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
			bindType: t.support.transition.end,
			delegateType: t.support.transition.end,
			handle: function (e) {
				return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery);


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c * (t /= d) * t * t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t == 0) return b;
		if (t == d) return b + c;
		if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d) == 1) return b + c;
		if (!p) p = d * .3;
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if (t == 0) return b;
		if ((t /= d / 2) == 2) return b + c;
		if (!p) p = d * (.3 * 1.5);
		if (a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t /= d) < (1 / 2.75)) {
			return c * (7.5625 * t * t) + b;
		} else if (t < (2 / 2.75)) {
			return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
		} else if (t < (2.5 / 2.75)) {
			return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
		} else {
			return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */


/*! device.js 0.1.57 */
(function () {
	var a, b, c, d, e, f, g, h, i;
	window.device = {}, b = window.document.documentElement, i = window.navigator.userAgent.toLowerCase(), device.ios = function () {
		return device.iphone() || device.ipod() || device.ipad()
	}, device.iphone = function () {
		return c("iphone")
	}, device.ipod = function () {
		return c("ipod")
	}, device.ipad = function () {
		return c("ipad")
	}, device.android = function () {
		return c("android")
	}, device.androidPhone = function () {
		return device.android() && c("mobile")
	}, device.androidTablet = function () {
		return device.android() && !c("mobile")
	}, device.blackberry = function () {
		return c("blackberry") || c("bb10") || c("rim")
	}, device.blackberryPhone = function () {
		return device.blackberry() && !c("tablet")
	}, device.blackberryTablet = function () {
		return device.blackberry() && c("tablet")
	}, device.windows = function () {
		return c("windows")
	}, device.windowsPhone = function () {
		return device.windows() && c("phone")
	}, device.windowsTablet = function () {
		return device.windows() && c("touch")
	}, device.fxos = function () {
		return c("(mobile; rv:") || c("(tablet; rv:")
	}, device.fxosPhone = function () {
		return device.fxos() && c("mobile")
	}, device.fxosTablet = function () {
		return device.fxos() && c("tablet")
	}, device.mobile = function () {
		return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone()
	}, device.tablet = function () {
		return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet()
	}, device.portrait = function () {
		return 90 !== Math.abs(window.orientation)
	}, device.landscape = function () {
		return 90 === Math.abs(window.orientation)
	}, c = function (a) {
		return -1 !== i.indexOf(a)
	}, e = function (a) {
		var c;
		return c = new RegExp(a, "i"), b.className.match(c)
	}, a = function (a) {
		return e(a) ? void 0 : b.className += " " + a
	}, g = function (a) {
		return e(a) ? b.className = b.className.replace(a, "") : void 0
	}, device.ios() ? device.ipad() ? a("ios ipad tablet") : device.iphone() ? a("ios iphone mobile") : device.ipod() && a("ios ipod mobile") : device.android() ? device.androidTablet() ? a("android tablet") : a("android mobile") : device.blackberry() ? device.blackberryTablet() ? a("blackberry tablet") : a("blackberry mobile") : device.windows() ? device.windowsTablet() ? a("windows tablet") : device.windowsPhone() ? a("windows mobile") : a("desktop") : device.fxos() ? device.fxosTablet() ? a("fxos tablet") : a("fxos mobile") : a("desktop"), d = function () {
		return device.landscape() ? (g("portrait"), a("landscape")) : (g("landscape"), a("portrait"))
	}, h = "onorientationchange" in window, f = h ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(f, d, !1) : window.attachEvent ? window.attachEvent(f, d) : window[f] = d, d()
}).call(this);


/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
! function () {
	function a() {}

	function b(a) {
		return f.retinaImageSuffix + a
	}

	function c(a, c) {
		if (this.path = a || "", "undefined" != typeof c && null !== c) this.at_2x_path = c, this.perform_check = !1;
		else {
			if (void 0 !== document.createElement) {
				var d = document.createElement("a");
				d.href = this.path, d.pathname = d.pathname.replace(g, b), this.at_2x_path = d.href
			} else {
				var e = this.path.split("?");
				e[0] = e[0].replace(g, b), this.at_2x_path = e.join("?")
			}
			this.perform_check = !0
		}
	}

	function d(a) {
		this.el = a, this.path = new c(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
		var b = this;
		this.path.check_2x_variant(function (a) {
			a && b.swap()
		})
	}
	var e = "undefined" == typeof exports ? window : exports,
		f = {
			retinaImageSuffix: "@2x",
			check_mime_type: !0,
			force_original_dimensions: !0
		};
	e.Retina = a, a.configure = function (a) {
		null === a && (a = {});
		for (var b in a) a.hasOwnProperty(b) && (f[b] = a[b])
	}, a.init = function (a) {
		null === a && (a = e);
		var b = a.onload || function () {};
		a.onload = function () {
			var a, c, e = document.getElementsByTagName("img"),
				f = [];
			for (a = 0; a < e.length; a += 1) c = e[a], c.getAttributeNode("data-no-retina") || f.push(new d(c));
			b()
		}
	}, a.isRetina = function () {
		var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
		return e.devicePixelRatio > 1 ? !0 : e.matchMedia && e.matchMedia(a).matches ? !0 : !1
	};
	var g = /\.\w+$/;
	e.RetinaImagePath = c, c.confirmed_paths = [], c.prototype.is_external = function () {
		return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
	}, c.prototype.check_2x_variant = function (a) {
		var b, d = this;
		return this.is_external() ? a(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in c.confirmed_paths ? a(!0) : (b = new XMLHttpRequest, b.open("HEAD", this.at_2x_path), b.onreadystatechange = function () {
			if (4 !== b.readyState) return a(!1);
			if (b.status >= 200 && b.status <= 399) {
				if (f.check_mime_type) {
					var e = b.getResponseHeader("Content-Type");
					if (null === e || !e.match(/^image/i)) return a(!1)
				}
				return c.confirmed_paths.push(d.at_2x_path), a(!0)
			}
			return a(!1)
		}, b.send(), void 0) : a(!0)
	}, e.RetinaImage = d, d.prototype.swap = function (a) {
		function b() {
			c.el.complete ? (f.force_original_dimensions && (c.el.setAttribute("width", c.el.offsetWidth), c.el.setAttribute("height", c.el.offsetHeight)), c.el.setAttribute("src", a)) : setTimeout(b, 5)
		}
		"undefined" == typeof a && (a = this.path.at_2x_path);
		var c = this;
		b()
	}, a.isRetina() && a.init(e)
}();

/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function ($) {
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function (xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;

		//get the starting position of each element to have parallax applied to it  
		function update() {

			$this.each(function () {

				firstTop = $this.offset().top;
			});

			if (outerHeight) {
				getHeight = function (jqo) {
					return jqo.outerHeight(true);
				};
			} else {
				getHeight = function (jqo) {
					return jqo.height();
				};
			}

			// setup defaults if arguments aren't specified
			if (arguments.length < 1 || xpos === null) xpos = "50%";
			if (arguments.length < 2 || speedFactor === null) speedFactor = 0.5;
			if (arguments.length < 3 || outerHeight === null) outerHeight = true;

			// function to be called whenever the window is scrolled or resized

			var pos = $window.scrollTop();

			$this.each(function () {
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");

			});
		}

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);


/**
 * jquery.slimmenu.js
 * http://adnantopal.github.io/slimmenu/
 * Author: @adnantopal
 * Copyright 2013, Adnan Topal (atopal.com)
 * Licensed under the MIT license.
 */
;
(function ($, window, document, undefined) {
	var pluginName = "slimmenu",
		defaults = {
			resizeWidth: '767',
			collapserTitle: 'Main Menu',
			animSpeed: 'medium',
			easingEffect: null,
			indentChildren: false,
			childrenIndenter: '&nbsp;&nbsp;'
		};

	var oldWindowWidth = 0;

	function Plugin(element, options) {
		this.element = element;
		this.$elem = $(this.element);
		this.options = $.extend({}, defaults, options);
		this.oldwidth = 0;
		this.init();
	}

	Plugin.prototype = {

		init: function () {
			var $options = this.options,
				$menu = this.$elem,
				$collapser = '<div class="menu-collapser">' + $options.collapserTitle + '<div class="collapse-button"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></div></div>',
				$menu_collapser;

			$menu.before($collapser);
			$menu_collapser = $menu.prev('.menu-collapser');

			$menu.on('click', '.sub-collapser', function (e) {
				e.preventDefault();
				e.stopPropagation();

				var $parent_li = $(this).closest('li');

				if ($(this).hasClass('expanded')) {
					$(this).removeClass('expanded');
					$(this).find('i').html('&#9660;');
					$parent_li.find('>ul').slideUp($options.animSpeed, $options.easingEffect);
				} else {
					$(this).addClass('expanded');
					$(this).find('i').html('&#9650;');
					$parent_li.find('>ul').slideDown($options.animSpeed, $options.easingEffect);
				}
			});

			$menu_collapser.on('click', '.collapse-button', function (e) {
				e.preventDefault();
				$menu.slideToggle($options.animSpeed, $options.easingEffect);
			});

			this.resizeMenu({
				data: {
					el: this.element,
					options: this.options
				}
			});
			$(window).on('resize', {
				el: this.element,
				options: this.options
			}, this.resizeMenu);
			$(window).trigger("resize");
		},

		resizeMenu: function (event) {
			var $window = $(window),
				$options = event.data.options,
				$menu = $(event.data.el),
				$menu_collapser = $('body').find('.menu-collapser');

			if (oldWindowWidth == $window.width()) {
				return;
			}
			oldWindowWidth = $window.width();

			var windowWidth = $window.width();
			if (window["innerWidth"] !== undefined) {
				if (window["innerWidth"] > windowWidth) {
					windowWidth = window["innerWidth"];
				}
			}

			if (windowWidth != this.oldwidth) {
				this.oldwidth = windowWidth;

				$menu.find('li').each(function () {
					if ($(this).has('ul').length) {
						if ($(this).has('.sub-collapser').length) {
							$(this).children('.sub-collapser i').html('&#9660;');
						} else {
							$(this).append('<span class="sub-collapser"><i>&#9660;</i></span>');
						}
					}

					$(this).children('ul').hide();
					$(this).find('.sub-collapser').removeClass('expanded').children('i').html('&#9660;');
				});

				if ($options.resizeWidth >= windowWidth) {
					if ($options.indentChildren) {
						$menu.find('ul').each(function () {
							var $depth = $(this).parents('ul').length;
							if (!$(this).children('li').children('a').has('i').length) {
								$(this).children('li').children('a').prepend(Plugin.prototype.indent($depth, $options));
							}
						});
					}

					$menu.find('li').has('ul').off('mouseenter mouseleave');
					$menu.addClass('collapsed').hide();
					$menu_collapser.show();
				} else {
					$menu.find('li').has('ul').on('mouseenter', function () {
							$(this).find('>ul').stop().slideDown($options.animSpeed, $options.easingEffect);
						})
						.on('mouseleave', function () {
							$(this).find('>ul').stop().slideUp($options.animSpeed, $options.easingEffect);
						});

					$menu.find('li > a > i').remove();
					$menu.removeClass('collapsed').show();
					$menu_collapser.hide();
				}
			}
		},

		indent: function (num, options) {
			var $indent = '';
			for (var i = 0; i < num; i++) {
				$indent += options.childrenIndenter;
			}
			return '<i>' + $indent + '</i>';
		}
	};

	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName,
					new Plugin(this, options));
			}
		});
	};

})(jQuery, window, document);


/*! Stellar.js PARALLAX v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
! function (a, b, c, d) {
	function e(b, c) {
		this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
	}
	var f = "stellar",
		g = {
			scrollProperty: "scroll",
			positionProperty: "position",
			horizontalScrolling: !0,
			verticalScrolling: !0,
			horizontalOffset: 0,
			verticalOffset: 0,
			responsive: !1,
			parallaxBackgrounds: !0,
			parallaxElements: !0,
			hideDistantElements: !0,
			hideElement: function (a) {
				a.hide()
			},
			showElement: function (a) {
				a.show()
			}
		},
		h = {
			scroll: {
				getLeft: function (a) {
					return a.scrollLeft()
				},
				setLeft: function (a, b) {
					a.scrollLeft(b)
				},
				getTop: function (a) {
					return a.scrollTop()
				},
				setTop: function (a, b) {
					a.scrollTop(b)
				}
			},
			position: {
				getLeft: function (a) {
					return -1 * parseInt(a.css("left"), 10)
				},
				getTop: function (a) {
					return -1 * parseInt(a.css("top"), 10)
				}
			},
			margin: {
				getLeft: function (a) {
					return -1 * parseInt(a.css("margin-left"), 10)
				},
				getTop: function (a) {
					return -1 * parseInt(a.css("margin-top"), 10)
				}
			},
			transform: {
				getLeft: function (a) {
					var b = getComputedStyle(a[0])[k];
					return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0
				},
				getTop: function (a) {
					var b = getComputedStyle(a[0])[k];
					return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0
				}
			}
		},
		i = {
			position: {
				setLeft: function (a, b) {
					a.css("left", b)
				},
				setTop: function (a, b) {
					a.css("top", b)
				}
			},
			transform: {
				setPosition: function (a, b, c, d, e) {
					a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)"
				}
			}
		},
		j = function () {
			var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
				d = a("script")[0].style,
				e = "";
			for (b in d)
				if (c.test(b)) {
					e = b.match(c)[0];
					break
				} return "WebkitOpacity" in d && (e = "Webkit"), "KhtmlOpacity" in d && (e = "Khtml"),
				function (a) {
					return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
				}
		}(),
		k = j("transform"),
		l = a("<div />", {
			style: "background:#fff"
		}).css("background-position-x") !== d,
		m = l ? function (a, b, c) {
			a.css({
				"background-position-x": b,
				"background-position-y": c
			})
		} : function (a, b, c) {
			a.css("background-position", b + " " + c)
		},
		n = l ? function (a) {
			return [a.css("background-position-x"), a.css("background-position-y")]
		} : function (a) {
			return a.css("background-position").split(" ")
		},
		o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function (a) {
			setTimeout(a, 1e3 / 60)
		};
	e.prototype = {
		init: function () {
			this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
				firstLoad: !0
			}), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
		},
		_defineElements: function () {
			this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
		},
		_defineGetters: function () {
			var a = this,
				b = h[a.options.scrollProperty];
			this._getScrollLeft = function () {
				return b.getLeft(a.$scrollElement)
			}, this._getScrollTop = function () {
				return b.getTop(a.$scrollElement)
			}
		},
		_defineSetters: function () {
			var b = this,
				c = h[b.options.scrollProperty],
				d = i[b.options.positionProperty],
				e = c.setLeft,
				f = c.setTop;
			this._setScrollLeft = "function" == typeof e ? function (a) {
				e(b.$scrollElement, a)
			} : a.noop, this._setScrollTop = "function" == typeof f ? function (a) {
				f(b.$scrollElement, a)
			} : a.noop, this._setPosition = d.setPosition || function (a, c, e, f, g) {
				b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g)
			}
		},
		_handleWindowLoadAndResize: function () {
			var c = this,
				d = a(b);
			c.options.responsive && d.bind("load." + this.name, function () {
				c.refresh()
			}), d.bind("resize." + this.name, function () {
				c._detectViewport(), c.options.responsive && c.refresh()
			})
		},
		refresh: function (c) {
			var d = this,
				e = d._getScrollLeft(),
				f = d._getScrollTop();
			c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function () {
				var a = d._getScrollLeft(),
					b = d._getScrollTop();
				d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b)
			}), this._setScrollLeft(e), this._setScrollTop(f)
		},
		_detectViewport: function () {
			var a = this.$viewportElement.offset(),
				b = null !== a && a !== d;
			this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0
		},
		_findParticles: function () {
			{
				var b = this;
				this._getScrollLeft(), this._getScrollTop()
			}
			if (this.particles !== d)
				for (var c = this.particles.length - 1; c >= 0; c--) this.particles[c].$element.data("stellar-elementIsActive", d);
			this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function () {
				var c, e, f, g, h, i, j, k, l, m = a(this),
					n = 0,
					o = 0,
					p = 0,
					q = 0;
				if (m.data("stellar-elementIsActive")) {
					if (m.data("stellar-elementIsActive") !== this) return
				} else m.data("stellar-elementIsActive", this);
				b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function () {
					var b = a(this);
					return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void(q += b.position().top))
				}), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({
					$element: m,
					$offsetParent: j,
					isFixed: "fixed" === m.css("position"),
					horizontalOffset: c,
					verticalOffset: e,
					startingPositionLeft: f,
					startingPositionTop: g,
					startingOffsetLeft: k,
					startingOffsetTop: l,
					parentOffsetLeft: n,
					parentOffsetTop: o,
					stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
					width: m.outerWidth(!0),
					height: m.outerHeight(!0),
					isHidden: !1
				})
			})
		},
		_findBackgrounds: function () {
			var b, c = this,
				e = this._getScrollLeft(),
				f = this._getScrollTop();
			this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function () {
				var b, g, h, i, j, k, l, o = a(this),
					p = n(o),
					q = 0,
					r = 0,
					s = 0,
					t = 0;
				if (o.data("stellar-backgroundIsActive")) {
					if (o.data("stellar-backgroundIsActive") !== this) return
				} else o.data("stellar-backgroundIsActive", this);
				o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function () {
					var b = a(this);
					return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top))
				}), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({
					$element: o,
					$offsetParent: l,
					isFixed: "fixed" === o.css("background-attachment"),
					horizontalOffset: b,
					verticalOffset: g,
					startingValueLeft: p[0],
					startingValueTop: p[1],
					startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10),
					startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10),
					startingPositionLeft: o.position().left,
					startingPositionTop: o.position().top,
					startingOffsetLeft: j,
					startingOffsetTop: k,
					parentOffsetLeft: q,
					parentOffsetTop: r,
					stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio")
				})
			}))
		},
		_reset: function () {
			var a, b, c, d, e;
			for (e = this.particles.length - 1; e >= 0; e--) a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
			for (e = this.backgrounds.length - 1; e >= 0; e--) d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop)
		},
		destroy: function () {
			this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name)
		},
		_setOffsets: function () {
			var c = this,
				d = a(b);
			d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function () {
				c.horizontalOffset = c.options.horizontalOffset()
			})) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function () {
				c.verticalOffset = c.options.verticalOffset()
			})) : this.verticalOffset = this.options.verticalOffset
		},
		_repositionElements: function () {
			var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(),
				l = this._getScrollTop(),
				n = !0,
				o = !0;
			if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
				for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--) a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0);
				for (j = this.backgrounds.length - 1; j >= 0; j--) c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e)
			}
		},
		_handleScrollEvent: function () {
			var a = this,
				b = !1,
				c = function () {
					a._repositionElements(), b = !1
				},
				d = function () {
					b || (o(c), b = !0)
				};
			this.$scrollElement.bind("scroll." + this.name, d), d()
		},
		_startAnimationLoop: function () {
			var a = this;
			this._animationLoop = function () {
				o(a._animationLoop), a._repositionElements()
			}, this._animationLoop()
		}
	}, a.fn[f] = function (b) {
		var c = arguments;
		return b === d || "object" == typeof b ? this.each(function () {
			a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
		}) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function () {
			var d = a.data(this, "plugin_" + f);
			d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null)
		}) : void 0
	}, a[f] = function () {
		var c = a(b);
		return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0))
	}, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e
}(jQuery, this, document);


/**
 * Ultimate Media Background (UMBG)
 * UMBG jQuery Plugin
 * http://codecanyon.net/user/theefarmer?ref=theefarmer
 * http://theefarmer.com
 *
 * Version: v1.3.3
 * Author: TheeFarmer | Alendee Internet Solutions
 * Copyright: (c) 2015 Alendee Internet Solutions
 **/
(function (c) {
	c.fn.umbg = function (U) {
		var a = c.extend({}, c.fn.umbg.defaults, U);
		return this.each(function () {
			function P() {
				1 === a.pudDown && 0 >= a.delayBy ? c(a.pudElement).css({
					"margin-top": V + "px"
				}) : c(a.pudElement).css({
					"margin-top": V + "px",
					"-webkit-transition": "margin-top 1.5s",
					transition: "margin-top 1.5s"
				});
				t = "down"
			}

			function aa() {
				c(a.pudElement).css({
					"margin-top": ga,
					"-webkit-transition": "margin-top 1.5s",
					transition: "margin-top 1.5s"
				});
				t = "up"
			}

			function w() {
				"down" === t && 1 === a.pudUp && 1 === a.pud && (aa(), t = "up")
			}

			function W() {
				c(a.fioElement).css({
					opacity: a.fioOpacity,
					filter: "Alpha(opacity=" + 100 * a.fioOpacity + ")",
					transition: "all 0.5s linear"
				});
				G = "on";
				L.find("i").removeClass("fa-file").addClass("fa-file-o")
			}

			function ba() {
				c(a.fioElement).css({
					opacity: 1,
					filter: "Alpha(opacity=100)",
					transition: "all 0.5s linear"
				});
				G = "off";
				L.find("i").removeClass("fa-file-o").addClass("fa-file")
			}

			function x() {
				"on" === G && 1 === a.fioEnd && 1 === a.fio && ba()
			}

			function ca() {
				c(".umbg-overlay").fadeIn(1500);
				c("#" + a.mediaPlayerId).fadeIn(1700)
			}

			function Q() {
				1 === a.mediaEndFadeOut && (1 === h ? (c(".umbg-overlay").fadeOut(1700),
					c("#" + a.mediaPlayerId).fadeOut(1500)) : ca())
			}

			function M() {
				return !!/iPhone|\biPhone\b|\biPod\b|BlackBerry|BlackBerry|\bBB10\b|rim[0-9]+HTC|HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\bEVO\b|T-Mobile G1|Z520m|Nexus One|Nexus S|Galaxy.*Nexus|Nexus 4|Nexus 5|Nexus 6|Dell|Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\b001DL\b|\b101DL\b|\bGS01\b|Motorola|Motorola|DROIDX|DROID BIONIC|\bDroid\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925Samsung|Samsung|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|LG|\bLG\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802),Sony|SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533Asus|Asus.*Galaxy|PadFone.*Mobile|Micromax|Micromax.*\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\b|Palm|PalmSource|Palm|Vertu|Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature|Pantech|PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790|Fly|IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250|Wiko|KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM|iMobile|i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)|SimValley|\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\b|Wolfgang|AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q|Alcatel|Alcatel|Nintendo|Nintendo 3DS|Amoi|Amoi|INQ|INQ|Tapatalk|PDA;|SAGEM|\bmmp\b|pocket|\bpsp\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\bwap\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser/i.test(navigator.userAgent)
			}

			function R() {
				return !!/iPad|iPad.*Mobile|Android.*Nexus[\s]+(7|9|10)|^.*Android.*Nexus(?:(?!Mobile).)*$|SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-I9205|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237P|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|Kindle|Silk.*Accelerated|Android.*\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI)\b|Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)|HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10|^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\bK00F\b|\bK00C\b|\bK00E\b|\bK00L\b|TX201LA|ME176C|ME102A|\bM80TA\b|ME372CL|ME560CG|ME372CG|ME302KL|PlayBook|RIM Tablet|HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410|xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617|Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2|Android.*; \b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\b|W3-810|\bA3-A10\b|\bA3-A11\b|Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO|\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\b|Android.*\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\b|PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7|Android.*\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\b|Android.*\bOYO\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2|INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004|M702pro|MegaFon V9|\bZTE V9\b|Android.*\bMT7A\b|E-Boda (Supreme|Impresspeed|Izzycomm|Essential)|Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)|\b(101G9|80G9|A101IT)\b|Qilive 97R|Archos5|\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\b|NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark|Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\b|Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT|MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010|M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MSI \b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\b|Android.*(\bMID\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)|Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A|IQ310|Fly Vision|(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus|MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|\bN-06D|\bN-08D|Pantech.*P4100|Broncho.*(N701|N708|N802|a710)|TOUCHPAD.*[78910]|\bTOUCHTAB\b|z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900|TB07STA|TB10STA|TB07FTA|TB10FTA|Android.*\bNabi|Kobo Touch|\bK080\b|\bVox\b Build|\bArc\b Build|NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE|Playstation.*(Portable|Vita)|ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab|\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\b|Android.* \b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\b |Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1|Android.*\bG1\b|Funbook|Micromax.*\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\b|Android.*\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\b|Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide|\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\b|BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026|TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503|TX-A1301|TX-M9002|Q702|kf026|TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10|OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync|DPS Dream 9|DPS Dual 7|V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10|CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989|\bMT8125|MT8389|MT8135|MT8377\b|Concorde([ ]+)?Tab|ConCorde ReadMan|GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042|FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003|\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\bQ8\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\b|V07OT2|TM105A|S10OT1|TR10CS1|eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab|SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2|RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711|i-mobile i-note|tolino tab [0-9.]+|tolino shine\bC-22Q|T7-QC|T-17B|T-17P\b|Android.* A78 |Android.* (SKYPAD|PHOENIX|CYCLOPS)|TECNO P9|Android.*\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\b|Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)|FX2 PAD7|FX2 PAD10|KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151|ViewsonicTablet|ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a|LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\bXELIO\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10|CAPTIVA PAD|NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S|T98 4G|\bP80\b|\bX90HD\b|X98 Air|X98 Air 3G|\bX89\b|P80 3G|\bX80h\b|P98 Air|\bX89HD\b|P98 3G|\bP90HD\b|P89 3G|X98 3G|\bP70h\b|P79HD 3G|G18d 3G|\bP79HD\b|\bP89s\b|\bA88\b|\bP10HD\b|\bP19HD\b|G18 3G|\bP78HD\b|\bA78\b|\bP75\b|G17s 3G|G17h 3G|\bP85t\b|\bP90\b|\bP11\b|\bP98t\b|\bP98HD\b|\bG18d\b|\bP85s\b|\bP11HD\b|\bP88s\b|\bA80HD\b|\bA80se\b|\bA10h\b|\bP89\b|\bP78s\b|\bG18\b|\bP85\b|\bA70h\b|\bA70\b|\bG17\b|\bP18\b|\bA80s\b|\bA11s\b|\bP88HD\b|\bA80h\b|\bP76s\b|\bP76h\b|\bP98\b|\bA10HD\b|\bP78\b|\bP88\b|\bA11\b|\bA10t\b|\bP76a\b|\bP76t\b|\bP76e\b|\bP85HD\b|\bP85a\b|\bP86\b|\bP75HD\b|\bP76v\b|\bA12\b|\bP75a\b|\bA15\b|\bP76Ti\b|\bP81HD\b|\bA10\b|\bT760VE\b|\bT720HD\b|\bP76\b|\bP73\b|\bP71\b|\bP72\b|\bT720SE\b|\bC520Ti\b|\bT760\b|\bT720VE\b|T720-3GE|T720-WiFi|\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\b[\\s]+|TPC-PA762|Endeavour 800NG|Endeavour 1010|\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\b|ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\bEvotab\b|\bNeura\b|QPAD E704|\bIvoryS\b|E-TAB IVORY|CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\bCT-1\b|miTab \b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\b|\bMI PAD\b|\bHM NOTE 1W\b|Nibiru M1|Nibiru Jupiter One|NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI|UbiSlate[\\s]?7C|Pocketbook|Hudl HT7S3|T-Hub2|Android.*\b97D\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\bA7EB\b|CatNova8|A1_07|CT704|CT1002|\bM721\b|rk30sdk|\bEVOTAB\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\bM6pro\b|CT1020W|arc 10HD|\bJolla\b/i.test(navigator.userAgent)
			}

			function D(e) {
				1 === a.mediaOverlay ? (y.prepend(ha), y.prepend(e), 0 < a.delayBy && c(".umbg-overlay").hide().fadeIn(500)) : (y.prepend('<div class="umbg-overlay umbg-overlay-transparent"></div>'), y.prepend(e))
			}

			function U() {
				function c(b) {
					1 === a.startAudioMuted && (g.mute(), l.find("i").removeClass("fa-volume-up").addClass("fa-volume-off"));
					b.target.seekTo(f);
					b.target.setVolume(z);
					b.target.setPlaybackQuality(E)
				}

				function d(a) {
					A = g.getDuration();
					if (0 >= p || p >= A) p = A - .5;
					1 === a.data && (H = setInterval(b, 100), n = 1);
					if (2 === a.data ||
						0 === a.data) clearInterval(H), n = 0
				}

				function b() {
					var b = f;
					g && g.getCurrentTime && (f = g.getCurrentTime());
					f !== b && (b = f, b >= p && 0 === a.loop ? (f = a.startAt, h = 1, w(), x(), 1 === F && g.seekTo(f), g.pauseVideo(), e.find("i").removeClass("fa-pause").addClass("fa-play")) : b >= p && 1 === a.loop && (f = a.startAt, g.pauseVideo(), g.seekTo(f), g.playVideo(), w(), x()))
				}
				var A, H = null,
					n;
				E = "default";
				var v = document.createElement("script");
				v.src = "//www.youtube.com/iframe_api";
				var q = document.getElementsByTagName("script")[0];
				q.parentNode.insertBefore(v,
					q);
				r = '<iframe id="' + a.mediaPlayerId + '" type="text/html" src="//www.youtube.com/embed/' + a.mediaId + "?enablejsapi=1&amp;modesbranding=1&amp;playlist=" + a.mediaId + "&amp;origin=" + window.location.origin + '&amp;autoplay=1&amp;controls=0&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;html5=1" frameborder="0"></iframe>';
				D(r);
				window.onYouTubeIframeAPIReady = function () {
					g = new YT.Player(a.mediaPlayerId, {
						events: {
							onReady: c,
							onStateChange: d
						}
					})
				};
				I();
				window.handleVisibilityChange = function () {
					document[u] && 0 === k ? (g.pauseVideo(),
						e.find("i").removeClass("fa-pause").addClass("fa-play"), n = 0) : 0 === k && (1 === h && (g.seekTo(f), h = 0), g.playVideo(), e.find("i").removeClass("fa-play").addClass("fa-pause"), n = 1)
				};
				J();
				l.on("click", function (a) {
					a.preventDefault();
					g.isMuted() ? (g.unMute(), l.find("i").removeClass("fa-volume-off").addClass("fa-volume-up")) : (g.mute(), l.find("i").removeClass("fa-volume-up").addClass("fa-volume-off"))
				});
				e.on("click", function (a) {
					a.preventDefault();
					1 === n ? (g.pauseVideo(), e.find("i").removeClass("fa-pause").addClass("fa-play"),
						n = 0, k = 1) : (1 === h && (g.seekTo(f), h = 0), g.playVideo(), e.find("i").removeClass("fa-play").addClass("fa-pause"), n = 1, k = 0)
				})
			}

			function ia() {
				function m(c) {
					if (!/^https?:\/\/player.vimeo.com/.test(c.origin)) return !1;
					"*" === H && (H = c.origin);
					c = JSON.parse(c.data);
					switch (c.event) {
						case "ready":
							d("addEventListener", "playProgress");
							d("seekTo", f);
							1 === a.startAudioMuted ? (d("setVolume", "0"), g = "0", l.find("i").removeClass("fa-volume-up").addClass("fa-volume-off")) : d("setVolume", "" + n + "");
							q = 1;
							break;
						case "playProgress":
							c = c.data;
							if (0 >= p || p >= c.duration) p = c.duration;
							c.seconds >= p - 1.1 && (1 === a.loop ? (d("seekTo", f), d("play"), q = 1) : b(), w(), x())
					}
				}

				function d(a, b) {
					var c = {
						method: a
					};
					b && (c.value = b);
					JSON.stringify(c);
					A[0].contentWindow.postMessage(c, H)
				}

				function b() {
					setTimeout(function () {
						1 === F && d("seekTo", f);
						d("pause");
						q = 0;
						h = 1;
						e.find("i").removeClass("fa-pause").addClass("fa-play")
					}, 800)
				}
				E = "default" === a.videoQuality ? 0 : a.videoQuality;
				r = '<iframe id="' + a.mediaPlayerId + '" src="http://player.vimeo.com/video/' + a.mediaId + "?hd=" + E + "&amp;title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;loop=" +
					a.loop + "&amp;api=1&amp;player_id=" + a.mediaPlayerId + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
				D(r);
				var A = c("#" + a.mediaPlayerId),
					H = "*",
					n = z / 100,
					g = n,
					q;
				window.addEventListener ? window.addEventListener("message", m, !1) : window.attachEvent("onmessage", m, !1);
				I();
				window.handleVisibilityChange = function () {
					document[u] && 0 === k ? (d("pause"), q = 0, e.find("i").removeClass("fa-pause").addClass("fa-play")) : 0 === k && (1 === h && (d("seekTo", f), h = 0), d("play"), q = 1, e.find("i").removeClass("fa-play").addClass("fa-pause"))
				};
				J();
				l.on("click", function (a) {
					a.preventDefault();
					0 === g || "0" === g ? (d("setVolume", "" + n + ""), g = n, l.find("i").removeClass("fa-volume-off").addClass("fa-volume-up")) : (d("setVolume", "0"), g = "0", l.find("i").removeClass("fa-volume-up").addClass("fa-volume-off"))
				});
				e.on("click", function (a) {
					a.preventDefault();
					1 === q ? (d("pause"), q = 0, e.find("i").removeClass("fa-pause").addClass("fa-play"), k = 1) : (1 === h && (d("seekTo", f), h = 0), d("play"), q = 1, e.find("i").removeClass("fa-play").addClass("fa-pause"), k = 0)
				})
			}

			function ja() {
				function c(b) {
					if (b.origin ===
						A) {
						b = b.data.replace(/=/gi, ":").replace(/&/gi, ", ").split(", ");
						for (var m = [], k = 0; k < b.length; k++) {
							var r = b[k].split(":");
							m["" + r[0] + ""] = r[1]
						}
						switch (m.event) {
							case "durationchange":
								t = m.duration;
								break;
							case "ad_start":
								l.fadeOut(1E3);
								break;
							case "ad_end":
								e.fadeIn(3E3);
								1 === a.audio && l.fadeIn(1E3);
								break;
							case "canplay":
								d("volume=" + g);
								1 === a.startAudioMuted && 1 === q ? (d("muted=1"), n = 0, l.find("i").removeClass("fa-volume-up").addClass("fa-volume-off")) : 0 === n ? (d("muted=1"), n = 0, l.find("i").removeClass("fa-volume-on").addClass("fa-volume-off")) :
									(d("muted=0"), n = g, l.find("i").removeClass("fa-volume-off").addClass("fa-volume-up"));
								break;
							case "play":
								v = 1;
								break;
							case "playing":
								e.find("i").removeClass("fa-play").addClass("fa-pause");
								break;
							case "timeupdate":
								0 < p && m.time >= p ? (1 === a.loop ? (d("seek=" + f), q = 0) : (d("pause"), 1 === F && d("seek=" + f), q = v = 0, h = 1, e.find("i").removeClass("fa-pause").addClass("fa-play")), w(), x()) : (t = t.replace("sc", ""), m.time >= t - 1 && (1 === a.loop ? (d("seek=" + f), q = 0) : (d("pause"), 1 === F && d("seek=" + f), q = v = 0, h = 1, e.find("i").removeClass("fa-pause").addClass("fa-play")),
									w(), x()))
						}
					}
				}

				function d(a) {
					b.postMessage(a, A)
				}
				E = "default" === a.videoQuality ? 480 : a.videoQuality;
				r = '<iframe id="' + a.mediaPlayerId + '" src="//www.dailymotion.com/embed/video/' + a.mediaId + "?id=" + a.mediaPlayerId + "&start=" + f + "&chromeless=1&autoplay=1&info=0&logo=0&quality=" + E + '&related=0&api=postMessage" frameborder="0" allowfullscreen></iframe>';
				D(r);
				var b = document.getElementById(a.mediaPlayerId).contentWindow,
					A = document.location.protocol + "//www.dailymotion.com",
					g = z / 100,
					n = g,
					v, q = 1;
				window.addEventListener ? window.addEventListener("message",
					c, !1) : window.attachEvent("onmessage", c, !1);
				var t;
				I();
				window.handleVisibilityChange = function () {
					document[u] && 0 === k ? (d("pause"), v = 0, e.find("i").removeClass("fa-pause").addClass("fa-play")) : 0 === k && (d("play"), 1 === h && (d("seek=" + f), h = 0), v = 1, e.find("i").removeClass("fa-play").addClass("fa-pause"))
				};
				J();
				l.on("click", function (a) {
					a.preventDefault();
					0 === n ? (d("muted=0"), n = g, l.find("i").removeClass("fa-volume-off").addClass("fa-volume-up")) : (d("muted=1"), n = 0, l.find("i").removeClass("fa-volume-up").addClass("fa-volume-off"))
				});
				e.on("click", function (a) {
					a.preventDefault();
					1 === v ? (d("pause"), v = 0, e.find("i").removeClass("fa-pause").addClass("fa-play"), k = 1) : (d("play"), 1 === h && (d("seek=" + f), h = 0), v = 1, e.find("i").removeClass("fa-play").addClass("fa-pause"), k = 0)
				})
			}

			function ka() {
				E = void 0 === a.videoQuality ? "default" : a.videoQuality;
				r = '<iframe id="' + a.mediaPlayerId + '" src="http://fast.wistia.net/embed/iframe/' + a.mediaId + "?controlsVisibleOnLoad=false&version=v1&chromeless=true&wmode=window&autoPlay=false&doNotTrack=" + (1 === a.wistiaDoNotTrack ?
					!0 : !1) + "&playButton=false&videoQuality=" + a.videoQuality + '"allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" ></iframe>';
				D(r);
				var m = document.createElement("script");
				m.async = !1;
				m.type = "text/javascript";
				m.src = "//fast.wistia.net/static/iframe-api-v1.js";
				var d = document.getElementsByClassName("wistia_embed")[0];
				c(m).insertAfter(d);
				setTimeout(function () {
					var b = document.getElementById(a.mediaPlayerId);
					1 === a.startAudioMuted ? (b.wistiaApi.volume(0), l.find("i").removeClass("fa-volume-up").addClass("fa-volume-off")) :
						b.wistiaApi.volume(z / 100);
					b.wistiaApi.time(f).play();
					b.wistiaApi.bind("timechange", function () {
						if (0 >= p || p > b.wistiaApi.duration()) p = b.wistiaApi.duration() - 1;
						if (b.wistiaApi.time() >= p || "ended" === b.wistiaApi.state()) w(), x(), 1 === a.loop ? b.wistiaApi.time(f).play() : (1 === F && b.wistiaApi.time(f), b.wistiaApi.pause(), h = 1, e.find("i").removeClass("fa-pause").addClass("fa-play"))
					});
					I();
					window.handleVisibilityChange = function () {
						document[u] && 0 === k ? "playing" === b.wistiaApi.state() && (b.wistiaApi.pause(), e.find("i").removeClass("fa-pause").addClass("fa-play")) :
							0 === k && (1 === h && (b.wistiaApi.time(f), h = 0), b.wistiaApi.play(), e.find("i").removeClass("fa-play").addClass("fa-pause"))
					};
					J();
					l.on("click", function (a) {
						a.preventDefault();
						0 === b.wistiaApi.volume() ? (b.wistiaApi.volume(z / 100), l.find("i").removeClass("fa-volume-off").addClass("fa-volume-up")) : (b.wistiaApi.volume(0), l.find("i").removeClass("fa-volume-up").addClass("fa-volume-off"))
					});
					e.on("click", function (a) {
						a.preventDefault();
						"playing" === b.wistiaApi.state() ? (b.wistiaApi.pause(), e.find("i").removeClass("fa-pause").addClass("fa-play"),
							k = 1) : (1 === h && (b.wistiaApi.time(f), h = 0), b.wistiaApi.play(), e.find("i").removeClass("fa-play").addClass("fa-pause"), k = 0)
					})
				}, 2E3);
				var b = document.getElementById(a.mediaPlayerId);
				window.handleVisibilityChange = function () {
					document[u] ? (b.wistiaApi.pause(), e.find("i").removeClass("fa-pause").addClass("fa-play")) : (1 === h && (b.wistiaApi.time(f), h = 0), b.wistiaApi.play(), e.find("i").removeClass("fa-play").addClass("fa-pause"))
				}
			}

			function la() {
				var m, d = a.mediaId,
					d = d.substring(0, d.lastIndexOf("."));
				r = c('<video id="' +
					a.mediaPlayerId + '" poster="' + a.mediaPoster + '" preload="auto" autoplay="true" ><source src="' + d + '.mp4" type="video/mp4"><source src="' + d + '.webm" type="video/webm"><source src="' + d + '.ogv" type="video/ogg"><img src="' + a.mediaPoster + '" alt="" /></video>');
				D(r);
				var b = document.getElementById(a.mediaPlayerId);
				0 === a.audio || 1 === a.startAudioMuted ? (b.muted = !0, l.find("i").removeClass("fa-volume-up").addClass("fa-volume-off")) : (b.muted = !1, b.volume = z / 100);
				b.addEventListener("loadedmetadata", function () {
					b.currentTime =
						f
				}, !1);
				b.addEventListener("play", function () {
					m = 1;
					h = 0
				}, !1);
				b.addEventListener("timeupdate", function () {
					var c = b.currentTime;
					0 < p && c >= p && (1 === a.loop ? b.currentTime = f : (1 === F && (b.currentTime = f), b.pause(), m = 0, h = 1, e.find("i").removeClass("fa-pause").addClass("fa-play")), w(), x(), Q())
				}, !1);
				b.addEventListener("ended", function () {
					1 === a.loop ? (b.currentTime = f, b.play()) : (1 === F && (b.currentTime = f), b.pause(), m = 0, h = 1, e.find("i").removeClass("fa-pause").addClass("fa-play"));
					w();
					x();
					Q()
				}, !1);
				I();
				window.handleVisibilityChange =
					function () {
						document[u] && 0 === k ? (b.pause(), m = 0, e.find("i").removeClass("fa-pause").addClass("fa-play")) : 0 === k && (1 === h && (b.currentTime = f, h = 0), b.play(), m = 1, e.find("i").removeClass("fa-play").addClass("fa-pause"))
					};
				J();
				l.on("click", function (a) {
					a.preventDefault();
					b.muted ? (b.muted = !1, l.find("i").removeClass("fa-volume-off").addClass("fa-volume-up")) : (b.muted = !0, l.find("i").removeClass("fa-volume-up").addClass("fa-volume-off"))
				});
				e.on("click", function (a) {
					a.preventDefault();
					1 === m ? (b.pause(), m = 0, e.find("i").removeClass("fa-pause").addClass("fa-play"),
						k = 1) : (1 === h && (b.currentTime = f, h = 0), Q(), b.play(), m = 1, e.find("i").removeClass("fa-play").addClass("fa-pause"), k = 0)
				})
			}

			function da(m) {
				var d = document.getElementsByTagName("script"),
					b, f, g;
				for (b = 0; d[b]; b++) f = d[b].src, 0 <= f.indexOf("jquery.umbg.js") && (g = f.substring(0, f.indexOf("jquery.umbg.js")));
				b = document.createElement("link");
				b.id = "umbg-slider-style-css";
				b.media = "all";
				b.type = "text/css";
				b.href = g + "umbg-slider/umbg-slider.css?ver=1.0.0";
				b.rel = "stylesheet";
				c("#umbg-style-css") ? c("#umbg-style-css").before(b) :
					c("head").append(b);
				b = document.createElement("script");
				b.type = "text/javascript";
				b.async = !0;
				b.src = g + "umbg-slider/jquery.umbg.slider.js";
				c("body").append(b);
				g = a.mediaId.split(",");
				d = [];
				for (b = 0; b < g.length; b++) d += '<div><img id="umbg-slider-img" src="' + g[b] + '" /></div>';
				r = c('<div id="umbg" class="umbg-slider-container">' + d + "</div>");
				D(r);
				c("body").umbgslider({
					duration: +a.slideShowDuration,
					effect: a.slideShowEffect,
					transition: +a.slideShowTransitionDuration,
					effectEasing: a.slideShowEasing,
					loop: +a.loop,
					rewind: +a.rewindToStartAt,
					endSliderFunction: function () {
						h = 1;
						w();
						x();
						Q();
						0 === a.loop && e.trigger("click")
					}
				});
				"image" === m && (0 === g.length - 1 && e.fadeOut("slow").hide(), I(), window.handleVisibilityChange = function () {
					document[u] && 0 === k ? 1 === K && (y.umbgslider.pause(), K = 0, e.find("i").removeClass("fa-pause").addClass("fa-play")) : 0 === k && (y.umbgslider.play(), K = 1, e.find("i").removeClass("fa-play").addClass("fa-pause"))
				}, J(), e.on("click", function (a) {
					a.preventDefault();
					1 === K ? (y.umbgslider.pause(), K = 0, e.find("i").removeClass("fa-pause").addClass("fa-play"),
						k = 1) : (y.umbgslider.play(), K = 1, e.find("i").removeClass("fa-play").addClass("fa-pause"), k = 0, ca())
				}))
			}

			function ea(e) {
				e = e || "html5";
				var d = c(window).width(),
					b = c(window).height(),
					f, g = c("#" + a.mediaPlayerId);
				d / a.mediaAspectRatio < b ? (e = Math.ceil(b * a.mediaAspectRatio), e = e * a.enlargeBy / 100 + e, b = b * a.enlargeBy / 100 + b, g.width(e).height(b).css({
					left: (d - e) / 2,
					top: 0
				}), c(".umbg-slider-container img").css({
					"min-height": b,
					"max-width": e
				})) : (f = Math.ceil(d * a.mediaAspectRatio), f = f * a.enlargeBy / 100 + f, d = d * a.enlargeBy / 100 + d, b = "image" ===
					e ? 0 : (b - f) / 2, g.width(d).height(f).css({
						left: 0,
						top: b
					}), c(".umbg-slider-container img").css({
						"min-height": f / 3,
						"max-width": d
					}))
			}

			function X() {
				switch (B) {
					case "youtube":
						U();
						break;
					case "vimeo":
						ia();
						break;
					case "dailymotion":
						ja();
						break;
					case "wistia":
						ka();
						break;
					case "html5":
						la();
						break;
					case "image":
						da("image");
						break;
					case "color":
						da("color")
				}
				ea(B)
			}

			function ma() {
				c("#umbg").css("min-height", "100%")
			}

			function I() {
				1 === +a.pageVisibilityPause && ("undefined" !== typeof document.hidden ? (u = "hidden", N = "visibilitychange") : "undefined" !==
					typeof document.mozHidden ? (u = "mozHidden", N = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (u = "msHidden", N = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (u = "webkitHidden", N = "webkitvisibilitychange"))
			}

			function J() {
				"undefined" === typeof document.addEventListener || "undefined" === typeof document[u] ? console.log("Pausing the video based on page visibility requires an updated browser, such as Google Chrome or Firefox, that supports the Page Visibility API.") : document.addEventListener(N,
					window.handleVisibilityChange, !1)
			}
			var Y = '<div class="umbg-player-controls ' + a.placeControls + '"><a class="umbg-fade-in-out" href=""><i class="fa fa-file" > </i></a><a class="umbg-page-up-down" href=""><i class="fa fa-arrows-v" > </i></a><a class="umbg-play-button" href=""><i class="fa fa-pause" > </i></a><a class="umbg-volume-button" href=""><i class="fa fa-volume-off" > </i></a></div>';
			1 === a.displayControls && (c(this).prepend(Y), c(".umbg-player-controls").hide().fadeIn(1E3));
			var y = c(this),
				r, B = a.mediaPlayerType.toLowerCase(),
				Y = '<img class="' + a.mediaPosterCss + '" src="' + a.mediaPoster + '" alt="" />',
				ha = '<div class="umbg-overlay ' + a.mediaOverlayCss + '" style="background-color: ' + a.mediaOverlayColor + ';"></div>',
				O = c(".umbg-player-controls"),
				e = c(".umbg-play-button"),
				l = c(".umbg-volume-button"),
				z, E, g, f = a.startAt,
				p = a.endAt,
				F = +a.rewindToStartAt,
				h = 0,
				K = 1,
				k = 0,
				S = (M() || R()) && 1 === a.disableOnMobileAll,
				T = (M() || R()) && 1 === a.disableOnMobileVideoOnly && 0 === a.disableOnMobilePhonesOnly,
				C = M() && 1 === a.disableOnMobilePhonesOnly,
				u, N;
			a.controlColor &&
				c(".umbg-player-controls a").css("color", a.controlColor);
			a.controlBgColor && O.css("background-color", a.controlBgColor);
			var t, Z = c(window).height(),
				ga = c(a.pudElement).css("marginTop"),
				V = Z - a.pudShow,
				fa = c(".umbg-page-up-down");
			1 === a.pud && (S || C && 1 !== a.disableOnMobileVideoOnly ? c.fn.umbg.defaults.pud = 0 : (T || C) && "image" !== B ? c.fn.umbg.defaults.pud = 0 : (1 === a.pudDown ? 0 < a.delayBy ? setTimeout(P, a.delayBy - 600) : P() : t = "up", c(window).resize(function () {
				Z = c(window).height();
				V = Z - a.pudShow;
				"down" === t && P()
			})));
			1 !== a.pud &&
				fa.hide();
			fa.on("click", function (c) {
				c.preventDefault();
				1 === a.pud && ("up" === t ? (P(), t = "down") : "down" === t && (aa(), t = "up"))
			});
			var G, L = c(".umbg-fade-in-out");
			1 === a.fio && (S || C && 1 !== a.disableOnMobileVideoOnly ? c.fn.umbg.defaults.fio = 0 : (T || C) && "image" !== B ? c.fn.umbg.defaults.fio = 0 : 1 === a.fioStart ? 0 < a.delayBy ? setTimeout(W, +a.delayBy - 700) : setTimeout(W, 1E3) : G = "off");
			1 !== a.fio ? L.hide() : L.show();
			L.on("click", function (c) {
				c.preventDefault();
				1 === a.fio && ("off" === G ? W() : "on" === G && ba())
			});
			1 === a.mediaEndFadeOut && (S || C && 1 !==
				a.disableOnMobileVideoOnly ? c.fn.umbg.defaults.mediaEndFadeOut = 0 : (T || C) && "image" !== B && (c.fn.umbg.defaults.mediaEndFadeOut = 0));
			0 >= a.audio || 0 >= a.volumeLevel ? (z = 0, l.css("display", "none")) : (z = a.volumeLevel, l.find("i").removeClass("fa-volume-off").addClass("fa-volume-up"));
			S || C && 1 !== a.disableOnMobileVideoOnly ? (O.remove(), console.log("1")) : M() || R() ? T || C && 1 === a.disableOnMobileVideoOnly ? (O.remove(), console.log("2")) : ("image" !== B ? (r = Y, D(r), console.log("not image ")) : (X(), console.log("3")), 1 === a.pud || 1 === a.fio ?
				(e.hide(), l.hide()) : O.remove()) : ("color" === B && O.remove(), 0 < a.delayBy ? setTimeout(function () {
				X();
				c("#umbg").hide();
				c(".umbg-overlay").hide().fadeIn(500, function () {
					c("#umbg").fadeIn(1E3)
				})
			}, a.delayBy) : X(), c(window).resize(function () {
				ea(B)
			}), (M() || R()) && document.addEventListener("touchmove", ma, !1))
		})
	};
	c.fn.umbg.defaults = {
		mediaPlayerId: "umbg",
		mediaPlayerType: "YouTube",
		mediaId: "k7dEsMCFfFw",
		mediaPoster: "yourfolderlocation/myposter.jpg",
		mediaPosterCss: "umbg-mobile-poster",
		mediaOverlay: 1,
		mediaOverlayCss: "umbg-overlay-square-grid",
		mediaOverlayColor: "rgba(0, 0, 0, 0.4)",
		videoQuality: "default",
		wistiaDoNotTrack: 0,
		slideShowDuration: 6E3,
		slideShowEffect: "random",
		slideShowTransitionDuration: 2E3,
		slideShowEasing: "ease-in-out",
		startAt: 0,
		endAt: 0,
		delayBy: 0,
		loop: 1,
		rewindToStartAt: 0,
		mediaEndFadeOut: 0,
		audio: 1,
		startAudioMuted: 0,
		volumeLevel: 100,
		displayControls: 1,
		placeControls: "umbg-br",
		controlColor: "rgba(255, 255, 255, 0.8)",
		controlBgColor: "rgba(39, 173, 211, 0.7)",
		pud: 1,
		pudElement: "#page",
		pudDown: 0,
		pudUp: 0,
		pudShow: 0,
		fio: 1,
		fioElement: "#page",
		fioOpacity: .5,
		fioStart: 0,
		fioEnd: 1,
		enlargeBy: "0",
		mediaAspectRatio: 16 / 9,
		pageVisibilityPause: 1,
		disableOnMobileAll: 0,
		disableOnMobileVideoOnly: 0,
		disableOnMobilePhonesOnly: 0
	}
})(jQuery);

/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
! function (t) {
	var e = {},
		s = {
			mode: "horizontal",
			slideSelector: "",
			infiniteLoop: !0,
			hideControlOnEnd: !1,
			speed: 500,
			easing: null,
			slideMargin: 0,
			startSlide: 0,
			randomStart: !1,
			captions: !1,
			ticker: !1,
			tickerHover: !1,
			adaptiveHeight: !1,
			adaptiveHeightSpeed: 500,
			video: !1,
			useCSS: !0,
			preloadImages: "visible",
			responsive: !0,
			slideZIndex: 50,
			touchEnabled: !0,
			swipeThreshold: 50,
			oneToOneTouch: !0,
			preventDefaultSwipeX: !0,
			preventDefaultSwipeY: !1,
			pager: !0,
			pagerType: "full",
			pagerShortSeparator: " / ",
			pagerSelector: null,
			buildPager: null,
			pagerCustom: null,
			controls: !0,
			nextText: "Next",
			prevText: "Prev",
			nextSelector: null,
			prevSelector: null,
			autoControls: !1,
			startText: "Start",
			stopText: "Stop",
			autoControlsCombine: !1,
			autoControlsSelector: null,
			auto: !1,
			pause: 4e3,
			autoStart: !0,
			autoDirection: "next",
			autoHover: !1,
			autoDelay: 0,
			minSlides: 1,
			maxSlides: 1,
			moveSlides: 0,
			slideWidth: 0,
			onSliderLoad: function () {},
			onSlideBefore: function () {},
			onSlideAfter: function () {},
			onSlideNext: function () {},
			onSlidePrev: function () {},
			onSliderResize: function () {}
		};
	t.fn.bxSlider = function (n) {
		if (0 == this.length) return this;
		if (this.length > 1) return this.each(function () {
			t(this).bxSlider(n)
		}), this;
		var o = {},
			r = this;
		e.el = this;
		var a = t(window).width(),
			l = t(window).height(),
			d = function () {
				o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
					index: o.settings.startSlide
				}, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function () {
					var t = document.createElement("div"),
						e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
					for (var i in e)
						if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
					return !1
				}(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function () {
					t(this).data("origStyle", t(this).attr("style"))
				}), c()
			},
			c = function () {
				r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
					width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
					position: "relative"
				}), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({
					width: "100%",
					overflow: "hidden",
					position: "relative"
				}), o.viewport.parent().css({
					maxWidth: p()
				}), o.settings.pager || o.viewport.parent().css({
					margin: "0 auto 0px"
				}), o.children.css({
					"float": "horizontal" == o.settings.mode ? "left" : "none",
					listStyle: "none",
					position: "relative"
				}), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
					position: "absolute",
					zIndex: 0,
					display: "none"
				}), o.children.eq(o.settings.startSlide).css({
					zIndex: o.settings.slideZIndex,
					display: "block"
				})), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids();
				var e = o.children.eq(o.settings.startSlide);
				"all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)
			},
			g = function (e, i) {
				var s = e.find("img, iframe").length;
				if (0 == s) return i(), void 0;
				var n = 0;
				e.find("img, iframe").each(function () {
					t(this).one("load", function () {
						++n == s && i()
					}).each(function () {
						this.complete && t(this).load()
					})
				})
			},
			h = function () {
				if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
					var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
						i = o.children.slice(0, e).clone().addClass("bx-clone"),
						s = o.children.slice(-e).clone().addClass("bx-clone");
					r.append(i).prepend(s)
				}
				o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(v()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", Z), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && q(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O()
			},
			v = function () {
				var e = 0,
					s = t();
				if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
					if (o.carousel) {
						var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
						for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
					} else s = o.children.eq(o.active.index);
				else s = o.children;
				return "vertical" == o.settings.mode ? (s.each(function () {
					e += t(this).outerHeight()
				}), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function () {
					return t(this).outerHeight(!1)
				}).get()), e
			},
			p = function () {
				var t = "100%";
				return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
			},
			u = function () {
				var t = o.settings.slideWidth,
					e = o.viewport.width();
				return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
			},
			f = function () {
				var t = 1;
				if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
					if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides;
					else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
				else {
					var e = o.children.first().width();
					t = Math.floor(o.viewport.width() / e)
				} else "vertical" == o.settings.mode && (t = o.settings.minSlides);
				return t
			},
			x = function () {
				var t = 0;
				if (o.settings.moveSlides > 0)
					if (o.settings.infiniteLoop) t = o.children.length / m();
					else
						for (var e = 0, i = 0; e < o.children.length;) ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
				else t = Math.ceil(o.children.length / f());
				return t
			},
			m = function () {
				return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
			},
			S = function () {
				if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
					if ("horizontal" == o.settings.mode) {
						var t = o.children.last(),
							e = t.position();
						b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
					} else if ("vertical" == o.settings.mode) {
						var i = o.children.length - o.settings.minSlides,
							e = o.children.eq(i).position();
						b(-e.top, "reset", 0)
					}
				} else {
					var e = o.children.eq(o.active.index * m()).position();
					o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
				}
			},
			b = function (t, e, i, s) {
				if (o.usingCSS) {
					var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
					r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
						r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
					})) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
						r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N()
					}))
				} else {
					var a = {};
					a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function () {
						D()
					}) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function () {
						b(s.resetValue, "reset", 0), N()
					})
				}
			},
			w = function () {
				for (var e = "", i = x(), s = 0; i > s; s++) {
					var n = "";
					o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
				}
				o.pagerEl.html(e)
			},
			T = function () {
				o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.on("click", "a", I)
			},
			C = function () {
				o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
			},
			E = function () {
				o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", k), o.controls.autoEl.on("click", ".bx-stop", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start")
			},
			P = function () {
				o.children.each(function () {
					var e = t(this).find("img:first").attr("title");
					void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
				})
			},
			y = function (t) {
				o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
			},
			z = function (t) {
				o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
			},
			k = function (t) {
				r.startAuto(), t.preventDefault()
			},
			M = function (t) {
				r.stopAuto(), t.preventDefault()
			},
			I = function (e) {
				o.settings.auto && r.stopAuto();
				var i = t(e.currentTarget),
					s = parseInt(i.attr("data-slide-index"));
				s != o.active.index && r.goToSlide(s), e.preventDefault()
			},
			q = function (e) {
				var i = o.children.length;
				return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function (i, s) {
					t(s).find("a").eq(e).addClass("active")
				}), void 0)
			},
			D = function () {
				if (o.settings.infiniteLoop) {
					var t = "";
					0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0))
				}
				o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
			},
			A = function (t) {
				o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
			},
			W = function () {
				1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
			},
			H = function () {
				o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function () {
					o.interval && (r.stopAuto(!0), o.autoPaused = !0)
				}, function () {
					o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
				})
			},
			L = function () {
				var e = 0;
				if ("next" == o.settings.autoDirection) r.append(o.children.clone().addClass("bx-clone"));
				else {
					r.prepend(o.children.clone().addClass("bx-clone"));
					var i = o.children.first().position();
					e = "horizontal" == o.settings.mode ? -i.left : -i.top
				}
				b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function () {
					r.stop()
				}, function () {
					var e = 0;
					o.children.each(function () {
						e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
					});
					var i = o.settings.speed / e,
						s = "horizontal" == o.settings.mode ? "left" : "top",
						n = i * (e - Math.abs(parseInt(r.css(s))));
					N(n)
				}), N()
			},
			N = function (t) {
				speed = t ? t : o.settings.speed;
				var e = {
						left: 0,
						top: 0
					},
					i = {
						left: 0,
						top: 0
					};
				"next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
				var s = "horizontal" == o.settings.mode ? -e.left : -e.top,
					n = "horizontal" == o.settings.mode ? -i.left : -i.top,
					a = {
						resetValue: n
					};
				b(s, "ticker", speed, a)
			},
			O = function () {
				o.touch = {
					start: {
						x: 0,
						y: 0
					},
					end: {
						x: 0,
						y: 0
					}
				}, o.viewport.bind("touchstart", X)
			},
			X = function (t) {
				if (o.working) t.preventDefault();
				else {
					o.touch.originalPos = r.position();
					var e = t.originalEvent;
					o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)
				}
			},
			Y = function (t) {
				var e = t.originalEvent,
					i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
					s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
				if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
					var n = 0;
					if ("horizontal" == o.settings.mode) {
						var r = e.changedTouches[0].pageX - o.touch.start.x;
						n = o.touch.originalPos.left + r
					} else {
						var r = e.changedTouches[0].pageY - o.touch.start.y;
						n = o.touch.originalPos.top + r
					}
					b(n, "reset", 0)
				}
			},
			V = function (t) {
				o.viewport.unbind("touchmove", Y);
				var e = t.originalEvent,
					i = 0;
				if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
					var s = Math.abs(o.touch.start.x - o.touch.end.x);
					s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
				} else {
					var s = 0;
					"horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200)
				}
				o.viewport.unbind("touchend", V)
			},
			Z = function () {
				var e = t(window).width(),
					i = t(window).height();
				(a != e || l != i) && (a = e, l = i, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index))
			};
		return r.goToSlide = function (e, i) {
			if (!o.working && o.active.index != e)
				if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && q(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
					height: v()
				}, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
					zIndex: 0
				}), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function () {
					t(this).css("zIndex", o.settings.slideZIndex), D()
				});
				else {
					o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
						height: v()
					}, o.settings.adaptiveHeightSpeed);
					var s = 0,
						n = {
							left: 0,
							top: 0
						};
					if (!o.settings.infiniteLoop && o.carousel && o.active.last)
						if ("horizontal" == o.settings.mode) {
							var a = o.children.eq(o.children.length - 1);
							n = a.position(), s = o.viewport.width() - a.outerWidth()
						} else {
							var l = o.children.length - o.settings.minSlides;
							n = o.children.eq(l).position()
						}
					else if (o.carousel && o.active.last && "prev" == i) {
						var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),
							a = r.children(".bx-clone").eq(d);
						n = a.position()
					} else if ("next" == i && 0 == o.active.index) n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
					else if (e >= 0) {
						var c = e * m();
						n = o.children.eq(c).position()
					}
					if ("undefined" != typeof n) {
						var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
						b(g, "slide", o.settings.speed)
					}
				}
		}, r.goToNextSlide = function () {
			if (o.settings.infiniteLoop || !o.active.last) {
				var t = parseInt(o.active.index) + 1;
				r.goToSlide(t, "next")
			}
		}, r.goToPrevSlide = function () {
			if (o.settings.infiniteLoop || 0 != o.active.index) {
				var t = parseInt(o.active.index) - 1;
				r.goToSlide(t, "prev")
			}
		}, r.startAuto = function (t) {
			o.interval || (o.interval = setInterval(function () {
				"next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
			}, o.settings.pause), o.settings.autoControls && 1 != t && A("stop"))
		}, r.stopAuto = function (t) {
			o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start"))
		}, r.getCurrentSlide = function () {
			return o.active.index
		}, r.getCurrentSlideElement = function () {
			return o.children.eq(o.active.index)
		}, r.getSlideCount = function () {
			return o.children.length
		}, r.redrawSlider = function () {
			o.children.add(r.find(".bx-clone")).outerWidth(u()), o.viewport.css("height", v()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), q(o.active.index))
		}, r.destroySlider = function () {
			o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function () {
				void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
			}), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", Z))
		}, r.reloadSlider = function (t) {
			void 0 != t && (n = t), r.destroySlider(), d()
		}, d(), this
	}
}(jQuery);


/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function () {
	"use strict";

	function e() {}

	function t(e, t) {
		for (var n = e.length; n--;)
			if (e[n].listener === t) return n;
		return -1
	}

	function n(e) {
		return function () {
			return this[e].apply(this, arguments)
		}
	}
	var i = e.prototype,
		r = this,
		s = r.EventEmitter;
	i.getListeners = function (e) {
		var t, n, i = this._getEvents();
		if ("object" == typeof e) {
			t = {};
			for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
		} else t = i[e] || (i[e] = []);
		return t
	}, i.flattenListeners = function (e) {
		var t, n = [];
		for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
		return n
	}, i.getListenersAsObject = function (e) {
		var t, n = this.getListeners(e);
		return n instanceof Array && (t = {}, t[e] = n), t || n
	}, i.addListener = function (e, n) {
		var i, r = this.getListenersAsObject(e),
			s = "object" == typeof n;
		for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(s ? n : {
			listener: n,
			once: !1
		});
		return this
	}, i.on = n("addListener"), i.addOnceListener = function (e, t) {
		return this.addListener(e, {
			listener: t,
			once: !0
		})
	}, i.once = n("addOnceListener"), i.defineEvent = function (e) {
		return this.getListeners(e), this
	}, i.defineEvents = function (e) {
		for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
		return this
	}, i.removeListener = function (e, n) {
		var i, r, s = this.getListenersAsObject(e);
		for (r in s) s.hasOwnProperty(r) && (i = t(s[r], n), -1 !== i && s[r].splice(i, 1));
		return this
	}, i.off = n("removeListener"), i.addListeners = function (e, t) {
		return this.manipulateListeners(!1, e, t)
	}, i.removeListeners = function (e, t) {
		return this.manipulateListeners(!0, e, t)
	}, i.manipulateListeners = function (e, t, n) {
		var i, r, s = e ? this.removeListener : this.addListener,
			o = e ? this.removeListeners : this.addListeners;
		if ("object" != typeof t || t instanceof RegExp)
			for (i = n.length; i--;) s.call(this, t, n[i]);
		else
			for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? s.call(this, i, r) : o.call(this, i, r));
		return this
	}, i.removeEvent = function (e) {
		var t, n = typeof e,
			i = this._getEvents();
		if ("string" === n) delete i[e];
		else if ("object" === n)
			for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
		else delete this._events;
		return this
	}, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
		var n, i, r, s, o = this.getListenersAsObject(e);
		for (r in o)
			if (o.hasOwnProperty(r))
				for (i = o[r].length; i--;) n = o[r][i], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
		return this
	}, i.trigger = n("emitEvent"), i.emit = function (e) {
		var t = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(e, t)
	}, i.setOnceReturnValue = function (e) {
		return this._onceReturnValue = e, this
	}, i._getOnceReturnValue = function () {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, i._getEvents = function () {
		return this._events || (this._events = {})
	}, e.noConflict = function () {
		return r.EventEmitter = s, e
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
		return e
	}) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
	function (e) {
		function t(t) {
			var n = e.event;
			return n.target = n.target || n.srcElement || t, n
		}
		var n = document.documentElement,
			i = function () {};
		n.addEventListener ? i = function (e, t, n) {
			e.addEventListener(t, n, !1)
		} : n.attachEvent && (i = function (e, n, i) {
			e[n + i] = i.handleEvent ? function () {
				var n = t(e);
				i.handleEvent.call(i, n)
			} : function () {
				var n = t(e);
				i.call(e, n)
			}, e.attachEvent("on" + n, e[n + i])
		});
		var r = function () {};
		n.removeEventListener ? r = function (e, t, n) {
			e.removeEventListener(t, n, !1)
		} : n.detachEvent && (r = function (e, t, n) {
			e.detachEvent("on" + t, e[t + n]);
			try {
				delete e[t + n]
			} catch (i) {
				e[t + n] = void 0
			}
		});
		var s = {
			bind: i,
			unbind: r
		};
		"function" == typeof define && define.amd ? define("eventie/eventie", s) : e.eventie = s
	}(this),
	function (e, t) {
		"use strict";
		"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
			return t(e, n, i)
		}) : "object" == typeof module && module.exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
	}(window, function (e, t, n) {
		function i(e, t) {
			for (var n in t) e[n] = t[n];
			return e
		}

		function r(e) {
			return "[object Array]" == f.call(e)
		}

		function s(e) {
			var t = [];
			if (r(e)) t = e;
			else if ("number" == typeof e.length)
				for (var n = 0; n < e.length; n++) t.push(e[n]);
			else t.push(e);
			return t
		}

		function o(e, t, n) {
			if (!(this instanceof o)) return new o(e, t, n);
			"string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), u && (this.jqDeferred = new u.Deferred);
			var r = this;
			setTimeout(function () {
				r.check()
			})
		}

		function h(e) {
			this.img = e
		}

		function a(e, t) {
			this.url = e, this.element = t, this.img = new Image
		}
		var u = e.jQuery,
			c = e.console,
			f = Object.prototype.toString;
		o.prototype = new t, o.prototype.options = {}, o.prototype.getImages = function () {
			this.images = [];
			for (var e = 0; e < this.elements.length; e++) {
				var t = this.elements[e];
				this.addElementImages(t)
			}
		}, o.prototype.addElementImages = function (e) {
			"IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
			var t = e.nodeType;
			if (t && d[t]) {
				for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
					var r = n[i];
					this.addImage(r)
				}
				if ("string" == typeof this.options.background) {
					var s = e.querySelectorAll(this.options.background);
					for (i = 0; i < s.length; i++) {
						var o = s[i];
						this.addElementBackgroundImages(o)
					}
				}
			}
		};
		var d = {
			1: !0,
			9: !0,
			11: !0
		};
		o.prototype.addElementBackgroundImages = function (e) {
			for (var t = m(e), n = /url\(['"]*([^'"\)]+)['"]*\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
				var r = i && i[1];
				r && this.addBackground(r, e), i = n.exec(t.backgroundImage)
			}
		};
		var m = e.getComputedStyle || function (e) {
			return e.currentStyle
		};
		return o.prototype.addImage = function (e) {
			var t = new h(e);
			this.images.push(t)
		}, o.prototype.addBackground = function (e, t) {
			var n = new a(e, t);
			this.images.push(n)
		}, o.prototype.check = function () {
			function e(e, n, i) {
				setTimeout(function () {
					t.progress(e, n, i)
				})
			}
			var t = this;
			if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
			for (var n = 0; n < this.images.length; n++) {
				var i = this.images[n];
				i.once("progress", e), i.check()
			}
		}, o.prototype.progress = function (e, t, n) {
			this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e, t), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && c && c.log("progress: " + n, e, t)
		}, o.prototype.complete = function () {
			var e = this.hasAnyBroken ? "fail" : "done";
			if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
				var t = this.hasAnyBroken ? "reject" : "resolve";
				this.jqDeferred[t](this)
			}
		}, h.prototype = new t, h.prototype.check = function () {
			var e = this.getIsImageComplete();
			return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, n.bind(this.proxyImage, "load", this), n.bind(this.proxyImage, "error", this), n.bind(this.img, "load", this), n.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
		}, h.prototype.getIsImageComplete = function () {
			return this.img.complete && void 0 !== this.img.naturalWidth
		}, h.prototype.confirm = function (e, t) {
			this.isLoaded = e, this.emit("progress", this, this.img, t)
		}, h.prototype.handleEvent = function (e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, h.prototype.onload = function () {
			this.confirm(!0, "onload"), this.unbindEvents()
		}, h.prototype.onerror = function () {
			this.confirm(!1, "onerror"), this.unbindEvents()
		}, h.prototype.unbindEvents = function () {
			n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this), n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
		}, a.prototype = new h, a.prototype.check = function () {
			n.bind(this.img, "load", this), n.bind(this.img, "error", this), this.img.src = this.url;
			var e = this.getIsImageComplete();
			e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
		}, a.prototype.unbindEvents = function () {
			n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
		}, a.prototype.confirm = function (e, t) {
			this.isLoaded = e, this.emit("progress", this, this.element, t)
		}, o.makeJQueryPlugin = function (t) {
			t = t || e.jQuery, t && (u = t, u.fn.imagesLoaded = function (e, t) {
				var n = new o(this, e, t);
				return n.jqDeferred.promise(u(this))
			})
		}, o.makeJQueryPlugin(), o
	});

/*!
 * Isotope PACKAGED v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */

! function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
		e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
	"use strict";

	function i(i, s, a) {
		function u(t, e, n) {
			var o, s = "$()." + i + '("' + e + '")';
			return t.each(function (t, u) {
				var h = a.data(u, i);
				if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
				var d = h[e];
				if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
				var l = d.apply(h, n);
				o = void 0 === o ? l : o
			}), void 0 !== o ? o : t
		}

		function h(t, e) {
			t.each(function (t, n) {
				var o = a.data(n, i);
				o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o))
			})
		}
		a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
			a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
		}), a.fn[i] = function (t) {
			if ("string" == typeof t) {
				var e = o.call(arguments, 1);
				return u(this, t, e)
			}
			return h(this, t), this
		}, n(a))
	}

	function n(t) {
		!t || t && t.bridget || (t.bridget = i)
	}
	var o = Array.prototype.slice,
		s = t.console,
		r = "undefined" == typeof s ? function () {} : function (t) {
			s.error(t)
		};
	return n(e || t.jQuery), i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
	function t() {}
	var e = t.prototype;
	return e.on = function (t, e) {
		if (t && e) {
			var i = this._events = this._events || {},
				n = i[t] = i[t] || [];
			return -1 == n.indexOf(e) && n.push(e), this
		}
	}, e.once = function (t, e) {
		if (t && e) {
			this.on(t, e);
			var i = this._onceEvents = this._onceEvents || {},
				n = i[t] = i[t] || {};
			return n[e] = !0, this
		}
	}, e.off = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var n = i.indexOf(e);
			return -1 != n && i.splice(n, 1), this
		}
	}, e.emitEvent = function (t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			var n = 0,
				o = i[n];
			e = e || [];
			for (var s = this._onceEvents && this._onceEvents[t]; o;) {
				var r = s && s[o];
				r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n]
			}
			return this
		}
	}, t
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
		return e()
	}) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
	"use strict";

	function t(t) {
		var e = parseFloat(t),
			i = -1 == t.indexOf("%") && !isNaN(e);
		return i && e
	}

	function e() {}

	function i() {
		for (var t = {
				width: 0,
				height: 0,
				innerWidth: 0,
				innerHeight: 0,
				outerWidth: 0,
				outerHeight: 0
			}, e = 0; h > e; e++) {
			var i = u[e];
			t[i] = 0
		}
		return t
	}

	function n(t) {
		var e = getComputedStyle(t);
		return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
	}

	function o() {
		if (!d) {
			d = !0;
			var e = document.createElement("div");
			e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
			var i = document.body || document.documentElement;
			i.appendChild(e);
			var o = n(e);
			s.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e)
		}
	}

	function s(e) {
		if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
			var s = n(e);
			if ("none" == s.display) return i();
			var a = {};
			a.width = e.offsetWidth, a.height = e.offsetHeight;
			for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; h > l; l++) {
				var f = u[l],
					c = s[f],
					m = parseFloat(c);
				a[f] = isNaN(m) ? 0 : m
			}
			var p = a.paddingLeft + a.paddingRight,
				y = a.paddingTop + a.paddingBottom,
				g = a.marginLeft + a.marginRight,
				v = a.marginTop + a.marginBottom,
				_ = a.borderLeftWidth + a.borderRightWidth,
				I = a.borderTopWidth + a.borderBottomWidth,
				z = d && r,
				x = t(s.width);
			x !== !1 && (a.width = x + (z ? 0 : p + _));
			var S = t(s.height);
			return S !== !1 && (a.height = S + (z ? 0 : y + I)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + I), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
		}
	}
	var r, a = "undefined" == typeof console ? e : function (t) {
			console.error(t)
		},
		u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		h = u.length,
		d = !1;
	return s
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
	"use strict";
	var t = function () {
		var t = Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var n = e[i],
				o = n + "MatchesSelector";
			if (t[o]) return o
		}
	}();
	return function (e, i) {
		return e[t](i)
	}
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
		return e(t, i)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
	var i = {};
	i.extend = function (t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}, i.modulo = function (t, e) {
		return (t % e + e) % e
	}, i.makeArray = function (t) {
		var e = [];
		if (Array.isArray(t)) e = t;
		else if (t && "number" == typeof t.length)
			for (var i = 0; i < t.length; i++) e.push(t[i]);
		else e.push(t);
		return e
	}, i.removeFrom = function (t, e) {
		var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
	}, i.getParent = function (t, i) {
		for (; t != document.body;)
			if (t = t.parentNode, e(t, i)) return t
	}, i.getQueryElement = function (t) {
		return "string" == typeof t ? document.querySelector(t) : t
	}, i.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, i.filterFindElements = function (t, n) {
		t = i.makeArray(t);
		var o = [];
		return t.forEach(function (t) {
			if (t instanceof HTMLElement) {
				if (!n) return void o.push(t);
				e(t, n) && o.push(t);
				for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
			}
		}), o
	}, i.debounceMethod = function (t, e, i) {
		var n = t.prototype[e],
			o = e + "Timeout";
		t.prototype[e] = function () {
			var t = this[o];
			t && clearTimeout(t);
			var e = arguments,
				s = this;
			this[o] = setTimeout(function () {
				n.apply(s, e), delete s[o]
			}, i || 100)
		}
	}, i.docReady = function (t) {
		var e = document.readyState;
		"complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
	}, i.toDashed = function (t) {
		return t.replace(/(.)([A-Z])/g, function (t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	};
	var n = t.console;
	return i.htmlInit = function (e, o) {
		i.docReady(function () {
			var s = i.toDashed(o),
				r = "data-" + s,
				a = document.querySelectorAll("[" + r + "]"),
				u = document.querySelectorAll(".js-" + s),
				h = i.makeArray(a).concat(i.makeArray(u)),
				d = r + "-options",
				l = t.jQuery;
			h.forEach(function (t) {
				var i, s = t.getAttribute(r) || t.getAttribute(d);
				try {
					i = s && JSON.parse(s)
				} catch (a) {
					return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
				}
				var u = new e(t, i);
				l && l.data(t, o, u)
			})
		})
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
	"use strict";

	function i(t) {
		for (var e in t) return !1;
		return e = null, !0
	}

	function n(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}

	function o(t) {
		return t.replace(/([A-Z])/g, function (t) {
			return "-" + t.toLowerCase()
		})
	}
	var s = document.documentElement.style,
		r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
		a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
		u = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		} [r],
		h = {
			transform: a,
			transition: r,
			transitionDuration: r + "Duration",
			transitionProperty: r + "Property",
			transitionDelay: r + "Delay"
		},
		d = n.prototype = Object.create(t.prototype);
	d.constructor = n, d._create = function () {
		this._transn = {
			ingProperties: {},
			clean: {},
			onEnd: {}
		}, this.css({
			position: "absolute"
		})
	}, d.handleEvent = function (t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, d.getSize = function () {
		this.size = e(this.element)
	}, d.css = function (t) {
		var e = this.element.style;
		for (var i in t) {
			var n = h[i] || i;
			e[n] = t[i]
		}
	}, d.getPosition = function () {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			n = t[e ? "left" : "right"],
			o = t[i ? "top" : "bottom"],
			s = this.layout.size,
			r = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
			a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
		r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
	}, d.layoutPosition = function () {
		var t = this.layout.size,
			e = {},
			i = this.layout._getOption("originLeft"),
			n = this.layout._getOption("originTop"),
			o = i ? "paddingLeft" : "paddingRight",
			s = i ? "left" : "right",
			r = i ? "right" : "left",
			a = this.position.x + t[o];
		e[s] = this.getXValue(a), e[r] = "";
		var u = n ? "paddingTop" : "paddingBottom",
			h = n ? "top" : "bottom",
			d = n ? "bottom" : "top",
			l = this.position.y + t[u];
		e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
	}, d.getXValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
	}, d.getYValue = function (t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
	}, d._transitionTo = function (t, e) {
		this.getPosition();
		var i = this.position.x,
			n = this.position.y,
			o = parseInt(t, 10),
			s = parseInt(e, 10),
			r = o === this.position.x && s === this.position.y;
		if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
		var a = t - i,
			u = e - n,
			h = {};
		h.transform = this.getTranslate(a, u), this.transition({
			to: h,
			onTransitionEnd: {
				transform: this.layoutPosition
			},
			isCleaning: !0
		})
	}, d.getTranslate = function (t, e) {
		var i = this.layout._getOption("originLeft"),
			n = this.layout._getOption("originTop");
		return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
	}, d.goTo = function (t, e) {
		this.setPosition(t, e), this.layoutPosition()
	}, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
		this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
	}, d._nonTransition = function (t) {
		this.css(t.to), t.isCleaning && this._removeStyles(t.to);
		for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
	}, d.transition = function (t) {
		if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
		var e = this._transn;
		for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
		for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
		if (t.from) {
			this.css(t.from);
			var n = this.element.offsetHeight;
			n = null
		}
		this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
	};
	var l = "opacity," + o(a);
	d.enableTransition = function () {
		if (!this.isTransitioning) {
			var t = this.layout.options.transitionDuration;
			t = "number" == typeof t ? t + "ms" : t, this.css({
				transitionProperty: l,
				transitionDuration: t,
				transitionDelay: this.staggerDelay || 0
			}), this.element.addEventListener(u, this, !1)
		}
	}, d.onwebkitTransitionEnd = function (t) {
		this.ontransitionend(t)
	}, d.onotransitionend = function (t) {
		this.ontransitionend(t)
	};
	var f = {
		"-webkit-transform": "transform"
	};
	d.ontransitionend = function (t) {
		if (t.target === this.element) {
			var e = this._transn,
				n = f[t.propertyName] || t.propertyName;
			if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
				var o = e.onEnd[n];
				o.call(this), delete e.onEnd[n]
			}
			this.emitEvent("transitionEnd", [this])
		}
	}, d.disableTransition = function () {
		this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
	}, d._removeStyles = function (t) {
		var e = {};
		for (var i in t) e[i] = "";
		this.css(e)
	};
	var c = {
		transitionProperty: "",
		transitionDuration: "",
		transitionDelay: ""
	};
	return d.removeTransitionStyles = function () {
		this.css(c)
	}, d.stagger = function (t) {
		t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
	}, d.removeElem = function () {
		this.element.parentNode.removeChild(this.element), this.css({
			display: ""
		}), this.emitEvent("remove", [this])
	}, d.remove = function () {
		return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
			this.removeElem()
		}), void this.hide()) : void this.removeElem()
	}, d.reveal = function () {
		delete this.isHidden, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("visibleStyle");
		e[i] = this.onRevealTransitionEnd, this.transition({
			from: t.hiddenStyle,
			to: t.visibleStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onRevealTransitionEnd = function () {
		this.isHidden || this.emitEvent("reveal")
	}, d.getHideRevealTransitionEndProperty = function (t) {
		var e = this.layout.options[t];
		if (e.opacity) return "opacity";
		for (var i in e) return i
	}, d.hide = function () {
		this.isHidden = !0, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {},
			i = this.getHideRevealTransitionEndProperty("hiddenStyle");
		e[i] = this.onHideTransitionEnd, this.transition({
			from: t.visibleStyle,
			to: t.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, d.onHideTransitionEnd = function () {
		this.isHidden && (this.css({
			display: "none"
		}), this.emitEvent("hide"))
	}, d.destroy = function () {
		this.css({
			position: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			transition: "",
			transform: ""
		})
	}, n
}),
function (t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, s) {
		return e(t, i, n, o, s)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, n, o) {
	"use strict";

	function s(t, e) {
		var i = n.getQueryElement(t);
		if (!i) return void(u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
		this.element = i, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
		var o = ++l;
		this.element.outlayerGUID = o, f[o] = this, this._create();
		var s = this._getOption("initLayout");
		s && this.layout()
	}

	function r(t) {
		function e() {
			t.apply(this, arguments)
		}
		return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
	}

	function a(t) {
		if ("number" == typeof t) return t;
		var e = t.match(/(^\d*\.?\d*)(\w*)/),
			i = e && e[1],
			n = e && e[2];
		if (!i.length) return 0;
		i = parseFloat(i);
		var o = m[n] || 1;
		return i * o
	}
	var u = t.console,
		h = t.jQuery,
		d = function () {},
		l = 0,
		f = {};
	s.namespace = "outlayer", s.Item = o, s.defaults = {
		containerStyle: {
			position: "relative"
		},
		initLayout: !0,
		originLeft: !0,
		originTop: !0,
		resize: !0,
		resizeContainer: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {
			opacity: 0,
			transform: "scale(0.001)"
		},
		visibleStyle: {
			opacity: 1,
			transform: "scale(1)"
		}
	};
	var c = s.prototype;
	n.extend(c, e.prototype), c.option = function (t) {
		n.extend(this.options, t)
	}, c._getOption = function (t) {
		var e = this.constructor.compatOptions[t];
		return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
	}, s.compatOptions = {
		initLayout: "isInitLayout",
		horizontal: "isHorizontal",
		layoutInstant: "isLayoutInstant",
		originLeft: "isOriginLeft",
		originTop: "isOriginTop",
		resize: "isResizeBound",
		resizeContainer: "isResizingContainer"
	}, c._create = function () {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
		var t = this._getOption("resize");
		t && this.bindResize()
	}, c.reloadItems = function () {
		this.items = this._itemize(this.element.children)
	}, c._itemize = function (t) {
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
			var s = e[o],
				r = new i(s, this);
			n.push(r)
		}
		return n
	}, c._filterFindItemElements = function (t) {
		return n.filterFindElements(t, this.options.itemSelector)
	}, c.getItemElements = function () {
		return this.items.map(function (t) {
			return t.element
		})
	}, c.layout = function () {
		this._resetLayout(), this._manageStamps();
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		this.layoutItems(this.items, e), this._isLayoutInited = !0
	}, c._init = c.layout, c._resetLayout = function () {
		this.getSize()
	}, c.getSize = function () {
		this.size = i(this.element)
	}, c._getMeasurement = function (t, e) {
		var n, o = this.options[t];
		o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
	}, c.layoutItems = function (t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, c._getItemsForLayout = function (t) {
		return t.filter(function (t) {
			return !t.isIgnored
		})
	}, c._layoutItems = function (t, e) {
		if (this._emitCompleteOnItems("layout", t), t && t.length) {
			var i = [];
			t.forEach(function (t) {
				var n = this._getItemLayoutPosition(t);
				n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
			}, this), this._processLayoutQueue(i)
		}
	}, c._getItemLayoutPosition = function () {
		return {
			x: 0,
			y: 0
		}
	}, c._processLayoutQueue = function (t) {
		this.updateStagger(), t.forEach(function (t, e) {
			this._positionItem(t.item, t.x, t.y, t.isInstant, e)
		}, this)
	}, c.updateStagger = function () {
		var t = this.options.stagger;
		return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
	}, c._positionItem = function (t, e, i, n, o) {
		n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
	}, c._postLayout = function () {
		this.resizeContainer()
	}, c.resizeContainer = function () {
		var t = this._getOption("resizeContainer");
		if (t) {
			var e = this._getContainerSize();
			e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
		}
	}, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
		if (void 0 !== t) {
			var i = this.size;
			i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
		}
	}, c._emitCompleteOnItems = function (t, e) {
		function i() {
			o.dispatchEvent(t + "Complete", null, [e])
		}

		function n() {
			r++, r == s && i()
		}
		var o = this,
			s = e.length;
		if (!e || !s) return void i();
		var r = 0;
		e.forEach(function (e) {
			e.once(t, n)
		})
	}, c.dispatchEvent = function (t, e, i) {
		var n = e ? [e].concat(i) : i;
		if (this.emitEvent(t, n), h)
			if (this.$element = this.$element || h(this.element), e) {
				var o = h.Event(e);
				o.type = t, this.$element.trigger(o, i)
			} else this.$element.trigger(t, i)
	}, c.ignore = function (t) {
		var e = this.getItem(t);
		e && (e.isIgnored = !0)
	}, c.unignore = function (t) {
		var e = this.getItem(t);
		e && delete e.isIgnored
	}, c.stamp = function (t) {
		t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
	}, c.unstamp = function (t) {
		t = this._find(t), t && t.forEach(function (t) {
			n.removeFrom(this.stamps, t), this.unignore(t)
		}, this)
	}, c._find = function (t) {
		return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
	}, c._manageStamps = function () {
		this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
	}, c._getBoundingRect = function () {
		var t = this.element.getBoundingClientRect(),
			e = this.size;
		this._boundingRect = {
			left: t.left + e.paddingLeft + e.borderLeftWidth,
			top: t.top + e.paddingTop + e.borderTopWidth,
			right: t.right - (e.paddingRight + e.borderRightWidth),
			bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
		}
	}, c._manageStamp = d, c._getElementOffset = function (t) {
		var e = t.getBoundingClientRect(),
			n = this._boundingRect,
			o = i(t),
			s = {
				left: e.left - n.left - o.marginLeft,
				top: e.top - n.top - o.marginTop,
				right: n.right - e.right - o.marginRight,
				bottom: n.bottom - e.bottom - o.marginBottom
			};
		return s
	}, c.handleEvent = n.handleEvent, c.bindResize = function () {
		t.addEventListener("resize", this), this.isResizeBound = !0
	}, c.unbindResize = function () {
		t.removeEventListener("resize", this), this.isResizeBound = !1
	}, c.onresize = function () {
		this.resize()
	}, n.debounceMethod(s, "onresize", 100), c.resize = function () {
		this.isResizeBound && this.needsResizeLayout() && this.layout()
	}, c.needsResizeLayout = function () {
		var t = i(this.element),
			e = this.size && t;
		return e && t.innerWidth !== this.size.innerWidth
	}, c.addItems = function (t) {
		var e = this._itemize(t);
		return e.length && (this.items = this.items.concat(e)), e
	}, c.appended = function (t) {
		var e = this.addItems(t);
		e.length && (this.layoutItems(e, !0), this.reveal(e))
	}, c.prepended = function (t) {
		var e = this._itemize(t);
		if (e.length) {
			var i = this.items.slice(0);
			this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
		}
	}, c.reveal = function (t) {
		if (this._emitCompleteOnItems("reveal", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.reveal()
			})
		}
	}, c.hide = function (t) {
		if (this._emitCompleteOnItems("hide", t), t && t.length) {
			var e = this.updateStagger();
			t.forEach(function (t, i) {
				t.stagger(i * e), t.hide()
			})
		}
	}, c.revealItemElements = function (t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, c.hideItemElements = function (t) {
		var e = this.getItems(t);
		this.hide(e)
	}, c.getItem = function (t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];
			if (i.element == t) return i
		}
	}, c.getItems = function (t) {
		t = n.makeArray(t);
		var e = [];
		return t.forEach(function (t) {
			var i = this.getItem(t);
			i && e.push(i)
		}, this), e
	}, c.remove = function (t) {
		var e = this.getItems(t);
		this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
			t.remove(), n.removeFrom(this.items, t)
		}, this)
	}, c.destroy = function () {
		var t = this.element.style;
		t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
			t.destroy()
		}), this.unbindResize();
		var e = this.element.outlayerGUID;
		delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
	}, s.data = function (t) {
		t = n.getQueryElement(t);
		var e = t && t.outlayerGUID;
		return e && f[e]
	}, s.create = function (t, e) {
		var i = r(s);
		return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
	};
	var m = {
		ms: 1,
		s: 1e3
	};
	return s.Item = o, s
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
	"use strict";

	function e() {
		t.Item.apply(this, arguments)
	}
	var i = e.prototype = Object.create(t.Item.prototype),
		n = i._create;
	i._create = function () {
		this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
	}, i.updateSortData = function () {
		if (!this.isIgnored) {
			this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
			var t = this.layout.options.getSortData,
				e = this.layout._sorters;
			for (var i in t) {
				var n = e[i];
				this.sortData[i] = n(this.element, this)
			}
		}
	};
	var o = i.destroy;
	return i.destroy = function () {
		o.apply(this, arguments), this.css({
			display: ""
		})
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
	"use strict";

	function i(t) {
		this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
	}
	var n = i.prototype,
		o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
	return o.forEach(function (t) {
		n[t] = function () {
			return e.prototype[t].apply(this.isotope, arguments)
		}
	}), n.needsVerticalResizeLayout = function () {
		var e = t(this.isotope.element),
			i = this.isotope.size && e;
		return i && e.innerHeight != this.isotope.size.innerHeight
	}, n._getMeasurement = function () {
		this.isotope._getMeasurement.apply(this, arguments)
	}, n.getColumnWidth = function () {
		this.getSegmentSize("column", "Width")
	}, n.getRowHeight = function () {
		this.getSegmentSize("row", "Height")
	}, n.getSegmentSize = function (t, e) {
		var i = t + e,
			n = "outer" + e;
		if (this._getMeasurement(i, n), !this[i]) {
			var o = this.getFirstItemSize();
			this[i] = o && o[n] || this.isotope.size["inner" + e]
		}
	}, n.getFirstItemSize = function () {
		var e = this.isotope.filteredItems[0];
		return e && e.element && t(e.element)
	}, n.layout = function () {
		this.isotope.layout.apply(this.isotope, arguments)
	}, n.getSize = function () {
		this.isotope.getSize(), this.size = this.isotope.size
	}, i.modes = {}, i.create = function (t, e) {
		function o() {
			i.apply(this, arguments)
		}
		return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
	var i = t.create("masonry");
	return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function () {
		this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
		for (var t = 0; t < this.cols; t++) this.colYs.push(0);
		this.maxY = 0
	}, i.prototype.measureColumns = function () {
		if (this.getContainerWidth(), !this.columnWidth) {
			var t = this.items[0],
				i = t && t.element;
			this.columnWidth = i && e(i).outerWidth || this.containerWidth
		}
		var n = this.columnWidth += this.gutter,
			o = this.containerWidth + this.gutter,
			s = o / n,
			r = n - o % n,
			a = r && 1 > r ? "round" : "floor";
		s = Math[a](s), this.cols = Math.max(s, 1)
	}, i.prototype.getContainerWidth = function () {
		var t = this._getOption("fitWidth"),
			i = t ? this.element.parentNode : this.element,
			n = e(i);
		this.containerWidth = n && n.innerWidth
	}, i.prototype._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = t.size.outerWidth % this.columnWidth,
			i = e && 1 > e ? "round" : "ceil",
			n = Math[i](t.size.outerWidth / this.columnWidth);
		n = Math.min(n, this.cols);
		for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = o.indexOf(s), a = {
				x: this.columnWidth * r,
				y: s
			}, u = s + t.size.outerHeight, h = this.cols + 1 - o.length, d = 0; h > d; d++) this.colYs[r + d] = u;
		return a
	}, i.prototype._getColGroup = function (t) {
		if (2 > t) return this.colYs;
		for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
			var o = this.colYs.slice(n, n + t);
			e[n] = Math.max.apply(Math, o)
		}
		return e
	}, i.prototype._manageStamp = function (t) {
		var i = e(t),
			n = this._getElementOffset(t),
			o = this._getOption("originLeft"),
			s = o ? n.left : n.right,
			r = s + i.outerWidth,
			a = Math.floor(s / this.columnWidth);
		a = Math.max(0, a);
		var u = Math.floor(r / this.columnWidth);
		u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
		for (var h = this._getOption("originTop"), d = (h ? n.top : n.bottom) + i.outerHeight, l = a; u >= l; l++) this.colYs[l] = Math.max(d, this.colYs[l])
	}, i.prototype._getContainerSize = function () {
		this.maxY = Math.max.apply(Math, this.colYs);
		var t = {
			height: this.maxY
		};
		return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
	}, i.prototype._getContainerFitWidth = function () {
		for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
		return (this.cols - t) * this.columnWidth - this.gutter
	}, i.prototype.needsResizeLayout = function () {
		var t = this.containerWidth;
		return this.getContainerWidth(), t != this.containerWidth
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
	"use strict";
	var i = t.create("masonry"),
		n = i.prototype,
		o = {
			_getElementOffset: !0,
			layout: !0,
			_getMeasurement: !0
		};
	for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
	var r = n.measureColumns;
	n.measureColumns = function () {
		this.items = this.isotope.filteredItems, r.call(this)
	};
	var a = n._getOption;
	return n._getOption = function (t) {
		return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
	}, i
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
	"use strict";
	var e = t.create("fitRows"),
		i = e.prototype;
	return i._resetLayout = function () {
		this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = t.size.outerWidth + this.gutter,
			i = this.isotope.size.innerWidth + this.gutter;
		0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
		var n = {
			x: this.x,
			y: this.y
		};
		return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
	}, i._getContainerSize = function () {
		return {
			height: this.maxY
		}
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
	"use strict";
	var e = t.create("vertical", {
			horizontalAlignment: 0
		}),
		i = e.prototype;
	return i._resetLayout = function () {
		this.y = 0
	}, i._getItemLayoutPosition = function (t) {
		t.getSize();
		var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
			i = this.y;
		return this.y += t.size.outerHeight, {
			x: e,
			y: i
		}
	}, i._getContainerSize = function () {
		return {
			height: this.y
		}
	}, e
}),
function (t, e) {
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (i, n, o, s, r, a) {
		return e(t, i, n, o, s, r, a)
	}) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, n, o, s, r) {
	function a(t, e) {
		return function (i, n) {
			for (var o = 0; o < t.length; o++) {
				var s = t[o],
					r = i.sortData[s],
					a = n.sortData[s];
				if (r > a || a > r) {
					var u = void 0 !== e[s] ? e[s] : e,
						h = u ? 1 : -1;
					return (r > a ? 1 : -1) * h
				}
			}
			return 0
		}
	}
	var u = t.jQuery,
		h = String.prototype.trim ? function (t) {
			return t.trim()
		} : function (t) {
			return t.replace(/^\s+|\s+$/g, "")
		},
		d = e.create("isotope", {
			layoutMode: "masonry",
			isJQueryFiltering: !0,
			sortAscending: !0
		});
	d.Item = s, d.LayoutMode = r;
	var l = d.prototype;
	l._create = function () {
		this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
		for (var t in r.modes) this._initLayoutMode(t)
	}, l.reloadItems = function () {
		this.itemGUID = 0, e.prototype.reloadItems.call(this)
	}, l._itemize = function () {
		for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
			var n = t[i];
			n.id = this.itemGUID++
		}
		return this._updateItemsSortData(t), t
	}, l._initLayoutMode = function (t) {
		var e = r.modes[t],
			i = this.options[t] || {};
		this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
	}, l.layout = function () {
		return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
	}, l._layout = function () {
		var t = this._getIsInstant();
		this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
	}, l.arrange = function (t) {
		this.option(t), this._getIsInstant();
		var e = this._filter(this.items);
		this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
	}, l._init = l.arrange, l._hideReveal = function (t) {
		this.reveal(t.needReveal), this.hide(t.needHide)
	}, l._getIsInstant = function () {
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		return this._isInstant = e, e
	}, l._bindArrangeComplete = function () {
		function t() {
			e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
		}
		var e, i, n, o = this;
		this.once("layoutComplete", function () {
			e = !0, t()
		}), this.once("hideComplete", function () {
			i = !0, t()
		}), this.once("revealComplete", function () {
			n = !0, t()
		})
	}, l._filter = function (t) {
		var e = this.options.filter;
		e = e || "*";
		for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
			var a = t[r];
			if (!a.isIgnored) {
				var u = s(a);
				u && i.push(a), u && a.isHidden ? n.push(a) : u || a.isHidden || o.push(a)
			}
		}
		return {
			matches: i,
			needReveal: n,
			needHide: o
		}
	}, l._getFilterTest = function (t) {
		return u && this.options.isJQueryFiltering ? function (e) {
			return u(e.element).is(t)
		} : "function" == typeof t ? function (e) {
			return t(e.element)
		} : function (e) {
			return n(e.element, t)
		}
	}, l.updateSortData = function (t) {
		var e;
		t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
	}, l._getSorters = function () {
		var t = this.options.getSortData;
		for (var e in t) {
			var i = t[e];
			this._sorters[e] = f(i)
		}
	}, l._updateItemsSortData = function (t) {
		for (var e = t && t.length, i = 0; e && e > i; i++) {
			var n = t[i];
			n.updateSortData()
		}
	};
	var f = function () {
		function t(t) {
			if ("string" != typeof t) return t;
			var i = h(t).split(" "),
				n = i[0],
				o = n.match(/^\[(.+)\]$/),
				s = o && o[1],
				r = e(s, n),
				a = d.sortDataParsers[i[1]];
			return t = a ? function (t) {
				return t && a(r(t))
			} : function (t) {
				return t && r(t)
			}
		}

		function e(t, e) {
			return t ? function (e) {
				return e.getAttribute(t)
			} : function (t) {
				var i = t.querySelector(e);
				return i && i.textContent
			}
		}
		return t
	}();
	d.sortDataParsers = {
		parseInt: function (t) {
			return parseInt(t, 10)
		},
		parseFloat: function (t) {
			return parseFloat(t)
		}
	}, l._sort = function () {
		var t = this.options.sortBy;
		if (t) {
			var e = [].concat.apply(t, this.sortHistory),
				i = a(e, this.options.sortAscending);
			this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
		}
	}, l._mode = function () {
		var t = this.options.layoutMode,
			e = this.modes[t];
		if (!e) throw new Error("No layout mode: " + t);
		return e.options = this.options[t], e
	}, l._resetLayout = function () {
		e.prototype._resetLayout.call(this), this._mode()._resetLayout()
	}, l._getItemLayoutPosition = function (t) {
		return this._mode()._getItemLayoutPosition(t)
	}, l._manageStamp = function (t) {
		this._mode()._manageStamp(t)
	}, l._getContainerSize = function () {
		return this._mode()._getContainerSize()
	}, l.needsResizeLayout = function () {
		return this._mode().needsResizeLayout()
	}, l.appended = function (t) {
		var e = this.addItems(t);
		if (e.length) {
			var i = this._filterRevealAdded(e);
			this.filteredItems = this.filteredItems.concat(i)
		}
	}, l.prepended = function (t) {
		var e = this._itemize(t);
		if (e.length) {
			this._resetLayout(), this._manageStamps();
			var i = this._filterRevealAdded(e);
			this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
		}
	}, l._filterRevealAdded = function (t) {
		var e = this._filter(t);
		return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
	}, l.insert = function (t) {
		var e = this.addItems(t);
		if (e.length) {
			var i, n, o = e.length;
			for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
			var s = this._filter(e).matches;
			for (i = 0; o > i; i++) e[i].isLayoutInstant = !0;
			for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
			this.reveal(s)
		}
	};
	var c = l.remove;
	return l.remove = function (t) {
		t = o.makeArray(t);
		var e = this.getItems(t);
		c.call(this, t);
		for (var i = e && e.length, n = 0; i && i > n; n++) {
			var s = e[n];
			o.removeFrom(this.filteredItems, s)
		}
	}, l.shuffle = function () {
		for (var t = 0; t < this.items.length; t++) {
			var e = this.items[t];
			e.sortData.random = Math.random()
		}
		this.options.sortBy = "random", this._sort(), this._layout()
	}, l._noTransition = function (t, e) {
		var i = this.options.transitionDuration;
		this.options.transitionDuration = 0;
		var n = t.apply(this, e);
		return this.options.transitionDuration = i, n
	}, l.getFilteredItemElements = function () {
		return this.filteredItems.map(function (t) {
			return t.element
		})
	}, d
});


/*OWL Carousel v2*/
! function (a, b, c, d) {
	function e(b, c) {
		this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function (a, b) {
			this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
		}, this)), a.each(e.Pipe, a.proxy(function (b, c) {
			this._pipe.push({
				filter: c.filter,
				run: a.proxy(c.run, this)
			})
		}, this)), this.setup(), this.initialize()
	}

	function f(a) {
		if (a.touches !== d) return {
			x: a.touches[0].pageX,
			y: a.touches[0].pageY
		};
		if (a.touches === d) {
			if (a.pageX !== d) return {
				x: a.pageX,
				y: a.pageY
			};
			if (a.pageX === d) return {
				x: a.clientX,
				y: a.clientY
			}
		}
	}

	function g(a) {
		var b, d, e = c.createElement("div"),
			f = a;
		for (b in f)
			if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
		return [!1]
	}

	function h() {
		return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
	}

	function i() {
		return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
	}

	function j() {
		return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
	}

	function k() {
		return "ontouchstart" in b || !!navigator.msMaxTouchPoints
	}

	function l() {
		return b.navigator.msPointerEnabled
	}
	var m, n, o;
	m = {
		start: 0,
		startX: 0,
		startY: 0,
		current: 0,
		currentX: 0,
		currentY: 0,
		offsetX: 0,
		offsetY: 0,
		distance: null,
		startTime: 0,
		endTime: 0,
		updatedX: 0,
		targetEl: null
	}, n = {
		isTouch: !1,
		isScrolling: !1,
		isSwiping: !1,
		direction: !1,
		inMotion: !1
	}, o = {
		_onDragStart: null,
		_onDragMove: null,
		_onDragEnd: null,
		_transitionEnd: null,
		_resizer: null,
		_responsiveCall: null,
		_goToLoop: null,
		_checkVisibile: null
	}, e.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: b,
		responsiveClass: !1,
		fallbackEasing: "swing",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		themeClass: "owl-theme",
		baseClass: "owl-carousel",
		itemClass: "owl-item",
		centerClass: "center",
		activeClass: "active"
	}, e.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	}, e.Plugins = {}, e.Pipe = [{
		filter: ["width", "items", "settings"],
		run: function (a) {
			a.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			var a = this._clones,
				b = this.$stage.children(".cloned");
			(b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			var a, b, c = this._clones,
				d = this._items,
				e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
			for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			var a, b, c, d = this.settings.rtl ? 1 : -1,
				e = (this.width() / this.settings.items).toFixed(3),
				f = 0;
			for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			var b, c, d = (this.width() / this.settings.items).toFixed(3),
				e = {
					width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
					"padding-left": this.settings.stagePadding || "",
					"padding-right": this.settings.stagePadding || ""
				};
			if (this.$stage.css(e), e = {
					width: this.settings.autoWidth ? "auto" : d - this.settings.margin
				}, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function (a) {
					return a > 1
				}).length > 0)
				for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
			else this.$stage.children().css(e)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			a.current && this.reset(this.$stage.children().index(a.current))
		}
	}, {
		filter: ["position"],
		run: function () {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function () {
			var a, b, c, d, e = this.settings.rtl ? 1 : -1,
				f = 2 * this.settings.stagePadding,
				g = this.coordinates(this.current()) + f,
				h = g + this.width() * e,
				i = [];
			for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
			this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
		}
	}], e.prototype.initialize = function () {
		if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
			var b, c, e;
			if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1
		}
		this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
	}, e.prototype.setup = function () {
		var b = this.viewport(),
			c = this.options.responsive,
			d = -1,
			e = null;
		c ? (a.each(c, function (a) {
			b >= a && a > d && (d = Number(a))
		}), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function (a, b) {
			return b.replace(/\b owl-responsive-\S+/g, "")
		}).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
			property: {
				name: "settings",
				value: e
			}
		}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		}))
	}, e.prototype.optionsLogic = function () {
		this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, e.prototype.prepare = function (b) {
		var c = this.trigger("prepare", {
			content: b
		});
		return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {
			content: c.data
		}), c.data
	}, e.prototype.update = function () {
		for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
				return this[a]
			}, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
		this._invalidated = {}
	}, e.prototype.width = function (a) {
		switch (a = a || e.Width.Default) {
			case e.Width.Inner:
			case e.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, e.prototype.refresh = function () {
		if (0 === this._items.length) return !1;
		(new Date).getTime();
		this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
	}, e.prototype.eventsCall = function () {
		this.e._onDragStart = a.proxy(function (a) {
			this.onDragStart(a)
		}, this), this.e._onDragMove = a.proxy(function (a) {
			this.onDragMove(a)
		}, this), this.e._onDragEnd = a.proxy(function (a) {
			this.onDragEnd(a)
		}, this), this.e._onResize = a.proxy(function (a) {
			this.onResize(a)
		}, this), this.e._transitionEnd = a.proxy(function (a) {
			this.transitionEnd(a)
		}, this), this.e._preventClick = a.proxy(function (a) {
			this.preventClick(a)
		}, this)
	}, e.prototype.onThrottledResize = function () {
		b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
	}, e.prototype.onResize = function () {
		return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
	}, e.prototype.eventsRouter = function (a) {
		var b = a.type;
		"mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
	}, e.prototype.internalEvents = function () {
		var c = (k(), l());
		this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function (a) {
			this.eventsRouter(a)
		}, this)), this.$stage.on("dragstart", function () {
			return !1
		}), this.$stage.get(0).onselectstart = function () {
			return !1
		}) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function (a) {
			this.eventsRouter(a)
		}, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
	}, e.prototype.onDragStart = function (d) {
		var e, g, h, i;
		if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
		if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
		else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
		this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function (a) {
			this.eventsRouter(a)
		}, this))
	}, e.prototype.onDragMove = function (a) {
		var c, e, g, h, i, j;
		this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
	}, e.prototype.onDragEnd = function (b) {
		var d, e, f;
		if (this.state.isTouch) {
			if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
			this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
		}
	}, e.prototype.removeClick = function (c) {
		this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function () {
			a(c).off("click.preventClick")
		}, 300)
	}, e.prototype.preventClick = function (b) {
		b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
	}, e.prototype.getTransformProperty = function () {
		var a, c;
		return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
	}, e.prototype.closest = function (b) {
		var c = -1,
			d = 30,
			e = this.width(),
			f = this.coordinates();
		return this.settings.freeDrag || a.each(f, a.proxy(function (a, g) {
			return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
		}, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
	}, e.prototype.animate = function (b) {
		this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
			transform: "translate3d(" + b + "px,0px, 0px)",
			transition: this.speed() / 1e3 + "s"
		}) : this.state.isTouch ? this.$stage.css({
			left: b + "px"
		}) : this.$stage.animate({
			left: b
		}, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function () {
			this.state.inMotion && this.transitionEnd()
		}, this))
	}, e.prototype.current = function (a) {
		if (a === d) return this._current;
		if (0 === this._items.length) return d;
		if (a = this.normalize(a), this._current !== a) {
			var b = this.trigger("change", {
				property: {
					name: "position",
					value: a
				}
			});
			b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, e.prototype.invalidate = function (a) {
		this._invalidated[a] = !0
	}, e.prototype.reset = function (a) {
		a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
	}, e.prototype.normalize = function (b, c) {
		var e = c ? this._items.length : this._items.length + this._clones.length;
		return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
	}, e.prototype.relative = function (a) {
		return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
	}, e.prototype.maximum = function (a) {
		var b, c, d, e = 0,
			f = this.settings;
		if (a) return this._items.length - 1;
		if (!f.loop && f.center) b = this._items.length - 1;
		else if (f.loop || f.center)
			if (f.loop || f.center) b = this._items.length + f.items;
			else {
				if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
				for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
					(d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
			}
		else b = this._items.length - f.items;
		return b
	}, e.prototype.minimum = function (a) {
		return a ? 0 : this._clones.length / 2
	}, e.prototype.items = function (a) {
		return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
	}, e.prototype.mergers = function (a) {
		return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
	}, e.prototype.clones = function (b) {
		var c = this._clones.length / 2,
			e = c + this._items.length,
			f = function (a) {
				return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
			};
		return b === d ? a.map(this._clones, function (a, b) {
			return f(b)
		}) : a.map(this._clones, function (a, c) {
			return a === b ? f(c) : null
		})
	}, e.prototype.speed = function (a) {
		return a !== d && (this._speed = a), this._speed
	}, e.prototype.coordinates = function (b) {
		var c = null;
		return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
			return this.coordinates(b)
		}, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
	}, e.prototype.duration = function (a, b, c) {
		return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
	}, e.prototype.to = function (c, d) {
		if (this.settings.loop) {
			var e = c - this.relative(this.current()),
				f = this.current(),
				g = this.current(),
				h = this.current() + e,
				i = 0 > g - h ? !0 : !1,
				j = this._clones.length + this._items.length;
			h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function () {
				this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
			}, this), 30)
		} else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
	}, e.prototype.next = function (a) {
		a = a || !1, this.to(this.relative(this.current()) + 1, a)
	}, e.prototype.prev = function (a) {
		a = a || !1, this.to(this.relative(this.current()) - 1, a)
	}, e.prototype.transitionEnd = function (a) {
		return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
	}, e.prototype.viewport = function () {
		var d;
		if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
		else if (b.innerWidth) d = b.innerWidth;
		else {
			if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
			d = c.documentElement.clientWidth
		}
		return d
	}, e.prototype.replace = function (b) {
		this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
			return 1 === this.nodeType
		}).each(a.proxy(function (a, b) {
			b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, e.prototype.add = function (a, b) {
		b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
			content: a,
			position: b
		}), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
			content: a,
			position: b
		})
	}, e.prototype.remove = function (a) {
		a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
			content: this._items[a],
			position: a
		}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: a
		}))
	}, e.prototype.addTriggerableEvents = function () {
		var b = a.proxy(function (b, c) {
			return a.proxy(function (a) {
				a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
			}, this)
		}, this);
		a.each({
			next: this.next,
			prev: this.prev,
			to: this.to,
			destroy: this.destroy,
			refresh: this.refresh,
			replace: this.replace,
			add: this.add,
			remove: this.remove
		}, a.proxy(function (a, c) {
			this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
		}, this))
	}, e.prototype.watchVisibility = function () {
		function c(a) {
			return a.offsetWidth > 0 && a.offsetHeight > 0
		}

		function d() {
			c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
		}
		c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
	}, e.prototype.preloadAutoWidthImages = function (b) {
		var c, d, e, f;
		c = 0, d = this, b.each(function (g, h) {
			e = a(h), f = new Image, f.onload = function () {
				c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
			}, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
		})
	}, e.prototype.destroy = function () {
		this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
		for (var d in this._plugins) this._plugins[d].destroy();
		(this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {}, this.$stage.off("dragstart", function () {
			return !1
		})), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
	}, e.prototype.op = function (a, b, c) {
		var d = this.settings.rtl;
		switch (b) {
			case "<":
				return d ? a > c : c > a;
			case ">":
				return d ? c > a : a > c;
			case ">=":
				return d ? c >= a : a >= c;
			case "<=":
				return d ? a >= c : c >= a
		}
	}, e.prototype.on = function (a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
	}, e.prototype.off = function (a, b, c, d) {
		a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
	}, e.prototype.trigger = function (b, c, d) {
		var e = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			f = a.camelCase(a.grep(["on", b, d], function (a) {
				return a
			}).join("-").toLowerCase()),
			g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
				relatedTarget: this
			}, e, c));
		return this._supress[b] || (a.each(this._plugins, function (a, b) {
			b.onTrigger && b.onTrigger(g)
		}), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
	}, e.prototype.suppress = function (b) {
		a.each(b, a.proxy(function (a, b) {
			this._supress[b] = !0
		}, this))
	}, e.prototype.release = function (b) {
		a.each(b, a.proxy(function (a, b) {
			delete this._supress[b]
		}, this))
	}, e.prototype.browserSupport = function () {
		if (this.support3d = j(), this.support3d) {
			this.transformVendor = i();
			var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
			this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
		}
		this.state.orientation = b.orientation
	}, a.fn.owlCarousel = function (b) {
		return this.each(function () {
			a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
		})
	}, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function (a, b) {
	var c = function (b) {
		this._core = b, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel": a.proxy(function (b) {
				if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
					for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function (a, b) {
							this.load(b)
						}, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
			}, this)
		}, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	c.Defaults = {
		lazyLoad: !1
	}, c.prototype.load = function (c) {
		var d = this._core.$stage.children().eq(c),
			e = d && d.find(".owl-lazy");
		!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
			var e, f = a(d),
				g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
			this._core.trigger("load", {
				element: f,
				url: g
			}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
				f.css("opacity", 1), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
				f.css({
					"background-image": "url(" + g + ")",
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this), e.src = g)
		}, this)), this._loaded.push(d.get(0)))
	}, c.prototype.destroy = function () {
		var a, b;
		for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function (a) {
	var b = function (c) {
		this._core = c, this._handlers = {
			"initialized.owl.carousel": a.proxy(function () {
				this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				this._core.settings.autoHeight && "position" == a.property.name && this.update()
			}, this),
			"loaded.owl.lazy": a.proxy(function (a) {
				this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
			}, this)
		}, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	b.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, b.prototype.update = function () {
		this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
	}, b.prototype.destroy = function () {
		var a, b;
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function (a, b, c) {
	var d = function (b) {
		this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
			"resize.owl.carousel": a.proxy(function (a) {
				this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
			}, this),
			"refresh.owl.carousel changed.owl.carousel": a.proxy(function () {
				this._playing && this.stop()
			}, this),
			"prepared.owl.carousel": a.proxy(function (b) {
				var c = a(b.content).find(".owl-video");
				c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
			}, this)
		}, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
			this.play(a)
		}, this))
	};
	d.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, d.prototype.fetch = function (a, b) {
		var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
			d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
			e = a.attr("data-width") || this._core.settings.videoWidth,
			f = a.attr("data-height") || this._core.settings.videoHeight,
			g = a.attr("href");
		if (!g) throw new Error("Missing video URL.");
		if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
		else {
			if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
			c = "vimeo"
		}
		d = d[6], this._videos[g] = {
			type: c,
			id: d,
			width: e,
			height: f
		}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
	}, d.prototype.thumbnail = function (b, c) {
		var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
			h = b.find("img"),
			i = "src",
			j = "",
			k = this._core.settings,
			l = function (a) {
				e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
			};
		return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
			type: "GET",
			url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (a) {
				f = a[0].thumbnail_large, l(f)
			}
		}))
	}, d.prototype.stop = function () {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
	}, d.prototype.play = function (b) {
		this._core.trigger("play", null, "video"), this._playing && this.stop();
		var c, d, e = a(b.target || b.srcElement),
			f = e.closest("." + this._core.settings.itemClass),
			g = this._videos[f.attr("data-video")],
			h = g.width || "100%",
			i = g.height || this._core.$stage.height();
		"youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
	}, d.prototype.isInFullScreen = function () {
		var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
		return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
	}, d.prototype.destroy = function () {
		var a, b;
		this._core.$element.off("click.owl.video");
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
			"change.owl.carousel": a.proxy(function (a) {
				"position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
				this.swapping = "translated" == a.type
			}, this),
			"translate.owl.carousel": a.proxy(function () {
				this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	e.Defaults = {
		animateOut: !1,
		animateIn: !1
	}, e.prototype.swap = function () {
		if (1 === this.core.settings.items && this.core.support3d) {
			this.core.speed(0);
			var b, c = a.proxy(this.clear, this),
				d = this.core.$stage.children().eq(this.previous),
				e = this.core.$stage.children().eq(this.next),
				f = this.core.settings.animateIn,
				g = this.core.settings.animateOut;
			this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({
				left: b + "px"
			}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
		}
	}, e.prototype.clear = function (b) {
		a(b.target).css({
			left: ""
		}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c) {
	var d = function (b) {
		this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
			"translated.owl.carousel refreshed.owl.carousel": a.proxy(function () {
				this.autoplay()
			}, this),
			"play.owl.autoplay": a.proxy(function (a, b, c) {
				this.play(b, c)
			}, this),
			"stop.owl.autoplay": a.proxy(function () {
				this.stop()
			}, this),
			"mouseover.owl.autoplay": a.proxy(function () {
				this.core.settings.autoplayHoverPause && this.pause()
			}, this),
			"mouseleave.owl.autoplay": a.proxy(function () {
				this.core.settings.autoplayHoverPause && this.autoplay()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	d.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, d.prototype.autoplay = function () {
		this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function () {
			this.play()
		}, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
	}, d.prototype.play = function () {
		return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
	}, d.prototype.stop = function () {
		b.clearInterval(this.interval)
	}, d.prototype.pause = function () {
		b.clearInterval(this.interval)
	}, d.prototype.destroy = function () {
		var a, c;
		b.clearInterval(this.interval);
		for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function (a) {
	"use strict";
	var b = function (c) {
		this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": a.proxy(function (b) {
				this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
			}, this),
			"add.owl.carousel": a.proxy(function (b) {
				this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
			}, this),
			"remove.owl.carousel prepared.owl.carousel": a.proxy(function (a) {
				this._core.settings.dotsData && this._templates.splice(a.position, 1)
			}, this),
			"change.owl.carousel": a.proxy(function (a) {
				if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
					var b = this._core.current(),
						c = this._core.maximum(),
						d = this._core.minimum();
					a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
				}
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				"position" == a.property.name && this.draw()
			}, this),
			"refreshed.owl.carousel": a.proxy(function () {
				this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
			}, this)
		}, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	b.Defaults = {
		nav: !1,
		navRewind: !0,
		navText: ["prev", "next"],
		navSpeed: !1,
		navElement: "div",
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotData: !1,
		dotsSpeed: !1,
		dotsContainer: !1,
		controlsClass: "owl-controls"
	}, b.prototype.initialize = function () {
		var b, c, d = this._core.settings;
		d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function (b) {
			var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
			b.preventDefault(), this.to(c, d.dotsSpeed)
		}, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function () {
			this.prev(d.navSpeed)
		}, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function () {
			this.next(d.navSpeed)
		}, this));
		for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
	}, b.prototype.destroy = function () {
		var a, b, c, d;
		for (a in this._handlers) this.$element.off(a, this._handlers[a]);
		for (b in this._controls) this._controls[b].remove();
		for (d in this.overides) this._core[d] = this._overrides[d];
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, b.prototype.update = function () {
		var a, b, c, d = this._core.settings,
			e = this._core.clones().length / 2,
			f = e + this._core.items().length,
			g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
		if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
			for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
				start: a - e,
				end: a - e + g - 1
			}), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
	}, b.prototype.draw = function () {
		var b, c, d = "",
			e = this._core.settings,
			f = (this._core.$stage.children(), this._core.relative(this._core.current()));
		if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
			if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
				for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
				this._controls.$indicators.html(d)
			} else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
			this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
		}
		this._controls.$indicators.toggle(e.dots)
	}, b.prototype.onTrigger = function (b) {
		var c = this._core.settings;
		b.page = {
			index: a.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
		}
	}, b.prototype.current = function () {
		var b = this._core.relative(this._core.current());
		return a.grep(this._pages, function (a) {
			return a.start <= b && a.end >= b
		}).pop()
	}, b.prototype.getPosition = function (b) {
		var c, d, e = this._core.settings;
		return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
	}, b.prototype.next = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
	}, b.prototype.prev = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
	}, b.prototype.to = function (b, c, d) {
		var e;
		d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
	}, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function (a, b) {
	"use strict";
	var c = function (d) {
		this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": a.proxy(function () {
				"URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
			}, this),
			"prepared.owl.carousel": a.proxy(function (b) {
				var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
				this._hashes[c] = b.content
			}, this)
		}, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function () {
			var a = b.location.hash.substring(1),
				c = this._core.$stage.children(),
				d = this._hashes[a] && c.index(this._hashes[a]) || 0;
			return a ? void this._core.to(d, !1, !0) : !1
		}, this))
	};
	c.Defaults = {
		URLhashListener: !1
	}, c.prototype.destroy = function () {
		var c, d;
		a(b).off("hashchange.owl.navigation");
		for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
		for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);


/*
 * VenoBox - jQuery Plugin (Fixed by Ancil K Anto)
 * version: 1.5.2
 * @requires jQuery
 *
 * Examples at http://lab.veno.it/venobox/
 * License: Creative Commons Attribution 3.0 License
 * License URI: http://creativecommons.org/licenses/by/3.0/
 * Copyright 2013-2014 Nicola Franchini - @nicolafranchini
 *
 */
(function ($) {
	var ios, ie9, overlayColor, overlay, framewidth, border, bgcolor, frameheight, margine, sonH, finH, numeratio,
		vwrap, container, infinigall, content, core, dest, top, prima, type, thisgall, items, thenext, theprev,
		title, nextok, prevok, keyNavigationDisabled, blocktitle, blocknum, evitanext, evitaprev, evitacontent,
		figliall, extraCss;
	$.fn.extend({
		//plugin name - venobox
		venobox: function (options) {
			// default option
			var defaults = {
				framewidth: '',
				frameheight: '',
				border: '0',
				bgcolor: '#fff',
				titleattr: 'title', // specific attribute to get a title (e.g. [data-title]) - thanx @mendezcode
				numeratio: false,
				infinigall: false,
				overlayclose: true // disable overlay click-close - thanx @martybalandis
			};
			var option = $.extend(defaults, options);
			return this.each(function () {
				var obj = $(this);
				// Prevent double initialization - thanx @matthistuff
				if (obj.data('venobox')) {
					return true;
				}
				obj.addClass('vbox-item');
				obj.data('framewidth', option.framewidth);
				obj.data('frameheight', option.frameheight);
				obj.data('border', option.border);
				obj.data('bgcolor', option.bgcolor);
				obj.data('numeratio', option.numeratio);
				obj.data('infinigall', option.infinigall);
				obj.data('overlayclose', option.overlayclose);
				obj.data('venobox', true);
				ios = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
				// IE 9 or less
				ie9 = ((document.all && !window.atob) ? true : false);
				obj.click(function (e) {
					e.stopPropagation();
					e.preventDefault();
					obj = $(this);
					overlayColor = obj.data('overlay');
					framewidth = obj.data('framewidth');
					frameheight = obj.data('frameheight');
					border = obj.data('border');
					bgcolor = obj.data('bgcolor');
					nextok = false;
					prevok = false;
					keyNavigationDisabled = false;
					dest = obj.attr('href');
					top = $(window).scrollTop();
					top = -top;
					extraCss = obj.data('css') || "";
					//$('body').wrapInner('<div class="vwrap"></div>');
					vwrap = $('.vwrap');
					core = '<div class="vbox-overlay ' + extraCss + '" style="background:' + overlayColor + '; position:fixed !important;"><div class="vbox-preloader">Loading...</div><div class="vbox-container"><div class="vbox-content"></div></div><div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">X</div><div class="vbox-next">next</div><div class="vbox-prev">prev</div></div>';
					$('body').append(core);
					overlay = $('.vbox-overlay');
					container = $('.vbox-container');
					content = $('.vbox-content');
					blocknum = $('.vbox-num');
					blocktitle = $('.vbox-title');
					content.html('');
					content.css('opacity', '0');
					checknav();
					overlay.css('min-height', $(window).outerHeight());
					if (ie9) {
						overlay.animate({
							opacity: 1
						}, 250, function () {
							overlay.css({
								'min-height': $(window).outerHeight(),
								height: 'auto'
							});
							if (obj.data('type') == 'iframe') {
								loadIframe();
							} else if (obj.data('type') == 'inline') {
								loadInline();
							} else if (obj.data('type') == 'ajax') {
								loadAjax();
							} else if (obj.data('type') == 'vimeo') {
								loadVimeo();
							} else if (obj.data('type') == 'youtube') {
								loadYoutube();
							} else {
								content.html('<img src="' + dest + '">');
								preloadFirst();
							}
						});
					} else {
						overlay.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
							// Check if transition is on the overlay - thanx @kanduvisla
							if (e.target != e.currentTarget) {
								return;
							}
							overlay.css({
								'min-height': $(window).outerHeight(),
								height: 'auto'
							});
							if (obj.data('type') == 'iframe') {
								loadIframe();
							} else if (obj.data('type') == 'inline') {
								loadInline();
							} else if (obj.data('type') == 'ajax') {
								loadAjax();
							} else if (obj.data('type') == 'vimeo') {
								loadVimeo();
							} else if (obj.data('type') == 'youtube') {
								loadYoutube();
							} else {
								content.html('<img src="' + dest + '">');
								preloadFirst();
							}
						});
						overlay.css('opacity', '1');
					}
					if (ios) {
						vwrap.css({
							'position': 'fixed',
							'top': top,
							'opacity': '0'
						}).data('top', top);
					} else {
						vwrap.css({
							'position': 'fixed',
							'top': top
						}).data('top', top);
						////$(window).scrollTop(0);
					}
					/* -------- CHECK NEXT / PREV -------- */
					function checknav() {
						thisgall = obj.data('gall');
						numeratio = obj.data('numeratio');
						infinigall = obj.data('infinigall');
						items = $('.vbox-item[data-gall="' + thisgall + '"]');
						if (items.length > 0 && numeratio === true) {
							blocknum.html(items.index(obj) + 1 + ' / ' + items.length);
							blocknum.fadeIn();
						} else {
							blocknum.fadeOut();
						}
						thenext = items.eq(items.index(obj) + 1);
						theprev = items.eq(items.index(obj) - 1);
						if (obj.attr(option.titleattr)) {
							title = obj.attr(option.titleattr);
							blocktitle.fadeIn();
						} else {
							title = '';
							blocktitle.fadeOut();
						}
						if (items.length > 0 && infinigall === true) {
							nextok = true;
							prevok = true;
							if (thenext.length < 1) {
								thenext = items.eq(0);
							}
							if (items.index(obj) < 1) {
								theprev = items.eq(items.index(items.length));
							}
						} else {
							if (thenext.length > 0) {
								$('.vbox-next').css('display', 'block');
								nextok = true;
							} else {
								$('.vbox-next').css('display', 'none');
								nextok = false;
							}
							if (items.index(obj) > 0) {
								$('.vbox-prev').css('display', 'block');
								prevok = true;
							} else {
								$('.vbox-prev').css('display', 'none');
								prevok = false;
							}
						}
					}
					/* -------- NAVIGATION CODE -------- */
					var gallnav = {
						prev: function () {
							if (keyNavigationDisabled) return;
							else keyNavigationDisabled = true;
							overlayColor = theprev.data('overlay');
							framewidth = theprev.data('framewidth');
							frameheight = theprev.data('frameheight');
							border = theprev.data('border');
							bgcolor = theprev.data('bgcolor');
							dest = theprev.attr('href');
							if (theprev.attr(option.titleattr)) {
								title = theprev.attr(option.titleattr);
							} else {
								title = '';
							}
							if (overlayColor === undefined) {
								overlayColor = "";
							}
							overlay.css('min-height', $(window).outerHeight());
							content.animate({
								opacity: 0
							}, 500, function () {
								overlay.css('min-height', $(window).outerHeight()).css('background', overlayColor);
								if (theprev.data('type') == 'iframe') {
									loadIframe();
								} else if (theprev.data('type') == 'inline') {
									loadInline();
								} else if (theprev.data('type') == 'ajax') {
									loadAjax();
								} else if (theprev.data('type') == 'youtube') {
									loadYoutube();
								} else if (theprev.data('type') == 'vimeo') {
									loadVimeo();
								} else {
									content.html('<img src="' + dest + '">');
									preloadFirst();
								}
								obj = theprev;
								checknav();
								keyNavigationDisabled = false;
							});
						},
						next: function () {
							if (keyNavigationDisabled) return;
							else keyNavigationDisabled = true;
							overlayColor = thenext.data('overlay');
							framewidth = thenext.data('framewidth');
							frameheight = thenext.data('frameheight');
							border = thenext.data('border');
							bgcolor = thenext.data('bgcolor');
							dest = thenext.attr('href');
							if (thenext.attr(option.titleattr)) {
								title = thenext.attr(option.titleattr);
							} else {
								title = '';
							}
							if (overlayColor === undefined) {
								overlayColor = "";
							}
							overlay.css('min-height', $(window).outerHeight());
							content.animate({
								opacity: 0
							}, 500, function () {
								overlay.css('min-height', $(window).outerHeight()).css('background', overlayColor);
								if (thenext.data('type') == 'iframe') {
									loadIframe();
								} else if (thenext.data('type') == 'inline') {
									loadInline();
								} else if (thenext.data('type') == 'ajax') {
									loadAjax();
								} else if (thenext.data('type') == 'youtube') {
									loadYoutube();
								} else if (thenext.data('type') == 'vimeo') {
									loadVimeo();
								} else {
									content.html('<img src="' + dest + '">');
									preloadFirst();
								}
								obj = thenext;
								checknav();
								keyNavigationDisabled = false;
							});
						}
					};
					/* -------- NAVIGATE WITH ARROW KEYS -------- */
					$('body').keydown(function (e) {
						if (e.keyCode == 37 && prevok == true) { // left
							gallnav.prev();
						}
						if (e.keyCode == 39 && nextok == true) { // right
							gallnav.next();
						}
					});
					/* -------- PREVGALL -------- */
					$('.vbox-prev').click(function () {
						gallnav.prev();
					});
					/* -------- NEXTGALL -------- */
					$('.vbox-next').click(function () {
						gallnav.next();
					});
					/* -------- ESCAPE HANDLER -------- */
					function escapeHandler(e) {
						if (e.keyCode === 27) {
							closeVbox();
						}
					}
					/* -------- CLOSE VBOX -------- */
					function closeVbox() {
						$('body').unbind('keydown', escapeHandler);
						if (ie9) {
							overlay.animate({
								opacity: 0
							}, 500, function () {
								overlay.remove();
								$('.vwrap').children().unwrap();
								$(window).scrollTop(-top);
								keyNavigationDisabled = false;
								obj.focus();
							});
						} else {
							overlay.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");
							overlay.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
								// Check if transition is on the overlay - thanx @kanduvisla
								if (e.target != e.currentTarget) {
									return;
								}
								overlay.remove();
								if (ios) {
									$('.vwrap').bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
										$('.vwrap').children().unwrap();
										$(window).scrollTop(-top);
									});
									$('.vwrap').css('opacity', '1');
								} else {
									$('.vwrap').children().unwrap();
									$(window).scrollTop(-top);
								}
								keyNavigationDisabled = false;
								obj.focus();
							});
							overlay.css('opacity', '0');
						}
					}
					/* -------- CLOSE CLICK -------- */
					var closeclickclass = '.vbox-close, .vbox-overlay';
					if (!obj.data('overlayclose')) {
						closeclickclass = '.vbox-close'; // close only on X
					}
					$(closeclickclass).click(function (e) {
						evitacontent = '.figlio';
						evitaprev = '.vbox-prev';
						evitanext = '.vbox-next';
						figliall = '.figlio *';
						if (!$(e.target).is(evitacontent) && !$(e.target).is(evitanext) && !$(e.target).is(evitaprev) && !$(e.target).is(figliall)) {
							closeVbox();
						}
					});
					$('body').keydown(escapeHandler);
					return false;
				});
			});
		}
	});
	/* -------- LOAD AJAX -------- */
	function loadAjax() {
		$.ajax({
			url: dest,
			cache: false
		}).done(function (msg) {
			content.html('<div class="vbox-inline">' + msg + '</div>');
			updateoverlay(true);
		}).fail(function () {
			content.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>');
			updateoverlay(true);
		})
	}
	/* -------- LOAD IFRAME -------- */
	function loadIframe() {
		content.html('<iframe class="venoframe" src="' + dest + '"></iframe>');
		// $('.venoframe').load(function(){ // valid only for iFrames in same domain
		updateoverlay();
		// });
	}
	/* -------- LOAD VIMEO -------- */
	function loadVimeo() {
		var pezzi = dest.split('/');
		var videoid = pezzi[pezzi.length - 1];
		content.html('<iframe class="venoframe" src="//player.vimeo.com/video/' + videoid + '"></iframe>');
		updateoverlay();
	}
	/* -------- LOAD YOUTUBE -------- */
	function loadYoutube() {
		var pezzi = dest.split('/');
		var videoid = pezzi[pezzi.length - 1];
		content.html('<iframe class="venoframe" allowfullscreen src="//www.youtube.com/embed/' + videoid + '"></iframe>');
		updateoverlay();
	}
	/* -------- LOAD INLINE -------- */
	function loadInline() {
		content.html('<div class="vbox-inline">' + $(dest).html() + '</div>');
		updateoverlay();
	}
	/* -------- PRELOAD IMAGE -------- */
	function preloadFirst() {
		prima = $('.vbox-content').find('img');
		prima.one('load', function () {
			updateoverlay();
		}).each(function () {
			if (this.complete) $(this).load();
		});
	}
	/* -------- CENTER ON LOAD -------- */
	function updateoverlay(notopzero) {
		notopzero = notopzero || false;
		if (notopzero != true) {
			//$(window).scrollTop(0);
		}
		blocktitle.html(title);
		content.find(">:first-child").addClass('figlio');
		$('.figlio').css('width', framewidth).css('height', frameheight).css('padding', border).css('background', bgcolor);
		sonH = content.outerHeight();
		finH = $(window).height();
		if (sonH + 80 < finH) {
			margine = (finH - sonH) / 2;
			content.css('margin-top', margine);
			content.css('margin-bottom', margine);
		} else {
			content.css('margin-top', '40px');
			content.css('margin-bottom', '40px');
		}
		content.animate({
			'opacity': '1'
		}, 'slow');
	}
	/* -------- CENTER ON RESIZE -------- */
	function updateoverlayresize() {
		if ($('.vbox-content').length) {
			sonH = content.height();
			finH = $(window).height();
			if (sonH + 80 < finH) {
				margine = (finH - sonH) / 2;
				content.css('margin-top', margine);
				content.css('margin-bottom', margine);
			} else {
				content.css('margin-top', '40px');
				content.css('margin-bottom', '40px');
			}
		}
	}
	$(window).resize(function () {
		updateoverlayresize();
	});
})(jQuery);



/*jshint browser:true */
/*!
 * FitVids 1.1 (Responsive Videos)
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */

;
(function ($) {

	'use strict';

	$.fn.fitVids = function (options) {
		var settings = {
			customSelector: null,
			ignore: null
		};

		if (!document.getElementById('fit-vids-style')) {
			// appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
			var head = document.head || document.getElementsByTagName('head')[0];
			var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
			var div = document.createElement("div");
			div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
			head.appendChild(div.childNodes[1]);
		}

		if (options) {
			$.extend(settings, options);
		}

		return this.each(function () {
			var selectors = [
				'iframe[src*="player.vimeo.com"]',
				'iframe[src*="youtube.com"]',
				'iframe[src*="youtube-nocookie.com"]',
				'iframe[src*="kickstarter.com"][src*="video.html"]',
				'object',
				'embed'
			];

			if (settings.customSelector) {
				selectors.push(settings.customSelector);
			}

			var ignoreList = '.fitvidsignore';

			if (settings.ignore) {
				ignoreList = ignoreList + ', ' + settings.ignore;
			}

			var $allVideos = $(this).find(selectors.join(','));
			$allVideos = $allVideos.not('object object'); // SwfObj conflict patch
			$allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

			$allVideos.each(function (count) {
				var $this = $(this);
				if ($this.parents(ignoreList).length > 0) {
					return; // Disable FitVids on this video.
				}
				if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
					return;
				}
				if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width')))) {
					$this.attr('height', 9);
					$this.attr('width', 16);
				}
				var height = (this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)))) ? parseInt($this.attr('height'), 10) : $this.height(),
					width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
					aspectRatio = height / width;
				if (!$this.attr('id')) {
					var videoID = 'fitvid' + count;
					$this.attr('id', videoID);
				}
				$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + '%');
				$this.removeAttr('height').removeAttr('width');
			});
		});
	};
	// Works with either jQuery or Zepto
})(window.jQuery || window.Zepto);

// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
	var t = [].indexOf || function (t) {
			for (var e = 0, n = this.length; e < n; e++) {
				if (e in this && this[e] === t) return e
			}
			return -1
		},
		e = [].slice;
	(function (t, e) {
		if (typeof define === "function" && define.amd) {
			return define("waypoints", ["jquery"], function (n) {
				return e(n, t)
			})
		} else {
			return e(t.jQuery, t)
		}
	})(window, function (n, r) {
		var i, o, l, s, f, u, c, a, h, d, p, y, v, w, g, m;
		i = n(r);
		a = t.call(r, "ontouchstart") >= 0;
		s = {
			horizontal: {},
			vertical: {}
		};
		f = 1;
		c = {};
		u = "waypoints-context-id";
		p = "resize.waypoints";
		y = "scroll.waypoints";
		v = 1;
		w = "waypoints-waypoint-ids";
		g = "waypoint";
		m = "waypoints";
		o = function () {
			function t(t) {
				var e = this;
				this.$element = t;
				this.element = t[0];
				this.didResize = false;
				this.didScroll = false;
				this.id = "context" + f++;
				this.oldScroll = {
					x: t.scrollLeft(),
					y: t.scrollTop()
				};
				this.waypoints = {
					horizontal: {},
					vertical: {}
				};
				this.element[u] = this.id;
				c[this.id] = this;
				t.bind(y, function () {
					var t;
					if (!(e.didScroll || a)) {
						e.didScroll = true;
						t = function () {
							e.doScroll();
							return e.didScroll = false
						};
						return r.setTimeout(t, n[m].settings.scrollThrottle)
					}
				});
				t.bind(p, function () {
					var t;
					if (!e.didResize) {
						e.didResize = true;
						t = function () {
							n[m]("refresh");
							return e.didResize = false
						};
						return r.setTimeout(t, n[m].settings.resizeThrottle)
					}
				})
			}
			t.prototype.doScroll = function () {
				var t, e = this;
				t = {
					horizontal: {
						newScroll: this.$element.scrollLeft(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left"
					},
					vertical: {
						newScroll: this.$element.scrollTop(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up"
					}
				};
				if (a && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
					n[m]("refresh")
				}
				n.each(t, function (t, r) {
					var i, o, l;
					l = [];
					o = r.newScroll > r.oldScroll;
					i = o ? r.forward : r.backward;
					n.each(e.waypoints[t], function (t, e) {
						var n, i;
						if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
							return l.push(e)
						} else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
							return l.push(e)
						}
					});
					l.sort(function (t, e) {
						return t.offset - e.offset
					});
					if (!o) {
						l.reverse()
					}
					return n.each(l, function (t, e) {
						if (e.options.continuous || t === l.length - 1) {
							return e.trigger([i])
						}
					})
				});
				return this.oldScroll = {
					x: t.horizontal.newScroll,
					y: t.vertical.newScroll
				}
			};
			t.prototype.refresh = function () {
				var t, e, r, i = this;
				r = n.isWindow(this.element);
				e = this.$element.offset();
				this.doScroll();
				t = {
					horizontal: {
						contextOffset: r ? 0 : e.left,
						contextScroll: r ? 0 : this.oldScroll.x,
						contextDimension: this.$element.width(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left",
						offsetProp: "left"
					},
					vertical: {
						contextOffset: r ? 0 : e.top,
						contextScroll: r ? 0 : this.oldScroll.y,
						contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up",
						offsetProp: "top"
					}
				};
				return n.each(t, function (t, e) {
					return n.each(i.waypoints[t], function (t, r) {
						var i, o, l, s, f;
						i = r.options.offset;
						l = r.offset;
						o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
						if (n.isFunction(i)) {
							i = i.apply(r.element)
						} else if (typeof i === "string") {
							i = parseFloat(i);
							if (r.options.offset.indexOf("%") > -1) {
								i = Math.ceil(e.contextDimension * i / 100)
							}
						}
						r.offset = o - e.contextOffset + e.contextScroll - i;
						if (r.options.onlyOnScroll && l != null || !r.enabled) {
							return
						}
						if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
							return r.trigger([e.backward])
						} else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
							return r.trigger([e.forward])
						} else if (l === null && e.oldScroll >= r.offset) {
							return r.trigger([e.forward])
						}
					})
				})
			};
			t.prototype.checkEmpty = function () {
				if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
					this.$element.unbind([p, y].join(" "));
					return delete c[this.id]
				}
			};
			return t
		}();
		l = function () {
			function t(t, e, r) {
				var i, o;
				if (r.offset === "bottom-in-view") {
					r.offset = function () {
						var t;
						t = n[m]("viewportHeight");
						if (!n.isWindow(e.element)) {
							t = e.$element.height()
						}
						return t - n(this).outerHeight()
					}
				}
				this.$element = t;
				this.element = t[0];
				this.axis = r.horizontal ? "horizontal" : "vertical";
				this.callback = r.handler;
				this.context = e;
				this.enabled = r.enabled;
				this.id = "waypoints" + v++;
				this.offset = null;
				this.options = r;
				e.waypoints[this.axis][this.id] = this;
				s[this.axis][this.id] = this;
				i = (o = this.element[w]) != null ? o : [];
				i.push(this.id);
				this.element[w] = i
			}
			t.prototype.trigger = function (t) {
				if (!this.enabled) {
					return
				}
				if (this.callback != null) {
					this.callback.apply(this.element, t)
				}
				if (this.options.triggerOnce) {
					return this.destroy()
				}
			};
			t.prototype.disable = function () {
				return this.enabled = false
			};
			t.prototype.enable = function () {
				this.context.refresh();
				return this.enabled = true
			};
			t.prototype.destroy = function () {
				delete s[this.axis][this.id];
				delete this.context.waypoints[this.axis][this.id];
				return this.context.checkEmpty()
			};
			t.getWaypointsByElement = function (t) {
				var e, r;
				r = t[w];
				if (!r) {
					return []
				}
				e = n.extend({}, s.horizontal, s.vertical);
				return n.map(r, function (t) {
					return e[t]
				})
			};
			return t
		}();
		d = {
			init: function (t, e) {
				var r;
				e = n.extend({}, n.fn[g].defaults, e);
				if ((r = e.handler) == null) {
					e.handler = t
				}
				this.each(function () {
					var t, r, i, s;
					t = n(this);
					i = (s = e.context) != null ? s : n.fn[g].defaults.context;
					if (!n.isWindow(i)) {
						i = t.closest(i)
					}
					i = n(i);
					r = c[i[0][u]];
					if (!r) {
						r = new o(i)
					}
					return new l(t, r, e)
				});
				n[m]("refresh");
				return this
			},
			disable: function () {
				return d._invoke.call(this, "disable")
			},
			enable: function () {
				return d._invoke.call(this, "enable")
			},
			destroy: function () {
				return d._invoke.call(this, "destroy")
			},
			prev: function (t, e) {
				return d._traverse.call(this, t, e, function (t, e, n) {
					if (e > 0) {
						return t.push(n[e - 1])
					}
				})
			},
			next: function (t, e) {
				return d._traverse.call(this, t, e, function (t, e, n) {
					if (e < n.length - 1) {
						return t.push(n[e + 1])
					}
				})
			},
			_traverse: function (t, e, i) {
				var o, l;
				if (t == null) {
					t = "vertical"
				}
				if (e == null) {
					e = r
				}
				l = h.aggregate(e);
				o = [];
				this.each(function () {
					var e;
					e = n.inArray(this, l[t]);
					return i(o, e, l[t])
				});
				return this.pushStack(o)
			},
			_invoke: function (t) {
				this.each(function () {
					var e;
					e = l.getWaypointsByElement(this);
					return n.each(e, function (e, n) {
						n[t]();
						return true
					})
				});
				return this
			}
		};
		n.fn[g] = function () {
			var t, r;
			r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
			if (d[r]) {
				return d[r].apply(this, t)
			} else if (n.isFunction(r)) {
				return d.init.apply(this, arguments)
			} else if (n.isPlainObject(r)) {
				return d.init.apply(this, [null, r])
			} else if (!r) {
				return n.error("jQuery Waypoints needs a callback function or handler option.")
			} else {
				return n.error("The " + r + " method does not exist in jQuery Waypoints.")
			}
		};
		n.fn[g].defaults = {
			context: r,
			continuous: true,
			enabled: true,
			horizontal: false,
			offset: 0,
			triggerOnce: false
		};
		h = {
			refresh: function () {
				return n.each(c, function (t, e) {
					return e.refresh()
				})
			},
			viewportHeight: function () {
				var t;
				return (t = r.innerHeight) != null ? t : i.height()
			},
			aggregate: function (t) {
				var e, r, i;
				e = s;
				if (t) {
					e = (i = c[n(t)[0][u]]) != null ? i.waypoints : void 0
				}
				if (!e) {
					return []
				}
				r = {
					horizontal: [],
					vertical: []
				};
				n.each(r, function (t, i) {
					n.each(e[t], function (t, e) {
						return i.push(e)
					});
					i.sort(function (t, e) {
						return t.offset - e.offset
					});
					r[t] = n.map(i, function (t) {
						return t.element
					});
					return r[t] = n.unique(r[t])
				});
				return r
			},
			above: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "vertical", function (t, e) {
					return e.offset <= t.oldScroll.y
				})
			},
			below: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "vertical", function (t, e) {
					return e.offset > t.oldScroll.y
				})
			},
			left: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "horizontal", function (t, e) {
					return e.offset <= t.oldScroll.x
				})
			},
			right: function (t) {
				if (t == null) {
					t = r
				}
				return h._filter(t, "horizontal", function (t, e) {
					return e.offset > t.oldScroll.x
				})
			},
			enable: function () {
				return h._invoke("enable")
			},
			disable: function () {
				return h._invoke("disable")
			},
			destroy: function () {
				return h._invoke("destroy")
			},
			extendFn: function (t, e) {
				return d[t] = e
			},
			_invoke: function (t) {
				var e;
				e = n.extend({}, s.vertical, s.horizontal);
				return n.each(e, function (e, n) {
					n[t]();
					return true
				})
			},
			_filter: function (t, e, r) {
				var i, o;
				i = c[n(t)[0][u]];
				if (!i) {
					return []
				}
				o = [];
				n.each(i.waypoints[e], function (t, e) {
					if (r(i, e)) {
						return o.push(e)
					}
				});
				o.sort(function (t, e) {
					return t.offset - e.offset
				});
				return n.map(o, function (t) {
					return t.element
				})
			}
		};
		n[m] = function () {
			var t, n;
			n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
			if (h[n]) {
				return h[n].apply(null, t)
			} else {
				return h.aggregate.call(null, n)
			}
		};
		n[m].settings = {
			resizeThrottle: 100,
			scrollThrottle: 30
		};
		return i.on("load.waypoints", function () {
			return n[m]("refresh")
		})
	})
}).call(this);


/*-------------------------------------------------------------------- 
 * JQuery Plugin: "EqualHeights" & "EqualWidths"
 * by:	Scott Jehl, Todd Parker, Maggie Costello Wachs (http://www.filamentgroup.com)
 *
 * Copyright (c) 2007 Filament Group
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-license.php)
 *
 * Description: Compares the heights or widths of the top-level children of a provided element 
 		and sets their min-height to the tallest height (or width to widest width). Sets in em units 
 		by default if pxToEm() method is available.
 * Dependencies: jQuery library, pxToEm method	(article: http://www.filamentgroup.com/lab/retaining_scalable_interfaces_with_pixel_to_em_conversion/)							  
 * Usage Example: $(element).equalHeights();
   						      Optional: to set min-height in px, pass a true argument: $(element).equalHeights(true);
 * Version: 2.0, 07.24.2008
 * Changelog:
 *  08.02.2007 initial Version 1.0
 *  07.24.2008 v 2.0 - added support for widths
--------------------------------------------------------------------*/


// Tutorial Here: https://www.filamentgroup.com/lab/setting-equal-heights-with-jquery.html

$.fn.equalHeights = function (px) {
	$(this).each(function () {
		var currentTallest = 0;
		$(this).children().each(function (i) {
			if ($(this).height() > currentTallest) {
				currentTallest = $(this).height();
			}
		});
		if (!px && Number.prototype.pxToEm) currentTallest = currentTallest.pxToEm(); //use ems unless px is specified
		// for ie6, set height since min-height isn't supported
		if (typeof (document.body.style.minHeight) === "undefined") {
			$(this).children().css({
				'height': currentTallest
			});
		}
		$(this).children().css({
			'min-height': currentTallest
		});
	});
	return this;
};

// just in case you need it...
$.fn.equalWidths = function (px) {
	$(this).each(function () {
		var currentWidest = 0;
		$(this).children().each(function (i) {
			if ($(this).width() > currentWidest) {
				currentWidest = $(this).width();
			}
		});
		if (!px && Number.prototype.pxToEm) currentWidest = currentWidest.pxToEm(); //use ems unless px is specified
		// for ie6, set width since min-width isn't supported
		if (typeof (document.body.style.minHeight) === "undefined") {
			$(this).children().css({
				'width': currentWidest
			});
		}
		$(this).children().css({
			'min-width': currentWidest
		});
	});
	return this;
};
