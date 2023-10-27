import React, { useEffect, useState } from 'react';
import newArrivalImage from '../../assets/images/new-arrivals/banner.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css';
import DepartmentNav from '../Department/DepartmentNav'
import { departments } from '../Department/departments-list';
import { __esModule } from 'react-transition-group';

function Header({ setNavState, currentPage, currentDepartment, setCurrentDepartment, theme, setTheme, setCookie, getCookie, setDepartmentsState, isDepartmentsOpen, setCurrentPage }) {
  const root = document.querySelector(':root');

  const departmentsPageIntro = {
    LargeAnimal: `A & L Feed is pleased to offer a wide variety of products for large animals. 
    We offer the best quality grass hay and alfalfa in the region, coming from the Yreka valley. 
    Our conventional feed and grains come from Williams, California by Bar Ale. We carry organic 
    and non-GMO feed from Bar Ale and Modesto Milling, both California-local companies. Our vast 
    selection of horse tack includes crops, lunge lines, bits, hackamores, splints, bell boots, 
    and riding gear from premium Weaver Leather headstalls and breast collars, to endurance nylon 
    pieces. We also carry animal health products, such as wormers, hoof treatments, fly sprays, antibiotics, 
    electrolytes, and supplements. We pride ourselves on making the special order process easy. Should you 
    need an uncommon item, our staff will research, find hard-to-locate items, and get the products to you as 
    soon as possible. Stop by today, or call us to speak with one of our helpful staff members!`,

    Pets: `
    At A & L Feed we care about your animals and the food they eat. We carry a wide variety of premium pet foods. 
    Our selection ranges from Diamond Naturals, Chicken Soup, and Nutri Source, at a price and quality you can 
    feel good about, to top-tier entrees like Taste of the Wild, Solid Gold, Merrick, Pure Vita, and Blue Buffalo. 
    We also have a vast selection of health products from wormers, flea and tick preventatives like Advantage, 
    Seresto, Advantix, and Frontline, to whole-food supplements like Missing Link and Liquid Health. We specialize 
    in all-natural, biodegradable grooming products, and hand-made toys and treats from local vendors.`,

    Poultry: `We have everything you need to maintain your flock, from feed and bedding, to chick starter kits with 
    electrolytes and heat lamps. A&L Feed offers a large selection of poultry feeds from chicks to chickens, ducks, 
    turkeys, and geese. We also carry hen treats, supplements, and poultry supplies. We pride ourselves on having a 
    variety of rare, heritage breeds available both in the store and through special orders. Chick season runs from 
    February through August, and each week we have new varieties of chicks, turkeys, and ducklings! Stop by to see 
    what's hatching and pick up a schedule!`,

    Bees: `Mason Bees are amazing pollinators! A&L Feed Carries live Mason Bees! Not only that, A & L has all the bee 
    supplies you need for a healthy honey hive. Nearly all of our woodware is manufactured MannLake. If you are just 
    starting out, come pick up your hive bodies, frames, smokers, and bee suits. We also carry volatile oils, pollen 
    patties, swarm traps, and mite treatments. Stop in and speak with our knowledgeable beekeepers for tips on a healthy 
    hive and see what’s buzzin’!`,

    Humans: `Don’t forget to pick up something for yourself when you’re at A&L! We have a delicious selection of Taylor’s 
    Sausage that make a great snack. If you love A&L Feed as much as we do and we bet you will, we have an assortment of 
    apparel and swag for you to show off to your friends! And you shouldn’t miss our stock of gardening supplies to help 
    you plant the seeds for success.`,

    SmallAnimal: `
    We know that caring for your small animals is essential. That’s why we offer a full line of Oxbow and Kaytee foods, 
    for everything from rabbits, ferrets, chinchillas, guinea pigs, and koi fish. From exercise wheels to harnesses, 
    we have just about everything you will need for a healthy pet. We carry all the food and supplies for your furry, 
    feathered, and cold-blooded critters, including crickets, mealworms, heat bulbs, and mats. For feathered friends, we 
    have a full line of treats, toys, nest boxes, and Volkman, Purina, and Kaytee brand foods.`,

    Home: `A&L Feed is a family-owned business. Established in 1975 in McKinleyville, California we have served the Humboldt 
    community for over 47 years. We offer more than 20 brands of quality dog and cat food for people who want to feed their 
    animals the very best. However, our inventory is not limited to what you see in the store! Upon request, we can order you 
    anything we don’t have in stock and it will arrive promptly! A&L Feed carries a full line of Bar Ale and Modesto Milling 
    Organic Feed products. We also carry a complete line of supplies, toys, and remedies for your pets as well as veterinary 
    supplies.`,

    History: `We are located in McKinleyville, CA inside the historic McKinleyville Store, which was built in 1897 
    and is a designated point of historical interest in Humboldt County. A&L Feed is a family-owned business. Established in 
    1975 in McKinleyville, California we have served the Humboldt community for over 47 years. We offer more than 20 brands 
    of quality dog and cat food for people who want to feed their animals the very best.`,

    News: `A&L Feed is a family-owned business. Established in 1975 in McKinleyville, California we have served the 
    Humboldt community for over 47 years. We offer more than 20 brands of quality dog and cat food for people who want to 
    feed their animals the very best. A&L Feed carries a full line of Bar Ale and Modesto Milling Organic Feed products. 
    We also carry a complete line of supplies, toys, and remedies for your pets as well as veterinary supplies.`

  }

  function changePage(page, department) {
    setCurrentPage(page);
    setCurrentDepartment(department)
}

  function setCSSVariableValue(variableName, newValue) {
    root.style.setProperty(variableName, newValue);
  }
  const [logo, changeLogo] = useState(theme);
  function changeThemeVarsDark() {
    setCSSVariableValue("--transparentGreen", "rgba(0, 0, 0, 0.7)");
    setCSSVariableValue("--lightGreen", "#dda60a");
    setCSSVariableValue("--darkGreen", "#654a00");
    setCSSVariableValue("--flagText", "#dda60a");
    setCSSVariableValue("--footerImgBackground", "#000000");
    setCSSVariableValue("--headerBackgroundColor", "#000000");
    setCSSVariableValue("--flagDescriptionLarge", "#000000");
    setCSSVariableValue("--upArrowColor", "#dda60a");
    setCSSVariableValue("--highlightColor", "#ffdd80");
    
    changeLogo(theme);
  }
  function changeThemeVarsLight() {
    setCSSVariableValue("--transparentGreen", "rgba(73, 136, 99, 0.7)");
    setCSSVariableValue("--lightGreen", "#7ca390");
    setCSSVariableValue("--darkGreen", "#485f54");
    setCSSVariableValue("--flagText", "#000000");
    setCSSVariableValue("--footerImgBackground", "#ffffff");
    setCSSVariableValue("--headerBackgroundColor", "#ffffff");
    setCSSVariableValue("--flagDescriptionLarge", "rgba(73, 136, 99, 0.7)");
    setCSSVariableValue("--upArrowColor", "#000000");
    setCSSVariableValue("--highlightColor", "#aad2be");

    changeLogo(theme)
  }

  function changeTheme() {
    theme === "light" ? setCookie("theme", "dark", 365) : setCookie("theme", "light", 365);
    setTheme(getCookie("theme"));
  }

  function changePage(page, department) {
    setCurrentPage(page);
    setNavState(false);
    setCurrentDepartment(department)
}

  useEffect(() => {
    theme === "light" ? changeThemeVarsLight() : changeThemeVarsDark();
  })

    return (
      <div className="header-con" id='top'>
        <header>
          <div className='logo-con'>
            <img 
            src={require(`../../assets/images/${logo}.webp`)} alt='logo' width='100%' className='logo'
            onClick={()=> {changePage('Home')}}
            />
          </div>
        <div className='ls-nav-container'>
          <nav>
            <ul>
              <li
                onClick={()=> {
                changePage('Home');
                setDepartmentsState(false);
                }}
              >
                <a href='#slogan'> Home </a>
                
              </li>
              <li
              onClick={()=>{setDepartmentsState(!isDepartmentsOpen)}}
              >
                <a href='#department-nav' onClick={()=>{changePage('Departments', 'Pets')}} >Departments ▾</a>
              </li>
              <li
              onClick={()=> {
                changePage('News');
                setDepartmentsState(false);
              }}
              >
                <a href='#slogan'> News </a>
              </li>
              <li
                onClick={()=> {
                changePage('History');
                setDepartmentsState(false);
                }}    
              >
                <a href='#slogan'> History </a>
              </li>
              <li
                onClick={()=> {
                changePage('Contact');
                setDepartmentsState(false);
                }}
              >
                <a href='#slogan'> Contact </a>
              </li>
            </ul>
          </nav>
        </div>
          <div className='nav-strip'>
            <FontAwesomeIcon icon="fa-bars" className='bars'
            onClick={()=>{setNavState(true)}}
            />
            <h3>{currentPage}</h3>
            <FontAwesomeIcon 
            icon = {  `${theme === 'light' ? 'fa-sun' : 'fa-moon'}`}
            className = {  `${theme === 'light' ? 'fa-sun' : 'fa-moon'}`}
            onClick={()=>{
              changeTheme();
              console.log(theme);
              theme === "light" ? changeThemeVarsDark() : changeThemeVarsLight();
            }}
            />
          </div> 
          <div className='new-arrivals-container'>
            <img src={newArrivalImage} alt='Baby birds are here!'/>
            <div>
              <h2 className='flag'>New Arrivals</h2>
            </div>
          </div>
          { currentPage === 'Departments' &&
              <DepartmentNav
              currentDepartment={currentDepartment}
              setCurrentDepartment={setCurrentDepartment}
              ></DepartmentNav>
          }

          <div className='slogan-container' id='slogan'>
            <h3 id='l1'>When it comes to your livestock,</h3>
            <h3 id='l2'>pets, chicks, and bees we can</h3>
            <h3 id='l3'>accommodate all of your needs.</h3>
            <p className='departments-page-intro' id='intro'> {
              currentPage != 'Departments' ? 
              departmentsPageIntro[currentPage]
              :
              departmentsPageIntro[currentDepartment]
            } </p>
          </div>
        </header>
      </div>
    );
  }

export default Header;