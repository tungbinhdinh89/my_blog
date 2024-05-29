import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DashSidebar from "../componets/DashSidebar";
import DashProfile from "../componets/DashProfile";
import { useDispatch } from "react-redux";
import { signOutSuccess } from "../redux/user/userSlice";
import DashPosts from "../componets/DashPosts";
import DashUsers from "../componets/DashUsers";

export default function Dashboard() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/user/sign-out", {
        method: "POST",
      });

      const data = await res.json();
      if (!res.ok) return console.log(data.message);
      else dispatch(signOutSuccess(data));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar handleSignOut={handleSignOut} />
      </div>
      {/* Profile ... */}
      {tab === "profile" && <DashProfile handleSignOut={handleSignOut} />}
      {/* posts... */}
      {tab === "posts" && <DashPosts />}
      {/* users... */}
      {tab === "users" && <DashUsers />}
    </div>
  );
}
