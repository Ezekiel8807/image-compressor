import { useState } from 'react';
import './App.css'

function App() {
  
  const [compressed, setCompressed] = useState(false)
  const [img, setImg] = useState('asset/img/images.jpeg')

  const changeImg = ( e) => {
    const reader = new FileReader()
    reader.onload = () => {
      if(reader.readyState === 2 ){
        setImg(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  //function to compress image 
  const compressImg = (e) => {
    e.preventDefault()

    if( img === 'asset/img/images.jpeg'){
      let inputImage = document.getElementById('inputImage')
      inputImage.style.border = '1px solid red'

    }else{
      setCompressed(true)
    }
  }

  const cancel = () => {
    setCompressed(false)
  }

  return (
    <div className="App">

      <header>
          <p><a href='/'>Compressor</a></p>
      </header>
      { !compressed &&
        <div className='main-content'>
          <div className="compressor">
              <div className="compressor-img">
                  <img src={ img } alt="default-img"/>
              </div>

              <form onSubmit={ compressImg } method="post">
                  <label id='inputImage' className="newImage" htmlFor="image">Select image</label>
                  <input className='imginput' onChange={ changeImg } id="image" type="file" accept='image/*' alt="newImg" />
                  <input className="subImage" type="submit" value="Compress"/>
              </form>
          </div>
        </div>
      }

      { compressed &&
        <div className='main-content'>
            <div className="output-block">
              <div className="output-img">
                  <img src={ img } alt="default-img"/>
              </div>

              <a className="download" href='a.zip' download>Download</a>
              <input className="cancel" onClick={ cancel } type="submit" value="Cancel"/>
          </div>
        </div>
      }
      
      <footer>
          <p> &copy; copyright 2022. &lt;/&gt; with love by <a href="https://ezefizzy.netlify.app">Ezefizzy</a></p>
      </footer>
    </div>
  );
}

export default App;
