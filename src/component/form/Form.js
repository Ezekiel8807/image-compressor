import './form.css';
import Button from '../button/Button'
import ImageInput from '../imgInput/ImageInput'

const Form = () => {
    return(
        <form className='img-form'>
            <ImageInput />
            <Button />
        </form>
    )
}

export default Form;