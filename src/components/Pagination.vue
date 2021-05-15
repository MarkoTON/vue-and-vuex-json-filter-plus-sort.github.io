<template>
  <div>
    <div class="mr-2 d-inline-block">
      <select class="form-control mr-1 selectStatus clickable" v-model="pageSize" @change="showPerPage">
        <option v-bind:value="20">20 per page</option>
        <option v-bind:value="50">50 per page</option>
        <option v-bind:value="100">100 per page</option>
        <option v-bind:value="200">200 per page</option>
        <option v-bind:value="500">500 per page</option>
        <option v-bind:value="1000">1000 per page</option>
      </select>
    </div><!-- mr-2 -->

    <div v-if="totalPages() > 0" class="pagination-wrapper text-center">
      <span v-if="showPreviousLink()" class="pagination-btn" v-on:click="updatePagePrev"> &lsaquo; </span>
      {{ currentPage }} of {{ totalPages() }}
      <span v-if="showNextLink()" class="pagination-btn" v-on:click="updatePageNext"> 	&rsaquo; </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'pagination',
  props: ['stateUsers'],
  data(){
    return {
      pageSize: 20,
      currentPage: 1
    }
  },
  computed: {
    ...mapMutations([
      'SHOW_BY_PAGE',
      'UPDATE_PAGE'
    ]),
    ...mapGetters([
      'updateHomePage'
    ])
  },
  methods: {
    showPerPage(){
      this.$store.commit('SHOW_BY_PAGE', this.pageSize)
    },
    updatePageNext() {
      this.currentPage += 1
      this.$store.commit('UPDATE_PAGE', 1)
    },
    updatePagePrev(){
      this.currentPage -= 1
      this.$store.commit('UPDATE_PAGE', -1)
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
