import React from 'react';
import { Container } from '@material-ui/core';

import Form from './Form/index';
import Table from './Table/index';

export default function Product(){
    return(
        <>
            <Container maxWidth="xs">
                <Form />
            </Container>
            <Container maxWidth="md">
                <Table />
            </Container>
        </>
    );
}