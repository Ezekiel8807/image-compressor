import './App.css'

function App() {


  return (
    <div className="App">

      <header>
          <p>Compressor</p>
      </header>


      <div className="compressor">
          <div className="compressor-img">
              <img src="asset/img/images.jpeg" alt="default-img"/>
          </div>

          <form action="" method="post">
              <label className="newImage" for="image">Select image</label>
              <input className='imginput' id="image" type="file" alt="newImg"/>
              <input className="subImage" type="submit" value="Compress"/>
          </form>
      </div>


      <footer>
          <p className="">&copy; copyright 2022. &lt;/&gt; with love by <a href="/ezefizzy">Ezefizzy</a></p>
      </footer>
    </div>
  );
}

export default App;
