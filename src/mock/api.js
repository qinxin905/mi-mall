import Mock from 'mockjs'

Mock.mock('/api/user/login',{
    "code": 200,
    "message": "成功!",
    "data":[
        {
            "name":"清心",
            "password":"@qxxxs",
            "email":"9052229@qq.com",
            "age":32,
             "address":"陕西西安"
        },
        {
            "name":"小小",
            "password":"@qxiao",
            "email":"9052sss229@qq.com",
            "age":6,
             "address":"陕西西安"
        }
    ]
   
})



Mock.mock('/api/user/login2',{
    "code": 300,
    "message": "成功!",
    "data":[
        {
            "name":"清心2",
            "password":"@qxxxs",
            "email":"9052229@qq.com",
            "age":32,
             "address":"陕西西安"
        },
        {
            "name":"小小",
            "password":"@qxiao",
            "email":"9052sss229@qq.com",
            "age":6,
             "address":"陕西西安"
        }
    ]
   
})