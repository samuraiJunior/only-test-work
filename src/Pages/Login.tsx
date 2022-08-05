import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Components/Button'
import Checkbox from '../Components/Checkbox'
import Error from '../Components/Error'

import Input from '../Components/Input'
import { IFormData } from '../Types/MainTypes'



interface Iprops {
    setLogin: (login: string) => void
}

const Login: React.FC<Iprops> = ({ setLogin }) => {

    const [NetworkError, SetNetworkError] = useState<string | null>(null)
    const navigation = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormData>({ mode: 'all' })
    const [isFetching, SetisFetching] = useState(false)
    const [data, setData] = useState<IFormData | null>(null)

    const ShowFormData = (data: IFormData) => {
        setData(data)
        reset()
    }

    useEffect(() => {
        if (data) {
            SetisFetching(true)
            setTimeout(() => {
                SetisFetching(false)
                if (data.login === "steve.jobs@example.com" && data.password === "password") {
                    setLogin(data.login)
                    navigation({ pathname: "/profile" })
                } else {
                    let ErrorMessage = data.login !== "steve.jobs@example.com" ? `Пользователя ${data.login} не существует` :
                        data.password !== "password" ? `Неправильный пароль. Пароль ${data.password}` : null
                    SetNetworkError(ErrorMessage)
                }
            }, 3000);
        }
    }, [data, navigation, setLogin])
    return (
        <>
            <Form onSubmit={handleSubmit(ShowFormData)}>
                {NetworkError ? <Error message={NetworkError} /> : null}
                <div>
                    <Input register={register} label={"Логин"} type={"text"}
                        rules={{
                            name: "login", validation: {
                                required: "Обязательное поле",
                                pattern: { value: /.+@.+\..+/gm, message: "Поле должно соответствовать /.+@.+/..+/gm " }
                            }
                        }} errors={errors} />

                    {<Input register={register} label={"Пароль"} type={"password"}
                        rules={{ name: "password", validation: { required: "Обязательное поле" } }} errors={errors} />}
                </div>

                <div>
                    <Checkbox register={register} label={"Запомнить пароль"} rules={{ name: "rememberMe", validation: {} }} />
                </div>
                <Button styles={`margin-top:40px!important;`} disabled={isFetching} text={"Войти"} />
            </Form>

        </>
    )
}

export default Login

const Form = styled("form")`
width:100%;
&>*+*{
    margin-top:20px
}
`
