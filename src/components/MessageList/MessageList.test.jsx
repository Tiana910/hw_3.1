import {  render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MessageList } from './MessageList'
import { AUTHOR } from "../constants";


describe('MessageList', () => {
    it('render component', () => {
        render(<MessageList messages={[]} />);
    });

    it("MessageList is empty", () => {
        render(<MessageList messages={[]} />);
        expect(screen.queryAllByRole('li').length).toBe(0);
    });

    it("MessageList length is 2", () => {
        const messages = [
            {
                autor: AUTHOR.user,
                value: 'first'
            },
            {
                autor: AUTHOR.user,
                value: 'second'
            }
        ]
        render(<MessageList messages={[messages]} />);
        expect(screen.getAllByTestId('li').length).toBe(2);
        expect(screen.getAllByTestId('li')[0].innerHTML).toBe("user:first");
    });
});