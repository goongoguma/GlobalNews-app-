(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},39:function(e,t,a){e.exports=a(73)},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),s=a.n(c),i=a(77),l=a(76),o=a(75),u=a(35),m=a.n(u)()(),d=(a(13),a(74)),p=function(){return r.a.createElement("div",{className:"ui secondary pointing menu mainMenu"},r.a.createElement(d.a,{to:"/",className:"ui button primary"},"Main"))},h=a(6),w=a(7),E=a(9),v=a(8),N=a(10),f=a(4),y=a(16),b=a.n(y),O=a(24),j=a(21),C=a.n(j).a.create({baseURL:"https://newsapi.org/v2"}),k=function(e){return function(){var t=Object(O.a)(b.a.mark(function t(a){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.get("/top-headlines?country=".concat(e,"&apiKey=8860cc5a37614d068811ab16e6c57978"));case 2:n=t.sent,a({type:"NEWS_HEADLINES",payload:n.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(O.a)(b.a.mark(function t(a){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.get("/everything?q=".concat(e,"&apiKey=8860cc5a37614d068811ab16e6c57978"));case 2:n=t.sent,a({type:"SEARCHED_NEWS",payload:n.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},L=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={term:""},a.newsSearchSubmit=function(e){e.preventDefault(),a.props.searchedNews(a.state.term)},a.newsSearchResult=function(){return r.a.createElement("div",null,"hello")},a}return Object(N.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this,t=this.props.searchResult;return r.a.createElement("div",{className:"HandleSearch"},r.a.createElement("form",{onSubmit:this.newsSearchSubmit},r.a.createElement("div",{className:"ui input"},r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})},placeholder:"ex. apple"})),r.a.createElement("button",{className:"searchButton"},"Search")),r.a.createElement("div",{className:"searchResult"},t?t.articles.map(function(t,a){return r.a.createElement("div",{className:"newsTitleList",key:t.title},r.a.createElement("h2",{className:"ui header"},r.a.createElement("span",{className:"newsListOrder"},"".concat(a+1,".")," ",r.a.createElement("span",null," ")),r.a.createElement(d.a,{to:{pathname:"/news/".concat(t.title),state:{keyword:e.state.term}},className:"header newsList"},t.title)))}):null))}}]),t}(r.a.Component),S=Object(f.b)(function(e){return{searchResult:e.searchedNews.newsList}},{searchedNews:g})(L),H=function(e){function t(){return Object(h.a)(this,t),Object(E.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(w.a)(t,[{key:"newsSection",value:function(){return r.a.createElement("div",{className:"countryWrapper"},r.a.createElement("h1",{className:"mainTitle"},"Todays's World Top 20 Headlines"),r.a.createElement("div",{className:"ui three item menu"},r.a.createElement(d.a,{to:"/news/us",className:"item"},"US"),r.a.createElement(d.a,{to:"/news/kr",className:"item"},"KOREA"),r.a.createElement(d.a,{to:"/news/jp",className:"item"},"JAPAN")),r.a.createElement(S,null))}},{key:"render",value:function(){return r.a.createElement("div",null,this.newsSection())}}]),t}(r.a.Component),T=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={countryCode:"us"},a.HandleContent=function(){return a.props.news?a.props.news.articles.map(function(e,t){return r.a.createElement("div",{className:"newsTitleList",key:e.title},r.a.createElement("h2",{className:"ui header"},r.a.createElement("span",{className:"newsListOrder"},"".concat(t+1,".")," ",r.a.createElement("span",null," ")),r.a.createElement(d.a,{to:{pathname:"/news/".concat(e.title),state:{countryCode:a.state.countryCode}},className:"header newsList"},e.title)))}):r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui active dimmer"},r.a.createElement("div",{className:"ui active inverted dimmer"},"Loading...")))},a}return Object(N.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){this.props.countryNews(this.state.countryCode)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"sectionTitle"},"US Top 20 Headlines"),this.HandleContent())}}]),t}(r.a.Component),D=Object(f.b)(function(e){return{news:e.news.newsList}},{countryNews:k})(T),A=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={countryCode:"kr"},a.HandleContent=function(){return a.props.news?a.props.news.articles.map(function(e,t){return r.a.createElement("div",{className:"newsTitleList",key:e.title},r.a.createElement("h2",{className:"ui header"},r.a.createElement("span",{className:"newsListOrder"},"".concat(t+1,".")," ",r.a.createElement("span",null," ")),r.a.createElement(d.a,{to:{pathname:"/news/".concat(e.title),state:{countryCode:a.state.countryCode}},className:"header newsList"},e.title)))}):r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui active dimmer"},r.a.createElement("div",{className:"ui active inverted dimmer"},"Loading...")))},a}return Object(N.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){this.props.countryNews(this.state.countryCode)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"sectionTitle"},"Korea Top 20 Headlines"),this.HandleContent())}}]),t}(r.a.Component),R=Object(f.b)(function(e){return{news:e.news.newsList}},{countryNews:k})(A),_=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={countryCode:"jp"},a.HandleContent=function(){return a.props.news?a.props.news.articles.map(function(e,t){return r.a.createElement("div",{className:"newsTitleList",key:e.title},r.a.createElement("h2",{className:"ui header"},r.a.createElement("span",{className:"newsListOrder"},"".concat(t+1,".")," ",r.a.createElement("span",null," ")),r.a.createElement(d.a,{to:{pathname:"/news/".concat(e.title),state:{countryCode:a.state.countryCode}},className:"header newsList"},e.title)))}):r.a.createElement("div",{className:"ui segment"},r.a.createElement("div",{className:"ui active dimmer"},r.a.createElement("div",{className:"ui active inverted dimmer"},"Loading...")))},a}return Object(N.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){this.props.countryNews(this.state.countryCode)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"sectionTitle"},"Japan Top 20 Headlines"),this.HandleContent())}}]),t}(r.a.Component),x=Object(f.b)(function(e){return{news:e.news.newsList}},{countryNews:k})(_),M=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).HandleFormat=function(e){return r.a.createElement("div",{className:"newsDetailPage"},r.a.createElement("h1",{className:"ui header"},e.title),r.a.createElement("img",{src:e.urlToImage?e.urlToImage:"No Image",alt:"news images"}),r.a.createElement("div",{className:"ui card"},r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"Author : ",e.author?e.author:"No author"))),r.a.createElement("div",{className:"ui card"},r.a.createElement("div",{className:"right floated content"},r.a.createElement("div",null,"Published At : ",e.publishedAt))),r.a.createElement("div",{className:"newsDesc"},e.description),r.a.createElement("button",{className:"ui button backtoList",onClick:a.BackTotheList},"Back to the List"),r.a.createElement("button",{onClick:function(){return a.newPageOpen(e)},className:"ui button"},"News Detail"))},a.BackTotheList=function(){a.props.newsDetail?m.push("/news/".concat(a.props.location.state.countryCode)):m.push("/")},a.HandleContent=function(){var e=a.props,t=e.newsDetail,n=e.searchResult;return t?t.articles.map(function(e){return e.title===a.props.match.params.id?r.a.createElement("div",{key:e.title},r.a.createElement("div",null,a.HandleFormat(e)," ")):null}):n?n.articles.map(function(e){return e.title===a.props.match.params.id?r.a.createElement("div",{key:e.title},r.a.createElement("div",null,a.HandleFormat(e)," ")):null}):void 0},a}return Object(N.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.state,t=e.countryCode,a=e.keyword,n=this.props,r=n.countryNews,c=n.searchedNews;t?r(t):c(a)}},{key:"newPageOpen",value:function(e){return window.open("".concat(e.url))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.HandleContent()))}}]),t}(r.a.Component),I=Object(f.b)(function(e){return{newsDetail:e.news.newsList,searchResult:e.searchedNews.newsList}},{countryNews:k,searchedNews:g})(M),P=function(){return r.a.createElement(i.a,{history:m},r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(l.a,null,r.a.createElement(o.a,{path:"/",exact:!0,component:H}),r.a.createElement(o.a,{path:"/news/jp",component:x}),r.a.createElement(o.a,{path:"/news/kr",component:R}),r.a.createElement(o.a,{path:"/news/us",component:D}),r.a.createElement(o.a,{path:"/news/:id",component:I}))))},W=a(12),B=Object(W.c)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEWS_HEADLINES":return{newsList:t.payload};default:return e}},searchedNews:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCHED_NEWS":return{newsList:t.payload};default:return e}}}),J=a(38),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.d,U=Object(W.e)(B,K(Object(W.a)(J.a)));s.a.render(r.a.createElement(f.a,{store:U},r.a.createElement(P,null)),document.querySelector("#root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6edca94e.chunk.js.map