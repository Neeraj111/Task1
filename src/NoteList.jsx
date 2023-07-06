// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

// const NoteList = () => {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   const fetchNotes = async () => {
//     try {
//       const response = await axios.get('https://api.gyanibooks.com/library/get_dummy_notes');
//       setNotes(response.data);
//     } catch (error) {
//       console.error('Error fetching dummy notes:', error);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h4" align="center" gutterBottom>
//         Dummy Notes
//       </Typography>
//       <List>
//         {notes.map((note) => (
//           <ListItem key={note.id}>
//             <ListItemText primary={[note.id,' ', note.title]} secondary={[note.category, <br />,note.notes]} />
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default NoteList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import './NoteList.css'; // Import the CSS file

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('https://api.gyanibooks.com/library/get_dummy_notes');
      setNotes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching dummy notes:', error);
    }
  };

  return (
    <Container className="container">
      <Typography variant="h4" align="center" gutterBottom className="title">
        Dummy Notes
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          {notes.map((note) => (
            <ListItem key={note.id} className="listItem">
              <ListItemText className="body" primary={[note.id,' ', note.title]} secondary={[note.category, <br />,note.notes]} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default NoteList;
