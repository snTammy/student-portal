import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

 const SignUp = () => {
 const history = useHistory();
 const[student, setStudent] = useState(
     {
         firstName:'',
         lastName:'',
         age:'',
         telephone:'',
         email:'',
         password:'',
         address:{
             street:'',
             city:'',
             state:'',
             zip:''
         }
     }
 )
 const signUpSubmitHandler = () => {
  axios.post('http://localhost:8080/save',student)
  .then(response => {
      history.push('/thank-you');
  }).catch(error => {
      console.log("in the future add logic to navigate to an error page")
  });
}
 const studentChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    const tempStudent = {...student};
    tempStudent[name] = value;
    setStudent(tempStudent);
    
 }

 const addressChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    const tempStudent = {...student};
    tempStudent.address[name ] = value;
    setStudent(tempStudent);
    
}
  return (
  <div className="sign-up-container container">
      <form className="row g-3">
  <h2> Sign up below!!!</h2>
<div className="col-md-6">
    <label for="inputFirstName" className="form-label">First Name</label>
    <input type="text" onChange={studentChangeHandler} name="firstName" value={student.firstName} className="form-control" id="inputFirstName" />
  </div>
  <div className="col-md-6">
    <label for="inputLastName" className="form-label">LastName</label>
    <input type="text" onChange={studentChangeHandler} name="lastName" value={student.lastName}  className="form-control" id="inputLastName" />
  </div>

  <div className="col-md-6">
    <label for="inputTelephone" className="form-label">Telephone</label>
    <input type="text" onChange={studentChangeHandler} name="telephone" value={student.telephone} className="form-control" id="inputTelephone" />
  </div>
  <div className="col-md-6">
    <label for="inputAge" className="form-label">Age</label>
    <input type="text" onChange={studentChangeHandler} name="age" value={student.age}  className="form-control" id="inputAge" />
  </div> 
  <div className="col-md-6">
    <label for="inputEmail" className="form-label">Email</label>
    <input type="email" onChange={studentChangeHandler} name="email" value={student.email}  className="form-control" id="inputEmail" />
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" onChange={studentChangeHandler} name="password" value={student.password} className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12">
    <label for="inputStreet" className="form-label">Street</label>
    <input type="text" onChange={addressChangeHandler} name="street" value={student.address.street} className="form-control" id="inputStreet" placeholder="1234 Main St" />
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" onChange={addressChangeHandler} name="city" value={student.address.city} className="form-control" id="inputCity" />
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" onChange={addressChangeHandler} name="state" value={student.address.state} className="form-select">
      <option selected>Choose...</option>
      <option value="MO">MO</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" onChange={addressChangeHandler} name="zip" value={student.address.zip} className="form-control" id="inputZip" />
  </div>
    <div className="d-grid gap-2 ">
      <button className="bg-dark btn btn-outline-success" onClick={signUpSubmitHandler} type="button">Sign up</button>
</div>
</form>

  </div>
  );
}
export default SignUp;
