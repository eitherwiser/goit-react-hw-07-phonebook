(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{2:function(t,e,a){t.exports={table_wrapper:"ContactsList_table_wrapper__331w0",table_wrapper__scroll:"ContactsList_table_wrapper__scroll__-wclP",table:"ContactsList_table__XsqVB",table_header:"ContactsList_table_header__1zC7B",table_header__floating_cell:"ContactsList_table_header__floating_cell__aafZl",table_row:"ContactsList_table_row__1LXOi",item:"ContactsList_item__3yHkR",btn:"ContactsList_btn__17n8Y",name:"ContactsList_name__252os",number:"ContactsList_number__170m4",email:"ContactsList_email__19A_r",contact:"ContactsList_contact__1q9x7"}},22:function(t,e,a){t.exports={label:"Filter_label__1El4g",input:"Filter_input__2pIN0"}},7:function(t,e,a){t.exports={form:"Form_form__3CV4R",label:"Form_label__Q7O4L",input:"Form_input__MB5Nf",btn:"Form_btn__1c8H4",reset_btn:"Form_reset_btn__1bqs-"}},85:function(t,e,a){},86:function(t,e,a){},87:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(16),s=a.n(r),l=a(9),o=a(10),i=a(6),b=a(4),u=a(8),j=a(11),d=a.n(j),m=a(18),_=a(13),O=a.n(_);O.a.defaults.baseURL="https://61a7e524387ab200171d2f4b.mockapi.io/testAPI";var f,h,p=Object(i.c)("contacts/fetchContacts",Object(m.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("/contacts");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))),x=Object(i.c)("contacts/addContact",function(){var t=Object(m.a)(d.a.mark((function t(e){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.post("/contacts",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),N=Object(i.c)("contacts/deleteContact",function(){var t=Object(m.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.delete("/contacts/".concat(e));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),C=Object(i.b)("contacts/onChangeFilter"),v=Object(i.d)([],(f={},Object(b.a)(f,p.fulfilled,(function(t,e){return e.payload})),Object(b.a)(f,x.fulfilled,(function(t,e){var a=e.payload;return[].concat(Object(o.a)(t),[a])})),Object(b.a)(f,N.fulfilled,(function(t,e){var a=e.payload;return t.filter((function(t){return t.id!==a}))})),f)),w=Object(i.d)("",Object(b.a)({},C,(function(t,e){return e.payload}))),y=Object(i.d)(!1,(h={},Object(b.a)(h,p.pending,(function(){return!0})),Object(b.a)(h,p.fulfilled,(function(){return!1})),Object(b.a)(h,p.rejected,(function(){return!1})),Object(b.a)(h,x.pending,(function(){return!0})),Object(b.a)(h,x.fulfilled,(function(){return!1})),Object(b.a)(h,x.rejected,(function(){return!1})),Object(b.a)(h,N.pending,(function(){return!0})),Object(b.a)(h,N.fulfilled,(function(){return!1})),Object(b.a)(h,N.rejected,(function(){return!1})),h)),g=Object(u.b)({items:v,filter:w,loading:y}),k=Object(o.a)(Object(i.e)()),L=Object(i.a)({reducer:{contacts:g,middleware:k}}),F=a(19),z=a(7),A=a.n(z),S=a(1),E=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.contacts.items})),a=Object(n.useState)(""),c=Object(F.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(""),i=Object(F.a)(o,2),b=i[0],u=i[1],j=Object(n.useState)(""),d=Object(F.a)(j,2),m=d[0],_=d[1],O=function(t){var e=t.target,a=e.type,n=e.value;switch(a){case"text":s(n);break;case"tel":u(n);break;case"email":_(n)}};return Object(S.jsx)("div",{children:Object(S.jsxs)("form",{onSubmit:function(a){e.some((function(t){return t.name===r}))?alert('"'.concat(r,'" is already in your phonebook.')):e.some((function(t){return t.number===b}))?alert('Person with number "'.concat(b,'" is already in your phonebook.')):e.some((function(t){return t.email===m}))?alert('Person with E-mail "'.concat(m,'" is already in your phonebook.')):(t(x({name:r,number:b,email:m})),s(""),u(""),_(""),a.preventDefault())},className:A.a.form,children:[Object(S.jsxs)("label",{className:A.a.label,children:["Name \xa0\xa0\xa0\xa0\xa0",Object(S.jsx)("input",{className:A.a.input,type:"name",onChange:O,value:r,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(S.jsx)("button",{onClick:function(){return s("")},className:"".concat(A.a.reset_btn),type:"button",children:"X"})]}),Object(S.jsxs)("label",{className:A.a.label,children:["E-mail \xa0",Object(S.jsx)("input",{className:A.a.input,type:"email",onChange:O,name:"email",value:m,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",title:"Example: bob.pupkin@somemail.com",required:!0}),Object(S.jsx)("button",{onClick:function(){return _("")},className:"".concat(A.a.reset_btn),type:"button",children:"X"})]}),Object(S.jsxs)("label",{className:A.a.label,children:["Number \xa0",Object(S.jsx)("input",{className:A.a.input,type:"tel",onChange:O,name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(S.jsx)("button",{onClick:function(){return u("")},className:"".concat(A.a.reset_btn),type:"button",children:"X"})]}),Object(S.jsx)("button",{className:"".concat(A.a.submit__btn," ").concat(A.a.btn),type:"onSubmit",children:"Add contact"})]})})},q=a(32),P=a(33),B=a(36),X=a(35),Z=a(34),I=a.n(Z),J=(a(84),function(t){Object(B.a)(a,t);var e=Object(X.a)(a);function a(){return Object(q.a)(this,a),e.apply(this,arguments)}return Object(P.a)(a,[{key:"render",value:function(){return Object(S.jsx)(I.a,{type:"ThreeDots",color:"#f0f0f0",height:50,width:150,timeout:2e4})}}]),a}(n.Component)),M=a(22),R=a.n(M),D=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return t.contacts.filter}));return Object(S.jsxs)("label",{className:R.a.label,children:["Search contact \xa0",Object(S.jsx)("input",{className:R.a.input,type:"text",value:e,onChange:function(e){return t(C(e.target.value))}})]})},H=a(2),V=a.n(H),$=function(){var t=Object(l.b)(),e=Object(l.c)((function(t){return function(t,e){var a=e.trim().toLowerCase(),n=t.filter((function(t){return t.name.toLowerCase().includes(a)})),c=t.filter((function(t){return t.number.toLowerCase().includes(a)})),r=t.filter((function(t){return t.email.toLowerCase().includes(a)})),s=[].concat(Object(o.a)(n),Object(o.a)(c),Object(o.a)(r));return Object(o.a)(new Set(s))}(t.contacts.items,t.contacts.filter)})),a=Object(l.c)((function(t){return t.contacts.loading}));return Object(n.useEffect)((function(){t(p())}),[t]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(D,{}),!e.length&&Object(S.jsx)("h4",{children:"Contacts list is empty."}),a&&Object(S.jsx)(J,{}),!!e.length&&Object(S.jsx)("div",{className:V.a.table_wrapper,children:Object(S.jsx)("div",{className:V.a.table_wrapper__scroll,children:Object(S.jsxs)("table",{className:V.a.table,children:[Object(S.jsx)("caption",{}),Object(S.jsx)("thead",{className:V.a.table_header,children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:Object(S.jsx)("div",{className:V.a.table_header__floating_cell,label:"Name"})}),Object(S.jsx)("th",{children:Object(S.jsx)("div",{className:V.a.table_header__floating_cell,label:"Phone number"})}),Object(S.jsx)("th",{children:Object(S.jsx)("div",{className:V.a.table_header__floating_cell,label:"E-mail"})}),Object(S.jsx)("th",{children:Object(S.jsx)("div",{className:V.a.table_header__floating_cell,label:"Options"})}),Object(S.jsx)("th",{class:"scrollbarhead"})]})}),Object(S.jsx)("tbody",{className:V.a.tbody,children:e.map((function(e){var a=e.name,n=e.number,c=e.email,r=e.id;return Object(S.jsxs)("tr",{className:V.a.table_row,children:[Object(S.jsxs)("td",{className:"".concat(V.a.item," + ").concat(V.a.name),children:[a,"\xa0"]}),Object(S.jsx)("td",{className:"".concat(V.a.item," + ").concat(V.a.number),children:Object(S.jsx)("a",{href:"tel:"+{number:n},className:V.a.contact,children:n})}),Object(S.jsx)("td",{className:"".concat(V.a.item," + ").concat(V.a.email),children:Object(S.jsx)("a",{href:"mailto:"+{email:c},className:V.a.contact,children:c})}),Object(S.jsx)("td",{className:"".concat(V.a.item," + ").concat(V.a.options),children:Object(S.jsx)("button",{type:"button",className:V.a.btn,onClick:function(){return t(N(r))},children:Object(S.jsx)("span",{className:"material-icons",children:"delete"})})})]},r)}))})]})})})]})};a(85);function Q(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h2",{children:"Phonebook"}),Object(S.jsx)(E,{}),Object(S.jsx)($,{})]})}a(86);s.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(l.a,{store:L,children:Object(S.jsx)(Q,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.fa8985af.chunk.js.map