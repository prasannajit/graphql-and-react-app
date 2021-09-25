import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, act } from '@testing-library/react';
import BlockDetails, { GET_BLOCK_DETAILS } from './index';
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => {
        return { hash: '123' }
    },
}));
const mocks = [
    {
        request: {
            query: GET_BLOCK_DETAILS,
            variables: {
                blockHash: '12abcdef162636',
            },
        },
        result: {
            data: {
                block: {
                    block_index: 1,
                    prev_block: '123edfer44',
                    size: 1,
                    tx: [
                        { bits: 1, block_index: 1, fee: 0, hash: '123ddd', size: 312, time: 123, weight: 32 },
                        { bits: 2, block_index: 2, fee: 0, hash: '123ded', size: 3332, time: 1243, weight: 329 }
                    ]
                }
            }
        },
    },
];

describe('BlockDetails component test suite', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('BlockDetails component', () => {
        test('Renders BlockDetails component with loader', async () => {
            render(<MockedProvider mocks={mocks} addTypename={false}>
                <BlockDetails hash="12ananank889" />
            </MockedProvider>);
            expect(screen.getByTestId('at-loader-component')).toBeInTheDocument();
        });
        test.skip('Renders BlockDetails component with data', async () => {
            render(

                <MockedProvider mocks={mocks} addTypename={false}>
                    <BlockDetails hash="12ananank889" />
                </MockedProvider>
            );
            const prom = new Promise(resolve => setTimeout(resolve, 0));
            await act(() => prom);
            expect(screen.getByText('Transactions')).toBeInTheDocument();
        });
    });
});
