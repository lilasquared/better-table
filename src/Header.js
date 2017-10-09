import React from 'react'
import PropTypes from 'prop-types'
import HeaderRow from './HeaderRow'
import FixedHeaderRow from './FixedHeaderRow'

class Header extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      shouldRenderFixedHeader: false,
      widths: [],
      fixedHeaderOffsetTop: 0
    }
  }

  updateShouldRenderFixedHeader() {
    const shouldRender = 
      this.props.isFixed && 
      this.props.table.getBoundingClientRect && 
      this.props.table.getBoundingClientRect().top < 0 &&
      this.props.table.getBoundingClientRect().bottom > 0

    this.setState({ shouldRenderFixedHeader: shouldRender });
    if (shouldRender) {
      const offset = -(2 * this.thead.clientHeight - this.props.table.getBoundingClientRect().bottom)

      const offsetTop = offset > 0
        ? 0
        : offset

      this.setState({ fixedHeaderOffsetTop: offsetTop })
    }
  }

  componentDidMount() {
    this.updateShouldRenderFixedHeader();
    window.addEventListener("scroll", () => this.updateShouldRenderFixedHeader(), false);
  }
  
  render() {
    const { isFixed, table, ...props} = this.props
    const fixedChildren = [];
    const children = [];
    React.Children.forEach(this.props.children, (row, index) => {
      if (row.type === 'tr') {
        fixedChildren.push(
          <FixedHeaderRow widths={this.state.widths} offsetTop={this.state.fixedHeaderOffsetTop} key={`f${index}`}>
            {row.props.children}
          </FixedHeaderRow>
        );

        const rowProps = {
          ...row.props, 
          key: index,
          setColumnWidth: (width, index) => {
            this.setState(state => ({
              widths: Object.assign([], state.widths, {[index] : width})
            }));
          }
        }
        children.push(<HeaderRow {...rowProps} />);
      }
    });

    return (
      <thead {...props} ref={el => this.thead = el}>
        {this.state.shouldRenderFixedHeader ? fixedChildren : []}
        {children}
      </thead>
    );
  }
}

Header.propTypes = {
  children: PropTypes.any,
  isFixed: PropTypes.bool,
  table: PropTypes.object
}

Header.contextTypes = {
  hasFixedHeader: PropTypes.bool
}

export default Header