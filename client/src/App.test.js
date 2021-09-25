import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';

const mocks=[];

describe('App component test suite', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  
  describe('App component', () => {
    test('Renders App component successfully', async () => {
      render(<MockedProvider mocks={mocks} addTypename={false}><App/></MockedProvider>);
      expect(screen.getByTestId('at-loader-component')).toBeInTheDocument();
    });
  });
});
