import './body.css';
import Preview from '../preview/Preview';
import Form from '../form/Form';


const Body = ({ defaultImage, changeImge, handleSubmit }) => {

    return(
        <div className="mainBody">
            <Preview  defaultImage={ defaultImage } />
            <Form changeImge={ changeImge}  handleSubmit={ handleSubmit }/>
        </div>
    )
}

export default Body;