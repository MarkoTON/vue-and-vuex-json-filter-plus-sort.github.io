<template>
  <div class="d-flex justify-content-between align-items-center mb-3">
    <h1>Filtering and Sorting by using Veux:</h1>
    <div class="d-flex align-items-center">
      <div class="me-3">
        <select class="form-control mr-1 selectStatus clickable" v-model="pageSize" @change="showPerPage">
          <option v-bind:value="20">20 per page</option>
          <option v-bind:value="50">50 per page</option>
          <option v-bind:value="100">100 per page</option>
          <option v-bind:value="200">200 per page</option>
          <option v-bind:value="500">500 per page</option>
          <option v-bind:value="1000">1000 per page</option>
        </select>
      </div>

      <div>
        <div v-if="totalPages() > 0" class="pagination-wrapper text-center">
          <span v-if="showPreviousLink()" class="pagination-btn" v-on:click="updatePagePrev"> &lsaquo; </span>
          {{ currentPage }} of {{ totalPages() }}
          <span v-if="showNextLink()" class="pagination-btn" v-on:click="updatePageNext"> 	&rsaquo; </span>
        </div>
      </div>
    </div><!-- mr-2 -->

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'pagination',
  data(){
    return {
      pageSize: 20,
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters([
      'updateHomePage'
    ]),
    ...mapActions([
      'update_page',
      'show_by_page'
    ])
  },
  methods: {
    showPerPage(){
      this.currentPage = 1;
      this.$store.dispatch('show_by_page', this.pageSize)
    },
    updatePageNext() {
      this.currentPage += 1
      this.$store.dispatch('update_page', 1)
    },
    updatePagePrev(){
      this.currentPage -= 1
      this.$store.dispatch('update_page', -1)
    },
    totalPages() {
      return Math.ceil(this.updateHomePage.length / this.pageSize);
    },
    showPreviousLink() {
      return this.currentPage == 1 ? false : true;
    },
    showNextLink() {
      return this.currentPage == (this.totalPages()) ? false : true;
    }
  },
  created(){
    console.log(this.totalPages());
  }
}

</script>
<style>
.pagination-btn {
  cursor: pointer;
}
</style>
