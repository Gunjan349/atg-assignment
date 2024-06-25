import React, { useState } from "react";
import Model from "react-modal";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [toggle, setToggle] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  return (
    <div className="hidden-form hidden">
    <button className="p-4 rounded-full bg-red-500 fixed bottom-16 right-16" onClick={() => setVisible(true)}>
        <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/image/edit_24px'%3e%3cpath%20id='icon/image/edit_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.6588%203C17.4088%203%2017.1488%203.1%2016.9588%203.29L15.1288%205.12L18.8788%208.87L20.7088%207.04C21.0988%206.65%2021.0988%206.02%2020.7088%205.63L18.3688%203.29C18.1688%203.09%2017.9188%203%2017.6588%203ZM14.0588%209.02L14.9788%209.94L5.91878%2019H4.99878V18.08L14.0588%209.02ZM2.99878%2017.25L14.0588%206.19L17.8088%209.94L6.74878%2021H2.99878V17.25Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e"/>
    </button>
      <Model
        closeTimeoutMS={2000}
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.225)",
            transition: "all 0.5s",

          },
          content: {
            height: "fit-content",
            width: "80%",
            top: "60%",
            left: "60%",
            transform: "translate(-60%, -60%)",
            borderRadius : "1rem"
           
          },
        }}
      >
        
        <form>
          <div className=" p-2">
            <div>
              {toggle ? (
               <div className="flex items-start justify-between">
               <h3 className="text-2xl font-semibold pb-7">Create Account</h3>
               <button onClick={() => setVisible(false)}><img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_597)'%3e%3cpath%20d='M12%202C6.47%202%202%206.47%202%2012C2%2017.53%206.47%2022%2012%2022C17.53%2022%2022%2017.53%2022%2012C22%206.47%2017.53%202%2012%202ZM17%2015.59L15.59%2017L12%2013.41L8.41%2017L7%2015.59L10.59%2012L7%208.41L8.41%207L12%2010.59L15.59%207L17%208.41L13.41%2012L17%2015.59Z'%20fill='%23212529'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_597'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"/></button>
               </div>
              ) : (
                <h3 className="text-2xl font-semibold pb-7">Welcome back!</h3>
              )}
              {toggle ? (
                <div className="bg-[#f7f8fa] border-2 border-[#d9d9db] rounded-sm">
                  <div className="input-field flex border-b-2 border-[#d9d9db]">
                    <input
                      type="text"
                      className="input bg-[#f7f8fa] border-r-2 border-[#d9d9db] py-2 outline-none px-4 w-[50%]"
                      name="fname"
                      placeholder="First Name"
                      required
                    />
                    <input
                      type="text"
                      className="input bg-[#f7f8fa] py-2 outline-none px-4 w-[50%]"
                      name="lname"
                      placeholder="Last Name"
                      required
                    />
                  </div>

                  <input
                    type="email"
                    className="input bg-[#f7f8fa] border-b-2 border-[#d9d9db] w-full px-4 py-2 outline-none"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <br />
                  <input
                    type="password"
                    className="input bg-[#f7f8fa] border-b-2 border-[#d9d9db] w-full px-4 py-2 outline-none"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <br />
                  <input
                    type="password"
                    className="input bg-[#f7f8fa]  w-full px-4 py-2 outline-none"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              ) : (
                <div className="bg-[#f7f8fa] border-2 border-[#d9d9db] rounded-sm">
                  <input
                    type="email"
                    className="input bg-[#f7f8fa] border-b-2 border-[#d9d9db] w-full px-4 py-2 outline-none"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <br />
                  <input
                    type="password"
                    className="input bg-[#f7f8fa] w-96 px-4 py-2 outline-none"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <br />
                </div>
              )}
              <br />
              {toggle ? (
                <div className="buttons flex justify-between flex-wrap gap-y-5">
                <button className="bg-[#2f6ce5] text-white font-semibold py-1.5 px-8 rounded-full text-lg" >
                  Create Account
                </button>
                <button className="underline underline-offset-4 flex " onClick={handleClick}>or, Sign In</button>
                </div>
              ) : (
                <div className="flex justify-between">
                <button className="bg-[#2f6ce5] text-white font-semibold py-1.5 px-8 rounded-full text-lg" >
                  Sign In
                </button>
                <button className="underline underline-offset-4" onClick={handleClick}>or, Create Account</button>
                </div>
              )}
              <br />
              <button className="flex items-center w-full justify-center border-2 border-[#d9d9db] py-1.5 mt-2 gap-2 text-lg rounded-sm">
                <img src="	https://dont-copy.netlify.app/assets/facebook-ImnSLa_q.svg" />
                {toggle ? (
                  <h5>Sign up with Facebook</h5>
                ) : (
                  <h5>Sign in with Facebook</h5>
                )}
              </button>
              <br />
              <button className="flex items-center w-full justify-center border-2 border-[#d9d9db] py-1.5 gap-2 text-lg rounded-sm">
                <img src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_2217)'%3e%3cpath%20d='M3.54594%209.66905L2.989%2011.7482L0.953406%2011.7912C0.345063%2010.6629%200%209.37192%200%208.00005C0%206.67345%200.322625%205.42245%200.8945%204.32092H0.894938L2.70719%204.65317L3.50106%206.45455C3.33491%206.93895%203.24434%207.45895%203.24434%208.00005C3.24441%208.5873%203.35078%209.14995%203.54594%209.66905Z'%20fill='%23FBBB00'/%3e%3cpath%20d='M15.8602%206.50562C15.9521%206.98955%2016%207.48933%2016%208.00012C16%208.57287%2015.9398%209.13155%2015.8251%209.67046C15.4357%2011.5043%2014.4181%2013.1056%2013.0084%2014.2388L13.008%2014.2384L10.7253%2014.1219L10.4023%2012.1052C11.3377%2011.5566%2012.0687%2010.6981%2012.4537%209.67046H8.1759V6.50562H12.5161H15.8602Z'%20fill='%23518EF8'/%3e%3cpath%20d='M13.0081%2014.2382L13.0085%2014.2386C11.6375%2015.3406%209.89596%2015.9999%208.00015%2015.9999C4.95355%2015.9999%202.30477%2014.2971%200.953552%2011.7911L3.54608%209.66895C4.22168%2011.472%205.96102%2012.7555%208.00015%2012.7555C8.87662%2012.7555%209.69774%2012.5186%2010.4023%2012.105L13.0081%2014.2382Z'%20fill='%2328B446'/%3e%3cpath%20d='M13.1064%201.84175L10.5148%203.9635C9.78553%203.50769%208.92353%203.24438%208.00003%203.24438C5.91475%203.24438%204.14288%204.58678%203.50113%206.4545L0.894969%204.32088H0.894531C2.22597%201.75384%204.90816%200%208.00003%200C9.94112%200%2011.7209%200.691438%2013.1064%201.84175Z'%20fill='%23F14336'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_2217'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" />
                {toggle ? (
                  <h5>Sign up with Google</h5>
                ) : (
                  <h5>Sign in with Google</h5>
                )}
              </button>
              {toggle ? (
                <p className="mt-4 text-center">
                  By Signing up, you agree to our Terms & <br /> conditions, Privacy policy
                </p>
              ) : (
                <p className="mt-4 font-semibold text-center">
                  Forgot Password?
                </p>
              )}
            </div>
          </div>
        </form>
      </Model>
    </div>
  );
};

export default Navbar;
