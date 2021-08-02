import './App.css';
import image from './mylmage.png'
import './style.css';

function App() {
  return (
    <div>
      <div style={{border:'solid1pxblack',maxwidth:'100vw'}}>

<h1 className="title red">Your name here</h1>

<br ></br >

<img src={image} alt="mylmage" />
<br ></ br>

<img src="/jsx.jpeg" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" ></source>

</video>
    </div>
  );
}

export default App;
