import LocationMap from '../Location/Location';
import './Home.scss'

const Home = ({ restaurantData }) => {
    return (
        <div>
            {/* Ambiance */}
            <section className='ambiance'>
                <h2>Ambiance</h2>
                <p>{restaurantData.ambiance.description}</p>
            </section>
                
            {/* Location */}
            <section>
                <LocationMap
                    latitude={restaurantData.location.latitude}
                    longitude={restaurantData.location.longitude}
                    address={restaurantData.location.address}
                />
            </section>

            {/* Chef */}
            <section className='chef'>
                <div className='left'>

                    <img src={restaurantData.chef.photo} alt="chef" />
                </div>
                <div className='right'>

                    <h2>Chef</h2>
                    <h3>{restaurantData.chef.name}</h3>
                    <p>{restaurantData.chef.bio}</p>
                    <p>Signature Dish: {restaurantData.chef.signatureDish}</p>
                </div>
            </section>

            {/* Awards */}
            <section className='awards'>
                <h3>Awards</h3>
                <div className='timeline'>
                    {restaurantData.awards.map((award, index) => (
                        <div className='entry'>
                            <p className='body'>
                                <strong>{award.year}</strong> - {award.organization}: {award.award}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Sustainability */}
            <section className='sustainability'>
                <h2>Sustainability</h2>
                <ul className='cards'>
                    {restaurantData.sustainability.initiatives.map((initiative, index) => (
                        <div key={index} className='card'>
                            <h3>{initiative.name}</h3>
                            <p>
                                {initiative.description}
                            </p>
                        </div>
                    ))}
                </ul>
            </section>

            {/* Events */}
            <section className='events'>
                <h2>Events</h2>
                <div>
                    {restaurantData.events.upcoming_events.map((event, index) => (
                        <div key={index} className='event'>
                            <div className='title'>
                                <p>{event.name}</p>
                                <p>{event.date}</p>
                            </div>
                            <div className='description'>
                                {event.description}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;