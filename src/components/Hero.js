import React, {useState, useEffect} from 'react'
import Dist from '../assets/cov.png'
import CountUp from 'react-countup';
import axios from 'axios'
const Hero = () => {
    const [globe, setGlobe] = useState([])

    useEffect (() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(`https://coronavirus-19-api.herokuapp.com/all`)
                console.log('data',data)
                setGlobe(data)
            }
            catch (error) {
                console.error(error) }
            }
            fetchData()
        }, [])  
    return (
    <div className='hero'>
<div className='container-fluid'>
<div className='row'>
<div className='col-lg-6'>
<img className='imgs' src={Dist} />
    </div>
    <div className='col-lg-6'>
    <h2>Stay Safe from COVID-19 <br/>
    Wear A Mask
    </h2>
    <h3>Global Data</h3>

    <div className='orange'>
    <h6>COVID CASES</h6>
    <CountUp start={0} end={globe.cases} separator="," duration={8.0}  ></CountUp>   
     </div>
    <div className='green'>
    <h6>RECOVERED</h6>
    <CountUp start={0} end={globe.recovered} separator="," duration={8.0}  ></CountUp>   
     </div>

     <div className='red'>
     <h6>DEATHS</h6>
     <CountUp start={0} end={globe.deaths} separator="," duration={8.0}  ></CountUp>    
     </div>

</div>
</div>
 </div>
    </div>
  )
}

export default Hero