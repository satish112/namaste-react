import Body from "../Body"
import "@testing-library/jest-dom"
import {render , act, screen, fireEvent} from "@testing-library/react"
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("should search res list for pizza text input", async ()=>{
    await act(async () => {render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>)
    });

    const cardsbeforesearch = screen.getAllByTestId("resCard");

    expect(cardsbeforesearch.length).toBe(20);

    const searchbutton = screen.getByRole("button", {name:"Search"});

    const searchinput = screen.getByTestId("searchInput");


    fireEvent.change(searchinput, { target : {value : "pizza"}});

    fireEvent.click(searchbutton);

    
    //screen load 2 res cards

    const cardsaftersearch = screen.getAllByTestId("resCard")
    expect(cardsaftersearch.length).toBe(6);



});
it("should filter top rated resturants ", async ()=>{
    await act(async () => {render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>)
    });

    const cardsbeforesearch = screen.getAllByTestId("resCard");

    expect(cardsbeforesearch.length).toBe(20);

    const topratedrest = screen.getByRole("button", {name: "Top Rated restaurants"});

    fireEvent.click(topratedrest);

    const cardsafterfilter = screen.getAllByTestId("resCard");

    expect(cardsafterfilter.length).toBe(10);
    
});