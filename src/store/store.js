 //引入createStore 模块
 import {createStore} from 'redux'
 import reducer from './reducer'
 //调用createStore 方法
 const store = createStore(reducer);
 //导出store
 export default store;