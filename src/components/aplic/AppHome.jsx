import "./style.css"
import BannerLogoHome from "../banner-logo/banner-logo-home"
import Text from "../paragraph/Paragraph"


const Banner = () => {
    return (
        <>
        <div className="background-banner-1">
            <div>
                
                <Text style="p-one p-main" label="Hi It's me" />
                <Text style="p-name" label="Miguel Souza" />
                <Text style="p-below1" label="And I'm a Frontend Developer"/>
                <Text style="p-disc" label="lorem wjvwnvwiovwnwbwiejcw"/>
            </div>
            <BannerLogoHome/>
        </div>
            
        </>
    )
}

export default Banner