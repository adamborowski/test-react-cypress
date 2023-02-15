import {Button, Dialog, DialogContent, DialogTitle} from '@mui/material';
import {useEffect, useState} from 'react';

export const Main = () => {
    const [open, setOpen] = useState(true);
    const [works, setWorks] = useState(false);
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
                    id="myframe"
                    height={400}
                    width={400}
                    src={`https://example-express-redirection.onrender.com/?redirect=${window.location.origin+'/relogin'}`}
                />
            </DialogContent>
        </Dialog>
        <Button id="proceed-button" onClick={() => setWorks(true)}>Proceed</Button>
        {works && <h2>It works!</h2>}
    </div>
}
