import React from 'react';

export default function ComingSoon() {

    return(
        <div>
            <img 
            style={{marginTop: '30px'}}
            src={require(`../../assets/images/dark.webp`)} alt='logo' width='100%' className='logo'
            />
            <p></p>
            <h1 style={{color: 'black', textAlign: 'center', margin: '30px'}}>Website Coming Soon</h1>
            <h2 style={{color: 'black', margin: '10px', marginTop: '30px', textAlign: 'center'}}>Hours</h2>
            <p style={{color: 'black', margin: '10px', fontSize: '20px', textAlign: 'center'}}>Monday - Sunday: 9:30am - 6:30pm</p>
            <p style={{color: 'black', margin: '10px', fontSize: '20px', textAlign: 'center'}}>Sunday: 10:00am - 4:00pm</p>
            <div style={{position: 'absolute', bottom: '10px', width: '100vw'}}>
                <h2 style={{color: 'black', textAlign: 'center', margin: '30px'}}> Error 418:</h2>
                <h2 style={{color: 'black', textAlign: 'center', margin: '10px'}}> The page refuses to brew coffee because it is a teapot!</h2>
            </div>
        </div>
    )
}