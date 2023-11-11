import Button from "../button/AppButton"
import "./style.css"

const Menu = () => {
    return (
        <>
            <Button style="btn-header" label="Home"/>
            <Button style="btn-header" label="About me"/>
            <Button style="btn-header" label="Services"/>
            <Button style="btn-header" label="Skills"/>
            <Button style="btn-header" label="Portfolio"/>
            <Button style="btn-header" label="Contact"/>
        </>
    )
}

export default Menu