import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import { Header } from './component/Header/Header.jsx';
import { CoreConcept } from './component/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './component/TabButton.jsx';
import { EXAMPLES } from './data.js';

const yusuf = "My name is Yusuf Oladipupo  Sokunbi";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  //  let tabContent = "Please click a Button";

  function handleSelect(selectedButton){
      setSelectedTopic(selectedButton);
    console.log(selectedTopic);
}
console.log('APP COMPONENT EXECUTING');
  let tabContent = <p>Please select a topic.</p>;

  if(selectedTopic) {
    tabContent = (<div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>);
  }

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
        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
      </menu>
      {tabContent}
    </section>
    </main>
    </div>
  )
}

export default App
