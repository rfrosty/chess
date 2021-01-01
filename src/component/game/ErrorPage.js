import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';

function ErrorPage({cssFunctions, unmountCSSFunctions, roundCornersOfButtons}) {

    useEffect(() => {
        cssFunctions();
        return () => {
            console.log("unmounting");
            unmountCSSFunctions();
            // window.removeEventListener('resize', roundCornersOfButtons);✅
        };
            
            
    }, []);

    return (
        <>
            <div className="error-page-container">
                <h1>404 Error</h1>
                <div>The match does not exist or is in use.</div>
                <Link className="exit-error-page button" to="/">
                    Return Home
                </Link>
            </div>
        </>
    ) 
}

export default ErrorPage
