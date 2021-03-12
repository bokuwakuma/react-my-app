import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import TemporaryDrawer from './dashboard/drawer/TemporaryDrawer';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.alhinc.jp">
                ALH Inc.
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function App() {
    return (
        <main>
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h4" component="h1" gutterBottom>
                    ねつべぇぇぇぇぇん！！！！！！
                </Typography>
                <ProTip />
                <Copyright />
            </Box>
        </Container>
        </main>
    );
}