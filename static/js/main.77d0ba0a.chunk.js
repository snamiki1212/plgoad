(this["webpackJsonpcanada-immigration-scheduler"]=this["webpackJsonpcanada-immigration-scheduler"]||[]).push([[0],{93:function(e,t,r){"use strict";r.r(t);var n,a,c,o,i,u,s,b=r(14),j=r(1),O=r.n(j),d=r(15),l=r.n(d),f=r(23),h=r(52),v=new Date,g={birth:Object(h.a)(v,-25).toISOString(),age:25,setBirth:function(){throw new Error("this func should be replaced but not yet")}},I=O.a.createContext(g),S=function(e){var t=e.children,r=O.a.useState(g.birth),n=Object(f.a)(r,2),a=n[0],c=n[1],o={birth:a,age:function(e){var t=new Date,r=new Date(e),n=t.getFullYear()-r.getFullYear(),a=t.getMonth()-r.getMonth();return(a<0||0===a&&t.getDate()<r.getDate())&&n--,n}(a),setBirth:c};return Object(b.jsx)(I.Provider,{value:o,children:t})},C=function(){return O.a.useContext(I)},y=r(19),p=r(58),m=function(e){var t=e.children;return Object(b.jsx)(y.a,{utils:p.a,children:Object(b.jsx)(S,{children:t})})},_=r(123),k=r(126),x=r(119),D=function(){var e=C(),t=e.birth,r=e.age,n=e.setBirth,a=O.a.useCallback((function(e){e&&n(e.toISOString())}),[n]);return Object(b.jsxs)(x.a,{children:[Object(b.jsx)(k.a,{alt:"you"}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:["age:",r]}),Object(b.jsx)(_.a,{disableFuture:!0,openTo:"year",format:"yyyy-MM-dd",label:"Date of birth",views:["year","month","date"],value:t,onChange:a})]})]})},E=r(17),w=r(22),M=r(61),A=r(59),L=r(54),B=r(55),F=r(11),T="FIELD__H1",H="FIELD__H2",R="storyId",Y="order",V="RESOURCE_ID__SHARED__AGE",P="RESOURCE_ID__SHARED__LIMIT",W="#00008b",G="SHARED",N="VISA",U="STATUS",J=(n={},Object(F.a)(n,T,N),Object(F.a)(n,H,"Study VISA"),Object(F.a)(n,"eventBorderColor",W),n),K=(a={},Object(F.a)(a,T,N),Object(F.a)(a,H,"Co-op VISA"),Object(F.a)(a,"eventBorderColor",W),a),q=(c={},Object(F.a)(c,T,N),Object(F.a)(c,H,"Working Holiday VISA"),Object(F.a)(c,"eventBorderColor",W),c),z=(o={},Object(F.a)(o,T,U),Object(F.a)(o,H,"Student"),Object(F.a)(o,"eventBorderColor",W),o),Q=(i={},Object(F.a)(i,T,U),Object(F.a)(i,H,"Worker"),Object(F.a)(i,"eventBorderColor",W),i),X=[(u={id:V},Object(F.a)(u,T,G),Object(F.a)(u,H,"Age"),Object(F.a)(u,R,"ALL"),Object(F.a)(u,"eventBorderColor",W),u),(s={id:P},Object(F.a)(s,T,G),Object(F.a)(s,H,"Working Holiday Application Limit"),Object(F.a)(s,R,"ALL"),Object(F.a)(s,"eventBorderColor",W),s)],Z=r(35),$=r(125);function ee(){return Object($.a)()}var te=function(e){return e.split("T")[0]},re=function(e){var t=function(){var e=new Date;return Object(h.a)(e,10).getFullYear()}(),r=function(e,t){for(var r=[],n=e;n<=t;n++)r.push(n);return r}(new Date(e).getFullYear(),t),n=function(e){var t=Object(h.a)(e,31),r=Object(Z.a)(t,11),n=te(r.toISOString()),a=te(e.toISOString());return{id:ee(),resourceId:P,title:"Limitation till WorkingHoliday",start:a,end:n}}(e),a=r.map((function(t,r){var n=function(){e.setFullYear(t);var r=e.toISOString();return te(r)}(),a=Object(Z.a)(new Date(n),11).toISOString(),c=te(a);return{id:ee(),resourceId:V,title:"Aage:".concat(r),start:n,end:c}}));return[n].concat(Object(w.a)(a))},ne=r(56),ae=r(57),ce=r(60),oe="#8fbc8b",ie="#ffd700",ue=function(){function e(t){Object(ne.a)(this,e),this._periodMonths=36,this._events=void 0,this._resources=void 0,this._storyId=void 0,this._storyId=ee();var r=this.createStory(this._storyId,t),n=Object(f.a)(r,2),a=n[0],c=n[1];this._resources=a,this._events=c}return Object(ae.a)(e,[{key:"createStory",value:function(e,t){var r,n,a,c,o,i,u,s,b,j,O,d=ee(),l=Object(E.a)(Object(E.a)({},K),{},(r={id:d},Object(F.a)(r,R,e),Object(F.a)(r,Y,1),r)),f=(n={id:ee(),resourceId:d,start:t,end:Object(Z.a)(t,24)},Object(F.a)(n,Y,1),Object(F.a)(n,"backgroundColor",oe),n),v=ee(),g=Object(E.a)(Object(E.a)({},J),{},(a={id:v},Object(F.a)(a,R,e),Object(F.a)(a,Y,2),a)),I=(c={id:ee(),resourceId:v,start:t,end:Object(Z.a)(t,24)},Object(F.a)(c,Y,2),Object(F.a)(c,"backgroundColor",oe),c),S=ee(),C=Object(E.a)(Object(E.a)({},q),{},(o={id:S},Object(F.a)(o,R,e),Object(F.a)(o,Y,3),o)),y=Object(Z.a)(t,24),p=(i={id:ee(),resourceId:S,start:y,end:Object(Z.a)(y,12)},Object(F.a)(i,Y,3),Object(F.a)(i,"backgroundColor",oe),i),m=(u={id:ee(),resourceId:S,start:Object(ce.a)(Object(h.a)(y,-1),8),end:y},Object(F.a)(u,Y,3),Object(F.a)(u,"backgroundColor","#e73758"),u),_=ee(),k=Object(E.a)(Object(E.a)({},z),{},(s={id:_},Object(F.a)(s,R,e),Object(F.a)(s,Y,4),s)),x=(b={id:ee(),resourceId:_,start:t,end:Object(Z.a)(t,24)},Object(F.a)(b,Y,4),Object(F.a)(b,"eventBackgroundCoor",ie),b),D=ee();return[[l,g,C,k,Object(E.a)(Object(E.a)({},Q),{},(j={id:D},Object(F.a)(j,R,e),Object(F.a)(j,Y,5),j))],[f,I,m,p,x,(O={id:ee(),resourceId:D,start:Object(Z.a)(t,12),end:Object(Z.a)(t,36)},Object(F.a)(O,Y,5),Object(F.a)(O,"eventBackgroundCoor",ie),O)]]}},{key:"events",get:function(){return this._events}},{key:"resources",get:function(){return this._resources}},{key:"periodMonths",get:function(){return this._periodMonths}}]),e}(),se="MY_TIME_LINE_NAME",be={left:"today prev,next",center:"title",right:"".concat(se,",listMonth")},je={initialView:se},Oe={resourceGroupField:R},de=[{field:T,headerContent:"Category"},{field:H,headerContent:"Event"}],le=Object(F.a)({},se,{name:"timeline",type:"resourceTimelineYear",duration:{year:15},buttonText:"TIME_LINE"}),fe={resourceGroupLabelContent:function(e){var t=e.groupValue;return"Story [ID:".concat(t,"]")},resourceOrder:Y},he=Object(E.a)(Object(E.a)(Object(E.a)(Object(E.a)(Object(E.a)({resourceAreaColumns:de,views:le,headerToolbar:be,slotLabelFormat:[{year:"numeric"},{month:"numeric"}]},je),Oe),{schedulerLicenseKey:"GPL-My-Project-Is-Open-Source"}),{nowIndicator:!0}),fe);var ve=function(e,t,r){for(var n=[e],a=e;a<t;)n.push(a+=r||1);return n}(21,31),ge=[1,5,9],Ie=function(){var e=C().birth,t=function(){var e=O.a.useState([]),t=Object(f.a)(e,2),r=t[0],n=t[1];return[r,X,O.a.useCallback((function(e){var t=new Date(e),r=re(t);n(r)}),[])]}(),r=Object(f.a)(t,3),n=r[0],a=r[1],c=r[2],o=function(){var e=O.a.useState([]),t=Object(f.a)(e,2),r=t[0],n=t[1];return{events:r,select:O.a.useCallback((function(e){if(!e.resource)return console.warn("Unexpected data that info does not have resource.");var t={id:ee(),resourceId:e.resource.id,start:e.startStr,end:e.endStr};n((function(e){return[].concat(Object(w.a)(e),[t])}))}),[]),click:O.a.useCallback((function(e){if(window.confirm("Would you like to remove this event?")){var t=e.event.id;n((function(e){return e.filter((function(e){return e.id!==t}))}))}}),[]),set:n}}(),i=o.events,u=o.select,s=o.click,j=o.set,d=function(){var e=O.a.useState([]),t=Object(f.a)(e,2),r=t[0],n=t[1];return{stories:r,generate:O.a.useCallback((function(e){var t=new Date(e),r=ve.map((function(e){return Object(h.a)(t,e)})).flatMap((function(e){return ge.map((function(t){return Object(Z.a)(e,t)}))})).map((function(e){return new ue(e)}));n(r)}),[])}}(),l=d.stories,v=d.generate,g=O.a.useMemo((function(){return l.reduce((function(e,t){return[].concat(Object(w.a)(e),Object(w.a)(t.resources))}),[])}),[l]),I=O.a.useMemo((function(){return l.reduce((function(e,t){return[].concat(Object(w.a)(e),Object(w.a)(t.events))}),[])}),[l]),S=O.a.useMemo((function(){return[].concat(Object(w.a)(a),Object(w.a)(g))}),[a,g]),y=O.a.useMemo((function(){return[].concat(Object(w.a)(n),Object(w.a)(I))}),[n,I]);return O.a.useEffect((function(){v(e)}),[v,e]),O.a.useEffect((function(){j(y)}),[y,j]),O.a.useEffect((function(){c(e)}),[e,c]),Object(b.jsx)(M.a,Object(E.a)(Object(E.a)({selectable:!0,editable:!0,plugins:[B.a,A.a,L.a],events:i,resources:S,select:u,eventClick:s},he),{},{initialDate:"2020-06-01"}))},Se=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(D,{}),Object(b.jsx)("hr",{}),Object(b.jsx)(Ie,{})]})};var Ce=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(m,{children:Object(b.jsx)(Se,{})})})},ye=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,128)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),c(e),o(e)}))};l.a.render(Object(b.jsx)(O.a.StrictMode,{children:Object(b.jsx)(Ce,{})}),document.getElementById("root")),ye()}},[[93,1,2]]]);
//# sourceMappingURL=main.77d0ba0a.chunk.js.map