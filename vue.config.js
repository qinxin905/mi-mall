module.exports={
    devServer:{
        proxy:{
            'api1':{
                target:'https://www.imooc.com',
                changeOrigin:false,
                pathRewrite:{'^/api1':''} 
            },

            // 'api2':{
            //     target:'http://localhost:4000',
            //     changeOrigin:true,
            // }
        }
    }
}