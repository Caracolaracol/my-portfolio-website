
function Admin() {

    return (
        <div>
            <h1>Admin site</h1>

            <h2>Log in</h2>

            <form action="" method="post">
                <label htmlFor="text">User</label>
                <input type="text" id="text" />

                <div className="h-4">

                </div>

                <label htmlFor="password">Password</label>
                <input type="text" id="password" />
            </form>
        </div>
    )
}

export default Admin