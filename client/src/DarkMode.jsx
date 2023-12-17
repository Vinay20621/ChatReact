import './dark.css'
function DarkMode({darkMode,handleDarkMode}) {
    return ( <>
    
        <input type="checkbox" id="toggle" onChange={handleDarkMode} />


    
    </> );
}

export default DarkMode;