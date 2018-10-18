import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM,INIT_ITEM } from  './actionType'
export const  getInputChangeAction = (value) => ({
  type:'CHANGE_INPUT_VALUE',
  value
})
export const  getAddItemAction = () => ({
 type: 'ADD_ITEM'
})
export const  getDeleteItemAction = (index) => ({
    type: 'DELETE_ITEM',
    index
})
export const  getInitItem = (data) => ({
    type: 'INIT_ITEM',
    data
})
