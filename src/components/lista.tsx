import { useApi } from "../hooks/useApi"
import React from 'react';
import Button from 'react-bootstrap/Button';

type  Repository = {
    full_name: string;
    description: string;
}


const Lista = () => {

    const {data}= useApi<Repository[]>('http://api.github.com/users/balbboa/repos')
    
    return (
        <><div className="p-1 d-flex justify-content-center">
            <Button variant="primary" className="mr-1">
                Primary
            </Button>
        </div>
        <ul>
            {data?.map(repo => (

                <li>
                    <strong>{repo.full_name}</strong>
                    <p>{repo.description}</p>
                </li>

            ))}
        </ul>
        </>
    )
}

export default Lista