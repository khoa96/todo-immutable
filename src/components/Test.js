import React, { Component } from 'react'
import {connect} from 'react-redux'
import { totalPriceSelector } from '../selector';

class Test extends Component {
  render() {
   console.log(this.props.todos)
    return (
      <div>
        test componenty
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch(actionCreator)
        }
    }
}
 
const mapStateToProps = (state) => {
    return {
        todos: totalPriceSelector(state)
    }
}

export default connect(mapStateToProps) (Test)
