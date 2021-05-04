import React from 'react';

function userPage({setAuth}){

    const logout = (e) => {
        e.preventDefault();

        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("email");
        localStorage.removeItem("address");
        localStorage.removeItem("gender");
        localStorage.removeItem("name");
        localStorage.removeItem("phone_number");
        localStorage.removeItem("user_name");
        setAuth(false);
    }

    console.log(localStorage.user)
    return (
        <div>
            User page
            {localStorage.user_name}
            {localStorage.email}
            {localStorage.address}
            {localStorage.gender}
            {localStorage.name}
            {localStorage.phone_number}
            <button className="btn btn-primary logout-button" onClick={e => logout(e)}>Kilépés</button>
        </div>
    )
}

export default userPage;