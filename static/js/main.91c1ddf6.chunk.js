(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(8),o=n.n(r),l=n(9),c=n(1),i=n(2),u=n(5),m=n(3),d=n(6),p=n(4),h=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,this.props.user.name,", "),s.a.createElement("span",null,s.a.createElement("a",{href:"#"},this.props.user.email),", "),s.a.createElement("span",null,"adress: "),s.a.createElement("span",null,this.props.user.address.street,", "),s.a.createElement("span",null,this.props.user.address.suite,", "),s.a.createElement("span",null,this.props.user.address.city,", "),s.a.createElement("span",null,this.props.user.address.zipcode))}}]),t}(a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("section",null,s.a.createElement("p",null,this.props.text),s.a.createElement("p",null,this.props.author),s.a.createElement("p",null,s.a.createElement("a",{href:"#"},this.props.email)))}}]),t}(a.Component),f=(n(16),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={closed:!1,sign:"-"},n.showHide=n.showHide.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"showHide",value:function(e){this.state.closed?this.setState({closed:!1,sign:"-"}):this.setState({closed:!0,sign:"+"}),e.target.parentNode.nextElementSibling.classList.toggle("visible")}},{key:"render",value:function(){var e=[];return this.props.comments.forEach(function(t){e.push(s.a.createElement(b,{key:t.body,text:t.body,author:t.name,email:t.email}))}),s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,"Comments",s.a.createElement("button",{className:"show",onClick:this.showHide},this.state.sign)),s.a.createElement("section",{className:"comments"},e))}}]),t}(a.Component)),E=(n(17),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"post"},s.a.createElement("h2",null,this.props.title),s.a.createElement("p",null,this.props.text),s.a.createElement("p",null,s.a.createElement(h,{user:this.props.user})),s.a.createElement("section",{className:"comments_block"},s.a.createElement(f,{comments:this.props.comments})))}}]),t}(a.Component)),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={buttonText:"Load"},n.loadPosts=n.loadPosts.bind(Object(d.a)(n)),n.loadUrl=n.loadUrl.bind(Object(d.a)(n)),n.searchResults=n.searchResults.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"loadUrl",value:function(e){return fetch(e).then(function(e){return e.json()}).then(function(e){return e})}},{key:"loadPosts",value:function(){var e=this;this.setState({loaded:"not loaded",buttonText:"Loading..."}),Promise.all([this.loadUrl("https://jsonplaceholder.typicode.com/posts"),this.loadUrl("https://jsonplaceholder.typicode.com/users"),this.loadUrl("https://jsonplaceholder.typicode.com/comments")]).then(function(t){var n=Object(l.a)(t,3),a=n[0],r=n[1],o=n[2];a.map(function(e){e.user=r.find(function(t){return t.id===e.userId}),e.comments=o.filter(function(t){return t.postId===e.id})});var c=[];a.forEach(function(e){c.push(s.a.createElement(E,{key:e.id,title:e.title,text:e.body,user:e.user,comments:e.comments}))}),e.setState({loaded:"loaded",posts:a,postComponents:c,forRender:c})})}},{key:"searchResults",value:function(e){var t=this.state.postComponents.filter(function(t){return t.props.title.includes(e.target.value.trim())});console.log(t),this.setState({forRender:t})}},{key:"render",value:function(){return"loaded"===this.state.loaded?s.a.createElement("div",null,s.a.createElement("input",{type:"text",placeholder:"Search...",onInput:this.searchResults}),this.state.forRender):s.a.createElement("div",null,s.a.createElement("button",{onClick:this.loadPosts},this.state.buttonText))}}]),t}(a.Component);n(18);var O=function(){return s.a.createElement("div",null,s.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.91c1ddf6.chunk.js.map