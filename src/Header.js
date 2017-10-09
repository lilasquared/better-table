import React from 'react'
import PropTypes from 'prop-types'
import HeaderRow from './HeaderRow'
import FixedHeaderRow from './FixedHeaderRow'

class Header extends React.PureComponent {
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
    const { isFixed, ...props} = this.props
    const fixedChildren = [];
    const children = [];
    React.Children.forEach(this.props.children, (row, index) => {
      if (row.type === 'tr') {
        fixedChildren.push(
          <FixedHeaderRow widths={this.state.widths} key={`f${index}`}>
            {row.props.children}
          </FixedHeaderRow>
        );

        const rowProps = {
          ...row.props, 
          key: `r${index}`,
          setColumnWidth: (width, index) => {
            const newValue = {};
            newValue[index] = width;
            this.setState(state => ({
              widths: Object.assign([], state.widths, newValue)
            }));
          }
        }
        children.push(<HeaderRow {...rowProps} />);
      }
    });

    return (
      <thead ref={el => this.thead = el} {...props}>
        {this.state.shouldRenderFixedHeader ? fixedChildren : []}
        {children}
      </thead>
    );
  }
}

Header.propTypes = {
  children: PropTypes.any,
  isFixed: PropTypes.bool
}

Header.contextTypes = {
  hasFixedHeader: PropTypes.bool
}

export default Header