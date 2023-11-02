import React from 'react';
import AuthProvider from './Components/Auth/Context.jsx';
import Todo from './Components/Todo';
import SettingsProvider from './Context/Settings';

export default class App extends React.Component {
  render() {
    return (
      <>
        <AuthProvider>
          <SettingsProvider>
            <Todo />
          </SettingsProvider>
          <Auth>
            <p>I am a child of Auth</p>
          </Auth>
        </AuthProvider>
      </>
    );
  }
}
