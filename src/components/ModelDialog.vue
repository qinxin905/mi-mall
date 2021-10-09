<template>
    <transition name="fade">
        <div class="model" v-if="showModel">
            <div class="mask"></div>
            <div class="model-dialog">
                <div class="model-header">
                    <span>{{modeTitle}}</span>
                    <a href="javascript:void(0);" @click="closeDialog">X</a>
                </div>
                <div class="model-body">
                    <slot name="dialog"></slot>
                </div>
                <div class="model-footer">
                     <span class="btn" @click="closeDialog" v-if="btnType==1">{{sureText}}</span>
                    <div class="btn-group" v-else-if="btnType==2">
                        <span class="btn" @click="closeDialog">{{sureText}}</span>
                        <span class="btn btn-default" @click="closeDialog">{{cancelText}}</span>
                    </div>
                </div>
            </div>
        </div>
    </transition>
  
</template>

<script>
export default {
    name:'ModelDialog',
    methods: {
        closeDialog(){
            this.$emit('show-dialog',false)
        }
    },
    //弹窗的配置信息
    props:{
        modeType:{
            type:String,
            default:'small'  //small  middle   big
        },
        showModel:Boolean, //显示还是隐藏
        modeTitle:String,
        modeBody:{
            type:String,
            default:'form'
        },
        btnType:{
            type:Number,
            default:2
        },
        sureText:{
            type:String,
            default:"确定"
        },
        cancelText:{
            type:String,
            default:"取消"
        }

    }
}
</script>

<style lang='scss'>
.model{
    width:100%;
    height:100%;
    position:fixed;
    left:0;
    top:0;
    z-index: 99;
    .mask{
         width:100%;
        height:100%;
        position:fixed;
        left:0;
        top:0;
        background-color:rgba(0,0,0,0.5); 
    }
    .model-dialog{
       position: absolute;
        top: 40%;
        left: 50%;
        width: 660px;
        height: auto;
        background-color: #fff;
        -webkit-transform: translate(-50%,-50%);
         transform: translate(-50%,-50%);

         .model-header{
                 height: 60px;
                background-color: #f5f5f5;
                padding: 0 25px;
                line-height: 60px;
                font-size: 16px;
                display: flex;
                justify-content: space-between;

                a{
                    color:#000;
                    font-weight: bold;
                    transition: transform 0.2s;

                    &:hover{
                        transform: scale(1.5);
                       
                    }
                }
         }
         .model-body{
             padding: 42px 40px 54px;
            font-size: 14px;
            
         }
         .model-footer{
                 height: 82px;
                line-height: 82px;
                text-align: center;
                background-color: #f5f5f5;
         }


    }

}
 .fade-enter-active, .fade-leave-active {
       top:0; 
       transition: top 0.5s;
            
}

     .fade-enter, .fade-leave-to  {
               top:-100%;
    }
</style>