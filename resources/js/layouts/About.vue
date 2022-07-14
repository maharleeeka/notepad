<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "../../store/useUser";
const userStore = useUserStore();
const { userName } = storeToRefs(userStore);
const { setName } = userStore;

const router = useRouter();

const addNickName = () => {
  setName(userName.value);
  router.push({ name: 'notes.view' });
}
</script>

<template>
  <div class="flex justify-center mt-10">
    <div class="mb-3 xl:w-96">
      <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
        >User Name</label
      >
      <form @submit.prevent="addNickName">
        <input
        type="text"
        class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="user-name"
        v-model="userName"
      />
      <button type="submit" class="mt-5 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Use Name</button>
      </form>
    </div>
  </div>
</template>