<template>
  <div class="order-header">
      <div class="container">
        <div class="order-logo">
                <a href="/#/">
                <span class="before iconfont icon-xiaomi"></span>
                <span class="after iconfont icon-fangzidichan"></span>
                </a>
        </div>
        <div class="order-cart">
            <h3>{{title}}</h3>
           <slot name='desc'></slot>
        </div>
        <div class="order-info">
            <span>{{username}}</span>
            <a href="#">我的订单</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'OrderHeader',
    data(){
        return{
           
           
        }
    },
    props:{
        title:String
    },
    computed:{
        username(){
            return this.$store.state.username
        }
    }
    
}
</script>

<style lang='scss'>
.order-header{
    border-bottom:2px solid #FF6700;
    .container{
        display: flex;
        align-items: center;

        padding:30px 0px;
            .order-logo{
                width:55px;
                height:55px;
                background-color:#FF6700;
                border-radius: 10px;
                 overflow: hidden;
                a{
                  display: inline-block;
                  width:110px;
                  height:55px;
                   
                    span.before,span.after{
                      display: inline-block;
                      content: '';
                      width:55px;
                      height:55px;
                      font-size: 30px;
                      text-align: center;
                      line-height:55px;
                      color:#fff;
                      margin-left:0px;  
                      transition: margin 0.5s;
                    }
            
                  &:hover span.before{
                    margin-left:-55px;
                  }

                }
                
            }
            .order-cart{
                display: flex;
                flex-grow: 1;
                align-items: flex-end;
                h3{
                    margin-left:50px;
                    color:#424242;
                    font-size: 28px;
                    font-weight: 400;
                }
                p{ 
                    margin-left:20px;
                    font-size: 12px;
                    color:#757575;
                    height:100%;
                    display: flex;
                    align-items: flex-end;
                    margin-bottom:4px;
            
                }
            }
            .order-info{
                span{
                    color:#757575;
                    margin-right:30px;
                }
                a{

                    color:#757575;
                    border-left:1px solid #757575;
                    padding-left:20px;

                    &:hover{
                        color:#FF6700;
                    }
                }
            }
    }
}

</style>