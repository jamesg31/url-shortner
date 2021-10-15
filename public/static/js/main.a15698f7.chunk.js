(this["webpackJsonpurl-shortner-frontend"]=this["webpackJsonpurl-shortner-frontend"]||[]).push([[0],{137:function(t,e,n){},163:function(t,e,n){},164:function(t,e,n){},243:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(40),o=n.n(r),s=(n(136),n(137),n(26)),c=n(27),u=n(33),l=n(32),h=n(36),p=n.n(h),d=n(244),j=n(259),b=n(264),g=n(121),f=n.n(g),m=n(260),O=n(258),v=n(118),x=n.n(v),C=n(6),I=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).onSuccess=function(e){console.log(e),p.a.post("/api/auth/google",{token:e.tokenId}).then((function(e){console.log(e),t.props.onComplete()}))},t.onFailure=function(t){console.log(t)},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(C.jsx)(x.a,{clientId:"1064340871794-5mn674kkvp5sdjnb7bdjoukrr77ao5pq.apps.googleusercontent.com",render:function(e){return Object(C.jsx)(d.a,{primary:t.props.primary,positive:t.props.positive,onClick:e.onClick,children:t.props.children})},buttonText:"Login",onSuccess:this.onSuccess,onFailure:this.onFailure})}}]),n}(i.a.Component),L=I,k=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(C.jsx)(m.a,{size:"large",secondary:!0,children:Object(C.jsx)(O.a,{children:Object(C.jsx)(m.a.Item,{position:"right",children:Object(C.jsx)(L,{primary:!0,onComplete:function(){return t.props.onLoginComplete()},style:{marginTop:".5em"},children:"Log in"})})})})}}]),n}(i.a.Component),y=k,S=(n(163),n(261)),R=n(263),D=(n(164),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).delete=function(t){p.a.delete("/api/urls/"+t.currentTarget.getAttribute("url")).then((function(t){a.updateList()}))},a.state={urls:[]},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.updateList()}},{key:"updateList",value:function(){var t=this;p.a.get("/api/urls").then((function(e){t.setState({urls:e.data})}))}},{key:"render",value:function(){var t=this;if(this.state.urls.length>0)var e=Object(C.jsxs)(S.a,{divided:!0,verticalAlign:"middle",className:"url-list",children:[Object(C.jsx)(R.a,{as:"h1",children:"Manage URL's:"}),this.state.urls.map((function(e){return Object(C.jsxs)(S.a.Item,{children:[Object(C.jsx)(S.a.Content,{floated:"right",children:Object(C.jsx)(d.a,{negative:!0,url:e.url,onClick:t.delete,children:"Delete"})}),Object(C.jsxs)(S.a.Content,{children:[Object(C.jsxs)(S.a.Header,{children:["URL: /",e.url]}),"Redirect Destination: ",e.destination]})]})}))]});else e=null;return Object(C.jsx)(i.a.Fragment,{children:e})}}]),n}(i.a.Component)),U=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).onLoginComplete=function(){p.a.post("/api/urls",{url:a.state.urlInput,destination:a.state.destinationInput}).then((function(t){console.log(t),a.urlListRef.current.updateList()}))},a.state={buttonState:0,urlInput:"",destinationInput:"",destinationInputError:!1},a.timeout=0,a.urlListRef=i.a.createRef(),a}return Object(c.a)(n,[{key:"onUrlInputChange",value:function(t){var e=this;this.setState({buttonState:0,urlInput:t.target.value}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.target.value.length>0&&p.a.get("/api/urls/"+t.target.value).then((function(t){console.log(t.data),0===t.data.length?e.setState({buttonState:2}):e.setState({buttonState:1})}))}),300)}},{key:"onDestinationInputChange",value:function(t){f.a.isURL(t.target.value)?this.setState({destinationInput:t.target.value,destinationInputError:!1}):this.setState({destinationInput:t.target.value,destinationInputError:!0})}},{key:"render",value:function(){var t=this;if(0===this.state.buttonState)var e=Object(C.jsx)(d.a,{loading:!0,children:"Loading"});else 1===this.state.buttonState?e=Object(C.jsx)(d.a,{negative:!0,children:"Not Available"}):2===this.state.buttonState&&(e=Object(C.jsx)(L,{positive:!0,onComplete:this.onLoginComplete,children:"Create"}));if(this.state.destinationInputError)var n=Object(C.jsx)(j.a,{error:!0,value:this.state.destinationInput,placeholder:"https://example.com",onChange:function(e){return t.onDestinationInputChange(e)}});else n=Object(C.jsx)(j.a,{value:this.state.destinationInput,placeholder:"https://example.com",onChange:function(e){return t.onDestinationInputChange(e)}});return Object(C.jsxs)(i.a.Fragment,{children:[Object(C.jsx)(y,{onLoginComplete:function(){return t.urlListRef.current.updateList()}}),Object(C.jsxs)(b.a.Group,{className:"create-form",horizontal:!0,raised:!0,children:[Object(C.jsxs)(b.a,{className:"create-form-segment",align:"right",children:[Object(C.jsx)("h4",{children:"Destination:"}),n]}),Object(C.jsxs)(b.a,{className:"create-form-segment",children:[Object(C.jsx)("h4",{children:"URL:"}),Object(C.jsx)(j.a,{value:this.state.urlInput,action:e,onChange:function(e){return t.onUrlInputChange(e)},label:window.location.origin+"/",placeholder:"shortened-url"})]})]}),Object(C.jsx)(D,{ref:this.urlListRef})]})}}]),n}(i.a.Component);o.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(U,{})}),document.getElementById("root"))}},[[243,1,2]]]);
//# sourceMappingURL=main.a15698f7.chunk.js.map