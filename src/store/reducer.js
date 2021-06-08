//定义数据
const defaultState = {
    inputValue:"redux",
    list:[1,3,2]
}

// 导出一个方法，这个方法有state和action参数，返回state
export default (state = defaultState,action)=>{
    return state;
}