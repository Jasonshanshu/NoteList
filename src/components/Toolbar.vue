<template>
    <div class="container">
        <div class="toolbar-item">
            <ul class="list-unstyled">
                <li><a href="#" class="btn btn-info btn-lg" @click="addNote">
                    <span class="glyphicon glyphicon-plus"></span>
                    </a></li>
                <li><a href="#" class="btn btn-info btn-lg" @click="setLike">
                    <span class="glyphicon glyphicon-star-empty" :class="{islike:activeNote.like}"></span>
                    </a></li>
                <li><a href="#" class="btn btn-info btn-lg" @click="delNote">
                    <span class="glyphicon glyphicon-minus"></span>
                </a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        activeNote(){
            return this.$store.getters.activeNote;
        }
    },
    methods:{
        addNote(){
            return this.$store.dispatch('add_note')
        },
        setLike(){
            return this.$store.dispatch('set_like')
        },
        delNote(){
            return this.$store.dispatch('del_note')
        }
    }

}
</script>

<style>
.container{
    width: 15%;
    height: 100%;
    float: left;    
}
.islike{
    color: yellow;
}
li{
    margin: 10px;
}

</style>
