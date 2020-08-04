import Vue from 'vue'
import { pop } from 'core-js/fn/array'

function myPopup(Component, props) {

    // 组件构造函数如何获取
    // 1. Vue.extend()
    // 2. render()
    const vm = new Vue({
        // h是createElement ，返回VNode 虚拟dom
        // 需要进行挂载才能变成真实dom
        render: h => h(Component,{props})
    }).$mount()  //不指定宿主元素，会直接创建真实dom。 不会进行追加操作

    // 获取真实dom
    document.body.appendChild(vm.$el)
    
    const comp = vm.$children[0]
    // 添加删除方法，在弹出后删除
    comp.remove = function(){
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    return comp
}

export default myPopup
