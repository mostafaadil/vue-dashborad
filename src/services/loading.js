import $ from "jquery"
var template
function makeMobileLoader(text){
    var template = $(`<div class="loadingoverlay" style="box-sizing: border-box;position: fixed;display: flex;flex-flow: column nowrap;align-items: center;justify-content: space-around;background: rgba(0, 0, 0, 0.5);top: 0px;left: 0px;width: 100%;height: 100%;z-index: 2147483647;opacity: 1;"><div class="loadingoverlay_element loadingoverlay_fa" style="order: 2;box-sizing: border-box;overflow: visible;flex: 0 0 auto;display: flex;/* justify-content: center; */align-items: center;animation-name: loadingoverlay_animation__undefined;animation-timing-function: linear;animation-iteration-count: infinite;color: rgb(32, 32, 32);font-size: 120px;background: rgba(0,0,0,0.4);padding: 10px 20px;border-radius: 8px;">
<svg class="spinner" viewBox="0 0 66 66" >
   <circle class="spinner__circle" cx="33" cy="33" r="25"></circle>
</svg>
<div style="
    display: ${text?'block':'none'};
    font-size: 23px;
    color: white;
    padding-left: 16px;
">
  ${text}
</div>

</div></div>`)
    $("body").append(template)
    return template
}
window.$loading = {
    show(obj){
        if(!obj) obj = {}
        template = makeMobileLoader(obj.text)
        if(obj.time){
            setTimeout(template.remove,obj.time)
        }
    },
    hide(){
        if(template)
            template.remove()
    }
}
export default {
    install(Vue) {

        Vue.config.globalProperties.$loading = window.$loading
    }
}