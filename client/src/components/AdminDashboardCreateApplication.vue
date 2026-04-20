<template>
    <div class="admin-dashboard-create-application">
        <main class="dashboard-panel">
        <div class="dashboard-title">
            <h1>DASHBOARD</h1>
        </div>
    
        <div class="create-application-form">
            <h2>Create New Application</h2>
            <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="appName">Application Name</label>
                <input type="text" id="appName" v-model="appName" required />
            </div>
            <div class="form-group">
                <label for="appDescription">Description</label>
                <textarea id="appDescription" v-model="appDescription" required></textarea>
            </div>
            <button type="submit">Create Application</button>
            </form>
        </div>
        </main>
    </div>
</template>