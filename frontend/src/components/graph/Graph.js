import React from 'react';
import { BarChart, Bar, Brush, XAxis, 
    YAxis, CartesianGrid} from 'recharts';
  
const App = () => {
  
// Sample data
const data = [
  {name:'Allemagne', x:0},
  {name:'Brésil', x:130},
  {name:'Colombie', x:180},
  {name:'Danmark', x:190},
  {name:'Equateur', x:140},
  {name:'France', x:260},
  {name:'Hongrie', x:270},
  {name:'Italie', x:380},
  {name:'J', x:390},
  {name:'K', x:300},
  {name:'Lituanie', x:310},
  {name:'Malte', x:220},
  {name:'Nouvelle-zélande', x:330},
  {name:'Ohio', x:140},
  {name:'Pékin', x:250},
  {name:'Q', x:160},
  {name:'Roumanie', x:170},
  {name:'Slovénie', x:180},
  
];
  
return (
  <BarChart width={500} height={700} data={data} >
      <CartesianGrid/>
      <XAxis dataKey="name" />
      <YAxis />
      <Brush dataKey="name" height={30} stroke="#8884d8" />
      <Bar dataKey="x" fill="grey" />
  </BarChart>
);
}
  
export default App;