import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from '../../components/main';

function customRender(ui, {route = '/'} = {}) {
  window.history.pushState({}, 'Test page', route);

  function Wrapper({children}) {
    return <BrowserRouter>{children}</BrowserRouter>;
  }

  return render(ui, {wrapper: Wrapper});
}

test('Render main page and can navigate to about page', () => {
  customRender(<Main />);
  expect(screen.getByTestId('home-page')).toBeInTheDocument();
  userEvent.click(screen.getByTestId('about-link'));
  expect(screen.getByTestId('about-page')).toBeInTheDocument();
});

test('render 404 page', () => {
  customRender(<Main />, {route: '/not-exists'});
  expect(screen.getByTestId('404-page')).toBeInTheDocument();
});
