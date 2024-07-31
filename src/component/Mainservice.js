import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Msspan, Msimg } from './style'

function Ms(props) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/hyunjiq/petopiareact/main/src/data/db.json');
        
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUsers(); 
  }, []); 
  
  return (
    <section className="margin" id={props.keyid}>
        <div className="container position-relative ">
        <h2>주요 서비스</h2>
            <ul className="row px-0">
                { loading ? <p>Loading...</p> :
                    data.mainservice.map((v, i)=>{
                        return(
                            <li className={`col-lg-3 col-6 mb-3 ${i % 2 === 1 ? 'mt-lg-5' : ''}`}>
                                <Link to="#" className="d-block">
                                    <Msimg src={v.src} alt={v.alt}/>
                                    <Msspan className="ms_div">{v.text}</Msspan>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  );
}

export default Ms;
