<template>
  <div style="display: flex; align-items: center; flex-direction: column">
    <div class="">
      <h1 class="font-medium leading-tight text-5xl mt-0 mb-2"> {{note.title}} </h1>
      <h5 class="font-medium leading-tight text-xl mt-0 mb-2"> {{note.description}} </h5>
    </div>
    <div class="grid grid-cols-2 gap-2" style="width: 100%">
      <div class="form-wrapper">
        <form @submit.prevent="updateNote">
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
            <input
              v-model="note.title"
              id="title"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>

            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
            <textarea
              v-model="note.description"
              id="description"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <button type="submit" class="text-white bg-blue-700focus:ring-4 focus:outline-nonefont-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5">Update</button>
        </form>
      </div>
      <div class="flex justify-start mt-20">
          <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
            <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg bg-blue-600 text-white">
              An active item
            </li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">A second item</li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">A third item</li>
            <li class="px-6 py-2 border-b border-gray-200 w-full">A fourth item</li>
            <li class="px-6 py-2 w-full rounded-b-lg">And a fifth one</li>
          </ul>
      </div>
    </div>
    
  </div>
</template>
<script>
import useNotes from "../composables/notes";
import { onMounted } from "vue";
export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  setup (props) {
    const { note, getNote, editNote } = useNotes()
    onMounted(getNote(props.id));

    const updateNote = async () => {
      await editNote(props.id);
    }
    return {
      title: 'Edit Page',
      note,
      updateNote
    }
  }
}
</script>