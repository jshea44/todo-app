import React from 'react';
import { When } from 'react-if';

import { LoginContext } from './Context.jsx';

function Login(props) {
  return <When condition={okToRender}>{this.props.children}</When>;
}

export default Login;
