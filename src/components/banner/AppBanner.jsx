import "./style.css"
import BannerLogo from "../banner-logo/banner-logo"
import Text from "../paragraph/Paragraph"


const Banner = () => {
    return (
        <>
        <div className="background-banner">
            <div>
                <Text style="p-one p-main" label="Hi It's me"/>
                <Text style="p-name" label="Miguel Souza"/>
            </div>
            <BannerLogo/>
        </div>
            
        </>
    )
}

export default Banner