import React, { useEffect, useState } from 'react';
import Form from '../Form/index';

import axios from 'axios';

import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead,
    TableRow,
    Paper,
    Button 
} from '@material-ui/core';

export default function List () {

    const[produtos, setProduto] = useState([]);

    useEffect(() => {
        async function carregaProdutos() {
            const response = await axios.get('http://localhost:8080/api/produtos');
            setProduto(response.data);
        } 
        carregaProdutos();
    }, []);

    async function handleSubmit(id){
        const id_produto = id;

        const teste = await axios.get(`http://localhost:8080/api/produtos/${id_produto}`);
        console.log(teste.data)
        
    }

    return(

        <TableContainer component={Paper} style={{ marginTop: 15 }}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>NOME</TableCell>
                        <TableCell>QUANTIDADE</TableCell>
                        <TableCell>VALOR</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>

                
                <TableBody>
                    {produtos.map(produto => (
                    <TableRow key={produto.id}>
                        <TableCell>{produto.id}</TableCell>
                        <TableCell>{produto.nome}</TableCell>
                        <TableCell>{produto.quantidade}</TableCell>
                        <TableCell>{produto.valor}</TableCell>
                        <TableCell>
                            <Button 
                                variant="contained" 
                                color="secondary" 
                            >
                                Editar
                            </Button>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}