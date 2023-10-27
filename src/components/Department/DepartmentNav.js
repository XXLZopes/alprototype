import React from 'react';
import './departmentNav.css'
import { departments } from './departments-list'

function DepartmentNav({ currentDepartment, setCurrentDepartment }) {
    

    return(
        <div className='department-nav' id='department-nav'>
            <ul>
                <li 
                    className='department-selected'
                    key='selected' 
                >
                    {currentDepartment}
                </li>
            {departments.map((department) => (
                    currentDepartment != department.name && 
                    <li 
                    key={department.name} 
                    onClick={()=>{setCurrentDepartment(department.name)}}
                    >
                        {department.name}
                    </li>  
                    ))}
            </ul>
          </div>
    )
}

export default DepartmentNav;