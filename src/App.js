import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars, faCircleHalfStroke, faX, faSun, faMoon, faAnglesUp } from "@fortawesome/free-solid-svg-icons";
// components
import ComingSoon from './components/ComingSoon/ComingSoon';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
//main
import Home from "./components/Home/Home";
import Department from "./components/Department/Department";
import Bee from "./components/Department/Bee/Bee";
import History from './components/History/History';
import News from './components/News/News';
//
import Footer from "./components/Footer/Footer";

library.add(fab, faBars, faX, faCircleHalfStroke, faSun, faMoon, faAnglesUp);

function App() {
  const [isNavOpen, setNavState] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [currentDepartment, setCurrentDepartment] = useState();
  const [isDepartmentsOpen, setDepartmentsState] = useState(false);
  
  function setCookie(cName, cData, exDays) {
    const d = new Date();
    d.setTime(d.getTime() + (exDays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cName + "=" + cData + ";" + expires + ";path=/";
  }
  function getCookie(cName) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cArray = decodedCookie.split(";");
    let cObject = {};

    cArray.forEach(element => {
      let key = element.split("=")[0];
      let value = element.split("=")[1];
      cObject[[key]] = value;
    });



    return cObject[cName]
  }

  if(!getCookie("theme")) {
    setCookie("theme", "light", 1);
  }
  const [theme, setTheme] = useState(getCookie("theme"));


  return (
    <div className="App">
      <a href='#top'>
      <FontAwesomeIcon icon="fa-angles-up" className = 'fa-angles-up' />
      </a>
      
      


      {currentDepartment === "Bees" && currentPage === "Departments" ? (
        <>
                <Bee
                //props
                setCurrentPage={setCurrentPage}
                setCurrentDepartment={setCurrentDepartment}
                ></Bee>
        
        </>

      ) : (
        <>
          <Nav
            //props
            isNavOpen={isNavOpen}
            setNavState={setNavState}
            setCurrentPage={setCurrentPage}
            setCurrentDepartment={setCurrentDepartment}
            isDepartmentsOpen={isDepartmentsOpen}
            setDepartmentsState={setDepartmentsState}
          ></Nav>
          <Header
            //props
            setNavState={setNavState}
            currentPage={currentPage}
            setCurrentDepartment={setCurrentDepartment}
            currentDepartment={currentDepartment}
            theme={theme}
            setTheme={setTheme}
            setCookie={setCookie}
            getCookie={getCookie}
            isDepartmentsOpen={isDepartmentsOpen}
            setDepartmentsState={setDepartmentsState}
            setCurrentPage={setCurrentPage}
          ></Header>
          <main>
            {
              {
                Home: (
                <Home
                setCurrentPage={setCurrentPage}
                setCurrentDepartment={setCurrentDepartment}
                ></Home>
                ),
                Departments: (
                  <Department
                    currentDepartment={currentDepartment}
                  ></Department>
                ),
                News: <News></News>,
                History: <History></History>,
                Contact: <div>
                  <h2 style={{width: '100%', textAlign: 'center', backgroundColor: 'yellow'}}>COMING SOON</h2>
                  <p style={{width: '100%', textAlign: 'center', fontSize: '20px', backgroundColor: 'yellow'}}>See bottom of page for contact</p>
                </div>,
              }[currentPage]
            }
          </main>
          <Footer
          theme={theme}
          setCurrentPage={setCurrentPage}
          ></Footer>
        </>
      )}
    </div>
  );
}

export default App;



  // "devDependencies": {

  //   "gh-pages": "^5.0.0"

  // }