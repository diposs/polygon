import link from 'next/link'
const Navbar = () => {
    return (
            <div className="small">
                <h1>Welcome to Fundfair</h1>
                    <nav>
                        <link href="/" /><a>Home </a>
                        <link href="/About" /><a>About </a>
                </nav>
                </div>

    );
}
 
export default Navbar;