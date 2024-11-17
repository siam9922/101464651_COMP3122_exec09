import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            });
    }

    render() {
        return (
            <div className="container mt-4">
                <h1 className="text-center text-white bg-success p-3">User List</h1>
                {this.state.persons.map((person) => (
                    <div
                        key={person.login.uuid}
                        className="card mb-3 shadow-sm"
                        style={{ backgroundColor: '#00bcd4', color: '#fff' }}
                    >
                        <div className="row g-0">
                            <div className="col-md-3 d-flex align-items-center justify-content-center">
                                <img
                                    src={person.picture.large}
                                    className="img-fluid rounded-circle m-3"
                                    alt={person.name.first}
                                />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {`${person.name.title} ${person.name.first} ${person.name.last}`}
                                    </h5>
                                    <p className="card-text">
                                        <strong>User Name:</strong> {person.login.username}
                                    </p>
                                    <p className="card-text">
                                        <strong>Gender:</strong> {person.gender.toUpperCase()}
                                    </p>
                                    <p className="card-text">
                                        <strong>Time Zone Description:</strong>{' '}
                                        {person.location.timezone.description}
                                    </p>
                                    <p className="card-text">
                                        <strong>Address:</strong> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode}`}
                                    </p>
                                    <p className="card-text">
                                        <strong>Email:</strong> {person.email}
                                    </p>
                                    <p className="card-text">
                                        <strong>Birth Date and Age:</strong>{' '}
                                        {`${new Date(person.dob.date).toLocaleDateString()} (${person.dob.age} years)`}
                                    </p>
                                    <p className="card-text">
                                        <strong>Register Date:</strong>{' '}
                                        {new Date(person.registered.date).toLocaleDateString()}
                                    </p>
                                    <p className="card-text">
                                        <strong>Phone:</strong> {person.phone}
                                    </p>
                                    <p className="card-text">
                                        <strong>Cell:</strong> {person.cell}
                                    </p>
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonList;
