webpackJsonp([13],{538:function(e,t,i){(function(e,t,i){new e({el:"#app",data:{username:"",pwd:"",pwd1:"",question:"",answer:"",email:"",registerPending:!1},methods:{register:function(){var e=this;return this.username&&this.pwd&&this.pwd1&&this.question&&this.answer&&this.email?this.pwd!=this.pwd1?void this.$message.error("两次输入的密码不一致"):/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.email)?(e.registerPending=!0,void i.post("/user/save",{name:e.username,password:e.pwd,question:e.question,answer:e.answer,email:e.email},{"content-type":"application/x-www-form-urlencoded"}).then(function(t){e.registerPending=!1,200==t.code?(e.$notify({title:"注册成功",type:"success"}),setTimeout(function(){location.href="../login/login.html"},1500)):e.$notify({title:t.msg,type:"error"})})):void t.tip("邮箱格式不正确",0):void this.$message.error("用户名密码,找回密码问题，找回密码答案,邮箱不能为空")}}})}).call(t,i(5),i(0),i(2))}},[538]);