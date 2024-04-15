import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { publicRouter, privateRouter } from "./config/routes";
import {useCookies} from 'react-cookie';
function App() {
  const [cookies] = useCookies(['isBrowserClose','role']);
  const role = cookies.role;
  console.log(role);

  return (
    <>
      <Router>
        <Routes>
          {role || role != undefined ? (privateRouter.map((routers) => {
            return routers.map((route, index) => {
              return route.role == role.toLowerCase() ? (
                <Route path={route.path} element={route.element} key={index}>
                  {route.index ? <Route index element={route.index} /> : null}
                  {route.children
                    ? route.children.map(({ path, Component }, index) => {
                      console.log('succeeded')
                      return (
                        <Route
                          path={path}
                          element={<Component/> }
                          key={index}
                        />
                      );
                    })
                    : null}
                </Route>
              ) : null;
            });
          })) : (publicRouter.map((routers) => {
            return routers.map((route, index) => {
              return (
                <Route path={route.path} element={route.element} key={index}>
                  {route.index ? <Route index element={route.index} /> : null}
                  {route.children
                    ? route.children.map(({ path, Component }, index) => {
                      return (
                        <Route
                          path={path}
                          element={<Component />}
                          key={index}
                        />
                      );
                    })
                    : null}
                </Route>
              );
            });
          }))}
        </Routes>
      </Router>
      {/* <Loading /> */}
      <ToastContainer />
    </>
  );
}

export default App;
