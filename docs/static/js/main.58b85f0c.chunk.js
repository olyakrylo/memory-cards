(this.webpackJsonplayout=this.webpackJsonplayout||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(43),c=n.n(s),i=(n(52),n(2)),o=n(3),l=n(5),u=n(4),d=(n(53),n(21)),m=n(14),p=n.n(m),h=(n(55),n(6)),f=n(9),_=n(12),g=(n(61),n(44)),v=n.n(g),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).openEditing=function(t){t.stopPropagation(),e.props.setEditing(!0)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.question,a=t.num,s=t.answer;n=n.replace(/\n/g,"</br>"),s=s.replace(/\n/g,"<br/>");var c="cards__delete"+(~a?"":"_hidden"),i="cards__edit"+(~a&&!this.props.areShuffled?"":"_hidden");return r.a.createElement("li",{className:"cards__item",onClick:this.props.flip},r.a.createElement("span",{id:"card-".concat(a),className:"cards__item-text"},v()("q"===this.props.type?n:s)),r.a.createElement(h.a,{className:i,icon:_.a,onClick:this.openEditing}),r.a.createElement(h.a,{className:c,icon:_.c,onClick:function(t){return e.props.deleteCard(t,e.props.num)}}))}}]),n}(r.a.Component);var E=function(e,t){var n=this;if(!(t.children.length<=1)){var a=getComputedStyle(t).transitionProperty;t.style.transitionProperty=a.replace(/(margin-left,|, margin-left|margin-left)/,"");for(var r=e.changedTouches[0].clientX,s=Math.abs(parseFloat(getComputedStyle(t).marginLeft)),c=parseFloat(getComputedStyle(t).width),i=this.props.cards.length,o=this.props.currCard,l=null,u=r,d=function(e){var n=e.changedTouches[0].clientX;Math.abs(n-r)<30||(t.addEventListener("touchend",f),t.style.marginLeft="".concat(-s+n-r,"px"),l=n>u?-1:1,u=n)},m=[],p=0;p<i;++p)m[p]=p*c/i;var h=m[i-1],f=function e(c){var u=c.changedTouches[0].clientX;t.style.transitionProperty=a,1===l&&r>u?(t.style.marginLeft="-".concat(m[o+1]||h,"px"),o=Math.min(o+1,i-1)):-1===l&&u>r?(t.style.marginLeft="-".concat(m[o-1]||0,"px"),o=Math.max(o-1,0)):t.style.marginLeft="-".concat(s,"px"),n.props.setCurrCard(o),t.removeEventListener("touchmove",d),t.removeEventListener("touchend",e)};t.addEventListener("touchmove",d)}},w=(n(104),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"".concat(this.props.addClass," confirm confirm_hidden")},r.a.createElement("div",{className:"confirm__window"},r.a.createElement("p",{className:"confirm__title"},"Are you sure?"),r.a.createElement("div",{className:"confirm__buttons"},r.a.createElement("button",{className:"confirm__btn confirm__btn_no","data-del":"no"},"Oops! No..."),r.a.createElement("button",{className:"confirm__btn confirm__btn_yes","data-del":"yes"},"Yes!"))))}}]),n}(r.a.Component)),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={cards:e.props.cards,isCounterInput:!1},e.deleteCard=function(t,n){t.stopPropagation();var a=document.querySelector(".cards__confirm");a.classList.remove("confirm_hidden");a.addEventListener("click",(function t(r){"BUTTON"===r.target.tagName&&(a.removeEventListener("click",t),a.classList.add("confirm_hidden"),"no"!==r.target.dataset.del&&e.props.delCard(n,!1))}))},e.flip=function(){var t=document.querySelector(".cards__list");t.classList.add("cards__list_hidden"),setTimeout((function(){var n=e.props.type;e.props.setType("q"===n?"a":"q"),t.classList.remove("cards__list_hidden")}),300)},e.clear=function(){var t=document.querySelector(".cards__confirm");t.classList.remove("confirm_hidden");t.addEventListener("click",(function n(a){"BUTTON"===a.target.tagName&&(t.removeEventListener("click",n),t.classList.add("confirm_hidden"),"no"!==a.target.dataset.del&&e.props.delCard(null,!0))}))},e.firstCard=function(){if(!e.props.cards.length)return r.a.createElement(y,{question:"Hello! Click to flip!",answer:"Click again!",num:-1,type:e.props.type,flip:e.flip,setEditing:e.props.setEditing})},e.renderCounter=function(t,n){var a=!!e.props.cards.length;if(e.state.isCounterInput&&a)return r.a.createElement("input",{className:"counter__input",onKeyUp:e.counterInput,autoFocus:!0,onBlur:function(){return e.setState({isCounterInput:!1})}});var s=a?function(){return e.setState({isCounterInput:!0})}:null;return r.a.createElement("span",{onClick:s},t?n+1:0)},e.counterInput=function(t){var n=isNaN(Number(t.target.value))?null:Number(t.target.value)||1;!n||n<1||n>e.props.cards.length?t.target.classList.add("counter__input_wrong"):(t.target.classList.remove("counter__input_wrong"),"Enter"===t.key&&(e.setState({isCounterInput:!1}),e.props.setCurrCard(n-1)))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelector(".cards__list");t.addEventListener("touchstart",(function(n){return E.call(e,n,t)}))}},{key:"genCards",value:p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.cards,e.t0=p.a.keys(t);case 2:if((e.t1=e.t0()).done){e.next=8;break}return n=e.t1.value,e.next=6,r.a.createElement(y,{question:t[n].q,answer:t[n].a,num:n,key:n,flip:this.flip,areShuffled:this.props.areShuffled,deleteCard:this.deleteCard,type:this.props.type,setEditing:this.props.setEditing});case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e,this)}))},{key:"move",value:function(e){var t=this,n=0;"a"===this.props.type&&(this.flip(),n=300),setTimeout((function(){var n=t.props,a=n.currCard,r=n.setCurrCard,s=n.cards;"left"===e&&0!==a?r(a-1):"right"===e&&a!==s.length-1&&r(a+1)}),n)}},{key:"render",value:function(){var e=this,t=this.props.currCard,n=this.props.cards.length,a=document.documentElement.clientWidth,s=-(a>500?500:.9*a)*t+"px";return r.a.createElement("div",{className:"cards"},r.a.createElement("div",{className:"cards__container"},r.a.createElement("ul",{className:"cards__list",style:{marginLeft:s}},this.firstCard(),Object(d.a)(this.genCards()))),r.a.createElement("p",{className:"cards__counter counter"},this.renderCounter(n,t)," / ".concat(n)),r.a.createElement(h.a,{className:"cards__arrow arrow__right ".concat(t!==n-1&&n?"":"cards__arrow_hidden"),icon:f.b,onClick:function(){return e.move("right")}}),r.a.createElement(h.a,{className:"cards__arrow arrow__left ".concat(0===t?"cards__arrow_hidden":""),icon:f.a,onClick:function(){return e.move("left")}}),r.a.createElement("button",{className:"cards__clear",onClick:this.clear},r.a.createElement(h.a,{icon:_.c}),"\u2002Clear all"),r.a.createElement(w,{addClass:"cards__confirm"}))}}]),n}(r.a.Component),C=(n(105),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).themeClicked=function(t){var n=Number(t.target.dataset.num);e.props.setTheme(n),e.props.setType("q")},e.addTheme=function(){var t=document.querySelector(".menu__add-input");if(t.classList.contains("menu__add-input_show")){var n=t.value;n.length&&(e.props.addTheme(n),t.value="")}t.classList.toggle("menu__add-input_show"),document.querySelector(".menu__add-icon").classList.remove("menu__add-icon_red")},e.addOnInput=function(e){var t=document.querySelector(".menu__add-icon");e.target.value?t.classList.add("menu__add-icon_red"):t.classList.remove("menu__add-icon_red")},e.keyUp=function(t){"Enter"===t.key&&e.addTheme()},e}return Object(o.a)(n,[{key:"genThemes",value:p.a.mark((function e(){var t,n,a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props,n=t.chosenTheme,a=t.themes,e.t0=p.a.keys(a);case 2:if((e.t1=e.t0()).done){e.next=8;break}return s=e.t1.value,e.next=6,r.a.createElement("div",{className:"menu__theme theme ".concat(Number(s)===n?"theme_chosen":""),key:s},r.a.createElement("p",{className:"theme__name","data-num":s,onClick:this.themeClicked},a[s]),r.a.createElement(h.a,{icon:_.c,onClick:this.props.delTheme,className:"theme__del ".concat("0"===s?"theme__del_hidden":"")}));case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e,this)}))},{key:"render",value:function(){var e=this.props.isOpen;return r.a.createElement("div",{className:"menu ".concat(e?"":"menu_hidden")},Object(d.a)(this.genThemes()),r.a.createElement("div",{className:"menu__add"},r.a.createElement("p",{className:"menu__add-icon",onClick:this.addTheme},"+"),r.a.createElement("input",{className:"menu__add-input",onInput:this.addOnInput,onKeyUp:this.keyUp,maxLength:"20"})))}}]),n}(r.a.Component)),N=(n(106),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).clicked=function(t){t.currentTarget.classList.toggle("burger_cross"),document.querySelector(".burger__username").classList.toggle("burger__username_show"),e.props.toggleMenu()},e.cropName=function(e){return e.length<13?e:e.slice(0,11).trim()+"..."},e}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"burger"},r.a.createElement("div",{className:"burger__icon",onClick:this.clicked},r.a.createElement("div",{className:"burger__line burger__line_top"}),r.a.createElement("div",{className:"burger__line burger__line_center"}),r.a.createElement("div",{className:"burger__line burger__line_center"}),r.a.createElement("div",{className:"burger__line burger__line_bottom"})),r.a.createElement("p",{className:"burger__username"},this.cropName(this.props.name)))}}]),n}(r.a.Component)),k=(n(107),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).save=function(){var t=document.querySelector('.field__input[data-type="q"]').value,n=document.querySelector('.field__input[data-type="a"]').value;if(t.trim()&&n.trim()){var a=e.props,r=a.currCard,s=a.cardsInfo,c=a.theme,i=s[c].cards[r],o=i.q,l=i.a;o!==t||l!==n?(s[c].cards[r].q=t,s[c].cards[r].a=n,e.props.updateCards(s,c,r),e.props.setEditing(!1)):e.props.setEditing(!1)}},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.currCard,a=t.cardsInfo,s=t.theme,c=a[s].cards[n]||{q:"",a:""};return r.a.createElement("div",{className:"editing"},r.a.createElement("div",{className:"editing__window"},r.a.createElement("p",{className:"editing__title"},"Editing card"),r.a.createElement("div",{className:"editing__info info"},r.a.createElement("p",{className:"info__theme"},r.a.createElement("span",null,"Theme: "),a[s].theme),r.a.createElement("p",{className:"info__cards"},r.a.createElement("span",null,"Card: "),n+1)),r.a.createElement("div",{className:"editing__field field"},r.a.createElement("p",{className:"field__title"},"question"),r.a.createElement("textarea",{className:"field__input","data-type":"q",defaultValue:c.q})),r.a.createElement("div",{className:"editing__field field"},r.a.createElement("p",{className:"field__title"},"answer"),r.a.createElement("textarea",{className:"field__input","data-type":"a",defaultValue:c.a})),r.a.createElement("button",{className:"editing__save",onClick:this.save},"Save"),r.a.createElement(h.a,{icon:f.d,className:"editing__close",onClick:function(){return e.props.setEditing(!1)}})))}}]),n}(r.a.Component)),S=n(15),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isMenuOpen:!1,chosenTheme:e.props.theme,currCard:0,cardsInfo:JSON.parse(localStorage.getItem("cards")),shuffledThemes:[],type:"q",showEditing:!1},e.toggleMenu=function(){e.setState({isMenuOpen:!e.state.isMenuOpen})},e.setType=function(t){e.setState({type:t})},e.setTheme=function(t){e.setState({chosenTheme:t,currCard:0})},e.setCurrCard=function(t){e.setState({currCard:t})},e.updateCards=function(t,n,a){document.querySelector(".loading").classList.remove("loading_hidden"),fetch(e.props.url+e.props.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({info:t,name:e.props.name})}).then((function(e){if(200===e.status)return e.json();document.querySelector(".loading").classList.add("loading_hidden")})).then((function(t){document.querySelector(".loading").classList.add("loading_hidden"),e.setState({cardsInfo:t.info,chosenTheme:n,currCard:a}),localStorage.setItem("cards",JSON.stringify(t.info))}))},e.addTheme=function(t){var n=e.state.cardsInfo;n.push({theme:t,cards:[]}),e.updateCards(n,e.state.chosenTheme,e.state.currCard)},e.delTheme=function(){var t=e.state.cardsInfo.filter((function(t,n){return n!==e.state.chosenTheme}));e.updateCards(t,0,e.state.currCard)},e.shuffleTheme=function(t){var n=e.state,a=n.cardsInfo,r=n.chosenTheme,s=n.shuffledThemes,c=JSON.parse(localStorage.getItem("cards"))[r].cards;if(~s.indexOf(r))s=s.filter((function(e){return e!==r}));else{for(var i=c.length-1;i>0;--i){var o=Math.floor(Math.random()*(i+1)),l=[c[o],c[i]];c[i]=l[0],c[o]=l[1]}s.push(r)}a[r].cards=c,t.currentTarget.classList.toggle("content__shuffle_on"),e.setState({cardsInfo:a,currCard:0,shuffledThemes:s})},e.delCard=function(t,n){var a=e.state,r=a.cardsInfo,s=a.chosenTheme,c=a.currCard;r[s].cards=n?[]:r[s].cards.filter((function(e,n){return n!==Number(t)}));var i=c&&!n?c-1:0;e.updateCards(r,e.state.chosenTheme,i)},e.quit=function(){var e=document.querySelector(".quit__confirm");e.classList.remove("confirm_hidden");e.addEventListener("click",(function t(n){if("BUTTON"===n.target.tagName&&(e.removeEventListener("click",t),e.classList.add("confirm_hidden"),"no"!==n.target.dataset.del)){localStorage.clear();var a=window.location.href.match(/^.+\/#\//);window.location.assign(a[0])}}))},e.showEditing=function(){if(e.state.showEditing)return r.a.createElement(k,{theme:e.state.chosenTheme,currCard:e.state.currCard,cardsInfo:e.state.cardsInfo,updateCards:e.updateCards,setEditing:e.setEditing})},e.setEditing=function(t){e.setState({showEditing:t})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){document.querySelector(".loading").classList.add("loading_hidden")}},{key:"render",value:function(){var e=this;if(!this.props.name){var t=window.location.href.match(/^.+\/#\//);return window.location.assign(t[0]),null}var n=this.state.cardsInfo[this.state.chosenTheme].cards.length;return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content__control",onClick:function(){return e.props.setTheme(e.state.chosenTheme)}},r.a.createElement(S.b,{to:"/add",className:"content__add"},"+")),r.a.createElement(b,{cards:this.state.cardsInfo[this.state.chosenTheme].cards,currCard:this.state.currCard,setCurrCard:this.setCurrCard,delCard:this.delCard,type:this.state.type,setType:this.setType,setEditing:this.setEditing,areShuffled:!!this.state.shuffledThemes.length}),r.a.createElement(h.a,{icon:f.c,onClick:this.shuffleTheme,className:"content__shuffle ".concat(n>1?"":"content__shuffle_hidden")}),r.a.createElement(N,{toggleMenu:this.toggleMenu,name:this.props.name}),r.a.createElement(C,{isOpen:this.state.isMenuOpen,themes:this.state.cardsInfo.map((function(e){return e.theme})),chosenTheme:this.state.chosenTheme,setTheme:this.setTheme,addTheme:this.addTheme,delTheme:this.delTheme,setType:this.setType}),r.a.createElement("button",{className:"content__quit",onClick:this.quit},"Quit"),r.a.createElement(w,{addClass:"quit__confirm"}),this.showEditing())}}]),n}(r.a.Component),T=(n(110),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).validate=function(t){var n=document.querySelector("#q-field").value,a=document.querySelector("#a-field").value;if(!n||!a)return document.querySelector(".adding__warning").classList.remove("adding__warning_hidden"),void t.preventDefault();e.save(n,a)},e.save=function(t,n){var a=e.props.theme,r=JSON.parse(localStorage.getItem("cards"));r[a].cards.push({q:t,a:n}),document.querySelector(".loading").classList.remove("loading_hidden"),fetch(e.props.url+e.props.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({info:r,name:e.props.name})}).then((function(e){return 200===e.status?e.json():void document.querySelector(".loading").classList.add("loading_hidden")})).then((function(e){localStorage.setItem("cards",JSON.stringify(e.info));var t=window.location.href.match(/^.+\/#\//);window.location.assign(t[0]+"content")}))},e.onInput=function(e){var t=document.querySelector(".adding__warning");e.target.value.trim()?t.classList.add("adding__warning_hidden"):t.classList.remove("adding__warning_hidden")},e}return Object(o.a)(n,[{key:"render",value:function(){if(!this.props.id){var e=window.location.href.match(/^.+\/#\//);return window.location.assign(e[0]),null}return r.a.createElement("div",{className:"adding"},r.a.createElement("p",{className:"adding__warning adding__warning_hidden"},"No question or answer!"),r.a.createElement("div",{className:"adding__input input"},r.a.createElement("p",{className:"input__title"},"Add question"),r.a.createElement("textarea",{id:"q-field",className:"input__area",onInput:this.onInput})),r.a.createElement("div",{className:"adding__input input"},r.a.createElement("p",{className:"input__title"},"Add answer"),r.a.createElement("textarea",{id:"a-field",className:"input__area",onInput:this.onInput})),r.a.createElement("button",{onClick:this.validate,className:"adding__save"},"Save"),r.a.createElement(S.b,{to:"/content"},r.a.createElement(h.a,{className:"adding__back",icon:f.a})))}}]),n}(r.a.Component)),L=(n(111),n(112),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).login=function(){var t=document.querySelector('.login__input[type="login"]').value.toLowerCase(),n=document.querySelector('.login__input[type="password"]').value;/^\w{3,}$/.test(t)&&/^\w{6,}$/.test(n)&&(document.querySelector(".loading").classList.remove("loading_hidden"),fetch(e.props.url,{method:"GET"}).then((function(e){return e.json()})).then((function(a){var r=a.find((function(e){return e.name===t}));r?e.checkLogin(r,n):(document.querySelector(".loading").classList.add("loading_hidden"),e.props.showAlert("User not found :("))})))},e.checkLogin=function(t,n){fetch(e.props.url+t.id,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:n})}).then((function(e){return e.json()})).then((function(n){if(!n.length)return document.querySelector(".loading").classList.add("loading_hidden"),void e.props.showAlert("User not found :(");e.props.enter(t.name,t.id,n)}))},e.keyUp=function(t){"Enter"===t.key&&t.target.value.length&&e.login()},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"auth__form login"},r.a.createElement("div",{className:"login__input-container"},r.a.createElement("input",{className:"login__input",maxLength:"20",minLength:"3",onInput:this.authOnInput,onClick:function(e){return e.preventDefault()},type:"login",placeholder:"login"})),r.a.createElement("div",{className:"login__input-container"},r.a.createElement("input",{className:"login__input",maxLength:"20",minLength:"8",onInput:this.authOnInput,onClick:function(e){return e.preventDefault()},type:"password",placeholder:"password",onKeyUp:this.keyUp})),r.a.createElement("div",{className:"login__buttons"},r.a.createElement("button",{className:"login__btn login__btn_seagreen",onClick:this.login},"Log in"),r.a.createElement("button",{className:"login__btn login__btn_transparent",onClick:function(){return e.props.setWindow("signup")}},"Sign up")))}}]),n}(r.a.Component)),q=(n(113),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).validate=function(){var t=e.checkInput(),n=t.name,a=t.password;n&&(document.querySelector(".loading").classList.remove("loading_hidden"),fetch(e.props.url,{method:"GET"}).then((function(e){return e.json()})).then((function(t){if(t.find((function(e){return e.name===n})))return document.querySelector(".loading").classList.add("loading_hidden"),void e.props.showAlert("User already exists");e.signup(n,a)})))},e.signup=function(t,n){fetch(e.props.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,password:n})}).then((function(e){return e.json()})).then((function(n){e.props.enter(t,n.id,n.info)}))},e.checkInput=function(){var t=document.querySelector('.signup__input[type="login"]').value.toLowerCase(),n=document.querySelectorAll('.signup__input[type="password"]')[0].value,a=document.querySelectorAll('.signup__input[type="password"]')[1].value;return/^\w{3,}$/.test(t)&&/^\w{6,}$/.test(n)&&n===a?{name:t,password:n}:(e.props.showInfo(!/^\w{3,}$/.test(t)||!/^\w{6,}$/.test(n)),n!==a&&document.querySelector(".signup__check").classList.add("signup__check_show"),{name:null,password:null})},e.secondPasswordInput=function(e){var t=document.querySelectorAll('.signup__input[type="password"]')[0].value;e.target.value===t&&document.querySelector(".signup__check").classList.remove("signup__check_show")},e.enter=function(t){"Enter"===t.key&&e.validate()},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"auth__form signup"},r.a.createElement(h.a,{icon:f.a,className:"signup__back",onClick:function(){return e.props.setWindow("login")}}),r.a.createElement("div",{className:"signup__input-container"},r.a.createElement("input",{className:"signup__input",maxLength:"20",minLength:"3",onClick:function(e){return e.preventDefault()},type:"login",placeholder:"login"})),r.a.createElement("div",{className:"signup__input-container"},r.a.createElement("input",{className:"signup__input",maxLength:"20",minLength:"8",onClick:function(e){return e.preventDefault()},type:"password",placeholder:"password"})),r.a.createElement("div",{className:"signup__input-container"},r.a.createElement("input",{className:"signup__input",maxLength:"20",minLength:"8",onInput:this.secondPasswordInput,onClick:function(e){return e.preventDefault()},type:"password",placeholder:"confirm password",onKeyUp:this.enter}),r.a.createElement(h.a,{icon:f.d,className:"signup__check signup__check_red"})),r.a.createElement("button",{className:"signup__btn",onClick:this.validate},"Sign up"))}}]),n}(r.a.Component)),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={window:"login"},e.showAlert=function(e){var t=document.querySelector(".alert");t.querySelector(".alert__text").textContent=e,t.classList.add("alert_show")},e.setWindow=function(t){document.querySelector(".auth__info-text").classList.remove("auth__info-text_show");var n=document.querySelector(".auth");n.classList.add("auth_hidden"),setTimeout((function(){e.setState({window:t}),n.classList.remove("auth_hidden")}),300)},e.enter=function(t,n,a){e.props.setUsername(t,n),localStorage.setItem("name",t),localStorage.setItem("id",n),localStorage.setItem("cards",JSON.stringify(a)),window.location.assign(window.location.href+"content")},e.toggleInfo=function(){document.querySelector(".auth__info-text").classList.toggle("auth__info-text_show")},e.showInfo=function(e){e?document.querySelector(".auth__info-text").classList.add("auth__info-text_show"):document.querySelector(".auth__info-text").classList.remove("auth__info-text_show")},e.renderWindow=function(){var t=e.props.url;return"login"===e.state.window?r.a.createElement(L,{setWindow:e.setWindow,enter:e.enter,url:t,showAlert:e.showAlert}):r.a.createElement(q,{setWindow:e.setWindow,enter:e.enter,url:t,showInfo:e.showInfo,showAlert:e.showAlert})},e.setInfoText=function(){return"login"===e.state.window?"If you don't have an account, click sign up.":r.a.createElement("span",null,"Valid characters:",r.a.createElement("br",null),"aA-zZ, 0-9 and _.",r.a.createElement("br",null),"Login should contain at least 3 symbols, password - 6.")},e.setAuthTitle=function(){return"login"===e.state.window?"Authorization":"Registration"},e}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"auth"},r.a.createElement("p",{className:"auth__title"},this.setAuthTitle()),r.a.createElement("button",{className:"auth__info-btn",onClick:this.toggleInfo},"i"),r.a.createElement("div",{className:"auth__info-text"},this.setInfoText()),this.renderWindow())}}]),n}(r.a.Component),I=(n(114),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading loading_hidden"},r.a.createElement("svg",{viewBox:"0 0 36 36",className:"loading__bar"},r.a.createElement("circle",{id:"segment",cx:"18",cy:"18",r:"15.91549430918954",stroke:"#fff",strokeWidth:"4",fill:"transparent",strokeDasharray:"80 20"})))}}]),n}(r.a.Component)),x=(n(115),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).hide=function(){var e=document.querySelector(".alert__window");e.classList.add("alert__hiding"),setTimeout((function(){document.querySelector(".alert").classList.remove("alert_show"),e.classList.remove("alert__hiding")}),300)},e}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"".concat(this.props.addClass," alert")},r.a.createElement("div",{className:"alert__window"},r.a.createElement("p",{className:"alert__text"},"Alert!"),r.a.createElement("button",{className:"alert__btn",onClick:this.hide},"ok!")))}}]),n}(r.a.Component)),A=(n(116),n(13)),U=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={theme:0,username:localStorage.getItem("name"),id:localStorage.getItem("id")},e.setTheme=function(t){e.setState({theme:t})},e.setUsername=function(t,n){e.setState({username:t,id:n})},e.changeColorTheme=function(){document.querySelector(".root").classList.toggle("root_black")},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.url;return r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"container__header"},r.a.createElement("span",{className:"container__header_seagreen"},"Memory")," cards",r.a.createElement(h.a,{icon:_.b,className:"moon",onClick:this.changeColorTheme})),r.a.createElement(I,null),r.a.createElement(x,null),r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/",render:function(){return r.a.createElement(j,{setUsername:e.setUsername,url:t})}}),r.a.createElement(A.a,{exact:!0,path:"/content",render:function(){return r.a.createElement(O,{setTheme:e.setTheme,theme:e.state.theme,name:e.state.username,id:e.state.id,url:t})}}),r.a.createElement(A.a,{path:"/add",render:function(){return r.a.createElement(T,{theme:e.state.theme,name:e.state.username,id:e.state.id,url:t})}})))}}]),n}(r.a.Component);c.a.render(r.a.createElement(S.a,null,r.a.createElement(U,{url:"https://mc-serv.herokuapp.com/users/"})),document.getElementById("root"))},47:function(e,t,n){e.exports=n(117)},52:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},61:function(e,t,n){},86:function(e,t){}},[[47,1,2]]]);
//# sourceMappingURL=main.58b85f0c.chunk.js.map