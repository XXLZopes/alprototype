import React from 'react';
import './history.css'

export default function History() {

    return (
        <div>
            <section className='history-con'>
            <img 
            src={require(`../../assets/images/History/newspaper.webp`)} alt='newspaper article' width='100%' 
            />
            <p id='history-p1'>
            A & L Feed resides within Old McKinleyille Store building, which was built in 1897. 
            The building has been a witness to the entire history of McKinleyville. Over the building’s 
            extensive history it has served many purposes for the community including: a general store, 
            the community center, dance hall, restaurant, speakeasy, rooms for rent, as well as a second-hand 
            store. A&L Feed was established in January 1975 and has been proudly serving the community ever 
            since. 
            </p>

            <img 
            src={require(`../../assets/images/History/old.webp`)} alt='1977 owners Buschkamp family' width='100%' 
            />

            <p id='history-p2'>         
            As an inhabitant of one of Humboldt County's oldest structures, we strive to keep the 
            nostalgia present in our business dealings. While we carry corporate brands in our inventory, we 
            also carry a sizeable selection of hometown products, made by vendors right here in Humboldt County. 
            We believe that supporting local business is the most important aspect of building a strong, resilient  
            community, both economically and socially.
            </p>

            <img 
            src={require(`../../assets/images/History/newowner.webp`)}  alt='Current owners' width='100%'
            />
            </section>

        </div>
    )
}