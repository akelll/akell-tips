import Process from "./index.vue";

Process.install = function (Vue) {
    Vue.component(Process.name,Process)
}
export default Process