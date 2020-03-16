import React, { useState } from 'react';
import axios from 'axios';
import { Button, Grid, TextField, Paper } from '@material-ui/core';

export default function Form(props) {

    const[nome, setName] = useState('');
    const[quantidade, setQuantidade] = useState('');
    const[valor, setValor] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        
        if(nome.length && quantidade.length && valor.length){
            axios.post('http://localhost:8080/api/produto', { nome, quantidade, valor })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
        }
    }

    return(
        <Paper style={{ padding: 36, marginTop: 15 }}>
            <Grid container spacing={1}>
                <h2>Cadastro de produto</h2>
                <Grid item xs={12}>
                    <TextField 
                        type="text"
                        value={nome}
                        label="Nome"
                        fullWidth
                        required
                        onChange={e => setName(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                        type="number"
                        value={quantidade}
                        label="Quantidade"
                        fullWidth
                        onChange={e => setQuantidade(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                        type="number"
                        value={valor}
                        label="Valor"
                        fullWidth
                        onChange={e => setValor(e.target.value)}
                    />
                </Grid>

                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Cadastrar
                </Button>

            </Grid>
        </Paper>
    );
}