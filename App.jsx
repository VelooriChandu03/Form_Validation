function App() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log("Form Successfully Submitted..");
        console.log("FirstName:" + form[0].value);
        console.log("LastName:" + form[1].value);
        console.log("Password:" + form[6].value)
    };

    return (
        <center>
            <style>{`
            
        table{
          margin-left: 80px;
          margin-top:100px;
          width:85%;
          border-radius:5%;
          background: #ffffff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 20px rgba(0, 0, 0, 0.08);
        }
        thead {
          text-align: center;
        }
        form {
          font-family: sans-serif;
          max-width: 450px;
          color: #333;
          text-align: left;
        }
        th, td {
          padding: 8px 4px;
          text-align: left;
          vertical-align: middle;
        }
        th {
          font-weight: normal;
        }
        input[type="text"],
        input[type="number"],
        input[type="tel"],
        input[type="password"] {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }
        input:focus {
          outline: none;
          border-color: #0076ff;
        }
        tr:last-child th {
          padding-top: 15px;
          text-align: center;
        }
        button {
          padding: 8px 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background: #f5f5f5;
          cursor: pointer;
        }
        button[type="submit"] {
          background: #0076ff;
          color: white;
          border-color: #0076ff;
        }
        button:hover {
          opacity: 0.9;
        }
      `}</style>
            <div style={{backgroundColor: "lightgray"}}>
            <form onSubmit={handleSubmit} action={'Response.jsx'}>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="3">
                                <h2>User Authentication</h2>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><label htmlFor="firstName">First Name: </label></th>
                            <td colSpan="2"><input type="text" name="firstName" id="firstName" placeholder="Enter First Name" /></td>
                        </tr>
                        <tr>
                            <th><label htmlFor="lastName">Last Name:</label></th>
                            <td colSpan="2"><input type="text" name="lastName" id="lastName" placeholder="Enter Last Name" /></td>
                        </tr>
                        <tr>
                            <th><label htmlFor="phone">Phone no: </label></th>
                            <td colSpan="2"><input type="tel" name="phone" id="phone" placeholder="Enter Phone Number" /></td>
                        </tr>
                        <tr>
                            <th><label>Gender:</label></th>
                            <td colSpan="2">
                                <input type="radio" name="gen" id="male" value="Male" />
                                <label htmlFor="male" style={{ marginRight: '15px' }}>Male</label>

                                <input type="radio" name="gen" id="female" value="Female" />
                                <label htmlFor="female">Female</label>
                            </td>
                        </tr>
                        <tr>
                            <th><label htmlFor="place">Place:</label></th>
                            <td colSpan="2"><input type="text" name="place" id="place" placeholder="Enter Place" /></td>
                        </tr>
                        <tr>
                            <th><label htmlFor="password">Password:</label></th>
                            <td colSpan="2"><input type="password" name="password" id="password" placeholder="Enter Password" /></td>
                        </tr>
                        <tr>
                            <th colSpan="3">
                                <button type="submit">Submit</button> &emsp;
                                <button type="reset">Clear</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </form>
            </div>
        </center>
        
    );
}

export default App;
