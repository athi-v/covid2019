import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import './Search.css'
const Search = () => {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const url = 'https://coronavirus-19-api.herokuapp.com/countries'
   
        useEffect(() => {
            axios(url)
            .then(response => {
                setAPIData(response.data);
            })
            .catch(error => {
            console.log('Error getting fake data: ' + error);
            })
            }, []); 
            
            const searchItems = (searchValue) => {
                setSearchInput(searchValue)
                if (searchInput !== '') {
                    const filteredData = APIData.filter((item) => {
                        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
                    })
                    setFilteredResults(filteredData)
                }
                else{
                    setFilteredResults(APIData)
                }
            }
      

  return (
      <div className='search'>
<div className='container-fluid'>


<div class="input-group">
  <input type="text" className='input' placeholder='Enter Country' onChange={(e) =>searchItems(e.target.value)}/>
</div>


<div className='cards'>


{searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='card-title'>{item.country}</div>
                                    <div className='card-text orange'>
                                        Total Cases<span className='colon'>:</span> <span className='left'><CountUp start={0} end={item.cases} separator="," duration={8.0}  ></CountUp></span>
                                    </div>
                                    <div className='card-text red'>Total Deaths<span className='colon'>:</span> <span className='left'><CountUp start={0} end={item.deaths} separator="," duration={8.0}  ></CountUp></span></div>
                                    <div className='card-text green' >Total Recovered <span className='colon'>:</span> <span className='left'><CountUp start={0} end={item.recovered} separator="," duration={8.0}  ></CountUp></span></div>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='card-title'>{item.country}</div>
                                    <div className='card-text orange'>
                                        Total Cases<span className='colon'>:</span> <span className='left'><CountUp start={0} end={item.cases} separator="," duration={8.0}  ></CountUp></span>
                                    </div>
                                    <div className='card-text red'>Total Deaths<span className='colon'>:</span> <span className='left'><CountUp start={0} end={item.deaths} separator="," duration={8.0}  ></CountUp></span></div>
                                    <div className='card-text green' >Total Recovered <span className='colon'>:</span> <span className='left'><CountUp start={0} end={item.recovered} separator="," duration={8.0}  ></CountUp></span></div>
                                </div>
                            </div>
                        )
                    })
                )}
</div>
</div> 
</div>
 )
};

export default Search;
