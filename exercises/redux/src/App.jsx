// @ts-nocheck
// import { Parentcomponent} from './hooks'
import { ComponentBasic } from './proptypes/ComponentBasic'
import './App.css';

const App = () => {
    return(
        <div className="app-container">
            <h1>PropoTypes</h1>
            <br/>
            <br/>
            <ComponentBasic texto={"Hola"}/>
        </div>
    )
};

export default App;