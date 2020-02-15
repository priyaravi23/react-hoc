import React from 'react';
import Username from './components/uppercase/username';
import hoc from "./components/uppercase/hoc-uppercase";
import withStorage from "./components/local-storage/hoc-local-storage";
import localStorage from './components/local-storage/local-storage';

const UpperCaseUsername = hoc(Username);
const LocalStorageComponent = withStorage(localStorage);


const App = () => (
    <div>
        {/*<UpperCaseUsername>Priya Ravi</UpperCaseUsername>*/}
        <LocalStorageComponent></LocalStorageComponent>
    </div>
);


export default App;
