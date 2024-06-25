import React, { useState } from "react";
import Model from "react-modal";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [toggle, setToggle] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setToggle(!toggle
    );
  }
  return (
    <>
      <nav className="navbar flex justify-around h-20 items-center">
        <div className="logo">
          <img
            src="https://dont-copy.netlify.app/assets/logo-S2lIhR8K.svg"
            alt="logo"
          />
        </div>
        <form>
          <div className="flex items-center bg-[#f2f2f2] h-10 rounded-full">
            <img
              className="px-4"
              src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-search-24px'%20clip-path='url(%23clip0_1_1172)'%3e%3cpath%20id='Vector'%20d='M14.2083%2012.8333H13.4842L13.2275%2012.5858C14.1258%2011.5408%2014.6667%2010.1842%2014.6667%208.70833C14.6667%205.4175%2011.9992%202.75%208.70833%202.75C5.4175%202.75%202.75%205.4175%202.75%208.70833C2.75%2011.9992%205.4175%2014.6667%208.70833%2014.6667C10.1842%2014.6667%2011.5408%2014.1258%2012.5858%2013.2275L12.8333%2013.4842V14.2083L17.4167%2018.7825L18.7825%2017.4167L14.2083%2012.8333ZM8.70833%2012.8333C6.42583%2012.8333%204.58333%2010.9908%204.58333%208.70833C4.58333%206.42583%206.42583%204.58333%208.70833%204.58333C10.9908%204.58333%2012.8333%206.42583%2012.8333%208.70833C12.8333%2010.9908%2010.9908%2012.8333%208.70833%2012.8333Z'%20fill='%237A7A7A'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1172'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
              alt="icon"
            />

            <input
              type="text"
              placeholder="Search your favorite groups in ATG"
              className="w-72 rounded-full border-none outline-none bg-[#f2f2f2] placeholder-black"
            />
          </div>
        </form>
        <div className="flex gap-1 font-semibold">
          <h1>Create account.</h1>
          <button
            className="text-[#0d6efd]"
            id="open-popup"
            onClick={() => setVisible(true)}
          >
            It's free!
          </button>
          <img src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" />
        </div>

        <Model
        closeTimeoutMS={2000}
          isOpen={visible}
          onRequestClose={() => setVisible(false)}
          style={{
            overlay: { backgroundColor: "rgba(0, 0, 0, 0.225)", transition : "all 0.5s" },
            content: {
              width: "fit-content",
              height: "fit-content",
              margin: "auto",
              padding: "0",
            },
          }}
        >
        <div className="w-full bg-[rgba(0,0,0,0.235)] px-3 py-3 text-right">
        <button onClick={() => setVisible(false)} className="">
          <img src="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-cancel-24px'%20clip-path='url(%23clip0_1_2255)'%3e%3cpath%20id='Vector'%20d='M14%202.33331C7.54838%202.33331%202.33337%207.54831%202.33337%2014C2.33337%2020.4516%207.54838%2025.6666%2014%2025.6666C20.4517%2025.6666%2025.6667%2020.4516%2025.6667%2014C25.6667%207.54831%2020.4517%202.33331%2014%202.33331ZM19.8334%2018.1883L18.1884%2019.8333L14%2015.645L9.81171%2019.8333L8.16671%2018.1883L12.355%2014L8.16671%209.81164L9.81171%208.16665L14%2012.355L18.1884%208.16665L19.8334%209.81164L15.645%2014L19.8334%2018.1883Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_2255'%3e%3crect%20width='28'%20height='28'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"/>
        </button>
        </div>
        <h4 className="text-[#3ba770] bg-[#effff4] py-3 px-10 font-semibold text-center">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </h4>
          <form>
           
            <div className="flex justify-between px-8 py-5 gap-5">
           
              <div>
              {toggle ? <h3 className="text-2xl font-semibold pb-7">Create Account</h3> : <h3 className="text-2xl font-semibold pb-7">Sign In</h3>}
               {toggle ? ( <div className="bg-[#f7f8fa] border-2 border-[#d9d9db] rounded-sm">
                <div className="input-field flex border-b-2 border-[#d9d9db]">
                  <input
                    type="text"
                    className="input bg-[#f7f8fa] border-r-2 border-[#d9d9db] px-4 py-2 outline-none"
                    name="fname"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    className="input bg-[#f7f8fa] px-4 py-2 outline-none"
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
                /><br />
                <input
                  type="password"
                  className="input bg-[#f7f8fa] border-b-2 border-[#d9d9db] w-full px-4 py-2 outline-none"
                  name="password"
                  placeholder="Password"
                  required
                /><br/>
                <input
                  type="password"
                  className="input bg-[#f7f8fa]  w-full px-4 py-2 outline-none"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                />
                </div>) : (<div className="bg-[#f7f8fa] border-2 border-[#d9d9db] rounded-sm">
                
     
                <input
                  type="email"
                  className="input bg-[#f7f8fa] border-b-2 border-[#d9d9db] w-full px-4 py-2 outline-none"
                  name="email"
                  placeholder="Email"
                  required
                /><br />
                <input
                  type="password"
                  className="input bg-[#f7f8fa] w-96 px-4 py-2 outline-none"
                  name="password"
                  placeholder="Password"
                  required
                /><br/>
                
                </div>)}
<br />
               {toggle?  <button className="bg-[#2f6ce5] text-white font-semibold w-full py-2 rounded-full text-lg">Create Account</button> : <button className="bg-[#2f6ce5] text-white font-semibold w-full py-2 rounded-full text-lg">Sign In</button>}<br/>
                <button className="flex items-center w-full justify-center border-2 border-[#d9d9db] py-1.5 mt-6 gap-2 text-lg rounded-sm">
                  <img src="	https://dont-copy.netlify.app/assets/facebook-ImnSLa_q.svg" />
                  {toggle ? <h5>Sign up with Facebook</h5> : <h5>Sign in with Facebook</h5>}
                </button><br />
                <button className="flex items-center w-full justify-center border-2 border-[#d9d9db] py-1.5 gap-2 text-lg rounded-sm">
                  <img src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_2217)'%3e%3cpath%20d='M3.54594%209.66905L2.989%2011.7482L0.953406%2011.7912C0.345063%2010.6629%200%209.37192%200%208.00005C0%206.67345%200.322625%205.42245%200.8945%204.32092H0.894938L2.70719%204.65317L3.50106%206.45455C3.33491%206.93895%203.24434%207.45895%203.24434%208.00005C3.24441%208.5873%203.35078%209.14995%203.54594%209.66905Z'%20fill='%23FBBB00'/%3e%3cpath%20d='M15.8602%206.50562C15.9521%206.98955%2016%207.48933%2016%208.00012C16%208.57287%2015.9398%209.13155%2015.8251%209.67046C15.4357%2011.5043%2014.4181%2013.1056%2013.0084%2014.2388L13.008%2014.2384L10.7253%2014.1219L10.4023%2012.1052C11.3377%2011.5566%2012.0687%2010.6981%2012.4537%209.67046H8.1759V6.50562H12.5161H15.8602Z'%20fill='%23518EF8'/%3e%3cpath%20d='M13.0081%2014.2382L13.0085%2014.2386C11.6375%2015.3406%209.89596%2015.9999%208.00015%2015.9999C4.95355%2015.9999%202.30477%2014.2971%200.953552%2011.7911L3.54608%209.66895C4.22168%2011.472%205.96102%2012.7555%208.00015%2012.7555C8.87662%2012.7555%209.69774%2012.5186%2010.4023%2012.105L13.0081%2014.2382Z'%20fill='%2328B446'/%3e%3cpath%20d='M13.1064%201.84175L10.5148%203.9635C9.78553%203.50769%208.92353%203.24438%208.00003%203.24438C5.91475%203.24438%204.14288%204.58678%203.50113%206.4545L0.894969%204.32088H0.894531C2.22597%201.75384%204.90816%200%208.00003%200C9.94112%200%2011.7209%200.691438%2013.1064%201.84175Z'%20fill='%23F14336'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_2217'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" />
                  {toggle ? <h5>Sign up with Google</h5> : <h5>Sign in with Google</h5>}
                </button>
                {toggle ? <h5 className="font-semibold text-center mt-5" >Forgot Password?</h5> : <h5></h5>}
              </div>
              <div>
              {toggle ? <div className="flex gap-1 items-center justify-end pr-2">
                <h5>Already have an account?</h5>
                <button className="text-[#2f6ce5]" onClick={handleClick}>Sign In</button>
              </div> : <div className="flex gap-1 items-center justify-end pr-2">
                <h5>Don't have an account yet?</h5>
                <button className="text-[#2f6ce5]" onClick={handleClick}>Create new for free!</button>
              </div>}
                <div className="flex justify-center my-6">
                <img src="https://dont-copy.netlify.app/assets/signup-OCG-APNN.svg"/>
                </div>
                {toggle ? <p className="text-gray-600">By signing up, you agree to our Terms & conditions, Privacy policy</p> :<p></p>}
              </div>
            </div>
          </form>
        </Model>
      </nav>
    </>
  );
};

export default Navbar;
