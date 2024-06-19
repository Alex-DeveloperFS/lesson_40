import CheckboxControlled from "./components/CheckboxControlled.tsx";
import CheckboxUncontrolled from "./components/CheckboxUncontrolled.tsx";
import UseEffect from "./components/UseEffect.tsx";

const App = () => {

  return (
    <div>
      <div className="container">
        <h1>Controlled</h1>
        <CheckboxControlled/>
      </div>
      <hr/>
      <div className="container">
        <h1>Uncontrolled</h1>
        <CheckboxUncontrolled/>
      </div>
      <hr/>
      <div className="container">
        <h1>useEffect</h1>
        <UseEffect/>
      </div>

    </div>
  )
}

export default App
