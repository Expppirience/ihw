(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports={input__container:"Greeting_input__container__1ayVy",input:"Greeting_input__2ntJV",error:"Greeting_error__3F7og",button:"Greeting_button__3Pppr",textError:"Greeting_textError__3utgD"}},,,,,function(e,a,t){e.exports={blue:"HW4_blue__2r-yP",column:"HW4_column__HEu05",testSpanError:"HW4_testSpanError__3ptba",green:"HW4_green__19iuA"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1JqW4",errorInput:"SuperInputText_errorInput__3KdvV",error:"SuperInputText_error__2z1wt"}},function(e,a,t){e.exports={default:"SuperButton_default__uqMAp",red:"SuperButton_red__3R1-2"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2rDBs",spanClassName:"SuperCheckbox_spanClassName__1_e6l"}},,,function(e,a,t){e.exports={App:"App_App__2TMv8"}},function(e,a,t){e.exports=t(35)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),o=(t(30),t(24)),s=t.n(o),i=t(7),m=t(2),u=(t(31),function(e){var a=e.avatar,t=e.name,n=e.message,l=e.time;return r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"message__img"},r.a.createElement("img",{src:a,alt:"profilePic"})),r.a.createElement("div",{className:"message__body body-message"},r.a.createElement("div",{className:"body-message__content"},r.a.createElement("span",{className:"body-message__name"},t),r.a.createElement("span",{className:"body-message__text"},n)),r.a.createElement("time",{className:"body-message__time"},l)))}),d=function(e){var a=e.message;return r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"message__img"},r.a.createElement("img",{src:a.avatar,alt:"profilePic"})),r.a.createElement("div",{className:"message__body body-message"},r.a.createElement("div",{className:"body-message__content"},r.a.createElement("span",{className:"body-message__name"},a.name),r.a.createElement("span",{className:"body-message__text"},a.message),r.a.createElement("ul",{className:"body-message__list"},a.options.map((function(e){return r.a.createElement("li",{key:e.id,className:"body-message__item"},e.text)})))),r.a.createElement("time",{className:"body-message__time"},a.time)))},E="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Some Name",_="some text",v="22:00",h={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Some Name",message:"Check out this options: ",time:"22:00",options:[{id:1,text:"first option"},{id:2,text:"second option"},{id:3,text:"third option"}]};var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(u,{avatar:E,name:p,message:_,time:v}),r.a.createElement("hr",null),r.a.createElement(d,{message:h}),r.a.createElement("hr",null))},f=t(3);var b=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},N=t(5),C=t(20),k=t.n(C),y=["red","className"],O=function(e){var a=e.red,t=e.className,n=Object(N.a)(e,y),l="".concat(a?k.a.red:k.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var j=function(e){var a=e.data.map((function(a){return r.a.createElement(b,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement(O,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(O,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(O,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(O,{onClick:function(){e.setFilter("low")}},"Low"))},x=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(n.useState)(x),a=Object(f.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(f.a)(c,2),s=o[0],i=o[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},w=t(4),A=t(12),T=t.n(A),P=t(19),F=t.n(P),I=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],J=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,i=Object(N.a)(e,I),m="".concat(F.a.error," ").concat(s||""),u="".concat(c?F.a.errorInput:F.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:u},i)),c&&r.a.createElement("span",{className:m},c))},W=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=e.lastUserName,s=l?T.a.error:"";return r.a.createElement("div",{className:T.a.input__container},r.a.createElement(J,{value:a,onChange:t,className:"".concat(T.a.input," ").concat(s),error:l,spanClassName:T.a.textError}),r.a.createElement(O,{onClick:n,className:T.a.button},"add"),r.a.createElement("span",null,c),o&&r.a.createElement("div",null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",o))},B=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(f.a)(l,2),o=c[0],s=c[1],i=Object(n.useState)(""),m=Object(f.a)(i,2),u=m[0],d=m[1],E=a.length,p=E>0?a[a.length-1].name:"";return r.a.createElement(W,{name:o,setNameCallback:function(e){s(e.currentTarget.value)},addUser:function(){o?(t(o),s(""),u&&d("")):d("\u041e\u0448\u0438\u0431\u043a\u0430! \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f")},error:u,totalUsers:E,lastUserName:p})};var H=function(){var e=Object(n.useState)([]),a=Object(f.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(B,{users:t,addUserCallback:function(e){var a={_id:t.length+1,name:e};l([].concat(Object(w.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},U=t(17),G=t.n(U),D=t(21),q=t.n(D),K=["type","onChange","onChangeChecked","className","spanClassName","children"],M=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(N.a)(e,K),o="".concat(q.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){null===t||void 0===t||t(e.currentTarget.checked),null===a||void 0===a||a(e)},className:o},c)),l&&r.a.createElement("span",{className:q.a.spanClassName},l))};var V=function(){var e=Object(n.useState)(""),a=Object(f.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),i=Object(f.a)(s,2),m=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:G.a.column},r.a.createElement(J,{value:t,onChangeText:l,onEnter:o,error:c,spanClassName:G.a.testSpanError}),r.a.createElement(J,{className:"".concat(G.a.blue," ").concat(G.a.green)}),r.a.createElement(O,null,"default"),r.a.createElement(O,{red:!0,onClick:o},"delete "),r.a.createElement(O,{disabled:!0},"disabled"),r.a.createElement(M,{checked:m,onChangeChecked:u},"some text "),r.a.createElement(M,{checked:m,onChange:function(e){return u(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var X=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(S,null),r.a.createElement(H,null),r.a.createElement(V,null))},z=["autoFocus","onBlur","onEnter","spanProps"],R=["children","onDoubleClick","className"],Y=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(N.a)(e,z),o=Object(n.useState)(!1),s=Object(f.a)(o,2),i=s[0],m=s[1],u=l||{},d=u.children,E=u.onDoubleClick,p=u.className,_=Object(N.a)(u,R),v="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",p);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(J,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:v},_),d||c.value))};function Z(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function L(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}Z("test",{x:"A",y:1});L("test",{x:"",y:0}),t(32);var $=function(){var e=Object(n.useState)(""),a=Object(f.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",{className:"edit"},r.a.createElement("div",{className:"edit__header"},r.a.createElement("img",{className:"edit__img",src:"https://img.icons8.com/ios/50/null/pencil--v1.png"}),r.a.createElement(Y,{className:"edit__text",value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement("div",{className:"edit__btns"},r.a.createElement(O,{onClick:function(){Z("editable-span-value",t)},className:"edit__btn"},"save"),r.a.createElement(O,{onClick:function(){l(L("editable-span-value","enter some text here..."))},className:"edit__btn"},"restore"))),r.a.createElement("hr",null),r.a.createElement("hr",null))},Q=["options","onChange","onChangeOption"],ee=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(N.a)(e,Q),c=a?a.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){null===t||void 0===t||t(e),null===n||void 0===n||n(e.currentTarget.value)}},l),c)},ae=["type","name","options","value","onChange","onChangeOption"],te=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(N.a)(e,ae),function(e){null===l||void 0===l||l(e),null===c||void 0===c||c(e.currentTarget.value)}),s=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{type:"radio",name:a,checked:e===n,value:e,onChange:o}),e)})):[];return r.a.createElement(r.a.Fragment,null,s)},ne=["x","y","z"];var re=function(){var e=Object(n.useState)(ne[1]),a=Object(f.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ee,{options:ne,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(te,{name:"radio",options:ne,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))};function le(){return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(re,null))}function ce(){return r.a.createElement("div",null,"JuniorPlus page")}t(33);var oe=function(){return r.a.createElement("div",{className:"blank-page"},r.a.createElement("div",{className:"blank-page__content"},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014")))},se="/pre-junior",ie="/junior",me="/junior-plus";var ue=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",element:r.a.createElement(m.a,{to:se})}),r.a.createElement(m.b,{path:se,element:r.a.createElement(X,null)}),r.a.createElement(m.b,{path:ie,element:r.a.createElement(le,null)}),r.a.createElement(m.b,{path:me,element:r.a.createElement(ce,null)}),r.a.createElement(m.b,{path:"/*",element:r.a.createElement(oe,null)})))};t(34);var de=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("nav",{className:"header__nav"},r.a.createElement(i.b,{end:!0,to:se,className:function(e){return"".concat(e.isActive?"active":""," header__link")}},"preJunior"),r.a.createElement(i.b,{end:!0,to:ie,className:function(e){return"".concat(e.isActive?"active":""," header__link")}},"Junior"),r.a.createElement(i.b,{end:!0,to:me,className:function(e){return"".concat(e.isActive?"active":""," header__link")}},"JuniorPlus")))};var Ee=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(de,null),r.a.createElement(ue,null)))};var pe=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.dd07aa97.chunk.js.map