import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { getCategories } from "../../asyncmock"
import { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then(categories => setCategories(categories))
    },[])

    return(
        <nav className="NavBar__nav">
            <Link className="NavBar__nav__logo-link" to="/" >
                <div className="NavBar__nav__logo">
                    <img src="./images/logoChico.jpg" alt="mauldi logo" className="NavBar__nav__logo__img"/>
                    <span className="NavBar__nav__logo__span">Mauldi Deco</span>
                </div>
            </Link>
            <div className='NavBar__nav__cat'>
                {categories.map(cat =>
                    <NavLink key={cat.id} className={({isActive}) => isActive ? "NavBar__nav__cat__link-active" : "NavBar__nav__cat__link"} to={`/category/${cat.description}`} >
                        {cat.description}
                    </NavLink>)}
            </div>
            <CartWidget cartImg="./images/cart.svg" itemsCart={0} />
        </nav>
    )
}

export default NavBar