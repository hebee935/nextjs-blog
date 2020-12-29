import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemText,
    Container,
    Button,
} from '@material-ui/core';
import { Menu, ChevronLeft, Home, Inbox, Mail, } from '@material-ui/icons';

const drawerWidth = 240;

export default class Layout extends Component {
    state = {
        open: false,
        isLogin: false,
    }

    handleDrawerOpen = () => {
        this.setState({
            open: true,
        });
    }

    handleDrawerClose = () => {
        this.setState({
            open: false,
        });
    }

    render() {
        const { children } = this.props;
        const { open, isLogin, } = this.state;
        return (
            <section>
                <AppBar
                    position="static"
                    style={{
                        width: `calc(100% - ${open ? drawerWidth : 0}px)`,
                        marginLeft: open ? drawerWidth : 0,
                        transition: 'all 0.2s'
                    }}
                >
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="Menu" onClick={this.handleDrawerOpen}>
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" style={{ flex: 1}}>
                            My Blog
                        </Typography>

                        <Button onClick={() => Router.push('/signin')}>{isLogin ? '로그아웃' : '로그인'}</Button>
                    </Toolbar>
                </AppBar>
                <Drawer variant="persistent" open={open}>
                    <div stype={{ width: drawerWidth }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeft />
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            <Link href="/">
                                <a>
                                    <ListItem button>
                                        <ListItemText primary="Home" />
                                    </ListItem>
                                </a>
                            </Link>
                            <Link href="/a">
                                <a>
                                    <ListItem button>
                                        <ListItemText primary="A" />
                                    </ListItem>
                                </a>
                            </Link>
                            <Link href="/b">
                                <a>
                                    <ListItem button>
                                        <ListItemText primary="B" />
                                    </ListItem>
                                </a>
                            </Link>
                            <Link href="/c">
                                <a>
                                    <ListItem button>
                                        <ListItemText primary="C" />
                                    </ListItem>
                                </a>
                            </Link>
                            <Link href="/board/list">
                                <a>
                                    <ListItem button>
                                        <ListItemText primary="Board" />
                                    </ListItem>
                                </a>
                            </Link>
                        </List>
                    </div>
                </Drawer>
                <Container>
                    <article style={{
                        width: `calc(100% - ${open ? drawerWidth : 0}px)`,
                        marginLeft: open ? drawerWidth : 0,
                        transition: 'all 0.2s',
                        margin: '16px 0',
                    }}>
                        {children}
                    </article>
                </Container>
            </section>
        )
    }
}