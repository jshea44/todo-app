import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [incomplete, setIncomplete] = useState([]);

  return (
    <SettingsContext.Provider value={{ incomplete }}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
