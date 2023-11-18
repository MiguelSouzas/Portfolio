import Logo from "../logo/Logo"
import Menu from "../menu/Menu"
import Hire from "../btn-hire-me/Hire"
import "./style.css"

const AppHeader = () => {
    return (
        <>
        <div className="background-main position">
            <Logo/>
            <Menu/>
            <Hire/>
        </div>    
        </>
    )
}

export default AppHeader