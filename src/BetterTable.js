import React from 'react'
import warning from 'warning'
import PropTypes from 'prop-types'

import Table from './Table'

class BetterTable extends React.Component {
  render() {
    const { hasFixedHeader = false } = this.props
    const children = React.Children.map(this.props.children, (child) => {
      warning(child.type === 'table', 'TableWrapper child must be a table')
      return <Table 
        { ...child.props }
        hasFixedHeader={hasFixedHeader}
      />
    })

    return children[0]
  }
}

BetterTable.propTypes = {
  children: PropTypes.node,
  hasFixedHeader: PropTypes.bool
}

export default BetterTable