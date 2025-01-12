import React from "react";

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Constact Us',
        path: '/constact-us'
    },
    {
        title: 'Login',
        path: '/login'

    }
]
export default function Navigation(){
    return (<nav className="site-navigation">
        <span>My React Blog</span>
        <ul>
            <li>

            </li>
        </ul>

    </nav>)
}