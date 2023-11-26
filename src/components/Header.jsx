import React from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { toggleShow } from "../utils/gptSlice";
import { SUPPORTED_lANGUAGES } from "../utils/constants";

import { changeLanguage } from "../utils/configSlice";
import GptSearch from "./GptSearch";
const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const userSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearchClick = () => {
    //Toggle gpt search
    dispatch(toggleShow());
  };
  const showGptSearch = useSelector((store) => store.gpt.show);
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div>
      {!user ? (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
          <img className="w-44" src={LOGO} alt="Logo" />
        </div>
      ) : (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
          <img className="w-44" src={LOGO} alt="Logo" />
          <div className="flex p-2">
            {showGptSearch && (
              <select
                className="p-2 m-2 bg-gray-600 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_lANGUAGES.map((lang) => {
                  return (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  );
                })}
              </select>
            )}
            <button
              className="py-2 px-4 m-2 mx-4 my-2 bg-purple-800 text-white rounded-xl"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
            <img className="w-12 h-12" src={USER_AVATAR} alt="usericon" />
            <button className="font-bold text-white" onClick={userSignout}>
              {"Sign Out"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
