`import React, {useState, useEffect} from 'react';`
import CarList from './CarList';
import User from './components/User';



interface Car {
  id: number;
  name: string;
  year: number;
}

const Dashboard: React.FC = () =>{
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    async function getCars(){
      try{
        const res = await fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars');
        if (res.ok) {
          const data: Car[] = await res.json();
          setCars(data);
        } else {
          console.error('Bad Request');
        }
      }catch (error){
        console.error('Error:', error);
      }
    }

    getCars();
   }, [setCars]);

    return (
      <div>
        <h2>Car Inventory</h2>
        <CarList cars = {cars} />
      </div>
    );
    };

  export default Dashboard;
