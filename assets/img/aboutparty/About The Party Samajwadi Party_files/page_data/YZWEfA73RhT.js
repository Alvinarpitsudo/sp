if (self.CavalryLogger) { CavalryLogger.start_js(["qQgZYZ8"]); }

__d("shallowEqual",[],(function(a,b,c,d,e,f){"use strict";var g=Object.prototype.hasOwnProperty;function h(a,b){if(a===b)return a!==0||b!==0||1/a===1/b;else return a!==a&&b!==b}function a(a,b){if(h(a,b))return!0;if(typeof a!=="object"||a===null||typeof b!=="object"||b===null)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(var d=0;d<c.length;d++)if(!g.call(b,c[d])||!h(a[c[d]],b[c[d]]))return!1;return!0}f["default"]=a}),66);
__d("emptyObject",[],(function(a,b,c,d,e,f){"use strict";a={};b=a;f["default"]=b}),66);
__d("expectationViolation",["ErrorNormalizeUtils","ExecutionEnvironment","FBLogger","cr:840411","emptyFunction","sprintf"],(function(a,b,c,d,e,f,g){"use strict";d=c("emptyFunction");function a(a){var b;for(var d=arguments.length,e=new Array(d>1?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];(b=c("FBLogger")("expectation_violation").blameToPreviousFrame()).warn.apply(b,[a].concat(e))}a.setHandler=b;function b(a){d=a}g["default"]=a}),98);