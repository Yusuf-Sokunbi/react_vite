import reactLogo from '../../assets/react.svg';
import "./Header.css"

const reactDescription = ['Foundamental','Crucial','Core'];
function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1))
}

export function Header() {
    const description = reactDescription[genRandomInt(2)];
    return ( 
      <header>
        <img src={reactLogo} alt="" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will  need for any app you 
          are going to build!
        </p>
      </header>
   );
  } 