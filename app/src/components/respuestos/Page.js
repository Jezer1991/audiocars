import React from 'react';
import ListRespuestos from './list';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'


const Page = () => {
    const navigate = useNavigate()

    return (

        <div className="container" style={{ marginTop: '50px' }}>

            <Button onClick={() => navigate("/Add")} color="success" style={{ marginBottom: '10px' }}>ADD</Button>
            <ListRespuestos />
        </div>

    );
};

export default Page;