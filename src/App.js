import { useState } from 'react';
import Header from './component/header/Header';
import Body from './component/body/Body'
import Footer from './component/footer/Footer';
//import Output from './component/output/Output';

function App() {

  const pf = "localhost:3000/"
  const defImg = '/asset/img/R.png';

  const [defaultImage, setDefaultimage] = useState(defImg);

  //handle change when image is selected
  const changeImge = (e) => {
    setDefaultimage(e.target.files[0]);
  }


  //hand3e sumbmit form action
  const handleSubmit = (e) => {
    e.preventDefault();

    if(defaultImage == defImg ){
      alert('select your image')
    }else{
      alert("submitted");
    }
  }

  //e.target.files[0]['name']

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Body defaultImage={ defaultImage } changeImge={ changeImge } handleSubmit={ handleSubmit }/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
