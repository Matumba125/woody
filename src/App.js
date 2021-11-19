import './App.css';
import Preview from "./components/preview/Preview";
import Twitter from "./components/twitter/Twitter";

function App() {
    return (
        <div className={'appWrapper'}>
            <Preview/>
            <Twitter/>
        </div>
    );
}

export default App;
