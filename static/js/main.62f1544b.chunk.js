(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={input:"Filter_input__2pIN0"}},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),s=n(9),i=n.n(s),o=n(2),l=n(11),b=n(4),u=n(7),j=n(3),m=n(32),d=Object(b.b)("contact/addContact",(function(t,e){return{payload:{id:Object(m.a)(),name:t,number:e}}})),O=Object(b.b)("contact/deleteContact"),h=Object(b.b)("contacts/onChangeFilter"),f=[{id:"3145q6",name:"Bill Gatesevich",number:"044242424600"},{id:"6531q4",name:"Mark Zuckerman",number:"062746004242"},{id:"3131q6",name:"Linus Torvaldsiuk",number:"057242424600"},{id:"q53143",name:"Jeff Bezenko",number:"064723004242"}],p=function(t){return window.localStorage.setItem("contacts",JSON.stringify(t))},_=Object(b.c)((window.localStorage.getItem("contacts")||window.localStorage.setItem("contacts",JSON.stringify(f)),JSON.parse(window.localStorage.getItem("contacts"))),(c={},Object(u.a)(c,d,(function(t,e){var n=e.payload,c=[].concat(Object(l.a)(t),[n]);return p(c),c})),Object(u.a)(c,O,(function(t,e){var n=e.payload,c=t.filter((function(t){return t.id!==n}));return p(c),c})),c)),x=Object(b.c)("",Object(u.a)({},h,(function(t,e){return e.payload}))),g=Object(j.b)({items:_,filter:x}),N=Object(l.a)(Object(b.d)()),y=Object(b.a)({reducer:{contacts:g,middleware:N}}),C=n(14),v=n(5),w=n.n(v),k=n(1),F=Object(o.b)()((function(){var t=Object(o.c)(),e=Object(o.d)((function(t){return t.contacts.items})),n=Object(a.useState)(""),c=Object(C.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),l=Object(C.a)(i,2),b=l[0],u=l[1],j=function(t){var e=t.target,n=e.type,c=e.value;switch(n){case"text":s(c);break;case"tel":u(c)}};return Object(k.jsx)("div",{children:Object(k.jsxs)("form",{onSubmit:function(n){e.some((function(t){return t.name===r}))?alert("".concat(r," is already in your phonebook.")):e.some((function(t){return t.number===b}))?alert("Person with number ".concat(b," is already in your phonebook.")):(t(d(r,b)),s(""),u(""),n.preventDefault())},className:w.a.form,children:[Object(k.jsxs)("label",{className:w.a.label,children:["Name \xa0\xa0\xa0\xa0",Object(k.jsx)("input",{className:w.a.input,type:"text",onChange:j,value:r,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(k.jsxs)("label",{className:w.a.label,children:["Number \xa0",Object(k.jsx)("input",{className:w.a.input,type:"tel",onChange:j,name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(k.jsx)("button",{className:w.a.btn,type:"onSubmit",children:"Add contact"})]})})})),S=n(16),L=n.n(S),I=Object(o.b)()((function(){var t=Object(o.c)(),e=Object(o.d)((function(t){return t.contacts.filter}));return Object(k.jsxs)("label",{children:["Find contacts by name \xa0",Object(k.jsx)("input",{className:L.a.input,type:"text",value:e,onChange:function(e){return t(h(e.target.value))}})]})})),J=n(6),q=n.n(J),A=Object(o.b)()((function(){var t=Object(o.c)(),e=Object(o.d)((function(t){return function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}(t.contacts.items,t.contacts.filter)}));return Object(k.jsxs)(k.Fragment,{children:[!e.length&&Object(k.jsx)("h4",{children:"Contacts list is empty."}),!!e.length&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h4",{className:q.a.list_title,children:"Contacts list:"}),Object(k.jsx)("ul",{className:q.a.list,children:e.map((function(e){var n=e.id,c=e.name,a=e.number;return Object(k.jsxs)("li",{className:q.a.list_item,children:[Object(k.jsxs)("a",{href:"tel:"+{number:a},children:[Object(k.jsxs)("span",{className:q.a.name,children:[c,"\xa0:"]}),Object(k.jsx)("span",{className:q.a.number,children:a})]}),Object(k.jsx)("button",{type:"button",className:q.a.btn,onClick:function(){return t(O(n))},children:Object(k.jsx)("span",{className:"material-icons",children:"delete"})})]},n)}))})]})]})}));n(28);function z(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h2",{children:"Phonebook"}),Object(k.jsx)(I,{}),Object(k.jsx)(F,{}),Object(k.jsx)(A,{})]})}n(29);i.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(o.a,{store:y,children:Object(k.jsx)(z,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={form:"Form_form__3CV4R",label:"Form_label__Q7O4L",input:"Form_input__MB5Nf",btn:"Form_btn__1c8H4"}},6:function(t,e,n){t.exports={list:"ContactsList_list__23GZI",list_title:"ContactsList_list_title__2HyiT",list_item:"ContactsList_list_item__3FFc9",name:"ContactsList_name__252os",number:"ContactsList_number__170m4",btn:"ContactsList_btn__17n8Y"}}},[[30,1,2]]]);
//# sourceMappingURL=main.62f1544b.chunk.js.map