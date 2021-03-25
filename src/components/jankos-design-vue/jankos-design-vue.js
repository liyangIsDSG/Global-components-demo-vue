import jankosButton from './jankos-button'

const registerComponents = [jankosButton]

const install = (Vue, opt = {}) => {
    console.log(opt)
    registerComponents.forEach(component => {
        Vue.component(component.name, component)
    })
}
if (typeof window != undefined && window.Vue) {
    console.log(111)
    install(window.Vue)
}

export default {
    install,
    // 防止 eslint 报错，再导一次 
    jankosButton,
}