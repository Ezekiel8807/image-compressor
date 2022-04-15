import './imginput.css';

const ImageInput = () => {
    return(
        <div className='img-Input'>
            <label htmlFor='img'>Select Image</label>
            <input id='img' type='file' />
        </div>
    )
}

export default ImageInput;