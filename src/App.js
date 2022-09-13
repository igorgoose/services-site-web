import './styles/main.css'
import './App.css'
import React, {useState} from 'react';
import TopBar from "./components/ui/topbar/TopBar";
import InstagramLogin from "react-instagram-login/src";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <TopBar/>
            <div className="logoContainer"/>
            <InstagramLogin clientId={'773283673953518'}
                            onFailure={(response) => console.log(response)}
                            onSuccess={(response) => console.log(response)}/>
        </div>
    );
}

export default App;
