import React from 'react';
import './Header.css';
import 'antd/dist/antd.css';
import '../index.css';

import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <Layout className="layout">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="item1"><Link to="/">Avaleht</Link></Menu.Item>
                <Menu.Item key="item2"><Link to="posts">Postitused</Link></Menu.Item>
                <Menu.Item key="item3"><Link to="login">Logi sisse</Link></Menu.Item>
                <Menu.Item key="item4"><Link to="register">Loo konto</Link></Menu.Item>
            </Menu>
        </Layout>
    );
}


export default Header;