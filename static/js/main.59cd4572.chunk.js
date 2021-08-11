(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{118:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),o=n(9),s=n(25),i=n(5),l="[ui] Open modal",u="[ui] Close modal",j="[event] Add new",d="[event] Set active",b="[event] Clear active",m="[event] Event updated",O="[event] Event deleted",f="[event] Events loaded",p="[event] Events purged",v="[auth] Checking login state finished",h="[auth] Login",x="[auth] Logout",g={checking:!0},y=n(53),N={events:[],activeEvent:null},w={modalOpen:!1},E=Object(s.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!0});case u:return Object(i.a)(Object(i.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:t.payload});case j:return Object(i.a)(Object(i.a)({},e),{},{events:[].concat(Object(y.a)(e.events),[t.payload])});case b:return Object(i.a)(Object(i.a)({},e),{},{activeEvent:null});case m:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case O:return Object(i.a)(Object(i.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case f:return Object(i.a)(Object(i.a)({},e),{},{events:Object(y.a)(t.payload)});case p:return Object(i.a)({},N);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(i.a)(Object(i.a)({},e),{},{checking:!1},t.payload);case v:return Object(i.a)(Object(i.a)({},e),{},{checking:!1});case x:return{checking:!1};default:return e}}}),k=n(63),S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,C=Object(s.d)(E,S(Object(s.a)(k.a))),D=n(34),T=n(10),P=n(12),I=n.n(P),A=n(21),_=n(18),L=n.n(_),R="https://mern-calendar-ms.herokuapp.com/api",G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(R,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(R,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},F=n(17),H=n.n(F),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{end:H()(e.end).toDate(),start:H()(e.start).toDate()})}))},M=function(e){return{type:j,payload:e}},U=function(){return{type:b}},B=function(e){return{type:m,payload:e}},X=function(){return{type:O}},q=function(e){return{type:f,payload:e}},z=function(e){return{type:h,payload:e}},W=function(){return function(e){localStorage.clear(),e({type:p}),e(K())}},K=function(){return{type:x}},Q=function(){return{type:v}},Y=n(15),Z=n(24),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(Y.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(i.a)(Object(i.a)({},r),{},Object(Z.a)({},t.name,t.value)))};return[r,s,o]},ee=(n(85),n(2)),te=function(){var e=Object(o.b)(),t=$({lEmail:"",lPassword:""}),n=Object(Y.a)(t,2),a=n[0],r=n[1],c=$({rEmail:"",rName:"",rPassword1:"",rPassword2:""}),s=Object(Y.a)(c,2),i=s[0],l=s[1],u=a.lEmail,j=a.lPassword,d=i.rEmail,b=i.rName,m=i.rPassword1,O=i.rPassword2;return Object(ee.jsx)("div",{className:"container login-container",children:Object(ee.jsxs)("div",{className:"row",children:[Object(ee.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(ee.jsx)("h3",{children:"Ingreso"}),Object(ee.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=u,a=j,function(){var e=Object(A.a)(I.a.mark((function e(t){var r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(z({uid:c.uid,name:c.name}))):L.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:u,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:j,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]}),Object(ee.jsxs)("div",{className:"helper",children:[Object(ee.jsxs)("h5",{children:["Puedes crear una cuenta o logearte con una cuenta de prueba",Object(ee.jsx)("br",{}),Object(ee.jsx)("br",{})]}),Object(ee.jsx)("strong",{children:"Correo:"})," walterw@hotmail.com ",Object(ee.jsx)("br",{}),Object(ee.jsx)("strong",{children:"Contrase\xf1a:"})," 842hj34dd"]})]}),Object(ee.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(ee.jsx)("h3",{children:"Registro"}),Object(ee.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),m!==O)return L.a.fire("Error","Las contrase\xf1as no coinciden","error");var n,a,r;e((n=d,a=b,r=m,function(){var e=Object(A.a)(I.a.mark((function e(t){var c,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth/new",{email:n,name:a,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(z({uid:o.uid,name:o.name}))):L.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:b,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:d,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:m,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:O,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},ne=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(ee.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-5",children:[Object(ee.jsx)("span",{className:"navbar-brand",children:e}),Object(ee.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(W())},children:[Object(ee.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(ee.jsx)("span",{children:" Salir"})]})]})},ae=n(52),re=function(e){var t=e.event,n=t.title,a=t.user;return Object(ee.jsxs)("div",{children:[Object(ee.jsx)("strong",{children:n}),Object(ee.jsxs)("span",{children:[" -",a.name]})]})},ce=n(47),oe=n.n(ce),se=n(48),ie=n.n(se),le=function(){return{type:l}},ue={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};oe.a.setAppElement("#root");var je=H()().minutes(0).seconds(0).add(1,"hour"),de=je.clone().add(2,"hours"),be={title:"",notes:"",start:je.toDate(),end:de.toDate()},me=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).modalOpen,n=Object(o.c)((function(e){return e.calendar})).activeEvent,r=Object(a.useState)(je.toDate()),c=Object(Y.a)(r,2),s=c[0],l=c[1],j=Object(a.useState)(de.toDate()),d=Object(Y.a)(j,2),b=d[0],m=d[1],O=Object(a.useState)(!0),f=Object(Y.a)(O,2),p=f[0],v=f[1],h=Object(a.useState)(be),x=Object(Y.a)(h,2),g=x[0],y=x[1],N=g.title,w=g.notes,E=g.start,k=g.end;Object(a.useEffect)((function(){y(n||be)}),[n,y]);var S=function(e){var t=e.target;y(Object(i.a)(Object(i.a)({},g),{},Object(Z.a)({},t.name,t.value)))},C=function(){e({type:u}),e(U()),y(be)};return Object(ee.jsxs)(oe.a,{isOpen:t,onRequestClose:C,style:ue,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(ee.jsxs)("h1",{children:[" ",n?"Editar Evento":"Nuevo Evento"," "]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a,r=H()(E),c=H()(k);return r.isSameOrAfter(c)?L.a.fire("Error","La fecha fin debe ser diferente a la fecha de inicio","error"):N.trim().length<2?v(!1):(e(n?(a=g,function(){var e=Object(A.a)(I.a.mark((function e(t){var n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(B(a)):L.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(A.a)(I.a.mark((function t(n,a){var r,c,o,s,i;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,V("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento.id,e.user={_id:c,name:o},n(M(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(g)),v(!0),void C())},children:[Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora inicio"}),Object(ee.jsx)(ie.a,{onChange:function(e){l(e),y(Object(i.a)(Object(i.a)({},g),{},{start:e}))},value:s,className:"form-control"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora fin"}),Object(ee.jsx)(ie.a,{onChange:function(e){m(e),y(Object(i.a)(Object(i.a)({},g),{},{end:e}))},value:b,minDate:s,className:"form-control"})]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Titulo y notas"}),Object(ee.jsx)("input",{type:"text",className:"form-control ".concat(!p&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:N,onChange:S,autoComplete:"off"}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",value:w,onChange:S,name:"notes"}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(ee.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(ee.jsx)("i",{className:"far fa-save"}),Object(ee.jsx)("span",{children:" Guardar"})]})]})]})},Oe={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},fe=(n(115),function(){var e=Object(o.b)();return Object(ee.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(U()),e(le())},children:Object(ee.jsx)("i",{className:"fas fa-plus"})})}),pe=function(){var e=Object(o.b)();return Object(ee.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(A.a)(I.a.mark((function e(t,n){var a,r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,V("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(X()):L.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ee.jsx)("i",{className:"fas fa-trash"}),Object(ee.jsx)("span",{children:" Borrar Evento"})]})};n(116);H.a.locale("es");var ve=Object(ae.b)(H.a),he=function(){var e=Object(o.c)((function(e){return e.auth})).uid,t=Object(o.b)(),n=Object(o.c)((function(e){return e.calendar})),r=n.events,c=n.activeEvent,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(Y.a)(s,2),l=i[0],u=i[1];Object(a.useEffect)((function(){t(function(){var e=Object(A.a)(I.a.mark((function e(t){var n,a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=J(a.eventos),t(q(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[t]);return Object(ee.jsxs)("div",{className:"calendar-screen",children:[Object(ee.jsx)(ne,{}),Object(ee.jsx)(ae.a,{localizer:ve,events:r,startAccessor:"start",endAccessor:"end",messages:Oe,eventPropGetter:function(t,n,a,r){return{style:{backgroundColor:e===t.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"#ffffff"}}},onSelectEvent:function(e){t({type:d,payload:e})},onView:function(e){u(e),localStorage.setItem("lastView",e)},onDoubleClickEvent:function(e){t(le())},onSelectSlot:function(e){t(U())},selectable:!0,view:l,components:{event:re}}),Object(ee.jsx)(me,{}),Object(ee.jsx)(fe,{}),c&&Object(ee.jsx)(pe,{})]})},xe=n(37),ge=["isAuthenticated","component"],ye=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,ge);return localStorage.setItem("lastPath",a.location.pathname),Object(ee.jsx)(T.b,Object(i.a)(Object(i.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(n,Object(i.a)({},e)):Object(ee.jsx)(T.a,{to:"/login"})}}))},Ne=["isAuthenticated","component"],we=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,Ne);return Object(ee.jsx)(T.b,Object(i.a)(Object(i.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(T.a,{to:"/"}):Object(ee.jsx)(n,Object(i.a)({},e))}}))},Ee=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(A.a)(I.a.mark((function e(t){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(z({uid:a.uid,name:a.name}))):t(Q());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(ee.jsx)("h5",{children:" Wait..."}):Object(ee.jsx)(D.a,{children:Object(ee.jsx)("div",{children:Object(ee.jsxs)(T.d,{children:[Object(ee.jsx)(we,{exact:!0,path:"/login",component:te,isAuthenticated:!!r}),Object(ee.jsx)(ye,{exact:!0,path:"/",component:he,isAuthenticated:!!r}),Object(ee.jsx)(T.a,{to:"/"})]})})})},ke=function(){return Object(ee.jsx)(o.a,{store:C,children:Object(ee.jsx)(Ee,{})})};n(118);c.a.render(Object(ee.jsx)(ke,{}),document.getElementById("root"))},85:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.59cd4572.chunk.js.map