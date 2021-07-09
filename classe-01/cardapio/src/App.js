import './App.css';
import Food from './components/Food'

function App() {

  function sortFoodByAmount(a, b){
    return b.amount - a.amount;
  }
  return (
    <div className="App">
      <Food sortFoodByAmount={sortFoodByAmount}/>
    </div>
  );
}

export default App;

