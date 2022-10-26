import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import {MessageList} from './MessageList'


describe('MessageList', ()=>{
    it('render component', ()=> {
        render(<MessageList messages={[]}/>);
    });

    it("MessageList is empty", ()=>{
        render(<MessageList messages={[]}/>);
        expect(screen.queryAllByRole('li').length).toBe(0);
    });
    
});