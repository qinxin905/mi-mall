<template>
  <div class="header">
    <div class="site-topbar">
      <div class="container">
        <div class="topbar-nav">
            <a href="#">小米商城</a>
            <a href="#">MIUI</a>
            <a href="#">云服务</a>
            <a href="#">下载app</a>
        </div>
        <div class="topbar-userinfo">
          <a href="#" v-if='username'>{{username}}</a>
            <a href="javascript:void(0)" v-if='!username' @click="login">登录</a>
            <a href="#" v-if='!username'>注册</a>
            <a href="#" v-if='username'>我的订单</a>
        </div>
        <div class="topbar-cart"><cart></cart></div>
      </div>
    </div>
    <!--site-header start-->
    <div class="site-header">
      <div class="container">
          <div class="header-logo">
            <a href="#">
              <span class="before iconfont icon-xiaomi"></span>
              <span class="after iconfont icon-fangzidichan"></span>
            </a>
          </div>
          <div class="header-menu"  >
            <ul @mouseover="slideDown" @mouseout="slideUp">
              <li  ><a href="#" id='J-01'>小米手机</a></li>
              <li ><a href="#" id='J-02'>Redmi红米</a></li>
              <li ><a href="#" id='J-03'>电视</a></li>
              <li ><a href="#" id='J-04'>笔记本</a></li>
              <li ><a href="#" id='J-05'>平板</a></li>
              <li ><a href="#" id='J-06'>家电</a></li>
              <li ><a href="#" id='J-06' >路由器</a></li>
              <li ><a href="#" id='J-08'>智能硬件</a></li>
              <li ><a href="#" id='J-09'>智能硬件</a></li>
              <li ><a href="#" id='J-10'>服务</a></li>
              <li ><a href="#" id='J-11'>社区</a></li>
            </ul>
          </div>
          <div class="header-search" :class="searchActive" @mouseover="addHover" @mouseout="removeHover">
            <form action="#">
                <label for='search' class="hide">站内搜索</label>
                <input type="text" id='search' autocomplete="off" class="search-txt" 
                @focus="addSearchActive" 
                @blur="removeSearchActive"
                 @keyup.enter="addStorage"
                 v-model.trim="searchTxt"
                >
                 <div class="search-keyword">
                   <ul class="search-list">
                     <li v-for='(item,index) in searchKeyWords' :key='index'> 
                       <a href="#">{{item}}</a>
                     </li>
                   </ul>
                 </div>
                <div  class="search-btn-icon iconfont icon-sousuo ">
                  <input type="submit" value='' class="search-but" >
                </div>
            </form>
              


          </div>
      </div>

    <!--二级菜单start-->
    <div class="header-menu2" id="J_navMenu" :class="slide"  @mouseover="slideDown" @mouseout="slideUp" >
      <div class="container">
          <ul>
            <li v-for="(item,index) in productList" :key="index">
              <a :href="'/#/products/'+item.id" target="_blank">
                <dl>
                  <dt><img :src="item.mainImage" :alt="item.subtitle"></dt>
                  <dd class="title">{{item.name}}</dd>
                  <dd class="price">{{item.price | filterPrice}}元起</dd>
                </dl>
              </a>
            </li>
         
            
          
         
            
           
            
          </ul>

      </div>
    </div>
     <!--二级菜单end-->



    </div>
    <!--site-header end-->
  </div>
</template>

<script>
import Cart from './Cart'
export default {
    name:'MainHeader',
    data(){
      return {
        username:'',
        //搜索状态
        searchActive:{
            'search-hover':false,
            'search-active':false
        },
        searchKeyWords:JSON.parse(window.sessionStorage.getItem('search')) || [],
        searchTxt:'输入搜索关键词',
        slide:{
            slideUp:true,
            slideDown:false
        },
        productList:[]
    
      }
    },
    methods: {
      login(){
        this.$router.push('/login')
      },
      getProducts(id){
        this.$axios({
              method:'get',
              url:'/products',
              params:{
                'categoryId':id
              }
        }).then((result)=>{
            if(result.list.length>=6){
              this.productList= result.list.slice(0,6);
            }else{
              this.productList=result.list
            }
        })
      },


      addHover(){
        this.searchActive['search-hover']=true
      },
      removeHover(){
          this.searchActive['search-hover']=false
      },
      addSearchActive(){
          this.searchActive['search-hover']=false
          this.searchActive['search-active']=true
          this.searchTxt=""
      },
      removeSearchActive(){
          this.searchActive['search-hover']=false
          this.searchActive['search-active']=false
      },
      addStorage(e){
         var obj=JSON.parse(window.sessionStorage.getItem('search')) || []
              //如果是数组，需要添加过滤器
            var val=this.trim(e.target.value)
            var index= obj.indexOf(val,0)
         
            if(index==-1){
                obj.unshift(val);
            }
            //对象的操作方法
            // obj[val]=val
             this.searchKeyWords=obj
             window.sessionStorage.setItem('search',JSON.stringify(obj))
             this.searchTxt=''
      },
      slideDown(e){
        console.log(e.target)
            switch (e.target.id){
              case 'J-01':
                this.productList=this.getProducts('100012');
                break
              case'J-02':
               this.productList=this.getProducts('100013');
               break
               case 'J-03':
                  this.productList=this.getProducts('100014');
                  break;
              default:
                this.productList=[]
                break;


            }

            this.slide['slideUp']=false;
            this.slide['slideDown']=true;
          
            
      },
      slideUp(){
        //  if(e.target.id){
            this.slide['slideUp']=true;
            this.slide['slideDown']=false;
            // }
      },

      //去左右空格;
      trim(s){
                return s.replace(/(^\s*)|(\s*$)/g, "");
              }
    },

    filters:{
      filterPrice(value){
          if(!value){
            return '￥ 0.00'
          }else{
            return `￥${value}`
          }
      }
    }
    ,
    components:{
      Cart
    },
    mounted() {
      // this.getProducts('100012');
    },
    
}
</script>

