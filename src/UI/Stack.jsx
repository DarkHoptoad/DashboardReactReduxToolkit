import PropTypes from 'prop-types';
import React from "react";

const Stack = ({children, pos}) => (
  <div className='stack' style={{
    justifyContent: pos === 'center' ? 'center' : `flex-${pos}`
  }}>
     {children}
  </div>
);

export {Stack};

Stack.propTypes = {
  children: PropTypes.node.isRequired,
}