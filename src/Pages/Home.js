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
        <div className='flex justify-center items-center'>
            {
                loading ?

                    (
                        <div className='w-screen h-screen flex justify-center items-center'>
                            <Spinner/>
                        </div>
                    )
                    :
                    (
                        <div>
                            {
                                data.length > 0 ?

                                    <div  className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                                    max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                                        {
                                            data.map((post) => (
                                                <CardDetails key={post.id} post={post} />
                                            ))
                                        }
                                    </div>
                                    :
                                    (
                                        <div className="flex justify-center items-center">
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