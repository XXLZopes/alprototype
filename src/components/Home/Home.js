import React from 'react';
import storeImg from '../../assets/images/home/store.webp';
import llamaImg from '../../assets/images/home/llama.webp';
// import westernBackgroundImg from '../../assets/images/home/westernBackground.webp';
import poultryScheduleP1 from '../../assets/images/poultry_season_pdfs/poultry_header.webp';
import poultrySchedule0 from '../../assets/images/poultry_season_pdfs/PoultryOrder_2023/0.webp';
import poultrySchedule1 from '../../assets/images/poultry_season_pdfs/PoultryOrder_2023/1.webp';
import poultrySchedule2 from '../../assets/images/poultry_season_pdfs/PoultryOrder_2023/2.webp';
import poultrySchedule3 from '../../assets/images/poultry_season_pdfs/PoultryOrder_2023/3.webp';
import poultrySchedule4 from '../../assets/images/poultry_season_pdfs/PoultryOrder_2023/4.webp';
import poultrySchedule5 from '../../assets/images/poultry_season_pdfs/PoultryOrder_2023/5.webp';

import duckSchedule0 from '../../assets/images/poultry_season_pdfs/ducks_2023/0.webp';
import duckSchedule1 from '../../assets/images/poultry_season_pdfs/ducks_2023/1.webp';
import duckSchedule2 from '../../assets/images/poultry_season_pdfs/ducks_2023/2.webp';





import './home.css'

function Home({ setCurrentDepartment, setCurrentPage }) {

    return (
        <div className='home'>
            
            {/* <div className='poultry-con'>
            <img src={poultryScheduleP1} alt='poultry schedule please call store for more info at (707) 839-3265'/>
            <img src={poultrySchedule0} alt='poultry schedule please call store for more info at (707) 839-3265'/>
            <img src={poultrySchedule1} alt='poultry schedule please call store for more info at (707) 839-3265'/>
            <img src={poultrySchedule2} alt='poultry schedule please call store for more info at (707) 839-3265'/>
            <img src={poultrySchedule3} alt='poultry schedule please call store for more info at (707) 839-3265'/>
            <img src={poultrySchedule4} alt='poultry schedule please call store for more info at (707) 839-3265'/>
            <img src={poultrySchedule5} alt='poultry schedule please call store for more info at (707) 839-3265'/>
            <img src={duckSchedule0} alt='poultry schedule please call store for more info at (707) 839-3265'/>
            <img src={duckSchedule1} alt='poultry schedule please call store for more info at (707) 839-3265'/>
            <img src={duckSchedule2} alt='poultry schedule please call store for more info at (707) 839-3265'/>
            </div> */}
            
            <div className='whats-in-store-container' 
                            onClick={() => {
                                setCurrentDepartment('Pets')
                                setCurrentPage('Departments')
                            }}>
                <div className='store-img-container'>
                    <img src={storeImg} alt='store front'/>
                </div>
                <div className='store-text-container'>
                <div 
                className='description-container'
                >
                    <h2 
                    className='flag'
                    >
                        Click to see what's in store
                    </h2>
                </div>
                <p className='store-p'>A & L Feed has supplied Humboldt with premium quality products at great prices since 1975. We provide a family feed store experience with knowledgeable staff to supply all of your animal care needs and more.  </p>
            </div>
            </div>
            <img src={llamaImg} alt='llama' className='llama-img'></img>

        </div>
    )
}

export default Home;