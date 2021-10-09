<template>
  <div>
      <form-main>
          <template v-slot:user-login>
             <div class="user-all" >
                <div class="user-top">
                    <span class="user-login user-active" ref="login" @click="showLogin">登录</span>
                    <span class="user-register"  ref='register' @click="showRegister" >注册</span>
                </div>

                <div class="user-body">
                <!--登录表单开始-->
                <transition name="slide">
                    
                <div class="login-content" v-show='loginBox'>
                        <form action="">
                            <div class="login-input" :class="inputStyle">
                                <input type="text" v-model.trim="username" autocomplete="off" name='username' id='username' @focus="inputActive" @keyup="inputWrite" @blur="inputBlur">
                                <label for="username">邮箱/手机号/小米账号</label>
                            </div>
                            <p>请输入用户名</p>

                            <div class="login-input">
                                <input type="password" v-model.trim="password" autocomplete="off" name='password' id='password'  @focus="inputActive" @keyup="inputWrite" @blur="inputBlur">
                                <label for="password">密码</label>
                            </div>
                            <p>请输入密码</p>
                            <div class="login-btn">
                                <input type="button" 
                                :disabled="!username || !password" 
                                value="登录" 
                                class="btn btnauto" 
                                :class="{'btn-disabled':!username || !password}"
                                @click="toLogin"
                                >
                            </div>
                            <div class="login-info">
                                <a href="">忘记密码？</a>
                                <a href="">手机号登录</a>
                            </div>
                        </form>
                </div>
                 </transition>
                <!--登录表单-->
                <!--注册表单开始-->
                 <transition name="slide2">
                <div class="register-content" v-show='!loginBox'>
                        <form action="">
                            <div class="login-input" :class="inputStyle">
                                <input type="text" v-model.trim="registerName" autocomplete="off"  name='registerName' id='registerName' @focus="inputActive" @keyup="inputWrite" @blur="inputBlur">
                                <label for="registerName">注册账号：邮箱/手机号</label>
                            </div>
                            <p>请输入用户名</p>

                            <div class="login-input" :class="inputStyle">
                                <input type="text" v-model.trim="email" autocomplete="off"  name='email' id='email' @focus="inputActive" @keyup="inputWrite" @blur="inputBlur">
                                <label for="email">邮箱号</label>
                            </div>
                            <p>请输入邮箱</p>

                            <div class="login-input">
                                <input type="password" v-model.trim="regpassword" autocomplete="off" name='regpassword' id='regpassword'  @focus="inputActive" @keyup="inputWrite" @blur="inputBlur">
                                <label for="regpassword">密码</label>
                            </div>
                            <p>请输入密码</p>

                            <div class="login-input">
                                <input type="password" v-model.trim="regpassword2" autocomplete="off" name='regpassword2' id='regpassword2'  @focus="inputActive" @keyup="inputWrite" @blur="inputBlur">
                                <label for="regpassword2">再次输入密码</label>
                            </div>
                            <p>请再次输入密码，确保两次输入一样</p>

                            <div class="login-btn">
                                <input type="button" 
                                :disabled="!registerName || !regpassword || !(regpassword2==regpassword) " 
                                value="注册" class="btn btnauto" 
                                :class="{'btn-disabled':!registerName || !regpassword || !(regpassword2==regpassword)}"
                                @click="toRegister"
                                >
                            </div>
                            <div class="login-info">
                                <a href="">忘记密码？</a>
                                <a href="">手机号登录</a>
                            </div>
                        </form>
                </div>
                 </transition>
                <!--注册表单结束-->
                </div>
            </div>
          </template>
      </form-main>
  </div>
</template>

