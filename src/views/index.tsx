import React,{Component} from 'react';
import './style.scss'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import store from '../store/store'

class App extends Component<any, any> {
  constructor(props:any){
    super(props);
    this.state = store.getState();

    
  }
  render() {
    return (
      <div className="Index">
        <section>react+typescript+react-router+scss+antd脚手架</section>
        <Button type="primary">antd的按钮</Button>
        <br />
        <input value={this.state.inputValue}></input>
        <Link to="/AboutAuthor">router</Link>
        <br />
        <div>axios渲染的数据</div>

      </div>
    )
  };
}
export default App;