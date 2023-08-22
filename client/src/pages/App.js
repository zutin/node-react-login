import '../App.css';
import {Login} from '../components/login'

function App() {
  return (
    <div className="flex min-h-screen">
      <div className="w-2/3">
        <div className="h-full overflow-hidden relative">
          <img src='https://cdn.pixabay.com/photo/2019/02/21/18/36/city-4011922_960_720.jpg' alt="login" className="w-full h-full object-cover"></img>
          <div className="absolute inset-0 -left-3/4 bg-gradient-to-l from-black via-transparent to-transparent"></div>
        </div>
      </div>
      <Login></Login>
    </div>
        
  );
}

export default App;
