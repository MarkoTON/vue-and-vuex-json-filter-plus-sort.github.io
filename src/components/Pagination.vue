<template>
  <div>
    <div class="mr-2 d-inline-block">
      <select class="form-control mr-1 selectStatus clickable" v-model="pageSize" @change="UPDATE_VISIBLE_USERS({pageSize,currentPage})">
        <option v-bind:value="50">50 per page</option>
        <option v-bind:value="100">100 per page</option>
        <option v-bind:value="200">200 per page</option>
        <option v-bind:value="500">500 per page</option>
        <option v-bind:value="1000">1000 per page</option>
        <option v-bind:value="5000">5000 per page</option>
      </select>
    </div><!-- mr-2 -->

    <div v-if="totalPages() > 0" class="pagination-wrapper text-center">
      <span v-if="showPreviousLink()" class="pagination-btn" v-on:click="updatePage(currentPage - 1)"> &lsaquo; </span>
      {{ currentPage + 1 }} of {{ totalPages() }}
      <span v-if="showNextLink()" class="pagination-btn" v-on:click="updatePage(currentPage + 1)"> 	&rsaquo; </span>
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
      pageSize: 50,
      currentPage: 0
    }
  },
  computed: {
    ...mapMutations([
      'UPDATE_VISIBLE_USERS'
    ]),
    ...mapGetters([
      'updateHomePage'
    ])
  },
  methods: {
    updatePage(pageNumber) {
      this.$emit('page-update', pageNumber);
    },
    totalPages() {
      // console.log(this.stateUsers);
      // console.log(this.stateUsers.length);
      // console.log(Math.ceil(this.stateUsers.length / this.pageSize));
      return Math.ceil(this.updateHomePage.length / this.pageSize);
    },
    showPreviousLink() {
      return this.currentPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage == (this.totalPages() - 1) ? false : true;
    }
  },
  created(){
    // console.log(this.currentPage)
    // console.log(this.pageSize)
    // console.log(this.updatePage(2))
    console.log(this.totalPages());
  }
}

</script>
<style>
.pagination-btn {
  cursor: pointer;
}
</style>
