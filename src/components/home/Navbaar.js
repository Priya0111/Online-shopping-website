import React from 'react'
import "./navbaar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';

const Navbaar = () => {
    return (
        <header>
            <nav>
                <div className='left'>
                    <div className='name_icon'>
                        <NavLink to="/">Online Shopping</NavLink>
                        {/*<a href="">Online Shopping</a>*/}

                    </div>
                    <div className='nav_searchbaar'>
                        <input type="text" name="" id="" />
                        <div className='search_icon'>
                            <SearchIcon id="search" />
                        </div>
                    </div>

                </div>
                <div className='right'>
                    <div className='nav_btn'>
                        <NavLink to="/login">signin</NavLink>
                        {/*<a href="">signin</a>*/}
                    </div>
                    <div className='cart_btn'>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon id="icon" />
                            

                        </Badge>
                        <NavLink to='/cart'><p>Cart</p></NavLink>

                    </div>
                    <Avatar className='avtar' />


                </div>
            </nav>
        </header>
    )
}

export default Navbaar
