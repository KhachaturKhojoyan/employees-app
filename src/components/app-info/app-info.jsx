import './app-info.css';


const AppInfo = ({employeesCount, increaseCount}) => {
    return (
        <div className="app-info">
            <h1>Company X employee report</h1>
            <h2>Number of employees։{employeesCount}</h2>
            <h2>Additional payment will receive: {increaseCount}</h2>
        </div>
    );
}

export default AppInfo;