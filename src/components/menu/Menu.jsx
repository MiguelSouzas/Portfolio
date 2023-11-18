import Button from "../button/AppButton"
import "./style.css"

const Menu = () => {
    return (
        <>
        <div >
            <Button style="btn btn-header" label="Home"/>
            <Button style="btn btn-header" label="About me"/>
            <Button style="btn btn-header" label="Services"/>
            <Button style="btn btn-header" label="Skills"/>
            <Button style="btn btn-header" label="Portfolio"/>
            <Button style="btn btn-header" label="Contact"/>
        </div>
        </>
    )
}

export default Menu