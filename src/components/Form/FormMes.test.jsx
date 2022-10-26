import { FormMes } from "./FormMes";
import { Button } from './components/Button';
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

// const onChange = jest.fn();

describe("FormMes", () => {
    let addMessage
    beforeEach(() => {
        addMessage = jest.fn();
        render(<FormMes addMessage={addMessage} />);
    });

    it("render form", () => {
        const addMessage = jest.fn();
        render(<FormMes addMessage={addMessage} />);
    });

    it("button in component", () => {
        render(<Form />);
        expect(screen.getByRole("button")).toBeInTheDocument;
    });

    it("in input onChange", () => {
        const input = screen.getByTestId('input');

        fireEvent.change(input, { target: { value: 'new value' } })
        expect(input.value).toBe('new value');
        // render(<Form onChange={onChange} />);
        // userEvent.type(screen.getAllByRole("textbox"), "hello");
        // expect(onChange).toHaveBeenCalled;
    });
    it("input change with fireevent", async () => {
        const input = screen.getByTestId('input');

        await userEvent(input, "Hello world")
        expect(input.value).toBe("Hello world");
    });
    it("button click with fireEvent", () => {
        const input = screen.getByTestId('input');
        fireEvent.change(input, { target: { value: 'new value' } })
        expect(input.value).toBe('new value');

        const button = screen.getByTestId('button');
        fireEvent.click(button);
        expect(addMessage).toBeCalledTimes(1);
    });
    it("test formMes called submit", ()=>{
        const handlSubmit = jest.fn();
        // render(<FormMes addMessage={addMessage} />);
        fireEvent.submit(Button);
        expect(handlSubmit).toHaveBeenCalledTimes(1);
    });

}); 