<template>
  <div class="Footer">
    <div class="container">
        <div class="footer-nav">
            <dl>
              <dt>帮助中心</dt>
              <dd><a href="#">账户管理</a></dd>
              <dd><a href="#">购物指南</a></dd>
              <dd><a href="#">订单操作</a></dd>
            </dl>
            <dl>
              <dt>服务支持</dt>
              <dd><a href="#">售后政策</a></dd>
              <dd><a href="#">自助服务</a></dd>
              <dd><a href="#">相关下载</a></dd>
            </dl>
            <dl>
              <dt>线下门店</dt>
              <dd><a href="#">账户管理</a></dd>
              <dd><a href="#">购物指南</a></dd>
              <dd><a href="#">订单操作</a></dd>
            </dl>
            <dl>
              <dt>关于小米</dt>
              <dd><a href="#">账户管理</a></dd>
              <dd><a href="#">购物指南</a></dd>
              <dd><a href="#">订单操作</a></dd>
              <dd><a href="#">企业社会责任</a></dd>
            </dl>
            <dl>
              <dt>关注我们</dt>
              <dd><a href="#">新浪微博</a></dd>
              <dd><a href="#">官方微信</a></dd>
              <dd><a href="#">联系我们</a></dd>
              <dd><a href="#">公益基金会</a></dd>
            </dl>
        
            <dl>
              <dt>特色服务</dt>
              <dd><a href="#">F码通道</a></dd>
              <dd><a href="#">社物码</a></dd>
              <dd><a href="#">防伪查询</a></dd>
            </dl>
        </div>

        <div class="footer-contact">
        
            <h3>400-100-5678</h3>
            <p>8:00-18:00（仅收市话费）</p>
            <a href="" class="kefu iconfont icon-kefu">人工客服</a>
            <div class="contact">关注小米：
              <a href="#" class="weibo iconfont icon-xinlangweibo"></a>
              <a href="#" class="weixin iconfont icon-weixin">
                <img src="../assets/images/wx-img.png" width='100'  alt="">
              </a>
              </div>

        </div>
    </div>

  </div>
</template>

<script>
export default {
    name:'MainFooter'
}
</script>

<style lang='scss'>
.Footer{
  border-top:3px solid #ff6700;
   background-color:#333;
   padding-bottom:30px;
  .container{
      display: flex;
    justify-content: space-between;

  }
    .footer-nav{
      flex-grow: 1;
      display: flex;
      padding-top:45px;
     
      dl{

          width:160px;
        dt{
          font-size:14px;
          line-height: 1.5;
          margin-bottom:26px;
          color:#fff;
          
        }
        dd{
          font-size:12px;
         
          margin-top:10px;
          a{
            color:#ddd;
            &:hover{
              color:#ff6700;
            }
          }
        }
      }
    }

    .footer-contact{
      width:250px;
      margin-top:45px;
      border-left:1px solid #ddd;
      text-align: center;
      
      height:117px;

      h3{
            font-size: 22px;
            line-height: 1;
            color: #ff6700;
      }
      p{
        font-size: 12px;
          color:#ddd;
          margin-top:5px;
      }
      a.kefu{  display: block;
            width: 118px;
            height: 28px;
            font-size: 12px;
            line-height: 28px;
            color:#fff;
            text-align: center;
            border:1px solid #ff6700;
            color:#ff6700;
            margin:8px auto;

            &:hover{
              color:#fff;
              background-color: #ff6700;
            }
      }

      .contact{
        display: flex;
        align-items: center;
        justify-content: center;
        color:#ddd;
      }
      a.weibo,a.weixin{
        font-size: 20px;
        color:#ddd;
        margin:0px 2px;

        &:hover{
          color:#ff6700;
        }
      }
      a.weixin{
          font-size:28px;
          position: relative;
          img{
            display: none;
            position: absolute;
            left:-30px;
            top:25px;
          }
          &:hover img{
            display: block;
          }
      }
    }
}
</style>