import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'

class Table extends React.Component {
  constructor() {
    super()

    this.state = {
      table: {}
    }
  }
  componentDidMount() {
    this.setState({ table : this.table })
  }

  render() {
    const { children, hasFixedHeader,  ...props } = this.props
    const newChildren = React.Children.map(children, child => {
      if (child.type === 'thead') {
        return <Header 
          {...child.props} 
          isFixed={hasFixedHeader}
          table={this.state.table} />
      }

      return child
    })
    return (
      <table {...props} ref={el => this.table = el}>
        {newChildren}
      </table>
    )
  }
}

Table.propTypes = {
  children: PropTypes.node,
  hasFixedHeader: PropTypes.bool
}

export default Table