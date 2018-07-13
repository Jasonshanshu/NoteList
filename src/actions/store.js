import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    NotesList:[],
    activeNote:{}
}

const mutations={
    ADD_NOTE(state){
        const newNote={
            text:'new Note',
            like:false
        };
        state.NotesList.push(newNote);
        state.activeNote=newNote;
    },
    SET_LIKE(state){
        state.activeNote.like=!state.activeNote.like;
    },
    DEL_NOTE(state){
        if(state.NotesList.length>0){
            for(var i=0; i<state.NotesList.length; i++) {
                if(state.NotesList[i] == state.activeNote) {
                    state.NotesList.splice(i, 1);
                  break;
                }
            }
            state.activeNote=state.NotesList[state.NotesList.length-1];
        }
    },
    EDIT_NOTE(state,text){
        state.activeNote.text=text;
    },
    SET_ACTIVE_NOTE(state,note){
        state.activeNote=note;
    }
}

const actions={
    add_note({commit}){
        commit('ADD_NOTE')
    },
    set_like({commit}){
        commit('SET_LIKE')
    },
    del_note({commit}){
        commit('DEL_NOTE')
    },
    edit_note({commit},note){
        commit('EDIT_NOTE',note)
    },
    set_active({commit},note){
        commit('SET_ACTIVE_NOTE',note)
    }
}

const getters={
    NotesList:state=>{
        return state.NotesList
    },
    activeNote:state=>{
        return state.activeNote
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})