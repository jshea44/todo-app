import React, { useState, useEffect } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  // const [incomplete, setIncomplete] = useState([]);
  const [displayItems, setDisplayItems] = useState(3);
  const [hideCompleted, setHideCompleted] = useState(false);
  const [sort, setSort] = useState('difficulty');

  const toggleComplete = () => {
    if (!hideCompleted) {
      setHideCompleted(true);
    } else {
      setHideCompleted(false);
    }
  };

  const changeDisplayItems = (num) => {
    if (typeof parseInt(num) === 'number') {
      setDisplayItems(num);
    } else {
      console.log('ERROR: Needs number');
    }
  };

  // loads
  useEffect(() => {
    let settings = JSON.parse(localStorage.getItem('settings'));
    if (settings) {
      setDisplayItems(settings.displayItems);
      setHideCompleted(settings.hideCompleted);
    }
  }, []);

  //saves
  useEffect(() => {
    localStorage.setItem(
      'settings',
      JSON.stringify({ displayItems, hideCompleted })
    );
  }, [hideCompleted, displayItems]);

  return (
    <SettingsContext.Provider value={{ displayItems, hideCompleted, sort }}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
