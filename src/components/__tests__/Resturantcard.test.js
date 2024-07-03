import Resturantcard from "../Resturantcard"
import {render, screen} from "@testing-library/react"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"



it("should render the Resturantcard Component with props data",()=>{

    render(<Resturantcard resData={MOCK_DATA}/>);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();


});
