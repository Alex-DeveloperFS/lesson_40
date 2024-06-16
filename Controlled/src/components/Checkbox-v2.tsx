import {FormEvent,  useState} from 'react'

const Checkbox = () => {

  const [formData, setFormData] = useState(false)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)

  }

  const handleCheckboxChange = (e: FormEvent<HTMLInputElement>) => {
    setFormData(e.currentTarget.checked)
  }

  return (
    <form className="col-6" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <input type="checkbox" className="form-check-input" name="green" onChange={handleCheckboxChange}/>
        <label className="form-label">Green</label>
      </div>
      <div className="mb-3">
        <input type="checkbox" className="form-check-input" name="blue" onChange={handleCheckboxChange}/>
        <label className="form-label">Blue</label>
      </div>
      <div className="mb-3">
        <input type="checkbox" className="form-check-input" name="red" onChange={handleCheckboxChange}/>
        <label className="form-label">Red</label>
      </div>
      <div className="mb-3">
        <input type="checkbox" className="form-check-input" name="yellow" onChange={handleCheckboxChange}/>
        <label className="form-label">Yellow</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Checkbox