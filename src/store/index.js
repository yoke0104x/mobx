// 加载子模块count
import Count from './module/count';

// 引入日志
import {autorun} from 'mobx';

let count = new Count();

autorun(()=>{
    console.log('count change...', count.count,count.dispa);
})

export default {
    count
}