import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'

class Table extends React.Component {
  render() {
    const { hasFixedHeader, ...props } = this.props
    const children = React.Children.map(this.props.children, child => {
      if (child.type === 'thead') {
        return <Header 
          {...child.props} 
          isFixed={hasFixedHeader} />
      }

      return child
    })
    return (
      <table {...props}>
        {children}
      </table>
    )
  }
}

Table.propTypes = {
  children: PropTypes.node,
  hasFixedHeader: PropTypes.bool
}

export default Table