import React, { Component } from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'import { DatePicker } from 'antd';
import { Input ,Button,List} from 'antd';
class  TodoListUi  extends  Component  {
  render() {
      return (
        <React.Fragment>
             <h3 style={{ marginBottom: 16 }}>TodoList</h3>
             <Input value={this.props.inputValue}
                    placeholder="todolist输入框"
                    style={{width:"300px","marginRight":"10px"}}
                    onChange={this.props.handleChangeInput}
             />
             <Button type="primary" onClick={this.props.handleChangeButton}>提交</Button>
             <List
             style={{width:"300px"}}
             bordered
             dataSource={this.props.list}
             renderItem={(item,index) => (<List.Item  onClick={(index)=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
           />
        </React.Fragment>
      )
  }
}
export  default  TodoListUi;
