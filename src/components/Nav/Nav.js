import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './nav.css';
import { departments } from '../Department/departments-list';



function Nav({ isNavOpen, setNavState, setCurrentPage, setCurrentDepartment, isDepartmentsOpen, setDepartmentsState }) {
    function changePage(page, department) {
        setCurrentPage(page);
        setNavState(false);
        setCurrentDepartment(department)
    }
    return (
        <div className={`${isNavOpen ? 'active' : 'nav-closed'} nav-container`}>
            <div className={`${isNavOpen ? 'click-to-close darken-background' : 'nav-closed'}`} onClick={()=>{setNavState(false); setDepartmentsState(false)}}>
                <FontAwesomeIcon icon="fa-solid fa-x" className={`${isNavOpen ? 'fade-in' : 'fade-out'} faX`}/>
            </div>
            <nav>
                <div className='nav-header'>
                    <div>
                    <h1>A&L Feed</h1>
                    <h1>And Pet Supply</h1>
                    </div>
                </div>
                <a className='nav-a-small'
                onClick={()=>{
                    changePage('Home');
                    setDepartmentsState(false);
                    }} >Home</a>
                <div className='departments' onClick={()=>{setDepartmentsState(!isDepartmentsOpen)}}>
                    <h2>Departments ▾ </h2>
                    
                        <ul className={`${isDepartmentsOpen ? 'departments-open' : 'departments-closed'}`}>

                    {departments.map((department) => (
                        <li key={department.name} onClick={()=>{changePage('Departments', department.name)}}>
                            - {department.name}
                        </li>
                    ))}

                        </ul>
                       
                </div>
                <div className='nav-end-container nav-a-small' onClick={()=>{setDepartmentsState(false)}}>
                    <a onClick={()=>{changePage('News')}}>News</a>
                    <div className='line'></div>
                    <a onClick={()=>{changePage('History')}}>History</a>
                    <div className='line'></div>
                    <a onClick={()=>{changePage('Contact')}}>Contact</a>
                </div>
            </nav>
        </div>
    )
}

export default Nav;