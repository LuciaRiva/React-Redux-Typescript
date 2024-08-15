// @ts-nocheck
// import { Parentcomponent} from './hooks'
// import { ComponentBasic } from './proptypes/ComponentBasic'
import { ComponentMaster } from './proptypes/ComponentMaster';
import './App.css';


const list= [
{id:1, name:'React'},
{id:2, name:'Vue'},
{id:3, name: 'Angular'}
]

const App = () => {
    return(
        <div>
            <h1>PropoTypes</h1>
            <br/>
            <br/>
            {/* <ComponentBasic array={[1,2,3]}/> */}
            <ComponentMaster list={list} title={'Tecnologias'}/>
        </div>
    )
};

export default App;