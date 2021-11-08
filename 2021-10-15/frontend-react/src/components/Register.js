import { Form, Input, Button } from 'antd';

function Register() {

  const onFinish = async (e) => {

    const newUser = {
      firstName: e.firstName,
      lastName: e.lastName,
      email: e.email,
      password: e.password
    }

    if (e.password !== e.confirmpassword) {
      alert('Palun sisesta sama parool');
    } else {
      const response = await fetch('http://localhost:8081/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser),
      })

      if (response.ok) {
        console.log("Kasutaja registreeritud")
      }
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
          label="Eesnimi"
          name="firstName"
          rules={[{ required: true, message: 'Palun sisesta oma eesnimi' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Perekonnanimi"
          name="lastName"
          rules={[{ required: true, message: 'Palun sisesta oma prekonnanimi' }]}
        >
          <Input />
        </Form.Item>
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
        <Form.Item
          label="Parooli kinnitus"
          name="confirmpassword"
          rules={[{ required: true, message: 'Palun kinnita oma parool' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button type="primary" htmlType="submit">Registreeri</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Register