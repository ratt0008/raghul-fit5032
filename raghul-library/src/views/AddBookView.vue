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
  
  <div>
    <BookList />
  </div>
  
  <div>
    <h1>Delete Book</h1>
    <label for="bookName">Book Name:</label>
    <input type="text" v-model="bookName" id="bookName" required />
    <button @click="deleteBook">Delete Book</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import db from '../firebase/init.js';
import { collection, addDoc, doc, deleteDoc, getDocs, query, where } from 'firebase/firestore';
import BookList from '../components/BookList.vue';

export default {
  setup() {
    const isbn = ref('');
    const name = ref('');
    const bookName = ref('');

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number');
          return;
        }

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        });

        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
      } catch (error) {
        console.error('Error adding book: ', error);
      }
    };

    const deleteBook = async () => {
      try {
        const bookQuery = query(collection(db, 'books'), where('name', '==', bookName.value));
        const querySnapshot = await getDocs(bookQuery);
        if (!querySnapshot.empty) {
          querySnapshot.forEach(async (docSnap) => {
            await deleteDoc(doc(db, 'books', docSnap.id));
          });
          bookName.value = '';
          alert('Book deleted successfully!');
        } else {
          alert('Book not found');
        }
      } catch (error) {
        console.error('Error deleting book: ', error);
      }
    };

    return {
      isbn,
      name,
      addBook,
      bookName,
      deleteBook
    };
  },
  components: {
    BookList
  }
};
</script>
