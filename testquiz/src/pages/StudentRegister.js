import React from "react";
import "../quiz.css"


class StudentRegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      title: "",
      password: "",
      email: "",
      phone: "",

      formDisabled: false,
    };
  }
  handleFormSubmit(event) {
    const {phone,email,title, name, password } = this.state;
    event.preventDefault();
    
    this.setState({
      formDisabled: true,
    });

    if(name===""){
      alert("Name is Required")
    }else if(password===""){
      alert("password is Required")
    }else if(phone===""){
      alert("phone id Required")
    }else if(email===""){
      alert("email id Required")
    }else if(title===""){
      alert("email id Required")
    }else{
      localStorage.setItem("name",name)
      localStorage.setItem("title",title)
      localStorage.setItem("password",password)
      localStorage.setItem("phone",phone)
      localStorage.setItem("email",email)

    alert("Registration Successful!");
    window.location.href = "/Quiz"  
    }
  
  }
  
  render() {
    return (
      <div className="registerForm">
        <h2>Student RegisterForm </h2>
        <form className="yash"
          onSubmit={(event) => this.handleFormSubmit(event)}
          style={{
            padding: "40px",
            backgroundColor: "#eee",
          }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="your name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              title
            </label>
            <select 
            
            type="text"
            className="form-control"
            id="title"
            placeholder="your title"
            value={this.state.title}
            onChange={(e) => {
              this.setState({
                title: e.target.value,
              });
            }} 
            >
                <option>select gender</option>
                <option>Miss</option>
                <option>Mrs</option>
                <option>Mr</option>


            </select>
          </div>



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
            <label htmlFor="phone" className="form-label">
            phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="your phone"
              value={this.state.phone}
              onChange={(e) => {
                this.setState({
                    phone: e.target.value,
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



 export default StudentRegisterForm;
