import React from 'react';
import './footer.css'

function Footer({theme, setCurrentPage}) {

    return (
        <footer>
            <section className='our-info-section'>
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
            <div className='footer-top'>
                <p>Don't see what you're looking for? Call us and we will put in a special order for you.</p>
            </div>
            <section className='not-info-section'>
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
            <div className='footer-img'>
                <img src={require(`../../assets/images/s${theme}.webp`)} height='40px'/>
            </div>
            
        </footer>
    )
}

export default Footer;