import './body.css';
import { useState } from 'react';
import Preview from '../preview/Preview';
import Form from '../form/Form';


const Body = () => {
    
    const [image ] = useState('/asset/img/R.png');

    return(
        <div className="mainBody">
            <Preview image={ image } />
            <Form />
        </div>
    )
}

export default Body;