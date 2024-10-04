<template>
    <div class="container">
        <div class="inner-container">
            <h1>All Books</h1>
            <pre v-if="jsondata">{{ jsondata }}</pre>
            <p v-if="error">{{ error }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            jsondata: null,
            error: null,
        };
    },
    mounted() {
        this.getAllBooks();
    },
    methods: {
        async getAllBooks() {
            try {
                const response = await axios.get('https://getallbooks-knjjwnltaa-uc.a.run.app');
                this.jsondata = response.data;
                this.error = null;
            } catch (error) {
                console.error('Error fetching books:', error);
                this.error = 'An error occurred while fetching the books.';
                this.jsondata = null;
            }
        }
    }
};
</script>

<style scoped>
.container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 80vw;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
}

.inner-container {
    text-align: center;
}
</style>
