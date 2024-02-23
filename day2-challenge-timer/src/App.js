import './App.css';
import AppHeader from './Components/Header'
import CountDownTimer from './Components/CountDownTimer'

function App() {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
    }}>
        <AppHeader></AppHeader>
        <CountDownTimer></CountDownTimer>
    </div>
  );
}

export default App;