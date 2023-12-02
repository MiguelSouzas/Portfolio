import "./style.css"
import BannerLogo from "../banner-logo/banner-logo"
import Text from "../paragraph/Paragraph"
import Title from "../title/Title"


const Banner = () => {
    return (
        <>
        <div className="background-banner">
        <div>
                <Title labelFirstWord="About" labelSecondWord="me" />
                <Text style="p-one p-main" label="Hi It's me" />
                <Text style="p-name" label="Miguel Souza" />
                <Text style="p-below1" label="And I'm a Frontend Developer"/>
                <Text style="p-disc" label="lorem wjvwnvwiovwnwbwiejcw"/>
            </div>
            <BannerLogo/>
        </div>
            
        </>
    )
}

export default Banner