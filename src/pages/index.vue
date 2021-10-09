<template>
  <div class="index">
    <!--弹窗组件开始 -->
    <model-dialog :showModel="showModel" 
          v-on:show-dialog="showDialog" 
          :btnType=2 modeType='samll' 
          modeBody='txt' 
          modeTitle="添加购物车"
          sureText="加入购物车"
          >
      <template v-slot:dialog>
        <div class="dialog-body">
          弹窗的主体内容
        </div>
      </template>
    </model-dialog>
    <!--弹窗组件结束-->

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
                                <img v-lazy="nav.img" alt="">
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
        <!--广告区开始-->
          <div class="ads">
            <div class="ads-menu">
              <ul>
                <li>
                  <a href="">
                    <span class="iconfont icon-shizhong"></span>
                    <p>保障服务</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span class="iconfont icon-fangzidichan"></span>
                    <p>企业团购</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span class="iconfont icon-fma"></span>
                    <p>F码通道</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span class="iconfont icon-xiaomi"></span>
                    <p>米粉卡</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span class="iconfont icon-qian4"></span>
                    <p>以旧换新</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span class="iconfont icon-huafei"></span>
                    <p>话费充值</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="ads-span" v-for="(item,index) in adsList" :key="index">
                <a :href="item.url"><img :src="item.img" alt=""></a>
            </div>
          </div>
        <!--广告区结束--> 
      </div>

    <div class="index2">
      <div class="container">
           <!--banner区开始-->
          <div class="banner">
            <a href="#"><img v-lazy="'/images/banner.webp'" alt=""></a>
          </div>
          <!--banner区结束-->

          <!--产品区开始-->
          <div class="products">
            <h3><span>手机</span><a href="/#/products?categoryId=100012">查看更多 <span class="iconfont icon-youjiantou_huaban"></span></a></h3>
            <ul class="products-list">
                <li>
                  <a href="/#/product/35">
                    <img v-lazy="'/images/big-sj.webp'" alt="" class="big-img">
                  </a>
                </li>

                <li v-for="(item,index) in productList" :key="index">
                  <a :href="'/#/product/'+item.id">
                    <span class="tag" :class="{'hot-tag':index==2,'new-tag':index==4,'recommend-tag':index==6}"></span>
                    <img v-lazy="item.mainImage" alt="">
                    <h3>{{item.name}}</h3>
                    <p>{{item.subtitle}}</p>
                    <h4>{{item.price | filterPrice}}<span class="iconfont icon-gouwuchekong" @click.prevent="showDialog(true)"></span></h4>
                  </a>
                </li>

              </ul>  
          </div>
          <!--产品区结束-->
      </div>

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
import ModelDialog from '../components/ModelDialog'
export default {
    name:'Index',
    components:{
          Swiper,
          SwiperSlide,
          FooterServer,
          ModelDialog
        },
    data(){
      return {
          showModel:false,
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
        categoryList:$menu.data,
        //ads广告区内容
        adsList:[
          {
              url:'/#/product?categoryId=100012',
              img:'/images/ads/ads1.jpg'
          },
          {
              url:'/#/product?categoryId=100012',
              img:'/images/ads/ads2.jpg'
          },
          {
              url:'/#/product?categoryId=100012',
              img:'/images/ads/ads3.png'
          }
        ],
        productList:[]
      }
    },
    methods: {
      //显示弹窗
        showDialog(bol){
          this.showModel=bol;
        },

        showMenu(e){
          e.currentTarget.className='active'
        },
        hideMenu(e){
          e.currentTarget.className=''
        },
        getProducts(){
          this.$axios.get('/products',{
            params:{
              categoryId:100012,
              pageSize:14
            }
          }).then((result)=>{
            var data=result.list.slice(6,14);
              this.productList=data;
          })
        }
    },
    
    mounted() {
      this.getProducts();
    },
}

</script>

<style lang='scss'>
.swiper-button-prev{
  left:260px;
}
.index{

  .container{
    /*左侧菜单与轮播图 */
    .swiper-box{
      overflow: hidden;
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

  /* 广告区 */
  .ads{
    margin:15px 0px 30px 0px;
    height:170px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 231px repeat(3,316px);
    column-gap: 15px;
    .ads-menu{
      background-color:#5f5750;
      ul{
        height:100%;
        display: grid;
        grid-template-rows:repeat(2,1fr);
        grid-template-columns: repeat(3,1fr);
        li{
          padding:2px 2px;
          a{
            border-right:1px solid #665e57;
            border-bottom:1px solid #665e57;

            display: flex;
            width:100%;
            height:100%;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            color:#fff;
            opacity: 0.7;
            transition: opacity 0.2s;
            flex-wrap: wrap;
            &:hover{
              opacity: 1;
            }
            span{
                font-size: 22px;
                margin-bottom:5px;
            }
          }
        }
      }
    }
    .ads-span{
      
      img{
        width:100%;
        height:100%;
      }

    }
  }
  }
}

/*首页第二部分样式*/
.index2{
  background-color:#f5f5f5;
  padding-top:30px;
  


  .products{
    >h3{
      margin-top:15px;
      height:58px;
      font-weight: 200;
      font-size: 22px;
      color:#333;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a{
        font-size: 16px;
        color:#333;
        transition: all 0.2s;
        &:hover{
          color:#FF6700;
          font-weight: bold;
        }
      }
    }
      .products-list{
        padding-bottom:40px;
        // 234  300
        display: grid;
        grid-template-rows: repeat(2,300px);
        grid-template-columns: repeat(5,1fr);
        gap:15px;
        grid-template-areas: 
        "a1 a2 a3 a4 a5"
        "a1 a6 a7 a8 a9"
        ;
       
        li{
          background-color: #fff;
          grid-area:auto/auto/auto/span ;
          position: relative;
          transition: all 0.5s;
          &:hover{
            box-shadow: 0px 0px 10px #666;
            top:-2px;
          }
         a{
           font-size: 12px;
           box-sizing: border-box;
           display: flex;
           flex-direction: column;
           align-items: center;
           height:100%;

           .tag{
             width:60px;
             height:30px;
             line-height: 30px;
             text-align: center;
             font-weight: bold;
             font-size:14px;
             position: absolute;
             top:0; 
           }

           .hot-tag{
            background: red;
             color:#fff; 
             &::before{
               content:"热卖";
             } 
           }

            .new-tag{
              background-color: green;
              color:#fff;
                &::before{
                content:"最新";
              } 
            }

            .recommend-tag{
              background-color:#FF6700;
              color:#fff;
                &::before{
                content:"推荐";
              } 
            }

           
              img{
                margin:40px 0px 10px;
                width:160px;
                height:160px;
              }
               .big-img{
                    width:100%;
                    height:100%;
                    margin:0px;
                  }
              h3{
                color:#333;
                line-height:1.5
              }
              p{
                color:#b0b0b0;
                margin-bottom:10px;
              }
              h4{
                color:#FF6700;
                span{
                  margin-left:10px;
                }
              }
              
         }
        }
        li:first-child{
          grid-area: a1;
          
        }
      }
  }
}

</style>