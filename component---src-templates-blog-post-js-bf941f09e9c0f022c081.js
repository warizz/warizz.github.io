(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h}),a.d(t,"pageQuery",function(){return E});a(74),a(32);var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(148),c=a(278),l=a(279),s=a(280),u=a(281),d=a(175),m=a(163),f=a(164),p=a(150),g={en:"English",th:"ภาษาไทย"};function h(e){var t=e.data.markdownRemark,a=e.data.site.siteMetadata.title,n=e.pageContext,A=n.previous,i=n.next,h=t.frontmatter.lang||"en",E=t.frontmatter.langs&&t.frontmatter.langs.filter(function(e){return e!==h})||[];return r.a.createElement(m.a,{location:e.location,title:a},r.a.createElement(f.a,{title:t.frontmatter.title,description:t.excerpt}),r.a.createElement("h1",{style:{color:"#B71C1C"}},t.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(p.b)(-.2),{display:"block",marginBottom:Object(p.a)(1),marginTop:Object(p.a)(-1)})},t.frontmatter.date),E.length>0&&r.a.createElement("p",null,r.a.createElement("i",null,"This article is available in ",E.map(function(e){var a=t.fields.slug;return"en"===h?a+=e+"/":a=a.match(/^\/.*?\//).pop(),r.a.createElement("a",{key:e,href:a},g[e])}),".")),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("div",{className:"share-buttons"},r.a.createElement("span",null,"Share"),r.a.createElement(c.a,{title:t.frontmatter.title,url:e.location.href},r.a.createElement(l.a,{size:30,round:!0})),r.a.createElement(s.a,{quote:t.frontmatter.title,url:e.location.href},r.a.createElement(u.a,{size:30,round:!0}))),r.a.createElement("hr",{style:{marginBottom:Object(p.a)(1)}}),r.a.createElement(d.a,null),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,A&&r.a.createElement(o.Link,{to:A.fields.slug,rel:"prev"},"← ",A.frontmatter.title)),r.a.createElement("li",null,i&&r.a.createElement(o.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))}h.propTypes={data:i.a.object.isRequired,pageContext:i.a.object.isRequired,location:i.a.object.isRequired};var E="2039719156"},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(147),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(151),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return l});var n=a(180),r=a.n(n),A=a(181),i=a.n(A);i.a.overrideThemeStyles=function(){return{a:{color:"#B71C1C"},"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var o=new r.a(i.a);var c=o.rhythm,l=o.scale},151:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},162:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(52),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},163:function(e,t,a){"use strict";a(32);var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(148),c=a(150);function l(e){var t,a=e.location,n=e.title,A=e.children;return t="/"===a.pathname?r.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0,fontSize:"3rem"})},r.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(c.a)(-1)}},r.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},t,A)}l.propTypes={location:i.a.object.isRequired,title:i.a.string.isRequired,children:i.a.node.isRequired},t.a=l},164:function(e,t,a){"use strict";var n=a(165),r=a(0),A=a.n(r),i=a(4),o=a.n(i),c=a(182),l=a.n(c),s=a(148);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title;return A.a.createElement(s.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return A.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var d="1025518380"},165:function(e){e.exports={data:{site:{siteMetadata:{title:"warizz.io",description:"All public info of a man named Warizz",author:"Warizz Yutanan"}}}}},175:function(e,t,a){"use strict";a(176);var n=a(178),r=a(0),A=a.n(r),i=a(148),o=a(179),c=a.n(o),l=a(150);var s="4007731267";t.a=function(){return A.a.createElement(i.StaticQuery,{query:s,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return A.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},A.a.createElement(c.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),A.a.createElement("p",null,"Written by ",A.a.createElement("a",{href:"https://twitter.com/"+n.twitter},a),", a software developer who try to live a happy life"))},data:n})}},178:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAXAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAGeC/GN2WQyzmTpcCP/xAAbEAEAAQUBAAAAAAAAAAAAAAACAQADBBESIv/aAAgBAQABBQK4+YOSuqahO6PcLUAHcCCq/8QAGREAAgMBAAAAAAAAAAAAAAAAAAIBEBIh/9oACAEDAQE/AYXhkSv/xAAZEQACAwEAAAAAAAAAAAAAAAAAAgEQEiH/2gAIAQIBAT8Blumh6//EABsQAAMAAgMAAAAAAAAAAAAAAAABIRAREiIx/9oACAEBAAY/Aots7JaxHSU1xZ4TH//EABwQAQADAAIDAAAAAAAAAAAAAAEAESEQMUFRcf/aAAgBAQABPyF9BuiAr8jxBmhA+o6qqrYxA4jYZhFcf//aAAwDAQACAAMAAAAQDxC9/8QAFxEAAwEAAAAAAAAAAAAAAAAAABARMf/aAAgBAwEBPxCtFG1//8QAFxEAAwEAAAAAAAAAAAAAAAAAABARMf/aAAgBAgEBPxCMEmF//8QAHBABAQACAwEBAAAAAAAAAAAAAREAITFBYVHB/9oACAEBAAE/EA9yg94cqGPBxUuASu1iF8fzGpUFaq/UOMlwA5u/dDlBELvKXeK91x05/9k=",width:50,height:50,src:"/static/fb28299a55eb0de5fb55783dfd0c47ed/d2d31/profile-pic.jpg",srcSet:"/static/fb28299a55eb0de5fb55783dfd0c47ed/d2d31/profile-pic.jpg 1x,\n/static/fb28299a55eb0de5fb55783dfd0c47ed/0b804/profile-pic.jpg 1.5x,\n/static/fb28299a55eb0de5fb55783dfd0c47ed/753c3/profile-pic.jpg 2x,\n/static/fb28299a55eb0de5fb55783dfd0c47ed/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Warizz Yutanan",social:{twitter:"warizz"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-bf941f09e9c0f022c081.js.map