import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../stylesheets/MatchTable.css';

interface Participant {
  id: number;
  name: string;
  team: string;
  rental: boolean;
}

interface NewPlayer {
  id: number | null;
  name: string;
  team: string;
  rental: boolean;
}

const MatchTable: React.FC = () => {
  const [participants, setParticipants] = useState<Array<Participant>>([]);
  const [showModal, setShowModal] = useState(false);
  const [newPlayer, setNewPlayer] = useState<NewPlayer>({
    id: null,
    name: '',
    team: '',
    rental: false,
  });

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/participants/1`);
        setParticipants(response.data.participants);
      } catch (error) {
        console.error('Error fetching participants:', error);
      }
    };

    fetchParticipants();
  }, []);

  const resetNewPlayer = () => {
    setNewPlayer({
      id: null,
      name: '',
      team: '',
      rental: false,
    });
  };

  const addPlayer = async () => {
    try {
      // Make API request to add a new participant
      const response = await axios.post(`http://127.0.0.1:5000/api/participants/1`, newPlayer);

      // Close the modal immediately
      setShowModal(false);

      resetNewPlayer();

      // Add a small delay before fetching the updated participants
      setTimeout(async () => {
        // Update participants state with the new player
        const updatedResponse = await axios.get(`http://127.0.0.1:5000/api/participants/1`);
        setParticipants(updatedResponse.data.participants);
      }, 100); // Adjust the delay as needed

    } catch (error) {
      console.error('Error adding participant:', error);
      // Handle the error
    }
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.name === 'rental' ? e.target.checked : e.target.value;

    setNewPlayer({
      ...newPlayer,
      [e.target.name]: value,
    } as NewPlayer);
  };

  return (
    <div className='match-table'>
      <table className='table'>
        <thead>
          <tr>
            <th>Número</th>
            <th>Nombre</th>
            <th>Equipo</th>
            <th>Rental</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr key={participant.id}>
              <td className='narrow center'>{index + 1}</td>
              <td className='broad'>{participant.name}</td>
              <td className='broad'>{participant.team}</td>
              <td className='narrow center'>{participant.rental ? 'Si' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='add-button center' onClick={() => setShowModal(true)}>
        <p>Agregar</p>
      </div>

      {/* Modal for adding a new player */}
      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Agregar Jugador<span className='close' onClick={() => setShowModal(false)}>
                ❌
              </span></h2>
            <form className='add-player-form'>
              <label>
                Nombre
              </label>
              <input type='text' name='name' value={newPlayer.name} onChange={handleInputChange} />
              <label>
                Equipo
              </label>
              <input type='text' name='team' value={newPlayer.team} onChange={handleInputChange} />
              <label>
                Rental
                <input className='checkbox' type='checkbox' name='rental' checked={newPlayer.rental} onChange={handleInputChange} />
              </label>
              <button type='button' onClick={addPlayer}>
                Agregar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchTable;
