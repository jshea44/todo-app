import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  // const [incomplete, setIncomplete] = useState([]);
  const [displayItems, setDisplayItems] = useState(3);
  const [hideCompleted, setHideCompleted] = useState(false);
  const [sort, setSort] = useState('difficulty');

  return (
    <SettingsContext.Provider value={{ displayItems, hideCompleted, sort }}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
