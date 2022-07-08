<template>
  <div class="form-wrapper">
    <form>
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">List Name</label>
        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
      </div>
      <button type="submit" class="text-white bg-blue-700focus:ring-4 focus:outline-nonefont-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5">Create List</button>
    </form>
  </div>
</template>
<script>
export default {
  setup: () => ({
    title: 'Welcome to the home page'
  })
}
</script>