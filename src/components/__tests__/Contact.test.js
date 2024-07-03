import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


//Grouping the Test-cases
describe("Contact us Page test case", ()=>{


    it("Should load contact-us component",()=>{

        render (<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    it("Should load button inside contact-us component",()=>{
    
        render (<Contact/>);
    
        const button = screen.getByText("Submit");
    
        //Assertion
        expect(button).toBeInTheDocument();
    });
    it("Should load input name inside contact-us component",()=>{
    
        render (<Contact/>);
    
        const inputName = screen.getByPlaceholderText("name");
    
        //Assertion
        expect(inputName).toBeInTheDocument();
    });
    it("Should load 2 input boxes inside contact-us component", ()=>{
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });

});

