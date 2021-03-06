import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';

class _AdminPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: [],
            content: [],
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));

            this.setState({
                users: usersList,
                loading: false,
            });
        });
        this.props.firebase.getContent()
            .then(blogPosts => this.setState({ content: blogPosts }))
            .catch(error => console.error('Something went wrong while retrieving all the content. Details:', error));
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const { users, loading } = this.state;
        const postData = Object.keys(this.state.content).map(key => this.state.content[key]);
        const postToRender = postData.map((item, index) => <div key={index}>{item.content}{item.author}</div>);
        return (
            <div>
                <h1>Admin</h1>

                {loading && <div>Loading ...</div>}

                <UserList users={users} />
                {postToRender}
            </div>
        );
    }
}


const UserList = ({ users }) => (
    <ul>
        {users.map(user => (
            <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
                <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
                <span>
          <strong>Username:</strong> {user.username}
        </span>
            </li>
        ))}
    </ul>
);

export const AdminPage = compose(
    withFirebase,
)(_AdminPage);