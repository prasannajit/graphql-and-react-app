import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, act } from '@testing-library/react';
import Blocks, { GET_BLOCKS } from './index';

const mocks = [
    {
        request: {
            query: GET_BLOCKS,
            variables: {
                blocksTimestamp: '1573858800000',
            },
        },
        result: {
            data: {
                blocks: [
                    { block_index: 1, hash: '1', height: 1, time: 1 },
                    { block_index: 2, hash: '2', height: 2, time: 2 },
                ],
            }
        },
    },
];

describe('Blocks component test suite', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('Blocks component', () => {
        test('Renders Blocks component with loader', async () => {
            render(<MockedProvider mocks={mocks} addTypename={false}>
                <Blocks timestamp="1573858800000" />
            </MockedProvider>);
            expect(screen.getByTestId('at-loader-component')).toBeInTheDocument();
        });
        test('Renders Blocks component with data', async () => {
            render(
                <BrowserRouter>
                    <MockedProvider mocks={mocks} addTypename={false}>
                        <Blocks timestamp="1573858800000" />
                    </MockedProvider>
                </BrowserRouter>);
            const prom = new Promise(resolve => setTimeout(resolve, 0));
            await act(() => prom);
            expect(screen.getByText('Blockchain')).toBeInTheDocument();
        });
    });
});
