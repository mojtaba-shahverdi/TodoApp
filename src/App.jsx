import './App.scss';
import {
  Footer,
  Header,
  TodoApp
} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoApp />
      <Footer />
    </div>
  );
}

export default App;
