import './App.css';
import Preview from "./components/preview/Preview";
import Twitter from "./components/twitter/Twitter";
import Services from "./components/services/Services";
import Team from "./components/team/Team";
import Contacts from "./components/contacts/Contacts";

function App() {
    return (
        <div className={'appWrapper'}>
            <Preview/>
            <Twitter/>
            <Services/>
            <Team/>
            {/*<Contacts/>*/}
        </div>
    );
}

export default App;
