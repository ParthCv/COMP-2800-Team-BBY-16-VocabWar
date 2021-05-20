import React, { useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import ClearIcon from "@material-ui/icons/Clear";
import Switch from "@material-ui/core/Switch";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "./Settings.css";

export default function Settings({ setIsSettings, setValue, initial }) {
  const [isSound, setIsSound] = useState(true);
  const [isContact, setIsContact] = useState(false);
  const [isMain, setIsMain] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [description, setDescription] = useState("");

  const handleSound = (e) => {
    setIsSound((prevState) => !prevState);
  };

  const handleContact = () => {
    setIsContact(true);
  };

  const handleReport = (e) => {
    e.preventdefault();
  };

  return isMain ? (
    <div className='setngOverlay'>
      {isContact ? (
        <>
          <h1 className='setngH1'>
            <ChevronLeftIcon
              onClick={() => setIsContact(false)}
              style={{ fontSize: 35 }}
            />{" "}
            Contact Us
          </h1>
          <ClearIcon
            style={{
              color: "white",
              fontSize: 35,
              position: "absolute",
              right: 20,
              top: 25,
            }}
            onClick={() => {
              setValue(initial);
            }}
          />
          <div className='cntContent'>
            <p className='cntText'>
              For web product and general enquires, please email us at{" "}
              <a className='cntLink' href={`mailto: pchaturvedi@my.bcit.ca`}>
                parthcv0101@gmail.com
              </a>
            </p>
            <p className='cntText'>
              We will reach back to you as soon as possible
            </p>
          </div>
        </>
      ) : (
        <>
          <h1 className='setngH1'>
            <SettingsIcon style={{ fontSize: 35 }} /> Settings
          </h1>
          <ClearIcon
            style={{
              color: "white",
              fontSize: 35,
              position: "absolute",
              right: 20,
              top: 25,
            }}
            onClick={() => {
              setValue(initial);
            }}
          />
          <div className='setngContent'>
            <div className='setngSound'>
              <span style={{ marginRight: "55%" }}>Sound</span>
              <Switch
                checked={isSound}
                onChange={handleSound}
                color='primary'
                name='sound'
                style={{}}
              />
            </div>
            <button className='setngButton' onClick={() => setIsMain(false)}>
              Report an Error
            </button>
            <button className='setngButton' onClick={handleContact}>
              Contact Us
            </button>
          </div>
        </>
      )}
    </div>
  ) : (
    <>
      <div className='setngOverlay'>
        <h1 className='setngH1'>
          <ChevronLeftIcon
            onClick={() => setIsMain(true)}
            style={{ fontSize: 35 }}
          />{" "}
          Report Error
        </h1>
        <ClearIcon
          style={{
            color: "white",
            fontSize: 35,
            position: "absolute",
            right: 20,
            top: 25,
          }}
          onClick={() => {
            setValue(initial);
          }}
        />
        <form className='reprtForm' onSubmit={handleReport}>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='Title'
          />
          <br />
          <textarea
            id='description'
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Describe the error'
          ></textarea>
          <br />
          <button className='reprtBtn' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
