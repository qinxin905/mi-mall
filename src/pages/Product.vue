<template>
 
  <div>
      <ceiling-menu :title=productList.name>
        <template v-slot:buy>
          <a href="javascript:;" class="btn" @click="buy">添加购物车</a>
          
        </template>
      </ceiling-menu>
      <div class="banner2">
        <div class="container" :class="active">
           <img src="/images/section1-2.png" alt="">
        </div>
      </div>

    <!--轮播图开始-->
    <div class="pro-scroll">
      <swiper :options="swiperOptions">
          <swiper-slide v-for="(item,index) in imglist" :key='index'>
            <img :src="item" alt="">
          </swiper-slide>
           <!-- 如果需要分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
          
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          
      </swiper>
    </div>
    <!--轮播图结束-->

      <!--视频加载开始-->
     <pop-model></pop-model>
     <!--视频加载结束-->
  </div>
</template>

<script>
import CeilingMenu from '../components/CeilingMenu'
import PopModel from '../components/PopModel'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    name:'Product',
    data(){
      return{
        active:'',
        productList:{},
        imglist:[
          '/images/product/gallery-1.png',
          '/images/product/gallery-2.png',
          '/images/product/gallery-3.png',
          '/images/product/gallery-4.png',
          '/images/product/gallery-5.jpg',
          '/images/product/gallery-6.jpg',
        ],
         swiperOptions:{
                autoplay:true,
                loop: true, // 循环模式选项

                slidesPerView : 3,
                spaceBetween : 20,
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                   type: 'bullets',
                   clickable :true,
                },

                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },

    
          }
      }
    },
    components:{
      CeilingMenu,
      PopModel,
      Swiper,
    SwiperSlide
    },
    methods: {
      getProduct(){
        console.log(this)
        var id=this.$route.params.id
        this.$axios.get(`/products/${id}`).then((result)=>{
            this.productList=result
        })
      },
       buy(){
          let id = this.$route.params.id;
          this.$router.push(`/detail/${id}`);
      },
    },
    mounted() {
      this.active='active'
    this.getProduct()






    },
    
    

}
</script>

<style lang='scss' >
.banner2{
  overflow: hidden;
  width:100%;
  height:1000px;
  background-image: url('/images/section1-1.png') ;
  background-repeat: no-repeat;
  background-size: cover;
  .container{
      display: flex;
      height:100%;
      justify-content: flex-end;
      align-items: center;
      transition: all 1s;
      transform: translateY(100px);
      opacity: 0;

      img{
              z-index: 0;
      }

      &.active{
              transform: translateY(0px);
              opacity: 1;
      }
      
  }
}


.pro-scroll{
  height:356px;
  width:100%;
  background-color:#fff;
  padding:35px 0px;

  img{
      width:627px;
      height:356px;
    }
    .swiper-button-prev{
      left:10px;
    }
   
  
}
.swiper-pagination-bullet{
      background-color:#fff;
      opacity: 1;
    } 
.swiper-pagination-bullet-active{
  background-color:red
}
</style>