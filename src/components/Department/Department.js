import React, { useEffect, useState } from 'react';
import { brands, departmentSections } from './departments-list';
import './department.css'

function Department({ currentDepartment }) {

    let [translate, setTranslate] = useState()
    const onScroll = () => setTranslate(window.scrollY);
    //scroll event
    useEffect(() => {
        document.addEventListener('scroll', onScroll)
        //clean up onScroll event
        return () => {
            document.removeEventListener('scroll', onScroll);
        }
    }, [] );

//         -------->    style={{transform: `translateY(${window.scrollY * .5}px)`}} 

    //load in and assign departments to a variable

    
    const currentBrands = brands[currentDepartment];
    const currentSections = departmentSections.filter((section) => section.department === currentDepartment);

    return (
        <div className='departments-big-daddy-container'>
            <section className='departments-section'>
            {currentSections.map((section, i) => (
            <section key={i} className='d-s-c'>
                <div className='department-section-container'>
                <div className='department-img-container'>
                <img
                    className='category-img'
                    src={require(`../../assets/images/departments/${section.department}/${i}.webp`)}
                    alt={section.title}
                    height='80%'
                    
                />
                </div>
                    <div 
                        className='title-container'
                    >
                        <h2 className='flag'>{section.title}</h2>
                    </div>
                </div>
                    <p className='department-description'>{section.description}</p>
            </section>
            ))}
            </section>
            <section className='brands'>
                <div 
                className='brand-container s-screen' style={{transform: `translateY(${window.scrollY * -.23 + (currentSections.length * 80) + 290}px)`}}>
                {currentBrands.map((brand) => (
                    <img
                    src={require(`../../assets/images/brands/${brand}.webp`)}
                    width='51%'
                    loading='lazy'
                    alt={brand}
                    key={brand}
                    />
                ))}
                </div>

                {/* COMPUTER SCREEN */}
                <div 
                className='brand-container l-screen'>
                {currentBrands.map((brand) => (
                    <img
                    src={require(`../../assets/images/brands/${brand}.webp`)}
                    width='51%'
                    loading='lazy'
                    alt={brand}
                    key={brand}
                    />
                ))}
                </div>
            </section>
            
            
            
        </div>
    )
}

export default Department;