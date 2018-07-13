<template>
    <div class="editDiv">
        <textarea v-bind:value="activeNoteText" @input="editNote"></textarea>
    </div>
</template>

<script>
export default {
    computed:{
        activeNoteText(){
            return this.$store.getters.activeNote.text;
        }
    },
    methods:{
        editNote(e){
            return this.$store.dispatch('edit_note',e.target.value)
        }
    }
}
</script>

<style>

</style>
