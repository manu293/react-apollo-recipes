(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,a,t){},34:function(e,a,t){},46:function(e,a,t){e.exports=t(62)},54:function(e,a,t){},55:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(39),l=t.n(c),s=t(16),i=t(6),o=t(5),m=t(27),u=t(20),d=t.n(u),p=t(7),b=t(8),E=t(10),g=t(9),f=t(11),h=t(64),N=t(26),v=t(25),y=(t(34),t(29),t(17));function x(){var e=Object(y.a)(["\n    fragment LikeRecipe on Recipe {\n      _id\n      likes\n    }\n  "]);return x=function(){return e},e}function k(){var e=Object(y.a)(["\n    fragment CompleteRecipe on Recipe {\n      _id\n      name\n      category\n      description\n      instructions\n      createdDate\n      likes\n      userName\n    }\n  "]);return k=function(){return e},e}var j={recipe:Object(s.b)(k()),likes:Object(s.b)(x())};function w(){var e=Object(y.a)(["\n  mutation($userName: String!, $password: String!) {\n    signInUser(userName: $userName, password: $password) {\n      token\n    }\n  }\n"]);return w=function(){return e},e}function O(){var e=Object(y.a)(["\n  mutation($userName: String!, $email: String!, $password: String!) {\n    signUpUser(userName: $userName, email: $email, password: $password) {\n      token\n    }\n  }\n"]);return O=function(){return e},e}function C(){var e=Object(y.a)(["\n  query($userName: String!) {\n    getUserRecipes(userName: $userName) {\n      _id\n      name\n      description\n      category\n      createdDate\n      userName\n    }\n  }\n"]);return C=function(){return e},e}function S(){var e=Object(y.a)(["\n  query {\n    getCurrentUser {\n      userName\n      joinDate\n      email\n      favorites {\n        _id\n        name\n        description\n        category\n      }\n    }\n  }\n"]);return S=function(){return e},e}function R(){var e=Object(y.a)(["\n  mutation($_id: ID, $userName: String!) {\n    unlikeRecipe(_id: $_id, userName: $userName) {\n      ...LikeRecipe\n    }\n  }\n  ","\n"]);return R=function(){return e},e}function q(){var e=Object(y.a)(["\n  mutation($_id: ID, $userName: String!) {\n    likeRecipe(_id: $_id, userName: $userName) {\n      ...LikeRecipe\n    }\n  }\n  ","\n"]);return q=function(){return e},e}function U(){var e=Object(y.a)(["\n  mutation($_id: ID) {\n    deleteUserRecipe(_id: $_id) {\n      _id\n    }\n  }\n"]);return U=function(){return e},e}function _(){var e=Object(y.a)(["\n  mutation(\n    $name: String!\n    $category: String!\n    $description: String!\n    $instructions: String!\n    $userName: String\n  ) {\n    addRecipe(\n      name: $name\n      category: $category\n      description: $description\n      instructions: $instructions\n      userName: $userName\n    ) {\n      _id\n      name\n      category\n      description\n      instructions\n      userName\n    }\n  }\n"]);return _=function(){return e},e}function D(){var e=Object(y.a)(["\n  query($_id: ID!) {\n    getRecipe(_id: $_id) {\n      ...CompleteRecipe\n    }\n  }\n  ","\n"]);return D=function(){return e},e}function $(){var e=Object(y.a)(["\n  query {\n    getAllRecipes {\n      ...CompleteRecipe\n    }\n  }\n  ","\n"]);return $=function(){return e},e}function F(){var e=Object(y.a)(["\n  query($searchTerm: String) {\n    searchRecipes(searchTerm: $searchTerm) {\n      _id\n      name\n      description\n      category\n    }\n  }\n"]);return F=function(){return e},e}var L,T=Object(s.b)(F()),I=Object(s.b)($(),j.recipe),P=Object(s.b)(D(),j.recipe),A=Object(s.b)(_()),M=Object(s.b)(U()),J=Object(s.b)(q(),j.likes),H=Object(s.b)(R(),j.likes),Y=Object(s.b)(S()),Q=Object(s.b)(C()),V=Object(s.b)(O()),B=Object(s.b)(w()),G=(t(54),function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(E.a)(this,Object(g.a)(a).call(this,e))).displayIcons={primary:"icon-bell",info:"icon-help-circle",success:"icon-check-circle",warning:"icon-alert-triangle",danger:"icon-slash"},t}return Object(f.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.props,a=e.type,t=e.message;return r.a.createElement("div",{className:"alert alert-".concat(a," alert-dismissible fade show text-center margin-bottom-1x")},r.a.createElement("span",{className:"alert-close","data-dismiss":"alert"}),r.a.createElement("i",{className:this.displayIcons[a]}),"\xa0\xa0",r.a.createElement("span",{className:"text-medium"},t))}}]),a}(n.Component)),z=(t(55),function(e){function a(){return Object(p.a)(this,a),Object(E.a)(this,Object(g.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.bcrumbs;return r.a.createElement("div",{className:"page-title"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"column"},r.a.createElement("h1",null,a)),r.a.createElement("div",{className:"column"},r.a.createElement("ul",{className:"breadcrumbs"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",{className:"separator"},"\xa0"),r.a.createElement("li",null,t)))))}}]),a}(n.Component)),K={userName:"",email:"",password:"",confirmPassword:"",errMessage:""},W=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(E.a)(this,Object(g.a)(a).call(this,e))).clearState=function(){t.setState(Object(v.a)({},K))},t.handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(N.a)({},n,r))},t.handleSubmit=function(e,a){var n=t.props,r=n.history,c=n.refetch;e.preventDefault(),a().then((function(e){var a;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.data,localStorage.setItem("token",a.signInUser.token),t.next=4,d.a.awrap(c());case 4:case"end":return t.stop()}}))})).catch((function(e){var a=e.graphQLErrors.map((function(e){return e.message}));t.setState({errMessage:a[0]})})),t.clearState(),r.push("/")},t.state=Object(v.a)({},K),t}return Object(f.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.userName,n=a.email,c=a.password,l=a.confirmPassword,s=a.errMessage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{title:"Register Account",bcrumbs:"Register/Sign Up"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(h.a,{mutation:V,variables:{userName:t,email:n,password:c}},(function(a,i){i.data;var m=i.loading,u=i.error;return r.a.createElement("form",{className:"card",style:{marginLeft:"400px",marginRight:"400px"},onSubmit:function(t){return e.handleSubmit(t,a)}},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group input-group"},r.a.createElement("input",{className:"form-control",type:"userName",name:"userName",placeholder:"UserName",autoComplete:"off",required:!0,value:t,onChange:e.handleChange}),r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"icon-user"}))),r.a.createElement("div",{className:"form-group input-group"},r.a.createElement("input",{className:"form-control",type:"email",name:"email",placeholder:"Email",autoComplete:"off",value:n,required:!0,onChange:e.handleChange}),r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"icon-arrow-right-circle"}))),r.a.createElement("div",{className:"form-group input-group"},r.a.createElement("input",{className:"form-control",type:"password",name:"password",placeholder:"Password",autoComplete:"off",value:c,required:!0,onChange:e.handleChange}),r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"icon-lock"}))),r.a.createElement("div",{className:"form-group input-group"},r.a.createElement("input",{className:"form-control",type:"password",name:"confirmPassword",placeholder:"Confirm Password",autoComplete:"off",value:l,required:!0,onChange:e.handleChange}),r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"icon-lock"}))),r.a.createElement("div",{className:"d-flex flex-wrap justify-content-between padding-bottom-1x"},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{className:"custom-control-input",type:"checkbox",id:"remember_me",defaultChecked:!0}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"remember_me"},"Remember me")),r.a.createElement("button",{className:"btn btn-primary margin-bottom-none",type:"submit",disabled:m||c!==l},"SignUp")),r.a.createElement("div",{className:"d-flex flex-wrap justify-content-between padding-bottom-1x"},r.a.createElement("h4",{className:"margin-top-1x"},"Already have an account"," ",r.a.createElement(o.b,{to:"/signin",style:{textDecoration:"none"}},"Login Here")))),u?r.a.createElement(G,{type:"danger",message:s}):"")})))))}}]),a}(n.Component),X=Object(m.g)(W),Z={userName:"pete",password:"pete123",errMessage:""},ee=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(E.a)(this,Object(g.a)(a).call(this,e))).clearState=function(){t.setState(Object(v.a)({},Z))},t.handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(N.a)({},n,r))},t.handleSubmit=function(e,a){var n=t.props,r=n.history,c=n.refetch;e.preventDefault(),a().then((function(e){var a;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.data,localStorage.setItem("token",a.signInUser.token),t.next=4,d.a.awrap(c());case 4:case"end":return t.stop()}}))})).catch((function(e){var a=e.graphQLErrors.map((function(e){return e.message}));t.setState({errMessage:a[0]})})),t.clearState(),r.push("/")},t.state=Object(v.a)({},Z),t}return Object(f.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.userName,n=a.password,c=a.errMessage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{title:"Login",bcrumbs:"Login"}),r.a.createElement("div",{className:"container padding-bottom-3x mb-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6",style:{marginLeft:"300px"}},r.a.createElement(h.a,{mutation:B,variables:{userName:t,password:n}},(function(a,l){l.data,l.loading;var s=l.error;return r.a.createElement("form",{className:"card",onSubmit:function(t){return e.handleSubmit(t,a)}},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row margin-bottom-1x"},r.a.createElement("div",{className:"col"},r.a.createElement("h4",null,"New Here, Just take a moment to"," ",r.a.createElement(o.b,{to:"/signup",style:{textDecoration:"none"}},"Sign Up")))),r.a.createElement("h4",{className:"margin-bottom-1x"},"Or use the form below to Login"),r.a.createElement("div",{className:"form-group input-group"},r.a.createElement("input",{className:"form-control",type:"userName",name:"userName",placeholder:"Username",value:t,onChange:e.handleChange,required:!0}),r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"icon-user"}))),r.a.createElement("div",{className:"form-group input-group"},r.a.createElement("input",{className:"form-control",type:"password",name:"password",placeholder:"Password",value:n,onChange:e.handleChange,required:!0}),r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"icon-lock"}))),r.a.createElement("div",{className:"d-flex flex-wrap justify-content-between padding-bottom-1x"},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{className:"custom-control-input",type:"checkbox",id:"remember_me",defaultChecked:!0}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"remember_me"},"Remember me")),r.a.createElement("a",{className:"navi-link",href:"account-password-recovery.html"},"Forgot password?")),r.a.createElement("div",{className:"text-center text-sm-right"},r.a.createElement("button",{className:"btn btn-primary margin-bottom-none",type:"submit"},"Login"))),s?r.a.createElement(G,{type:"danger",message:c}):"")}))))))}}]),a}(n.Component),ae=Object(m.g)(ee),te=(t(60),function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"fw-section margin-top-3x",style:{backgroundImage:"url(/img/404-bg.png)"}},r.a.createElement("h1",{className:"display-404 text-center"},"404")),r.a.createElement("div",{className:"container padding-bottom-3x mb-1"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"Page Not Found"),r.a.createElement("p",null,"It seems we can\u2019t find the page you are looking for."," ",r.a.createElement(o.b,{to:"/"},"Go back to Homepage")))))}),ne=(t(61),function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(E.a)(this,Object(g.a)(a).call(this,e))).handleSignOut=function(e,a){localStorage.setItem("token",""),e.resetStore(),a.push("/")},t.renderHeader=function(){var e=t.props,a=e.session,n=e.history;return null!==a.getCurrentUser?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"toolbar-item hidden-on-mobile"},r.a.createElement(o.b,{to:"/recipe/add"},r.a.createElement("div",null,r.a.createElement("i",{className:"icon-bookmark"}),r.a.createElement("span",{className:"text-label"},"Add Recipe")))),r.a.createElement("div",{className:"toolbar-item hidden-on-mobile"},r.a.createElement(o.b,{to:"/profile"},r.a.createElement("div",null,r.a.createElement("i",{className:"icon-home"}),r.a.createElement("span",{className:"text-label"},"Profile")))),r.a.createElement("div",{className:"toolbar-item hidden-on-mobile"},r.a.createElement(i.a,null,(function(e){return r.a.createElement(o.b,{to:"/",onClick:function(){return t.handleSignOut(e,n)}},r.a.createElement("div",null," ",r.a.createElement("i",{className:"icon-log-out"}),r.a.createElement("span",{className:"text-label"},"LogOut")))})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"toolbar-item hidden-on-mobile"},r.a.createElement(o.b,{to:"/signup"},r.a.createElement("div",null,r.a.createElement("i",{className:"icon-user-plus"}),r.a.createElement("span",{className:"text-label"},"Sign Up"))),r.a.createElement("div",{className:"toolbar-dropdown text-center px-3"},r.a.createElement("p",{className:"text-xs mb-3 pt-2"},"Sign up to join our online community and to get access to recipies and to post new ones."),r.a.createElement(o.b,{className:"btn btn-primary btn-sm btn-block",to:"/signup",style:{textDecoration:"none"}},"Sign Up"),r.a.createElement("p",{className:"text-xs text-muted mb-2"},"Existing Customer?\xa0",r.a.createElement(o.b,{to:"/signin",style:{textDecoration:"none"}},"Login")))),r.a.createElement("div",{className:"toolbar-item hidden-on-mobile"},r.a.createElement(o.b,{to:"/signin"},r.a.createElement("div",null,r.a.createElement("i",{className:"icon-log-in"}),r.a.createElement("span",{className:"text-label"},"Sign In"))),r.a.createElement("div",{className:"toolbar-dropdown text-center px-3"},r.a.createElement("p",{className:"text-xs mb-3 pt-2"},"Login to bookmark recipies , to like and share the recipies and to do much more."),r.a.createElement(o.b,{className:"btn btn-primary btn-sm btn-block",to:"/signin",style:{textDecoration:"none"}},"LogIn"),r.a.createElement("p",{className:"text-xs text-muted mb-2"},"New customer?\xa0",r.a.createElement(o.b,{to:"/signup",style:{textDecoration:"none"}},"Register")))))},t.handleSubmit=function(e,a,n){var r,c,l;return d.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return r=t.state.searchTerm,e.preventDefault(),s.next=4,d.a.awrap(a.query({query:T,variables:{searchTerm:r}}));case 4:c=s.sent,l=c.data,n.push({pathname:"/search/recipe",state:[{searchResult:l},{searchTerm:r}]});case 7:case"end":return s.stop()}}))},t.state={searchTerm:""},t}return Object(f.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this,a=this.state.searchTerm,t=this.props.history;return r.a.createElement("header",{className:"site-header navbar-sticky"},r.a.createElement("div",{className:"topbar d-flex justify-content-between"},r.a.createElement("div",{className:"site-branding d-flex"},r.a.createElement(o.b,{className:"site-logo align-self-center",to:"/"},r.a.createElement("img",{src:"/img/recipe_logo.png",style:{width:"130px",height:"50px"},alt:"RecipeShop"}))),r.a.createElement(i.a,null,(function(n){return r.a.createElement("div",{className:"search-box-wrap d-flex"},r.a.createElement("div",{className:"search-box-inner align-self-center"},r.a.createElement("div",{className:"search-box d-flex"},r.a.createElement("form",{className:"input-group",onSubmit:function(a){return e.handleSubmit(a,n,t)}},r.a.createElement("input",{className:"form-control",type:"search",name:"search",value:a,placeholder:"Search for recipies",onChange:function(a){return e.setState({searchTerm:a.target.value})}})))))})),r.a.createElement("div",{className:"toolbar d-flex"},this.renderHeader())))}}]),a}(n.Component)),re=Object(m.g)(ne),ce=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(E.a)(this,Object(g.a)(a).call(this,e))).handleClick=function(e,a){t.setState((function(e){return{liked:!e.liked}}),(function(){return t.handleLikes(e,a)}))},t.handleLikes=function(e,a){t.state.liked?e():a()},t.state={curUser:"",liked:!1},t}return Object(f.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){if(this.props.session.getCurrentUser){var e=this.props.session.getCurrentUser,a=e.userName,t=e.favorites,n=this.props.match.params._id,r=t.findIndex((function(e){return e._id===n}))>-1;this.setState({curUser:a,liked:r})}}},{key:"render",value:function(){var e=this,a=this.state,t=a.curUser,n=a.liked,c=this.props.match.params._id;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{title:"Your recipe is ready",bcrumbs:"Recipe Page"}),r.a.createElement(h.b,{query:P,variables:{_id:c}},(function(a,l,s){if(l)return r.a.createElement("div",null,"Loading");if(s)return r.a.createElement("div",null,"Error");if(void 0!==a.data){var i=a.data.getRecipe,m=i.category,u=i.createdDate,d=i.description,p=i.instructions,b=i.likes,E=i.name,g=i.userName,f=new Date(u),N=f.getUTCDate(),v=f.getUTCMonth()+1,y=f.getUTCFullYear();return r.a.createElement("div",{className:"container padding-bottom-3x mb-2"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-xl-9 col-lg-8 order-lg-2"},r.a.createElement("ul",{className:"post-meta mb-4"},r.a.createElement("li",null,r.a.createElement("i",{className:"icon-clock"}),r.a.createElement("span",{className:"navi-link"},"".concat(N," - ").concat(v," - ").concat(y))),r.a.createElement("li",null,r.a.createElement("i",{className:"icon-user"}),r.a.createElement(o.b,{to:"/profile",className:"navi-link"},g||"John Doe")),r.a.createElement("li",null,r.a.createElement("i",{className:"icon-tag"}),r.a.createElement("span",{className:"navi-link"},m)),r.a.createElement("li",null,r.a.createElement("i",{className:"icon-heart"}),r.a.createElement("span",{className:"navi-link"},b))),r.a.createElement("h2",{className:"pt-4"},E),r.a.createElement("p",{className:"pt-3"},d),r.a.createElement("div",{className:"row pt-3 pb-2"},r.a.createElement("div",{className:"col-xl-10 offset-xl-1"},r.a.createElement("blockquote",{className:"margin-top-1x margin-bottom-1x"},r.a.createElement("i",{className:"icon-bell"}," Instructions "),r.a.createElement("p",{className:"pt-4"},p)))),r.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center pt-3 pb-4"},r.a.createElement("div",{className:"pb-2"},r.a.createElement("span",{className:"text-sm text-muted navi-link"},"#".concat(m))),t?r.a.createElement("div",{className:"pb-2"},r.a.createElement("span",{className:"d-inline-block align-middle text-sm text-muted"},"Like post:\xa0\xa0\xa0"),r.a.createElement(h.a,{mutation:H,variables:{_id:c,userName:t},refetchQueries:[{query:I},{query:Y},{query:Q,variables:{userName:t}}]},(function(a){return r.a.createElement(h.a,{mutation:J,variables:{_id:c,userName:t},refetchQueries:[{query:I},{query:Y},{query:Q,variables:{userName:t}}]},(function(t){return r.a.createElement("span",{className:"social-button shape-rounded",style:n?{cursor:"pointer",color:"#0055ff"}:{cursor:"pointer"},"data-toggle":"tooltip","data-placement":"top",title:"Like this post",onClick:function(){return e.handleClick(t,a)}},r.a.createElement("i",{className:"icon-heart "}))}))}))):null),r.a.createElement("div",{className:"entry-navigation"},r.a.createElement("div",{className:"column text-left"},r.a.createElement("div",{className:"btn btn-outline-secondary btn-sm",disabled:!0},r.a.createElement("i",{className:"icon-arrow-left"}),"\xa0Prev")),r.a.createElement("div",{className:"column"},r.a.createElement(o.b,{className:"btn btn-outline-secondary view-all",to:"/","data-toggle":"tooltip","data-placement":"top",title:"All posts"},r.a.createElement("i",{className:"icon-menu"}))),r.a.createElement("div",{className:"column text-right"},r.a.createElement("div",{className:"btn btn-outline-secondary btn-sm",disabled:!0},"Next\xa0",r.a.createElement("i",{className:"icon-arrow-right"})))))))}return null})))}}]),a}(n.Component),le=Object(m.g)(ce),se=function(e){return function(a){return function(t){return r.a.createElement(h.b,{query:Y},(function(n,c,l){return c?r.a.createElement("div",null,"Loading"):l?r.a.createElement("div",null,"Error ..."):e(n.data)?r.a.createElement(a,t):r.a.createElement(m.a,{to:"/"})}))}}},ie={name:"",description:"",instructions:"",category:"Breakfast",userName:""},oe=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(E.a)(this,Object(g.a)(a).call(this,e))).clearState=function(){t.setState(Object(v.a)({},ie))},t.handleSubmit=function(e,a){var n=t.props.history;e.preventDefault(),a().then((function(e){e.data;t.clearState(),n.push("/")})),n.push("/")},t.handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(N.a)({},n,r))},t.state=Object(v.a)({},ie),t}return Object(f.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){this.setState({userName:this.props.session.getCurrentUser.userName})}},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.description,c=a.instructions,l=a.category,s=a.userName;return r.a.createElement(h.a,{mutation:A,variables:{name:t,description:n,instructions:c,category:l,userName:s},refetchQueries:[{query:I},{query:Q,variables:{userName:s}}]},(function(a,s){s.data;var i=s.loading;s.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{title:"Add and Share your recipes",bcrumbs:"Add Recipes"}),r.a.createElement("div",{className:"container padding-bottom-3x"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("form",{className:"row",onSubmit:function(t){return e.handleSubmit(t,a)}},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Recipe Name"),r.a.createElement("input",{className:"form-control form-control-rounded",type:"text",name:"name",id:"name",value:t,onChange:e.handleChange,required:!0}))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"description"},"Recipe Description"),r.a.createElement("input",{className:"form-control form-control-rounded",type:"text",name:"description",id:"description",value:n,onChange:e.handleChange,required:!0}))),r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"category"},"Recipe Time"),r.a.createElement("select",{className:"form-control form-control-rounded",id:"category",name:"category",value:l,onChange:e.handleChange},r.a.createElement("option",null,"Breakfast"),r.a.createElement("option",null,"Lunch"),r.a.createElement("option",null,"Snacks"),r.a.createElement("option",null,"Dinner")))),r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"help_question"},"Recipe Instructions "),r.a.createElement("textarea",{className:"form-control form-control-rounded",id:"instructions",name:"instructions",value:c,rows:8,required:!0,onChange:e.handleChange}))),r.a.createElement("div",{className:"col-12 text-right"},r.a.createElement("button",{disabled:i,className:"btn btn-primary btn-rounded",type:"submit"},"Add Recipe"))))))}))}}]),a}(n.Component),me=se((function(e){return e&&e.getCurrentUser}))(Object(m.g)(oe)),ue=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(E.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(c)))).renderSearch=function(e){var a=e.searchRecipes;return 0===a.length?r.a.createElement("img",{src:"/img/noSearch.png",alt:"No Search Result"}):r.a.createElement(r.a.Fragment,null,a.map((function(e,a){var t=e.category,n=e._id,c=e.description,l=e.name;return r.a.createElement("div",{className:a%2===0?"card mb-4 mt-4":"card  bg-secondary mb-4 mt-4",key:n},r.a.createElement("div",{className:"card-body"},r.a.createElement("span",{className:"badge badge-warning"},t),r.a.createElement("div",{className:"pt-3"},r.a.createElement("h6",null,r.a.createElement(o.b,{className:"navi-link text-gray-dark",to:"/recipes/".concat(n)},l)),r.a.createElement("p",null,c))))})))},t}return Object(f.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.props.location.state[0].searchResult,a=this.props.location.state[1].searchTerm;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{title:"Search Result for: ".concat(a),bcrumbs:a}),r.a.createElement("div",{className:"container padding-bottom-3x mb-2"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-xl-9 col-lg-8"},this.renderSearch(e)))))}}]),a}(n.Component),de=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(E.a)(this,Object(g.a)(a).call(this,e))).renderFavorites=function(e){return 0===e.length?r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"No Favorite Recipe Found"),r.a.createElement("p",{className:"pt-4"},"It seems we can\u2019t find any of your favorite recipes."," ",r.a.createElement(o.b,{to:"/"},"Go back to Homepage"),r.a.createElement("br",null),"To add some of the recipes to your favorites")):e.map((function(e,a){var t=e._id,n=e.name,c=e.description,l=e.category;return r.a.createElement("div",{className:"card mb-4 ".concat(a%2===0?" bg-secondary":""),key:t},r.a.createElement("div",{className:"card-body"},r.a.createElement("span",{className:"badge badge-warning"},l),r.a.createElement("div",{className:"pt-3"},r.a.createElement("h6",null,r.a.createElement(o.b,{className:"navi-link text-gray-dark",to:"/recipes/".concat(t)},n)),r.a.createElement("p",null,c))))}))},t.handleDelete=function(e){window.confirm("Are you sure you want to delete the recipe ? ")&&e()},t.renderUserRecipeItems=function(e){return e.map((function(e,a){var n=e._id,c=e.name,l=e.description,s=e.category,i=e.userName;return r.a.createElement("div",{className:"card  mb-4 ".concat(a%2===0?" bg-secondary":""),key:n},r.a.createElement("div",{className:"card-body"},r.a.createElement("span",{className:"badge badge-primary"},s),r.a.createElement(h.a,{mutation:M,variables:{_id:n},refetchQueries:[{query:Q,variables:{userName:i}},{query:Y},{query:I}]},(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.a.createElement("span",{className:"badge badge-danger",onClick:function(){return t.handleDelete(e)},style:{float:"right",cursor:"pointer"}},a.loading?r.a.createElement("div",{className:"spinner-border spinner-border-sm text-white mr-2",role:"status"}):"Delete Post")})),r.a.createElement("div",{className:"pt-3"},r.a.createElement("h6",null,r.a.createElement(o.b,{className:"navi-link text-gray-dark",to:"/recipes/".concat(n)},c)),r.a.createElement("p",null,l))))}))},t.renderUserRecipe=function(e){return r.a.createElement(h.b,{query:Q,variables:{userName:e}},(function(e){var a=e.data,n=e.loading,c=e.error;return n?r.a.createElement("div",null,"Loading..."):c?r.a.createElement("div",null,"Error...."):0===a.getUserRecipes.length?r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"You have not added any recipes yet!"),r.a.createElement("p",{className:"pt-4"},"Just take some time to add your favorite recipe and share it with millions worldwide. ",r.a.createElement(o.b,{to:"/recipe/add"},"Go back to Homepage"))):t.renderUserRecipeItems(a.getUserRecipes)}))},t.state={renderTabs:"profile"},t}return Object(f.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this,a=this.props.session.getCurrentUser,t=this.state.renderTabs,n=a.email,c=a.favorites,l=a.joinDate,s=a.userName,i=new Date(l),o=i.getUTCDate(),m=i.getUTCFullYear(),u=["January","February","March","April","May","June","July","August","September","October","November","December"][i.getMonth()],d=s.split(" "),p=d[0],b=d[1]||"Doe";return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{title:"Profile page for: ".concat(p," ").concat(b),bcrumbs:"My Profile"}),r.a.createElement("div",{className:"container padding-bottom-3x mb-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("aside",{className:"user-info-wrapper"},r.a.createElement("div",{className:"user-cover",style:{backgroundImage:"url(img/account/user-cover-img.jpg)"}},r.a.createElement("div",{className:"info-label","data-toggle":"tooltip",title:"You currently have 290 Reward Points to spend"},r.a.createElement("i",{className:"icon-award"}),"Prime Recipe Member")),r.a.createElement("div",{className:"user-info"},r.a.createElement("div",{className:"user-avatar"},r.a.createElement("span",{className:"edit-avatar"}),r.a.createElement("img",{src:"/img/profilePic.png",alt:"User"})),r.a.createElement("div",{className:"user-data"},r.a.createElement("h4",{className:"h5"},"".concat(p," ").concat(b)),r.a.createElement("span",null,"Joined ".concat(u," ").concat(o,", ").concat(m))))),r.a.createElement("nav",{className:"list-group"},r.a.createElement("span",{className:"list-group-item arrow  ".concat("profile"===t?"active":""),onClick:function(){e.setState({renderTabs:"profile"})}},r.a.createElement("i",{className:"icon-user"}),"Profile"),r.a.createElement("span",{className:"list-group-item with-badge arrow ".concat("favorites"===t?"active":""),onClick:function(){e.setState({renderTabs:"favorites"})}},r.a.createElement("i",{className:"icon-heart"}),"Favorites",r.a.createElement("span",{className:"badge badge-default badge-pill"},c.length)),r.a.createElement("span",{className:"list-group-item with-badge arrow ".concat("userRecipe"===t?"active":""),onClick:function(){e.setState({renderTabs:"userRecipe"})}},r.a.createElement("i",{className:"icon-tag"}),"Your Recipes"))),r.a.createElement("div",{className:"col-lg-8 ".concat("profile"===t?" show":" hidden")},r.a.createElement("div",{className:"padding-top-2x mt-2 hidden-lg-up"}),r.a.createElement("form",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"account-fn"},"First Name"),r.a.createElement("input",{className:"form-control",type:"text",id:"account-fn",defaultValue:p,required:!0}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"account-ln"},"Last Name"),r.a.createElement("input",{className:"form-control",type:"text",id:"account-ln",defaultValue:b,required:!0}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"account-email"},"E-mail Address"),r.a.createElement("input",{className:"form-control",type:"email",id:"account-email",defaultValue:n,disabled:!0}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"account-phone"},"Phone Number"),r.a.createElement("input",{className:"form-control",type:"text",id:"account-phone",defaultValue:"+7 (805) 348 95 72",required:!0}))),r.a.createElement("div",{className:"col-12"},r.a.createElement("hr",{className:"mt-2 mb-3"}),r.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},r.a.createElement("div",{className:"custom-control custom-checkbox d-block"},r.a.createElement("input",{className:"custom-control-input",type:"checkbox",id:"subscribe_me",defaultChecked:!0,disabled:!0}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"subscribe_me"},"Subscribed to new recipe newsletter")))))),r.a.createElement("div",{className:"col-lg-8 ".concat("favorites"===t?" show":" hidden")},this.renderFavorites(c)),r.a.createElement("div",{className:"col-lg-8 ".concat("userRecipe"===t?" show":" hidden")},this.renderUserRecipe(s)))))}}]),a}(n.Component),pe=se((function(e){return e&&e.getCurrentUser}))(de),be=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(E.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(c)))).searchCategory=function(e,a,t){var n,r,c;return d.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,d.a.awrap(e.query({query:T,variables:{category:a}}));case 2:n=l.sent,r=n.data,c=a,t.push({pathname:"/search/recipe",state:[{searchResult:r},{searchTerm:c}]});case 6:case"end":return l.stop()}}))},t.renderRecipes=function(e,a){return e.map((function(e){var n=e._id,c=e.name,l=e.description,s=e.category,m=e.createdDate,u=e.userName,d=new Date(m),p=d.getUTCDate(),b=d.getUTCMonth()+1,E=d.getUTCFullYear();return r.a.createElement("div",{className:"grid-item pt-3 pb-3",key:n},r.a.createElement("div",{className:"blog-post"},r.a.createElement("div",{className:"post-body"},r.a.createElement("ul",{className:"post-meta"},r.a.createElement("li",null,r.a.createElement("i",{className:"icon-clock"}),r.a.createElement("span",{className:"navi-link"},"".concat(p," - ").concat(b," - ").concat(E))),r.a.createElement("li",null,r.a.createElement("i",{className:"icon-user"}),r.a.createElement(o.b,{to:"/profile",className:"navi-link"},u||"John Doe")),r.a.createElement("li",null,r.a.createElement(i.a,null,(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"icon-tag"}),r.a.createElement("span",{className:"navi-link",onClick:function(){return t.searchCategory(e,s,a)}},s))})))),r.a.createElement("h3",{className:"post-title"},r.a.createElement(o.b,{to:"/recipes/".concat(n)},c)),r.a.createElement("p",null,l," ",r.a.createElement(o.b,{to:"/recipes/".concat(n)},"Read instructions")))))}))},t}return Object(f.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.session,n=a.history;return r.a.createElement("div",{className:"App"},r.a.createElement(re,{session:t}),r.a.createElement(h.b,{query:I},(function(a,t,c,l){if(e.refetch=l,t)return r.a.createElement("div",null,"Loading!!!!");if(c)return r.a.createElement("div",null,"Error");if(void 0!==a.data){var s=a.data.getAllRecipes;return r.a.createElement("div",{className:"container padding-bottom-3x padding-top-3x mb-1"},e.renderRecipes(s,n))}return null})))}}]),a}(n.Component),Ee=Object(m.g)(be),ge=new s.a({uri:"/graphql",fetchOptions:{credentials:"include"},request:function(e){var a=localStorage.getItem("token");e.setContext({headers:{authorization:a}})},onError:function(e){e.networkError}}),fe=(L=function(e){var a=e.refetch,t=e.session;return r.a.createElement(o.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(Ee,{session:t,refetch:a})}}),r.a.createElement(m.b,{path:"/signup",exact:!0,render:function(){return r.a.createElement(X,{refetch:a})}}),r.a.createElement(m.b,{path:"/signin",exact:!0,render:function(){return r.a.createElement(ae,{refetch:a})}}),r.a.createElement(m.b,{path:"/recipe/add",exact:!0,render:function(){return r.a.createElement(me,{session:t})}}),r.a.createElement(m.b,{path:"/search/recipe",exact:!0,component:ue}),r.a.createElement(m.b,{path:"/recipes/:_id",render:function(){return r.a.createElement(le,{session:t})}}),r.a.createElement(m.b,{path:"/profile",render:function(){return r.a.createElement(pe,{session:t})}}),r.a.createElement(m.b,{path:"*",component:te})))},function(e){return r.a.createElement(h.b,{query:Y},(function(a){var t=a.data,n=a.loading,c=a.refetch;return n?null:r.a.createElement(L,Object.assign({},e,{refetch:c,session:t}))}))});l.a.render(r.a.createElement(i.b,{client:ge},r.a.createElement(fe,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.2b14db01.chunk.js.map