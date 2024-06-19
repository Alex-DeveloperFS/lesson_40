import {FormEvent, useRef} from 'react'

const CheckboxUncontrolled = () => {

  const greenRef = useRef<HTMLInputElement>(null)
  const blueRef = useRef<HTMLInputElement>(null)
  const redRef = useRef<HTMLInputElement>(null)
  const yellowRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (greenRef.current) {
      console.log('green:', greenRef.current.checked)
    }
    if (blueRef.current) {
      console.log('blue:', blueRef.current.checked)
    }
    if (redRef.current) {
      console.log('red:', redRef.current.checked)
    }
    if (yellowRef.current) {
      console.log('yellow:', yellowRef.current.checked)
    }
  }

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <input type="checkbox" className="form-check-input" name="green" ref={greenRef}/>
        <label className="form-label ms-2">Green</label>
      </div>
      <div className="mb-3">
        <input type="checkbox" className="form-check-input" name="blue" ref={blueRef}/>
        <label className="form-label ms-2">Blue</label>
      </div>
      <div className="mb-3">
        <input type="checkbox" className="form-check-input" name="red" ref={redRef}/>
        <label className="form-label ms-2">Red</label>
      </div>
      <div className="mb-3">
        <input type="checkbox" className="form-check-input" name="yellow" ref={yellowRef}/>
        <label className="form-label ms-2">Yellow</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default CheckboxUncontrolled