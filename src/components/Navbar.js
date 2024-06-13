import React, { useState, useEffect, useRef } from 'react';

function Navbar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [ctrlKeyPressed, setCtrlKeyPressed] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Control') {
        setCtrlKeyPressed(true);
      } else if (e.key === 'k' && ctrlKeyPressed) {
        e.preventDefault(); // Prevent any default browser behavior
        setCtrlKeyPressed(false);
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'Control') {
        setCtrlKeyPressed(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [ctrlKeyPressed]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission and page refresh
    performSearch();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission and page refresh
      performSearch();
    }
  };

  const performSearch = () => {
    if (searchTerm) {
      window.find(searchTerm);
    }
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} border border-primary rounded m-1`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.align}</a>
              </li>
            </ul>
            <div className={`form-check form-switch mx-2 text-${props.mode==='light' ?"dark":'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
                checked={props.mode === 'dark'} // Ensure checkbox reflects current mode
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Set Dark Mode</label>
            </div>
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="CTRL+K"
                aria-label="Search"
                ref={inputRef}
              />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
