import React from 'react'

import { useForm } from 'react-hook-form'

import Typography from '../../components/Typography/Typography'
import TextField from '../../components/TextField/TextField'
import Button from '../../components/Button/Button'

import useSubmit from './useSubmit'

const Login = () => {
  const { register, handleSubmit } = useForm()

  const { onSubmit } = useSubmit()

  return (
    <section>
      <Typography variant='h1'>Olá, seja bem-vindo!</Typography>

      <Typography variant='h3'>Para acessar a plataforma, faça seu login.</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField register={{ ...register('email') }} label='email' type='email' />

        <TextField register={{ ...register('password') }} label='senha' type='password' />

        <Button type='submit'>Entrar</Button>
      </form>

      <Typography variant='p'>
        Esqueceu seu login ou senha? <br /> Clique <a href='/'>aqui</a>
      </Typography>
    </section>
  )
}

export default Login
