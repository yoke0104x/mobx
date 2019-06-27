import React, { Component } from 'react';
import {inject, observer} from 'mobx-react'

@inject("count")
@observer

class componentName extends Component {
  render() {
    console.log(this.props.count.dispa)
    return (
      <div>
          <button onClick={()=>this.props.count.changeCount('+')}>+</button>
          <p>{this.props.count.count}</p>
          {
            this.props.count.dispa?<button onClick={()=>this.props.count.changeCount('-')}>-</button>:null
          }
      </div>
    );
  }
}
export default componentName