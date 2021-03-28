import React from "react";
import { Day } from "../date/day/Day";
import { Month } from "../date/month/Month";
import { Year } from "../date/year/Year";

interface Props {
  closeModal?: any;
  firstName: string;
  lastName: string;
  emailMobile: string;
  password: string;
  firstNameHandle?: any;
  lastNameHandle?: any;
  emailMobileHandle?: any;
  passwordHandle?: any;
  selectValue?: any;
  selectHandle?: any;
  monthValue?: any;
  monthHandle?: any;
  yearValue?: any;
  yearHandle?: any;
}

export const Signin: React.FC<Props> = ({
  closeModal,
  firstName,
  lastName,
  emailMobile,
  password,
  firstNameHandle,
  lastNameHandle,
  emailMobileHandle,
  passwordHandle,
  selectValue,
  selectHandle,
  monthValue,
  monthHandle,
  yearValue,
  yearHandle,
}) => {
  return (
    <>
      <div
        className="fixed w-full h-screen z-10 max-w-full"
        style={{
          backgroundColor: "hsla(0,0%,100%,.8)",
          top: "0",
          left: "0",
        }}
      >
        <div className="container">
          <div className="row items-center justify-center h-screen padding-default-0">
            <div
              className="z-40 bg-body max-w-full relative"
              style={{
                borderRadius: "6px",
                width: "432px",
                boxShadow:
                  "0 2px 4px rgba(0,0,0,.1), 0 8px 16px rgba(0,0,0,.1)",
              }}
            >
              <img
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
                alt="Close Icon"
                className="absolute"
                onClick={closeModal}
                style={{
                  top: "12px",
                  right: "10px",
                  width: "24px",
                  height: "24px",
                }}
              />
              <div style={{ padding: "16px" }}>
                <div
                  style={{
                    color: "#1c1e21",
                    fontSize: "32px",
                    lineHeight: "38px",
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </div>
                <div
                  style={{
                    color: "#606770",
                    fontSize: "15px",
                    fontWeight: "normal",
                    lineHeight: "24px",
                  }}
                >
                  It’s quick and easy.
                </div>
              </div>
              <div style={{ borderTop: "1px solid #dadde1", padding: "16px" }}>
                <div className="display:flex items-center max-w-full">
                  <input
                    type="text"
                    style={{
                      width: "190px",
                      padding: "9px",
                      outline: "none",
                      color: "#1c1e21",
                      fontSize: "15px",
                      backgroundColor: "#f5f6f7",
                      borderRadius: "5px",
                      border: "1px solid #ccd0d5",
                    }}
                    className="focus max-w-full"
                    placeholder="First name"
                    aria-label="First name"
                    value={firstName}
                    onChange={firstNameHandle}
                  />
                  <input
                    type="text"
                    style={{
                      width: "190px",
                      padding: "9px",
                      outline: "none",
                      color: "#1c1e21",
                      fontSize: "15px",
                      backgroundColor: "#f5f6f7",
                      borderRadius: "5px",
                      border: "1px solid #ccd0d5",
                    }}
                    className="focus ml-3 max-w-full"
                    placeholder="Last name"
                    aria-label="Last name"
                    value={lastName}
                    onChange={lastNameHandle}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="focus"
                    placeholder="Mobile number or email"
                    style={{
                      padding: "11px",
                      fontSize: "15px",
                      marginTop: "10px",
                      outline: "none",
                      maxWidth: "100%",
                      width: "392px",
                      lineHeight: "16px",
                      color: "#1c1e21",
                      border: "1px solid #ccd0d5",
                      backgroundColor: "#f5f6f7",
                      borderRadius: "5px",
                    }}
                    aria-label="Mobile Number or email"
                    value={emailMobile}
                    onChange={emailMobileHandle}
                  />
                  <input
                    type="password"
                    className="focus"
                    placeholder="New password"
                    style={{
                      padding: "11px",
                      fontSize: "15px",
                      marginTop: "10px",
                      outline: "none",
                      maxWidth: "100%",
                      width: "392px",
                      lineHeight: "16px",
                      color: "#1c1e21",
                      border: "1px solid #ccd0d5",
                      backgroundColor: "#f5f6f7",
                      borderRadius: "5px",
                    }}
                    aria-label="New password"
                    value={password}
                    onChange={passwordHandle}
                  />
                </div>
                <div
                  className="birthday-scss max-w-full"
                  style={{
                    fontWeight: "normal",
                    lineHeight: "20px",
                    color: "#606770",
                    fontSize: "13px",
                    marginTop: "12px",
                    marginLeft: "3px",
                  }}
                >
                  Date of birth
                  <br />
                  <Day selectValue={selectValue} handleSelect={selectHandle} />
                  <Month monthValue={monthValue} monthHandle={monthHandle} />
                  <Year yearValue={yearValue} yearHandle={yearHandle} />
                </div>
                <div style={{ marginTop: "10px", marginLeft: "3px" }}>
                  <div
                    style={{
                      color: "#606770",
                      fontSize: "13px",
                      fontWeight: "normal",
                      lineHeight: "20px",
                      marginTop: "2px",
                    }}
                  >
                    Gender
                  </div>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #ccd0d5",
                      fontWeight: "normal",
                      borderRadius: "4px",
                      padding: "8px 7px",
                      width: "auto",
                    }}
                  >
                    <label
                      style={{
                        fontSize: "15px",
                        padding: "0 28px 0 10px",
                        lineHeight: "36px",
                        color: "#1c1e21",
                      }}
                      htmlFor="female"
                    >
                      Female
                    </label>
                    <input
                      type="radio"
                      id="female"
                      name="sex"
                      aria-label="Female"
                    />
                  </span>

                  <span
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #ccd0d5",
                      fontWeight: "normal",
                      borderRadius: "4px",
                      padding: "8px 7px",
                      width: "auto",
                    }}
                    className="ml-3"
                  >
                    <label
                      style={{
                        fontSize: "15px",
                        padding: "0 28px 0 10px",
                        lineHeight: "36px",
                        color: "#1c1e21",
                      }}
                      htmlFor="male"
                    >
                      Male
                    </label>
                    <input
                      type="radio"
                      id="male"
                      name="sex"
                      aria-label="Male"
                      style={{ marginLeft: "30px" }}
                    />
                  </span>
                  <span
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid #ccd0d5",
                      fontWeight: "normal",
                      borderRadius: "4px",
                      padding: "8px 7px",
                      width: "auto",
                    }}
                    className="ml-3"
                  >
                    <label
                      style={{
                        fontSize: "15px",
                        padding: "0 28px 0 10px",
                        lineHeight: "36px",
                        color: "#1c1e21",
                      }}
                      htmlFor="custom"
                    >
                      Custom
                    </label>
                    <input
                      type="radio"
                      id="custom"
                      name="sex"
                      aria-label="Custom"
                    />
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      color: "#777",
                      fontSize: "11px",
                      margin: "1em 0.5em",
                      lineHeight: "normal",
                    }}
                  >
                    By clicking Sign Up, you agree to our{" "}
                    <a
                      className="linker"
                      href="https://www.facebook.com/legal/terms/update"
                      target="_blank"
                      rel="nofollow"
                    >
                      Terms
                    </a>
                    ,{" "}
                    <a
                      href="https://www.facebook.com/about/privacy/update"
                      className="linker"
                      target="_blank"
                      rel="nofollow"
                    >
                      Data Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.facebook.com/policies/cookies/"
                      className="linker"
                      target="_blank"
                      rel="nofollow"
                    >
                      Cookie Policy
                    </a>
                    . You may receive SMS notifications from us and can opt out
                    at any time.
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <button
                    type="button"
                    aria-label="Sign Up"
                    style={{
                      backgroundColor: "#00a400",
                      color: "rgb(255,255,255)",
                      fontWeight: "bolder",
                      height: "36px",
                      overflow: "hidden",
                      padding: "0 32px",
                      textShadow: "none",
                      boxShadow: "none",
                      minWidth: "194px",
                      fontSize: "19px",
                      marginTop: "10px",
                      cursor: "pointer",
                      marginBottom: "10px",
                      borderRadius: "6px",
                      border: "none",
                      outline: "none",
                    }}
                    className="_hover-scss"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};