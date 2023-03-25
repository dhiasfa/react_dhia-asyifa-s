import React from 'react'
import './style.css'
import { useForm } from "react-hook-form";
export const ContactUs = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        alert(`First Name: ${data.fName}\n Last Name: ${data.lName} \nEmail: ${data.email}\nMessage: ${data.description}`);
      };
  return (
    <>
     {/* contact */}
  <div className="contact">
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <h3>Contact Us</h3>
          <p className="mt-4">
            We are always here to help. Use the form on the side to contact our
            team and we will contact you as soon as possible.
          </p>
        </div>
        <div className="col-md-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="fName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fName"
                  {...register("fName", { required:"First name is required", maxLength:{value:15, message:"the maximum character is 15"} })}
                  style={{ border: errors.fname && "1px solid red" }}
                />
                 <div id="name-help" className="form-text text-danger">
                  {errors?.fName?.message}
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lName"
                  {...register("lName", { required:"Last name is required", maxLength:{value:15, message:"the maximum character is 15"} })}
                  style={{ border: errors.lName && "1px solid red" }}
                />
              <div id="name-help" className="form-text text-danger">
                  {errors?.lName?.message}
                </div>
              </div>
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                  {...register("email", { required:"Email is required",pattern:{value: /^\S+@\S+$/i,  message: 'Email tidak valid' }})}
                  style={{ border: errors.email && "1px solid red" }}
              />
              <div id="email-help" className="form-text text-danger">
                  {errors?.email?.message}
                </div>
            </div>
            <div className="mb-3">
              <label htmlFor="textarea" className="form-label">
                What can we help you with?
              </label>
              <textarea
                className="form-control"
                id="textarea"
                rows={3}
                {...register("description", { required:"Message is required"})}
                style={{ border: errors.description && "1px solid red" }}
              />
              <div id="description-help" className="form-text text-danger">
                  {errors?.description?.message}
                </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3 mt-3">
                <div className="btn-send">
                  <button id="btn-send" type='submit' >
                    {/* <a href="">SEND</a> */}
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
