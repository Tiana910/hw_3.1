import { Button } from './Button';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('Button', () => {
       // it('render with snapshot', ()=> {
    //     const {asFragment} = render(<Button lable="test" />);

    //     expect(asFragment()).toMatchSnapshot()
    // })

    it('render component with text', () => {
        render(<Button lable="test" />)

        expect(screen.getByText(/test/)).toBeInTheDocument()
    });

    it('render mutiply components', () => {
        render(
            <>
                <Button lable="test1" />
                <Button lable="test2" />
            </>
        );
        expect(screen.queryAllByRole('button').length).toBe(2);
    });
    it('button is disabled', () => {
        render(<Button lable="test" disabled />)

        expect(screen.getByText(/test/)).toBeDisabled();
    })
    it('button hav style color red', () => {
        render(<Button lable='test' />);

        expect(screen.getByText(/test/)).toHaveStyle({ color: 'red' });
    })
    it("button click with userEvent", async () => {
        const mockHandler = jest.fn();
        render(<Button lable="test" click={mockHandler} />);

        await userEvent.click(screen.getByText(/test/));

        expect(mockHandler).toHaveBeenCalledTimes(1);
    });

    it("button async click", async () => {
        const mockHandler = jest.fn();
        render(<Button lable="test" click={() => setTimeout(mockHandler, 1500)} />);

        await userEvent.click(screen.getByText(/test/));

        await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), {
            timeout: 1600
        });

        // await screen.findByText('clicked twice', {timeout:1000});

    });
    it('test exampel', async () => {
        const onChange = jest.fn();
        render(<input type="checkbox" onChange={onChange} />);

        const checkbox = screen.getByRole('checkbox');

        await userEvent.dbClick(checkbox);
        expect(onChange).toHaveBeenCalledTimes(2);
        expect(checkbox).not.toBeChecked();
    });
});