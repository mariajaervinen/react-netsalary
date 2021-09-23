import React, {useState} from 'react'; 
import './App.css';

function App() {
  const [salary, setSalary] = useState(0);
  const [tax, setTax] = useState(0);
  const [pension, setPension] = useState(0.25);
  const [insurance, setInsurance] = useState(0.25);
  const [result, setResult] =useState(0);
  const [taxes, setTaxes] = useState('');
  const [pensions, setPensions] = useState('');
  const [insurances, setInsurances] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    let taxes = (salary * (tax / 100))
    let pensions = (salary * (pension / 100))
    let insurances = (salary * (insurance / 100))
    let total = salary - taxes - pensions - insurances
    setTaxes(taxes);
    setInsurances(insurances);
    setPensions(pensions);
    setResult(total);
  }

  return (
    <div class='container'>
      <h2>Loan Calculator</h2>
      <form onSubmit={handleSubmit}>

        <div class='mb-3'>
          <label class="form-label">Salary</label>
          <input type='number' class="form-control" name='salary'
          value= {salary} onChange={e => setSalary(e.target.value)}/>
        </div>

        <div class='mb-3'>
          <label class="form-label">Tax (%)  {taxes}€</label>
          <input type='number' class="form-control" name='tax'
          value= {tax} onChange={e => setTax(e.target.value)}/>
        </div>

        <div class='mb-3'>
          <label class="form-label">Pension (%)  {pensions}€</label>
          <select class="form-select" name='pension'
          value= {pension} onChange={e => setPension(e.target.value)}>
            <option value='0.25'>0.25 %</option>
            <option value='0.50'>0.50 %</option>
            <option value='0.75'>0.75 %</option>
            <option value='1.00'>1.00 %</option>
            <option value='1.25'>1.25 %</option>
            <option value='1.50'>1.50 %</option>
            <option value='1.75'>1.75 %</option>
            <option value='2.00'>2.00 %</option>
            <option value='2.25'>2.25 %</option>
            <option value='2.50'>2.50 %</option>
            <option value='2.75'>2.75 %</option>
            <option value='3.00'>3.00 %</option>
            <option value='3.25'>3.25 %</option>
            <option value='3.50'>3.50 %</option>
            <option value='3.75'>3.75 %</option>
            <option value='4.00'>4.00 %</option>
            <option value='4.25'>4.25 %</option>
            <option value='4.50'>4.50 %</option>
            <option value='4.75'>4.75 %</option>
            <option value='5.00'>5.00 %</option>
          </select>
        </div>

        <div class='mb-3'>
          <label class="form-label">Insurance (%)  {insurances}€</label>
          <select class="form-select" name='insurance'
          value= {insurance} onChange={e => setInsurance(e.target.value)}>
            <option value='0.25'>0.25 %</option>
            <option value='0.50'>0.50 %</option>
            <option value='0.75'>0.75 %</option>
            <option value='1.00'>1.00 %</option>
            <option value='1.25'>1.25 %</option>
            <option value='1.50'>1.50 %</option>
            <option value='1.75'>1.75 %</option>
            <option value='2.00'>2.00 %</option>
            <option value='2.25'>2.25 %</option>
            <option value='2.50'>2.50 %</option>
            <option value='2.75'>2.75 %</option>
            <option value='3.00'>3.00 %</option>
            <option value='3.25'>3.25 %</option>
            <option value='3.50'>3.50 %</option>
            <option value='3.75'>3.75 %</option>
            <option value='4.00'>4.00 %</option>
            <option value='4.25'>4.25 %</option>
            <option value='4.50'>4.50 %</option>
            <option value='4.75'>4.75 %</option>
            <option value='5.00'>5.00 %</option>
          </select>
        </div>
        <div class='mb-3'>
          <label class="form-label">Your salary after payments</label>
          <input name='result' class="form-control" value={result.toFixed(0)} readonly/>
        </div>
        <button class='btn btn-primary'>Calculate</button>
      </form>
    </div>
  );
}

export default App;
