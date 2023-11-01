import SettingsProvider from './index.jsx';
import { SettingsContext } from './index.jsx';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Testing Settings Context', () => {
  test('Should give displayItems, hideCompleted, and sort to children', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {(context) => (
            <>
              <p>{context.displayItems}</p>
              <p>{`${context.hideCompleted}`}</p>
              <p>{context.sort}</p>
            </>
          )}
        </SettingsContext.Consumer>
      </SettingsProvider>
    );
    expect(screen.getByText('3')).toBeVisible();
    expect(screen.getByText('false')).toBeVisible();
    expect(screen.getByText('difficulty')).toBeVisible();
  });
  test('Should be able to update hideComplete and displayItems.', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {(settings) => {
            <div>
              <p>{`${settings.hideCompleted}`}</p>
              <p>{settings.displayItems}</p>
              <button onClick={settings.toggleComplete}>toggle</button>
              <button onClick={() => settings.changeDisplayItems(6)}>
                displayItems
              </button>
            </div>;
          }}
        </SettingsContext.Consumer>
      </SettingsProvider>
    );

    fireEvent.click(screen.getByText('toggle'));
    fireEvent.click(screen.getByText('displayItems'));

    expect(screen.getByText('6')).toBeVisible();
    expect(screen.getByText('true')).toBeVisible();
  });
});
