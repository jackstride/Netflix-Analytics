(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/NetflixShows.f7ee365f.csv"},12:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/StockData.1d50c525.csv"},23:function(e,t,a){e.exports=a.p+"static/media/netflix.7ece1bc1.png"},24:function(e,t,a){e.exports=a.p+"static/media/StreamingCompetition.d269c914.csv"},25:function(e,t,a){e.exports=a.p+"static/media/WorldwideSubscriptions.5eba1105.csv"},26:function(e,t,a){e.exports=a.p+"static/media/arrow-up-solid.5f95ff2c.svg"},27:function(e,t,a){e.exports=a.p+"static/media/hoc3.14d8e46f.png"},28:function(e,t,a){e.exports=a(51)},33:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),i=a.n(l),s=(a(12),a(33),a(4)),c=a(5),o=a(7),u=a(6),d=a(8),m=a(22),f=a.n(m),p=(a(9),a(3)),h=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).chart=function(){var e=20,t=20,n=30,r=50,l=document.querySelector("#stockData").offsetWidth-r-t,i=document.querySelector("#stockData").offsetHeight-e-n,s=p.timeParse("%d/%m/%Y"),c=p.scaleTime().range([0,l]),o=p.scaleLinear().range([i,0]),u=p.line().x((function(e){return c(e.date)})).y((function(e){return o(e.Close)})),d=p.select("#stockData").append("svg").attr("width",l+r+t).attr("height",i+e+n).append("g").attr("transform","translate(100,20)"),m=p.select("body").append("div").attr("class","stock_tooltip").style("visibility","hidden"),f=p.select(".stock_tooltip").append("svg").attr("dominant-baseline","middle").attr("width","100%");a.state.data.forEach((function(e){e.date=s(e.date),e.Close=+e.Close})),c.domain(p.extent(a.state.data,(function(e){return e.date}))),o.domain([0,p.max(a.state.data,(function(e){return e.Close}))]);var h=d.append("path").attr("class","line").attr("d",u(a.state.data)),g=function(e){p.selectAll("#stockData circle").remove();d.selectAll("dot").data(e).enter().append("circle").attr("r",5).attr("cx",(function(e){return c(e.date)})).attr("cy",(function(e){return o(e.Close)})).style("cursor","pointer").style("fill","transparent").on("mouseover",(function(e,t,a){f.select(".bubbleTitle").remove(),f.select(".bubblesub").remove(),f.select(".open").remove(),f.select(".close").remove(),f.select(".high").remove(),f.select(".low").remove();var n=p.timeFormat("%B %d, %Y");p.select(a[t]).style("fill","red"),m.style("visibility","visible").style("left",(function(){return p.event.pageX+"px"})).style("top",(function(){return p.event.pageY+"px"})),f.append("text").attr("x","20").attr("dy","20").attr("class","bubbleTitle").text(n(e.date)).style("fill","white"),f.append("text").attr("class","open").attr("x","20").attr("y","40"),f.select(".open").append("tspan").attr("class","tooltip_header").text("Open: "),f.select(".open").append("tspan").text(e.Open),f.append("text").attr("class","close").attr("x","20").attr("y","60"),f.select(".close").append("tspan").attr("class","tooltip_header").text("Close: "),f.select(".close").append("tspan").text(e.Close),f.append("text").attr("class","high").attr("x","20").attr("y","80"),f.select(".high").append("tspan").attr("class","tooltip_header").text("High: "),f.select(".high").append("tspan").text(e.High),f.append("text").attr("class","low").attr("x","20").attr("y","100"),f.select(".low").append("tspan").attr("class","tooltip_header").text("Low: "),f.select(".low").append("tspan").text(e.Low)})).on("mouseleave",(function(e,t,a){p.select(a[t]).style("fill","transparent"),m.style("visibility","hidden")}))};g(a.state.data),d.append("g").attr("class","x-axis").attr("transform","translate(0,"+i+")").call(p.axisBottom(c)),d.append("g").attr("class","y-axis").call(p.axisLeft(o));var v=function(e){c.domain(p.extent(e,(function(e){return e.date}))),o.domain([0,p.max(e,(function(e){return e.Close}))]),d.select(".x-axis").transition(750).call(p.axisBottom(c)),d.select(".y-axis").transition(750).call(p.axisLeft(o)),h.attr("d",u(e))};p.select(".stock_toggles>select").on("change",(function(e,t,n){!function(e){if("0"==e)v(a.state.data),g(a.state.data);else{var t=new Date("01/01/"+e),n=new Date("12/31/"+e),r=a.state.data.filter((function(e){return new Date(e.date)>=t&&new Date(e.date)<=n}));v(r),g(r)}}(n[t].value)})),p.select(window).on("resize",(function(){l=document.querySelector("#stockData").offsetWidth-r-t,i=document.querySelector("#stockData").offsetHeight-e-n,p.select("#stockData svg").attr("width",l+r+t).attr("height",i+e+n)}))},a.state={data:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.csv(f.a).then((function(t){e.setState({data:t}),e.chart()}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container col-1"},r.a.createElement("div",{className:"stock_toggles"},r.a.createElement("select",{defaultValue:"0"},r.a.createElement("option",{value:"0"},"All"),r.a.createElement("option",{value:"2016"},"2016"),r.a.createElement("option",{value:"2017"},"2017"),r.a.createElement("option",{value:"2018"},"2018"),r.a.createElement("option",{value:"2019"},"2019"))),r.a.createElement("div",{id:"stockData"}))}}]),t}(n.Component),g=a(2),v=a(23),b=a.n(v);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var E=r.a.createElement("title",null,"Shape"),w=r.a.createElement("desc",null,"Created with Sketch."),O=r.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Desktop-HD",transform:"translate(-1305.000000, -61.000000)",fill:"#FF0055",fillRule:"nonzero"},r.a.createElement("g",{id:"Group",transform:"translate(1290.000000, 61.000000)"},r.a.createElement("path",{d:"M32.2765957,14.6808511 L33.4680851,14.6808511 C33.8085106,14.6808511 34.1489362,14.3138298 34.1489362,13.9468085 L34.1489362,0.734042553 C34.1489362,0.367021277 33.8085106,-1.20792265e-13 33.4680851,-1.20792265e-13 L32.2765957,-1.20792265e-13 C31.9361702,-1.20792265e-13 31.5957447,0.367021277 31.5957447,0.734042553 L31.5957447,13.9468085 C31.5957447,14.3138298 31.9361702,14.6808511 32.2765957,14.6808511 Z M21.4255319,14.6808511 L22.6170213,14.6808511 C22.9574468,14.6808511 23.2978723,14.3161094 23.2978723,13.9513678 L23.2978723,2.6443769 C23.2978723,2.27963526 22.9574468,1.91489362 22.6170213,1.91489362 L21.4255319,1.91489362 C21.0851064,1.91489362 20.7446809,2.27963526 20.7446809,2.6443769 L20.7446809,13.9513678 C20.7446809,14.3161094 21.0851064,14.6808511 21.4255319,14.6808511 L21.4255319,14.6808511 Z M27.1702128,14.6808511 L28.3617021,14.6808511 C28.7021277,14.6808511 29.0425532,14.2978723 29.0425532,13.9148936 L29.0425532,5.87234043 C29.0425532,5.4893617 28.7021277,5.10638298 28.3617021,5.10638298 L27.1702128,5.10638298 C26.8297872,5.10638298 26.4893617,5.4893617 26.4893617,5.87234043 L26.4893617,13.9148936 C26.4893617,14.2978723 26.8297872,14.6808511 27.1702128,14.6808511 L27.1702128,14.6808511 Z M15.6808511,14.6808511 L16.8723404,14.6808511 C17.212766,14.6808511 17.5531915,14.2978723 17.5531915,13.9148936 L17.5531915,9.70212766 C17.5531915,9.31914894 17.212766,8.93617021 16.8723404,8.93617021 L15.6808511,8.93617021 C15.3404255,8.93617021 15,9.31914894 15,9.70212766 L15,13.9148936 C15,14.2978723 15.3404255,14.6808511 15.6808511,14.6808511 L15.6808511,14.6808511 Z",id:"Shape"})))),j=function(e){var t=e.svgRef,a=e.title,n=x(e,["svgRef","title"]);return r.a.createElement("svg",y({width:"30px",height:"20px",viewBox:"0 0 20 15",ref:t},n),void 0===a?E:a?r.a.createElement("title",null,a):null,w,O)};r.a.forwardRef((function(e,t){return r.a.createElement(j,y({svgRef:t},e))})),a.p;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var N=r.a.createElement("path",{fill:"currentColor",d:"M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"}),_=function(e){var t=e.svgRef,a=e.title,n=D(e,["svgRef","title"]);return r.a.createElement("svg",k({width:"30px",height:"20px",color:"#FF0055","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info",className:"svg-inline--fa fa-info fa-w-6",role:"img",viewBox:"0 0 192 512",ref:t},n),a?r.a.createElement("title",null,a):null,N)},C=r.a.forwardRef((function(e,t){return r.a.createElement(_,k({svgRef:t},e))})),S=(a.p,function(){var e=Object(n.useRef)(),t=Object(n.useState)(!1),a=Object(g.a)(t,2),l=a[0],i=a[1];return Object(n.useEffect)((function(){console.log(e)})),r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:b.a,alt:"Netflix"}),r.a.createElement("div",{className:"information"},r.a.createElement("div",{onClick:function(){i(!l)},className:"analytics info"},r.a.createElement(C,null),r.a.createElement("span",{className:"span_analytics"},"Analytics"))),l?r.a.createElement(L,{ref:e,close:function(){i(!l)}}):null)}),L=Object(n.forwardRef)((function(e,t){var a=e.close;return Object(n.useEffect)((function(){var e=function(e){t.current.contains(e.target)||a()};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}})),r.a.createElement("div",{className:"information_panel"},r.a.createElement("div",{className:"information_container"},r.a.createElement("div",{onClick:a,className:"close"},"X"),r.a.createElement("div",{ref:t,className:"content"},r.a.createElement("h1",null,"An Overview.."),r.a.createElement("p",null,"Since being founed in 1997, Netflix has grown to become one of the largest streaming services accessible in over 190 counties. This dashboard aims to explore the growth over a range of years and if original content, the genre of content or the length time are factors to its growth.",r.a.createElement("br",null),"Subscription numbers and stock price information are closley linked with release dates of Netflix favourites but offer unusual insgihts. See if you can spot any!"," ",r.a.createElement("br",null),"The following statistics has been collected using the following websites:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Netflix"},"Wikipedia - Netflix")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Streaming_services"},"Wikipedia - Streaming Services")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://data.world/mattschroyer/netflix-original-series/workspace/file?filename=Netflix_Original_Series_2013_2017.xlsx"},"Data word")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.kaggle.com/jainshukal/netflix-stock-price"},"Stock Data - Kaggle"))))))})),M=a(24),B=a.n(M),R=(a(9),a(3)),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).chart=function(){var e=document.getElementById("bubbleChart").offsetHeight,t=R.pack(a.state.data).size([e,e]).padding(20),n=R.select("#bubbleChart").append("svg").attr("width",e).attr("height",e).attr("class","bubble"),r=R.hierarchy(a.state.data).sum((function(e){return e.subscribers})),l=n.selectAll(".node").data(t(r).descendants()).enter().filter((function(e){return!e.children})).append("g").attr("class","node").attr("transform",(function(e){return"translate("+e.x+","+e.y+")"})).attr("cursor","pointer");l.append("title").text((function(e){return e.data.subscribers}));var i=R.select("body").append("div").attr("class","tooltip").style("visibility","hidden"),s=R.select(".tooltip").append("svg").attr("dominant-baseline","middle").attr("width","100%");l.append("circle").attr("r",(function(e){return e.r})).style("stroke","#FF0055").style("fill","transparent").on("mousemove",(function(e,t,a){i.style("visibility","visible").style("left",(function(){return R.event.pageX+"px"})).style("top",(function(){return R.event.pageY+"px"})),s.select(".bubbleTitle").remove(),s.select(".bubblesub").remove(),s.select("text").remove(),s.select(".subs").remove(),s.select(".area").remove(),s.append("text").attr("x","20").attr("dy","20").attr("class","bubbleTitle").text(e.data.service),s.append("text").attr("x","20").attr("dy","35").attr("class","bubblesub").text(e.data.parent),s.append("text").attr("class","startDate").attr("x","20").attr("y","60"),s.select(".startDate").append("tspan").attr("class","tooltip_header").text("Launch Date: "),s.select(".startDate").append("tspan").text(e.data.launchDate),s.append("text").attr("class","subs").attr("x","20").attr("y","80"),s.select(".subs").append("tspan").attr("class","tooltip_header").text("Subscribers(Million): "),s.select(".subs").append("tspan").text(e.data.subscribers),s.append("text").attr("class","area").attr("x","20").attr("y","100"),s.select(".area").append("tspan").attr("class","tooltip_header").text("Area Coverage: "),s.select(".area").append("tspan").text(e.data.area)})).on("mouseout",(function(e,t,a){i.style("visibility","hidden")})),l.append("text").attr("dy",".2em").style("text-anchor","middle").text((function(e){return e.data.service})).attr("fill","#0f0e1f"),R.select(a.frameElement).style("height",e+"px")},a.state={data:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;R.csv(B.a).then((function(t){var a={children:t};e.setState({data:a}),e.chart()}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"bubbleChart"})}}]),t}(n.Component),A=a(25),I=a.n(A),F=(a(9),a(3)),H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).chart=function(){var e=60,t=70,n=document.getElementById("yearly_bar").offsetWidth-e,r=document.getElementById("yearly_bar").offsetHeight-t,l=F.scaleBand().range([0,n]).padding(.6),i=F.scaleLinear().range([r,0]),s=F.select("#yearly_bar").append("svg").attr("width",n).attr("height",r).append("g").attr("transform","translate("+t+",0)"),c=n/r,o=F.select("#yearly_bar");F.select(window).on("resize",(function(){var e=o.node().getBoundingClientRect().width;o.attr("width",e),o.attr("height",e/c)})),l.domain(a.state.data.map((function(e){return e.year}))),i.domain([30,F.max(a.state.data,(function(e){return 190}))]),s.append("g").call(F.axisLeft(i)).selectAll("line").attr("class","linecolor").attr("x1","0").attr("x1",n).attr("stroke-dasharray","10").attr("stroke-width",".5"),s.selectAll(".bar").data(a.state.data).enter().append("rect").attr("class","bar").attr("x",(function(e){return l(e.year)})).attr("rx","5").attr("width",l.bandwidth()).attr("y",(function(e){return i(30)})).on("mouseover",(function(e,t,a){document.getElementsByClassName("year")[0].innerText=e.year,document.getElementsByClassName("users")[0].innerText=e.number+" Million",F.select(a[t]).transition().delay(0).duration(1e3).attr("height",r-20-i(e.number))})).on("mouseout",(function(e,t,a){F.select(a[t]).transition().duration(100).attr("height",r-i(e.number))})).transition().attr("y",(function(e){return i(e.number)})).duration(1e3).delay(2e3).attr("height",(function(e){return r-i(e.number)})),s.append("g").attr("transform","translate(0,"+r+")").call(F.axisBottom(l)).selectAll("line,path").style("display","none")},a.state={data:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;F.csv(I.a).then((function(t){e.setState({data:t}),e.chart()}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"yearly shadow"},r.a.createElement("div",{className:"yearly_info"},r.a.createElement("h6",null,"Users"),r.a.createElement("h3",{className:"year"},"2013"),r.a.createElement("h4",{className:"users"},"41.43 Million")),r.a.createElement("div",{id:"yearly_bar"}))}}]),t}(n.Component),W=a(10),P=a.n(W),q=a(26),z=a.n(q),G=(a(3),a(9),a(3)),Y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).loadOptions=function(){return r.a.createElement("div",{className:"donut_select"},r.a.createElement("select",{onChange:function(e){a.setState({singleData:a.state.data[e.target.value]})}},a.state.data.map((function(e,t){return r.a.createElement("option",{key:t,value:t},e.Title)}))),r.a.createElement("span",null,r.a.createElement("img",{src:z.a})),r.a.createElement("div",{className:"select_info"},r.a.createElement("div",{className:"item_info"},r.a.createElement("h5",null,"Genre"),r.a.createElement("h3",null,a.state.singleData.Major_Genre)),r.a.createElement("div",{className:"item_info"},r.a.createElement("h5",null,"Release Data"),r.a.createElement("h3",null,a.state.singleData.premiereDate)),r.a.createElement("div",{className:"item_info"},r.a.createElement("h5",null,"IMDB Rating"),r.a.createElement("h3",null,a.state.singleData.IMDB_Rating))))},a.chart=function(){G.scaleOrdinal(G.schemeCategory10);var e=G.scaleLinear().domain([0,100]).range([0,2*Math.PI]),t=Math.min(380,380)/2,n=G.select("#donutchart").append("svg").attr("class","pie").attr("height",380).attr("width",380).attr("dominant-baseline","middle"),r=n.append("g").attr("transform","translate(190,190)"),l=G.arc().innerRadius(t-40).outerRadius(t).startAngle(e(0)).endAngle(e(100)),i=G.arc().innerRadius(t-40).outerRadius(t).startAngle(e(0)).endAngle(e(80)),s=(r.append("g").append("path").attr("d",l).attr("fill","#e9e9e9"),r.append("g").attr("class","test").append("path").attr("d",i).attr("fill","#FF0055")),c=n.append("text").text("80%").attr("class","donut_percent").attr("text-anchor","middle").attr("x","50%").attr("y","50%").attr("dominant-baseline","middle");G.select(".donut_select>select").on("change",(function(t,n,r){var l=a.state.data[r[0].value];i.endAngle(e(l.IMDB_Rating)),s.transition().duration(1e3).attr("d",i),c.text(" ".concat(l.IMDB_Rating,"%"))}))},a.state={data:"",singleData:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;G.csv(P.a).then((function(t){var a=t;a=a.filter((function(e){return e.IMDB_Rating>=80})),e.setState({data:a}),e.setState({singleData:e.state.data[0]}),e.chart()}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"partTwo shadow"},r.a.createElement("div",{id:"donutchart"}),this.state.data?this.loadOptions():null)}}]),t}(n.Component),V=a(27),Z=a.n(V),J=function(e){return Object(n.useEffect)((function(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.focus(),window.scrollTo(0,0),document.querySelector(".app_intro").classList.add("shrink")}),[]),r.a.createElement("div",{className:"app_intro"},r.a.createElement("img",{src:Z.a}),r.a.createElement("span",{className:"intro_text"},"The Rise ",r.a.createElement("br",null),"& Success ",r.a.createElement("br",null),"of Netflix"),r.a.createElement("hr",{className:"title_hr"}))},X=(a(9),a(3)),K=function(){var e=Object(n.useState)(),t=Object(g.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){X.csv(P.a).then((function(e){var t=i(e,"Drama"),a=i(e,"Comedy"),n=i(e,"Docu-Series"),r=i(e,"Family Animation"),s=i(e,"Marvel");l([{genre:"Drama",value:t},{genre:"Comedy",value:a},{genre:"Docu-Series",value:n},{genre:"Family",value:r},{genre:"Marvel",value:s}])}))}),[l]),Object(n.useEffect)((function(){a&&s()}),[a]);var i=function(e,t){var a=e.filter((function(e){return e.Major_Genre===t}));return a.reduce((function(e,t){return Math.ceil(e+parseInt(t.IMDB_Rating)/a.length)}),0)},s=function(){var e=20,t=20,n=30,r=100,l=document.getElementById("averageRating").offsetWidth-r-t,i=document.getElementById("averageRating").offsetHeight-e-n,s=X.scaleBand().range([i,0]).padding(.1),c=X.scaleLinear().range([0,l]),o=X.select("#averageRating").append("svg").attr("width",l+r+t).attr("height",i+e+n).append("g").attr("transform","translate("+r+","+e+")");a.forEach((function(e){e.value=+e.value})),c.domain([0,X.max(a,(function(e){return e.value}))]),s.domain(a.map((function(e){return e.genre}))),o.selectAll(".bar").data(a).enter().append("rect").attr("class","bar").attr("width",(function(e){return c(e.value)})).attr("y",(function(e){return s(e.genre)})).attr("height",s.bandwidth()),o.append("g").attr("transform","translate(0,"+i+")").call(X.axisBottom(c)),o.append("g").call(X.axisLeft(s))};return r.a.createElement("div",{id:"averageRating"})},U=a(3),Q=function(){var e=Object(n.useState)(),t=Object(g.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)((function(){U.csv(P.a).then((function(e){var t=i(e,"Drama"),a=i(e,"Comedy"),n=i(e,"Docu-Series"),r=i(e,"Family Animation"),s=i(e,"Marvel");l([{genre:"Drama",value:t},{genre:"Comedy",value:a},{genre:"Docu-Series",value:n},{genre:"Family",value:r},{genre:"Marvel",value:s}])}))}),[l]),Object(n.useEffect)((function(){a&&s()}),[a]);var i=function(e,t){var a=e.filter((function(e){return e.Major_Genre===t}));return a.reduce((function(e,t){return Math.ceil(e+parseInt(t.Max_Length)/a.length)}),0)},s=function(){var e=20,t=20,n=30,r=100,l=document.getElementById("runtime").offsetWidth-r-t,i=document.getElementById("runtime").offsetHeight-e-n,s=U.scaleBand().range([i,0]).padding(.1),c=U.scaleLinear().range([0,l]),o=U.select("#runtime").append("svg").attr("width",l+r+t).attr("height",i+e+n).append("g").attr("transform","translate("+r+","+e+")");a.forEach((function(e){e.value=+e.value})),c.domain([0,U.max(a,(function(e){return e.value}))]),s.domain(a.map((function(e){return e.genre}))),o.selectAll(".bar").data(a).enter().append("rect").attr("class","bar").attr("width",(function(e){return c(e.value)})).attr("y",(function(e){return s(e.genre)})).attr("height",s.bandwidth()),o.append("g").attr("transform","translate(0,"+i+")").call(U.axisBottom(c)),o.append("g").call(U.axisLeft(s))};return r.a.createElement("div",{id:"runtime"})},$=function(e){var t=e.text;return r.a.createElement("div",{className:"modal"},r.a.createElement("p",{style:{color:"black"}},t))},ee=function(e){var t=e.index,a=(e.children,Object(n.useState)(!1)),l=Object(g.a)(a,2),i=l[0],s=l[1],c=Object(n.useState)([{title:"Netflix Subscriptions By Year",bodyText:"According to Wikipedia, Netflix has over 160 millions customers spanning over 40 countires. "},{title:"Top shows rated by IMDB",bodyText:"The rating is calculated by averaging all registered users who vote on IMDB. This is only a short selection. Netflix has many high rated shows."},{title:"The competitors",bodyText:"Netflix began it's streaming service in 2007 where as Amazon begna their service in 2007. As time progressed, other companies began their own steaming service to rival the giants"},{title:"Rating by Genres",bodyText:"There are many genres on Netflix, here are a few that are highly scored on IMDB."},{title:"Average length of one episode",bodyText:"The average show length from each genre ranges from half an hour to over 70 minutes. Best get ready for a binge watch."},{title:"Netflix Stock Data",bodyText:"Netflix's stock price has flucated throughout the last for year. A noticeable rise was in October 2016 where Netflix published their third-quater earnings with strong internation subscriber growth. July 18th 2019 saw a decline in price due to a large drop in subscribers. "}]),o=Object(g.a)(c,2),u=o[0];o[1];return r.a.createElement("div",{onMouseOver:function(){s(!0)},onMouseLeave:function(){s(!1)},className:"graph_title"},r.a.createElement("h2",null,u[t].title),i?r.a.createElement($,{text:u[t].bodyText}):null)},te=function(){return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(J,null),r.a.createElement("div",{className:"app_container"},r.a.createElement(S,null),r.a.createElement("div",{className:"a_question"},r.a.createElement("h1",{className:"title"},"The Growth",r.a.createElement("br",null)," of Netflix.")),r.a.createElement("section",{className:"col-1 partone"},r.a.createElement(ee,{index:"0"}),r.a.createElement(ee,{index:"1"}),r.a.createElement(H,null),r.a.createElement(Y,null)),r.a.createElement(ee,{index:"2"}),r.a.createElement("section",{className:"col-1 cicrle_group shadow"},r.a.createElement(T,null)),r.a.createElement("section",{className:"col-1 partThree"},r.a.createElement(ee,{index:"3"}),r.a.createElement(ee,{index:"4"}),r.a.createElement(K,null),r.a.createElement(Q,null)),r.a.createElement(ee,{index:"5"}),r.a.createElement("section",{className:"col-1 stock shadow"},r.a.createElement(h,null))))};i.a.render(r.a.createElement(te,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.06b3878f.chunk.js.map