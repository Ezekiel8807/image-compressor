import './button.css';

const Button = ({ value }) => {
    return(
        <div className='compress'>
            <input className='compress-btn' type='submit' value={ value } />
        </div>
        
    )
}

export default Button;