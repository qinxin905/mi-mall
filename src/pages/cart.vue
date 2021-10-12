<template>
  <div>
      <order-header title="我的购物车">
          <template v-slot:desc>
               <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
          </template>
      </order-header>
      <div class="cart-body">
          <div class="container">
              <div class="cart-list2">
                  <div><span class="selectbox" :class="{checked:selectedAll}" @click="selAll"></span>全选 </div>
                  <div >商品名称</div>
                  <div>单价</div>
                  <div>数量</div>
                  <div>小计</div>
                  <div>操作</div> 
              </div>
                  <!--list 开始-->
                <div class="cart-list" v-for="(item,index) in CartList" :key="index" >

                    <div><span class="selectbox" :class="{checked:item.productSelected}"  @click="updateCart(item)"></span> </div>
                    <div class="imgtxt">
                        <a :href="'#/products/'+item.productId"><img v-lazy="item.productMainImage" alt="" width="100"></a>
                        <span class="fz">{{item.productName}}</span>
                    </div>
                    <div><span class="fz">{{item.productPrice}}元</span></div>
                    <div>
                            <div class="js">
                                <span class="js-btn" @click="updateCart(item,'-')">-</span>
                                <span>{{item.quantity}}</span>
                                <span class="js-btn" @click="updateCart(item,'+')">+</span>
                            </div> 
                    </div>
                    <div><span class="fz2">{{item.productTotalPrice}}元</span></div>
                    <div><span class="del" @click="delProduct(item)">X</span></div>
                </div>
                <!--list结束-->
                

              <div class="cart-footer">
                  <a href="#" class="goshop">继续购物</a>
                  <p class="prosum">共 <span>{{CartList.length}}</span> 件商品，已选择 <span>{{selectedNum}}</span>件</p>
                  <p class="sum">合计：<span class="price">{{allPrice}}</span>元</p>
                  <span class="btn" :disabled="submitbtn" :class="{disabled:submitbtn}"  @click="goOrder">去结算</span>  
              </div>
          </div>
      </div>
      <footer-server></footer-server>
      <main-footer></main-footer>
  </div>
</template>

<script>
import MainFooter from '../components/MainFooter'
import FooterServer from '../components/FooterServer'
import OrderHeader from '../components/OrderHeader'
export default {
    name:"Cart",
    components:{
        MainFooter,
        FooterServer,
        OrderHeader

    },
    data(){
        return {
            CartList:[],//购物车商品列表
            selectedNum:0,
            selectedAll:false,//全选
            allPrice:0,
            submitbtn:true //是否禁用
        }
    },
    methods: {
        //获取购物车商品列表
         getCartList(){
             
            this.$axios.get('/carts').then((result) => {

                 this.renderCart(result)


            }).catch((err) => {
                alert('没有登录购物车不能查看'+err)
        
            });
        },
        //全选
        selAll(){

           var  url=this.selectedAll?"/carts/unSelectAll" :"/carts/selectAll"

            this.$axios.put(url).then((result)=>{
                    this.renderCart(result)

            }).catch((error)=>{
                alert('购物车全选有问题'+error)
            })
        },
       updateCart(item,type){
           var quantity=item.quantity
           var selected=item.productSelected
           //如果是减-
           if(type=='-'){

              if(quantity==1){
                   alert('商品至少保留一件');
                    return;
              }
              --quantity;

            //如果是加+
           }else if(type=='+'){
                if(quantity > item.productStock){
                            alert('购买数量不能超过库存数量');
                            return;
                        }
                 ++quantity;
               //其它，也就是关于选中和未选中
           }else{
                selected = !item.productSelected;
           }

           this.$axios.put(`/carts/${item.productId}`,{
                quantity,
                selected
             }).then((result)=>{
                    this.renderCart(result)
                })

       },
       delProduct(item){
           var id=item.productId
           this.$axios.delete(`/carts/${id}`).then((result)=>{
                alert('删除成功');
                this.renderCart(result)
            });
       },
       goOrder(){
           if(this.submitbtn){
               return;
           }else{
               this.$router.push('/order/confirm');
           }
            
       },
        renderCart(result){

                this.CartList=result.cartProductVoList;
                this.allPrice=result.cartTotalPrice
                this.selectedAll=result.selectedAll

                this.submitbtn=this.CartList.every(item=>!item.productSelected);

                this.selectedNum=result.cartProductVoList.filter(item=>{return item.productSelected} ).length;
        }
    },
    mounted() {
        this.getCartList()
    },
}
</script>

<style lang='scss'>
 [v-cloak]{
           display: none;
       }
.cart-body{
    background-color: #f5f5f5;
    .container{

        padding:30px 0px;
      
        .cart-list,.cart-list2{

            display: grid;
            grid-template-rows:120px;
            grid-template-columns:100px 500px 100px 200px 200px 126px;
            grid-auto-rows: 120px;
            grid-auto-flow: rows;
            row-gap: 1px;

            div{
                width:100%;
                height:100%;
                background-color: #fff;
                border-bottom:1px solid #ddd;
               
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;

                .selectbox{
                    width:18px;
                    height:18px;
                    border:1px solid #333;
                     text-align: center;
                     line-height: 18px;
                     position: absolute;
                     left:15%;
                     cursor: pointer;
                }
                .checked{
                    background-color:#FF6700;
                    border:1px solid #FF6700;
                    color:#fff;
                    &::before{
                        content: "✔";
                       
                    }
                }

                .js{
                    border:1px solid #ddd;
                    height:30px;
                    display: flex;
                    justify-content: space-between;
                   width:100px;

                    .js-btn{
                        width:30px;
                        text-align: center;
                        line-height: 30px;
                        font-size: 30px;
                        background-color: #f5f5f5;
                        cursor: pointer;

                        &:hover{
                            background-color: #FF6700;
                            color:#fff;
                        }
                    }

                }

                span.del{
                    width:30px;
                    height:30px;
                    font-size: 18px;
                    cursor: pointer;   
                }
                span.fz{
                    font-size:18px ;
                }
                span.fz2{
                    font-size: 18px;
                    color:#FF6700;
                }
            }
            .imgtxt{
                display: flex;
                justify-content: flex-start;
            }
            
        }

          .cart-list2{
            display: grid;
            grid-template-rows:50px;
            grid-template-columns:100px 500px 100px 200px 200px 126px;

            grid-auto-rows: 120px;
            grid-auto-flow: rows;
            row-gap: 1px;

        }

        .cart-footer{
            margin:30px auto;
            height:50px;
            background-color: #fff;
            display: flex;
            align-items: center;
            font-size: 16px;

            .goshop{
                margin-left:30px;
                padding-right:30px;
                border-right:1px solid #ddd ;
                color:#333;
            }
            .prosum{
                margin-left:30px;
                flex-grow: 1;
                span{
                    color:#FF6700;
                }
            }
            .sum{
                color: #FF6700;
                margin-right: 30px;;
                span{
                    font-size: 28px;
                }
                
            }
            .btn{
                width:220px;
                height:50px;
                line-height: 50px;

                
            }
            .disabled{
                    background-color: #ddd;
                }

        }
    }
    
}
</style>