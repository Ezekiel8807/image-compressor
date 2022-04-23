import './output.css'
import Button from "../button/Button";
import Preview from "../preview/Preview";
import { useState  } from "react";

const Output = () => {

    const [image ] = useState('/asset/img/R.png');

    return(
        <div className="output">
            <Preview image={ image }/>
            <Button value={"Download"}/>
        </div>
    )
}

export default Output;