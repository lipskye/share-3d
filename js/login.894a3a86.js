(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{5650:function(t,e,r){"use strict";var a=r("eed5"),o=r.n(a);o.a},a55b:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("layout-bgi",[r("h2",{staticClass:"login-header"},[t._v("用户登录")]),r("a-form",{staticClass:"login-form",attrs:{form:t.form,layout:"vertical"},on:{submit:function(e){return e.preventDefault(),t.doLogin(e)}}},[r("a-form-item",{attrs:{label:"账号"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["account",{rules:[{required:!0,message:"账号不能为空！"}]}],expression:"[\n        'account',\n        {rules: [{ required: true, message: '账号不能为空！' }]}\n      ]"}],attrs:{placeholder:"请输入账号"}})],1),r("a-form-item",{attrs:{label:"密码"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"密码不能为空！"}]}],expression:"[\n        'password',\n        {rules: [{ required: true, message: '密码不能为空！' }]}\n      ]"}],attrs:{placeholder:"请输入密码"}})],1),r("a-form-item",[r("a-button",{attrs:{"html-type":"submit",type:"primary",block:""}},[t._v("登录")])],1),r("a-form-item",{staticStyle:{"text-align":"center"}},[r("span",{staticStyle:{color:"#f0f0f0"}},[t._v("\n        没有账号？\n        "),r("router-link",{staticStyle:{color:"#333"},attrs:{to:"/register"}},[t._v("去注册")])],1)])],1)],1)},o=[],n=r("f885"),s={name:"login",components:{LayoutBgi:n["a"]},data:function(){return{form:this.$form.createForm(this)}},methods:{doLogin:function(){this.form.validateFields(function(t,e){t&&console.log("todo login, data is",JSON.stringify(e))})}}},i=s,c=(r("b2d2"),r("17cc")),l=Object(c["a"])(i,a,o,!1,null,"26d77832",null);e["default"]=l.exports},b14e:function(t,e,r){},b2d2:function(t,e,r){"use strict";var a=r("b14e"),o=r.n(a);o.a},eed5:function(t,e,r){},f885:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layout-bgi"},[t._t("default")],2)},o=[],n=(r("5650"),r("17cc")),s={},i=Object(n["a"])(s,a,o,!1,null,"8bff3124",null);e["a"]=i.exports}}]);
//# sourceMappingURL=login.894a3a86.js.map