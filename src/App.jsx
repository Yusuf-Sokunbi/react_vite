import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import { Header } from './component/Header/Header.jsx';
import { CoreConcept } from './component/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.jsx';
import TabButton from './component/TabButton.jsx';
const yusuf = "My name is Yusuf Oladipupo  Sokunbi"
function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');
   let tabContent = "Please click a Button";
  function HandleSelect(SelectedButton){
      setSelectedTopic(SelectedButton);
    console.log(selectedTopic);
}
// console.log('YGFDHJJKHKGHMDFDFHHB UYIO65')
  return (
    <div>
      <Header />
    <main>
    <section id="core-concept">
        <h2 id="main-core">Core Concepts</h2>
        <ul>
        <CoreConcept  
         {...CORE_CONCEPTS[0]}
        />
        <CoreConcept  
         {...CORE_CONCEPTS[1]}
        />
        <CoreConcept  
         {...CORE_CONCEPTS[2]}
        />
        <CoreConcept  
         {...CORE_CONCEPTS[3]}
        />
         {/* <CoreConcept  
         {...CORE_CONCEPTS[4]}
        />
          <CoreConcept  
         {...CORE_CONCEPTS[5]}
        />
         */}
        
        </ul>
    </section>
    <section id="example">
      <h2 id="menu-tab">Example</h2>
      <menu>
        <TabButton onSelect={() => HandleSelect(yusuf)} label="Component" />
        <TabButton onSelect={() => HandleSelect('sokunbi')} label="JSX" />
        <TabButton onSelect={() => HandleSelect('Props')} label="Props" />
        <TabButton onSelect={() => HandleSelect('State')} label="State" />
      </menu>
    </section>
      {selectedTopic}
    </main>
    </div>
  )
}

export default App
