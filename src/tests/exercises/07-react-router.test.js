import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from '../../components/main';

describe('Tests with react router dom', () => {
  // 👨‍💻 add '/' entry to browser session history stuck (🤫 use can use window.history.pushSate for it)
  // 👨‍💻 render Main component with BrowserRouter wrap
  // ‍✅ check if home page is exists (🤫 you can use toBeInTheDocument method for it)
  // 👨‍💻 change session history with About page URL
  // ‍✅ check if about page is exists
  test('Render main page and navigate to about page', () => {});

  // 👨‍💻 add not exists entry to browser session history stuck (🤫 use can use window.history.pushSate for it)
  // 👨‍💻 render Main component with BrowserRouter wrap
  // ‍✅ check if 404 page is exists (🤫 you can use toBeInTheDocument method for it)
  test('render 404 page', () => {});
});

// 👨‍💻 Try to write custom render method that has common logic from both test above (🤫 render Main component and changing browser session history)
