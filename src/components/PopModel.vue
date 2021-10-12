<template>
    <div class="video-model" ref='videoBody'>
        <div class="container">
            <div class="video-body" :class="active">
                <h3 class="title1">60帧超慢动作摄影</h3>
                <h3 class="title2">慢慢回味每一瞬间的精彩</h3>
                <p class="desc1">后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！</p>
                <p class="desc2"> 更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
                <img src="/images/video-bg.png" alt="" class="video-img" @click="popactive='popactive'">
            </div>
        </div>

        <div class="pop-model" :class="popactive"  >
            <div class="mask" ></div>
            <div class="pop-body" >
                <div class="pop-video" >
                    <video src='images/product/video.mp4' muted="muted" autoplay="autoplay" controls='controls'></video>
                </div>
                <div class="pop-close" @click="popactive=''">X</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'PopModel',
    data(){
        return {
            active:'',
            top:0,
            popactive:''

            
        }
    },
    methods: {
        isAnimate(){
        var _top=document.documentElement.scrollTop || document.body.scrollTop;
            this.active=_top>this.top?"active":""
        }

        
    },
    mounted() {
        var top=this.$refs.videoBody.offsetTop
        this.top=(top-400);
        window.addEventListener('scroll',this.isAnimate)
    },

}
</script>

<style lang='scss'>
.video-model{
    padding:82px 0px 120px;
    background: #000;
    .container{

        .video-body{
             text-align: center;
            h3{
                font-size: 60px;
                color:#fff; 
                 transition: all 0.2s; 
                transform: translateY(300px);
                opacity: 0;
            }
            h3.title2{
                margin-bottom:47px;
                transition: all 0.5s 0.2s;
                transform: translateX(300px);
                opacity: 0;
            }
            p{
                font-size: 24px;
                color:#fff;
                 transition: all 0.5s 0.5s;
                transform: translateY(300px);
                opacity: 0;
            }
            .video-img{
                margin-top:58px;
                cursor: pointer;
            }
            &.active{

                h3,p{
                    transform: translateX(0px);
                    transform: translateY(0px);
                    opacity: 1;
                }
            }
        }
    }
    .pop-model{
        width:100%;
        height:100%;
        position:fixed;
        z-index: 1000;
        top:-200%;
        left:0px;

        .mask{
            width:100%;
            height:100%;
            background-color:rgba(0,0,0,0.5);
            position:fixed;
        }
        .pop-body{
            width:1226px;
            height:606px;
            position: fixed;
            top:-200%;
            left:50%;
           
            transform: translate(-50%,-50%);
            transition: all 1s;

            .pop-video{
                border:10px solid rgba(255,255,255,0.2);
                video{
                    width:100%;
                    height:100%;
                }
            }

            .pop-close{
                width:50px;
                height:50px;
                background-color:salmon;
                color:#fff;
                text-align: center;
                line-height: 50px;
                font-size: 20px;
                position: absolute;
                right:20px;
                top:20px;
                border-radius: 100%;
                cursor: pointer;
            }

        }

        &.popactive{

                top:0;
                .pop-body{
                    top:50%;

                }

                
            }
    }
}
</style>