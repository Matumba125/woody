import './App.css';
import Preview from "./components/preview/Preview";
import Twitter from "./components/twitter/Twitter";
import Services from "./components/services/Services";
import Team from "./components/team/Team";
import Contacts from "./components/contacts/Contacts";
import Subscribe from "./components/subscribe/Subscribe";

function App() {
    return (
        <div className={'appWrapper'}>
            <Preview/>
            <Twitter/>
            <Services/>
            <Team/>
            <Contacts/>
            <Subscribe/>
            <footer className={'footer'}>Copyright © 2021 by Matumba125. All rights reserved.</footer>
        </div>
    );
}

export default App;
