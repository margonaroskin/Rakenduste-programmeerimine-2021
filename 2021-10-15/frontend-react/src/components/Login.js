import { Form, Input, Button } from 'antd';
import { useContext, useState } from "react";
import { Context } from "../store";
import { loginUser } from '../store/actions';

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [state, dispatch] = useContext(Context);

    const onFinish = async (e) => {
        setEmail(e.email)
        setPassword(e.password)

        const userLogin = {
            email: e.email,
            password: e.password
        }

        const response = await fetch('http://localhost:8081/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userLogin),
        })

        const data = await response.json()

        if (data.token) {
            console.log("Sisselogimine õnnestus")
            dispatch(loginUser(data))
        }
    }

    return (
        <>
            <br />
            <Form
                onFinish={onFinish}
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 4 }}
            >
                <Form.Item
                    label="Meiliaadress"
                    name="email"
                    rules={[{ required: true, message: 'Palun sisesta oma meiliaadress' }]}
                >
                    <Input
                        placeholder="example@example.com"
                        type="email"
                    />
                </Form.Item>
                <Form.Item
                    label="Parool"
                    name="password"
                    rules={[{ required: true, message: 'Palun sisesta oma parool' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                    <Button type="primary" htmlType="submit">Logi sisse</Button>
                </Form.Item>

            </Form>
        </>
    )
}

export default Login;