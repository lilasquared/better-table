import React from 'react'
import PropTypes from 'prop-types'

import Table from './Table'

const BetterTable = props => (
  <Table 
    { ...React.Children.only(props.children).props }
    hasFixedHeader={props.hasFixedHeader}
  />
)

BetterTable.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName]
    if (React.Children.count(prop) !== 1 || prop.type !== 'table') {
      return new Error(`\`${componentName}\` should have a single child of type \`table\``)
    }
  },
  hasFixedHeader: PropTypes.bool
}

BetterTable.defaultProps = {
  hasFixedHeader: false
}

export default BetterTable