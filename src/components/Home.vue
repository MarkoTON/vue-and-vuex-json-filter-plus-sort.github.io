<template>
  <div class="container mt-4">
    <Pagination />
    <FilterTable />
    <TableUsers />
  </div>
</template>

<script>
import FilterTable from './FilterTable.vue'
import TableUsers from './TableUsers';
import Pagination from './Pagination';

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
    TableUsers,
    FilterTable,
    Pagination
  },
  computed:{
  },
  methods:{
  },
  beforeCreate() {
    this.$store.dispatch("getPosts");
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
