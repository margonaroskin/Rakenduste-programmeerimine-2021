import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";
import { Form, Input, Button, Table } from 'antd';

function Posts() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [deletableID, setDeletableID] = useState();
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Pealkiri',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Sisu',
      dataIndex: 'body',
      key: 'body',
    },
    {
      title: 'Sisestatud',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
  ];


  const handleNewSubmit = (e) => {
    e.preventDefault();

    setTitle("");
    setBody("");

    addNewPost()

    if (inputRef.current) inputRef.current.focus();
  };

  useEffect(() => {
    fetch('http://localhost:8081/api/post').then(res => {
      return res.json();
    }).then(async (data) => {
      await dispatch(updatePosts(data))
    })
  }, [])


  const handleDeleteSubmit = (e) => {
    e.preventDefault();

    deletePost();

    if (inputRef.current) inputRef.current.focus();
  };

  const deletePost = () => {
    document.querySelectorAll("[data-row-key='']")

    fetch("http://localhost:8081/api/post/delete/" + deletableID, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
    }).catch((error) => {
      alert(error);
    });

    window.location.reload();

  }

  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      title: title,
      body: body,
      createdAt: new Date().toLocaleString()
    };

    fetch("http://localhost:8081/api/post/create", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
    }).catch((error) => {
      alert(error);
    });

    window.location.reload();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <Form
        onSubmit={handleNewSubmit}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Form.Item
          label="Pealkiri"
          name="title"
          rules={[{ required: true, message: 'Palun sisesta pealkiri' }]}
        >
          <Input
            ref={inputRef}
            type="body"
            value={title}
            label="Pealkiri"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Sisu"
          name="body"
          rules={[{ required: true, message: 'Kirjuta postituse sisu' }]}
        >
          <Input
            ref={inputRef}
            type="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">Lisa postitus</Button>
      </Form>
      <br />
      <Form
        onSubmit={handleDeleteSubmit}
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 4 }}
      >
        <Form.Item
          label="Postituse ID"
          name="id"
          rules={[{ required: true, message: 'Sisesta ID, mida soovitud kustutada' }]}
        >
          <Input
            ref={inputRef}
            type="body"
            value={deletableID}
            onChange={(e) => setDeletableID(e.target.value)}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">Kustuta postitus</Button>
      </Form>
      <br />
      <Table columns={columns} dataSource={state.posts.data} rowKey='_id' />
    </div>
  );
}

export default Posts;