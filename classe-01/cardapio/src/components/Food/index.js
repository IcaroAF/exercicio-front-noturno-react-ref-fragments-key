import { useState, useRef, useEffect } from 'react';
import './style.css';

const initialFoods = [{
  name: "Moqueca",
  price: 73.25,
  amount: 0
},
{
  name: "Dobradinha",
  price: 25.00,
  amount: 0
},
{
  name: "Feijoada",
  price: 20.00,
  amount: 0
}];

function Food({sortFoodByAmount}){

  const [foods, setFoods] = useState(initialFoods);
  const[rankingFood, setRankingFood] = useState([]);
  const inputRef = useRef();

  useEffect(()=>{
    const localFood = [...foods];
    const ordered = localFood.sort(sortFoodByAmount);

    setRankingFood(ordered)
  }, [foods])
  

function handleAddAmount(value, foodName){
 const localFood = [...foods];
 const indexFood = localFood.findIndex(food=> food.name === foodName);

 const newFoodAmount =  Number(value);

 if(newFoodAmount>= 0){
   localFood[indexFood].amount = newFoodAmount;
 }

 console.log(localFood);
setFoods([...localFood]); 
}

  return(
    <ul>
      {rankingFood.map(food =>(
        <li key={food.name}>
          <p>{food.name}</p>
          <input ref={inputRef} type="number" min="0" onChange={(e)=>handleAddAmount(e.target.value, food.name)}></input>
          <div>
            <p>R${food.price} <span>X</span>  {food.amount} <span>=</span> R${food.amount * food.price} </p>
          </div>
          
        </li>
      ))}
    </ul>
  );
}

export default Food;