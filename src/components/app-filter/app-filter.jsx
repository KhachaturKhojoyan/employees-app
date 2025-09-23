import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All Employees'},
        {name: 'rise', label: 'On Rise'},
        {name: 'moreThan1000', label: 'Salary is above 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name
        const classes = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button 
                className={`btn ${classes}`}
                type = 'button'
                key = {name}
                onClick={() => props.onFilterSelect(name)}>
                {label}    
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
            {/* <button 
                className="btn btn-light"
                type = 'button'>
                    All employees
            </button>
             <button 
                className="btn btn-outline-light"
                type = 'button'>
                    On Rise
            </button>
             <button 
                className="btn btn-outline-light"
                type = 'button'>
                    Salary is above 1000$
            </button> */}
        </div>
    );
}

export default AppFilter;