import './preview.css';

const Preview = ({image}) => {
    return(
        <div className="preview">
            <img src={image} alt="preview"/>
        </div>
    )
}

export default Preview;