import './preview.css';

const Preview = ({ defaultImage }) => {
    return(
        <div className="preview">
            <img src={ defaultImage } alt="preview"/>
        </div>
    )
}

export default Preview;