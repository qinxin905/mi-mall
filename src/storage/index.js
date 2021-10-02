const STORAGE_KEY='mall'

export default {
    //存储值
    setItem(key,value,module_name){
        if(module_name){
            let obj=this.getItem(module_name)
            obj[key]=value
            this.setItem(module_name,obj)
        }else{
            let obj=this.getStorage()
             obj[key]=value
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(obj))
        }
        
    },
    //获取值
    getItem(key,module_name){
        if(module_name){
            let obj=this.getItem(module_name)
            if(obj) return obj[key]
        }
        return this.getStorage()[key];//返回Json对象中的某个属性值  
    },
    //获取整个storage
    getStorage(){
       //mall='{"user":{"name":"wlm","age":2}}' 但直接手动添加到sessionStorage中，则要去掉外面''
       var obj= window.sessionStorage.getItem(STORAGE_KEY) || '{}'
       return JSON.parse(obj)
        },
    //清空某一个值
    clearItem(key,module_name){
        let obj=this.getStorage();
        if(module_name){
            delete obj[module_name][key]
        }else{
            delete obj[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(obj))
    }
}


