import { BrowserRouter, json } from "react-router-dom";
import ResturantMenu from "../ResturantMenu";
import { render, act, screen, fireEvent } from "@testing-library/react";
import MOCK_DATA_Dummy from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";
import Cart from "../Cart";



global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA_Dummy);
        }
    })
});

it("should Load Resturant Menu component", async ()=>{

    await act(async ()=> render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header/>
                <ResturantMenu />
                <Cart />
            </BrowserRouter>
        </Provider>
    ));

    const accordianheader = screen.getByText("Vegan Cheese Pizza (7)");

    fireEvent.click(accordianheader);

    const itemlist = screen.getAllByTestId("fooditems")

    expect(itemlist.length).toBe(7)
    expect(screen.getByText("Cart - 0 Items")).toBeInTheDocument();

    const addbtn = screen.getAllByRole("button", {name: "ADD +"})

    //console.log(addbtn.length);

    fireEvent.click(addbtn[0]);

    expect(screen.getByText("Cart - 1 Items")).toBeInTheDocument();

    fireEvent.click(addbtn[1]);

    expect(screen.getByText("Cart - 2 Items")).toBeInTheDocument();

    expect(screen.getAllByTestId("fooditems").length).toBe(9);

    const clearcartbtn = screen.getByRole("button", {name: "Clear Cart"});

    fireEvent.click(clearcartbtn);

    expect(screen.getAllByTestId("fooditems").length).toBe(7);

    expect(screen.getByText("Your Cart is Empty, Please add Items to the Cart")).toBeInTheDocument();

})