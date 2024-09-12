import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <main className="dark:bg-gray-900 min-h-[calc(100vh-82px)]">
          <Outlet></Outlet>
      </main>
    </>
  );
};

export default Root;