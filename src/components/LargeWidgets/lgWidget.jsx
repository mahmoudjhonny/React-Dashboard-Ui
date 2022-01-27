import './lgWidget.css';

const Lgwidget = (props) => {
    return (
        <div className='lgWidget'>
            <h3 className="widgetLgTitle">Latest Transaction</h3>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                </thead>
                {props.data.map(user => (
                    <tbody key={user.id}>
                        <tr className="widgetLgTr">
                            <td className="widgetLgUser">
                                <img
                                src={user.imgSrc}
                                alt=""
                                className="widgetLgImg"
                                />
                                <span className="widgetLgName">{user.name}</span>
                            </td>
                            <td className="widgetLgDate">{user.date}</td>
                            <td className="widgetLgAmount">{user.amount}</td>
                            <td className="widgetLgStatus">
                            <button className={"widgetLgButton " + user.status}>{user.status}</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
                
            </table>
        </div>
    );
}

export default Lgwidget;
