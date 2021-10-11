import logo from './logo.svg';
import './App.css';
import Pofilcompoment from'./Profile/Pofilcompoment'
import Child from './Profile/Child'
import Img from './Profile/Img'

const handleAlert = () => {
  alert(`this is the User`)
  }
function App() {
  return (
    <div className="App">
    <Pofilcompoment title='ali sadraoui'
    Bio= 'I am full stack developer Stack Web developer active curious dynamic passionate about programming and web developùent  Im  motivated I always try to do my best and learn the engineering profession with a solid basis through several academic and professional projects'
    Profession = 'SERVICIMA Company management solution Design development and deployment of micro-services with NodeJS Front-end design and development using Angular'>
   
    <di>
    <img  src={img}  />  
    </di>
    </Pofilcompomenet>

   <Child handleAlert= {handleAlert} />
    </div>
  );
}

export default App;
