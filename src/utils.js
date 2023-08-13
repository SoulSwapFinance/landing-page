import URL from 'url-parse'

export const animationText = () => {
  const fn_animated_text = document.querySelectorAll(".fn_animated_text");
  fn_animated_text.forEach((text) => {
    let letters = text.innerHTML.split(""),
      time = text.getAttribute("wait"),
      speed = text.getAttribute("speed");
    if (!time) {
      time = 0;
    }
    if (!speed) {
      speed = 4;
    }
    speed = speed / 100;
    text.innerHTML = "<em>321...</em>";
    text.classList.add("ready");
    if (typeof window !== "undefined") {
      require("waypoints/lib/noframework.waypoints.min.js");
      var waypoint = new Waypoint({
        element: text,
        handler: function () {
          if (!text.classList.contains("stop")) {
            text.classList.add("stop");
            setTimeout(() => {
              text.innerHTML = "";
              letters.forEach((i, e) => {
                var span = document.createElement("span");
                span.textContent = i;
                span.style.animationDelay = e * speed + "s";
                text.append(span);
              });
            }, time);
          }
        },

        offset: "90%",
      });
    }
  });
};

export const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".soul_fn_header");
  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];
    if (sticky) {
      if (offset > 10) {
        sticky.classList.add("fixer");
      } else {
        sticky.classList.remove("fixer");
      }
    }
  }
};

// Data image
export const dataBgImg = () => {
  let d = document.querySelectorAll("[data-bg-img]");
  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    element.style.backgroundImage = `url(${element.getAttribute(
      "data-bg-img"
    )})`;
  }
};

export const imgToSVG = () => {
  document.querySelectorAll("img.fn__svg").forEach((el) => {
    const imgID = el.getAttribute("id");
    const imgClass = el.getAttribute("class");
    const imgURL = el.getAttribute("src");

    fetch(imgURL)
      .then((data) => data.text())
      .then((response) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response, "text/html");
        let svg = xmlDoc.querySelector("svg");

        if (typeof imgID !== "undefined") {
          svg?.setAttribute("id", imgID);
        }

        if (typeof imgClass !== "undefined") {
          svg?.setAttribute("class", imgClass + " replaced-svg");
        }

        svg?.removeAttribute("xmlns:a");

        svg && el.parentNode && el.parentNode?.replaceChild(svg, el); 
      });
  });
};

export const progressTotop = () => {
  var winScroll = window.pageYOffset;
  var height = document.body.clientHeight;
  var scrolled = parseInt((winScroll / (height - window.innerHeight)) * 300);
  var totop = document.querySelector(".soul_fn_totop");
  if (winScroll > 0) {
    totop.classList.add("active");
  } else {
    totop.classList.remove("active");
  }
  let strockSolid = totop.querySelector(".stroke-solid");
  if (strockSolid) {
    strockSolid.style.strokeDashoffset = 300 - scrolled;
  }
  // totop.querySelector(".stroke-solid").css("stroke-dashoffset", 300 - scrolled);
};

// paggination
export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

/**
 * Returns a sanitized url, which could be a search engine url if
 * a keyword is detected instead of a url
 *
 * @param {string} input - String corresponding to url input
 * @param {string} searchEngine - Protocol string to append to URLs that have none
 * @param {string} defaultProtocol - Protocol string to append to URLs that have none
 * @returns {string} - String corresponding to sanitized input depending if it's a search or url
 */
export default function onUrlSubmit(input, searchEngine = 'Google', defaultProtocol = 'https://') {
	//Check if it's a url or a keyword
	const res = input.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!&',;=.+]+$/g);
	if (res === null) {
		// In case of keywords we default to google search
		let searchUrl = 'https://www.google.com/search?q=' + escape(input);
		if (searchEngine === 'Google') {
			searchUrl = 'https://google.com/?q=' + escape(input);
		}
		return searchUrl;
	}
	const hasProtocol = input.match(/^[a-z]*:\/\//);
	const sanitizedURL = hasProtocol ? input : `${defaultProtocol}${input}`;
	return sanitizedURL;
}

export function getHost(url) {
	const urlObj = new URL(url);
	const { hostname } = urlObj;
	return hostname;
}

// ANALYTICS //
/* eslint-disable no-undef */
// export function trackEvent(action, data){
//   if(mixpanel && window.__mmMetametrics && mixpanel.track){
//       const category = action.category
//       delete action.category
//       mixpanel.track(
//           category,
//           {...action, ...data},
//       );
//   }
// }

// const generateOpt = (category, action, name) => ({ category, action, name });

// const NAMES = {
//   DAPP: 'Dapp',
//   FEATURED_DAPP: 'Featured',
// DAPP_CATEGORY: 'Category',
//   HOMEPAGE_TAB: 'Homepage',
// };

// const ACTIONS = {
// CLICK: 'Click',
// IMPRESSION: 'Impression',
// };

// const CATEGORIES = {
// BROWSER_HOME: 'Browser Home',
// };

// export const ANALYTICS_EVENT_OPTS = {
// CLICKS_DAPP: generateOpt(
//   CATEGORIES.BROWSER_HOME,
//   ACTIONS.CLICK,
//   NAMES.DAPP
//   ),
//   CLICKS_FEATURED_DAPP: generateOpt(
//   CATEGORIES.BROWSER_HOME,
//   ACTIONS.CLICK,
//   NAMES.FEATURED_DAPP
// ),
// CLICKS_DAPP_CATEGORY: generateOpt(
//   CATEGORIES.BROWSER_HOME,
//   ACTIONS.CLICK,
//   NAMES.DAPP_CATEGORY
// ),
// CLICKS_HOMEPAGE_TAB: generateOpt(
//   CATEGORIES.BROWSER_HOME,
//   ACTIONS.CLICK,
//   NAMES.HOMEPAGE_TAB
//   ),
//   IMPRESSION: generateOpt(
//   CATEGORIES.BROWSER_HOME,
//   ACTIONS.IMPRESSION,
// ),
// };

// // export default {trackEvent,ANALYTICS_EVENT_OPTS }
