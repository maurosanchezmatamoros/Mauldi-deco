import './NavBar.css'


const NavBar = () => {
    return(
        <nav className="NavBar__nav">
            <div className="NavBar__nav__div">
                <img src="./images/logoChico.jpg" alt="mauldi logo" className="NavBar__nav__div__img"/>
                <span className="NavBar__nav__div__span">Mauldi Deco</span>
            </div>
            <ul className="NavBar__nav__ul">
                <li className="NavBar__nav__ul__li">Cocina</li>
                <li className="NavBar__nav__ul__li">Deco</li>
                <li className="NavBar__nav__ul__li">Textil</li>
                <li className="NavBar__nav__ul__li">Baño</li>
                <li className="NavBar__nav__ul__li">Naturaleza</li>
            </ul>
        </nav>
    )
}

export default NavBar