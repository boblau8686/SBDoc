webpackJsonp([6],{304:function(e,s,t){(function(e,s){new e({el:"#app",data:{username:sessionStorage.getItem("qqname"),photo:sessionStorage.getItem("qqimg"),pwd:"",pwd1:"",question:"",answer:"",registerPending:!1},methods:{register:function(){var e=this;return this.username&&this.pwd&&this.pwd1&&this.question&&this.answer?this.pwd!=this.pwd1?void this.$message.error("两次输入的密码不一致"):(e.registerPending=!0,void s.post("/user/createqq",{name:e.username,password:e.pwd,question:e.question,answer:e.answer,qqid:sessionStorage.getItem("qqid"),qqimg:sessionStorage.getItem("qqimg")}).then(function(s){e.registerPending=!1,200==s.code?(e.$notify({title:"注册成功",type:"success"}),window.opener.postMessage(JSON.stringify({name:e.username,password:e.pwd}),location.protocol+"//"+location.host),setTimeout(function(){window.close()},1e3)):e.$notify({title:s.msg,type:"error"})})):void this.$message.error("用户名密码,找回密码问题，找回密码答案不能为空")}}})}).call(s,t(2),t(4))}},[304]);