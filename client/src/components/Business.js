import React from 'react';
import '../index.css';

function Business(businessJSON) {
    const b = businessJSON.business;
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/business/${b.alias}`)
            .then((res) => res.json())
            .then((data) => setData(data.message))
            .catch(e => console.log(e));
    }, [b]);

    const handleSubmit = () => {
        setData(b.alias);
        console.log(data.alias);
    }

    if (b) {
        return (
            <>
                <div className='row'>
                    <div className='row col-6' >
                        <img className='photo' src={b.image_url} alt={b.name}></img>
                    </div>
                    <div className='col-6'>
                        <h1>{b.name}</h1>
                        <a href={'business/' + b.alias} onSubmit={handleSubmit}>More Info</a>
                    </div>
                </div>
            </>
        );
    } else {
        return (<p>no business found</p>)
    }
};

export default Business;