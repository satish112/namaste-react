import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{

    constructor(props){
        super(props);


        //console.log("Parent Constuctor");
    }


    componentDidMount(){

        //console.log("parent component did mount");



    }

    render(){

        //console.log("Parent Render");

        return (

            <div>
            <h1>
                About Class Component
            </h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                    {({loggedInUser})=>(
                        <h1 className="font-bold text=xl">{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
            </div>
            <h2>
                This is NAmaste REacct web series
            </h2>
            <UserClass name = {"First(Class)"} location={"USA-Sunyvale(Class)"}/>
        </div>


        );
    }
}

export default About;


/*
- parent constructor
- parent render
    - first child construtcor
    - first child render

    - second child constructor
    - second child render 

    <DOM Updated - In Single BAtch>

    - First child componentdidmount
    - second child componenetdidmount 
- parent componentdidmount

*/