import './App.css';
import Card from './component/Card';

function App() {
  return (
   <>
    <h1 className='heading1 bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username='Hello' btnText='Click me!'/>
    <Card username='Kem chho?' btnText='Visit me!'/> 
   </>
  );
}

export default App;
