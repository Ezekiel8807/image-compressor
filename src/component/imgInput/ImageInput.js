import './imginput.css';

const ImageInput = ({ changeImge }) => {
    return(
        <div className='img-Input'>
            <label className='img-Input-btn' htmlFor='img'>Select Image</label>
            <input style={{display: "none"}} onChange={ changeImge } id='img' type='file' />
        </div>
    )
}

export default ImageInput;