import React from 'react'

const Layout = (props) => {
    return (
        <div>
            <header>
                </header>
                <main>
                    {props.children}
                    </main>
            </div>
    )
}

export default Layout