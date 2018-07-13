<template>
  <div id="app">
    <Toolbar></Toolbar>
    <NoteList></NoteList>
    <Editor></Editor>
  </div>
</template>

<script>
import Toolbar from './components/toolbar';
import NoteList from './components/NotesList';
import Editor from './components/Editor';

export default {
  name: 'App',
  components: {
    Toolbar,
    NoteList,
    Editor
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
