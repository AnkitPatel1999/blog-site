import React from "react";
import "./SignUp.css"
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email"),
  phone_number: yup.string().required("Phone Number is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters"),
  confirm_password: yup
    .string()
    .required("Confirm Password is required")
    .min(5, "Confirm Password must be at least 5 characters"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (e) => {
    console.log(e);
  };

  const signUpForm = () => {
    return (
      <>
        <div
          className="modal fade"
          id="signUp"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="signUpLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content modalWidth">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="form-control input-sm inputText"
                    type="text"
                    {...register("fullName")}
                    placeholder="Full Name"
                  />
                  <p className="text-warning">{errors.fullName?.message}</p>

                  <input
                    className="form-control input-sm inputText"
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                  />
                  <p className="text-warning">{errors.email?.message}</p>

                  <input
                    className="form-control input-sm inputText"
                    type="number"
                    {...register("phone_number")}
                    placeholder="Phone Number"
                  />
                  <p className="text-warning">{errors.phone_number?.message}</p>

                  <input
                    className="form-control input-sm inputText"
                    type="password"
                    {...register("password")}
                    placeholder="Password"
                  />
                  <p className="text-warning">{errors.password?.message}</p>

                  <input
                    className="form-control input-sm inputText"
                    type="password"
                    {...register("confirm_password")}
                    placeholder="Confirm Password"
                  />
                  <p className="text-warning">
                    {errors.confirm_password?.message}
                  </p>

                  <p className="tanddText">By registering, you agree to the</p>
                  <p><a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a></p>

                  <button type="submit" className="submitBtn">
                    Register as Candidate
                  </button>
                  <p className="already-acc">Already have an account? <a href="#">Login</a></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {signUpForm()}
      {/* <Header></Header> */}
    </>
  );
};

export default SignUp;
