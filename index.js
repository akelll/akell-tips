import Process from '@/components/Process/index'
import {deepClone, fileToBase64, html2Text, isEmail, isNumberStr, isPhoneNumber} from "@/utils"

const components = [Process]
const install = (Vue) => {
    components.map(component => Vue.component(component.name, component))

}

export default {
    install,
    Process,
    html2Text,
    deepClone,
    isNumberStr,
    fileToBase64,
    isEmail,
    isPhoneNumber
}
