export default {
    saveName(context,value){
        context.commit('saveName',value)
    },
    getCartSum(context,value){
        context.commit('getCartSum',value)
    }
}