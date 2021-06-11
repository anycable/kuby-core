(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(92)),c={id:"after-the-deploy",title:"After the Deploy",sidebar_label:"After the Deploy",slug:"/after-the-deploy"},l={unversionedId:"after-the-deploy",id:"after-the-deploy",isDocsHomePage:!1,title:"After the Deploy",description:"Great, you've deployed your app! Now what?",source:"@site/docs/after_the_deploy.md",slug:"/after-the-deploy",permalink:"/docs/after-the-deploy",editUrl:"https://github.com/getkuby/kuby-core/edit/master/docs/docs/after_the_deploy.md",version:"current",sidebar_label:"After the Deploy",sidebar:"sidebar",previous:{title:"Quick Start Guide",permalink:"/docs/"},next:{title:"Developing with Kuby",permalink:"/docs/development"}},u=[{value:"Other Useful Commands",id:"other-useful-commands",children:[]}],b={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Great, you've deployed your app! Now what?"),Object(o.b)("p",null,"First of all, you can always ask Kuby what's possible by running"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"bundle exec kuby --help\n")),Object(o.b)("p",null,"Check the status of your deployment by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"bundle exec kuby -e production remote status\n")),Object(o.b)("p",null,"The obvious way to see if your app is working or not is to try to access it over the Internet. If the deploy succeeded (and ",Object(o.b)("inlineCode",{parentName:"p"},"kuby remote status")," indicates everything's up and running) but your app is erroring out, chances are something is misconfigured. A good place to look when diagnosing issues is your Rails server log. Run the following command to see a live log tail:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"bundle exec kuby -e production remote logs\n")),Object(o.b)("p",null,"Establish a shell session by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"bundle exec kuby -e production remote shell\n")),Object(o.b)("p",null,"Establish a Rails console session by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"bundle exec kuby -e production remote console\n")),Object(o.b)("p",null,"Establish a database console session by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"bundle exec kuby -e production remote dbconsole\n")),Object(o.b)("h3",{id:"other-useful-commands"},"Other Useful Commands"),Object(o.b)("p",null,"Print out the Dockerfile:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"bundle exec kuby -e production dockerfile\n")),Object(o.b)("p",null,"Print out all your Kubernetes configs:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"bundle exec kuby -e production resources\n")),Object(o.b)("p",null,"Run an arbitrary kubectl command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"bundle exec kuby -e production kubectl -- [cmd]\n")))}s.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),i=s(n),d=r,y=i["".concat(c,".").concat(d)]||i[d]||p[d]||o;return n?a.a.createElement(y,l(l({ref:t},b),{},{components:n})):a.a.createElement(y,l({ref:t},b))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);