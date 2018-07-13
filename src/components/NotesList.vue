<template>
    <div class="notelist">
        <h2>NOTELIST</h2>
        <h3>
            <span @click="show='all'">All</span>
            &nbsp|&nbsp
            <span @click="show='like'">LIKE</span>
        </h3>
        <div class="node-item">
            <ul v-for="note in notelist">
                <li><p v-model="note.text" v-bind:class="{active:activeNote==note}"  @click="editNote(note)">{{note.text}}</p></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {show:'all'}
    },
    computed:{
        notelist(){
            if(this.show=='like'){
                return this.$store.getters.NotesList.filter(note=>note.like)
            }else{
                return this.$store.getters.NotesList;
            }
        },
        activeNote(){
            return this.$store.getters.activeNote;
        }
    },
    methods:{
        editNote(note){
            return this.$store.dispatch('set_active',note)
        }
    }

}
</script>

<style>
.notelist{
        float: left;
        margin-top: -70px;
}
.active{
    background-color: royalblue
}
</style>
