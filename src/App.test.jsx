import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { App } from "./App";

describe('App', () => {
    it("render component", () => {
        render(<App />);
    });

    it('send user message', async () => {
        render(<App />);

        const input = screen.getByTestId('input');
        await userEvent(input, "hellow");

        const button = screen.getByTestId('button');
        await userEvent.click(button);

        expect(screen.getAllByTestId('li').length).toBe(1);
    });

    it('answer', async () => {
        render(<App />);

        const input = screen.getByTestId('input');
        await userEvent(input, "hellow");

        const button = screen.getByTestId('button');
        await userEvent.click(button);
//variant1 
        expect(await screen.findByText(/I am BOT/, undefined, {timeout:1600})).toBeInTheDocument();
   
//variant 2 
        await waitFor(()=> expect (screen. getByText(/I am BOT/))).toBeInTheDocument(), {timeout:1600};
    });

});    