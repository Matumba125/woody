import './App.css';
import Preview from "./components/preview/Preview";
import Twitter from "./components/twitter/Twitter";
import Services from "./components/services/Services";

function App() {
    return (
        <div className={'appWrapper'}>
            <Preview/>
            <Twitter/>
            <Services/>
        </div>
    );
}

export default App;
