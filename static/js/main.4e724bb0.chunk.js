(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),n=a(14),r=a.n(n),o=(a(89),a(15)),i=a(16),c=a(19),p=a(17),h=a(18),u=a(31),m=(a(23),a(38)),g=a.n(m),d=a(53),v=a.n(d),f=a(22),y=a.n(f),E=a(82),N=a.n(E),b=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"name"},l.a.createElement("div",{className:"cell small title"},"   "),l.a.createElement("div",{className:"cell small resistance3"}," Resistance3: "),l.a.createElement("div",{className:"cell small resistance2"}," Resistance2: "),l.a.createElement("div",{className:"cell small resistance1"}," Resistance1: "),l.a.createElement("div",{className:"cell small pivot"}," Pivot:  "),l.a.createElement("div",{className:"cell small support1"}," Support1: "),l.a.createElement("div",{className:"cell small support2"}," Support2: "),l.a.createElement("div",{className:"cell small support3"}," Support3: "))}}]),t}(s.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=function(e){return(.01*Math.round(100*parseFloat(e))).toFixed(2)},t=function(e){return parseFloat(e)};return l.a.createElement("div",{className:""},l.a.createElement("div",{className:"cell title"},"  Classic  "),l.a.createElement("div",{className:"cell resistance3"}," $",e(t(this.props.state.classicPP)+2*(t(this.props.state.high)-t(this.props.state.low)))," "),l.a.createElement("div",{className:"cell resistance2"}," $",e(t(this.props.state.classicPP)+t(this.props.state.high)-t(this.props.state.low))," "),l.a.createElement("div",{className:"cell resistance1"}," $",e(2*t(this.props.state.classicPP)-t(this.props.state.low))," "),l.a.createElement("div",{className:"cell pivot"}," $",e(t(this.props.state.classicPP))),l.a.createElement("div",{className:"cell support1"},"  $",e(2*t(this.props.state.classicPP)-t(this.props.state.high))),l.a.createElement("div",{className:"cell support2"},"  $",e(t(this.props.state.classicPP)-t(this.props.state.high)+t(this.props.state.low))," "),l.a.createElement("div",{className:"cell support3"},"  $",e(t(this.props.state.classicPP)-2*(t(this.props.state.high)-t(this.props.state.low)))))}}]),t}(s.Component),P=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=function(e){return(.01*Math.round(100*parseFloat(e))).toFixed(2)},t=function(e){return parseFloat(e)};return l.a.createElement("div",{className:""},l.a.createElement("div",{className:"cell title"}," Camarilla  "),l.a.createElement("div",{className:"cell resistance3"}," $",e(t(this.props.state.close)+1.1*t(this.props.state.range)/4)),l.a.createElement("div",{className:"cell resistance2"}," $",e(t(this.props.state.close)+1.1*t(this.props.state.range)/6)),l.a.createElement("div",{className:"cell resistance1"}," $",e(t(this.props.state.close)+1.1*t(this.props.state.range)/12)," "),l.a.createElement("div",{className:"cell pivot"}," -- "),l.a.createElement("div",{className:"cell support1"}," $",e(t(this.props.state.close)-1.1*t(this.props.state.range)/12)," "),l.a.createElement("div",{className:"cell support2"}," $",e(t(this.props.state.close)-1.1*t(this.props.state.range)/6)," "),l.a.createElement("div",{className:"cell support3"}," $",e(t(this.props.state.close)-1.1*t(this.props.state.range)/4)," "))}}]),t}(s.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=function(e){return(.01*Math.round(100*parseFloat(e))).toFixed(2)},t=function(e){return parseFloat(e)};return l.a.createElement("div",{className:""},l.a.createElement("div",{className:"cell small title"},"  Fibonacci  "),l.a.createElement("div",{className:"cell small resistance3"},"  $",e(t(this.props.state.close)+t(this.props.state.range))," "),l.a.createElement("div",{className:"cell small resistance2"}," $",e(t(this.props.state.close)+.618*t(this.props.state.range))),l.a.createElement("div",{className:"cell small resistance1"}," $",e(t(this.props.state.close)+.382*t(this.props.state.range))," "),l.a.createElement("div",{className:"cell small pivot"}," $",e(t(this.props.state.classicPP))," "),l.a.createElement("div",{className:"cell small support1"}," $",e(t(this.props.state.close)-.382*t(this.props.state.range))," "),l.a.createElement("div",{className:"cell small support2"},"  $",e(t(this.props.state.close)-.618*t(this.props.state.range))),l.a.createElement("div",{className:"cell small support3"}," $",e(t(this.props.state.close)-t(this.props.state.range))," "))}}]),t}(s.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=function(e){return(.01*Math.round(100*parseFloat(e))).toFixed(2)},t=function(e){return parseFloat(e)};return l.a.createElement("div",{className:""},l.a.createElement("div",{className:"cell small title"}," DeMark "),l.a.createElement("div",{className:"cell small resistance3"}," --"),l.a.createElement("div",{className:"cell small resistance2"}," -- "),l.a.createElement("div",{className:"cell small resistance1"}," $",e(t(this.props.state.x)/2-t(this.props.state.low))," "),l.a.createElement("div",{className:"cell small pivot"}," $",e(t(this.props.state.x)/4)," "),l.a.createElement("div",{className:"cell small support1"}," $",e(t(this.props.state.x)/2-t(this.props.state.high))," "),l.a.createElement("div",{className:"cell small support2"}," -- "),l.a.createElement("div",{className:"cell small support3"}," -- "))}}]),t}(s.Component),O=["XUH8ZUK3OVO9R8K8","NC43NXOT6N90ZZ8R","HGW8JD955DCWQ14S","XUH8ZUK3OVO9R8K8","NC43NXOT6N90ZZ8R","HGW8JD955DCWQ14S","XUH8ZUK3OVO9R8K8","NC43NXOT6N90ZZ8R","HGW8JD955DCWQ14S","XUH8ZUK3OVO9R8K8","NC43NXOT6N90ZZ8R","HGW8JD955DCWQ14S"],x=O[Math.floor(Math.random()*O.length)],k=function(e){function t(e){var a,s;Object(o.a)(this,t),a=Object(c.a)(this,Object(p.a)(t).call(this,e)),s=localStorage.getItem("symbol")?localStorage.getItem("symbol"):"";var l=[];localStorage.getItem("holdings")&&(l=(l=JSON.parse(localStorage.getItem("holdings"))).sort(function(e,t){return parseFloat(t.price)-parseFloat(e.price)})),void 0!==s&&"undefined"!==s||(s="");var n=0;l.forEach(function(e){return n+=parseFloat(e.value)});var r=0;l.forEach(function(e){return r+=parseFloat(e.quantity)});var i=(parseFloat(n)/parseFloat(r)).toFixed(2);a.state={symbol:s,stock:"",open:0,high:0,low:0,date:"",close:0,classicPP:0,range:0,x:0,message:"",change:"",changeColor:"",quantity:0,price:0,holdings:l,total:n,shares:r,adjusted:i,compareMessage:"can't sell yet",selling:[],shares2:0,value2:0,high1:0,low1:0,close1:0,open1:0,date1:"",classicPP1:0,range1:0,x1:0,high2:0,low2:0,close2:0,open2:0,date2:"",classicPP2:0,range2:0,x2:0},a.sellingUpdate=function(e){var t=function(e){return(.01*Math.round(100*parseFloat(e))).toFixed(2)},s=function(e){return parseFloat(e)};if("current"===e)var l=parseFloat(h.state.close);else if("r3"===e)l=t(s(a.state.classicPP)+2*(s(a.state.high)-s(a.state.low)));else if("r2"===e)l=t(s(a.state.classicPP)+s(a.state.high)-s(a.state.low));else if("r1"===e)l=t(2*s(a.state.classicPP)-s(a.state.low));else if("pp"===e)l=parseFloat(h.state.classicPP);else if("s1"===e)l=t(2*s(a.state.classicPP)-s(a.state.high));else if("s2"===e)l=t(s(a.state.classicPP)-s(a.state.high)+s(a.state.low));else if("s3"===e)l=t(s(a.state.classicPP)-2*(s(a.state.high)-s(a.state.low)));if(l>parseFloat(h.state.holdings[h.state.holdings.length-1].price)){h.setState({compareMessage:"ready to sell"});for(var n=0,r=[],o=0,i=0,c=h.state.holdings.length;c>0;c--)if((l-h.state.holdings[c-1].price)*h.state.holdings[c-1].quantity>0){n+=parseInt((l-h.state.holdings[c-1].price)*h.state.holdings[c-1].quantity),o+=parseInt(h.state.holdings[c-1].quantity),i+=parseFloat(h.state.holdings[c-1].quantity*h.state.holdings[c-1].price);var p={price:h.state.holdings[c-1].price,quantity:h.state.holdings[c-1].quantity};r.push(p)}else if(n>h.state.holdings[c-1].price-l){for(var u=0,m=0;m<h.state.holdings[c-1].quantity;m++)n>h.state.holdings[c-1].price-l&&(n-=h.state.holdings[c-1].price-l,u++,o++,i+=parseFloat(h.state.holdings[c-1].price));var g={price:h.state.holdings[c-1].price,quantity:u};r.push(g)}h.setState({selling:r,shares2:o,value2:i})}else h.setState({compareMessage:"can't sell yet",selling:[],shares2:0,value2:0})},a.enterSymbol=function(e){a.setState({symbol:e.target.value.toUpperCase()})},a.enterQuantity=function(e){a.setState({quantity:e.target.value})},a.enterPrice=function(e){a.setState({price:parseFloat(e.target.value).toFixed(2)})},a.quantityEnter=function(){var e={price:a.state.price,quantity:a.state.quantity,value:a.state.price*a.state.quantity};l.push(e),a.setState({holdings:l}),localStorage.setItem("holdings",JSON.stringify(l)),console.log(l);var t=0;l.forEach(function(e){return t+=parseFloat(e.value)});var s=0;l.forEach(function(e){return s+=parseFloat(e.quantity)});var n=(parseFloat(t)/parseFloat(s)).toFixed(2);l=l.sort(function(e,t){return parseFloat(t.price)-parseFloat(e.price)}),a.setState({total:t,shares:s,adjusted:n,holdings:l});var r=parseFloat(h.state.close);if(r>parseFloat(h.state.holdings[h.state.holdings.length-1].price)){h.setState({compareMessage:"ready to sell"});for(var o=0,i=[],c=0,p=0,u=h.state.holdings.length;u>0;u--)if((r-h.state.holdings[u-1].price)*h.state.holdings[u-1].quantity>0){o+=parseInt(r-h.state.holdings[u-1].price)*parseInt(h.state.holdings[u-1].quantity),c+=parseInt(h.state.holdings[u-1].quantity),p+=parseFloat(h.state.holdings[u-1].quantity*h.state.holdings[u-1].price);var m={price:h.state.holdings[u-1].price,quantity:h.state.holdings[u-1].quantity};i.push(m)}else if(o>h.state.holdings[u-1].price-r){for(var g=0,d=0;d<h.state.holdings[u-1].quantity;d++)o>h.state.holdings[u-1].price-r&&(o-=h.state.holdings[u-1].price-r,g++,c++,p+=parseFloat(h.state.holdings[u-1].price));var v={price:h.state.holdings[u-1].price,quantity:g};i.push(v)}h.setState({selling:i,shares2:c,value2:p})}else h.setState({compareMessage:"can't sell yet",selling:[],shares2:0,value2:0})},a.delete=function(e){l.splice(e,1),a.setState({holdings:l});var t=0;l.forEach(function(e){return t+=parseFloat(e.value)});var s=0;l.forEach(function(e){return s+=parseFloat(e.quantity)});var n=(parseFloat(t)/parseFloat(s)).toFixed(2);l=l.sort(function(e,t){return parseFloat(t.price)-parseFloat(e.price)}),a.setState({total:t,shares:s,adjusted:n,holdings:l}),localStorage.setItem("holdings",JSON.stringify(l));var r=parseFloat(h.state.close);if(r>parseFloat(h.state.holdings[h.state.holdings.length-1].price)){h.setState({compareMessage:"ready to sell"});for(var o=0,i=[],c=0,p=0,u=h.state.holdings.length;u>0;u--)if((r-h.state.holdings[u-1].price)*h.state.holdings[u-1].quantity>0){o+=parseInt(r-h.state.holdings[u-1].price)*parseInt(h.state.holdings[u-1].quantity),c+=parseInt(h.state.holdings[u-1].quantity),p+=parseFloat(h.state.holdings[u-1].quantity*h.state.holdings[u-1].price);var m={price:h.state.holdings[u-1].price,quantity:h.state.holdings[u-1].quantity};i.push(m)}else if(o>h.state.holdings[u-1].price-r){for(var g=0,d=0;d<h.state.holdings[u-1].quantity;d++)o>h.state.holdings[u-1].price-r&&(o-=h.state.holdings[u-1].price-r,g++,c++,p+=parseFloat(h.state.holdings[u-1].price));var v={price:h.state.holdings[u-1].price,quantity:g};i.push(v)}h.setState({selling:i,shares2:c,value2:p})}else h.setState({compareMessage:"can't sell yet",selling:[],shares2:0,value2:0})},a.store=function(e){if(1==e){var t=a.state.close,s=a.state.open,l=a.state.high,n=a.state.low,r=a.state.date,o=a.state.classicPP,i=a.state.range,c=a.state.x;a.setState({close1:t,open1:s,high1:l,low1:n,date1:r,classicPP1:o,range1:i,x1:c}),localStorage.setItem("store1",JSON.stringify({close1:t,open1:s,high1:l,low1:n,date1:r,classicPP1:o,range1:i,x1:c}))}else if(2==e){var p=a.state.close,h=a.state.open,u=a.state.high,m=a.state.low,g=a.state.date,d=a.state.classicPP,v=a.state.range,f=a.state.x;a.setState({close2:p,open2:h,high2:u,low2:m,date2:g,classicPP2:d,range2:v,x2:f}),localStorage.setItem("store2",JSON.stringify({close2:p,open2:h,high2:u,low2:m,date2:g,classicPP2:d,range2:v,x2:f}))}},a.recall=function(e){if(1==e){var t=a.state.close1,s=a.state.open1,l=a.state.high1,n=a.state.low1,r=a.state.date1,o=a.state.classicPP1,i=a.state.range1,c=a.state.x1;a.setState({close:t,open:s,high:l,low:n,date:r,classicPP:o,range:i,x:c})}else if(2==e){var p=a.state.close2,h=a.state.open2,u=a.state.high2,m=a.state.low2,g=a.state.date2,d=a.state.classicPP2,v=a.state.range2,f=a.state.x2;a.setState({close:p,open:h,high:u,low:m,date:g,classicPP:d,range:v,x:f})}},a.keyPress=function(e){13===e.keyCode&&(a.setState({symbol:e.target.value.toUpperCase()}),a.lookup())};var h=Object(u.a)(Object(u.a)(a));return a.lookup=function(){h.setState({message:"Crunching numbers...",change:""}),N.a.ajax({url:"https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+h.state.symbol+"&apikey="+x,crossDomain:!0,dataType:"json",success:function(e,t,a){if(void 0!==e.Information)h.setState({message:"Server error or busy. Please try again in a minute"});else if("undefined"===typeof e["Global Quote"]["03. high"])h.setState({message:"Could not find symbol. Please check spelling and try again"});else{var s,l=e["Global Quote"]["01. symbol"],n="Based on last trading session: "+e["Global Quote"]["07. latest trading day"],r=parseFloat(e["Global Quote"]["03. high"]).toFixed(2),o=parseFloat(e["Global Quote"]["04. low"]).toFixed(2),i=parseFloat(e["Global Quote"]["02. open"]).toFixed(2),c=parseFloat(e["Global Quote"]["05. price"]).toFixed(2),p=" ( $ "+parseFloat(e["Global Quote"]["09. change"]).toFixed(2)+" , "+parseFloat(e["Global Quote"]["10. change percent"]).toFixed(2)+"% )",u=((parseFloat(r)+parseFloat(o)+parseFloat(c))/3).toFixed(2),m=(parseFloat(r)-parseFloat(o)).toFixed(2),g="";if(e["Global Quote"]["09. change"]>=0&&(g="green"),e["Global Quote"]["09. change"]<0&&(g="red"),i>r&&(r=i),c>r&&(r=c),i<o&&(o=i),c<o&&(o=c),"NaN"===c&&h.setState({message:"Server error or busy. Please try again in a minute"}),h.state.holdings.length>2)if(c>parseFloat(h.state.holdings[h.state.holdings.length-1].price)){h.setState({compareMessage:"ready to sell"});for(var d=0,v=[],f=0,y=0,E=h.state.holdings.length;E>0;E--)if((c-h.state.holdings[E-1].price)*h.state.holdings[E-1].quantity>0){d+=parseInt(c-parseInt(h.state.holdings[E-1].price)*h.state.holdings[E-1].quantity),f+=parseInt(h.state.holdings[E-1].quantity),y+=parseFloat(h.state.holdings[E-1].quantity*h.state.holdings[E-1].price);var N={price:h.state.holdings[E-1].price,quantity:h.state.holdings[E-1].quantity};v.push(N)}else if(d>h.state.holdings[E-1].price-c){for(var b=0,F=0;F<h.state.holdings[E-1].quantity;F++)d>h.state.holdings[E-1].price-c&&(d-=h.state.holdings[E-1].price-c,b++,f++,y+=parseFloat(h.state.holdings[E-1].price));var P={price:h.state.holdings[E-1].price,quantity:b};v.push(P)}h.setState({selling:v,shares2:f,value2:y})}else h.setState({compareMessage:"can't sell yet",selling:[],shares2:0,value2:0});parseFloat(c)>parseFloat(i)?s=2*parseFloat(r)+parseFloat(o)+parseFloat(c):parseFloat(c)<parseFloat(i)?s=parseFloat(r)+2*parseFloat(o)+parseFloat(c):parseFloat(c)===parseFloat(i)&&(s=parseFloat(r)+parseFloat(o)+2*parseFloat(c)),h.setState({high:r,low:o,stock:l,close:c,open:i,date:n,classicPP:u,range:m,x:s,change:p,changeColor:g,message:n}),void 0===l&&(l=""),localStorage.setItem("symbol",l)}},error:function(e,t,a){console.log("Post error: "+a),h.setState({message:"Server error or busy. Please try again in a minute"})}})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.getItem("symbol")&&this.lookup(),localStorage.getItem("store1")){var e=JSON.parse(localStorage.getItem("store1")),t=e.close1,a=e.open1,s=e.high1,l=e.low1,n=e.date1,r=e.classicPP1,o=e.range1,i=e.x1;this.setState({close1:t,open1:a,high1:s,low1:l,date1:n,classicPP1:r,range1:o,x1:i})}if(localStorage.getItem("store2")){var c=JSON.parse(localStorage.getItem("store2")),p=c.close2,h=c.open2,u=c.high2,m=c.low2,g=c.date2,d=c.classicPP2,v=c.range2,f=c.x2;this.setState({close2:p,open2:h,high2:u,low2:m,date2:g,classicPP2:d,range2:v,x2:f})}}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content"},l.a.createElement("h1",null," Pivot Points "),l.a.createElement(g.a,{id:"symbol",type:"text",defaultValue:localStorage.getItem("symbol")||"",onKeyDown:this.keyPress,label:"Stock Symbol",onChange:this.enterSymbol}),l.a.createElement("br",null),l.a.createElement(v.a,{size:"small",style:{Height:"1vmin"},id:"button",variant:"contained",color:"primary",onClick:this.lookup}," Look up "),l.a.createElement("br",null),l.a.createElement("div",{style:{marginBottom:"1vmin"}}," ",l.a.createElement("span",{id:"message"}," ",this.state.message),l.a.createElement("span",{style:{color:this.state.changeColor}}," ",this.state.change," ")),l.a.createElement("div",null,l.a.createElement("span",{className:"stats"},"High: $ ",this.state.high," "),l.a.createElement("span",{className:"stats"},"Low: $ ",this.state.low," "),l.a.createElement("span",{className:"stats"},"Open: $ ",this.state.open," "),l.a.createElement("span",{className:"stats"},"Close: $ ",this.state.close," ")),l.a.createElement("hr",null),l.a.createElement(y.a,{container:!0,className:"classesdemo",justify:"space-around",spacing:24,alignItems:"center"},l.a.createElement(y.a,{item:!0,xs:2},l.a.createElement(b,null)),l.a.createElement(y.a,{item:!0,xs:2},l.a.createElement(F,{state:this.state})),l.a.createElement(y.a,{item:!0,xs:2},l.a.createElement(P,{state:this.state})),l.a.createElement(y.a,{item:!0,xs:2},l.a.createElement(S,{state:this.state})),l.a.createElement(y.a,{item:!0,xs:2},l.a.createElement(w,{state:this.state}))),l.a.createElement("hr",null),l.a.createElement("div",{className:"footnote"},"** Pivot Point data is only accurate before/after trading hours **"))),l.a.createElement("div",{className:"stock"},l.a.createElement("h2",null,this.state.symbol," holdings"),l.a.createElement(g.a,{id:"quantity",type:"number",label:"quantity",onChange:this.enterQuantity}),l.a.createElement("span",null,"  "),l.a.createElement(g.a,{id:"price",type:"number",label:"price",onChange:this.enterPrice}),l.a.createElement("br",null),l.a.createElement(v.a,{size:"small",style:{Height:"1vmin"},id:"button",variant:"contained",color:"primary",onClick:this.quantityEnter}," Add "),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,"Quantity @ price = total value"),this.state.holdings.map(function(t,a){return l.a.createElement("div",null," ",l.a.createElement("span",{style:{color:"blue"}},t.quantity)," x ",l.a.createElement("span",{style:{color:"darkblue"}},"$ ",t.price," "),"= $",t.quantity*t.price," ",l.a.createElement("span",{className:"delete",onClick:function(){return e.delete(a)}},"  delete "))}),l.a.createElement("hr",null),"you have:  ",this.state.shares," @ $",this.state.adjusted,l.a.createElement("hr",null),l.a.createElement("div",{style:{margin:"2.5vh"}}),l.a.createElement("div",null,l.a.createElement("span",{className:"stats",onClick:function(){return e.sellingUpdate("current")},style:{color:"green"}},"Current"),l.a.createElement("span",{className:"stats",onClick:function(){return e.sellingUpdate("s3")},style:{color:"green"}},"S3"),l.a.createElement("span",{className:"stats",onClick:function(){return e.sellingUpdate("s2")},style:{color:"green"}},"S2"),l.a.createElement("span",{className:"stats",onClick:function(){return e.sellingUpdate("s1")},style:{color:"green"}},"S1"),l.a.createElement("span",{className:"stats",onClick:function(){return e.sellingUpdate("pp")},style:{color:"green"}},"Pivot"),l.a.createElement("span",{className:"stats",onClick:function(){return e.sellingUpdate("r1")},style:{color:"green"}},"R1"),l.a.createElement("span",{className:"stats",onClick:function(){return e.sellingUpdate("r2")},style:{color:"green"}},"R2"),l.a.createElement("span",{className:"stats",onClick:function(){return e.sellingUpdate("r3")},style:{color:"green"}},"R3")),l.a.createElement("br",null),this.state.compareMessage,this.state.selling.map(function(t,a){return l.a.createElement("div",null," ",l.a.createElement("span",{style:{color:"blue"}},t.quantity)," x ",l.a.createElement("span",{style:{color:"darkblue"}},"$ ",t.price," "),"= $",(t.quantity*t.price).toFixed(2)," ",l.a.createElement("span",{className:"delete",onClick:function(){return e.delete(a)}},"  delete "))}),this.state.shares2>0&&l.a.createElement("div",null,l.a.createElement("hr",null),"you can sell:  ",this.state.shares2," @ $",parseFloat(this.state.value2/this.state.shares2).toFixed(2),l.a.createElement("hr",null)),l.a.createElement("div",{style:{margin:"5vh"}}),l.a.createElement("div",null,l.a.createElement("span",{className:"stats",onClick:function(){return e.store(1)},style:{color:"blue"}},"store "),l.a.createElement("span",{className:"stats",onClick:function(){return e.recall(1)},style:{color:"blue"}},"recall "),"Set1",l.a.createElement("span",{className:"stats"},"Date: ",this.state.date1.slice(30,45)," "),l.a.createElement("span",{className:"stats"},"Close: $ ",this.state.close1," ")),l.a.createElement("div",{style:{margin:"2vh"}},l.a.createElement("span",{className:"stats",onClick:function(){return e.store(2)},style:{color:"blue"}},"store "),l.a.createElement("span",{className:"stats",onClick:function(){return e.recall(2)},style:{color:"blue"}},"recall "),"Set2",l.a.createElement("span",{className:"stats"},"Date: ",this.state.date2.slice(30,45)," "),l.a.createElement("span",{className:"stats"},"Close: $ ",this.state.close2," "))))}}]),t}(s.Component),q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(l.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/testing-repo",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/testing-repo","/service-worker.js");q?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):C(e)})}}()},84:function(e,t,a){e.exports=a(238)},89:function(e,t,a){}},[[84,2,1]]]);
//# sourceMappingURL=main.4e724bb0.chunk.js.map