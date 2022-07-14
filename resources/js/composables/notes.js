import axios from "axios"
import { ref } from "vue"

export default function useNotes() {
  const notes = ref([])

  const getNotes = async () =>  {
    const response = await axios.get('/api/notes')
    notes.value = response.data.data;
  }

  const addNote = async (data) => {
    console.log({ data });
    await axios.post('api/notes', data);
  }

  const destroyNote = async (id) => {
    await axios.delete(`/api/notes/${id}`)
  }
  return {
    notes,
    getNotes,
    addNote,
    destroyNote
  }
}