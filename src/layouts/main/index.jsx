import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function MainLayout() {
  return (
    <>
      <Outlet />
      <ToastContainer theme="dark" />
    </>
  );
}
