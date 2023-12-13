(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{200:function(e,t,c){},203:function(e,t,c){},208:function(e,t,c){},209:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),l=c(173),i=c.n(l),r=c(45),n=c(90),j=c(17),d=c(187),o=c(220),b=c(224),m=c(67),O=c(222),x=c(176),h=c(228),u=c(229),p=c(230),g=c(231),y=c(232),I=c(233),N=c(234),f=c(235),v=c(227),D=c(226),A=c(155),S=(c(200),c(6));var _=()=>Object(S.jsx)("div",{className:"spinner",children:Object(S.jsx)("div",{className:"spinner-border",role:"status",children:Object(S.jsx)("span",{className:"visually-hidden",children:"Loading..."})})});const{Header:w,Sider:C,Content:k}=v.a;var E=e=>{let{children:t}=e;const c=Object(j.p)(),{cartItems:l,loading:i}=Object(r.c)((e=>e.rootReducer)),[n,d]=Object(a.useState)(!1),{token:{colorBgContainer:o}}=D.a.useToken();return Object(a.useEffect)((()=>{localStorage.setItem("cartItems",JSON.stringify(l))}),[l]),Object(S.jsxs)(v.a,{children:[i&&Object(S.jsx)(_,{}),Object(S.jsxs)(C,{trigger:null,collapsible:!0,collapsed:n,children:[Object(S.jsx)("div",{className:"logo",children:Object(S.jsx)("h3",{children:"SellMate"})}),Object(S.jsxs)(A.a,{theme:"dark",mode:"inline",defaultSelectedKeys:[window.location.pathname],children:[Object(S.jsx)(A.a.Item,{icon:Object(S.jsx)(h.a,{}),onClick:()=>c("/"),children:"Home"},"/"),Object(S.jsx)(A.a.Item,{icon:Object(S.jsx)(u.a,{}),onClick:()=>c("/bills"),children:"Bills"},"/bills"),Object(S.jsx)(A.a.Item,{icon:Object(S.jsx)(p.a,{}),onClick:()=>c("/items"),children:"Items"},"/items"),Object(S.jsx)(A.a.Item,{icon:Object(S.jsx)(g.a,{}),onClick:()=>c("/customers"),children:"Customers"},"/customers"),Object(S.jsx)(A.a.Item,{icon:Object(S.jsx)(y.a,{}),onClick:()=>{localStorage.removeItem("user"),c("/login")},children:"Logout"},"/logout")]})]}),Object(S.jsxs)(v.a,{className:"site-layout",children:[Object(S.jsxs)(w,{style:{margin:8,padding:0,borderRadius:8,background:o},children:[s.a.createElement(n?I.a:N.a,{className:"trigger",onClick:()=>{d(!n)}}),Object(S.jsxs)("div",{className:"cart-item d-flex jusitfy-content-space-between flex-row",onClick:()=>c("/cart"),children:[Object(S.jsx)("p",{children:l.length}),Object(S.jsx)(f.a,{})]})]}),Object(S.jsx)(k,{className:"content",children:t})]})]})};c(203);var L=()=>{const e=Object(a.useRef)(),t=Object(r.b)(),[c,s]=Object(a.useState)([]),[l,i]=Object(a.useState)(!1),[n,j]=Object(a.useState)(null);Object(a.useEffect)((()=>{(async()=>{try{t({type:"SHOW_LOADING"});const{data:e}=await O.a.get("/api/bills/get-bills");s(e),t({type:"HIDE_LOADING"}),console.log(e)}catch(e){t({type:"HIDE_LOADING"}),console.log(e)}})()}),[]);const h=Object(x.useReactToPrint)({content:()=>e.current}),u=[{title:"ID ",dataIndex:"_id"},{title:"Cutomer Name",dataIndex:"customerName"},{title:"Contact No",dataIndex:"customerNumber"},{title:"Subtotal",dataIndex:"subTotal"},{title:"Tax",dataIndex:"tax"},{title:"Total Amount",dataIndex:"totalAmount"},{title:"Actions",dataIndex:"_id",render:(e,t)=>Object(S.jsx)("div",{children:Object(S.jsx)(d.a,{style:{cursor:"pointer"},onClick:()=>{j(t),i(!0)}})})}];return console.log(n),Object(S.jsxs)(E,{children:[Object(S.jsx)("div",{className:"d-flex justify-content-between",children:Object(S.jsx)("h1",{children:"Invoice list"})}),Object(S.jsx)(o.a,{columns:u,dataSource:c,bordered:!0}),l&&Object(S.jsxs)(b.a,{width:400,pagination:!1,title:"Invoice Details",visible:l,onCancel:()=>{i(!1)},footer:!1,children:[Object(S.jsxs)("div",{id:"invoice-POS",ref:e,children:[Object(S.jsx)("center",{id:"top",children:Object(S.jsxs)("div",{className:"info",children:[Object(S.jsx)("h2",{children:"HaLKA Food Cafe"}),Object(S.jsxs)("p",{children:[" ",Object(S.jsx)("br",{})," Dhaka, Bangladesh "]})]})}),Object(S.jsx)("div",{id:"mid",children:Object(S.jsxs)("div",{className:"mt-2",children:[Object(S.jsxs)("p",{children:["Customer Name : ",Object(S.jsx)("b",{children:n.customerName}),Object(S.jsx)("br",{}),"Phone No :  ",Object(S.jsx)("b",{children:n.customerNumber}),Object(S.jsx)("br",{}),"Date :"," ",Object(S.jsx)("b",{children:new Date(n.date).toLocaleDateString("en-GB")}),Object(S.jsx)("br",{})]}),Object(S.jsx)("hr",{style:{margin:"5px"}})]})}),Object(S.jsxs)("div",{id:"bot",children:[Object(S.jsx)("div",{id:"table",children:Object(S.jsx)("table",{children:Object(S.jsxs)("tbody",{children:[Object(S.jsxs)("tr",{className:"tabletitle",children:[Object(S.jsx)("td",{className:"item table-header",children:Object(S.jsx)("p",{children:Object(S.jsx)("b",{children:"Item"})})}),Object(S.jsx)("td",{className:"Hours table-header",children:Object(S.jsx)("p",{children:Object(S.jsx)("b",{children:"Quantity"})})}),Object(S.jsx)("td",{className:"Rate table-header",children:Object(S.jsx)("p",{children:Object(S.jsx)("b",{children:"Price"})})}),Object(S.jsx)("td",{className:"Rate table-header",children:Object(S.jsx)("p",{children:Object(S.jsx)("b",{children:"Total"})})})]}),n.cartItems.map((e=>Object(S.jsxs)("tr",{className:"service",children:[Object(S.jsx)("td",{className:"tableitem",children:Object(S.jsx)("p",{className:"itemtext",children:e.name})}),Object(S.jsx)("td",{className:"tableitem",children:Object(S.jsx)("p",{className:"itemtext",children:e.quantity})}),Object(S.jsx)("td",{className:"tableitem",children:Object(S.jsx)("p",{className:"itemtext",children:e.price})}),Object(S.jsx)("td",{className:"tableitem",children:Object(S.jsx)("p",{className:"itemtext",children:e.quantity*e.price})})]},e._id))),Object(S.jsxs)("tr",{className:"tabletitle",children:[Object(S.jsx)("td",{}),Object(S.jsx)("td",{}),Object(S.jsx)("td",{className:"Rate table-header",children:Object(S.jsx)("p",{className:"tax-label",children:"Tax"})}),Object(S.jsx)("td",{className:"payment",children:Object(S.jsxs)("p",{className:"tax-value",children:["BDT ",n.tax]})})]}),Object(S.jsxs)("tr",{className:"tabletitle",children:[Object(S.jsx)("td",{}),Object(S.jsx)("td",{}),Object(S.jsx)("td",{className:"Rate table-header",children:Object(S.jsx)("p",{className:"grand-total-label",children:Object(S.jsx)("b",{children:"Grand Total"})})}),Object(S.jsx)("td",{className:"payment",children:Object(S.jsx)("p",{className:"grand-total-value",children:Object(S.jsxs)("b",{children:["BDT ",n.totalAmount]})})})]})]})})}),Object(S.jsx)("div",{id:"legalcopy",children:Object(S.jsxs)("p",{className:"legal",children:[Object(S.jsx)("strong",{children:"Thank you for your order!"})," 15% VAT application on total amount. Please note that this is non refundable amount. For any assistance please write email",Object(S.jsx)("b",{children:" help123@gmail.com"})]})})]})]}),Object(S.jsx)("div",{className:"d-flex justify-content-end mt-3",children:Object(S.jsx)(m.a,{type:"primary",onClick:h,children:"Print"})})]})]})},T=c(236),H=c(237),G=c(238),R=c(225),P=c(223),q=c(185),W=c(134);var F=()=>{const[e,t]=Object(a.useState)(0),[c,s]=Object(a.useState)(!1),l=Object(r.b)(),i=Object(j.p)(),{cartItems:n}=Object(r.c)((e=>e.rootReducer)),d=[{title:"Name",dataIndex:"name"},{title:"Image",dataIndex:"image",render:(e,t)=>Object(S.jsx)("img",{src:e,alt:t.name,height:"60",width:"60"})},{title:"Price",dataIndex:"price"},{title:"Quantity",dataIndex:"_id",render:(e,t)=>Object(S.jsxs)("div",{children:[Object(S.jsx)(T.a,{className:"mx-3",style:{cursor:"pointer"},onClick:()=>(e=>{l({type:"UPDATE_CART",payload:{_id:e._id,quantity:e.quantity+1}})})(t)}),Object(S.jsx)("b",{children:t.quantity}),Object(S.jsx)(H.a,{className:"mx-3",style:{cursor:"pointer"},onClick:()=>(e=>{e.quantity>1&&l({type:"UPDATE_CART",payload:{_id:e._id,quantity:e.quantity-1}})})(t)})]})},{title:"Actions",dataIndex:"_id",render:(e,t)=>Object(S.jsx)(G.a,{style:{cursor:"pointer"},onClick:()=>l({type:"DELETE_FROM_CART",payload:t})})}];Object(a.useEffect)((()=>{let e=0;n.forEach((t=>e+=t.price*t.quantity)),t(e)}),[n]);return Object(S.jsxs)(E,{children:[Object(S.jsx)("h1",{children:"Cart Page"}),Object(S.jsx)(o.a,{columns:d,dataSource:n,bordered:!0}),Object(S.jsxs)("div",{className:"d-flex flex-column align-items-end",children:[Object(S.jsx)("hr",{}),Object(S.jsxs)("h3",{children:["SUB TOTAL : BDT ",Object(S.jsxs)("b",{children:[" ",e]})," /-"," "]}),Object(S.jsx)(m.a,{type:"primary",onClick:()=>s(!0),children:"Create Invoice"})]}),Object(S.jsx)(b.a,{title:"Create Invoice",visible:c,onCancel:()=>s(!1),footer:!1,children:Object(S.jsxs)(P.a,{layout:"vertical",onFinish:async t=>{try{const c={...t,cartItems:n,subTotal:e,tax:Number((e/100*15).toFixed(2)),totalAmount:Number(Number(e)+Number((e/100*15).toFixed(2))),userId:JSON.parse(localStorage.getItem("user"))._id};await O.a.post("/api/bills/add-bills",c),R.a.success("Bill Generated"),i("/bills")}catch(c){R.a.error("Something went wrong"),console.log(c)}},children:[Object(S.jsx)(P.a.Item,{name:"customerName",label:"Customer Name",rules:[{required:!0,message:"Please enter customer name"}],children:Object(S.jsx)(q.a,{})}),Object(S.jsx)(P.a.Item,{name:"customerNumber",label:"Contact Number",rules:[{required:!0,message:"Please enter contact number"}],children:Object(S.jsx)(q.a,{})}),Object(S.jsx)(P.a.Item,{name:"paymentMode",label:"Payment Method",rules:[{required:!0,message:"Please select payment method"}],children:Object(S.jsxs)(W.a,{children:[Object(S.jsx)(W.a.Option,{value:"cash",children:"Cash"}),Object(S.jsx)(W.a.Option,{value:"card",children:"Card"})]})}),Object(S.jsxs)("div",{className:"bill-it",children:[Object(S.jsxs)("h5",{children:["Sub Total : ",Object(S.jsx)("b",{children:e})]}),Object(S.jsxs)("h5",{children:["TAX :",Object(S.jsxs)("b",{children:[" ",(e/100*15).toFixed(2)]})]}),Object(S.jsxs)("h5",{children:["GRAND TOTAL :"," ",Object(S.jsx)("b",{children:Number(e)+Number((e/100*15).toFixed(2))})]})]}),Object(S.jsx)("div",{className:"d-flex justify-content-end",children:Object(S.jsx)(m.a,{type:"primary",htmlType:"submit",children:"Generate Bill"})})]})})]})};var U=()=>{const[e,t]=Object(a.useState)([]),c=Object(r.b)();Object(a.useEffect)((()=>{(async()=>{try{c({type:"SHOW_LOADING"});const{data:e}=await O.a.get("/api/bills/get-bills");t(e),c({type:"HIDE_LOADING"}),console.log(e)}catch(e){c({type:"HIDE_LOADING"}),console.log(e)}})()}),[]);return Object(S.jsxs)(E,{children:[Object(S.jsx)("h1",{children:"Customer Page"}),Object(S.jsx)(o.a,{columns:[{title:"ID",dataIndex:"_id"},{title:"Cutomer Name",dataIndex:"customerName"},{title:"Contact No",dataIndex:"customerNumber"},{title:"Total Amount",dataIndex:"totalAmount"}],dataSource:e,bordered:!0,pagination:!1})]})},B=c(218),M=c(219),J=c(221);var Y=e=>{let{item:t}=e;const c=Object(r.b)(),{Meta:a}=J.a;return Object(S.jsx)("div",{children:Object(S.jsxs)(J.a,{style:{width:240,marginBottom:20},cover:Object(S.jsx)("img",{alt:t.name,src:t.image,style:{height:200}}),children:[Object(S.jsx)(a,{title:t.name}),Object(S.jsx)("div",{className:"item-button",children:Object(S.jsx)(m.a,{onClick:()=>{c({type:"ADD_TO_CART",payload:{...t,quantity:1}})},children:"Add to cart"})})]})})};var V=()=>{const[e,t]=Object(a.useState)([]),[c,s]=Object(a.useState)("drinks"),l=Object(r.b)();return Object(a.useEffect)((()=>{(async()=>{try{l({type:"SHOW_LOADING"});const{data:e}=await O.a.get("/api/items/get-item");t(e),l({type:"HIDE_LOADING"}),console.log(e)}catch(e){console.log(e)}})()}),[l]),Object(S.jsxs)(E,{children:[Object(S.jsx)("div",{className:"d-flex",children:[{name:"hot drinks",imageUrl:"https://img.freepik.com/premium-vector/cup-with-hot-drink-smoking-coffee-logo-tea-mug-icon-isolated-white-background_80590-12379.jpg?w=740"},{name:"cold drinks",imageUrl:"https://image.similarpng.com/very-thumbnail/2020/08/Summer-cold-drink-clipart-PNG.png"},{name:"rice",imageUrl:"https://cdn-icons-png.flaticon.com/512/3174/3174880.png"},{name:"meat",imageUrl:"https://cdn0.iconfinder.com/data/icons/food-drink-set/177/chicken-512.png"},{name:"seafood",imageUrl:"https://previews.123rf.com/images/olegtoka/olegtoka1703/olegtoka170300020/73768234-illustration-of-cooked-seafood-crabs-with-lime-and-sauce.jpg"},{name:"noodles",imageUrl:"https://cdn-icons-png.flaticon.com/512/1471/1471262.png"}].map((e=>Object(S.jsxs)("div",{className:"d-flex category ".concat(c===e.name&&"category-active"),onClick:()=>s(e.name),children:[Object(S.jsx)("h4",{children:e.name}),Object(S.jsx)("img",{src:e.imageUrl,alt:e.name,height:"40",width:"60"})]},e.name)))}),Object(S.jsx)(B.a,{children:e.filter((e=>e.category===c)).map((e=>Object(S.jsx)(M.a,{xs:24,lg:6,md:12,sm:6,children:Object(S.jsx)(Y,{item:e},e.id)})))})]})};var K=()=>{const[e]=Object(a.useState)(!1),t=Object(r.b)(),c=Object(j.p)();return Object(a.useEffect)((()=>{localStorage.getItem("user")&&c("/")}),[c]),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"register-page",children:[e&&Object(S.jsx)(_,{}),Object(S.jsxs)(P.a,{layout:"vertical",onFinish:async e=>{try{t({type:"SHOW_LOADING"});const{data:a}=await O.a.post("/api/users/login",e);t({type:"HIDE_LOADING"}),R.a.success("login success"),localStorage.setItem("user",JSON.stringify({...a.user,password:""})),c("/")}catch(a){t({type:"HIDE_LOADING"}),R.a.error("something went wrong")}},children:[Object(S.jsx)("h1",{children:"Login"}),Object(S.jsx)(P.a.Item,{label:"Email",name:"email",children:Object(S.jsx)(q.a,{type:"email"})}),Object(S.jsx)(P.a.Item,{label:"Password",name:"password",children:Object(S.jsx)(q.a.Password,{})}),Object(S.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(S.jsx)(n.b,{to:"/register",children:"Not a User? Click Here to Register"}),Object(S.jsx)("button",{className:"btn btn-primary",children:"Login"})]})]})]})})};var Q=()=>{const e=Object(r.b)(),t=Object(j.p)(),[c]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{localStorage.getItem("user")&&t("/")}),[t]),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"register-page",children:[c&&Object(S.jsx)(_,{}),Object(S.jsxs)(P.a,{layout:"vertical",onFinish:async c=>{try{e({type:"SHOW_LOADING"}),await O.a.post("/api/users/register",c),R.a.success("Registration Successful"),e({type:"HIDE_LOADING"}),t("/login")}catch(a){e({type:"HIDE_LOADING"}),R.a.error("Registration Failed")}},children:[Object(S.jsx)("h1",{children:"Register"}),Object(S.jsx)(P.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"},{min:3,message:"Your name must be at least 3 characters"},{max:50,message:"Your name cannot exceed 50 characters"}],children:Object(S.jsx)(q.a,{})}),Object(S.jsx)(P.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"},{type:"email",message:"Invalid email!"}],children:Object(S.jsx)(q.a,{})}),Object(S.jsx)(P.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"},{min:8,message:"Your password must be at least 8 characters"},{max:128,message:"Your password cannot exceed 128 characters"},{pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?])/,message:"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"}],children:Object(S.jsx)(q.a.Password,{})}),Object(S.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(S.jsx)(n.b,{to:"/login",children:"Already Registered? Click Here to Login"}),Object(S.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Register"})]})]})]})})},z=c(239);var X=()=>{const e=Object(r.b)(),[t,c]=Object(a.useState)([]),[s,l]=Object(a.useState)(!1),[i,n]=Object(a.useState)(null),j=async()=>{try{e({type:"SHOW_LOADING"});const{data:t}=await O.a.get("/api/items/get-item");c(t),e({type:"HIDE_LOADING"}),console.log(t)}catch(t){e({type:"HIDE_LOADING"}),console.log(t)}};Object(a.useEffect)((()=>{j()}),[]);const d=[{title:"Name",dataIndex:"name"},{title:"Image",dataIndex:"image",render:(e,t)=>Object(S.jsx)("img",{src:e,alt:t.name,height:"60",width:"60"})},{title:"Price",dataIndex:"price"},{title:"Actions",dataIndex:"_id",render:(t,c)=>Object(S.jsxs)("div",{children:[Object(S.jsx)(z.a,{style:{cursor:"pointer"},onClick:()=>{n(c),l(!0)}}),Object(S.jsx)(G.a,{style:{cursor:"pointer"},onClick:()=>{(async t=>{try{e({type:"SHOW_LOADING"}),await O.a.post("/api/items/delete-item",{itemId:t._id}),R.a.success("Item Deleted Succesfully"),j(),l(!1),e({type:"HIDE_LOADING"})}catch(c){e({type:"HIDE_LOADING"}),R.a.error("Something Went Wrong"),console.log(c)}})(c)}})]})}];return Object(S.jsxs)(E,{children:[Object(S.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(S.jsx)("h1",{children:"Item List"}),Object(S.jsx)(m.a,{type:"primary",onClick:()=>l(!0),children:"Add Item"})]}),Object(S.jsx)(o.a,{columns:d,dataSource:t,bordered:!0}),s&&Object(S.jsx)(b.a,{title:"".concat(null!==i?"Edit Item ":"Add New Item"),visible:s,onCancel:()=>{n(null),l(!1)},footer:!1,children:Object(S.jsxs)(P.a,{layout:"vertical",initialValues:i,onFinish:async t=>{if(null===i)try{e({type:"SHOW_LOADING"}),await O.a.post("/api/items/add-item",t),R.a.success("Item Added Succesfully"),j(),l(!1),e({type:"HIDE_LOADING"})}catch(c){e({type:"HIDE_LOADING"}),R.a.error("Something Went Wrong"),console.log(c)}else try{e({type:"SHOW_LOADING"}),await O.a.put("/api/items/edit-item",{...t,itemId:i._id}),R.a.success("Item Updated Succesfully"),j(),l(!1),e({type:"HIDE_LOADING"})}catch(c){e({type:"HIDE_LOADING"}),R.a.error("Something Went Wrong"),console.log(c)}},children:[Object(S.jsx)(P.a.Item,{name:"name",label:"Name",rules:[{required:!0,message:"Please enter a name"}],children:Object(S.jsx)(q.a,{})}),Object(S.jsx)(P.a.Item,{name:"price",label:"Price",rules:[{required:!0,message:"Please enter a price"}],children:Object(S.jsx)(q.a,{})}),Object(S.jsx)(P.a.Item,{name:"image",label:"Image URL",rules:[{required:!0,message:"Please enter an image URL"}],children:Object(S.jsx)(q.a,{})}),Object(S.jsx)(P.a.Item,{name:"category",label:"Category",rules:[{required:!0,message:"Please select a category"}],children:Object(S.jsxs)(W.a,{children:[Object(S.jsx)(W.a.Option,{value:"hot drinks",children:"Hot Drinks"}),Object(S.jsx)(W.a.Option,{value:"cold drinks",children:"Cold Drinks"}),Object(S.jsx)(W.a.Option,{value:"rice",children:"Rice"}),Object(S.jsx)(W.a.Option,{value:"noodles",children:"Noodles"}),Object(S.jsx)(W.a.Option,{value:"meat",children:"Meat"}),Object(S.jsx)(W.a.Option,{value:"seafood",children:"Seafood"})]})}),Object(S.jsx)("div",{className:"d-flex justify-content-end",children:Object(S.jsx)(m.a,{type:"primary",htmlType:"submit",children:"SAVE"})})]})})]})};function Z(e){let{children:t}=e;return localStorage.getItem("user")?t:Object(S.jsx)(j.a,{to:"/login"})}var $=function(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(n.a,{children:Object(S.jsxs)(j.d,{children:[Object(S.jsx)(j.b,{path:"/",element:Object(S.jsx)(Z,{children:Object(S.jsx)(V,{})})}),Object(S.jsx)(j.b,{path:"/items",element:Object(S.jsx)(Z,{children:Object(S.jsx)(X,{})})}),Object(S.jsx)(j.b,{path:"/cart",element:Object(S.jsx)(Z,{children:Object(S.jsx)(F,{})})}),Object(S.jsx)(j.b,{path:"/bills",element:Object(S.jsx)(Z,{children:Object(S.jsx)(L,{})})}),Object(S.jsx)(j.b,{path:"/customers",element:Object(S.jsx)(Z,{children:Object(S.jsx)(U,{})})}),Object(S.jsx)(j.b,{path:"/login",element:Object(S.jsx)(K,{})}),Object(S.jsx)(j.b,{path:"/register",element:Object(S.jsx)(Q,{})})]})})})},ee=(c(208),c(130)),te=c(184),ce=c(183);const ae={loading:!1,cartItems:[]},se=Object(ee.combineReducers)({rootReducer:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOADING":return{...e,loading:!0};case"HIDE_LOADING":return{...e,loading:!1};case"ADD_TO_CART":return{...e,cartItems:[...e.cartItems,t.payload]};case"UPDATE_CART":return{...e,cartItems:e.cartItems.map((e=>e._id===t.payload._id?{...e,quantity:t.payload.quantity}:e))};case"DELETE_FROM_CART":return{...e,cartItems:e.cartItems.filter((e=>e._id!==t.payload._id))};default:return e}}}),le={rootReducer:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]}},ie=[te.a];var re=Object(ee.createStore)(se,le,Object(ce.composeWithDevTools)(Object(ee.applyMiddleware)(...ie)));i.a.createRoot(document.getElementById("root")).render(Object(S.jsx)(r.a,{store:re,children:Object(S.jsx)($,{})}))}},[[209,1,2]]]);
//# sourceMappingURL=main.34ea6e01.chunk.js.map