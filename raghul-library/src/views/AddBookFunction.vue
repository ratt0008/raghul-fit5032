<template>
    <div>
      <h1>Add Book</h1>
      <form @submit.prevent="addBook">
        <div>
          <label for="isbn">ISBN:</label>
          <input type="text" v-model="isbn" id="isbn" required />
        </div>
        <div>
          <label for="name">Book Name:</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref } from 'vue';
  
  export default {
    setup() {
      const isbn = ref('');
      const name = ref('');
  
      const addBook = async () => {
        try {
          const response = await axios.post('https://addbook-knjjwnltaa-uc.a.run.app', {
            isbn: isbn.value,
            name: name.value
          });
          isbn.value = '';
          name.value = '';
          alert('Book added successfully!');
        } catch (error) {
          console.error('Error adding book: ', error);
          alert('Error adding book.');
        }
      };
  
      return {
        isbn,
        name,
        addBook
      };
    }
  };
  </script>
  