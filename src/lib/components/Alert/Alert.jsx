import React from 'react'; 
import PropTypes from 'prop-types';
import classnames from 'classnames';
import s from './Alert.css';


const Alert = (props) => {
  let { className, danger, children } = props;
  className = classnames(
    s.alert,
    {
      [s.danger]: danger
    },
    className
  );
  return (
    <div className={className}>{children}</div>
  );
};
Alert.propTypes = {
  danger: PropTypes.bool
};


export default Alert;
