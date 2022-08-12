import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Content from './Components/Content/Content';

function App() {
  return (
    <div className='App'>
      <Header title={'Best React App Ever'}/>
      <div className='innerWrap'>
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default App;
