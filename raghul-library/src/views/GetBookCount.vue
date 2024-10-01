<template>
    <div class="container">
        <div class="inner-container">
            <h1>Book Counter</h1>
            <button @click="getBookCount">Get Book Count</button>
            <p v-if="count !== null">Total number of books: {{ count }}</p>
            <p v-if="error">{{ error }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            count: null,
            error: null,
        };
    },
    methods: {
        async getBookCount() {
            try {
                const response = await axios.get('https://countbooks-knjjwnltaa-uc.a.run.app');
                this.count = response.data.count;
                this.error = null;
            } catch (error) {
                console.error('Error fetching count:', error);
                this.error = 'An error occurred while fetching the count.';
                this.count = null;
            }
        }
    }
};
</script>
