import Banner from "../../components/Banner"
import background_cover_a_propos from "../../assets/background_cover_a_propos.png"
import datas from "../../datas/aboutData.json"
import Collapse from "../../components/Collapse";

function About(){    
    return (
        <div className="about">
            <Banner image={background_cover_a_propos}/>
            <div className="about__dropdowns">
                {datas.map((data) => {
                    return(                 
                        <Collapse key={data.title + data.index} title={data.title} description={data.description} />
                    )
                })}
            </div>
        </div>
    )
}

export default About