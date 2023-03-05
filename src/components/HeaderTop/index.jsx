import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiLogout } from "../../queries/AuthQuery";
import { logout } from "../../features/Auth/authSlice";
import { clearToken } from "../../features/Auth/tokenSlice";
import { clear } from "../../features/Import/importSlice";
import { useNavigate } from "react-router-dom";
function HeaderTop(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openUser, setOpenUser] = useState(false);

  const auth = useSelector((slice) => slice.auth).user;

  const handleLogout = async () => {
    const res = await fetchApiLogout();
    console.log(res);
    dispatch(logout());
    dispatch(clearToken());
    dispatch(clear());
    localStorage.removeItem("firstLogin");
    navigate("/");
  };

  return (
    <>
      {auth && (
        <div className="w-full flex justify-end items-center bg-slate-200 py-2">
          <div className="mx-10" onClick={() => setOpenUser(!openUser)}>
            <p>{auth.name}</p>
            <ul
              className={`flex-col items-center absolute ${
                openUser ? "flex" : "hidden"
              } animate-slideDown`}
            >
              <li>Profile</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderTop;
