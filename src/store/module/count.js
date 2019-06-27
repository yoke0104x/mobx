import {observable, action} from 'mobx'

export default class Count{
    // 模块的数据
    @observable count = 0;
    @observable dispa = false;

    // 模块的行为
    @action changeCount(type){
        type==='+'?this.count++: this.count<=1 ?this.count = 1:this.count-- 
        if(this.count === 0){
            this.dispa = false
        }else{
            this.dispa = true
        }
    }
}