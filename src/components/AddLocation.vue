<template>
    <div class="add-location">
        <v-card dark color="#ea6f5c">
            <v-card-title>Add Location</v-card-title>
            <v-card-text >
                <v-text-field label="Location"></v-text-field>
                <v-text-field label="Date"></v-text-field>
                <v-text-field label="Time"></v-text-field>
                <v-text-field label="Description"></v-text-field>
                <!-- TODO: Come up with a good search + create flow
                Might not even need this for the MVP -->
                <v-text-field label="Tags"></v-text-field>
                </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'AddLocation'
    }
</script>

<style lang="scss" scoped>
.add-location {
    height: 50%;
    color: white;
}
</style>