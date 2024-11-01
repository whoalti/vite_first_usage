import './MainContent.scss';

function MainContent({ users }) {
    console.log('users', users);
    return (
        <div className="main-content">
            {users && users.map((user) => (
                <div className='content-card' key={user.data.id}>
                    <p>Full name: {user.data.name}</p>
                    <p>Street: {user.data.address.street}</p>
                    <p>Email:</p>
                    <p className='email-text'> {user.data.email}</p>
                    <br />
                </div>
            ))}
        </div>
    );
}

export default MainContent;
