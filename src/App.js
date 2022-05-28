import './App.css';
import {useEffect , useState} from 'react';
import Axios from 'axios';
import Coin from './Coinler/coin';
import Basket from './component/basket';

function App() {
  const[listOfCoins, setListOfCoins]=useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(()=>{
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR").then( 
    (response)=>{

      setListOfCoins(response.data.coins);
      
    }

  );

  }, []); 


  const onClick = (id) => {
    const coin = listOfCoins.find(coin => coin.id === id)
    
    setBasket(prevState => ([...prevState, coin]))
  }


  return (

    
    <div className="App">
      
     
    <div className='title'><h1>TÜRKİYE'DE FİNANSIN ADRESİ</h1></div>
    <div >
    <a href="https://uzmanpara.milliyet.com.tr/canli-borsa/"><img className='buttonimg' src={"./canli-borsa-button.jpg"} /></a>
    </div>
    
   

    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
            <h3 class="animate-charcter"> CRYTR</h3>
        </div>
      </div>
    </div>
    
      <div>{listOfCoins.map((coin)=>{
        return (
          
        <Coin 
        id={coin.id}
        name={coin.name} 
        icon={coin.icon} 
        price={coin.price} 
        symbol={coin.symbol}
        onClick={onClick}
       
        />
        
        );
       
        })}
        
      </div>

      <>
       <Basket basket={basket}/>
      </> 

    </div>
    
  );
  

} 
export default App;
