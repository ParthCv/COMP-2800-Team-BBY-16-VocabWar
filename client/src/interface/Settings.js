import React, { useState, useEffect } from "react";
import { useFirestore, useAuth, useFirestoreDocData } from "reactfire";
import SettingsIcon from "@material-ui/icons/Settings";
import ClearIcon from "@material-ui/icons/Clear";
import Switch from "@material-ui/core/Switch";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "./Settings.css";

export default function Settings({ setValue, initial }) {
  const auth = useAuth();
  const errorRef = useFirestore().collection("Report");  
  const [isSound, setIsSound] = useState(true);
  const [isContact, setIsContact] = useState(false);
  const [isMain, setIsMain] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (localStorage.getItem("sound") === "true") {
      setIsSound(true);
    } else {
      setIsSound(false);
    }
  }, []);

  const handleSound = (e) => {
    setIsSound((prevState) => {
      localStorage.setItem("sound", !prevState);
      return !prevState;
    });
  };

  const handleContact = () => {
    setIsContact(true);
  };

  const handleReport = (e) => {
    e.preventDefault();
    if (title && description) {
      try {        
        errorRef.doc().set({
          userID: auth.currentUser.uid,
          title: title,
          description: description
        });
        document.getElementsByClassName('reprtForm')[0].style.display = 'none';
        document.getElementsByClassName('submitMess')[0].style.display = 'inline';
      } catch (err) {
        console.log(err);
        document.getElementsByClassName('reprtForm')[0].style.display = 'none';
        document.getElementsByClassName('submitMess')[0].innerHTML = `
          <h1>Error!</h1>
          <p>Try again Later. Bye for now.</p>
        `;
        document.getElementsByClassName('submitMess')[0].style.display = 'inline';
      }
    }
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
              Report a Bug
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
          Report Bug
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
            id='title'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title'
          />
          <br />
          <textarea
            id='description'
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Describe the Bug'
          ></textarea>
          <br />
          <button className='reprtBtn' type='submit' onClick={handleReport}>
            Submit
          </button>
        </form>
        <div className='submitMess'>
          <h1>Thank You!</h1>
          <p>Your report has been submitted, we are sorry for the inconvenience.</p>
          <p>Have a nice day!</p>
        </div>
      </div>
    </>
  );
}
