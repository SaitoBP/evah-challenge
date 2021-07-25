import React from 'react'

import Typography from '../../components/Typography/Typography'
import TextField from '../../components/TextField/TextField'

const Login = () => {
  return (
    <section>
      <Typography variant='h1'>Olá, seja bem-vindo!</Typography>

      <Typography variant='h3'>Para acessar a plataforma, faça seu login.</Typography>

      <form>
        <TextField label='email' type='email' />

        <TextField label='senha' type='password' />

        <button type='submit'>Entrar</button>
      </form>

      <Typography variant='p'>
        Esqueceu seu login ou senha? <br /> Clique <a href='/'>aqui</a>
      </Typography>
    </section>
  )
}

export default Login
