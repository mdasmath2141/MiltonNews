import React,{useState} from 'react';
import Image from '../../Assets/milton.png';
import './Login.css';


const Login=(props)=> {
  const initialValues = { 
    firstName: "", 
    email: "", 
    password: "" ,
    dob:"",
    lastname:"",
    course:"",
    state:"",
    city:""
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    // setIsSubmit(true);
  };


  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
 


  return (
    <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
 
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4" >
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
            <img src={Image}
                alt='images'
                className="img-fluid"
                style={{borderTopLeftRadius: ".25rem" , 
                borderBottomLeftRadius: ".25rem",
                alignItems:"center",
                marginTop:"70px",
               
                height:"75%",
               
            }}/>
            </div>
           
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Registration form</h3>
               
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="firstName" className="form-control form-control-lg form" 
                      value={formValues.firstName}
                      name="firstName"
                      onChange={handleChange}/>
                      <label className="form-label" forhtml="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="lastName" className="form-control form-control-lg" 
                      value={formValues.lastname}
                      name="lastname"
                      onChange={handleChange}/>
                      <label className="form-label" forhtml="form3Example1n">Last name</label>
                    </div>
                </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="motherName" className="form-control form-control-lg" />
                      <label className="form-label" forhtml="form3Example1m1">Mother's name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="fatherName" className="form-control form-control-lg" />
                      <label className="form-label" forhtml="form3Example1n1">Father's name</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="address" className="form-control form-control-lg" />
                  <label className="form-label" forhtml="form3Example8">Address</label>
                </div>

                <div className="d-md-flex justify-content-start align-items-center mb-5 py-2">

                  <h6 className="mb-0 me-4">Gender: </h6>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label className="form-check-label" forhtml="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline mb-0 me-4">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label className="form-check-label" forhtml="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label className="form-check-label" forhtml="otherGender">Other</label>
                  </div>

                </div>

                <div className="row">
                    
                  <div className="col-md-6 mb-5">
                    <div className='col' style={{textSizeAdjust:"auto",textAlign:"left"}}>
                        State:
                    
                    <select className="select mx-3"
                    value={formValues.state}
                    name="state"
                    onChange={handleChange}>
                      <option value="1">State</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>
                    </div>

                  </div>
                  
                    <div className='col' style={{textSizeAdjust:"auto",textAlign:"center"}}>
                        City:
                    <select className="select mx-3"
                     value={formValues.city}
                     name="city"
                     onChange={handleChange}>
                      <option value="1">City</option>
                      <option value="2">Option 1</option>
                      <option value="3">Option 2</option>
                      <option value="4">Option 3</option>
                    </select>

                  </div>
                </div>

            
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="dateOfBirth" className="form-control form-control-lg" 
                      value={formValues.dob}
                      name="dob"
                      onChange={handleChange}/>
                      <label className="form-label" forhtml="form3Example1m">DOB</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="pinCode" className="form-control form-control-lg" />
                      <label className="form-label" forhtml="form3Example1n">PinCode</label>
                    </div>
                  </div>
                </div>

              
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="course" className="form-control form-control-lg" 
                      value={formValues.course}
                      name="course"
                      onChange={handleChange}/>
                      <label className="form-label" forhtml="form3Example1m">Course</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="password" id="password" className="form-control form-control-lg" 
                      name='password'
                      value={formValues.password}
                      onChange={handleChange}/>
                      <label className="form-label" forhtml="form3Example1n">Password</label>
                      <p>{formErrors.password}</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="email" className="form-control form-control-lg" 
                      name="email"
                      value={formValues.email}
                      
                      onChange={handleChange}/>
                      <label className="form-label" forhtml="form3Example1m">E-mail Id</label>
                      <p>{formErrors.userName}</p>
                      
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="phoneNumber" className="form-control form-control-lg" />
                      <label className="form-label" forhtml="form3Example1n">Phone Number</label>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg">Reset all</button>
                  
                 
                  
                  <button type="button" className="btn btn-warning btn-lg ms-2" onClick={handleSubmit}>Submit form</button>
                </div>

              </div>
            </div>
            
          </div>
          
        </div>
      </div>
      
    </div>
    
  </div>
</section>
  )
}



export default Login


