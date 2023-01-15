import React from "react";
import "../quiz.js"




class StudentLogin extends React.Component {
  constructor() {
    super();
    this.state = {  
      password: "",
      email: "",
      formDisabled: false,
    };
  }

  handleFormSubmit(event) {
    const {email, password } = this.state;
    event.preventDefault();
    this.setState({
        formDisabled: false,
      });
      if(email===""){
        alert("email is Required")
      }else if(password===""){
        alert("password is Required")}
      
     else if(email!==localStorage.getItem("email")){
          alert("email does not match")
      }else if(password!==localStorage.getItem("password")){
        alert("password does not match")
    }else{
     
        alert("login Successful!");
        window.location.href = "/Quiz"
    }

     
  }

  render() {
    return (
      <div className="registerForm-1">
        <h2>Student login from </h2>
        <form
          onSubmit={(event) => this.handleFormSubmit(event)}
          style={{
            padding: "40px",
            backgroundColor: "#eee",
          }}
        >
          
          


          <div className="mb-3">
            <label htmlFor="email" className="form-label">
            email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="your email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({
                    email: e.target.value,
                });
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="your password"
              value={this.state.password}
              onChange={(e) => {
                this.setState({
                  password: e.target.value,
                });
              }}
            />
          </div>

          <button
            disabled={this.state.formDisabled}
            type="submit"
            className="btn btn-primary mb-3"
          >
            Submit
          </button>

          {this.state.formDisabled && (
            <p> Form is being submitted please wait.</p>
          )}
        </form>
        <br />
        <br />
        
      </div>
    );
  }

}
export default StudentLogin;