import React from "react";

class UserClass extends React.Component{


    constructor(props){

        super(props);

        this.state={

            userInfo : {
                login : "Dummy",
                location:"default",
            }
        };

       // console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount(){

        //console.log(this.props.name + "Child Component did Mount");
        // API Call

        const data = await fetch("https://api.github.com/users/satish112");
        const json = await data.json();
        
        this.setState(
            {
                userInfo:json,
            }
        )


        //console.log(json);
    }

    componentDidUpdate(){
        //console.log("componenet did updated");
    }

    componentWillUnmount(){
        //console.log("componenet will unmount");
    }

    render(){

        const {login, location, avatar_url} = this.state.userInfo;
        const {count} = this.state;

        //console.log(this.props.name + "Child Render");
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {login}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: satish.rella111@gmail.com</h4>
            </div>
        );
    }
}


export default UserClass;


/*

--------Mounting----------

- constructor is called (dummy)
- render (dummy)

<HTML Dummy>

- Componenet Did Mount
        <API Call>
        <this.setstate> ---> state variable is updated

-----Update------
- render (API data)
- <HTML(new data )
-  Componenent did update

*/