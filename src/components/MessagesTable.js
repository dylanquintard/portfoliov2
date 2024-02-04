import { useState, useEffect } from 'react';
import axios from 'axios';

function MessagesTable({ messages }) {
  const [visibleMessages, setVisibleMessages] = useState({});
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://api.quintarddylan.fr:4000/api/contact', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.status);

        if (response.status === 200) {
          const fetchedMessages = response.data;
          setAllMessages(fetchedMessages);
        } else {
          console.error(response.data);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    getMessages();
  }, []);

  const toggleMessageVisibility = (messageId) => {
    setVisibleMessages((prevVisibleMessages) => ({
      ...prevVisibleMessages,
      [messageId]: !prevVisibleMessages[messageId],
    }));
  };

  const handleDeleteMessage = async (messageId) => {
    const apiUrl = `https://api.quintarddylan.fr:4000/api/contact/${String(messageId)}`;

    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const updatedMessages = allMessages.filter((message) => message._id !== messageId);
        setAllMessages(updatedMessages);
      } else {
        console.error(`Échec de la suppression. Code de réponse : ${response.status}`);
      }
    } catch (error) {
      console.error(`Une erreur s'est produite : ${error.message}`);
    }
  };

  return (
      <div className='messages'>
        {allMessages.map((message) => (
          <div className='messageBox' key={message._id}>
            <div className='info'>
              <div className='name'>Nom : {message.name}</div>
              <div className='email'>E-mail : {message.email}</div>
              <div className='subject'>Sujet : {message.subject}</div>
            </div>
            <div className='message' style={{ display: visibleMessages[message._id] ? 'block' : 'none' }}>
              {message.message}
            </div>
            <div className='buttonContainer'>
              <button className='toggleButton' onClick={() => toggleMessageVisibility(message._id)}>
                {visibleMessages[message._id] ? 'Masquer' : 'Afficher'} le message
              </button>
              <button className='deleteButton' onClick={() => handleDeleteMessage(message._id)}>
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
  );
}

export default MessagesTable;