<script>
import FormMain from '../components/FormMain'
export default {
    name:'Login',
    data(){
        return {
            loginBox:true,
            username:'',
            password:'',
            userId:'',
            registerName:'',
            regpassword:'',
            email:'',
            regpassword2:'',
            
            inputStyle:{
                "input-active":false,
                "input-foucs":false
            }
        }
    },
    computed:{
      
    },
    components:{
        FormMain
    },
    methods: {
        inputActive(e){
           var oDiv=e.currentTarget.parentNode;
           var oLabel=e.currentTarget.nextElementSibling
            oLabel.className='label-active'
           if(e.currentTarget.value){
                oDiv.className="login-input input-foucs"
                oDiv.nextElementSibling.className=''
               
           }else{
                oDiv.className="login-input input-active"
                oDiv.nextElementSibling.className='show'
           }
       
        },
        inputWrite(e){
             var oDiv=e.currentTarget.parentNode;
                if(e.currentTarget.value){
                     oDiv.className="login-input input-foucs"
                     oDiv.nextElementSibling.className=''
                }else{
                     oDiv.className="login-input input-active"
                     oDiv.nextElementSibling.className='show'
                }
        },
        inputBlur(e){
             var oDiv=e.currentTarget.parentNode;
            var oLabel=e.currentTarget.nextElementSibling
             if(!e.currentTarget.value){
                oLabel.className='label-blur'
                oDiv.className='login-input input-blur'
                oDiv.nextElementSibling.className='show'
              }else if(e.currentTarget.id=='regpassword2'){
                 
                 if(this.regpassword!=this.regpassword2){
                        console.log('sss')
                    oDiv.nextElementSibling.className='show'

                 }else{
                    oDiv.nextElementSibling.className=''
                 }
                 
                 
             }
            
        },
        showRegister(){
             this.loginBox=false;
             this.$refs.login.className='user-login'
            this.$refs.register.className='user-register  user-active'
        },
        showLogin(){
            this.loginBox=true;
            this.$refs.login.className='user-login user-active'
            this.$refs.register.className='user-register'
        },
        //登录
        toLogin(){
            let {username,password}=this
           this.$axios.post('/user/login',{
               username,
               password
           }).then((result)=>{
               //保存id到cookie中

               //把数据保存的vuex的username中，在首页读取出来
                this.$store.dispatch('saveName',result.username)

               //登录成功，跳转到首页
               this.$router.push('/index')

           }).catch(function (error) {
               alert(error.msg)
               
            })
        },
        //注册
        toRegister(){
           
                this.$axios.post('/user/register',{
                    username:this.registerName,
                    password:this.regpassword,
                    email:this.email
                }).then(()=>{
                     alert('注册成功')
                    this.loginBox=true
                    this.$refs.login.className='user-login user-active'
                    this.$refs.register.className='user-register'
                }).catch(function(error){
                    alert(error.msg)
                })
        }
    
    
    },
    mounted() {
        this.username="",
        this.password=""
    },
}
</script>

<style lang='scss' scoped>
.user-all{
    padding:50px;
    .user-body{
        height:400px;
        position: relative;
        overflow: hidden;
    }
    .user-top{
        font-size: 22px;
       color:#ddd;
       font-weight:400;
       padding-bottom:20px;
       span{
           cursor: pointer;
       }
    }
    .user-login{
        margin-right:10px;
    }
    .user-active{
        color:#000;
        border-bottom:2px solid #FF6700;
    }
    .login-content,.register-content{
        position:absolute;
        width:100%;
        
        p{
            padding:10px 0px 20px;
            color:red;
            display: none;
        }
        p.show{
            display: block;
        }

        .login-input{
            height:60px;
            background-color:#F5F5F5 ;
            border-radius: 5px;
            position: relative;
            margin-bottom:10px;
            transition: all 0.5s;
            
            label{
                    font-size: 16px;
                    color:#666;
                    position: absolute;
                    left:15px;
                    top:23px;
                    display: block;
                    transition: all 0.5s;
                    // border: 1px solid red;
            }
            .label-active{
                font-size: 12px;
                top:5px;
            }
            .label-blur{
                color:red;
            }
            input{
                position: absolute;
                height:40px;
                width:100%;
                bottom:10px;
                box-sizing: border-box;
                padding:0px 15px;
                border:none;
                background-color:#F5F5F5 ; 
            }
            
        } 
        
        .input-active{
               
                border:1px solid #FF6700;
                box-shadow: 0 0 5px #FF6700;
                background-color: #F8EBE2;

                input{
                     height:20px;
                     background-color: #F8EBE2;
                }
            } 

         .input-foucs{
                border:1px solid #FF6700;
                box-shadow: 0 0 5px #FF6700;
                background-color: #fff;
                
                input{
                     height:20px;
                     background-color: #fff;
                }
            }
            .input-blur{
                background-color: #F8EBE2;

                input{
                     height:40px;
                     background-color: #F8EBE2;
                }
            }

        .btn-disabled{
            opacity: 0.4;
        }
        .login-info{
            padding:15px 0px;
            display: flex;
            justify-content: space-between;
            a{
                color:#FF6700;
                font-size: 16px;
            }
        } 
    }

    .slide-enter-active, .slide-leave-active {
        transition: left 0.5s;
        left:0px;
    }
    .slide-enter, .slide-leave-to {
     left:600px;
    }
        


    .slide2-enter-active, .slide2-leave-active {
        transition: right 0.5s;
        right:0px;
    }
    .slide2-enter, .slide2-leave-to {
        right:600px;
    }
    
}
</style>