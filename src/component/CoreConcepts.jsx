import { CORE_CONCEPTS } from "../data.js";
import { CoreConcept } from "./CoreConcept.jsx";

export default function CoreConcepts() {
    return (
        <section id="core-concept">
        <h2 id="main-core">Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title}  
         {...conceptItem}
        /> )}
        </ul>
    </section>
    )
}