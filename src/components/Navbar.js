import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { useCart } from '../hooks/cart';

const Navbar = () => {

    const { totalQuantItems } = useCart();

    return (

        <div className="container-fluid ">

            <nav className="navbar">

                <div className="navbar-brand">
                    <a className="logo-button" href="/">
                        PokemonStore
                    </a>
                </div>
            
                <div className="row">

                    <div className="col-3 col-sm-4">
                        <div className="navbar-cart">
                            
                            <a href="#my-cart">
                              
                                <FontAwesomeIcon icon={faCartPlus} />
                                <span className="badge badge-pill badge-success">
                                    {totalQuantItems}
                                </span>
                            </a>
                        </div>
                    </div>

                </div>
 
            </nav>
        </div>
    )
}

export default Navbar;