<template>
    <pre v-if="jsondata">{{ jsondata }}</pre>
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
        this.countBookAPI();
    },
    methods: {
        async countBookAPI() {
            try {
                const response = await axios.get('https://countbooks-knjjwnltaa-uc.a.run.app');
                this.jsondata = response.data;
                this.error = null;
            } catch (error) {
                console.error('Error fetching count:', error);
                this.error = 'An error occurred while fetching the count.';
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
