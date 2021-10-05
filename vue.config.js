module.exports={
    devServer:{
        proxy:{
            '/api':{
                target:'http://mall-pre.springboot.cn',
                changeOrigin:true,
                pathRewrite:{'^/api':''} 
            },

            // 'api2':{
            //     target:'http://localhost:4000',
            //     changeOrigin:true,
            // }
        }
    }
}