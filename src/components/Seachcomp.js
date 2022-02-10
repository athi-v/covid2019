import React, {useState, useEffect} from 'react'
import CountUp from 'react-countup';

import axios from 'axios'
const Seachcomp = () => {
    const [country, setCountry] = useState([])
    const [query, setQuery] = useState('')

    const searchCountry = (event) => {
        if (event.key === 'Enter') {
          axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${query}`).then((response) => {
            setCountry(response.data)
            console.log(response.data)
          })
          setQuery('')
        }
      }
    
  return (
    <div className='search'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12'>
                <input
          value={query}
          onChange={event => setQuery(event.target.value)}
          onKeyPress={searchCountry}
          placeholder='Search Country'
          type="text" />  

           <div className='tops col-lg-12'>
<h5>{country.country}</h5>
</div>          
          </div>
                <div className='bot col-lg-12'>
                <div className='row'>
               
                    <div className='oranges col-lg-4'>
                    <h6>Cases</h6>
                    <CountUp start={0} end={country.cases} separator="," duration={8.0}  ></CountUp>   
                    </div>

                    <div className='greens col-lg-4'>
                    <h6>Recovered</h6>
                    <CountUp start={0} end={country.recovered} separator="," duration={8.0}  ></CountUp>   
                    </div>

                    <div className='reds col-lg-4'>
                    <h6>Deaths</h6>
                    <CountUp start={0} end={country.deaths} separator="," duration={8.0}  ></CountUp>   
                    </div>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Seachcomp