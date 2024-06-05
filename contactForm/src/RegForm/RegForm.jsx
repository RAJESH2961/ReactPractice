import { useState } from "react";
import './RegForm.css';

function RegForm() {
    const [user, setUser] = useState({
        name: "Rajesh",
        age: 21,
        gender: "Male",
        isMarried: false,
        country : "India",
        bio : "Write Something About You !",
    });

    function changeHandler(e) {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({ ...user, [name]: value });
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Is Married</th>
                        <th>Country</th>
                        <th>Bio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.gender}</td>
                        <td>{user.isMarried ? "Married" : "Not Married"}</td>
                        <td>{user.country}</td>
                        <td>{user.bio}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <form action="">
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={changeHandler}
                />
                <input
                    type="number"
                    name="age"
                    value={user.age}
                    onChange={changeHandler}
                />
                <div className="gender">
                    <label htmlFor="male">
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="Male"
                            checked={user.gender === "Male"}
                            onChange={changeHandler}
                        />
                        Male
                    </label>
                    <label htmlFor="female">
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="Female"
                            checked={user.gender === "Female"}
                            onChange={changeHandler}
                        />
                        Female
                    </label>
                </div>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        name="isMarried"
                        id="isMarried"
                        checked={user.isMarried}
                        onChange={changeHandler}
                    />
                    <label htmlFor="isMarried">Is Married</label>
                </div>
                <div className="select">
                    <label htmlFor="country">Country: </label>
                    <select name="country" value={user.country} onChange={changeHandler}>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                    </select>
                </div>
                <div className="textarea">
                    <label htmlFor="bio">Bio: </label>
                    <textarea
                        name="bio"
                        value={user.bio}
                        onChange={changeHandler}
                        rows="5"
                        cols="10"
                        placeholder="Enter your details"
                    ></textarea>
                </div>
            </form>
        </>
    );
}

export default RegForm;
