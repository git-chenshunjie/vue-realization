import Vue from 'vue'
import Notice from "@/components/Notice.vue";

function myPopup(Component, props) {
    // 组件构造函数如何获取
    // 1. Vue.extend()
    // 创建实例
    const Ctor = Vue.extend(Component)
    const comp = new Ctor({ propsData: props })
    // 挂载生成真实dom
    comp.$mount()
    // 追加真实dom
    document.body.appendChild(comp.$el)
    comp.remove = function () {
        document.body.removeChild(comp.$el)
        comp.$destroy()
    }

    // 2. render()
    // const vm = new Vue({
    //     // h是createElement ，返回VNode 虚拟dom
    //     // 需要进行挂载才能变成真实dom
    //     render: h => h(Component, { props })
    // }).$mount()  //不指定宿主元素，会直接创建真实dom。 不会进行追加操作

    // // 获取真实dom
    // document.body.appendChild(vm.$el)

    // const comp = vm.$children[0]
    // // 添加删除方法，在弹出后删除
    // comp.remove = function () {
    //     document.body.removeChild(vm.$el)
    //     vm.$destroy()
    // }
    return comp
}

const popup = {
    install(Vue){
        Vue.prototype.$notice = function(options){
            return myPopup(Notice,options)
        }
    }
}

Vue.use(popup)