<style lang='scss'>

  .header{
    .site-topbar{
      height:39px;
      background-color:#333333;
      .container{
        display: flex;
        align-items: center;
        height:39px;
        a{
            color:#B0B0B0;
            &:hover{
              color:#fff;
              cursor: pointer;
            }
          }
          
        .topbar-nav{
          flex-grow: 1;
          a{
            margin-right:17px;
          }
        }
        .topbar-userinfo{
          a{
            margin-right:19px;
          }
        }
      }  
    }

    .site-header{
       position: relative;
        .container{
            height:112px;
            display: flex;
            align-items: center;
            .header-logo{
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
            .header-menu{
              height:112px;
                flex-grow: 1;
                display: flex;
                justify-content: flex-end;
                align-items:center;

                ul{
                  display: flex;
                  font-size: 16px;
                  font-weight: bold;
                  font-family: FZLTHJW--GB1-0;
                  
                  li{
                   
                    height:112px;
                    line-height: 112px;
                    
                   
                    a{
                      
                      display: block;
                      color: #333;
                       padding:0px 10px ;
                      &:hover{
                        color:#FF6700;
                      }
                    }
                  }
                }

            }
            .header-search{
                width:319px;
                border:1px solid #E0E0E0;
                height:50px;
                position: relative;
                margin-left:20px;
                
                input.search-txt{
                  height:50px;
                  width:264px;
                  box-sizing: border-box;
                  padding-left:5px;
                  border:0;
                  border-right:1px solid #E0E0E0; 
                  float: left;
                }
               
                
                .icon-sousuo::before{
                      position: absolute;
                      font-size: 30px;
                      left:12px;
                      top:10px;
                }
                .search-btn-icon{
                  width:55px;
                  height:50px;
                  position: relative;
                  float: left;
                   &:hover{
                      background-color:#FF6700 ;
                    }
                  
                   input.search-but{
                    width:55px;
                    height:50px;
                    border:0;
                    background-color:transparent;

                    
                  }


                }
                  
           .search-keyword{
             position: absolute;
             top:50px;
             left:-1px;
             width:263px;
             height:0px;
             overflow: hidden;
             
            ul li{
              line-height: 30px;
              
              a{
                padding-left:10px;
                color:#333333;
                display: block;
                
                &:hover{
                      background-color: rgb(247, 242, 242)
                }
              }
            }
           }
   
            }

//搜索框滑动和激活状态的样式
            .search-hover{
                  border:1px solid #666;
                  input.search-txt{
                  border-right:1px solid #666;
                  }
             }
               
            .search-active{
                  border:1px solid #FF6700;

                  input.search-txt{
                    border-right:1px solid #FF6700
                  }

              .search-keyword{
                border:1px solid #FF6700;
                height: auto;
              }

            }

            

        }

      /*
          二级菜单start
       */

.header-menu2{
  width:100%;
  height:0px;
  overflow: hidden;
  position: absolute;
  top:112px;
  background-color:#fff;
  transition: height 0.1s ease-in;
  z-index: 3;

  .container{
      height: 230px;
    ul{
      width:100%;

      li{
          float:left;
        a{
            display: block;
          dl{
            dt{
             border-right:1px solid #ddd;
             padding:0px 21px;
              height:110px;
              img{
                height:110px;
                width:160px;
              }
            }
           
            dd{
                  text-align: center;
                  line-height: 18px;
              }
      
              dd.title{
                 color:#000;
                 padding-top:10px;
              }
              dd.price{
                  color:#FF6700;
              }
          }

    
        }
      }

    }
    li:nth-of-type(6)>a>dl>dt{
      border:0;
    }
  }

  


}
.slideDown{
  height:230px;
  border:1px solid #ddd;
  box-shadow: 0px 5px 5px #ddd;
  box-sizing: border-box;
}






    }

  }
  
</style>