import {Dialog, DialogContent, DialogTitle} from '@mui/material';
import {useEffect, useState} from 'react';

export const Main = () => {
    const [open, setOpen] = useState(true);
    useEffect(() => {
        window.addEventListener('message', (e) => {
            if (e.data === 'code') {
                new Promise((resolve) => { // simulating WLMRT code
                    setTimeout(resolve, 300)
                }).then(() => setOpen(false))
            }
        })
    }, [])
    return <div>Hello main
        <Dialog open={open}>
            <DialogTitle>Login dialog</DialogTitle>
            <DialogContent>
                <iframe
                    height={400}
                    width={400}
                    src="https://example-express-redirection.onrender.com/"
                />
            </DialogContent>
        </Dialog>
    </div>
}
