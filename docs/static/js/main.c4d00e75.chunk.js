(this.webpackJsonplayout=this.webpackJsonplayout||[]).push([[0],{28:function(e,t,n){e.exports=n(55)},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(25),c=n.n(s),o=(n(33),n(2)),i=n(3),l=n(5),u=n(4),d=(n(34),n(18)),m=n(14),h=n.n(m),p=(n(36),n(7)),_=n(9),f=n(12),g=(n(42),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).flip=function(){var t=document.querySelector(".cards__list");t.classList.add("cards__list_hidden"),setTimeout((function(){var n=e.props.type;e.props.setType("q"===n?"a":"q"),t.classList.remove("cards__list_hidden")}),300)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.question,a=t.num,s=t.answer,c="cards__delete"+(~a?"":"_hidden");return r.a.createElement("li",{className:"cards__item",onClick:this.flip},r.a.createElement("p",{id:"card-".concat(a),className:"cards__item-text"},"q"===this.props.type?n:s),r.a.createElement(p.a,{className:"cards__flip",icon:_.d}),r.a.createElement(p.a,{className:c,icon:f.b,onClick:function(t){return e.props.deleteCard(t,e.props.num)}}))}}]),n}(r.a.Component));var v=function(e,t){var n=this;if(!(t.children.length<=1)){var a=getComputedStyle(t).transitionProperty;t.style.transitionProperty=a.replace(/(margin-left,|, margin-left|margin-left)/,"");for(var r=e.changedTouches[0].clientX,s=Math.abs(parseFloat(getComputedStyle(t).marginLeft)),c=parseFloat(getComputedStyle(t).width),o=this.props.cards.length,i=this.props.currCard,l=null,u=r,d=function(e){var n=e.changedTouches[0].clientX;Math.abs(n-r)<30||(t.addEventListener("touchend",_),t.style.marginLeft="".concat(-s+n-r,"px"),l=n>u?-1:1,u=n)},m=[],h=0;h<o;++h)m[h]=h*c/o;var p=m[o-1],_=function e(c){var u=c.changedTouches[0].clientX;t.style.transitionProperty=a,1===l&&r>u?(t.style.marginLeft="-".concat(m[i+1]||p,"px"),i=Math.min(i+1,o-1)):-1===l&&u>r?(t.style.marginLeft="-".concat(m[i-1]||0,"px"),i=Math.max(i-1,0)):t.style.marginLeft="-".concat(s,"px"),n.props.setCurrCard(i),t.removeEventListener("touchmove",d),t.removeEventListener("touchend",e)};t.addEventListener("touchmove",d)}},y=(n(43),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"".concat(this.props.addClass," confirm confirm_hidden")},r.a.createElement("div",{className:"confirm__window"},r.a.createElement("p",{className:"confirm__title"},"Are you sure?"),r.a.createElement("div",{className:"confirm__buttons"},r.a.createElement("button",{className:"confirm__btn confirm__btn_no","data-del":"no"},"Oops! No..."),r.a.createElement("button",{className:"confirm__btn confirm__btn_yes","data-del":"yes"},"Yes!"))))}}]),n}(r.a.Component)),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={cards:e.props.cards},e.deleteCard=function(t,n){t.stopPropagation();var a=document.querySelector(".cards__confirm");a.classList.remove("confirm_hidden");a.addEventListener("click",(function t(r){"BUTTON"===r.target.tagName&&(a.removeEventListener("click",t),a.classList.add("confirm_hidden"),"no"!==r.target.dataset.del&&e.props.delCard(n,!1))}))},e.clear=function(){var t=document.querySelector(".cards__confirm");t.classList.remove("confirm_hidden");t.addEventListener("click",(function n(a){"BUTTON"===a.target.tagName&&(t.removeEventListener("click",n),t.classList.add("confirm_hidden"),"no"!==a.target.dataset.del&&e.props.delCard(null,!0))}))},e.firstCard=function(){if(!e.props.cards.length)return r.a.createElement(g,{question:"Hello! Click to flip!",answer:"Click again!",num:-1,type:e.props.type,setType:e.props.setType})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelector(".cards__list");t.addEventListener("touchstart",(function(n){return v.call(e,n,t)}))}},{key:"genCards",value:h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.cards,e.t0=h.a.keys(t);case 2:if((e.t1=e.t0()).done){e.next=8;break}return n=e.t1.value,e.next=6,r.a.createElement(g,{question:t[n].q,answer:t[n].a,num:n,key:n,deleteCard:this.deleteCard,type:this.props.type,setType:this.props.setType});case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e,this)}))},{key:"move",value:function(e){var t=this.props,n=t.currCard,a=t.setCurrCard,r=t.cards;"left"===e&&0!==n?a(n-1):"right"===e&&n!==r.length-1&&a(n+1)}},{key:"render",value:function(){var e=this,t=this.props.currCard,n=this.props.cards.length,a=document.documentElement.clientWidth,s=-(a>500?500:.9*a)*t+"px";return r.a.createElement("div",{className:"cards"},r.a.createElement("div",{className:"cards__container"},r.a.createElement("ul",{className:"cards__list",style:{marginLeft:s}},this.firstCard(),Object(d.a)(this.genCards()))),r.a.createElement("p",{className:"cards__counter"},"".concat(n?t+1:0," / ").concat(n)),r.a.createElement(p.a,{className:"cards__arrow arrow__right ".concat(t!==n-1&&n?"":"cards__arrow_hidden"),icon:_.b,onClick:function(){return e.move("right")}}),r.a.createElement(p.a,{className:"cards__arrow arrow__left ".concat(0===t?"cards__arrow_hidden":""),icon:_.a,onClick:function(){return e.move("left")}}),r.a.createElement("button",{className:"cards__clear",onClick:this.clear},r.a.createElement(p.a,{icon:f.b}),"\u2002Clear all"),r.a.createElement(y,{addClass:"cards__confirm"}))}}]),n}(r.a.Component),E=(n(44),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).themeClicked=function(t){var n=Number(t.target.dataset.num);e.props.setTheme(n),e.props.setType("q")},e.addTheme=function(){var t=document.querySelector(".menu__add-input");if(t.classList.contains("menu__add-input_show")){var n=t.value;n.length&&(e.props.addTheme(n),t.value="")}t.classList.toggle("menu__add-input_show"),document.querySelector(".menu__add-icon").classList.remove("menu__add-icon_red")},e.addOnInput=function(e){var t=document.querySelector(".menu__add-icon");e.target.value?t.classList.add("menu__add-icon_red"):t.classList.remove("menu__add-icon_red")},e.keyUp=function(t){"Enter"===t.key&&e.addTheme()},e}return Object(i.a)(n,[{key:"genThemes",value:h.a.mark((function e(){var t,n,a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props,n=t.chosenTheme,a=t.themes,e.t0=h.a.keys(a);case 2:if((e.t1=e.t0()).done){e.next=8;break}return s=e.t1.value,e.next=6,r.a.createElement("div",{className:"menu__theme theme ".concat(Number(s)===n?"theme_chosen":""),key:s},r.a.createElement("p",{className:"theme__name","data-num":s,onClick:this.themeClicked},a[s]),r.a.createElement(p.a,{icon:f.b,onClick:this.props.delTheme,className:"theme__del ".concat("0"===s?"theme__del_hidden":"")}));case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e,this)}))},{key:"render",value:function(){var e=this.props.isOpen;return r.a.createElement("div",{className:"menu ".concat(e?"":"menu_hidden")},Object(d.a)(this.genThemes()),r.a.createElement("div",{className:"menu__add"},r.a.createElement("p",{className:"menu__add-icon",onClick:this.addTheme},"+"),r.a.createElement("input",{className:"menu__add-input",onInput:this.addOnInput,onKeyUp:this.keyUp,maxLength:"20"})))}}]),n}(r.a.Component)),b=(n(45),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).clicked=function(t){t.currentTarget.classList.toggle("burger_cross"),document.querySelector(".burger__username").classList.toggle("burger__username_show"),e.props.toggleMenu()},e.cropName=function(e){return e.length<13?e:e.slice(0,11).trim()+"..."},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"burger"},r.a.createElement("div",{className:"burger__icon",onClick:this.clicked},r.a.createElement("div",{className:"burger__line burger__line_top"}),r.a.createElement("div",{className:"burger__line burger__line_center"}),r.a.createElement("div",{className:"burger__line burger__line_center"}),r.a.createElement("div",{className:"burger__line burger__line_bottom"})),r.a.createElement("p",{className:"burger__username"},this.cropName(this.props.name)))}}]),n}(r.a.Component)),N=n(15),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isMenuOpen:!1,chosenTheme:e.props.theme,currCard:0,cardsInfo:JSON.parse(localStorage.getItem("cards")),shuffledThemes:[],type:"q"},e.toggleMenu=function(){e.setState({isMenuOpen:!e.state.isMenuOpen})},e.setType=function(t){e.setState({type:t})},e.setTheme=function(t){e.setState({chosenTheme:t,currCard:0})},e.setCurrCard=function(t){e.setState({currCard:t})},e.updateCards=function(t,n,a){document.querySelector(".loading").classList.remove("loading_hidden"),fetch(e.props.url+e.props.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({info:t,name:e.props.name})}).then((function(e){if(200===e.status)return e.json();document.querySelector(".loading").classList.add("loading_hidden")})).then((function(t){document.querySelector(".loading").classList.add("loading_hidden"),e.setState({cardsInfo:t.info,chosenTheme:n,currCard:a}),localStorage.setItem("cards",JSON.stringify(t.info))}))},e.addTheme=function(t){var n=e.state.cardsInfo;n.push({theme:t,cards:[]}),e.updateCards(n,e.state.chosenTheme,e.state.currCard)},e.delTheme=function(){var t=e.state.cardsInfo.filter((function(t,n){return n!==e.state.chosenTheme}));e.updateCards(t,0,e.state.currCard)},e.shuffleTheme=function(t){var n=e.state,a=n.cardsInfo,r=n.chosenTheme,s=n.shuffledThemes,c=JSON.parse(localStorage.getItem("cards"))[r].cards;if(~s.indexOf(r))s=s.filter((function(e){return e!==r}));else{for(var o=c.length-1;o>0;--o){var i=Math.floor(Math.random()*(o+1)),l=[c[i],c[o]];c[o]=l[0],c[i]=l[1]}s.push(r)}a[r].cards=c,t.currentTarget.classList.toggle("content__shuffle_on"),e.setState({cardsInfo:a,currCard:0,shuffledThemes:s})},e.delCard=function(t,n){var a=e.state,r=a.cardsInfo,s=a.chosenTheme,c=a.currCard;r[s].cards=n?[]:r[s].cards.filter((function(e,n){return n!==Number(t)}));var o=c&&!n?c-1:0;e.updateCards(r,e.state.chosenTheme,o)},e.quit=function(){var e=document.querySelector(".quit__confirm");e.classList.remove("confirm_hidden");e.addEventListener("click",(function t(n){if("BUTTON"===n.target.tagName&&(e.removeEventListener("click",t),e.classList.add("confirm_hidden"),"no"!==n.target.dataset.del)){localStorage.clear();var a=window.location.href.match(/^.+\/#\//);window.location.assign(a[0])}}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){document.querySelector(".loading").classList.add("loading_hidden")}},{key:"render",value:function(){var e=this;if(!this.props.name){var t=window.location.href.match(/^.+\/#\//);return window.location.assign(t[0]),null}var n=this.state.cardsInfo[this.state.chosenTheme].cards.length;return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content__control",onClick:function(){return e.props.setTheme(e.state.chosenTheme)}},r.a.createElement(N.b,{to:"/add",className:"content__add"},"+")),r.a.createElement(w,{cards:this.state.cardsInfo[this.state.chosenTheme].cards,currCard:this.state.currCard,setCurrCard:this.setCurrCard,delCard:this.delCard,type:this.state.type,setType:this.setType}),r.a.createElement(p.a,{icon:_.c,onClick:this.shuffleTheme,className:"content__shuffle ".concat(n>1?"":"content__shuffle_hidden")}),r.a.createElement(b,{toggleMenu:this.toggleMenu,name:this.props.name}),r.a.createElement(E,{isOpen:this.state.isMenuOpen,themes:this.state.cardsInfo.map((function(e){return e.theme})),chosenTheme:this.state.chosenTheme,setTheme:this.setTheme,addTheme:this.addTheme,delTheme:this.delTheme,setType:this.setType}),r.a.createElement("button",{className:"content__quit",onClick:this.quit},"Quit"),r.a.createElement(y,{addClass:"quit__confirm"}))}}]),n}(r.a.Component),k=(n(48),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).validate=function(t){var n=document.querySelector("#q-field").value,a=document.querySelector("#a-field").value;if(!n||!a)return document.querySelector(".adding__warning").classList.remove("adding__warning_hidden"),void t.preventDefault();e.save(n,a)},e.save=function(t,n){var a=e.props.theme,r=JSON.parse(localStorage.getItem("cards"));r[a].cards.push({q:t,a:n}),document.querySelector(".loading").classList.remove("loading_hidden"),fetch(e.props.url+e.props.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({info:r,name:e.props.name})}).then((function(e){return 200===e.status?e.json():void document.querySelector(".loading").classList.add("loading_hidden")})).then((function(e){localStorage.setItem("cards",JSON.stringify(e.info));var t=window.location.href.match(/^.+\/#\//);window.location.assign(t[0]+"content")}))},e.onInput=function(e){var t=document.querySelector(".adding__warning");e.target.value.trim()?t.classList.add("adding__warning_hidden"):t.classList.remove("adding__warning_hidden")},e}return Object(i.a)(n,[{key:"render",value:function(){if(!this.props.id){var e=window.location.href.match(/^.+\/#\//);return window.location.assign(e[0]),null}return r.a.createElement("div",{className:"adding"},r.a.createElement("p",{className:"adding__warning adding__warning_hidden"},"No question or answer!"),r.a.createElement("div",{className:"adding__input input"},r.a.createElement("p",{className:"input__title"},"Add question"),r.a.createElement("textarea",{id:"q-field",className:"input__area",onInput:this.onInput})),r.a.createElement("div",{className:"adding__input input"},r.a.createElement("p",{className:"input__title"},"Add answer"),r.a.createElement("textarea",{id:"a-field",className:"input__area",onInput:this.onInput})),r.a.createElement("button",{onClick:this.validate,className:"adding__save"},"Save"),r.a.createElement(N.b,{to:"/content"},r.a.createElement(p.a,{className:"adding__back",icon:_.a})))}}]),n}(r.a.Component)),O=(n(49),n(50),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).login=function(){var t=document.querySelector('.login__input[type="login"]').value.toLowerCase(),n=document.querySelector('.login__input[type="password"]').value;/^\w{3,}$/.test(t)&&/^\w{6,}$/.test(n)&&(document.querySelector(".loading").classList.remove("loading_hidden"),fetch(e.props.url,{method:"GET"}).then((function(e){return e.json()})).then((function(a){var r=a.find((function(e){return e.name===t}));r?e.checkLogin(r,n):(document.querySelector(".loading").classList.add("loading_hidden"),e.props.showAlert("User not found :("))})))},e.checkLogin=function(t,n){fetch(e.props.url+t.id,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n})}).then((function(e){return e.json()})).then((function(n){if(!n.length)return document.querySelector(".loading").classList.add("loading_hidden"),void e.props.showAlert("User not found :(");e.props.enter(t.name,t.id,n)}))},e.keyUp=function(t){"Enter"===t.key&&t.target.value.length&&e.login()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"auth__form login"},r.a.createElement("div",{className:"login__input-container"},r.a.createElement("input",{className:"login__input",maxLength:"20",minLength:"3",onInput:this.authOnInput,onClick:function(e){return e.preventDefault()},type:"login",placeholder:"login"})),r.a.createElement("div",{className:"login__input-container"},r.a.createElement("input",{className:"login__input",maxLength:"20",minLength:"8",onInput:this.authOnInput,onClick:function(e){return e.preventDefault()},type:"password",placeholder:"password",onKeyUp:this.keyUp})),r.a.createElement("div",{className:"login__buttons"},r.a.createElement("button",{className:"login__btn login__btn_seagreen",onClick:this.login},"Log in"),r.a.createElement("button",{className:"login__btn login__btn_transparent",onClick:function(){return e.props.setWindow("signup")}},"Sign up")))}}]),n}(r.a.Component)),T=(n(51),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).validate=function(){var t=e.checkInput(),n=t.name,a=t.password;n&&(document.querySelector(".loading").classList.remove("loading_hidden"),fetch(e.props.url,{method:"GET"}).then((function(e){return e.json()})).then((function(t){if(t.find((function(e){return e.name===n})))return document.querySelector(".loading").classList.add("loading_hidden"),void e.props.showAlert("User already exists");e.signup(n,a)})))},e.signup=function(t,n){fetch(e.props.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,password:n})}).then((function(e){return e.json()})).then((function(n){e.props.enter(t,n.id,n.info)}))},e.checkInput=function(){var t=document.querySelector('.signup__input[type="login"]').value.toLowerCase(),n=document.querySelectorAll('.signup__input[type="password"]')[0].value,a=document.querySelectorAll('.signup__input[type="password"]')[1].value;return/^\w{3,}$/.test(t)&&/^\w{6,}$/.test(n)&&n===a?{name:t,password:n}:(e.props.showInfo(!/^\w{3,}$/.test(t)||!/^\w{6,}$/.test(n)),n!==a&&document.querySelector(".signup__check").classList.add("signup__check_show"),{name:null,password:null})},e.secondPasswordInput=function(e){var t=document.querySelectorAll('.signup__input[type="password"]')[0].value;e.target.value===t&&document.querySelector(".signup__check").classList.remove("signup__check_show")},e.enter=function(t){"Enter"===t.key&&e.validate()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"auth__form signup"},r.a.createElement(p.a,{icon:_.a,className:"signup__back",onClick:function(){return e.props.setWindow("login")}}),r.a.createElement("div",{className:"signup__input-container"},r.a.createElement("input",{className:"signup__input",maxLength:"20",minLength:"3",onClick:function(e){return e.preventDefault()},type:"login",placeholder:"login"})),r.a.createElement("div",{className:"signup__input-container"},r.a.createElement("input",{className:"signup__input",maxLength:"20",minLength:"8",onClick:function(e){return e.preventDefault()},type:"password",placeholder:"password"})),r.a.createElement("div",{className:"signup__input-container"},r.a.createElement("input",{className:"signup__input",maxLength:"20",minLength:"8",onInput:this.secondPasswordInput,onClick:function(e){return e.preventDefault()},type:"password",placeholder:"confirm password",onKeyUp:this.enter}),r.a.createElement(p.a,{icon:_.e,className:"signup__check signup__check_red"})),r.a.createElement("button",{className:"signup__btn",onClick:this.validate},"Sign up"))}}]),n}(r.a.Component)),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={window:"login"},e.showAlert=function(e){var t=document.querySelector(".alert");t.querySelector(".alert__text").textContent=e,t.classList.add("alert_show")},e.setWindow=function(t){document.querySelector(".auth__info-text").classList.remove("auth__info-text_show");var n=document.querySelector(".auth");n.classList.add("auth_hidden"),setTimeout((function(){e.setState({window:t}),n.classList.remove("auth_hidden")}),300)},e.enter=function(t,n,a){e.props.setUsername(t,n),localStorage.setItem("name",t),localStorage.setItem("id",n),localStorage.setItem("cards",JSON.stringify(a)),window.location.assign(window.location.href+"content")},e.toggleInfo=function(){document.querySelector(".auth__info-text").classList.toggle("auth__info-text_show")},e.showInfo=function(e){e?document.querySelector(".auth__info-text").classList.add("auth__info-text_show"):document.querySelector(".auth__info-text").classList.remove("auth__info-text_show")},e.renderWindow=function(){var t=e.props.url;return"login"===e.state.window?r.a.createElement(O,{setWindow:e.setWindow,enter:e.enter,url:t,showAlert:e.showAlert}):r.a.createElement(T,{setWindow:e.setWindow,enter:e.enter,url:t,showInfo:e.showInfo,showAlert:e.showAlert})},e.setInfoText=function(){return"login"===e.state.window?"If you don't have an account, click sign up.":r.a.createElement("span",null,"Valid characters:",r.a.createElement("br",null),"aA-zZ, 0-9 and _.",r.a.createElement("br",null),"Login should contain at least 3 symbols, password - 6.")},e.setAuthTitle=function(){return"login"===e.state.window?"Authorization":"Registration"},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"auth"},r.a.createElement("p",{className:"auth__title"},this.setAuthTitle()),r.a.createElement("button",{className:"auth__info-btn",onClick:this.toggleInfo},"i"),r.a.createElement("div",{className:"auth__info-text"},this.setInfoText()),this.renderWindow())}}]),n}(r.a.Component),L=(n(52),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading loading_hidden"},r.a.createElement("svg",{viewBox:"0 0 36 36",className:"loading__bar"},r.a.createElement("circle",{id:"segment",cx:"18",cy:"18",r:"15.91549430918954",stroke:"#fff",strokeWidth:"4",fill:"transparent",strokeDasharray:"80 20"})))}}]),n}(r.a.Component)),j=(n(53),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).hide=function(){var e=document.querySelector(".alert__window");e.classList.add("alert__hiding"),setTimeout((function(){document.querySelector(".alert").classList.remove("alert_show"),e.classList.remove("alert__hiding")}),300)},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"".concat(this.props.addClass," alert")},r.a.createElement("div",{className:"alert__window"},r.a.createElement("p",{className:"alert__text"},"Alert!"),r.a.createElement("button",{className:"alert__btn",onClick:this.hide},"ok!")))}}]),n}(r.a.Component)),q=(n(54),n(13)),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={theme:0,username:localStorage.getItem("name"),id:localStorage.getItem("id")},e.setTheme=function(t){e.setState({theme:t})},e.setUsername=function(t,n){e.setState({username:t,id:n})},e.changeColorTheme=function(){document.querySelector(".root").classList.toggle("root_black")},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.url;return r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"container__header"},r.a.createElement("span",{className:"container__header_seagreen"},"Memory")," cards",r.a.createElement(p.a,{icon:f.a,className:"moon",onClick:this.changeColorTheme})),r.a.createElement(L,null),r.a.createElement(j,null),r.a.createElement(q.c,null,r.a.createElement(q.a,{exact:!0,path:"/",render:function(){return r.a.createElement(S,{setUsername:e.setUsername,url:t})}}),r.a.createElement(q.a,{exact:!0,path:"/content",render:function(){return r.a.createElement(C,{setTheme:e.setTheme,theme:e.state.theme,name:e.state.username,id:e.state.id,url:t})}}),r.a.createElement(q.a,{path:"/add",render:function(){return r.a.createElement(k,{theme:e.state.theme,name:e.state.username,id:e.state.id,url:t})}})))}}]),n}(r.a.Component);c.a.render(r.a.createElement(N.a,null,r.a.createElement(I,{url:"https://mc-serv.herokuapp.com/users/"})),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c4d00e75.chunk.js.map