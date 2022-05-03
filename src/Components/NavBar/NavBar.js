import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import CartContext from '../../Context/CartContext'
import { getDocs, collection, query, orderBy } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"


const NavBar = () => {

    const { cart } = useContext(CartContext)

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getDocs(query(collection(firestoreDb, 'categories'), orderBy("description", "asc")))
        .then(response => {
            const categories = response.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
            })
            setCategories(categories)
        })
    },[])

    return(
        <nav className="NavBar__nav">
            <Link className="NavBar__nav__logo-link" to="/" >
                <div className="NavBar__nav__logo">
                    <img src="../../images/logoChico.jpg" alt="mauldi logo" className="NavBar__nav__logo__img"/>
                    <span className="NavBar__nav__logo__span">Mauldi Deco</span>
                </div>
            </Link>
            <div className='NavBar__nav__cat'>
                {categories.map(cat =>
                    <NavLink key={cat.id} className={({isActive}) => isActive ? "NavBar__nav__cat__link-active" : "NavBar__nav__cat__link"} to={`/category/${cat.description}`} >
                        {cat.description}
                    </NavLink>)}
            </div>
            { cart.length === 0 ? <div></div> : <Link to="/cart" ><CartWidget /></Link> }
        </nav>
    )
}

export default NavBar