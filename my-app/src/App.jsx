import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);

  const getItems = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=1`);
      setData(response.data.data);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    getItems();
  }, [])


  return (
    <div className="App">
      {data.map(item => {
        return (<p>{item.first_name + ' ' + item.last_name}</p>)
      })}
    </div>
  );
}

export default App;
