import React, { useEffect, useState } from 'react'
import CardDetails from '../Component/CardDetails';
import Spinner from '../Component/spinner';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const url = "https://fakestoreapi.com/products";

    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch(url);
            const output = await response.json();
            setData(output);
        } catch (err) {
            setData([]);
            console.log("Error aay gya hai check kro");
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            {
                loading ?

                    (
                        <Spinner/>
                    )
                    :
                    (
                        <div>
                            {
                                data.length > 0 ?

                                    <div>
                                        {
                                            data.map((post) => (
                                                <CardDetails key={post.id} post={post} />
                                            ))
                                        }
                                    </div>
                                    :
                                    (
                                        <div>
                                            <p>No data found</p>
                                        </div>
                                    )
                            }

                        </div>

                    )
            }
        </div>
    )
}

export default Home