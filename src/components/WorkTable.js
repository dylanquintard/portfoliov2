import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function WorksTable() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      // Fetch works
      const worksResponse = await axios.get('https://api.quintarddylan.fr:4000/api/works', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      setWorks(worksResponse.data);
    } catch (error) {
      console.error(`Une erreur s'est produite lors de la récupération des travaux : ${error.message}`);
    }
  };

  const deleteWork = async (workId) => {
    const apiUrl = `https://api.quintarddylan.fr:4000/api/works/${workId}`;

    try {
      const token = localStorage.getItem('token');

      const response = await axios.delete(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log('La suppression a été effectuée avec succès.');

        // Mettre à jour la liste des travaux dans le composant
        const updatedWorks = works.filter((work) => work._id !== workId);
        setWorks(updatedWorks);
      } else {
        console.error(`Erreur lors de la suppression : ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Une erreur s'est produite lors de la suppression : ${error.message}`);
    }
  };

  return (
    <div className='workTable'>
      {works.map((work) => (
        <div key={work._id} className="workItem">
          <div className='workTitle'>{work.titre}</div>
          <div className='workButtons'>
            <div className='editButton'>
              <Link className='link' to={`/editwork/${work._id}`} key={work._id}>
                <img className='edit' src="/images/edit.svg" alt='edit'></img>
              </Link>
            </div>
            <img src="/images/delete.svg" alt="delete" onClick={() => deleteWork(work._id)} className='deleteButton' />
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorksTable;