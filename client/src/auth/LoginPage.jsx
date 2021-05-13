import React from 'react'
import Login from './Login';
import { useUser } from 'reactfire';

export default function LoginPage() {
    const user = useUser();
    return (
            <div>
        <div className="App">

      { user &&
        <>
          <Login />
        </>
      }
    </div>
        </div>
    )
}
