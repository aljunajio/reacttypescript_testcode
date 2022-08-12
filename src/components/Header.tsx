
import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
       <div className='container mb-4'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <a className="navbar-brand" href="##">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="##navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="##">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="##">Link</a>
                    </li>
                    
                </ul>
                
            </div>
        </nav>
       </div>

    )
};

export default Header;
