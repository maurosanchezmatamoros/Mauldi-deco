import './NavBar.css'


const NavBar = () => {
    return(
        <nav className="NavBar__nav">
            <div className="NavBar__nav__div">
                <img src="./images/logoChico.jpg" alt="mauldi logo" className="NavBar__nav__div__img"/>
                <span className="NavBar__nav__div__span">Mauldi Deco</span>
            </div>
            <ul className="NavBar__nav__ul">
                <div className="NavBar__nav__ul__div"><li className="NavBar__nav__ul__div__li">Cocina</li></div>
                <div className="NavBar__nav__ul__div"><li className="NavBar__nav__ul__div__li">Deco</li></div>
                <div className="NavBar__nav__ul__div"><li className="NavBar__nav__ul__div__li">Textil</li></div>
                <div className="NavBar__nav__ul__div"><li className="NavBar__nav__ul__div__li">Baño</li></div>
                <div className="NavBar__nav__ul__div"><li className="NavBar__nav__ul__div__li">Naturaleza</li></div>
            </ul>
        </nav>
    )
}

export default NavBar