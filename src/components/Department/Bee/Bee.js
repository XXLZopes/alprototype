import React, {useState} from 'react';
import honey from '../../../assets/images/bee/honey';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './bee.css';

import Footer from "../../Footer/Footer";

function Bee({setCurrentPage, setCurrentDepartment}) {
    const [isBeeNavOpen, setBeeNavState] = useState(false)
    return (

        <div className='bee-container'>
            <div 
            className={`${isBeeNavOpen ? 'bee-nav-open' : 'bee-nav-closed'} bee-header-container`}
            >
                <div className='honey-background'>

                    <ul>
                        <li onClick={()=>{setCurrentPage('Home')}}>Home</li>
                        <li onClick={()=>{
                            setCurrentPage('Departments');
                            setCurrentDepartment('Pets');
                        }}
                        
                        >Departments</li>
                        <li onClick={()=>{setCurrentPage('News')}}>News</li>
                        <li onClick={()=>{setCurrentPage('History')}}>History</li>
                        <li onClick={()=>{setCurrentPage('Contact')}}>Contact</li>
                    </ul>

                </div>
                <img className='honey' src={honey} width="100%"/>

                            <header className='bee-header'>
            <FontAwesomeIcon icon={`${isBeeNavOpen ? 'fa-x' : 'fa-bars'}`} className='bee-bars'
            onClick={()=>{setBeeNavState(!isBeeNavOpen)}}
            />
                <h2>Bee Keeping</h2>
            </header>
            </div>
            <section>
            {/* <h2>We</h2> */}
            <img 
            src={require(`../../../assets/images/bee/0.webp`)} alt='Everything you need for bees!'
            />
            {/* <h2>Have</h2> */}
            <img 
            src={require(`../../../assets/images/bee/1.webp`)} alt='Local honey'
            />
            {/* <h2>All</h2> */}
            <img 
            src={require(`../../../assets/images/bee/2.webp`)} alt='Built bee hive'
            />
            {/* <h2>The</h2> */}
            <img 
            src={require(`../../../assets/images/bee/3.webp`)} alt='Boxed bee hive ready for construction'
            />
            {/* <h2>Bee Stuff!!!</h2> */}
            </section>

            {/* <Footer
                theme={"dark"}
                setCurrentPage={setCurrentPage}
            ></Footer> */}

<footer>
            <section className='our-info-section our-info-bees'>
                {/* <img className='background-img' src={westernBackgroundImg} alt='western background' height={'fit-content'} width={'500px'}></img> */}
                <div className='our-info-div'>
                    <h1>Our History</h1>
                    <div className='line'></div>
                    <p>We are located in McKinleyville, CA inside the historic McKinleyville Store, which was built in 1897 and is a designated point of historical interest in Humboldt County.</p>
                    <a href='#l1'>
                    <h3
                    onClick={() => {
                        setCurrentPage('History')
                    }}
                    >Read More</h3>
                    </a>
                </div>
                <div className='our-info-div'>
                    <h1>Our Mission</h1>
                    <div className='line'></div>
                    <p>A & L Feed strives to provide superior product offerings and serve our customers with integrity and respect. We proudly feature Humboldt-made products and work diligently to stock our shelves with locally-sourced inventory. When you shop with us, your dollars remain right here at home.</p>
                    <a href='#l1'>
                    <h3
                    onClick={() => {
                        setCurrentPage('History')
                    }}
                    >Read More</h3>
                    </a>
                </div>
                <div className='our-info-div'>
                    <h1>Our Location</h1>
                    <div className='line'></div>
                    <p>A & L Feed is a family-owned feed and pet supply store that has been serving the Humboldt County region for over 47 years. You can trust us to be here to cover your needs. </p>
                    <a href='#l1'>
                    <h3
                    onClick={() => {
                        setCurrentPage('History')
                    }}
                    >Read More</h3>
                    </a>
 
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.563985362393!2d-124.10357758437327!3d40.94722217930706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54d15aeecaaa2e7d%3A0x6191b1c1437f8d83!2sA%20%26%20L%20Feed%20and%20Pet%20Supply!5e0!3m2!1sen!2sus!4v1656619847096!5m2!1sen!2sus" allowFullScreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <div className='footer-top footer-top-bees'>
                <p>Don't see what you're looking for? Call us and we will put in a special order for you.</p>
            </div>
            <section className='not-info-section footer-bee-info'>
                <div>
                    <h2>
                        Address
                    </h2>
                    <p>2308 Central Ave</p>
                    <p>McKinleyville, CA 95519</p>
                </div>
                <div>
                    <h2>
                        Hours Of Operations
                    </h2>
                    <p>Monday-Saturday 9:30 a.m. - 6:00 p.m.</p>
                    <p>Sunday: 10:00 a.m. - 4:00 p.m.</p>
                </div>
                <div>
                    <h2>
                        Contact
                    </h2>
                    <p>Phone: (707) 839-3265</p>
                    <p>Email: aandlfeed@gmail.com</p>
                </div>
                <div className='copyright'>
                    <p className='copyright-date inline'> Copyright © 2022 </p>
                    <p className='inline no-margin'> A&L Feed and Pet Supply</p>
                    <p className='no-margin'>Website By Aidan Meyer</p>
                </div>
            </section>
            <div className='footer-img footer-bee-img'>
                <img src={require(`../../../assets/images/s${"dark"}.webp`)} height='40px'/>
            </div>
            
        </footer>
        </div>

        
    )
}

export default Bee;