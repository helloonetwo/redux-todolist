import {CHANGE_INPUT_VALUE, ADD_ITEM ,DELETE_ITEM}  from './actionType'
const  defaultState =  {
    inputValue:'',
    list:[]
}
export   default  (state=defaultState,action)=>{
   if(action.type === 'CHANGE_INPUT_VALUE') {
     //对state 做一次深拷贝
     //redu 不能直接修改state
      const  newState = JSON.parse(JSON.stringify(state));
      newState.inputValue=action.value;
      return  newState;
   }
   if(action.type === 'ADD_ITEM') {
     //拷贝
     const  newState = JSON.parse(JSON.stringify(state));
     newState.list.push(newState.inputValue);
     newState.inputValue = '';
     return   newState;
   }
   if(action.type === 'DELETE_ITEM') {
     //拷贝
     const  newState = JSON.parse(JSON.stringify(state));
     newState.list.splice(action.index,1);
      return   newState;
   }
   return   state;
}
