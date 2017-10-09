import React from 'react'
import PropTypes from 'prop-types'
import HeaderRow from './HeaderRow'
import FixedHeaderRow from './FixedHeaderRow'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      shouldRenderFixedHeader: false,
      widths: []
    }
  }

  updateShouldRenderFixedHeader() {
    const shouldRender = this.props.isFixed && this.thead.getBoundingClientRect().top < 0;
    this.setState({ shouldRenderFixedHeader: shouldRender });
  }

  componentDidMount() {
    this.updateShouldRenderFixedHeader();
    window.addEventListener("scroll", () => this.updateShouldRenderFixedHeader(), false);
  }
  
  render() {
    const fixedChildren = [];
    const children = [];
    React.Children.forEach(this.props.children, (row, index) => {
      if (row.type === HeaderRow) {
        fixedChildren.push(
          <FixedHeaderRow widths={this.state.widths} key={`f${index}`}>
            {row.props.children}
          </FixedHeaderRow>
        );

        children.push(
          React.cloneElement(row, {
            key: `r${index}`,
            setColumnWidth: (width, index) => {
              const newValue = {};
              newValue[index] = width;
              this.setState(state => ({
                widths: Object.assign([], state.widths, newValue)
              }));
            }
          })
        );
      }
    });

    return (
      <thead ref={el => this.thead = el}>
        {this.state.shouldRenderFixedHeader ? fixedChildren : []}
        {children}
      </thead>
    );
  }
}

Header.propTypes = {
  isFixed: PropTypes.bool,
  children: PropTypes.any
}

export default Header