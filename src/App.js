import './App.css';
import { Subtitulo } from './components/Subtitulo';
import Titulo from './components/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormTarea } from './components/FormTarea';

function App() {
  return (
    <div className="App">
      <Titulo/>
      <Subtitulo comision="3A" empresa="Mr Robot"/>
      <FormTarea/>
    </div>
  );
}

export default App;
