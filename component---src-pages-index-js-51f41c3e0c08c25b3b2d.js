(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var r=a(0),i=a.n(r),n=a(4),o=a.n(n),s=a(148),l=a(175),d=a(163),c=a(164),u=a(150),A="en";function f(e){var t=e.data,a=t.site.siteMetadata.title,r=t.allMarkdownRemark.edges;return i.a.createElement(d.a,{location:e.location,title:a},i.a.createElement(c.a,{title:"All posts",keywords:["blog","javascript","react","life"]}),i.a.createElement(l.a,null),r.filter(function(e){var t=e.node;return!t.frontmatter.lang||t.frontmatter.lang===A}).map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},i.a.createElement(s.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.tldr}}))}))}f.propTypes={data:o.a.object.isRequired,location:o.a.object.isRequired},t.default=f;var p="4122674579"},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return A}),a.d(t,"StaticQuery",function(){return f});var r=a(0),i=a.n(r),n=a(4),o=a.n(n),s=a(147),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(151),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var A=i.a.createContext({}),f=function(e){return i.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(180),i=a.n(r),n=a(181),o=a.n(n);o.a.overrideThemeStyles=function(){return{a:{color:"#B71C1C"},"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new i.a(o.a);var l=s.rhythm,d=s.scale},151:function(e,t,a){var r;e.exports=(r=a(162))&&r.default||r},162:function(e,t,a){"use strict";a.r(t);a(32);var r=a(0),i=a.n(r),n=a(4),o=a.n(n),s=a(52),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},163:function(e,t,a){"use strict";a(32);var r=a(0),i=a.n(r),n=a(4),o=a.n(n),s=a(148),l=a(150);function d(e){var t,a=e.location,r=e.title,n=e.children;return t="/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0,fontSize:"3rem"})},i.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(-1)}},i.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},t,n)}d.propTypes={location:o.a.object.isRequired,title:o.a.string.isRequired,children:o.a.node.isRequired},t.a=d},164:function(e,t,a){"use strict";var r=a(165),i=a(0),n=a.n(i),o=a(4),s=a.n(o),l=a(182),d=a.n(l),c=a(148);function u(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,s=e.title;return n.a.createElement(c.StaticQuery,{query:A,render:function(e){var r=t||e.site.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)},n.a.createElement("script",{"data-ad-client":"ca-pub-6883430075022841",async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}))},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var A="1025518380"},165:function(e){e.exports={data:{site:{siteMetadata:{title:"warizz.io",description:"All public info of a man named Warizz",author:"Warizz Yutanan"}}}}},175:function(e,t,a){"use strict";a(176);var r=a(178),i=a(0),n=a.n(i),o=a(148),s=a(179),l=a.n(s),d=a(150);var c="4007731267";t.a=function(){return n.a.createElement(o.StaticQuery,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("a",{href:"https://twitter.com/"+r.twitter},a),", a software developer who try to live a happy life"))},data:r})}},176:function(e,t,a){"use strict";a(177)("fixed",function(e){return function(){return e(this,"tt","","")}})},177:function(e,t,a){var r=a(11),i=a(24),n=a(16),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},178:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAXAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAGeC/GN2WQyzmTpcCP/xAAbEAEAAQUBAAAAAAAAAAAAAAACAQADBBESIv/aAAgBAQABBQK4+YOSuqahO6PcLUAHcCCq/8QAGREAAgMBAAAAAAAAAAAAAAAAAAIBEBIh/9oACAEDAQE/AYXhkSv/xAAZEQACAwEAAAAAAAAAAAAAAAAAAgEQEiH/2gAIAQIBAT8Blumh6//EABsQAAMAAgMAAAAAAAAAAAAAAAABIRAREiIx/9oACAEBAAY/Aots7JaxHSU1xZ4TH//EABwQAQADAAIDAAAAAAAAAAAAAAEAESEQMUFRcf/aAAgBAQABPyF9BuiAr8jxBmhA+o6qqrYxA4jYZhFcf//aAAwDAQACAAMAAAAQDxC9/8QAFxEAAwEAAAAAAAAAAAAAAAAAABARMf/aAAgBAwEBPxCtFG1//8QAFxEAAwEAAAAAAAAAAAAAAAAAABARMf/aAAgBAgEBPxCMEmF//8QAHBABAQACAwEBAAAAAAAAAAAAAREAITFBYVHB/9oACAEBAAE/EA9yg94cqGPBxUuASu1iF8fzGpUFaq/UOMlwA5u/dDlBELvKXeK91x05/9k=",width:50,height:50,src:"/static/fb28299a55eb0de5fb55783dfd0c47ed/d2d31/profile-pic.jpg",srcSet:"/static/fb28299a55eb0de5fb55783dfd0c47ed/d2d31/profile-pic.jpg 1x,\n/static/fb28299a55eb0de5fb55783dfd0c47ed/0b804/profile-pic.jpg 1.5x,\n/static/fb28299a55eb0de5fb55783dfd0c47ed/753c3/profile-pic.jpg 2x,\n/static/fb28299a55eb0de5fb55783dfd0c47ed/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Warizz Yutanan",social:{twitter:"warizz"}}}}}},179:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),o=r(a(51)),s=r(a(173)),l=r(a(174)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+s+l+t+o+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,s=f(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.Tag,E="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,A),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),S={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var j=p;return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&d.default.createElement(m,(0,l.default)({src:j.base64},S)),j.tracedSVG&&d.default.createElement(m,(0,l.default)({src:j.tracedSVG},S)),E&&d.default.createElement(b,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),d.default.createElement(m,{alt:a,title:t,src:j.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},j))}}))}if(h){var B=h,x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},n);return"inherit"===n.display&&delete x.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},B.base64&&d.default.createElement(m,(0,l.default)({src:B.base64},S)),B.tracedSVG&&d.default.createElement(m,(0,l.default)({src:B.tracedSVG},S)),E&&d.default.createElement(b,{title:t,style:{backgroundColor:E,width:B.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:B.height}}),this.state.isVisible&&d.default.createElement("picture",null,B.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),d.default.createElement("source",{srcSet:B.srcSet,sizes:B.sizes}),d.default.createElement(m,{alt:a,title:t,width:B.width,height:B.height,src:B.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:B.width,height:B.height},B))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var w=y;t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-js-51f41c3e0c08c25b3b2d.js.map