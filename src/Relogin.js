import {useEffect} from 'react';

export const Relogin = ()=>{
    useEffect(()=>{
        window.parent&&window.parent.postMessage('code')
    },[])

    return <div>Relogin success, sent post message to parent</div>
}
