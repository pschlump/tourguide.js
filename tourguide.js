var Tourguide = (function () {
    'use strict';

    var umbrella_min = {exports: {}};

    /* Umbrella JS 3.3.2 umbrellajs.com */

    (function (module) {
    var u=function(t,e){return this instanceof u?t instanceof u?t:((t="string"==typeof t?this.select(t,e):t)&&t.nodeName&&(t=[t]),void(this.nodes=this.slice(t))):new u(t,e)};u.prototype={get length(){return this.nodes.length}},u.prototype.nodes=[],u.prototype.addClass=function(){return this.eacharg(arguments,function(t,e){t.classList.add(e);})},u.prototype.adjacent=function(o,t,i){return "number"==typeof t&&(t=0===t?[]:new Array(t).join().split(",").map(Number.call,Number)),this.each(function(n,r){var e=document.createDocumentFragment();u(t||{}).map(function(t,e){e="function"==typeof o?o.call(this,t,e,n,r):o;return "string"==typeof e?this.generate(e):u(e)}).each(function(t){this.isInPage(t)?e.appendChild(u(t).clone().first()):e.appendChild(t);}),i.call(this,n,e);})},u.prototype.after=function(t,e){return this.adjacent(t,e,function(t,e){t.parentNode.insertBefore(e,t.nextSibling);})},u.prototype.append=function(t,e){return this.adjacent(t,e,function(t,e){t.appendChild(e);})},u.prototype.args=function(t,e,n){return (t="string"!=typeof(t="function"==typeof t?t(e,n):t)?this.slice(t).map(this.str(e,n)):t).toString().split(/[\s,]+/).filter(function(t){return t.length})},u.prototype.array=function(o){var i=this;return this.nodes.reduce(function(t,e,n){var r;return o?(r="string"==typeof(r=(r=o.call(i,e,n))||!1)?u(r):r)instanceof u&&(r=r.nodes):r=e.innerHTML,t.concat(!1!==r?r:[])},[])},u.prototype.attr=function(t,e,r){return r=r?"data-":"",this.pairs(t,e,function(t,e){return t.getAttribute(r+e)},function(t,e,n){n?t.setAttribute(r+e,n):t.removeAttribute(r+e);})},u.prototype.before=function(t,e){return this.adjacent(t,e,function(t,e){t.parentNode.insertBefore(e,t);})},u.prototype.children=function(t){return this.map(function(t){return this.slice(t.children)}).filter(t)},u.prototype.clone=function(){return this.map(function(t,e){var n=t.cloneNode(!0),r=this.getAll(n);return this.getAll(t).each(function(t,e){for(var n in this.mirror)this.mirror[n]&&this.mirror[n](t,r.nodes[e]);}),n})},u.prototype.getAll=function(t){return u([t].concat(u("*",t).nodes))},u.prototype.mirror={},u.prototype.mirror.events=function(t,e){if(t._e)for(var n in t._e)t._e[n].forEach(function(t){u(e).on(n,t.callback);});},u.prototype.mirror.select=function(t,e){u(t).is("select")&&(e.value=t.value);},u.prototype.mirror.textarea=function(t,e){u(t).is("textarea")&&(e.value=t.value);},u.prototype.closest=function(e){return this.map(function(t){do{if(u(t).is(e))return t}while((t=t.parentNode)&&t!==document)})},u.prototype.data=function(t,e){return this.attr(t,e,!0)},u.prototype.each=function(t){return this.nodes.forEach(t.bind(this)),this},u.prototype.eacharg=function(n,r){return this.each(function(e,t){this.args(n,e,t).forEach(function(t){r.call(this,e,t);},this);})},u.prototype.empty=function(){return this.each(function(t){for(;t.firstChild;)t.removeChild(t.firstChild);})},u.prototype.filter=function(e){var t=e instanceof u?function(t){return -1!==e.nodes.indexOf(t)}:"function"==typeof e?e:function(t){return t.matches=t.matches||t.msMatchesSelector||t.webkitMatchesSelector,t.matches(e||"*")};return u(this.nodes.filter(t))},u.prototype.find=function(e){return this.map(function(t){return u(e||"*",t)})},u.prototype.first=function(){return this.nodes[0]||!1},u.prototype.generate=function(t){return /^\s*<tr[> ]/.test(t)?u(document.createElement("table")).html(t).children().children().nodes:/^\s*<t(h|d)[> ]/.test(t)?u(document.createElement("table")).html(t).children().children().children().nodes:/^\s*</.test(t)?u(document.createElement("div")).html(t).children().nodes:document.createTextNode(t)},u.prototype.handle=function(){var t=this.slice(arguments).map(function(e){return "function"==typeof e?function(t){t.preventDefault(),e.apply(this,arguments);}:e},this);return this.on.apply(this,t)},u.prototype.hasClass=function(){return this.is("."+this.args(arguments).join("."))},u.prototype.html=function(e){return void 0===e?this.first().innerHTML||"":this.each(function(t){t.innerHTML=e;})},u.prototype.is=function(t){return 0<this.filter(t).length},u.prototype.isInPage=function(t){return t!==document.body&&document.body.contains(t)},u.prototype.last=function(){return this.nodes[this.length-1]||!1},u.prototype.map=function(t){return t?u(this.array(t)).unique():this},u.prototype.not=function(e){return this.filter(function(t){return !u(t).is(e||!0)})},u.prototype.off=function(t,e,n){var r=null==e&&null==n,o=null,i=e;return "string"==typeof e&&(o=e,i=n),this.eacharg(t,function(e,n){u(e._e?e._e[n]:[]).each(function(t){(r||t.orig_callback===i&&t.selector===o)&&e.removeEventListener(n,t.callback);});})},u.prototype.on=function(t,e,o){function i(t,e){try{Object.defineProperty(t,"currentTarget",{value:e,configurable:!0});}catch(t){}}var c=null,n=e;"string"==typeof e&&(c=e,n=o,e=function(n){var r=arguments;u(n.currentTarget).find(c).each(function(t){var e;t.contains(n.target)&&(e=n.currentTarget,i(n,t),o.apply(t,r),i(n,e));});});function r(t){return e.apply(this,[t].concat(t.detail||[]))}return this.eacharg(t,function(t,e){t.addEventListener(e,r),t._e=t._e||{},t._e[e]=t._e[e]||[],t._e[e].push({callback:r,orig_callback:n,selector:c});})},u.prototype.pairs=function(r,t,e,o){var n;return void 0!==t&&(n=r,(r={})[n]=t),"object"==typeof r?this.each(function(t,e){for(var n in r)"function"==typeof r[n]?o(t,n,r[n](t,e)):o(t,n,r[n]);}):this.length?e(this.first(),r):""},u.prototype.param=function(e){return Object.keys(e).map(function(t){return this.uri(t)+"="+this.uri(e[t])}.bind(this)).join("&")},u.prototype.parent=function(t){return this.map(function(t){return t.parentNode}).filter(t)},u.prototype.prepend=function(t,e){return this.adjacent(t,e,function(t,e){t.insertBefore(e,t.firstChild);})},u.prototype.remove=function(){return this.each(function(t){t.parentNode&&t.parentNode.removeChild(t);})},u.prototype.removeClass=function(){return this.eacharg(arguments,function(t,e){t.classList.remove(e);})},u.prototype.replace=function(t,e){var n=[];return this.adjacent(t,e,function(t,e){n=n.concat(this.slice(e.children)),t.parentNode.replaceChild(e,t);}),u(n)},u.prototype.scroll=function(){var t=this.first();return t&&t.scrollIntoView({behavior:"smooth"}),this},u.prototype.select=function(t,e){return t=t.replace(/^\s*/,"").replace(/\s*$/,""),/^</.test(t)?u().generate(t):(e||document).querySelectorAll(t)},u.prototype.serialize=function(){var r=this;return this.slice(this.first().elements).reduce(function(e,n){return !n.name||n.disabled||"file"===n.type||/(checkbox|radio)/.test(n.type)&&!n.checked?e:"select-multiple"===n.type?(u(n.options).each(function(t){t.selected&&(e+="&"+r.uri(n.name)+"="+r.uri(t.value));}),e):e+"&"+r.uri(n.name)+"="+r.uri(n.value)},"").slice(1)},u.prototype.siblings=function(t){return this.parent().children(t).not(this)},u.prototype.size=function(){var t=this.first();return t?t.getBoundingClientRect():null},u.prototype.slice=function(t){return t&&0!==t.length&&"string"!=typeof t&&"[object Function]"!==t.toString()?t.length?[].slice.call(t.nodes||t):[t]:[]},u.prototype.str=function(e,n){return function(t){return "function"==typeof t?t.call(this,e,n):t.toString()}},u.prototype.text=function(e){return void 0===e?this.first().textContent||"":this.each(function(t){t.textContent=e;})},u.prototype.toggleClass=function(t,e){return !!e===e?this[e?"addClass":"removeClass"](t):this.eacharg(t,function(t,e){t.classList.toggle(e);})},u.prototype.trigger=function(t){var o=this.slice(arguments).slice(1);return this.eacharg(t,function(t,e){var n,r={bubbles:!0,cancelable:!0,detail:o};try{n=new window.CustomEvent(e,r);}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,o);}t.dispatchEvent(n);})},u.prototype.unique=function(){return u(this.nodes.reduce(function(t,e){return null!=e&&!1!==e&&-1===t.indexOf(e)?t.concat(e):t},[]))},u.prototype.uri=function(t){return encodeURIComponent(t).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},u.prototype.wrap=function(t){return this.map(function(e){return u(t).each(function(t){!function(t){for(;t.firstElementChild;)t=t.firstElementChild;return u(t)}(t).append(e.cloneNode(!0)),e.parentNode.replaceChild(t,e);})})},module.exports&&(module.exports=u,module.exports.u=u);
    }(umbrella_min));

    var u = umbrella_min.exports;

    const Icons = `<svg id="GuidedTourIconSet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: none;">
<symbol id="tour-icon-close" viewBox="0 0 20 20"><g fill="none" stroke="currentColor" stroke-width="2"><path d="M16,16 L4,4"></path><path d="M16,4 L4,16"></path></g></symbol>
<symbol id="tour-icon-next" viewBox="0 0 20 20"><polyline points="7 4 13 10 7 16" fill="none" stroke="currentColor" stroke-width="1"></polyline></symbol>
<symbol id="tour-icon-prev" viewBox="0 0 20 20"><polyline points="12 4 6 10 12 16" fill="none" stroke="currentColor" stroke-width="1"></polyline></symbol>
<symbol id="tour-icon-complete" viewBox="0 0 20 20"><polyline points="4,10 8,15 17,4" fill="none" stroke="currentColor" stroke-width="1"></polyline></symbol>
</svg>`;

    // Pulled from: /Users/philip/go/src/github.com/pschlump/scroll-into-view/scrollIntoView.js

    var COMPLETE = 'complete',
      CANCELED = 'canceled';
    function raf(task) {
      if ('requestAnimationFrame' in window) {
        return window.requestAnimationFrame(task);
      }
      setTimeout(task, 16);
    }
    function setElementScroll$1(element, x, y) {
      if (element.self === element) {
        element.scrollTo(x, y);
      } else {
        element.scrollLeft = x;
        element.scrollTop = y;
      }
    }
    function getTargetScrollLocation(scrollSettings, parent) {
      var align = scrollSettings.align,
        target = scrollSettings.target,
        targetPosition = target.getBoundingClientRect(),
        parentPosition,
        x,
        y,
        differenceX,
        differenceY,
        targetWidth,
        targetHeight,
        leftAlign = align && align.left != null ? align.left : 0.5,
        topAlign = align && align.top != null ? align.top : 0.5,
        leftOffset = align && align.leftOffset != null ? align.leftOffset : 0,
        topOffset = align && align.topOffset != null ? align.topOffset : 0,
        leftScalar = leftAlign,
        topScalar = topAlign;
      if (scrollSettings.isWindow(parent)) {
        targetWidth = Math.min(targetPosition.width, parent.innerWidth);
        targetHeight = Math.min(targetPosition.height, parent.innerHeight);
        x = targetPosition.left + parent.pageXOffset - parent.innerWidth * leftScalar + targetWidth * leftScalar;
        y = targetPosition.top + parent.pageYOffset - parent.innerHeight * topScalar + targetHeight * topScalar;
        x -= leftOffset;
        y -= topOffset;
        x = scrollSettings.align.lockX ? parent.pageXOffset : x;
        y = scrollSettings.align.lockY ? parent.pageYOffset : y;
        differenceX = x - parent.pageXOffset;
        differenceY = y - parent.pageYOffset;
      } else {
        targetWidth = targetPosition.width;
        targetHeight = targetPosition.height;
        parentPosition = parent.getBoundingClientRect();
        var offsetLeft = targetPosition.left - (parentPosition.left - parent.scrollLeft);
        var offsetTop = targetPosition.top - (parentPosition.top - parent.scrollTop);
        x = offsetLeft + targetWidth * leftScalar - parent.clientWidth * leftScalar;
        y = offsetTop + targetHeight * topScalar - parent.clientHeight * topScalar;
        x -= leftOffset;
        y -= topOffset;
        x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0);
        y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0);
        x = scrollSettings.align.lockX ? parent.scrollLeft : x;
        y = scrollSettings.align.lockY ? parent.scrollTop : y;
        differenceX = x - parent.scrollLeft;
        differenceY = y - parent.scrollTop;
      }
      return {
        x: x,
        y: y,
        differenceX: differenceX,
        differenceY: differenceY
      };
    }
    function animate(parent) {
      var scrollSettings = parent._scrollSettings;
      if (!scrollSettings) {
        return;
      }
      var maxSynchronousAlignments = scrollSettings.maxSynchronousAlignments;
      var location = getTargetScrollLocation(scrollSettings, parent),
        time = Date.now() - scrollSettings.startTime,
        timeValue = Math.min(1 / scrollSettings.time * time, 1);
      if (scrollSettings.endIterations >= maxSynchronousAlignments) {
        setElementScroll$1(parent, location.x, location.y);
        parent._scrollSettings = null;
        return scrollSettings.end(COMPLETE);
      }
      var easeValue = 1 - scrollSettings.ease(timeValue);
      setElementScroll$1(parent, location.x - location.differenceX * easeValue, location.y - location.differenceY * easeValue);
      if (time >= scrollSettings.time) {
        scrollSettings.endIterations++;
        // Align ancestor synchronously
        scrollSettings.scrollAncestor && animate(scrollSettings.scrollAncestor);
        animate(parent);
        return;
      }
      raf(animate.bind(null, parent));
    }
    function defaultIsWindow(target) {
      return target.self === target;
    }
    function transitionScrollTo(target, parent, settings, scrollAncestor, callback) {
      var idle = !parent._scrollSettings,
        lastSettings = parent._scrollSettings,
        now = Date.now(),
        cancelHandler,
        passiveOptions = {
          passive: true
        };
      if (lastSettings) {
        lastSettings.end(CANCELED);
      }
      function end(endType) {
        parent._scrollSettings = null;
        if (parent.parentElement && parent.parentElement._scrollSettings) {
          parent.parentElement._scrollSettings.end(endType);
        }
        if (settings.debug) {
          console.log('Scrolling ended with type', endType, 'for', parent);
        }
        callback(endType);
        if (cancelHandler) {
          parent.removeEventListener('touchstart', cancelHandler, passiveOptions);
          parent.removeEventListener('wheel', cancelHandler, passiveOptions);
        }
      }
      var maxSynchronousAlignments = settings.maxSynchronousAlignments;
      if (maxSynchronousAlignments == null) {
        maxSynchronousAlignments = 3;
      }
      parent._scrollSettings = {
        startTime: now,
        endIterations: 0,
        target: target,
        time: settings.time,
        ease: settings.ease,
        align: settings.align,
        isWindow: settings.isWindow || defaultIsWindow,
        maxSynchronousAlignments: maxSynchronousAlignments,
        end: end,
        scrollAncestor
      };
      if (!('cancellable' in settings) || settings.cancellable) {
        cancelHandler = end.bind(null, CANCELED);
        parent.addEventListener('touchstart', cancelHandler, passiveOptions);
        parent.addEventListener('wheel', cancelHandler, passiveOptions);
      }
      if (idle) {
        animate(parent);
      }
      return cancelHandler;
    }
    function defaultIsScrollable(element) {
      return 'pageXOffset' in element || (element.scrollHeight !== element.clientHeight || element.scrollWidth !== element.clientWidth) && getComputedStyle(element).overflow !== 'hidden';
    }
    function defaultValidTarget() {
      return true;
    }
    function findParentElement(el) {
      if (el.assignedSlot) {
        return findParentElement(el.assignedSlot);
      }
      if (el.parentElement) {
        if (el.parentElement.tagName.toLowerCase() === 'body') {
          return el.parentElement.ownerDocument.defaultView || el.parentElement.ownerDocument.ownerWindow;
        }
        return el.parentElement;
      }
      if (el.getRootNode) {
        var parent = el.getRootNode();
        if (parent.nodeType === 11) {
          // Node.DOCUMENT_FRAGMENT_NODE (11), see: https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
          return parent.host;
        }
      }
    }

    // import scrollIntoView from "scroll-into-view";
    // module.exports = function(target, settings, callback) {
    function scrollIntoView(target, settings, callback) {
      if (!target) {
        // console.error ( "target not defined, early return!!!!!" );
        return;
      }

      // console.error ( "target=", target );

      if (typeof settings === 'function') {
        callback = settings;
        settings = null;
      }
      if (!settings) {
        settings = {};
      }
      settings.time = isNaN(settings.time) ? 1000 : settings.time;
      settings.ease = settings.ease || function (v) {
        return 1 - Math.pow(1 - v, v / 2);
      };
      settings.align = settings.align || {};
      var parent = findParentElement(target),
        parents = 1;
      function done(endType) {
        parents--;
        if (!parents) {
          callback && callback(endType);
        }
      }
      var validTarget = settings.validTarget || defaultValidTarget;
      var isScrollable = settings.isScrollable;
      if (settings.debug) {
        // console.log('About to scroll to', target)

        if (!parent) {
          console.error('Target did not have a parent, is it mounted in the DOM?');
        }
      }
      var scrollingElements = [];
      while (parent) {
        if (settings.debug) {
          console.log('Scrolling parent node', parent);
        }
        if (validTarget(parent, parents) && (isScrollable ? isScrollable(parent, defaultIsScrollable) : defaultIsScrollable(parent))) {
          parents++;
          scrollingElements.push(parent);
        }
        parent = findParentElement(parent);
        if (!parent) {
          done(COMPLETE);
          break;
        }
      }
      return scrollingElements.reduce((cancel, parent, index) => transitionScrollTo(target, parent, settings, scrollingElements[index + 1], done), null);
    }

    function assert(assertion, message) {
      if (!assertion) throw `TourguideJS: ${message}`;
      return true;
    }

    function clamp$1(number, min, max) {
      min = isNaN(min) ? number : min;
      max = isNaN(max) ? number : max;
      return Math.max(min, Math.min(number, max));
    }
    function getDataContents() {
      let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      let defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const parts = data.split(";");
      let result = {
        ...defaults
      };
      parts.forEach(part => {
        const entries = (part || "").split(":");
        result[(entries[0] || "").trim()] = (entries[1] || "").trim();
      });
      return result;
    }

    // PJS console.log ( "\n%cWe Are Hiring", 'background: #111; color:#ff40ff; padding:15px; font-size: 28px;' );
    function isTargetValid(target) {
      // xyzzy - Error - if "fixed" has no target.offsetParent!!!!
      // ---- See: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent, if "fixed" then offsetParnet is null.
      // console.log ( "%cno .offsetParent", "background: red; color: blue;" );
      // console.error ( "!!important!!, should return true!!!!!        isTargetValid, target=", target, "target.offsetParent=", target.offsetParent, " ( target && target.offsetParent !== null) return=", ( target && target.offsetParent !== null ) );
      return target && target.offsetParent !== null;
    }

    // PJS new xyzzy100
    function isTargetFixedPosition(target) {
      return target && target.offsetParent === null;
    }

    // PJS new xyzzy100
    function isTargetVisible(target) {
      return target && target.checkVisibility();
    }

    /**
     * getting bounding client rect and additional properties
     * @param {Element | string} element target element or selector
     * @param {Element} root root element
     * @returns {{ width: number, height: number, top: number, bottom: number, left: number, right: number, viewTop: number, viewBottom: number, viewLeft: number, viewRight: number }} object
     */
    function getBoundingClientRect$1(element, root) {
      const rect = u(element).size();
      const view = getViewportRect$1(root);
      return {
        width: rect.width,
        height: rect.height,
        top: rect.top + view.scrollY,
        bottom: rect.bottom + view.scrollY,
        left: rect.left + view.scrollX,
        right: rect.right + view.scrollX,
        viewTop: rect.top,
        viewBottom: rect.bottom,
        viewLeft: rect.left,
        viewRight: rect.right
      };
    }

    /**
     * getting viewport rect and additional properties
     * @param {Element | string} element target element or selector
     * @returns {{ width: number, height: number, scrollX: number, scrollY: number, rootWidth: number, rootHeight: number, rootTop: number, rootLeft: number }} object
     */
    function getViewportRect$1(element) {
      try {
        const rect = u(element).size();
        return {
          width: window.innerWidth,
          height: window.innerHeight,
          scrollX: window.scrollX,
          scrollY: window.scrollY,
          rootWidth: rect.width,
          rootHeight: rect.height,
          rootTop: rect.top,
          rootLeft: rect.left
        };
      } catch (error) {
        console.error(error);
        throw Error(`element is invalid: ${element}`);
      }
    }
    function setStyle(element, styleObj) {
      Object.keys(styleObj).forEach(key => {
        if (typeof styleObj[key] === "number") {
          styleObj[key] = Math.floor(styleObj[key]) + "px";
        }
      });
      Object.assign(u(element).first().style, styleObj);
    }

    /**
     * convert the color object to the sets of css variables
     * @param {Object<string, string | number>} colors color object
     * @param {string} [prefix] prefix of css variable name. default: "--tourguide"
     * @param {string} [selector] target css selector. default: ":root"
     * @returns {string} converted string
     * @example
     *	input: { overlay: "gray", background: "white", bulletCurrent: "red" }
     *	output: ":root { --tourguide-overlay: gray; --tourguide-background: white; --tourguide-bullet-current: red; }"
     */
    function colorObjToStyleVarString(colors) {
      let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "--tourguide";
      let selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ":host";
      const styleArray = [];
      Object.entries(colors).forEach(_ref => {
        let [key, value] = _ref;
        const splitNameArray = [prefix];
        let prevIndex = 0;
        for (let i = 0; i < key.length; i += 1) {
          if ("A" <= key[i] && key[i] <= "Z") {
            splitNameArray.push(key.substring(prevIndex, i).toLowerCase());
            prevIndex = i;
          }
        }
        splitNameArray.push(key.substring(prevIndex, key.length).toLowerCase());
        styleArray.push(`${splitNameArray.join("-")}: ${value}`);
      });
      return `${selector} {\n${styleArray.join(";\n")};\n}`;
    }

    /**
     * scroll element by coordinates (cross browser support)
     * @param {Element} element target element
     * @param {number} x scroll offset from left
     * @param {number} y scroll offset from top
     */
    function setElementScroll(element, x, y) {
      if (element.self === element) {
        element.scrollTo(x, y);
      } else {
        element.scrollLeft = x;
        element.scrollTop = y;
      }
    }

    /**
     * Smooth scroll element by coordinates (cross browser support)
     * @param {{ element: Element, x: number, y: number }[]} scrollItems
     * @param {number} time duration time
     */
    function animateScroll(scrollItems, time) {
      const startTime = Date.now();
      function raf(task) {
        if ("requestAnimationFrame" in window) {
          return window.requestAnimationFrame(task);
        }
        setTimeout(task, 16);
      }
      function ease(v) {
        return 1 - Math.pow(1 - v, v / 2);
      }
      function animate(el, x, y) {
        if (!el) {
          console.warn(`target element ${el} not found, skip`);
          return;
        }
        const diffTime = Date.now() - startTime;
        const timeValue = Math.min(1 / time * diffTime, 1);
        const easeValue = 1 - ease(timeValue);
        const differenceX = x - el.scrollLeft;
        const differenceY = y - el.scrollTop;
        setElementScroll(el, x - differenceX * easeValue, y - differenceY * easeValue);
        if (diffTime >= time) {
          setElementScroll(el, x, y);
          return;
        }
        raf(animate.bind(null, el, x, y));
      }
      scrollItems.forEach(item => {
        animate(item.element, item.x, item.y);
      });
    }

    /**
     * Getting scroll coordinates (cross browser support)
     * @param {Element | string} target target element
     * @returns {{ element: Element, x: number, y: number }[]} scrollItems
     */
    function getScrollCoordinates(target) {
      const scrollItems = [];
      let targetUEl = u(target);
      do {
        if (!targetUEl) targetUEl = false;
        if (!targetUEl.first()) targetUEl = false;
        try {
          const element = targetUEl.first();
          if (element.scrollHeight !== element.height || element.scrollWidth !== element.width) {
            scrollItems.push({
              element: targetUEl.first(),
              x: targetUEl.first().scrollLeft,
              y: targetUEl.first().scrollTop
            });
          }
          targetUEl = targetUEl.parent();
        } catch (error) {
          targetUEl = false;
        }
      } while (targetUEl);
      return scrollItems;
    }
    function getMaxZIndex() {
      return Math.max(...Array.from(document.querySelectorAll('body *'), el => parseFloat(window.getComputedStyle(el).zIndex)).filter(zIndex => !Number.isNaN(zIndex)), 0);
    }

    /**
     * Custom positioning reference element.
     * @see https://floating-ui.com/docs/virtual-elements
     */

    const sides = ['top', 'right', 'bottom', 'left'];
    const alignments = ['start', 'end'];
    const placements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
    const min = Math.min;
    const max = Math.max;
    const round = Math.round;
    const createCoords = v => ({
      x: v,
      y: v
    });
    const oppositeSideMap = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    const oppositeAlignmentMap = {
      start: 'end',
      end: 'start'
    };
    function clamp(start, value, end) {
      return max(start, min(value, end));
    }
    function evaluate(value, param) {
      return typeof value === 'function' ? value(param) : value;
    }
    function getSide(placement) {
      return placement.split('-')[0];
    }
    function getAlignment(placement) {
      return placement.split('-')[1];
    }
    function getOppositeAxis(axis) {
      return axis === 'x' ? 'y' : 'x';
    }
    function getAxisLength(axis) {
      return axis === 'y' ? 'height' : 'width';
    }
    function getSideAxis(placement) {
      return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
    }
    function getAlignmentAxis(placement) {
      return getOppositeAxis(getSideAxis(placement));
    }
    function getAlignmentSides(placement, rects, rtl) {
      if (rtl === void 0) {
        rtl = false;
      }
      const alignment = getAlignment(placement);
      const alignmentAxis = getAlignmentAxis(placement);
      const length = getAxisLength(alignmentAxis);
      let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
      if (rects.reference[length] > rects.floating[length]) {
        mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
      }
      return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
    }
    function getExpandedPlacements(placement) {
      const oppositePlacement = getOppositePlacement(placement);
      return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
    }
    function getOppositeAlignmentPlacement(placement) {
      return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
    }
    function getSideList(side, isStart, rtl) {
      const lr = ['left', 'right'];
      const rl = ['right', 'left'];
      const tb = ['top', 'bottom'];
      const bt = ['bottom', 'top'];
      switch (side) {
        case 'top':
        case 'bottom':
          if (rtl) return isStart ? rl : lr;
          return isStart ? lr : rl;
        case 'left':
        case 'right':
          return isStart ? tb : bt;
        default:
          return [];
      }
    }
    function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
      const alignment = getAlignment(placement);
      let list = getSideList(getSide(placement), direction === 'start', rtl);
      if (alignment) {
        list = list.map(side => side + "-" + alignment);
        if (flipAlignment) {
          list = list.concat(list.map(getOppositeAlignmentPlacement));
        }
      }
      return list;
    }
    function getOppositePlacement(placement) {
      return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
    }
    function expandPaddingObject(padding) {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...padding
      };
    }
    function getPaddingObject(padding) {
      return typeof padding !== 'number' ? expandPaddingObject(padding) : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
      };
    }
    function rectToClientRect(rect) {
      const {
        x,
        y,
        width,
        height
      } = rect;
      return {
        width,
        height,
        top: y,
        left: x,
        right: x + width,
        bottom: y + height,
        x,
        y
      };
    }

    function computeCoordsFromPlacement(_ref, placement, rtl) {
      let {
        reference,
        floating
      } = _ref;
      const sideAxis = getSideAxis(placement);
      const alignmentAxis = getAlignmentAxis(placement);
      const alignLength = getAxisLength(alignmentAxis);
      const side = getSide(placement);
      const isVertical = sideAxis === 'y';
      const commonX = reference.x + reference.width / 2 - floating.width / 2;
      const commonY = reference.y + reference.height / 2 - floating.height / 2;
      const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
      let coords;
      switch (side) {
        case 'top':
          coords = {
            x: commonX,
            y: reference.y - floating.height
          };
          break;
        case 'bottom':
          coords = {
            x: commonX,
            y: reference.y + reference.height
          };
          break;
        case 'right':
          coords = {
            x: reference.x + reference.width,
            y: commonY
          };
          break;
        case 'left':
          coords = {
            x: reference.x - floating.width,
            y: commonY
          };
          break;
        default:
          coords = {
            x: reference.x,
            y: reference.y
          };
      }
      switch (getAlignment(placement)) {
        case 'start':
          coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
          break;
        case 'end':
          coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
          break;
      }
      return coords;
    }

    /**
     * Computes the `x` and `y` coordinates that will place the floating element
     * next to a given reference element.
     *
     * This export does not have any `platform` interface logic. You will need to
     * write one for the platform you are using Floating UI with.
     */
    const computePosition$1 = async (reference, floating, config) => {
      const {
        placement = 'bottom',
        strategy = 'absolute',
        middleware = [],
        platform
      } = config;
      const validMiddleware = middleware.filter(Boolean);
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
      let rects = await platform.getElementRects({
        reference,
        floating,
        strategy
      });
      let {
        x,
        y
      } = computeCoordsFromPlacement(rects, placement, rtl);
      let statefulPlacement = placement;
      let middlewareData = {};
      let resetCount = 0;
      for (let i = 0; i < validMiddleware.length; i++) {
        const {
          name,
          fn
        } = validMiddleware[i];
        const {
          x: nextX,
          y: nextY,
          data,
          reset
        } = await fn({
          x,
          y,
          initialPlacement: placement,
          placement: statefulPlacement,
          strategy,
          middlewareData,
          rects,
          platform,
          elements: {
            reference,
            floating
          }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData = {
          ...middlewareData,
          [name]: {
            ...middlewareData[name],
            ...data
          }
        };
        if (reset && resetCount <= 50) {
          resetCount++;
          if (typeof reset === 'object') {
            if (reset.placement) {
              statefulPlacement = reset.placement;
            }
            if (reset.rects) {
              rects = reset.rects === true ? await platform.getElementRects({
                reference,
                floating,
                strategy
              }) : reset.rects;
            }
            ({
              x,
              y
            } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
          }
          i = -1;
        }
      }
      return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
      };
    };

    /**
     * Resolves with an object of overflow side offsets that determine how much the
     * element is overflowing a given clipping boundary on each side.
     * - positive = overflowing the boundary by that number of pixels
     * - negative = how many pixels left before it will overflow
     * - 0 = lies flush with the boundary
     * @see https://floating-ui.com/docs/detectOverflow
     */
    async function detectOverflow(state, options) {
      var _await$platform$isEle;
      if (options === void 0) {
        options = {};
      }
      const {
        x,
        y,
        platform,
        rects,
        elements,
        strategy
      } = state;
      const {
        boundary = 'clippingAncestors',
        rootBoundary = 'viewport',
        elementContext = 'floating',
        altBoundary = false,
        padding = 0
      } = evaluate(options, state);
      const paddingObject = getPaddingObject(padding);
      const altContext = elementContext === 'floating' ? 'reference' : 'floating';
      const element = elements[altBoundary ? altContext : elementContext];
      const clippingClientRect = rectToClientRect(await platform.getClippingRect({
        element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
        boundary,
        rootBoundary,
        strategy
      }));
      const rect = elementContext === 'floating' ? {
        x,
        y,
        width: rects.floating.width,
        height: rects.floating.height
      } : rects.reference;
      const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
      const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
        x: 1,
        y: 1
      } : {
        x: 1,
        y: 1
      };
      const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements,
        rect,
        offsetParent,
        strategy
      }) : rect);
      return {
        top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
        bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
        left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
        right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
      };
    }

    /**
     * Provides data to position an inner element of the floating element so that it
     * appears centered to the reference element.
     * @see https://floating-ui.com/docs/arrow
     */
    const arrow$1 = options => ({
      name: 'arrow',
      options,
      async fn(state) {
        const {
          x,
          y,
          placement,
          rects,
          platform,
          elements,
          middlewareData
        } = state;
        // Since `element` is required, we don't Partial<> the type.
        const {
          element,
          padding = 0
        } = evaluate(options, state) || {};
        if (element == null) {
          return {};
        }
        const paddingObject = getPaddingObject(padding);
        const coords = {
          x,
          y
        };
        const axis = getAlignmentAxis(placement);
        const length = getAxisLength(axis);
        const arrowDimensions = await platform.getDimensions(element);
        const isYAxis = axis === 'y';
        const minProp = isYAxis ? 'top' : 'left';
        const maxProp = isYAxis ? 'bottom' : 'right';
        const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
        const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
        const startDiff = coords[axis] - rects.reference[axis];
        const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
        let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

        // DOM platform can return `window` as the `offsetParent`.
        if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
          clientSize = elements.floating[clientProp] || rects.floating[length];
        }
        const centerToReference = endDiff / 2 - startDiff / 2;

        // If the padding is large enough that it causes the arrow to no longer be
        // centered, modify the padding so that it is centered.
        const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
        const minPadding = min(paddingObject[minProp], largestPossiblePadding);
        const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

        // Make sure the arrow doesn't overflow the floating element if the center
        // point is outside the floating element's bounds.
        const min$1 = minPadding;
        const max = clientSize - arrowDimensions[length] - maxPadding;
        const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
        const offset = clamp(min$1, center, max);

        // If the reference is small enough that the arrow's padding causes it to
        // to point to nothing for an aligned placement, adjust the offset of the
        // floating element itself. To ensure `shift()` continues to take action,
        // a single reset is performed when this is true.
        const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
        const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
        return {
          [axis]: coords[axis] + alignmentOffset,
          data: {
            [axis]: offset,
            centerOffset: center - offset - alignmentOffset,
            ...(shouldAddOffset && {
              alignmentOffset
            })
          },
          reset: shouldAddOffset
        };
      }
    });

    function getPlacementList(alignment, autoAlignment, allowedPlacements) {
      const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
      return allowedPlacementsSortedByAlignment.filter(placement => {
        if (alignment) {
          return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
        }
        return true;
      });
    }
    /**
     * Optimizes the visibility of the floating element by choosing the placement
     * that has the most space available automatically, without needing to specify a
     * preferred placement. Alternative to `flip`.
     * @see https://floating-ui.com/docs/autoPlacement
     */
    const autoPlacement$1 = function (options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: 'autoPlacement',
        options,
        async fn(state) {
          var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
          const {
            rects,
            middlewareData,
            placement,
            platform,
            elements
          } = state;
          const {
            crossAxis = false,
            alignment,
            allowedPlacements = placements,
            autoAlignment = true,
            ...detectOverflowOptions
          } = evaluate(options, state);
          const placements$1 = alignment !== undefined || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
          const currentPlacement = placements$1[currentIndex];
          if (currentPlacement == null) {
            return {};
          }
          const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

          // Make `computeCoords` start from the right place.
          if (placement !== currentPlacement) {
            return {
              reset: {
                placement: placements$1[0]
              }
            };
          }
          const currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
          const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
            placement: currentPlacement,
            overflows: currentOverflows
          }];
          const nextPlacement = placements$1[currentIndex + 1];

          // There are more placements to check.
          if (nextPlacement) {
            return {
              data: {
                index: currentIndex + 1,
                overflows: allOverflows
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
          const placementsSortedByMostSpace = allOverflows.map(d => {
            const alignment = getAlignment(d.placement);
            return [d.placement, alignment && crossAxis ?
            // Check along the mainAxis and main crossAxis side.
            d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
            // Check only the mainAxis.
            d.overflows[0], d.overflows];
          }).sort((a, b) => a[1] - b[1]);
          const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
          // Aligned placements should not check their opposite crossAxis
          // side.
          getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
          const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
          if (resetPlacement !== placement) {
            return {
              data: {
                index: currentIndex + 1,
                overflows: allOverflows
              },
              reset: {
                placement: resetPlacement
              }
            };
          }
          return {};
        }
      };
    };

    /**
     * Optimizes the visibility of the floating element by flipping the `placement`
     * in order to keep it in view when the preferred placement(s) will overflow the
     * clipping boundary. Alternative to `autoPlacement`.
     * @see https://floating-ui.com/docs/flip
     */
    const flip = function (options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: 'flip',
        options,
        async fn(state) {
          var _middlewareData$arrow, _middlewareData$flip;
          const {
            placement,
            middlewareData,
            rects,
            initialPlacement,
            platform,
            elements
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = true,
            fallbackPlacements: specifiedFallbackPlacements,
            fallbackStrategy = 'bestFit',
            fallbackAxisSideDirection = 'none',
            flipAlignment = true,
            ...detectOverflowOptions
          } = evaluate(options, state);

          // If a reset by the arrow was caused due to an alignment offset being
          // added, we should skip any logic now since `flip()` has already done its
          // work.
          // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
          if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
            return {};
          }
          const side = getSide(placement);
          const isBasePlacement = getSide(initialPlacement) === initialPlacement;
          const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
          const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
          if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
            fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
          }
          const placements = [initialPlacement, ...fallbackPlacements];
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const overflows = [];
          let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
          if (checkMainAxis) {
            overflows.push(overflow[side]);
          }
          if (checkCrossAxis) {
            const sides = getAlignmentSides(placement, rects, rtl);
            overflows.push(overflow[sides[0]], overflow[sides[1]]);
          }
          overflowsData = [...overflowsData, {
            placement,
            overflows
          }];

          // One or more sides is overflowing.
          if (!overflows.every(side => side <= 0)) {
            var _middlewareData$flip2, _overflowsData$filter;
            const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
            const nextPlacement = placements[nextIndex];
            if (nextPlacement) {
              // Try next placement and re-run the lifecycle.
              return {
                data: {
                  index: nextIndex,
                  overflows: overflowsData
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }

            // First, find the candidates that fit on the mainAxis side of overflow,
            // then find the placement that fits the best on the main crossAxis side.
            let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

            // Otherwise fallback.
            if (!resetPlacement) {
              switch (fallbackStrategy) {
                case 'bestFit':
                  {
                    var _overflowsData$map$so;
                    const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                    if (placement) {
                      resetPlacement = placement;
                    }
                    break;
                  }
                case 'initialPlacement':
                  resetPlacement = initialPlacement;
                  break;
              }
            }
            if (placement !== resetPlacement) {
              return {
                reset: {
                  placement: resetPlacement
                }
              };
            }
          }
          return {};
        }
      };
    };

    function getSideOffsets(overflow, rect) {
      return {
        top: overflow.top - rect.height,
        right: overflow.right - rect.width,
        bottom: overflow.bottom - rect.height,
        left: overflow.left - rect.width
      };
    }
    function isAnySideFullyClipped(overflow) {
      return sides.some(side => overflow[side] >= 0);
    }
    /**
     * Provides data to hide the floating element in applicable situations, such as
     * when it is not in the same clipping context as the reference element.
     * @see https://floating-ui.com/docs/hide
     */
    const hide = function (options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: 'hide',
        options,
        async fn(state) {
          const {
            rects
          } = state;
          const {
            strategy = 'referenceHidden',
            ...detectOverflowOptions
          } = evaluate(options, state);
          switch (strategy) {
            case 'referenceHidden':
              {
                const overflow = await detectOverflow(state, {
                  ...detectOverflowOptions,
                  elementContext: 'reference'
                });
                const offsets = getSideOffsets(overflow, rects.reference);
                return {
                  data: {
                    referenceHiddenOffsets: offsets,
                    referenceHidden: isAnySideFullyClipped(offsets)
                  }
                };
              }
            case 'escaped':
              {
                const overflow = await detectOverflow(state, {
                  ...detectOverflowOptions,
                  altBoundary: true
                });
                const offsets = getSideOffsets(overflow, rects.floating);
                return {
                  data: {
                    escapedOffsets: offsets,
                    escaped: isAnySideFullyClipped(offsets)
                  }
                };
              }
            default:
              {
                return {};
              }
          }
        }
      };
    };

    function getBoundingRect(rects) {
      const minX = min(...rects.map(rect => rect.left));
      const minY = min(...rects.map(rect => rect.top));
      const maxX = max(...rects.map(rect => rect.right));
      const maxY = max(...rects.map(rect => rect.bottom));
      return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
      };
    }
    function getRectsByLine(rects) {
      const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
      const groups = [];
      let prevRect = null;
      for (let i = 0; i < sortedRects.length; i++) {
        const rect = sortedRects[i];
        if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
          groups.push([rect]);
        } else {
          groups[groups.length - 1].push(rect);
        }
        prevRect = rect;
      }
      return groups.map(rect => rectToClientRect(getBoundingRect(rect)));
    }
    /**
     * Provides improved positioning for inline reference elements that can span
     * over multiple lines, such as hyperlinks or range selections.
     * @see https://floating-ui.com/docs/inline
     */
    const inline = function (options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: 'inline',
        options,
        async fn(state) {
          const {
            placement,
            elements,
            rects,
            platform,
            strategy
          } = state;
          // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
          // ClientRect's bounds, despite the event listener being triggered. A
          // padding of 2 seems to handle this issue.
          const {
            padding = 2,
            x,
            y
          } = evaluate(options, state);
          const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
          const clientRects = getRectsByLine(nativeClientRects);
          const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
          const paddingObject = getPaddingObject(padding);
          function getBoundingClientRect() {
            // There are two rects and they are disjoined.
            if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
              // Find the first rect in which the point is fully inside.
              return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
            }

            // There are 2 or more connected rects.
            if (clientRects.length >= 2) {
              if (getSideAxis(placement) === 'y') {
                const firstRect = clientRects[0];
                const lastRect = clientRects[clientRects.length - 1];
                const isTop = getSide(placement) === 'top';
                const top = firstRect.top;
                const bottom = lastRect.bottom;
                const left = isTop ? firstRect.left : lastRect.left;
                const right = isTop ? firstRect.right : lastRect.right;
                const width = right - left;
                const height = bottom - top;
                return {
                  top,
                  bottom,
                  left,
                  right,
                  width,
                  height,
                  x: left,
                  y: top
                };
              }
              const isLeftSide = getSide(placement) === 'left';
              const maxRight = max(...clientRects.map(rect => rect.right));
              const minLeft = min(...clientRects.map(rect => rect.left));
              const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
              const top = measureRects[0].top;
              const bottom = measureRects[measureRects.length - 1].bottom;
              const left = minLeft;
              const right = maxRight;
              const width = right - left;
              const height = bottom - top;
              return {
                top,
                bottom,
                left,
                right,
                width,
                height,
                x: left,
                y: top
              };
            }
            return fallback;
          }
          const resetRects = await platform.getElementRects({
            reference: {
              getBoundingClientRect
            },
            floating: elements.floating,
            strategy
          });
          if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
            return {
              reset: {
                rects: resetRects
              }
            };
          }
          return {};
        }
      };
    };

    // For type backwards-compatibility, the `OffsetOptions` type was also
    // Derivable.

    async function convertValueToCoords(state, options) {
      const {
        placement,
        platform,
        elements
      } = state;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isVertical = getSideAxis(placement) === 'y';
      const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
      const crossAxisMulti = rtl && isVertical ? -1 : 1;
      const rawValue = evaluate(options, state);

      // eslint-disable-next-line prefer-const
      let {
        mainAxis,
        crossAxis,
        alignmentAxis
      } = typeof rawValue === 'number' ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
      } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...rawValue
      };
      if (alignment && typeof alignmentAxis === 'number') {
        crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
      }
      return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
      } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
      };
    }

    /**
     * Modifies the placement by translating the floating element along the
     * specified axes.
     * A number (shorthand for `mainAxis` or distance), or an axes configuration
     * object may be passed.
     * @see https://floating-ui.com/docs/offset
     */
    const offset$1 = function (options) {
      if (options === void 0) {
        options = 0;
      }
      return {
        name: 'offset',
        options,
        async fn(state) {
          var _middlewareData$offse, _middlewareData$arrow;
          const {
            x,
            y,
            placement,
            middlewareData
          } = state;
          const diffCoords = await convertValueToCoords(state, options);

          // If the placement is the same and the arrow caused an alignment offset
          // then we don't need to change the positioning coordinates.
          if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
            return {};
          }
          return {
            x: x + diffCoords.x,
            y: y + diffCoords.y,
            data: {
              ...diffCoords,
              placement
            }
          };
        }
      };
    };

    /**
     * Optimizes the visibility of the floating element by shifting it in order to
     * keep it in view when it will overflow the clipping boundary.
     * @see https://floating-ui.com/docs/shift
     */
    const shift = function (options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: 'shift',
        options,
        async fn(state) {
          const {
            x,
            y,
            placement
          } = state;
          const {
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = false,
            limiter = {
              fn: _ref => {
                let {
                  x,
                  y
                } = _ref;
                return {
                  x,
                  y
                };
              }
            },
            ...detectOverflowOptions
          } = evaluate(options, state);
          const coords = {
            x,
            y
          };
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const crossAxis = getSideAxis(getSide(placement));
          const mainAxis = getOppositeAxis(crossAxis);
          let mainAxisCoord = coords[mainAxis];
          let crossAxisCoord = coords[crossAxis];
          if (checkMainAxis) {
            const minSide = mainAxis === 'y' ? 'top' : 'left';
            const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
            const min = mainAxisCoord + overflow[minSide];
            const max = mainAxisCoord - overflow[maxSide];
            mainAxisCoord = clamp(min, mainAxisCoord, max);
          }
          if (checkCrossAxis) {
            const minSide = crossAxis === 'y' ? 'top' : 'left';
            const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
            const min = crossAxisCoord + overflow[minSide];
            const max = crossAxisCoord - overflow[maxSide];
            crossAxisCoord = clamp(min, crossAxisCoord, max);
          }
          const limitedCoords = limiter.fn({
            ...state,
            [mainAxis]: mainAxisCoord,
            [crossAxis]: crossAxisCoord
          });
          return {
            ...limitedCoords,
            data: {
              x: limitedCoords.x - x,
              y: limitedCoords.y - y
            }
          };
        }
      };
    };
    /**
     * Built-in `limiter` that will stop `shift()` at a certain point.
     */
    const limitShift = function (options) {
      if (options === void 0) {
        options = {};
      }
      return {
        options,
        fn(state) {
          const {
            x,
            y,
            placement,
            rects,
            middlewareData
          } = state;
          const {
            offset = 0,
            mainAxis: checkMainAxis = true,
            crossAxis: checkCrossAxis = true
          } = evaluate(options, state);
          const coords = {
            x,
            y
          };
          const crossAxis = getSideAxis(placement);
          const mainAxis = getOppositeAxis(crossAxis);
          let mainAxisCoord = coords[mainAxis];
          let crossAxisCoord = coords[crossAxis];
          const rawOffset = evaluate(offset, state);
          const computedOffset = typeof rawOffset === 'number' ? {
            mainAxis: rawOffset,
            crossAxis: 0
          } : {
            mainAxis: 0,
            crossAxis: 0,
            ...rawOffset
          };
          if (checkMainAxis) {
            const len = mainAxis === 'y' ? 'height' : 'width';
            const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
            const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
            if (mainAxisCoord < limitMin) {
              mainAxisCoord = limitMin;
            } else if (mainAxisCoord > limitMax) {
              mainAxisCoord = limitMax;
            }
          }
          if (checkCrossAxis) {
            var _middlewareData$offse, _middlewareData$offse2;
            const len = mainAxis === 'y' ? 'width' : 'height';
            const isOriginSide = ['top', 'left'].includes(getSide(placement));
            const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
            const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
            if (crossAxisCoord < limitMin) {
              crossAxisCoord = limitMin;
            } else if (crossAxisCoord > limitMax) {
              crossAxisCoord = limitMax;
            }
          }
          return {
            [mainAxis]: mainAxisCoord,
            [crossAxis]: crossAxisCoord
          };
        }
      };
    };

    /**
     * Provides data that allows you to change the size of the floating element —
     * for instance, prevent it from overflowing the clipping boundary or match the
     * width of the reference element.
     * @see https://floating-ui.com/docs/size
     */
    const size = function (options) {
      if (options === void 0) {
        options = {};
      }
      return {
        name: 'size',
        options,
        async fn(state) {
          const {
            placement,
            rects,
            platform,
            elements
          } = state;
          const {
            apply = () => {},
            ...detectOverflowOptions
          } = evaluate(options, state);
          const overflow = await detectOverflow(state, detectOverflowOptions);
          const side = getSide(placement);
          const alignment = getAlignment(placement);
          const isYAxis = getSideAxis(placement) === 'y';
          const {
            width,
            height
          } = rects.floating;
          let heightSide;
          let widthSide;
          if (side === 'top' || side === 'bottom') {
            heightSide = side;
            widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
          } else {
            widthSide = side;
            heightSide = alignment === 'end' ? 'top' : 'bottom';
          }
          const overflowAvailableHeight = height - overflow[heightSide];
          const overflowAvailableWidth = width - overflow[widthSide];
          const noShift = !state.middlewareData.shift;
          let availableHeight = overflowAvailableHeight;
          let availableWidth = overflowAvailableWidth;
          if (isYAxis) {
            const maximumClippingWidth = width - overflow.left - overflow.right;
            availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
          } else {
            const maximumClippingHeight = height - overflow.top - overflow.bottom;
            availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
          }
          if (noShift && !alignment) {
            const xMin = max(overflow.left, 0);
            const xMax = max(overflow.right, 0);
            const yMin = max(overflow.top, 0);
            const yMax = max(overflow.bottom, 0);
            if (isYAxis) {
              availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
            } else {
              availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
            }
          }
          await apply({
            ...state,
            availableWidth,
            availableHeight
          });
          const nextDimensions = await platform.getDimensions(elements.floating);
          if (width !== nextDimensions.width || height !== nextDimensions.height) {
            return {
              reset: {
                rects: true
              }
            };
          }
          return {};
        }
      };
    };

    function getNodeName(node) {
      if (isNode(node)) {
        return (node.nodeName || '').toLowerCase();
      }
      // Mocked nodes in testing environments may not be instances of Node. By
      // returning `#document` an infinite loop won't occur.
      // https://github.com/floating-ui/floating-ui/issues/2317
      return '#document';
    }
    function getWindow(node) {
      var _node$ownerDocument;
      return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
    }
    function getDocumentElement(node) {
      var _ref;
      return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
    }
    function isNode(value) {
      return value instanceof Node || value instanceof getWindow(value).Node;
    }
    function isElement(value) {
      return value instanceof Element || value instanceof getWindow(value).Element;
    }
    function isHTMLElement(value) {
      return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
    }
    function isShadowRoot(value) {
      // Browsers without `ShadowRoot` support.
      if (typeof ShadowRoot === 'undefined') {
        return false;
      }
      return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
    }
    function isOverflowElement(element) {
      const {
        overflow,
        overflowX,
        overflowY,
        display
      } = getComputedStyle$1(element);
      return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
    }
    function isTableElement(element) {
      return ['table', 'td', 'th'].includes(getNodeName(element));
    }
    function isContainingBlock(element) {
      const webkit = isWebKit();
      const css = getComputedStyle$1(element);

      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
      return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
    }
    function getContainingBlock(element) {
      let currentNode = getParentNode(element);
      while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
        if (isContainingBlock(currentNode)) {
          return currentNode;
        }
        currentNode = getParentNode(currentNode);
      }
      return null;
    }
    function isWebKit() {
      if (typeof CSS === 'undefined' || !CSS.supports) return false;
      return CSS.supports('-webkit-backdrop-filter', 'none');
    }
    function isLastTraversableNode(node) {
      return ['html', 'body', '#document'].includes(getNodeName(node));
    }
    function getComputedStyle$1(element) {
      return getWindow(element).getComputedStyle(element);
    }
    function getNodeScroll(element) {
      if (isElement(element)) {
        return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
      }
      return {
        scrollLeft: element.pageXOffset,
        scrollTop: element.pageYOffset
      };
    }
    function getParentNode(node) {
      if (getNodeName(node) === 'html') {
        return node;
      }
      const result =
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot ||
      // DOM Element detected.
      node.parentNode ||
      // ShadowRoot detected.
      isShadowRoot(node) && node.host ||
      // Fallback.
      getDocumentElement(node);
      return isShadowRoot(result) ? result.host : result;
    }
    function getNearestOverflowAncestor(node) {
      const parentNode = getParentNode(node);
      if (isLastTraversableNode(parentNode)) {
        return node.ownerDocument ? node.ownerDocument.body : node.body;
      }
      if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
        return parentNode;
      }
      return getNearestOverflowAncestor(parentNode);
    }
    function getOverflowAncestors(node, list, traverseIframes) {
      var _node$ownerDocument2;
      if (list === void 0) {
        list = [];
      }
      if (traverseIframes === void 0) {
        traverseIframes = true;
      }
      const scrollableAncestor = getNearestOverflowAncestor(node);
      const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
      const win = getWindow(scrollableAncestor);
      if (isBody) {
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
      }
      return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
    }

    function getCssDimensions(element) {
      const css = getComputedStyle$1(element);
      // In testing environments, the `width` and `height` properties are empty
      // strings for SVG elements, returning NaN. Fallback to `0` in this case.
      let width = parseFloat(css.width) || 0;
      let height = parseFloat(css.height) || 0;
      const hasOffset = isHTMLElement(element);
      const offsetWidth = hasOffset ? element.offsetWidth : width;
      const offsetHeight = hasOffset ? element.offsetHeight : height;
      const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
      if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
      }
      return {
        width,
        height,
        $: shouldFallback
      };
    }

    function unwrapElement(element) {
      return !isElement(element) ? element.contextElement : element;
    }

    function getScale(element) {
      const domElement = unwrapElement(element);
      if (!isHTMLElement(domElement)) {
        return createCoords(1);
      }
      const rect = domElement.getBoundingClientRect();
      const {
        width,
        height,
        $
      } = getCssDimensions(domElement);
      let x = ($ ? round(rect.width) : rect.width) / width;
      let y = ($ ? round(rect.height) : rect.height) / height;

      // 0, NaN, or Infinity should always fallback to 1.

      if (!x || !Number.isFinite(x)) {
        x = 1;
      }
      if (!y || !Number.isFinite(y)) {
        y = 1;
      }
      return {
        x,
        y
      };
    }

    const noOffsets = /*#__PURE__*/createCoords(0);
    function getVisualOffsets(element) {
      const win = getWindow(element);
      if (!isWebKit() || !win.visualViewport) {
        return noOffsets;
      }
      return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop
      };
    }
    function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
      if (isFixed === void 0) {
        isFixed = false;
      }
      if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
        return false;
      }
      return isFixed;
    }

    function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
      if (includeScale === void 0) {
        includeScale = false;
      }
      if (isFixedStrategy === void 0) {
        isFixedStrategy = false;
      }
      const clientRect = element.getBoundingClientRect();
      const domElement = unwrapElement(element);
      let scale = createCoords(1);
      if (includeScale) {
        if (offsetParent) {
          if (isElement(offsetParent)) {
            scale = getScale(offsetParent);
          }
        } else {
          scale = getScale(element);
        }
      }
      const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
      let x = (clientRect.left + visualOffsets.x) / scale.x;
      let y = (clientRect.top + visualOffsets.y) / scale.y;
      let width = clientRect.width / scale.x;
      let height = clientRect.height / scale.y;
      if (domElement) {
        const win = getWindow(domElement);
        const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
        let currentWin = win;
        let currentIFrame = currentWin.frameElement;
        while (currentIFrame && offsetParent && offsetWin !== currentWin) {
          const iframeScale = getScale(currentIFrame);
          const iframeRect = currentIFrame.getBoundingClientRect();
          const css = getComputedStyle$1(currentIFrame);
          const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
          const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
          x *= iframeScale.x;
          y *= iframeScale.y;
          width *= iframeScale.x;
          height *= iframeScale.y;
          x += left;
          y += top;
          currentWin = getWindow(currentIFrame);
          currentIFrame = currentWin.frameElement;
        }
      }
      return rectToClientRect({
        width,
        height,
        x,
        y
      });
    }

    const topLayerSelectors = [':popover-open', ':modal'];
    function isTopLayer(element) {
      return topLayerSelectors.some(selector => {
        try {
          return element.matches(selector);
        } catch (e) {
          return false;
        }
      });
    }

    function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
      let {
        elements,
        rect,
        offsetParent,
        strategy
      } = _ref;
      const isFixed = strategy === 'fixed';
      const documentElement = getDocumentElement(offsetParent);
      const topLayer = elements ? isTopLayer(elements.floating) : false;
      if (offsetParent === documentElement || topLayer && isFixed) {
        return rect;
      }
      let scroll = {
        scrollLeft: 0,
        scrollTop: 0
      };
      let scale = createCoords(1);
      const offsets = createCoords(0);
      const isOffsetParentAnElement = isHTMLElement(offsetParent);
      if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
          scroll = getNodeScroll(offsetParent);
        }
        if (isHTMLElement(offsetParent)) {
          const offsetRect = getBoundingClientRect(offsetParent);
          scale = getScale(offsetParent);
          offsets.x = offsetRect.x + offsetParent.clientLeft;
          offsets.y = offsetRect.y + offsetParent.clientTop;
        }
      }
      return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
      };
    }

    function getClientRects(element) {
      return Array.from(element.getClientRects());
    }

    function getWindowScrollBarX(element) {
      // If <html> has a CSS width greater than the viewport, then this will be
      // incorrect for RTL.
      return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
    }

    // Gets the entire size of the scrollable document area, even extending outside
    // of the `<html>` and `<body>` rect bounds if horizontally scrollable.
    function getDocumentRect(element) {
      const html = getDocumentElement(element);
      const scroll = getNodeScroll(element);
      const body = element.ownerDocument.body;
      const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
      const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
      let x = -scroll.scrollLeft + getWindowScrollBarX(element);
      const y = -scroll.scrollTop;
      if (getComputedStyle$1(body).direction === 'rtl') {
        x += max(html.clientWidth, body.clientWidth) - width;
      }
      return {
        width,
        height,
        x,
        y
      };
    }

    function getViewportRect(element, strategy) {
      const win = getWindow(element);
      const html = getDocumentElement(element);
      const visualViewport = win.visualViewport;
      let width = html.clientWidth;
      let height = html.clientHeight;
      let x = 0;
      let y = 0;
      if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const visualViewportBased = isWebKit();
        if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
          x = visualViewport.offsetLeft;
          y = visualViewport.offsetTop;
        }
      }
      return {
        width,
        height,
        x,
        y
      };
    }

    // Returns the inner client rect, subtracting scrollbars if present.
    function getInnerBoundingClientRect(element, strategy) {
      const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
      const top = clientRect.top + element.clientTop;
      const left = clientRect.left + element.clientLeft;
      const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
      const width = element.clientWidth * scale.x;
      const height = element.clientHeight * scale.y;
      const x = left * scale.x;
      const y = top * scale.y;
      return {
        width,
        height,
        x,
        y
      };
    }
    function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
      let rect;
      if (clippingAncestor === 'viewport') {
        rect = getViewportRect(element, strategy);
      } else if (clippingAncestor === 'document') {
        rect = getDocumentRect(getDocumentElement(element));
      } else if (isElement(clippingAncestor)) {
        rect = getInnerBoundingClientRect(clippingAncestor, strategy);
      } else {
        const visualOffsets = getVisualOffsets(element);
        rect = {
          ...clippingAncestor,
          x: clippingAncestor.x - visualOffsets.x,
          y: clippingAncestor.y - visualOffsets.y
        };
      }
      return rectToClientRect(rect);
    }
    function hasFixedPositionAncestor(element, stopNode) {
      const parentNode = getParentNode(element);
      if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
        return false;
      }
      return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
    }

    // A "clipping ancestor" is an `overflow` element with the characteristic of
    // clipping (or hiding) child elements. This returns all clipping ancestors
    // of the given element up the tree.
    function getClippingElementAncestors(element, cache) {
      const cachedResult = cache.get(element);
      if (cachedResult) {
        return cachedResult;
      }
      let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
      let currentContainingBlockComputedStyle = null;
      const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
      let currentNode = elementIsFixed ? getParentNode(element) : element;

      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
      while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
        const computedStyle = getComputedStyle$1(currentNode);
        const currentNodeIsContaining = isContainingBlock(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
          currentContainingBlockComputedStyle = null;
        }
        const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) {
          // Drop non-containing blocks.
          result = result.filter(ancestor => ancestor !== currentNode);
        } else {
          // Record last containing block for next iteration.
          currentContainingBlockComputedStyle = computedStyle;
        }
        currentNode = getParentNode(currentNode);
      }
      cache.set(element, result);
      return result;
    }

    // Gets the maximum area that the element is visible in due to any number of
    // clipping ancestors.
    function getClippingRect(_ref) {
      let {
        element,
        boundary,
        rootBoundary,
        strategy
      } = _ref;
      const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
      const clippingAncestors = [...elementClippingAncestors, rootBoundary];
      const firstClippingAncestor = clippingAncestors[0];
      const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
        const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = max(rect.top, accRect.top);
        accRect.right = min(rect.right, accRect.right);
        accRect.bottom = min(rect.bottom, accRect.bottom);
        accRect.left = max(rect.left, accRect.left);
        return accRect;
      }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
      return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top
      };
    }

    function getDimensions(element) {
      const {
        width,
        height
      } = getCssDimensions(element);
      return {
        width,
        height
      };
    }

    function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
      const isOffsetParentAnElement = isHTMLElement(offsetParent);
      const documentElement = getDocumentElement(offsetParent);
      const isFixed = strategy === 'fixed';
      const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
      let scroll = {
        scrollLeft: 0,
        scrollTop: 0
      };
      const offsets = createCoords(0);
      if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
          scroll = getNodeScroll(offsetParent);
        }
        if (isOffsetParentAnElement) {
          const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
          offsets.x = offsetRect.x + offsetParent.clientLeft;
          offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) {
          offsets.x = getWindowScrollBarX(documentElement);
        }
      }
      const x = rect.left + scroll.scrollLeft - offsets.x;
      const y = rect.top + scroll.scrollTop - offsets.y;
      return {
        x,
        y,
        width: rect.width,
        height: rect.height
      };
    }

    function isStaticPositioned(element) {
      return getComputedStyle$1(element).position === 'static';
    }

    function getTrueOffsetParent(element, polyfill) {
      if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
        return null;
      }
      if (polyfill) {
        return polyfill(element);
      }
      return element.offsetParent;
    }

    // Gets the closest ancestor positioned element. Handles some edge cases,
    // such as table ancestors and cross browser bugs.
    function getOffsetParent(element, polyfill) {
      const win = getWindow(element);
      if (isTopLayer(element)) {
        return win;
      }
      if (!isHTMLElement(element)) {
        let svgOffsetParent = getParentNode(element);
        while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
          if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
            return svgOffsetParent;
          }
          svgOffsetParent = getParentNode(svgOffsetParent);
        }
        return win;
      }
      let offsetParent = getTrueOffsetParent(element, polyfill);
      while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
        offsetParent = getTrueOffsetParent(offsetParent, polyfill);
      }
      if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
        return win;
      }
      return offsetParent || getContainingBlock(element) || win;
    }

    const getElementRects = async function (data) {
      const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
      const getDimensionsFn = this.getDimensions;
      const floatingDimensions = await getDimensionsFn(data.floating);
      return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
          x: 0,
          y: 0,
          width: floatingDimensions.width,
          height: floatingDimensions.height
        }
      };
    };

    function isRTL(element) {
      return getComputedStyle$1(element).direction === 'rtl';
    }

    const platform = {
      convertOffsetParentRelativeRectToViewportRelativeRect,
      getDocumentElement,
      getClippingRect,
      getOffsetParent,
      getElementRects,
      getClientRects,
      getDimensions,
      getScale,
      isElement,
      isRTL
    };

    /**
     * Modifies the placement by translating the floating element along the
     * specified axes.
     * A number (shorthand for `mainAxis` or distance), or an axes configuration
     * object may be passed.
     * @see https://floating-ui.com/docs/offset
     */
    const offset = offset$1;

    /**
     * Optimizes the visibility of the floating element by choosing the placement
     * that has the most space available automatically, without needing to specify a
     * preferred placement. Alternative to `flip`.
     * @see https://floating-ui.com/docs/autoPlacement
     */
    const autoPlacement = autoPlacement$1;

    /**
     * Optimizes the visibility of the floating element by shifting it in order to
     * keep it in view when it will overflow the clipping boundary.
     * @see https://floating-ui.com/docs/shift
     */
    shift;

    /**
     * Optimizes the visibility of the floating element by flipping the `placement`
     * in order to keep it in view when the preferred placement(s) will overflow the
     * clipping boundary. Alternative to `autoPlacement`.
     * @see https://floating-ui.com/docs/flip
     */
    flip;

    /**
     * Provides data that allows you to change the size of the floating element —
     * for instance, prevent it from overflowing the clipping boundary or match the
     * width of the reference element.
     * @see https://floating-ui.com/docs/size
     */
    size;

    /**
     * Provides data to hide the floating element in applicable situations, such as
     * when it is not in the same clipping context as the reference element.
     * @see https://floating-ui.com/docs/hide
     */
    hide;

    /**
     * Provides data to position an inner element of the floating element so that it
     * appears centered to the reference element.
     * @see https://floating-ui.com/docs/arrow
     */
    const arrow = arrow$1;

    /**
     * Provides improved positioning for inline reference elements that can span
     * over multiple lines, such as hyperlinks or range selections.
     * @see https://floating-ui.com/docs/inline
     */
    inline;

    /**
     * Built-in `limiter` that will stop `shift()` at a certain point.
     */
    limitShift;

    /**
     * Computes the `x` and `y` coordinates that will place the floating element
     * next to a given reference element.
     */
    const computePosition = (reference, floating, options) => {
      // This caches the expensive `getClippingElementAncestors` function so that
      // multiple lifecycle resets re-use the same result. It only lives for a
      // single call. If other functions become expensive, we can add them as well.
      const cache = new Map();
      const mergedOptions = {
        platform,
        ...options
      };
      const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
      };
      return computePosition$1(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
      });
    };

    var e={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function n(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function r(e){return (e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(a,c){var o,l,g,s,p,u=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,m=[],h="",i=c||{},d=0;function f(n){var r=e[n[1]||""],t=m[m.length-1]==n;return r?r[1]?(t?m.pop():m.push(n),r[0|t]):r[0]:n}function $(){for(var e="";m.length;)e+=f(m[m.length-1]);return e}for(a=a.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(e,n,r){return i[n.toLowerCase()]=r,""}).replace(/^\n+|\n+$/g,"");g=u.exec(a);)l=a.substring(d,g.index),d=u.lastIndex,o=g[0],l.match(/[^\\](\\\\)*\\$/)||((p=g[3]||g[4])?o='<pre class="code '+(g[4]?"poetry":g[2].toLowerCase())+'"><code'+(g[2]?' class="language-'+g[2].toLowerCase()+'"':"")+">"+n(r(p).replace(/^\n+|\n+$/g,""))+"</code></pre>":(p=g[6])?(p.match(/\./)&&(g[5]=g[5].replace(/^\d+/gm,"")),s=t(n(g[5].replace(/^\s*[>*+.-]/gm,""))),">"==p?p="blockquote":(p=p.match(/\./)?"ol":"ul",s=s.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),o="<"+p+">"+s+"</"+p+">"):g[8]?o='<img src="'+r(g[8])+'" alt="'+r(g[7])+'">':g[10]?(h=h.replace("<a>",'<a href="'+r(g[11]||i[l.toLowerCase()])+'">'),o=$()+"</a>"):g[9]?o="<a>":g[12]||g[14]?o="<"+(p="h"+(g[14]?g[14].length:g[13]>"="?1:2))+">"+t(g[12]||g[15],i)+"</"+p+">":g[16]?o="<code>"+r(g[16])+"</code>":(g[17]||g[1])&&(o=f(g[17]||"--"))),h+=l,h+=o;return (h+a.substring(d)+$()).replace(/^\n+|\n+$/g,"")}

    const keepinview = _ref => {
      let {
        padding = 0
      } = _ref;
      return {
        name: "keepinview",
        fn(_ref2) {
          let {
            x,
            y,
            rects,
            middlewareData,
            platform
          } = _ref2;
          const documentDimentions = platform.getDimensions(document.body);
          const _x = clamp$1(x, padding, documentDimentions.width - rects.floating.width - padding);
          const _y = clamp$1(y, padding, documentDimentions.height - rects.floating.height - padding);
          const dx = x - _x;
          const dy = y - _y;
          const {
            arrow
          } = middlewareData;
          if (arrow) {
            if (arrow.x && dx) arrow.x += dx;
            if (arrow.y && dy) arrow.y += dy;
          }
          return {
            x: _x,
            y: _y
          };
        }
      };
    };
    function positionTooltip(target, tooltipEl, arrowEl, context) {
      //context._options.root
      console.log(context);
      computePosition(target, tooltipEl, {
        // placement: 'bottom-start',
        middleware: [
        // flip(),
        autoPlacement({
          alignment: 'bottom-start'
        }), offset(props => {
          const side = props.placement.split("-")[0];
          switch (side) {
            case "top":
              return 32;
            case "left":
            case "right":
              return 24;
            default:
              return 6;
          }
        }), arrow({
          element: arrowEl,
          padding: 8
        }), keepinview({
          padding: 24
        })]
      }).then(_ref3 => {
        let {
          x,
          y,
          middlewareData,
          placement
        } = _ref3;
        setStyle(tooltipEl, {
          left: `${x}px`,
          top: `${y}px`
        });
        if (middlewareData.arrow) {
          const side = placement.split("-")[0];
          const staticSide = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
          }[side];
          setStyle(arrowEl, {
            left: middlewareData.arrow.x != null ? `${middlewareData.arrow.x}px` : '',
            top: middlewareData.arrow.y != null ? `${middlewareData.arrow.y}px` : '',
            right: "",
            bottom: "",
            [staticSide]: `${-arrowEl.offsetWidth / 2}px`
          });
        }
      });
    }
    class Step {
      get el() {
        if (!this.container) {
          const image = u(`<div role="figure" class="guided-tour-step-image">${this.image ? `<img src="${this.image}" />` : ""}</div>`);
          const content = u(`<div class="guided-tour-step-content-wrapper">
				<div id="tooltip-title-${this.index}" role="heading" class="guided-tour-step-title">${this.context._decorateText(this.title, this)}</div>
				<div class="guided-tour-step-content">${this.context._decorateText(this.content, this)}</div>
			</div>`);
          content.find('a').on('click', e => {
            this.context.action(e, {
              action: "link"
            });
          });
          if (Array.isArray(this.actions) && this.actions.length > 0) {
            const actions = u(`<div class="guided-tour-step-actions">
					${this.actions.map((action, index) => `<${action.href ? "a" : "button"} id="${action.id}" ${action.href ? `href="${action.href}"` : ""} ${action.target ? `target="${action.target}"` : ""} class="button${action.primary ? " primary" : ""}" data-index="${index}">${action.label}</${action.href ? "a" : "button"}>`).join("")}
				</div>`);
            actions.find('a, button').on('click', e => {
              const action = this.actions[parseInt(e.target.dataset.index)];
              if (action.action) e.preventDefault();
              this.context.action(e, action);
            });
            content.append(actions);
          }
          const tooltip = this.tooltip = u("<div role=\"document\" class=\"guided-tour-step-tooltip\"></div>");
          if (this.width) setStyle(tooltip, {
            width: this.width + "px",
            maxWidth: this.width + "px"
          });
          if (this.height) setStyle(tooltip, {
            height: this.height + "px",
            maxHeight: this.height + "px"
          });
          const tooltipinner = u(`<div class="guided-tour-step-tooltip-inner${this.layout === "horizontal" ? " step-layout-horizontal" : ""}"></div>`);
          const container = u(`<div class="guided-tour-step-content-container"></div>`);
          container.append(image).append(content);
          const arrow = this.arrow = u(`<div class="guided-tour-arrow"></div>`);
          if (this.navigation) {
            const footer = u(`<div class="guided-tour-step-footer">
									<button class="guided-tour-step-button guided-tour-step-button-close" title="End tour">
											<svg class="guided-tour-icon" viewBox="0 0 20 20" width="16" height="16"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tour-icon-close"></use></svg>
									</button>
									${!this.first ? `<button class="guided-tour-step-button guided-tour-step-button-prev" title="Prev step">
										<svg class="guided-tour-icon" viewBox="0 0 20 20" width="32" height="32">
											<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tour-icon-prev"></use>
										</svg>
									</button>` : ""}
									${this.last ? `<button class="guided-tour-step-button guided-tour-step-button-complete" title="Complete tour">
										<svg class="guided-tour-icon" viewBox="0 0 20 20" width="32" height="32">
											<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tour-icon-complete"></use>
										</svg>
									</button>` : `<button class="guided-tour-step-button guided-tour-step-button-next" title="Next step">
										<svg class="guided-tour-icon" viewBox="0 0 20 20" width="32" height="32">
											<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tour-icon-next"></use>
										</svg>
									</button>`}
									${this.context._steps.length > 1 ? `<div class="guided-tour-step-bullets">
											<ul>${this.context._steps.map((step, i) => `<li><button title="Go to step ${i + 1}" data-index="${i}" class="${step.index < this.index ? "complete" : step.index == this.index ? "current" : ""}"></button></li>`).join("")}</ul>
									</div>` : ""}
							</div>`);
            footer.find(".guided-tour-step-button-prev").on("click", this.context.previous);
            footer.find(".guided-tour-step-button-next").on("click", this.context.next);
            footer.find(".guided-tour-step-button-close").on("click", this.context.stop);
            footer.find(".guided-tour-step-button-complete").on("click", this.context.complete);
            footer.find(".guided-tour-step-bullets button").on("click", e => this.context.go(parseInt(u(e.target).data("index"))));
            tooltipinner.append(arrow).append(container).append(footer);
          } else tooltipinner.append(arrow).append(container);
          tooltip.append(tooltipinner);
          this.container = u(`<div role="dialog" aria-labelleby="tooltip-title-${this.index}" class="guided-tour-step${this.first ? " guided-tour-step-first" : ""}${this.last ? " guided-tour-step-last" : ""}"></div>`);
          // console.warn ( "this.target = ", this.target );
          // xyzzy100 - this point - if fixed and visible, then ... do it...
          // export function isTargetFixedPosition(target) {
          // export function isTargetVisible(target) {
          if (this.overlay && isTargetFixedPosition(this.target) && isTargetVisible(this.target)) {
            const highlight = this.highlight = u("<div class=\"guided-tour-step-highlight\"></div>");
            this.container.append(highlight).append(tooltip);
          } else if (this.overlay && isTargetValid(this.target)) {
            const highlight = this.highlight = u("<div class=\"guided-tour-step-highlight\"></div>");
            this.container.append(highlight).append(tooltip);
          } else {
            const highlight = this.highlight = u("<div class=\"guided-tour-step-highlight\"></div>");
            this.container.append(highlight).append(tooltip);
            // PJS xyzzy102
            // this.container.append(tooltip);
          }
        }
        // console.warn ( "return this.container from 'get el', ", this.container);
        return this.container;
      }
      get target() {
        // I think the error is at this piont, this._selector = '#driver-footer', u()... is NULL, no find.
        // console.warn ( ">>>>>>  in get target(), this._selector = ", this._selector, " u(...)=", u(this._selector), " .first()=", u(this._selector).first() );
        return this._target || this._selector && u(this._selector).first();
      }
      set target(target) {
        // console.warn ( "set of target to, ", target );
        this._target = target;
      }
      constructor(step, context) {
        // console.warn ( "step = ", step );			// have udata
        this.active = false;
        this.first = false;
        this.last = false;
        this.container = null;
        this.highlight = null;
        this.tooltip = null;
        this.arrow = null;
        this.context = context;
        this._target = null;
        this._timerHandler = null;
        this._scrollCancel = null;
        let data;
        if (!(step instanceof HTMLElement)) {
          data = step;
          this._selector = step.selector;
        } else {
          // console.error ( " !!!!!!!!!!!!!!!!!!!!!!!! seting of this.target = step !!!!!!!!!!!!!!!!!! Before set of target", step );
          this.target = step;
          data = getDataContents(u(step).data("tour"));
        }
        assert(data.hasOwnProperty("title"), "missing required step parameter: title\n" + JSON.stringify(data, null, 2) + "\n" + "see this doc for more detail: https://github.com/LikaloLLC/tourguide.js#json-based-approach");
        assert(data.hasOwnProperty("content"), "missing required step parameter: content\n" + JSON.stringify(data, null, 2) + "\n" + "see this doc for more detail: https://github.com/LikaloLLC/tourguide.js#json-based-approach");
        this.index = parseInt(data.step);
        this.title = data.title;
        this.content = t(data.content);
        this.image = data.image;
        this.width = data.width;
        this.height = data.height;
        // this.udata = {};									// add user data, udata
        // console.log ( "data =", data );
        // if ( data.hasOwnProperty("udata") ) {
        if (data.udata) {
          this.udata = data.udata;
        } else {
          this.udata = {};
        }
        this.layout = data.layout || "vertical";
        this.placement = data.placement || "bottom";
        this.overlay = data.overlay !== false;
        this.navigation = data.navigation !== false;
        if (data.image && context.options.preloadimages && !/^data:/i.test(data.image)) {
          const preload = new Image();
          // preload.onload = (e) => {
          // };
          preload.onerror = () => {
            console.error(new Error(`Invalid image URL: ${data.image}`));
            this.image = null;
          };
          preload.src = this.image;
        }
        this.actions = [];
        if (data.actions) {
          if (!Array.isArray(data.actions)) {
            console.error(new Error(`actions must be array but got ${typeof data.actions}`));
          } else {
            this.actions = data.actions;
          }
        }
        // this.adjust = this.adjust.bind(this);
      }
      attach(root) {
        // console.warn ( "in attach() before this.el, error may already have occured.   this.target=", this.target);
        u(root).append(this.el);
      }
      remove() {
        this.hide();
        this.el.remove();
      }
      position() {
        // console.warn ( "postion()" );
        const view = getViewportRect$1(this.context._options.root);
        const tooltip = this.tooltip;
        const highlight = this.highlight;
        let highlightStyle = {
          top: 0,
          left: 0,
          width: 0,
          height: 0
        };

        // xyzzy100 - 
        if (isTargetFixedPosition(this.target) && isTargetVisible(this.target)) {
          if (this.overlay && this.highlight) {
            // console.warn ( "Case 1 - no check for in view, fixed and isTargetVisible()==true" );
            // See: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent
            // offsetParent is useful because offsetTop and offsetLeft are relative to its padding edge., so take a guess at padding size...
            const targetRect = getBoundingClientRect$1(this.target, this.context._options.root);
            highlightStyle.top = `${targetRect.top - (3 + this.context.options.padding)}px`;
            highlightStyle.left = `${targetRect.left - (3 + this.context.options.padding)}px`;
            highlightStyle.width = `${targetRect.width + 2 + this.context.options.padding * 2}px`;
            highlightStyle.height = `${targetRect.height + 2 + this.context.options.padding * 2}px`;
            setStyle(highlight, highlightStyle);
          }
          positionTooltip(this.target, tooltip.first(), this.arrow.first(), this.context);
        } else if (isTargetValid(this.target)) {
          // console.warn ( "Case 2" );
          if (this.overlay && this.highlight) {
            const targetRect = getBoundingClientRect$1(this.target, this.context._options.root);
            highlightStyle.top = `${targetRect.top - this.context.options.padding}px`;
            highlightStyle.left = `${targetRect.left - this.context.options.padding}px`;
            highlightStyle.width = `${targetRect.width + this.context.options.padding * 2}px`;
            highlightStyle.height = `${targetRect.height + this.context.options.padding * 2}px`;
            setStyle(highlight, highlightStyle);
          }
          positionTooltip(this.target, tooltip.first(), this.arrow.first(), this.context);
        } else {
          // console.warn ( "Case 3" );
          if (this.overlay && this.highlight) setStyle(highlight, highlightStyle);
          const tootipStyle = {};
          const tooltipRect = getBoundingClientRect$1(tooltip, this.context._options.root);
          tootipStyle.top = view.height / 2 + view.scrollY - view.rootTop - tooltipRect.height / 2;
          tootipStyle.left = view.width / 2 + view.scrollX - view.rootLeft - tooltipRect.width / 2;
          tootipStyle.bottom = "unset";
          tootipStyle.right = "unset";
          tooltip.addClass("guided-tour-arrow-none");
          setStyle(tooltip, tootipStyle);
          if (this.overlay) this.context._overlay.show();
        }
      }
      cancel() {
        if (this._timerHandler) clearTimeout(this._timerHandler);
        if (this._scrollCancel) this._scrollCancel();
      }
      show() {
        // console.log ( "in show()/340" );
        this.cancel();
        if (!this.active) {
          // console.log ( "A/343" );
          const show = () => {
            // console.log ( "A/345" );
            this.el.addClass("active"); // Add 'active' first to calculate the tooltip real size on the DOM.
            // xyzzy101
            // this.context._overlay.hide();
            this.position();
            this.active = true;
            this.container.find(".guided-tour-step-tooltip, button.primary, .guided-tour-step-button-complete, .guided-tour-step-button-next").last().focus({
              preventScroll: true
            });
          };
          const animationspeed = clamp$1(this.context.options.animationspeed, 120, 1000);
          // console.log ( "A/356" );

          let xtarget = this.target;
          // console.error ( "Before isTargetValid", xtarget, "animationspeed=", animationspeed );
          if (isTargetFixedPosition(this.target) && isTargetVisible(this.target)) ; else if (isTargetValid(xtarget)) {
            // console.warn ( "Calling scrollIntoView()" );
            this._scrollCancel = scrollIntoView(xtarget, {
              time: animationspeed,
              cancellable: false,
              align: {
                top: 0.5,
                left: 0.5
              }
            }, () => {
              console.log(">>> scroll done <<<");
            } // PJS Added.
            );
          }
          // console.log ( "A/375" );
          this._timerHandler = setTimeout(show, animationspeed * 3);
          // console.log ( "A/377" );
          return true;
        }
        return false;
      }
      hide() {
        this.cancel();
        if (this.active) {
          this.el.removeClass("active");
          this.tooltip.removeClass("guided-tour-arrow-top");
          this.tooltip.removeClass("guided-tour-arrow-bottom");
          if (this.overlay) this.context._overlay.show();
          this.active = false;
          return true;
        }
        return false;
      }
      toJSON() {
        const {
          index,
          title,
          content,
          image,
          active
        } = this;
        return {
          index,
          title,
          content,
          image,
          active
        };
      }
    }

    class Overlay {
      get el() {
        if (!this.container) {
          this.container = u("<div role=\"dialog\" class=\"guided-tour-overlay\"></div>");
        }
        return this.container;
      }
      constructor(context) {
        this.context = context;
        this.container = null;
        this.active = false;
      }
      attach(root) {
        u(root).append(this.el);
      }
      remove() {
        this.hide();
        this.el.remove();
      }
      show() {
        if (!this.active) {
          this.el.addClass("active");
          this.active = true;
          return true;
        }
        return false;
      }
      hide() {
        if (this.active) {
          // console.error ( "deactivating it -- the overlay" );
          this.el.removeClass("active");
          this.active = false;
          return true;
        }
        return false;
      }
      toJSON() {
        const {
          active
        } = this;
        return {
          active
        };
      }
    }

    function hexToRGB(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
    }
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }
    function rgbToHex(r, g, b) {
      return "#" + componentToHex(Math.floor(r)) + componentToHex(Math.floor(g)) + componentToHex(Math.floor(b));
    }
    function RGBToHSL(r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;
      const l = Math.max(r, g, b);
      const s = l - Math.min(r, g, b);
      const h = s ? l === r ? (g - b) / s : l === g ? 2 + (b - r) / s : 4 + (r - g) / s : 0;
      return [60 * h < 0 ? 60 * h + 360 : 60 * h, 100 * (s ? l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s)) : 0), 100 * (2 * l - s) / 2];
    }
    function HSLToRGB(h, s, l) {
      s /= 100;
      l /= 100;
      const k = n => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return [255 * f(0), 255 * f(8), 255 * f(4)];
    }
    function hexToHSL(hex) {
      return RGBToHSL.apply(null, hexToRGB(hex));
    }
    function HSLToHex(h, s, l) {
      return rgbToHex.apply(null, HSLToRGB(h, s, l));
    }
    function adjust(hex, h, s, l) {
      const hsl = hexToHSL(hex);
      hsl[0] = clamp$1(hsl[0] * h, 0, 255);
      hsl[1] = clamp$1(hsl[1] * s, 0, 255);
      hsl[2] = clamp$1(hsl[2] * l, 0, 255);
      return HSLToHex.apply(null, hsl);
    }
    function setAutoColors(defaultStyle, optionsStyle) {
      let style = Object.assign(defaultStyle, optionsStyle || {});
      const filter = /Color$/;
      const {
        accentColor
      } = style;
      Object.keys(style).filter(key => filter.test(key) && style[key] === "auto").forEach(key => {
        switch (key) {
          case "focusColor":
          case "stepButtonNextColor":
          case "stepButtonCompleteColor":
          case "bulletCurrentColor":
            style[key] = accentColor;
            break;
          case "bulletColor":
            style[key] = adjust(accentColor, 1, 0.8, 1.4);
            break;
          case "bulletVisitedColor":
            style[key] = adjust(accentColor, 1, 0.3, 1.2);
            break;
          case "stepButtonPrevColor":
          case "stepButtonCloseColor":
            style[key] = adjust(accentColor, 1, 0.2, 0.8);
            break;
        }
      });
      return style;
    }

    class ActionHandler {
      constructor(name, handlerFn) {
        this.name = name;
        this.onAction = handlerFn;
      }
    }

    function parseProperties(props) {
      return (props || "").split(",").map(p => p.trim()).filter(Boolean);
    }
    function getMatches(str, regex) {
      let matches = [],
        m;
      regex.lastIndex = 0;
      while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        // m.forEach((match, groupIndex) => {
        matches.push({
          match: m[0],
          start: m.index,
          length: m[0].length,
          properties: parseProperties(m[1])
        });
        // });
      }
      return matches;
    }
    class ContentDecorator {
      constructor(match, decoratorFn) {
        if (typeof match === 'string')
          // this.match = new RegExp(`{\s*${match.trim()}\s*(,.+?)?\s*?}`, 'gmi'); // PJS
          this.match = new RegExp(`{[ \t]*${match.trim()}[ \t]*(,.+?)?[ \t]*?}`, 'gmi');else this.match = match;
        this.decoratorFn = decoratorFn;
      }
      test(text) {
        return this.match.test(text);
      }
      render(text, step, context) {
        try {
          const matches = getMatches(text, this.match).reverse();
          return this.decoratorFn(text, matches, step, context);
        } catch (e) {
          console.warn(e);
          return text;
        }
      }
    }

    var Style = ":host {\n  position: absolute;\n  overflow: visible;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 0;\n  box-sizing: border-box;\n  line-height: 1.4;\n  text-align: left;\n  text-rendering: optimizespeed;\n  font-family: var(--tourguide-font-family);\n  font-size: var(--tourguide-font-size);\n  color: var(--tourguide-text-color);\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n  -moz-tab-size: 4;\n  /* 3 */\n  tab-size: 4;\n  /* 3 */\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  background: none;\n  border: none;\n  border-width: 0;\n  border-style: none;\n  border-color: currentColor;\n  box-shadow: none;\n  color: inherit;\n  appearance: none;\n  font-size: inherit;\n  font-weight: inherit;\n  text-decoration: none;\n}\n\na,\nbutton {\n  cursor: pointer;\n}\na:hover, a:focus,\nbutton:hover,\nbutton:focus {\n  outline: 5px auto var(--tourguide-focus-color);\n}\n\n.guided-tour-overlay {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1001;\n  background-color: var(--tourguide-overlay-color);\n}\n.guided-tour-overlay.active {\n  display: block;\n}\n\n.guided-tour-catch-click {\n  z-index: 1000;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.guided-tour-step {\n  display: none;\n}\n.guided-tour-step.active {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: all;\n}\n.guided-tour-step.active .guided-tour-step-highlight {\n  position: absolute;\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 0 0 999em var(--tourguide-overlay-color);\n  z-index: 1001;\n}\n.guided-tour-step.active .guided-tour-step-tooltip {\n  position: absolute;\n  margin: 16px 0;\n  z-index: 1002;\n  background-color: var(--tourguide-background-color);\n  width: var(--tourguide-tooltip-width);\n  max-width: max-content;\n  border-radius: 5px;\n  box-sizing: border-box;\n  box-shadow: 0 0 3em -0.8em #000;\n  transition: opacity 150ms;\n}\n@media screen and (max-width: 760px) {\n  .guided-tour-step.active .guided-tour-step-tooltip {\n    max-width: 85vw;\n    width: max-content !important;\n  }\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-arrow {\n  position: absolute;\n  width: 1em;\n  height: 1em;\n  background: var(--tourguide-background-color);\n  z-index: -1;\n  transform: rotate(45deg);\n  pointer-events: none;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content-container {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: calc(100% - 2.6em);\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-image {\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: hidden;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-image img {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px 4px 0 0;\n  object-fit: cover;\n  object-position: center;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content-wrapper {\n  margin: 1.5em 2.5em;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-title {\n  font-size: 1.4em;\n  margin-bottom: 0.8em;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content {\n  flex-shrink: 0;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content b,\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content strong {\n  font-weight: bold;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content i,\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content em {\n  font-style: italic;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content a {\n  cursor: pointer;\n  text-decoration: underline;\n  color: var(--tourguide-accent-color);\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content mark {\n  background: inherit;\n  text-shadow: 0px 2px 4px #ff0;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content code,\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content dfn {\n  padding: 1px 6px 1px 4px;\n  border-radius: 4px;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content code {\n  background-color: #f0f0f0;\n  color: #e83e8c;\n  font-family: monospace;\n  font-size: 87.5%;\n  word-break: break-word;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content dfn {\n  font-style: italic;\n  background-color: #ffc6e5;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content p,\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content ul,\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content ol,\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content blockquote {\n  margin: 1em 0;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content p:last-child,\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content ul:last-child,\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content ol:last-child,\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content blockquote:last-child {\n  margin-bottom: 0;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content blockquote {\n  padding-left: 1em;\n  border-left: 4px solid silver;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content ul,\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content ol {\n  padding-left: 1.5em;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content ul li,\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-content ol li {\n  margin: 0.3em 0;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-actions {\n  display: flex;\n  column-gap: 0.5em;\n  margin-top: 1.5em;\n  justify-content: end;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-actions .button {\n  color: var(--tourguide-accent-color);\n  padding: 0.5em 1em;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-actions .button.primary {\n  background: var(--tourguide-accent-color);\n  padding: 0.5em 1.5em;\n  color: #fff;\n  border-radius: 4px;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-actions .button.primary:hover, .guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-actions .button.primary:focus {\n  filter: brightness(120%);\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-icon {\n  display: inline-block;\n  overflow: hidden;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-button {\n  flex-direction: column;\n  justify-content: center;\n  /* <-- actual veertical align */\n  display: inline-flex;\n  text-align: center;\n  cursor: pointer;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-button .guided-tour-icon {\n  align-self: center;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-button-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 2em;\n  height: 2em;\n  color: var(--tourguide-step-button-close-color);\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-button-prev,\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-button-next,\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-button-complete {\n  width: 3em;\n  height: 3em;\n  background: var(--tourguide-background-color);\n  border-radius: 50%;\n  margin-top: -1.5em;\n  position: absolute;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-button-prev {\n  color: var(--tourguide-step-button-prev-color);\n  left: 0;\n  transform: translateX(-50%);\n  top: 50%;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-button-next {\n  color: var(--tourguide-step-button-next-color);\n  right: 0;\n  transform: translateX(50%);\n  top: 50%;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-button-complete {\n  color: var(--tourguide-step-button-complete-color);\n  right: 0;\n  transform: translateX(50%);\n  top: 50%;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-footer {\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-bullets {\n  text-align: center;\n  line-height: 16px;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-bullets ul {\n  list-style: none;\n  margin: 0 1em 1em;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-bullets ul li {\n  display: inline-block;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-bullets ul li button {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  display: inline-block;\n  background-color: var(--tourguide-bullet-color);\n  border: 8px solid var(--tourguide-background-color);\n  box-sizing: content-box;\n  cursor: pointer;\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-bullets ul li button.complete {\n  background-color: var(--tourguide-bullet-visited-color);\n}\n.guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner .guided-tour-step-bullets ul li button.current {\n  background-color: var(--tourguide-bullet-current-color);\n}\n@media screen and (min-width: 760px) {\n  .guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner.step-layout-horizontal .guided-tour-step-content-container {\n    flex-direction: row;\n    height: 100%;\n  }\n  .guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner.step-layout-horizontal .guided-tour-step-content-container .guided-tour-step-content-wrapper {\n    flex: 1 1 auto;\n  }\n  .guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner.step-layout-horizontal .guided-tour-step-content-container .guided-tour-step-image {\n    width: 50%;\n    margin-bottom: calc((1em + 24px) * -1);\n    flex: 0 0 auto;\n  }\n  .guided-tour-step.active .guided-tour-step-tooltip .guided-tour-step-tooltip-inner.step-layout-horizontal .guided-tour-step-content-container .guided-tour-step-image img {\n    border-radius: 4px 0 0 4px;\n    height: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n}\n.guided-tour-step.active .guided-tour-step-tooltip.guided-tour-arrow-none .guided-tour-step-tooltip-inner .guided-tour-arrow {\n  display: none;\n}";

    const StepsSource = {
      DOM: 0,
      JSON: 1,
      REMOTE: 2
    };
    const defaultKeyNavOptions = {
      next: "ArrowRight",
      prev: "ArrowLeft",
      first: "Home",
      last: "End",
      complete: null,
      stop: "Escape"
    };
    const defaultStyle = {
      fontFamily: 'sans-serif',
      fontSize: "14px",
      tooltipWidth: "40vw",
      overlayColor: "rgba(0, 0, 0, 0.2)",
      textColor: "#333",
      accentColor: "#0d6efd",
      focusColor: "auto",
      bulletColor: "auto",
      bulletVisitedColor: "auto",
      bulletCurrentColor: "auto",
      stepButtonCloseColor: "auto",
      stepButtonPrevColor: "auto",
      stepButtonNextColor: "auto",
      stepButtonCompleteColor: "auto",
      backgroundColor: "#fff"
    };
    function isEventAttrbutesMatched(event, keyOption) {
      let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "keyup";
      if (typeof event === "object") {
        let eventAttrsMap = {
          type
        };
        if (typeof keyOption === "number") {
          eventAttrsMap.keyCode = keyOption;
        } else if (typeof keyOption === "string") {
          eventAttrsMap.key = keyOption;
        } else if (typeof keyOption === "object") {
          eventAttrsMap = {
            ...keyOption,
            type
          };
        } else {
          throw new Error("keyboardNavigation option invalid. should be predefined object or false. Check documentation.");
        }
        const eventAttrs = Object.entries(eventAttrsMap).map(_ref => {
          let [key, value] = _ref;
          return {
            key,
            value
          };
        });
        return !eventAttrs.filter(attr => event[attr.key] !== attr.value).length;
      }
      return false;
    }
    class Tour {
      get currentstep() {
        return this._steps[this._current];
      }
      get length() {
        return this._steps.length;
      }
      get steps() {
        return this._steps.map(step => step.toJSON());
      }
      get hasnext() {
        return this.nextstep !== this._current;
      }
      get nextstep() {
        return clamp$1(this._current + 1, 0, this.length - 1);
      }
      get previousstep() {
        return clamp$1(this._current - 1, 0);
      }
      get options() {
        return this._options;
      }
      constructor() {
        let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        this._options = Object.assign({
          root: "body",
          selector: "[data-tour]",
          animationspeed: 120,
          padding: 5,
          steps: null,
          src: null,
          restoreinitialposition: true,
          preloadimages: false,
          closeOnEsc: false,
          closeOnBackgroundClick: false,
          request: {
            options: {
              mode: "cors",
              cache: "no-cache"
            },
            headers: {
              "Content-Type": "application/json"
            }
          },
          keyboardNavigation: defaultKeyNavOptions,
          actionHandlers: [],
          contentDecorators: [],
          onStart: () => {},
          onStop: () => {},
          onComplete: () => {},
          onBeforeStep: () => {},
          onStep: () => {},
          onAction: () => {}
        }, options, {
          style: setAutoColors(defaultStyle, options.colors || options.style)
        });

        //console.error ( "echo of options", this._options );
        //console.log ( "echo of options, closeOnEsc", this._options.closeOnEsc );
        //console.log ( "echo of options, closeOnBackgroundClick", this._options.closeOnBackgroundClick );

        this._overlay = null;
        this._steps = [];
        this._current = 0;
        this._active = false;
        this._stepsSrc = StepsSource.DOM;
        this._ready = false;
        this._initialposition = null;
        if (typeof this._options.steps === "object" && Array.isArray(this._options.steps)) {
          this._stepsSrc = StepsSource.JSON;
          this._steps = this._options.steps.map((o, index) => new Step({
            ...o,
            step: o.step || index
          }, this));
          this._ready = true;
        } else if (typeof this._options.src === "string") {
          this._stepsSrc = StepsSource.REMOTE;
          fetch(new Request(this._options.src, this._options.request)).then(response => response.json().then(data => {
            this._steps = data.map((o, index) => new Step({
              ...o,
              step: o.step || index
            }, this));
            this._ready = true;
          }));
        } else if (u(this._options.selector).length > 0) {
          this._stepsSrc = StepsSource.DOM;
          this._ready = true;
        } else {
          throw new Error("Tour is not configured properly. Check documentation.");
        }
        this._containerElement = document.createElement("aside");
        this._containerElement.classList.add("__guided-tour-container");
        u(this._options.root).append(this._containerElement);
        this._shadowRoot = this._containerElement.attachShadow({
          mode: "closed"
        });
        this._injectIcons();
        this._injectStyles();
        let w = window.innerWidth - 1;
        let h = window.innerHeight - 1;
        this._overlayElement = document.createElement("div"); // PJS
        this._overlayElement.classList.add("guided-tour-catch-click");
        this._overlayElement.style = `height:${h}px; width:${w}px;`;
        u(this._shadowRoot).append(this._overlayElement);
        this._overlayElement.addEventListener("wheel", event => {
          event.preventDefault();
          // console.log ( "Catch wheel scroll event" );
          return false;
        });
        // catch click or 'Esc' char on background.
        if (this._options.closeOnBackgroundClick) {
          // console.warn ( "apply click handler to div" );
          this._overlayElement.addEventListener("click", event => {
            event.preventDefault();
            // console.log ( "Catch click event" );
            this.stop();
            return false;
          });
        }
        this.start = this.start.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.go = this.go.bind(this);
        this.stop = this.stop.bind(this);
        this.complete = this.complete.bind(this);
        // this.action = this.action.bind(this);
        this._keyboardHandler = this._keyboardHandler.bind(this);
      }
      _injectIcons() {
        if (u("#GuidedTourIconSet", this._shadowRoot).length === 0) {
          u(this._shadowRoot).append(u(Icons));
        }
      }
      _injectStyles() {
        // const global = u("<style>.__guided-tour-active{position:relative!important}</style>");
        // u(":root > head").append(global);
        const style = u(`<style>${Style}</style>`);
        u(this._shadowRoot).append(style);
        const colors = u(`<style>${colorObjToStyleVarString(this._options.style, "--tourguide")}</style>`);
        u(this._shadowRoot).append(colors);
      }
      _keyboardHandler(event) {
        if (this._options.keyboardNavigation.next && isEventAttrbutesMatched(event, this._options.keyboardNavigation.next)) {
          this.next();
        } else if (this._options.keyboardNavigation.prev && isEventAttrbutesMatched(event, this._options.keyboardNavigation.prev)) {
          this.previous();
        } else if (this._options.keyboardNavigation.first && isEventAttrbutesMatched(event, this._options.keyboardNavigation.first)) {
          this.go(0);
        } else if (this._options.keyboardNavigation.last && isEventAttrbutesMatched(event, this._options.keyboardNavigation.last)) {
          this.go(this._steps.length - 1);
        } else if (this._options.keyboardNavigation.stop && isEventAttrbutesMatched(event, this._options.keyboardNavigation.stop)) {
          this.stop();
        } else if (this._options.keyboardNavigation.complete && isEventAttrbutesMatched(event, this._options.keyboardNavigation.complete)) {
          this.complete();
        }
      }
      _decorateText(text, step) {
        let _text = text;
        this._options.contentDecorators.forEach(decorator => {
          if (decorator.test(_text)) _text = decorator.render(_text, step, this);
        });
        return _text;
      }
      init() {
        this.reset();
        // u(this._options.root).addClass("guided-tour");
        this._overlay = new Overlay(this);
        if (this._stepsSrc === StepsSource.DOM) {
          const steps = u(this._options.selector).nodes;
          this._steps = steps.map(el => new Step(el, this));
        }
        this._steps = this._steps.sort((a, b) => a.index - b.index);
        this._steps[0].first = true;
        this._steps[this.length - 1].last = true;
      }
      reset() {
        if (this._active) this.stop();
        if (this._stepsSrc === StepsSource.DOM) {
          this._steps = [];
        }
        this._current = 0;
      }
      start() {
        let step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        if (this._ready) {
          this._containerElement.style.zIndex = getMaxZIndex() + 1;
          if (this._options.restoreinitialposition) {
            this._initialposition = getScrollCoordinates(this._options.root);
          }
          if (!this._active) {
            u(this._options.root).addClass("__guided-tour-active");
            this.init();
            // console.log ( "in 'start()', before attacth is called, this._steps=", this._steps );
            this._overlay.attach(this._shadowRoot);
            this._steps.forEach(step => step.attach(this._shadowRoot));
            this._current = step;
            this.currentstep.show();
            this._active = true;
            this._options.onStart(this._options);
            if (this._options.keyboardNavigation) {
              if (Object.prototype.toString.call(this._options.keyboardNavigation) !== "[object Object]") throw new Error("keyboardNavigation option invalid. should be predefined object or false. Check documentation.");
              u(":root").on("keyup", this._keyboardHandler);
            }
          } else {
            this.go(step, "start");
          }
        } else {
          setTimeout(() => {
            this.start(step);
          }, 50);
        }
      }
      action(event, action) {
        if (this._active) {
          switch (action.action) {
            case "next":
              this.next();
              break;
            case "previous":
              this.previous();
              break;
            case "stop":
              this.stop();
              break;
            case "complete":
              this.complete();
              break;
            default:
              {
                const handler = this._options.actionHandlers.find(handler => handler.name === action.action);
                if (handler) handler.onAction(event, action, this);
              }
          }
          if (typeof this._options.onAction === "function") {
            this._options.onAction(event, action, this);
          }
        }
      }
      next() {
        if (this._active) {
          this.go(this.nextstep, "next");
        }
      }
      previous() {
        if (this._active) {
          this.go(this.previousstep, "previous");
        }
      }
      go(step, type) {
        if (this._active && this._current !== step) {
          this.currentstep.hide();
          this._options.onBeforeStep(this.currentstep, type);
          this._current = clamp$1(step, 0, this.length - 1);
          this.currentstep.show();
          this._options.onStep(this.currentstep, type);
        }
      }
      stop() {
        if (this._active) {
          this.currentstep.hide();
          this._active = false;
          this._overlay.remove();
          this._overlayElement.remove(); // PJS remove overlay div
          this._steps.forEach(step => step.remove());
          u(this._options.root).removeClass("__guided-tour-active");
          if (this._options.keyboardNavigation) {
            u(":root").off("keyup", this._keyboardHandler);
          }
          if (this._options.restoreinitialposition && this._initialposition) {
            animateScroll(this._initialposition, this._options.animationspeed);
          }
          this._options.onStop(this._options);
        }
      }
      complete() {
        if (this._active) {
          this.stop();
          this._options.onComplete();
        }
      }
      deinit() {
        if (this._ready) {
          this._containerElement.remove();
          this._containerElement = null;
          this._active = false;
          this._ready = false;
        }
      }
    }
    Tour.ActionHandler = ActionHandler;
    Tour.ContentDecorator = ContentDecorator;

    return Tour;

})();
