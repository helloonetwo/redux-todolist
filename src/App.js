import React, { Component } from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'import { DatePicker } from 'antd';
import { Input ,Button,List} from 'antd';
import store   from   './store/index'
import {getInputChangeAction, getAddItemAction ,getDeleteItemAction} from './store/actionCreators'
import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM} from  './store/actionType'
class App extends Component {
  constructor(props) {
     super(props);
     this.state=store.getState();
     this.handleChangeInput = this.handleChangeInput.bind(this);
     this.handleChange      = this.handleChange.bind(this);
     this.handleChangeButton= this.handleChangeButton.bind(this);
     store.subscribe(this.handleChange);
  }
  render() {
    return (
     <React.Fragment>
          <h3 style={{ marginBottom: 16 }}>TodoList</h3>
          <Input value={this.state.inputValue}
                 placeholder="todolist输入框"
                 style={{width:"300px","marginRight":"10px"}}
                 onChange={this.handleChangeInput}
          />
          <Button type="primary" onClick={this.handleChangeButton}>提交</Button>
          <List
          style={{width:"300px"}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (<List.Item  onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
        />
     </React.Fragment>
    );
  }
  handleChangeInput(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  };
  handleChange(e) {
    this.setState(store.getState())
  }
  handleChangeButton() {
     const  action  = getAddItemAction();
     store.dispatch(action);
  }
  deleteItem(index) {
    const action  = getDeleteItemAction(index);
    store.dispatch(action);
  }
}

export default App;
