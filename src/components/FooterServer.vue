<template>
  <div class="footer-server">
      <ul class="container">
          <li><a href="#" target="_blank"><span class="iconfont icon-gongju"></span>预约维修服务</a></li>
          <li><a href="#" target="_blank"><span class="iconfont icon-7tianwuliyoutuihuo"></span>7天无理由退货</a></li>
          <li><a href="#" target="_blank"><span class="iconfont icon-15"></span>15天免费换货</a></li>
          <li><a href="#" target="_blank"><span class="iconfont icon-liwuhuodong"></span>满69包邮</a></li>
          <li><a href="#" target="_blank"><span class="iconfont icon-didian"></span>520余家售后网点</a></li>
      </ul>
      
  </div>
</template>

<script>
export default {
    name:'FooterServer',
}
</script>

<style lang='scss'>
.footer-server{
    height:70px;
    

    .container{
        display: grid;
       grid-template-columns:repeat(5,1fr)  ;
       grid-template-rows: 1fr;
       grid-template-areas: a1 a2 a3 a4 a5;
       height:70px;
       align-items: center;
      
        li{
            text-align: center;
            border-right:1px solid #ddd;

            a{
                color:#666666;
                display: inline-block;
                height:25px;
                font-size: 16px;
                font-weight: 400;
              
                display: flex;
                align-items: center;
                justify-content: center;

                &:hover{
                    color:#FF6700;
                }

                span{
                    font-size: 20px;
                    margin-right:5px;
                }
            }
        }
        li:last-child{
            border:0;
        }

    }
}

</style>