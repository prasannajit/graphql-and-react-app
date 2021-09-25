import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import PageNotFound from './index';

describe('PageNotFound component test suite', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
    
    describe('PageNotFound component', () => {
      test('Renders PageNotFound component successfully', async () => {
        render(<BrowserRouter><PageNotFound /></BrowserRouter>);
        expect(screen.getByText('The requested page not found.')).toBeInTheDocument();
      });
    });
  });
