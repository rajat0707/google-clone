(this["webpackJsonpgoogle-clone"]=this["webpackJsonpgoogle-clone"]||[]).push([[0],{53:function(e,a,t){e.exports=t(70)},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},68:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(20),l=t.n(r),s=(t(58),t(59),t(18)),o=t(3),i=(t(60),t(44)),m=t.n(i),u=t(85),E=t(39),v=t(16),d=(t(61),t(28)),h=t.n(d),g=t(43),p=t.n(g),f=t(84),w=Object(n.createContext)(),b=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(w.Provider,{value:Object(n.useReducer)(a,t)},r)},N=function(){return Object(n.useContext)(w)},j=t(30),O="SET_SEARCH_TERM",S=function(e,a){switch(console.log(a),a.type){case O:return Object(j.a)(Object(j.a)({},e),{},{term:a.term});default:return e}};var A=function(e){var a=e.hideButtons,t=void 0!==a&&a,r=N(),l=Object(v.a)(r,2);Object(E.a)(l[0]);var s=l[1],i=Object(n.useState)(""),m=Object(v.a)(i,2),u=m[0],d=m[1],g=Object(o.f)(),w=function(e){e.preventDefault(),s({type:O,term:u}),g.push("/search")};return c.a.createElement("form",{className:"search"},c.a.createElement("div",{className:"search__input"},c.a.createElement(h.a,{className:"search__inputIcon"}),c.a.createElement("input",{value:u,onChange:function(e){return d(e.target.value)}}),c.a.createElement(p.a,null)),t?c.a.createElement("div",{className:"search__buttons"},c.a.createElement(f.a,{className:"search__buttonsHidden",type:"submit",onClick:w,variant:"outlined"},"Google Search"),c.a.createElement(f.a,{className:"search__buttonsHidden",variant:"outlined"},"I'm Feeling Lucky")):c.a.createElement("div",{className:"search__buttons"},c.a.createElement(f.a,{type:"submit",onClick:w,variant:"outlined"},"Google Search"),c.a.createElement(f.a,{variant:"outlined"},"I'm Feeling Lucky")))};var y=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__header"},c.a.createElement("div",{className:"home__headerLeft"},c.a.createElement(s.b,{to:"/about"},"About"),c.a.createElement(s.b,{to:"/store"},"Store")),c.a.createElement("div",{className:"home__headerRight"},c.a.createElement(s.b,{to:"/gmail"},"Gmail"),c.a.createElement(s.b,{to:"/images"},"Images"),c.a.createElement(m.a,null),c.a.createElement(u.a,null))),c.a.createElement("div",{className:"home__body"},c.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXAAAAB8CAMAAABHchvCAAAA51BMVEX///9ChfTqQzX7vAU0qFOl2LOr27hsoPZblfVonfb8/f/P4Pynxvo8q1pIifR6xo75+//wdWvA1vuzzvt0pvefwfmArfiZvfmUuvlQjvXV5P3++Pfe6v16qfdgmfb73dvs8/6LtPjsVUn2raeuy/r6zsv4w7/rSjzo8P761tP0m5Pxf3b81GDzkIjrT0K70/v7wx/vbGH97OrtXlL3tK794pH+8cv92XHzmJD/++7uY1jyiH/1p6H93oT80VLwenD+7Lj/+/H+9Nb+6a78xy38zEH80lb95qD+89H934b+6rHF5s7945gI73L2AAAO/klEQVR4nO1daUPiyBbt5b0RgcewCAhBCSCbiijijt0ubW8z///3PAkB6ty6tSSQbofJ+UiSourk5tbdqurdO2tka9VUPp9PVWu9rP1TMUIgWT1obFXeC0js7BZqv7tbG4paeg+4XqJSKri/u3ebhmxhiyd7jp1hrF7Wh2pJz/ZMzsvu7+5nxPjjfwL+iO5/qnsWdE+R2XWj68UbwH//IyAywqvblnR7lBc3WbH8CsLd3QB0T5FIRdORt4BfQHhBYZfo0NhYIY+c8KzNXCljf1MN86gJryZC8f2qyYfr78xbQMSEH4Ske4ri2nvzFhAt4cUV+H5V5Ml19+cNIErCk2r1XdlqpA+G+WEhXSxtZ1R3Hay3P28CERKe3OFpTDSGLt5ZO9jjSG+stTtvBNERzst3psHb2EycZSP5jpDwBqdJdE5krfEv4Ds6wsuMdKcN7kxNUEK7a+zLW0JUhOdlvvd65seGc690Q+U7MsJ7kjtv6ci4Oxst31ERnt2nfNu76umN5jsiwqXw4FaAYFQ+s8F8R0N4VVLfgYJ/Frr+n4soCE/SdMPeJvroIREF4ekV9MnGIwLCs8RCSbhraXZDEAHhJESY2dRUQjisn3Aq4JsY8lsB6yecCPjOOtrcIKyd8CQKeKxQCNZOOAmibLIPEwprJxyj4Bl3DU1uFNZNuBsLuB7rJpyk6X+Zl+7U++12u193wjbw+HT58PBw+RT2+ekKg1S1ZvTxAhA+HVOn3R9pb0KNUgrW6XBw2oe55oc5mrlJOyDrjw/3L6cf5zj9dH/5GKyBWnpvUX4jZ2wRdoQ7/clyTN3bQUc1JGKj5IN1PASczlH3A0X3SNlBCY/Pnz7KOH6w7kGvKNU6lfy8bT69xDwdYEN4f3AiDemuzd6KccJK1EEUp9WU2PYFfaL/En3c3J8ydHuCfn9j00CNLwXZqU4vimULW/4DZsI7Z/yQzjrMzRi3ilijOBNZuAWZmBil/PFewfaM8gtjD9wGS/cU5Ww4wusKuqf4LAsRvu9ovfrOuYbuKc75r3CBZ5V0z/HlQd/AUFcXvOWGINy51o6oO6YPYGotSi/TOTTQPcVAI+SPVwa6p7jS9MBUF5xwAxM+0oi3PyJ8IAkFVJkQPNpidGvB96veU2rypy8WfH/8+KLU5D0pbysxLs6mNoT3pblSRg5kqAd/uL0CoQbUm1Z8v06edb6B7yZ1MsepwjKvBazDtiC8bcE3YTwF/xHdnFm36pqHE5bxS0u6lYzXgi7rMBPe15kAAj4Lz2DkyljgXU1YAwqDRk1rvnkZf7KVb49xRqu4gdcZGAm3FyJBjw/hP9ImwlOKzjHYFx5zTOYJ4lyaOW+C8P1qrEiOp1x3szLhjt2k5GFpkGMkpbBGwsUJ+IjpQzc3OJwcDs64z/KI/u8LR+vL1f2Pq2P20jFtgLNPKju7xWK5pBJ9E+EDZkxHk3G70znM0QsnC1MA/R5jcVsAwt+7i6dacs8Gi/CJ076TOW/h38ruzunV5fzi48OxzPg3bKAgs11emMC9NMu5gfCO1OmzZXhi1Gritdz8CqbX1kr4Iu44ooR2r9H2G13TO07ghieJT+LF30gWOqpxl06YpCw4yS2U1BMuaclb9OMd8gHMHaDoVMrSiaIK5VaeFOtUH4JSoVrjRTZDLqmRDkqFKpQtKQjtygvd9YRPSIfvpHlnDNeb/nX81oyefRDCq/4zfcol50w69K30l9ceTAp6ikcaQhReCi3k49Z+JeXqSv8KS7jTxO625BaJJp3MfgxoFgYhfL5S5TMRBUXTd0oRJwKuct4J48JrIdKrSGpRxrWEo/h+kCImHmDuPHEYBo1F9SEIr2PXcqpgiUOm9oXeIS7PV1XfHsmLWYh4Dful8u7okjIt4agCD/kWUe2Mmc5s8Q8uEUKlYDStqQ56E+foev472iCn6twOMdbv57+j6CaUIX8yteoIRyk6Y4czIdPqrfczBq8qysH4CDFpIo1cSH4ONLSa/q+PSOODpoFvcOcX/1dSWKbZ9wInNB3hGPhkPOM+Y+vOYs/BwrPBzcI2/GdO23qO6d+7ZzuF4gFNFd9Sx2lKFy5Kgj2uIxw0iuSmOWM2aDubvdBiMtmF1W0t4HOZfbooC/oEA74cXzFecSQqgC/Hz/80YIRV3fNgJGsIH0FH+9hI/VoRY+l66hQ9nxXDheLH66sneNe3hudB6/maEaT2xdAAqJ9Ps99YseWRzTC3MoSD8juHJjqSW78YfMuzF1BJVFZa+QDB9Vls3YH/nBgagM+h6/XvhhNaJeBzOPV+wkIng6chGpAawqGfQihwNGkq2O4ezT9unDVXK5MAbTn7WHA67xsaQB/Jm4vQKDRV/aCP5Ln3KFGGOidRp2gIBy9tYQe0mfqPGaAiAb2ClXQKqKeZEwUfX9eUlXegx95Ivskyq8EjEP4w/Qn0sskME31SDeGgJ2c2ijNWRmtzaJphNGWlWk7Y7WD2rYB7a1LhZPb33GUIFJpUOFHiXsgQrHBT7XvWjvCm2M2p8NYHKuE+uaZGIynmXGFXnyw0NPt4wdmS7CcJ8K16ZgpoZTaKAgBv09P4DbFTRldamPY1hAO7jqOeKM/GzEeNHu0KtVeQPfI/XvAzVWGUJSCg4vma4GfqaiBmgICK52uC3WsUJ8Gk0RAOpF6DvAvoDvg5ixTkhxdxeHO+LEFUeKB/nr39WGJQC/l26JUxhygsWFUTjqaXAuct1YxFXN9M2IJlrLjwcxkg4WbCV5bwrxLhYBQYpUlwvG0lnEVOF8MgG6XsGUfFA2NE7uxHsFh/iw4HlVI2PW+nUgzlEc1DfV2qS7avCrf/ILYyNwdg0mSjagCwtzw3aWUrpSF2y2T1il6JrZUSSLhnICIebh0bBmXmLw3s8BNjIxCFWI8dDmnyfcPzolq0tcMBJwNF4RiAivh2CEuFhAjmLaCnaeoMczf6jiE8TbQJDCMTDS0N4SQ7tfyEOSuQA90eMvhmEiR4v8hiBYulYIqEiaV8MzSA9RTeT5hiMYQuGnaE0wyyh+6dKXKxRJYWZgTdwCpLttRbWjrgO5qUONzs+6WglQNFC2c345oavRKHezWEYxzZw7ndAo45pMRCsE1NsyRNK7wvzLDpZQBjV36ODTNsep2CGsW32mFy0YcuQP1oCJcMcYuJkkD8ljwE2RIoS9KvoimPeTO9YYilEv4YMG+mNwwxjewnKzBYpDUMYRy6jA/OmoNAwj2DpFSYYhkVenQ/IbEOwcH0hy7lgx+qX1ZADA9tyucZ7pybNGgS6Pw6/M51hGPJiVaMVMvzatJeshXLYwZStEwM8+JY8iUXxi5AiscWbik4j4vUMAOStV+4pajv1AFDUmGrIxxzbDox6igXLsn1ju8brrqhRS/l4yLwRZHCK3UAi9haC3VPCq/U7j2pBFqoexIsUsZTyEi0dSlY3aQu/vBqyBULlxoy45WCae7My4WntLCJeAmKohmSbRbz+6RsUJVmIwWdn5ZXSG24wjQcknFoCSd2iqq8ya+14YWc3Vw5oaU8xRxkJXlN1Ia6Zpuiq++ELqJqVsUMac2yoOwJlfyWo5RvQzEnESO2YFJY2MQKOTU2fCkvKzx994BbVcBsUEbD88xq0RG9BwpYaGXsV3lJyQ2tsBULWKRdAnclEywpHw2gJ5yKUY7RKh3BYGCFnLovC6EtpmgPq2n+3grzdupS9TepfXTGtJKjC0EAaUHVKfU4L6QlKfBOpH0w94lBUGNGYyjIp+W+TVrQWSd3cELOy/gUme1SsZBPVVP5YUFzJkGGrbORV8Set5YCIRXhfZAUvbwi9svFktGbH/IKIKLo5Zl9Szi2L8UumDUQPpLKfW7HgpS35XgLF9hINlSMW6GiqGviomu3g1an02kNuGQ3rYh75NbEvlxdPP98vrjirn0iDWSZk84yO+VCPj8slhTrCU1rfOQ1Jx+6Z4PWuNMZH35miq8UcY1Vjjnh9MlMGpoMq2rIVlagVYPcukF5t24jjMsGmVVVgQblIx/iXLAZ9tVOXIB1sa8qnom4BFgXy6+MTSlPZglNOLs4TzkodWi6Zzi0VIWSLvrStly0+4oua7T+DEA46/4zJwCsSrhj3NlAK0QLJIuBpeFVIxqq9uyWpU+7pvCE6UoftXwrwi35gKOyWGtPV22E4/sVPdvDS5e9M6blLHc3UO1t8KpV7PT4F2UEVwr6SEhYxsOXjNtplXNz3o1x2TWoGNcbvmL02dyzD0eaSOcNt9cVBeMULSCFNekwasE3qGlZ6EreDSVIDq1Xp2dsj0VumdQK9YgoLozqRJ+DYyJtAhK9MFsw9U1L7k2DWiJvNXtWiq5tg+9G+v2K7oyB/BtmlbeAY+M2Y5qjh0tuuD2vnIlWjgJlJ2ryhnMEewHPWVeXmXbvbAoM3n1XU35stWdknv9yE14MUSR8Hjg37+o2OlRSfmQ1KBGpslImKnsFN2hzU0+e+wZv7XOwT/ecbyn6+qYhlSR7Zd8Piorf9Dzf/NefAv7im3TGnL1iqsBSIZsv7yWwj5WtRiH8hmT11lFT7NdRK6AcfL/4JJosp1//DrYhqjtsLD/dzHZxEZHYZgi3xKgzEGNCJ7mJfdUEh2RtGrdKpwvDfMq8X6sZTr8zbk1a404/5OazN5fPf1/8uPj283vAbVB9ZKv56XDyNTHgL2rQENseO/XOeOwNKpxo//sgfsfG0uYYKwMqrqPfhjcGxFu0S2hjWEKfFAe/KD48amVkD/b1ITZxzjRVNscwodbI6DbveEdSnxt7IOuvQXbo+zS6VT6Q2gy3DiSGh15xGXdV+2uY23d/We82DhjdV57sh9Urxs2RYihBKoNVZ1c24K74QLoVQE7O2Xa5m7BcIfLDMDYa0nmhciE23Tw/Pj9qJUgZ+10XrieHJO4fejl2jBmkWrZMY1kuyaRZVthTI8YU0m6/U863SrvlcmOLuaR1j2LYoBqoKMVysU0MDYIUXsUKZR2gR8mrUVppa7sYcxyYqfawEyvwNcGuuFBbkxojEKoW9XvGLWxiBIBrOIyN80FjrISUrmIyU47VydqhLlKtEH8/xrqQasjOZWanEEt3dEimistDqN8n9or5mO3okexVq6lqzY3dnBgxYvxT8X+MBl+kHBxWxgAAAABJRU5ErkJggg==",alt:""}),c.a.createElement("div",{className:"home__inputContainer"},c.a.createElement(A,null))))},P=(t(68),t(33)),U=t.n(P),B=t(45),I=function(e){var a=Object(n.useState)(null),t=Object(v.a)(a,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(B.a)(U.a.mark((function a(){return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyAbVfeGgfZD33cyUgbteHnjORwCX9FInxE","&cx=").concat("72938b334ba71ca4d","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){r(e)}));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),{data:c}},K=t(86),Y=t(46),x=t.n(Y),q=t(47),C=t.n(q),V=t(48),G=t.n(V),J=t(49),R=t.n(J),M=t(50),z=t.n(M);var W=function(){var e=N(),a=Object(v.a)(e,2),t=a[0].term,n=(a[1],I(t).data);return c.a.createElement("div",{className:"searchPage"},c.a.createElement("div",{className:"searchPage__header"},c.a.createElement(K.a,{to:"/"},c.a.createElement("img",{alt:"",className:"searchPage__logo",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"})),c.a.createElement("div",{className:"serchPage__headerBody"},c.a.createElement(A,{hideButtons:!0}),c.a.createElement("div",{className:"searchPage__options"},c.a.createElement("div",{className:"searchPage__optionsLeft"},c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(h.a,null),c.a.createElement(K.a,{to:"/all"},"All")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(x.a,null),c.a.createElement(K.a,{to:"/news"},"News")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(C.a,null),c.a.createElement(K.a,{to:"/images"},"Images")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(G.a,null),c.a.createElement(K.a,{to:"/shopping"},"Shopping")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(R.a,null),c.a.createElement(K.a,{to:"/maps"},"Maps")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(z.a,null),c.a.createElement(K.a,{to:"/more"},"More"))),c.a.createElement("div",{className:"searchPage__optionsRight"},c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(K.a,{to:"/settings"},"Setings")),c.a.createElement("div",{className:"searchPage__option"},c.a.createElement(K.a,{to:"/tools"},"Tools")))))),t&&c.a.createElement("div",{className:"serchPage__results"},c.a.createElement("p",{className:"searchPage__resultCount"},"about ",null===n||void 0===n?void 0:n.searchInformation.formattedTotalResults," results (",null===n||void 0===n?void 0:n.searchInformation.formattedSearchTime,"seconds) for ",t),null===n||void 0===n?void 0:n.items.map((function(e){var a,t,n,r,l,s;return c.a.createElement("div",{className:"searchPage__result"},c.a.createElement("a",{href:e.link},(null===(a=e.pagemap)||void 0===a||null===(t=a.cse_image)||void 0===t?void 0:t.length)>0&&(null===(n=e.pagemap)||void 0===n||null===(r=n.cse_image[0])||void 0===r?void 0:r.src)&&c.a.createElement("img",{className:"searchPage__resultImage",src:null===(l=e.pagemap)||void 0===l||null===(s=l.cse_image[0])||void 0===s?void 0:s.src}),e.displayLink," "),c.a.createElement("a",{href:e.link,className:"searchPage__resultTitle"},c.a.createElement("h2",null,e.title)),c.a.createElement("p",{className:"searchPage__resultSnippet"},e.snippet))}))))};var F=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s.a,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/search"},c.a.createElement(W,null)),c.a.createElement(o.a,{path:"/"},c.a.createElement(y,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,{initialState:{term:null},reducer:S},c.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.ae7da843.chunk.js.map