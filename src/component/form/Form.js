import './form.css';
import Button from '../button/Button'
import ImageInput from '../imgInput/ImageInput'

const Form = ({ changeImge, handleSubmit }) => {
    return(
        <form onSubmit={ handleSubmit } className='img-form'>
            <ImageInput changeImge={ changeImge }/>
            <Button  value={'Compress'}/>
        </form>
    )
}

export default Form;