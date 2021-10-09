<template>
  <div class="form-box">
      <div class="box-sidebar"></div>
      <div class="box-main">
            <div class="box-header">
                <div class="logo"><span class="iconfont icon-xiaomi logosize"></span></div>
                <div class="logo-txt">
                    <h3>小米商城</h3>
                    <p>让每个人都能享受科技的乐趣</p>
                </div>
            </div>
            <!--登录主体开始-->
            <div class="box-content">
                <slot name='user-login'></slot>
            </div>
            <!--登录主体结束-->
            <div class="box-footer"></div>
        </div>
  </div>
</template>

<script>
export default {
    name:'FormMain',
    
}
</script>

<style lang='scss' scoped>
.form-box{
    width:100%;
    .box-sidebar{
        width:375px;
        height:100%;
        position: fixed;
        background-image: url('/images/sidebar.jpg');
        background-size: cover;
    }
    .box-main{
        margin-left:375px;
        background-color:#F5F5F5;
        height:100vh;
            .box-header{
                height:53px;
                display: flex;
                justify-content: flex-start;
                padding:29px;
                .logo{

                    
                    height:53px;
                    width:53px;
                    background-color:#FF6700;
                    color:#fff;
                    text-align: center;
                    line-height: 53px;
                    margin-right:18px;
                    .logosize{
                        font-size: 30px;
                    }   
                }
                .box-txt{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    h3{
                        position: relative;
                        margin-top:-4px;
                        font-size: 30px;
                        color:#333;
                        font-weight: 400;
                    }
                    p{
                        color:#666;
                        font-size: 10px;
                    }
                }
            }


        .box-content{
            width:460px;
            background-color:#fff;
            margin:100px auto;
            
        }
    }
}

</style>