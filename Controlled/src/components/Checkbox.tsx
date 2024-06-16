import {FormEvent,  useState} from 'react'

const Checkbox = () => {

  const [green, setGreen] = useState<boolean>(false)
  const [blue, setBlue] = useState<boolean>(false)
  const [red, setRed] = useState<boolean>(false)
  const [yellow, setYellow] = useState<boolean>(false)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
      console.log('green:', green)
      console.log('blue:', blue)
      console.log('red:', red)
      console.log('yellow:', yellow)
  }

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <input type="checkbox" className="form-check-input" name="green" onChange={(e) => setGreen(e.target.checked)}/>
        <label className="form-label ms-2">Green</label>
      </div>
      <div className="mb-3">
        <input type="checkbox" className="form-check-input" name="blue" onChange={(e) => setBlue(e.target.checked)}/>
        <label className="form-label ms-2">Blue</label>
      </div>
      <div className="mb-3">
        <input type="checkbox" className="form-check-input" name="red" onChange={(e) => setRed(e.target.checked)}/>
        <label className="form-label ms-2">Red</label>
      </div>
      <div className="mb-3">
        <input type="checkbox" className="form-check-input" name="yellow" onChange={(e) => setYellow(e.target.checked)}/>
        <label className="form-label ms-2">Yellow</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Checkbox