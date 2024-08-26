import React, { useState } from "react";

export const ExampleInputController = () => {
    const [ email, setEmail ] = useState('usertest@gmail.com');
    const [ password, setPassword ] = useState('1234');
    const handleEmail = (event) => {setEmail(event.target.value) }
    // or const handleEmail = event => setEmail(event.target.value)
    const handleSumbit = (event) => {
        //IMPORTANT! the first line has to be even.preventDeafult()
        event.preventDefault(); //para que no se rederize la pagina como hacen los formularios
        const dataToSend = {
            email: email,
            password: password,
        }
        // or const dataToSend = {email, password}
    }


    return (
        <div>
            <h1>
                example
            </h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={handleEmail}/>
                    <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={event => setPassword(event.target.value)}/>
                </div>

                {/*  <div className="mb-3 htmlForm-check">
    <input type="checkbox" className="htmlForm-check-input" id="exampleCheck1">
    <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )

}