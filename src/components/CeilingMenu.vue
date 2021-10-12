<template>
  <div class="ceiling-menu" ref='ceilbox' :class="{'fixedMenu':fixedMenu}">
      <div class="container">
          <div class="left">
              <h3>{{title}}</h3>
              <a href="javascript:;">Xiaomi 11 青春版</a>
          </div>
          <div class="right">
              <a href="javascript:;">概述页</a>
              <a href="javascript:;">参数页</a>
              <a href="javascript:;">F码通道</a>
              <a href="javascript:;">咨询客服</a>
              <a href="javascript:;">用户评价</a>
              <slot name='buy'></slot>
           </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"CeilingMenu",
    data(){
        return {
            fixedMenu:false,
            height:0,
        }  
    },
    props:{
            title:String
        },
    methods: {
        isFixedMenu(){
            var top=document.documentElement.scrollTop || document.body.scrollTop;
            //动态获限元素与浏览器顶部的高度
            // console.log(top)
           this.fixedMenu=top>this.height?true:false
        }
    },
    mounted() {
        var _h=this.$refs.ceilbox.offsetTop; //当前元素与浏览器顶部距离
        this.height=_h;
        window.addEventListener("scroll",this.isFixedMenu);
    },
    destroyed() {
        window.removeEventListener('scroll',this.isFixedMenu);
        //如果不注销，则会在其它页面滚动滚轮时，也会一直触发这个事件，因为window是全局对象，一直都存在的
    },
}
</script>

<style lang='scss'>
.ceiling-menu{
    width:100%;
    height:65px;
    // position:sticky;
    // position: -webkit-sticky;
    background: #fff;
    border-top:1px solid #ddd;
    box-shadow: 0 5px 5px #ddd;
    top:-65px;
    transition: top 0.5s;
    z-index: 1;

    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height:65px;
        .left{
            display: flex; 
            align-items: center;
            h3{
                color:#424242;
                font-size: 18px;
                font-weight: 400;
                padding-right:10px;
                
            }
            a{
                border-left:1px solid #ddd;
                color:#616161;
                padding-left:10px;

                &:hover{
                    color:#FF6700;
                }
            }
        }
        .right{
            a{
                border-left:2px solid #ddd;
                color:#616161;
                padding:0px 10px;
                &:last-child{
                    border:0px;
                }
                &:first-child{
                    border:0px
                }
                &:hover{
                    color:#FF6700;
                }
                &.btn{
                    color:#fff;
                }
            }
        }
    }
}
.fixedMenu{
    position: fixed;
    top:0px;
    left:0px;
}
</style>