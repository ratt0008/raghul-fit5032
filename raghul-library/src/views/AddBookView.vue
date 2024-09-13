<template>
    <div>
        <h1>Add Book</h1>
        <form @submit.prevent="add-book">
            <div>
                <label for="isbn">ISBN:</label>
                <input type="text" v-model="isbn" id="isbn" required />
            </div>
        </form>
    </div>
</template>