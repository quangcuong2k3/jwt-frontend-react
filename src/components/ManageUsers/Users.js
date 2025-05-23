import { useEffect, useState } from "react";
import "./Users.scss";
import { fetchAllUser } from "../../services/userService";

const Users = (props) => {
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, [])
    const fetchUsers = async () => {
        let respone = await fetchAllUser();
        if (respone && respone.data && respone.data.EC === 0) {
            setListUsers(respone.data.DT);
            console.log(respone.data.DT)
        }
    }
    return (
        <div className="container">
            <div className="manage-users-container">
                <div className="user-header">
                    <div className="title">
                        <h3>Table User</h3>
                    </div>
                    <div className="action">
                        <button className="btn btn-success">Refesh</button>
                        <button className="btn btn-primary">Add new user</button>
                    </div>
                </div>
                <div className="user-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Id</th>
                                <th scope="col">Email</th>
                                <th scope="col">Username</th>
                                <th scope="col">Group</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers && listUsers.length > 0 ?
                                <>
                                    {listUsers.map((item, index) => {
                                        return (
                                            <tr key={`row-${index}`}>
                                                <td>{index + 1}</td>
                                                <td>{item.id}</td>
                                                <td>{item.email}</td>
                                                <td>{item.username}</td>
                                                <td>{item.Group ? item.Group.name : ``}</td>
                                            </tr>
                                        )
                                    })}
                                </>
                                :
                                <>
                                    <span>Not Found User</span>
                                </>
                            }
                        </tbody>
                    </table>
                </div>
                <div className="user-footer">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    )
}
export default Users;