import './App.css';
import React, {useState} from "react";

function App() {

  const BASE_HOST = 'localhost:8000'

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [uuid, setUuid] = useState('');
  const [uuidResponse, setUuidResponse] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [fetchMessage, setFetchMessage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://${BASE_HOST}/createPerson/`, {
        method: 'POST',
        body: JSON.stringify({ name, age, email }),
      });
      if (response.ok) {
        // Handle success or display an appropriate message
        console.log('Data submitted successfully');
        setSubmitMessage('Data submitted successfully');
        console.log(`Backend Returned ${JSON.stringify(response)}`)
      } else {
        console.log(`Backend Returned ${JSON.stringify(response)}`)
      }
    } catch (error) {
        console.error('Error submitting data');
        setSubmitMessage(`Error submitting data ${error}`);
    }
  };

  const handleGet = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://${BASE_HOST}/getPerson/${uuid}`);
      const data = await response.json();
      setUuidResponse(data);
      setFetchMessage(`Data fetched successfully!`);
      console.log(`Backend Returned ${JSON.stringify(response)}`)
    } catch (error) {
      setUuidResponse('');
      setFetchMessage(`Error fetching data ${error}`);
    }
  };

    return (
    <div>
      <section>
        <h2>Submit Data</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Age:</label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
        <p>{submitMessage}</p>
      </section>

      <section>
        <h2>Get Data by UUID</h2>
        <form onSubmit={handleGet}>
          <div>
            <label>UUID:</label>
            <input type="text" value={uuid} onChange={(e) => setUuid(e.target.value)} />
          </div>
          <button type="submit">Get Data</button>
        </form>
        {uuidResponse && (
        <div>
          <p>Row in the DB with that UUID is: </p>
          <pre>{JSON.stringify(uuidResponse, null, 2)}</pre>
        </div>
      )}
        <p>{fetchMessage}</p>
      </section>
    </div>
  );
}

export default App;
