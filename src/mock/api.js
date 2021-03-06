import Mock from 'mockjs'

Mock.mock('/api/products?categoryId=100012',{
    "status":0,
    "data":{"total":19,
    "list":[
                {"id":30,"categoryId":100012,"name":"小米CC9","subtitle":"3200万+4800万 前后双旗舰相机","mainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png","price":1799.00,"status":1,"imageHost":"http://img.springboot.cn"},
                {"id":31,"categoryId":100012,"name":"小米CC9e","subtitle":"3200万+4800万 前后双旗舰相机","mainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png","price":1299.00,"status":1,"imageHost":"http://img.springboot.cn"},
                {"id":32,"categoryId":100012,"name":"小米CC9 美图定制版","subtitle":"直出超质感美颜","mainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png","price":2599.00,"status":1,"imageHost":"http://img.springboot.cn"},
                {"id":33,"categoryId":100012,"name":"小米9","subtitle":"小米9 战斗天使","mainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png","price":2599.00,"status":1,"imageHost":"http://img.springboot.cn"},
                {"id":34,"categoryId":100012,"name":"小米9 Pro 5G","subtitle":"快的不只是5G","mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41c566d825a3ae3b5751a78d4c7cffdb.png","price":3699.00,"status":1,"imageHost":"http://img.springboot.cn"},
                {"id":35,"categoryId":100012,"name":"小米MIX Alpha","subtitle":"5G环绕屏概念手机","mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png","price":19999.00,"status":1,"imageHost":"http://img.springboot.cn"},
                {"id":36,"categoryId":100012,"name":"Redmi Note 8 Pro","subtitle":"6400万全场景四摄","mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg","price":1399.00,"status":1,"imageHost":"http://img.springboot.cn"},
                {"id":37,"categoryId":100012,"name":"Redmi Note 8","subtitle":"千元4800万四摄","mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg","price":999.00,"status":1,"imageHost":"http://img.springboot.cn"},
                {"id":38,"categoryId":100012,"name":"Redmi K20 Pro 尊享版","subtitle":"骁龙855 Plus， 弹出全面屏","mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg","price":2699.00,"status":1,"imageHost":"http://img.springboot.cn"},
                {"id":39,"categoryId":100012,"name":"Redmi Note 7","subtitle":"4800万拍照千元机","mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg","price":1099.00,"status":1,"imageHost":"http://img.springboot.cn"}
            ],
        "pageNum":1,
        "pageSize":10,
        "size":10,
        "startRow":1,
        "endRow":10,
        "pages":2,
        "prePage":0,
        "nextPage":2,
        "isFirstPage":true,
        "isLastPage":false,
        "hasPreviousPage":false,
        "hasNextPage":true,
        "navigatePages":8,
        "navigatepageNums":[1,2],
        "navigateFirstPage":1,
        "navigateLastPage":2
    }
    
   
})



Mock.mock('/api/products?categoryId=100013',{
    "status":0,
    "data":{
        "total":19,
        "list":[
                    {"id":35,"categoryId":100013,"name":"小米MIX Alpha","subtitle":"5G环绕屏概念手机","mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png","price":19999.00,"status":1,"imageHost":"http://img.springboot.cn"},
                    {"id":36,"categoryId":100013,"name":"Redmi Note 8 Pro","subtitle":"6400万全场景四摄","mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg","price":1399.00,"status":1,"imageHost":"http://img.springboot.cn"},
                    {"id":37,"categoryId":100013,"name":"Redmi Note 8","subtitle":"千元4800万四摄","mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg","price":999.00,"status":1,"imageHost":"http://img.springboot.cn"},
                    {"id":38,"categoryId":100013,"name":"Redmi K20 Pro 尊享版","subtitle":"骁龙855 Plus， 弹出全面屏","mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg","price":2699.00,"status":1,"imageHost":"http://img.springboot.cn"},
                    {"id":39,"categoryId":100013,"name":"Redmi Note 7","subtitle":"4800万拍照千元机","mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg","price":1099.00,"status":1,"imageHost":"http://img.springboot.cn"}
                ],
            "pageNum":1,
            "pageSize":10,
            "size":10,
            "startRow":1,
            "endRow":10,
            "pages":2,
            "prePage":0,
            "nextPage":2,
            "isFirstPage":true,
            "isLastPage":false,
            "hasPreviousPage":false,
            "hasNextPage":true,
            "navigatePages":8,
            "navigatepageNums":[1,2],
            "navigateFirstPage":1,
            "navigateLastPage":2
    }

   
})