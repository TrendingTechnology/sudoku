(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(4),s=a(1),i=a(2),r=a.n(i),o=function(e){return n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"Su",n.a.createElement("span",{className:"header__group-one"},"do"),n.a.createElement("span",{className:"header__group-two"},"ku")),n.a.createElement("h2",{onClick:e.onClick},"New Game"))},m=function(e){var t=[0,1,2,3,4,5,6,7,8];function a(t,a){return e.fastMode?e.numberSelected===e.gameArray[9*t+a]:e.cellSelected===9*t+a||"0"!==e.gameArray[e.cellSelected]&&(e.gameArray[e.cellSelected]===e.gameArray[9*t+a]||void 0)}function c(t,a){return"0"!==a?"0"===e.initArray[t]?n.a.createElement("td",{className:"game__cell game__cell--userfilled game__cell--selected",key:t,onClick:function(){return e.onClick(t)}},a):n.a.createElement("td",{className:"game__cell game__cell--filled game__cell--selected",key:t,onClick:function(){return e.onClick(t)}},a):n.a.createElement("td",{className:"game__cell game__cell--selected",key:t,onClick:function(){return e.onClick(t)}},a)}function l(t,a){return"0"!==a?"0"===e.initArray[t]?n.a.createElement("td",{className:"game__cell game__cell--userfilled",key:t,onClick:function(){return e.onClick(t)}},a):n.a.createElement("td",{className:"game__cell game__cell--filled",key:t,onClick:function(){return e.onClick(t)}},a):n.a.createElement("td",{className:"game__cell",key:t,onClick:function(){return e.onClick(t)}},a)}return n.a.createElement("section",{className:"game"},n.a.createElement("table",{className:"game__board"},n.a.createElement("tbody",null,t.map((function(s){return n.a.createElement("tr",{className:"game__row",key:s},t.map((function(t){var i=9*s+t,r=e.gameArray[i];return e.cellSelected===i?"0"!==r?"0"===e.initArray[i]?n.a.createElement("td",{className:"game__cell game__cell--userfilled game__cell--highlightselected",key:i,onClick:function(){return e.onClick(i)}},r):n.a.createElement("td",{className:"game__cell game__cell--filled game__cell--highlightselected",key:i,onClick:function(){return e.onClick(i)}},r):n.a.createElement("td",{className:"game__cell game__cell--highlightselected",key:i,onClick:function(){return e.onClick(i)}},r):e.fastMode?"0"!==e.numberSelected&&a(s,t)?c(i,r):l(i,r):-1!==e.cellSelected&&a(s,t)?c(i,r):l(i,r)})))})))))},u=function(e){return n.a.createElement("div",{className:"status__difficulty"},n.a.createElement("span",{className:"status__difficulty-text"},"Difficulty:\xa0\xa0"),n.a.createElement("select",{name:"status__difficulty-select",className:"status__difficulty-select",defaultValue:e.difficulty,onChange:e.onChange},n.a.createElement("option",{value:"Easy"},"Easy"),n.a.createElement("option",{value:"Medium"},"Medium"),n.a.createElement("option",{value:"Hard"},"Hard")))},d=function(e){var t=Object(c.useState)(r()()),a=Object(s.a)(t,2),l=a[0],i=a[1];return Object(c.useEffect)((function(){setTimeout((function(){i(r()())}),1e3)})),n.a.createElement("div",{className:"status__time"},function(){var t=l.diff(e.timeGameStarted,"seconds"),a=r.a.duration(t,"seconds"),c=a.hours(),n=a.minutes(),s=a.seconds(),i="";return i+=c?c+":":"",i+=n?(n<10?"0":"")+n+":":"00:",i+=s<10?"0"+s:s}())},f=function(e){return n.a.createElement("div",{className:"status__numbers"},[1,2,3,4,5,6,7,8,9].map((function(t){return e.numberSelected===t.toString()?n.a.createElement("div",{className:"status__number status__number--selected",key:t,onClick:function(){return e.onClickNumber(t.toString())}},t):n.a.createElement("div",{className:"status__number",key:t,onClick:function(){return e.onClickNumber(t.toString())}},t)})))},_=function(e){return"undo"===e.action?n.a.createElement("svg",{className:"status__action-svg",height:"512pt",viewBox:"0 0 512 512",width:"512pt",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"m154.667969 213.332031h-138.667969c-8.832031 0-16-7.167969-16-16v-138.664062c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v122.664062h122.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0",fill:"hsl(213, 30%, 59%)"}),n.a.createElement("path",{d:"m256 512c-68.351562 0-132.628906-26.644531-180.96875-75.03125-6.253906-6.25-6.253906-16.382812 0-22.632812 6.269531-6.273438 16.402344-6.230469 22.632812 0 42.304688 42.347656 98.515626 65.664062 158.335938 65.664062 123.519531 0 224-100.480469 224-224s-100.480469-224-224-224c-105.855469 0-200.257812 71.148438-224.449219 169.171875-2.132812 8.597656-10.75 13.824219-19.371093 11.714844-8.574219-2.132813-13.800782-10.796875-11.710938-19.371094 27.691406-112.148437 135.148438-193.515625 255.53125-193.515625 141.164062 0 256 114.835938 256 256s-114.835938 256-256 256zm0 0",fill:"hsl(213, 30%, 59%)"})):"erase"===e.action?n.a.createElement("svg",{className:"status__action-svg",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512.001 512.001"},n.a.createElement("path",{d:"M505.922,476.567L285.355,256L505.92,35.435c8.106-8.105,8.106-21.248,0-29.354c-8.105-8.106-21.248-8.106-29.354,0L256.001,226.646L35.434,6.081c-8.105-8.106-21.248-8.106-29.354,0c-8.106,8.105-8.106,21.248,0,29.354L226.646,256L6.08,476.567c-8.106,8.106-8.106,21.248,0,29.354c8.105,8.105,21.248,8.106,29.354,0l220.567-220.567l220.567,220.567c8.105,8.105,21.248,8.106,29.354,0S514.028,484.673,505.922,476.567z",fill:"hsl(213, 30%, 59%)"})):"hint"===e.action?n.a.createElement("svg",{className:"status__action-svg",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 432.4 432.4"},n.a.createElement("path",{d:"M216.529,93.2c-61.2,0-111.2,50-111.2,111.2c0,32,14,62.8,37.6,83.6c17.6,17.6,16,55.2,15.6,55.6c0,2,0.4,3.6,2,5.2c1.2,1.2,3.2,2,4.8,2h102c2,0,3.6-0.8,4.8-2c1.2-1.2,2-3.2,2-5.2c0-0.4-2-38,15.6-55.6c0.4-0.4,0.8-0.8,1.2-1.2c23.2-21.2,36.8-51.2,36.8-82.4C327.729,143.2,277.729,93.2,216.529,93.2zM280.529,277.6c-0.4,0.4-1.2,1.2-1.2,1.6c-15.6,16.8-18.4,44.4-18.8,57.6h-88.4c-0.4-13.2-3.2-42-20-59.2c-21.2-18.4-33.6-45.2-33.6-73.6c0-54,43.6-97.6,97.6-97.6s97.6,43.6,97.6,97.6C313.729,232.4,301.729,259.2,280.529,277.6z",fill:"hsl(213, 30%, 59%)"}),n.a.createElement("path",{d:"M216.129,121.6c-3.6,0-6.8,3.2-6.8,6.8c0,3.6,3.2,6.8,6.8,6.8c40.4,0,72.8,32.8,72.8,72.8c0,3.6,3.2,6.8,6.8,6.8c3.6,0,6.8-3.2,6.8-6.8C302.929,160.4,264.129,121.6,216.129,121.6z",fill:"hsl(213, 30%, 59%)"}),n.a.createElement("path",{d:"M260.529,358.4h-88.8c-9.2,0-16.8,7.6-16.8,16.8s7.6,16.8,16.8,16.8h88.4c9.6-0.4,17.2-7.6,17.2-16.8C277.329,366,269.729,358.4,260.529,358.4zM260.529,378h-88.8c-1.6,0-3.2-1.2-3.2-3.2s1.2-3.2,3.2-3.2h88.4c1.6,0,3.2,1.2,3.2,3.2S262.129,378,260.529,378z",fill:"hsl(213, 30%, 59%)"}),n.a.createElement("path",{d:"M247.329,398.8h-62.4c-9.2,0-16.8,7.6-16.8,16.8s7.6,16.8,16.8,16.8h62.4c9.2,0,16.8-7.6,16.8-16.8C264.129,406,256.529,398.8,247.329,398.8zM247.329,418.4h-62.4c-1.6,0-3.2-1.2-3.2-3.2s1.2-3.2,3.2-3.2h62.4c1.6,0,3.2,1.2,3.2,3.2S248.929,418.4,247.329,418.4z",fill:"hsl(213, 30%, 59%)"}),n.a.createElement("path",{d:"M216.129,60c4,0,6.8-3.2,6.8-6.8V6.8c0-3.6-3.2-6.8-6.8-6.8c-3.6,0-6.8,3.2-6.8,6.8v46.4C209.329,56.8,212.529,60,216.129,60z",fill:"hsl(213, 30%, 59%)"}),n.a.createElement("path",{d:"M329.329,34.4c-3.2-2.4-7.2-1.2-9.2,1.6l-25.6,38.4c-2.4,3.2-1.6,7.6,1.6,9.6c1.2,0.8,2.4,1.2,3.6,1.2c2.4,0,4.4-1.2,5.6-3.2l25.6-38.4C333.329,40.8,332.529,36.4,329.329,34.4z",fill:"hsl(213, 30%, 59%)"}),n.a.createElement("path",{d:"M134.929,83.6c1.2,0,2.4-0.4,3.6-1.2c3.2-2,4-6.4,2-9.6l-24.8-38.8c-2-3.2-6.4-4-9.6-2s-4,6.4-2,9.6l24.8,38.8C130.529,82.8,132.529,83.6,134.929,83.6z",fill:"hsl(213, 30%, 59%)"}),n.a.createElement("path",{d:"M86.529,126l-40.4-22c-3.2-1.6-7.6-0.4-9.2,2.8c-2,3.2-0.8,7.6,2.8,9.2l40.4,22c1.2,0.4,2,0.8,3.2,0.8c2.4,0,4.8-1.2,6-3.6C90.929,132,89.729,127.6,86.529,126z",fill:"hsl(213, 30%, 59%)"}),n.a.createElement("path",{d:"M395.729,106.8c-1.6-3.2-6-4.4-9.2-2.8l-40.8,22c-3.2,1.6-4.4,6-2.8,9.2c1.2,2.4,3.6,3.6,6,3.6c1.2,0,2.4-0.4,3.2-0.8l40.8-22C396.129,114.4,397.329,110,395.729,106.8z",fill:"hsl(213, 30%, 59%)"})):void 0},h=function(e){return n.a.createElement("div",{className:"undo"===e.action?"status__action-undo":"erase"===e.action?"status__action-erase":"hint"===e.action?"status__action-hint":"",onClick:e.onClickAction},n.a.createElement(_,{action:e.action}),n.a.createElement("p",{className:"status__action-text"},"undo"===e.action?"Undo":"erase"===e.action?"Erase":"hint"===e.action?"Hint":""))},E=function(e){return n.a.createElement("div",{className:"mistakes"===e.mode?"status__action-mistakes-mode":"status__action-fast-mode"},n.a.createElement("label",{className:"mistakes"===e.mode?"status__action-mistakes-mode-switch":"status__action-fast-mode-switch"},n.a.createElement("input",{type:"checkbox"}),n.a.createElement("span",{className:"mistakes"===e.mode?"status__action-mistakes-mode-slider":"status__action-fast-mode-slider",onClick:e.onClickMode})),n.a.createElement("p",{className:"status__action-text"},"mistakes"===e.mode?"Mistakes Mode":"Fast Mode"))},k=function(e){return n.a.createElement("section",{className:"status"},n.a.createElement(u,{difficulty:e.difficulty,onChange:e.onChange}),n.a.createElement(d,{timeGameStarted:e.timeGameStarted}),n.a.createElement(f,{numberSelected:e.numberSelected,onClickNumber:function(t){return e.onClickNumber(t)}}),n.a.createElement("div",{className:"status__actions"},n.a.createElement(h,{action:"undo",onClickAction:e.onClickUndo}),n.a.createElement(h,{action:"erase",onClickAction:e.onClickErase}),n.a.createElement(h,{action:"hint",onClickAction:e.onClickHint}),n.a.createElement(E,{mode:"mistakes",onClickMode:e.onClickMistakesMode}),n.a.createElement(E,{mode:"fast",onClickMode:e.onClickFastMode})))},C=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("p",null,"\xa9 2020 Amith Raravi - source code on ",n.a.createElement("a",{href:"https://github.com/raravi/sudoku"},"Github")))};a(11);var g=function(){var e=["8","0","0","0","2","0","9","1","0","2","3","4","5","1","0","0","0","7","7","1","0","0","8","0","0","5","4","6","0","0","1","0","0","3","0","5","1","8","5","0","0","0","7","2","0","0","4","0","6","0","2","8","0","0","0","6","8","0","0","0","4","0","0","0","0","0","0","0","0","1","6","2","0","0","0","4","0","7","5","3","0"],t=["8","5","6","7","2","4","9","1","3","2","3","4","5","1","9","6","8","7","7","1","9","3","8","6","2","5","4","6","9","2","1","7","8","3","4","5","1","8","5","9","4","3","7","2","6","3","4","7","6","5","2","8","9","1","5","6","8","2","3","1","4","7","9","4","7","3","8","9","5","1","6","2","9","2","1","4","6","7","5","3","8"],a=Object(c.useState)(e),l=Object(s.a)(a,2),i=l[0],u=l[1],d=Object(c.useState)("Easy"),f=Object(s.a)(d,2),_=f[0],h=f[1],E=Object(c.useState)("0"),g=Object(s.a)(E,2),p=g[0],b=g[1],v=Object(c.useState)(r()()),N=Object(s.a)(v,2),y=N[0],S=N[1],M=Object(c.useState)(!1),w=Object(s.a)(M,2),j=w[0],O=w[1],x=Object(c.useState)(!1),z=Object(s.a)(x,2),A=z[0],L=z[1],G=Object(c.useState)(-1),H=Object(s.a)(G,2),B=H[0],F=H[1],U=Object(c.useState)([]),J=Object(s.a)(U,2),V=J[0],D=J[1];function I(){u(e),b("0"),S(r()()),F(-1),D([])}function R(t,a){if("0"===e[t]){var c=i.slice(),n=V.slice();n.push(i.slice()),D(n),c[t]=a,u(c)}}function T(e,a){j?a===t[e]&&R(e,a):R(e,a)}return n.a.createElement("div",{className:"container"},n.a.createElement(o,{onClick:function(){I()}}),n.a.createElement("div",{className:"innercontainer"},n.a.createElement(m,{gameArray:i,initArray:e,fastMode:A,numberSelected:p,cellSelected:B,onClick:function(e){return function(e){A&&"0"!==p&&T(e,p),F(e)}(e)}}),n.a.createElement(k,{difficulty:_,numberSelected:p,timeGameStarted:y,onClickNumber:function(e){return function(e){A?b(e):-1!==B&&T(B,e)}(e)},onChange:function(e){return function(e){h(e.target.value),I()}(e)},onClickUndo:function(){if(V.length){var e=V.slice(),t=e.pop();D(e),u(t)}},onClickErase:function(){-1!==B&&"0"!==i[B]&&R(B,"0")},onClickHint:function(){-1!==B&&R(B,t[B])},onClickMistakesMode:function(){O(!j)},onClickFastMode:function(){A&&b("0"),F(-1),L(!A)}})),n.a.createElement(C,null))};Object(l.render)(n.a.createElement(g,null),document.getElementById("root"))},5:function(e,t,a){e.exports=a(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.f0799c97.chunk.js.map