(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(t,e,n){"use strict";n.r(e);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(151),s=n(152),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return o.a.createElement(c.a,{location:this.props.location},o.a.createElement(s.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(o.a.Component);e.default=u},147:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(146),s=n.n(c);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var u=n(149),l=n.n(u);n.d(e,"PageRenderer",function(){return l.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u});var a=n(161),r=n.n(a),i=n(162),o=n.n(i);o.a.overrideThemeStyles=function(){return{a:{color:"#B71C1C"},"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var s=c.rhythm,u=c.scale},149:function(t,e,n){var a;t.exports=(a=n(150))&&a.default||a},150:function(t,e,n){"use strict";n.r(e);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(52),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},151:function(t,e,n){"use strict";n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(147),s=n(148);function u(t){var e,n=t.location,a=t.title,i=t.children;return e="/warizz.io/"===n.pathname?r.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0,fontSize:"3rem"})},r.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(s.a)(-1)}},r.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},e,i)}u.propTypes={location:o.a.object.isRequired,title:o.a.string.isRequired,children:o.a.node.isRequired},e.a=u},152:function(t,e,n){"use strict";var a=n(153),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(163),u=n.n(s),l=n(147);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="1025518380"},153:function(t){t.exports={data:{site:{siteMetadata:{title:"warizz.io",description:"All public info of a man named Warizz",author:"Warizz Yutanan"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-5e58ef9539936d8513fc.js.map