import React, { Component } from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'import { DatePicker } from 'antd';
import { Input ,Button,List} from 'antd';
import store   from   './store/index'
import {getInputChangeAction, getAddItemAction ,getDeleteItemAction,getInitItem} from './store/actionCreators'
import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM,INIT_ITEM} from  './store/actionType'
import TodoListUi  from './store/TodoListUi'
import axios from 'axios';
class App extends Component {
  constructor(props) {
     super(props);
     this.state=store.getState();
     this.handleChangeInput = this.handleChangeInput.bind(this);
     this.handleChange      = this.handleChange.bind(this);
     this.handleChangeButton= this.handleChangeButton.bind(this);
     this.deleteItem        = this.deleteItem.bind(this);
     store.subscribe(this.handleChange);
  }
  render() {
    return (
       <TodoListUi
          inputValue = {this.state.inputValue}
          list       = {this.state.list}
          handleChangeInput = {this.handleChangeInput}
          handleChangeButton = {this.handleChangeButton}
          deleteItem  = {this.deleteItem}
       />
    );
  }
  componentDidMount() {
    axios.get('./list.json').then((res)=>{
       const data=res.data;
       const  action =getInitItem(data);
       store.dispatch(action);
    });
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
