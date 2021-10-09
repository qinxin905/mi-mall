<template>
  <div class="cart" 
  :class='cartActive' 
  @mouseover="addCartCss"
   @mouseout="removeCartCss"
   @click="gotoCart"
   >
        <span class="iconfont icon-gouwucheman img-cart"></span>购物车<span>({{getCartSum}})</span>
        <div  class="menu-content" :class='menuShow'>购物车内容</div>
  </div>
</template>

<script>
export default {
    name:'Cart',
    data(){
      return {
          cartActive:'',
          menuShow:'',
        
      }
    },
    computed:{
       getCartSum(){
          return this.$store.state.getCartSum 
       }
    },
    methods: {
        addCartCss(){
            clearTimeout(this.timer)
            console.log(this.timer)
            this.cartActive='topbar-cart-active'
            this.menuShow='menu-show'
        },
        removeCartCss(){
            this.menuShow=''
            this.timer=setTimeout(()=>{
            this.cartActive=''
            },500)
            
        },
        gotoCart(){
          this.$router.push('/cart')
        }
    }
}
</script>

<style lang='scss'>
.cart{
            width:110px;
            background-color:#666666;
            height:39px;
            display: flex;
            align-items:center;
            justify-content: center;
            color:#B0B0B0;
            position: relative;
            cursor: pointer;

            span.img-cart{
              margin-right:3px;
            }

             .menu-content{
                min-width:300px;
                position: absolute;
                right:-1px;
                top:39px;
                height:0px;
                overflow: hidden;
                  transition: all 0.5s;
                  color:#B0B0B0;
                  z-index: 222;
            }
        }
        .topbar-cart-active{
          background-color:#fff ;
          color:#FF6700;
          .menu-show{
                background: #fff;
                box-shadow: 5px 5px 10px #ddd;
                border:1px solid #ddd;
                border-top:0;
                height:100px;
          }

        }
</style>