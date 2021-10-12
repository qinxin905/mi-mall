<template>
  <div>
      <ceiling-menu :title="productList.name"></ceiling-menu>

      <div class="pro-detail" v-show="ispro">
          <div class="container clearfix">
                <!--左侧图片轮播开始-->
                <div class="pro-detail-left">
                        <img :src="productList.mainImage" alt="">
                </div>
                <!--左侧图片轮播结束-->

                <!--右侧产品信息开始-->
                <div class="pro-detail-right">
                    <h3 class="title">{{productList.name}}</h3>
                    <p class="desc">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红
外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
                    <p class="self">小米自营</p>
                    <p class="price"><span>{{productList.price}}</span><del>2999元</del></p>
                    <div class="address"></div>
                    <div class="copy">
                        <h3>选择版本</h3>
                        <div class="copy-children">
                        <span :class="version==1?'active':''" @click="version=1">6GB+64GB 全网通</span>
                        <span :class="version==2?'active':''" @click="version=2">4GB+64GB 移动4G</span>
                        
                        </div>
                    </div>
                    <div class="color">
                        <h3>选择颜色</h3>
                        <span class="color-gray"  :class="selColor==1?'active':''" @click="selColor=1">深空灰</span>
                    </div>
                    <div class="info">
                        <p class="info-txt"><span>{{productList.name}} {{version==1?"6GB+64GB 全网通":"4GB+64GB 移动4G"}} 深灰色</span><span>{{productList.price}}元<del>1699元</del></span></p>
                        <p class="info-price">总计{{productList.price}}元</p>
                    </div>
                    <div class="btn-group">
                        <span class="btn btn-large" @click="addCart">加入购物车</span>
                        <span class="btn btn-default btn-large">喜欢</span>
                    </div>
                </div>
                <!--右侧产品信息结束-->
          </div>
      </div>
      <footer-server></footer-server>
  </div>
</template>

<script>
import CeilingMenu from '../components/CeilingMenu'
import FooterServer from '../components/FooterServer'

export default {
    name:"Detail",
    components:{
        CeilingMenu,
        FooterServer
    },
    data(){
        return {
            id:this.$route.params.id,//获取产品Id
            version:0, //控制版权
            selColor:0,
            ispro:false,
            productList:[],//获取产品信息


        }
    },
    methods: {
        getProduct(){
            this.$axios.get(`/products/${this.id}`).then((result)=>{ 
                    this.ispro=true  
                    this.productList=result

            },(error)=>{
                if(error.msg){
                    alert(error.msg);
                }else{
                    alert('产品不存在')
                }
               
                this.$router.push('/')

            })
        },
        addCart(){
            this.$axios.post('/carts',{
                productId:this.id,
                selected: true
            }).then((result)=>{
                alert('添加购物车成功')
                this.$store.dispatch('getCartSum',result.cartTotalQuantity)
                this.$router.push('/cart')

            },()=>{

                alert("没有登录，请先登录");
                this.$router.push('/login')
            })
        }
    },
    mounted() {
        this.getProduct();
    },
    

}
</script>

<style lang='scss'>
.pro-detail{
    .container{
            padding:30px 0px;
        .pro-detail-left{
            width:500px;
            height:600px;
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width:100%;
                // height:100%;
            }
        }
        .pro-detail-right{
            width:600px;
            height:600px;
            float: right;
            h3.title{
                color:#333;
                font-size: 26px;
                font-weight: 400;
                line-height: 1.5;
            }
            p.desc{
                    font-size: 14px;
                    color:#999;
                    line-height: 1.4;
            }
            p.self{
                font-size: 15px;
                color:#FF6700;
                margin-top:20px;
            }
            p.price{
                padding-bottom:20px;
                border-bottom:1px solid #E5E5E5;
                margin-top:10px;
                span{
                    color:#FF6700;
                    font-size: 19px; 
                }
                del{
                    color:#999;
                    font-size: 12px;
                    margin-left:10px;
                }
            }

            .copy{
                margin-top:30px;
                margin-bottom:10px;
                
                >h3{
                    font-size: 17px;
                    color:#333;
                    margin-bottom:20px;
                }
                .copy-children{
                    // display: flex;
                    // justify-content: space-between;
                    span{
                        padding:10px 10px;
                        display: inline-block;
                        border:1px solid #ddd;
                        color:#333;
                        font-size: 16px;
                        margin-right: 10px;
                        &.active{
                            border:1px solid #FF6700;
                            color:#FF6700;
                        }
                    }
                }
                
            }
            .color{

                >h3{
                    font-size: 17px;
                    color:#333;
                    margin-bottom:20px;
                }
                span{
                        padding:10px 10px;
                        display: inline-block;
                        border:1px solid #ddd;
                        color:#333;
                        font-size: 16px;

                        &.color-gray::before{
                            content: "";
                            display: inline-block;
                            width:10px;
                            height:10px;
                            background: #ddd;
                            margin-right:5px;
                        }
                        &.active{
                            border:1px solid #FF6700;
                        }
                    }
                
            }
            .info{
                margin:20px 0px;
                background-color: #FAFAFA;
                padding:20px;
               .info-txt{
                   color:#333;
                   font-size: 14px;
                   display: flex;
                   justify-content: space-between;
               }
               .info-price{
                   color:#FF6600;
                   font-size: 24px;
            

               }

                
            }

        }
    }
}

</style>