import React from 'react';
import Sider from "antd/es/layout/Sider";
import {Avatar, Layout, Menu} from "antd";
import {Content, Footer} from "antd/es/layout/layout";
import css from './styles.module.css';

export const Main = () => {
    const skadjsakldj = [21321321432432, 321321343243243, 3213213213213424, 32132132132132, 321321321321312]
    console.log(skadjsakldj);

    return (
        <>
            <Layout className={'main'}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <div className={css.avatar}>
                            <Avatar size='large' />
                        </div>
                        <Menu.Item key="1">
                            Главная
                        </Menu.Item>
                        <Menu.Item key="2">
                            Карты
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </>
    )
}
