import React from 'react';

interface Optional {
    any: any // can accept anything
}

interface Props {
    body: string; //Required
    // body: string | number; //Another request
    icons?: string; //Optional
    // age: number;
    // isMaried: boolean;
    // anyFunction: (param: string) => void;
    // obj: {
    //     f1: string
    // }
    // option: Optional,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Text: React.FC <Props> = (props) => {
    // Aditional validate
    const [click, setClick] = React.useState(true);
    // const [click, setClick] = React.useState<number | boolean>(true);
    // setClick(!click)
    
    const usernameRef = React.useRef<HTMLInputElement>(null);
    
    return (
        <>
            <p>Hi {props.body}</p>
            <input ref={usernameRef} onChange={props.handleChange} />
        </>
    )
}

export default Text;