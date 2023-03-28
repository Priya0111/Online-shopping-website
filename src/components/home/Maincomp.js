import React, { useEffect } from 'react'
import Banner from './Banner'
import Newclothes from './Newclothes'
import Rentals from './Rentals'
import Slide from './Slide'
import Navbaar from './Navbaar'
import Newnav from './Newnav'
import "./home.css"
import { getProducts } from '../redux/actions/action'
import {useDispatch,useSelector} from "react-redux"
//import Cart from '../Cart/Cart'
//import Buynow from './Buynow'

const Maincomp = () => {

  const { products } = useSelector(state => state.getproductsdata);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

  return (
    
    <div className='home_section'>
      <div className=''>
        <Navbaar/>
      </div>
      <div className=''>
        <Newnav/>
      </div>
        <div className='banner_section'>
            <Banner/>
        
        <div className='new_clothes'>
            <Newclothes/>
        </div>
        {/*<div className=''>
          <Cart/>
        </div>
        <div className=''>
          <Buynow/>
        </div>
  */}
        <div className='rentals'><Rentals/></div>
        </div>
        <div className='slide_part'>
          <div className='left_slide'>
            <Slide title="Deal of the Day" />
          </div>
          <div className='right_slide'>
            <h4>Festival latest launches</h4>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg"/>
            <a href="#">See More</a>
          </div>
        </div>
        <Slide title="Today's Deal" />
        <Slide title="Winter collection" />
        <Slide title ="New Arrivals" />
        
    </div>
  )
}

export default Maincomp
