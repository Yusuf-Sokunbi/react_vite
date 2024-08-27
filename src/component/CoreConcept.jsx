// import { CORE_CONCEPTS } from './data.jsx';

export function  CoreConcept({image, name, priceCents}) {
    return (
      <li>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{priceCents}</p>
     </li>
    );
    }
    