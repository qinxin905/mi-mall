<template>
  <div class="index">
      <div class="container">
        <!--轮播开始-->
          <div class="swiper-box">
            <swiper :options="swiperOptions">
              <swiper-slide v-for="(item,index) in swiperImgs" :key='index'>
                  <a :href="'/#/product/'+item.id"><img :src="item.img" alt=""></a>
              </swiper-slide>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination" slot="pagination"></div>
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev" slot='button-prev'></div>
                <div class="swiper-button-next" slot='button-next'></div>
            </swiper>

            <!--左侧菜单开始-->
            <div class="index-category">
                <ul class="index-category-list">
                
                <li @mouseover="showMenu" @mouseout="hideMenu" 
                v-for="(item,index) in categoryList" :key="index">
                   <a href="#">{{item.onetitle}}<span class="iconfont icon-youjiantou1"></span></a>
                   <div class="category-children">
                      <ul>
                          <li v-for="(nav,index) in item.twoMenu" :key="index">
                              <a href="#">
                                <img :src="nav.img" alt="">
                                <span>{{nav.title}}</span>
                              </a>
                          </li>
                      </ul>
                    </div>
                  </li>
                    
                 <li><a href="#">家电<span class="iconfont icon-youjiantou1"></span></a></li>
                 <li><a href="#">出行 穿戴<span class="iconfont icon-youjiantou1"></span></a></li>
                 <li><a href="#">智能  路由器<span class="iconfont icon-youjiantou1"></span></a></li>
                 <li><a href="#">电源 配件<span class="iconfont icon-youjiantou1"></span></a></li>
                 <li><a href="#">健康 儿童<span class="iconfont icon-youjiantou1"></span></a></li>
                 <li><a href="#">耳机 音箱<span class="iconfont icon-youjiantou1"></span></a></li>
                 <li><a href="#">生活 箱包<span class="iconfont icon-youjiantou1"></span></a></li>
                </ul>
            </div>
            <!--左侧菜单结束-->
          </div>
        <!--轮播结束-->

          <div class="ads"></div>
          <div class="ads2"></div>
          <div class="product"></div>
      </div>
    <footer-server></footer-server>
  </div>
</template>

<script>
/**单独定义的二级菜单json数据 */
import $menu from '../mock/menu.js'
import FooterServer from '../components/FooterServer'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name:'Index',
    data(){
      return {
        //轮播图的图片存放在public的images中
          swiperImgs:[
                {
                  id:42,
                  img:'/images/slide/slide-1.jpg', 
                },
                {
                  id:43,
                  img:'/images/slide/slide-2.jpg', 
                },
                {
                  id:44,
                  img:'/images/slide/slide-3.jpg', 
                },
                {
                  id:45,
                  img:'/images/slide/slide-4.jpg', 
                }
          ],
           //轮播图的所有配置
          swiperOptions:{
                autoplay:true,
                loop: true, // 循环模式选项
                effect : 'cube',
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset:10,
                    shadowScale: 0.9
                  },
    
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                   type: 'bullets',
                   clickable :true,
                },
    
                // 如果需要前进后退按钮
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
          },
        //左侧菜单
        categoryList:$menu.data
      }
    },
    methods: {
        showMenu(e){
          e.currentTarget.className='active'
        },
        hideMenu(e){
          e.currentTarget.className=''
        }
    },
    components:{
      Swiper,
      SwiperSlide,
      FooterServer
    }
}

</script>

<style lang='scss'>
.swiper-button-prev{
  left:260px;
}
.index{

  .container{
    .swiper-box{
      position: relative;
      width:100%;
      height:460px;
        .swiper-container{
          width:100%;
          height:460px;
            img{
              width:100%;
              height:460px;
            }
        }

      .index-category{
        width:250px;
        height:460px;
        position: absolute;
        z-index:2;
        left:0;
        top:0;
        background: rgba(105,101,101,.6);
          .index-category-list{
              height:430px;
              padding:15px 0;
              display: grid;
              grid-template-rows: repeat(auto , 1fr);
              >li{
                  >a{
                    height:100%;
                    display: flex;
                    color:#fff;
                    padding:0 25px;
                    align-items: center;
                    justify-content: space-between;
                    &:hover{
                      background-color: #FF6700;
                    }
                  } 
                  
                 .category-children{
                   display:none;
                   overflow: hidden;
                   height:460px;
                   background: #fff;
                   position: absolute;
                   left:250px;
                   top:0;
                    >ul{
                      box-sizing: border-box;
                      padding:20px;
                      display: grid;
                      grid-template-rows:repeat(6,1fr);
                      grid-auto-flow: column;
                      height:inherit;
                      border:1px solid #ddd;
                      box-sizing:10px 10px 10px #ddd;
                        >li{
                          width:250px;
                        
                              a{  
                                height:100%;
                                display: flex;
                                align-items: center;
                                display: flex;
                                color:#333;
                                    img{
                                    width:40px;
                                    height:40px;
                                    margin-right:10px;
                                  }
                              }
                          
                          }
                        }
                    }
                  }
                

              >li.active{
                    background-color:#FF6700;
                    .category-children{
                      display: block;
                    }
              }

            }
              
      }
    }
  }
}

</style>