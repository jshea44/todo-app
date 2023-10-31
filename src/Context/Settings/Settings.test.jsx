import SettingsProvider from './index.jsx';
import { SettingsContext } from './index.jsx';
import { render, screen } from '@testing-library/react';

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
});
