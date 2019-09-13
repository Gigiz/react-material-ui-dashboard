import React from 'react';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';

const TranslateFrom = EmptyContainer => {
  const _Translating = ({ children, direction, className, ...rest }) => {
    const Transition = React.forwardRef((props, ref) => {
      return <Slide direction={direction} ref={ref} {...props} />;
    });

    return <EmptyContainer
      {...rest}
      TransitionComponent={Transition}
      className={`${className}`} // `
    >
      {children}
    </EmptyContainer>;
  };

  _Translating.propTypes = {
    direction: PropTypes.string,
    className: PropTypes.string,
  };
  
  _Translating.defaultProps = {
    className: '',
    direction: 'up',
  };

  return _Translating;
};

export default TranslateFrom;
