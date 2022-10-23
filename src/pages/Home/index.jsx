import HomeBanner from "../../components/HomeBanner"
import background_cover_home from "../../assets/background_cover_home.png"
import locations from "../../datas/logements.json"
import LocationCard from "../../components/LocationCard"
import { Link } from "react-router-dom"
const title = "Chez vous, partout et ailleurs"

function Home() {
    return (
        <div className="home">
            <div className="home__banner">
                <HomeBanner  image={background_cover_home} title={title} />
            </div>

            <section className="home__gallery">
                {locations.map((location) => {
                    return (
                        <article key={location.id}>
                            <Link to={`/locations/${location.id}`}>
                                <LocationCard image={location.cover} title={location.title} />
                            </Link>
                        </article>
                    );
                })}
            </section>
        </div>
    )
}

export default Home
