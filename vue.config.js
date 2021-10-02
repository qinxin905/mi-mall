module.exports={
    devServer:{
        proxy:{
            'aqpi':{
                target:'https://www.imooc.com',
                changeOrigin:false,
                pathRewrite:{'^/api':''} 
            },

            // 'api2':{
            //     target:'http://localhost:4000',
            //     changeOrigin:true,
            // }
        }
    }
}