import { render, screen, fireEvent} from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"



it("should render header componenet with a login button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>    
    );

    const loginbutton = screen.getByRole("button", {name:"Login"});

    //const loginbutton = screen.getByText("Login");

    //Assertion
    expect(loginbutton).toBeInTheDocument();
});
it("should render header componenet with a cart items 0 button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>    
    );

    //const cartitems = screen.getByRole("button", {name:"Login"});

    const cartitems = screen.getByText("Cart - 0 Items");

    //Assertion
    expect(cartitems).toBeInTheDocument();
});
it("should render header componenet with a cart button with regx", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>    
    );

    //const cartitems = screen.getByRole("button", {name:"Login"});

    const cartitems = screen.getByText(/Cart/);

    //Assertion
    expect(cartitems).toBeInTheDocument();
});
it("should change login button to logout on click", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>    
    );

    const loginbutton = screen.getByRole("button", {name:"Login"});

    //const cartitems = screen.getByText(/Cart/);
    fireEvent.click(loginbutton);

    const logoutbutton = screen.getByRole("button", {name:"Logout"})

    //Assertion
    expect(logoutbutton).toBeInTheDocument();
});
