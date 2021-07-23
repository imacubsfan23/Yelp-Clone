import React from 'react';
import { useParams } from 'react-router-dom';

const BusinessLandingPage = () => {
    const [data, setData] = React.useState(null);
    const { alias } = useParams();

    React.useEffect(() => {
        fetch(`/api/business/${alias}`)
            .then((res) => res.json())
            .then((data) => setData(data.message))
            .catch(e => console.log(e));
    }, [alias]);

    if (data) {
        return (
            <>
                <div className='row'>
                    <h1>{data.name}</h1>
                    <div className='row col-6'>
                        <img className='photo' src={data.image_url} alt={data.name}></img>
                    </div>
                    <div className='col-6'>
                        <h2>Rating: {data.rating}</h2>
                        <h3>Address: {`${data.location.display_address}`}</h3>
                        <h4>Phone #: {data.display_phone}</h4>
                        <a href={data.url}>Visit Yelp Page</a>
                    </div>
                </div>
            </>
        );
    }
    return 'Loading...';
};

export default BusinessLandingPage;