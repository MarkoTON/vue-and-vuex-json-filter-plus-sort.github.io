<template>
  <form>
    <!-- <button @click="FILTER_BY_ACTIVE(true)">click</button> -->
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="Filter by Name" @input="FILTER_BY_NAME($event.target.value)" @blur="$event.target.value = ''">
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Filter by Balance" @input="FILTER_BY_BALANCE($event.target.value)" @blur="$event.target.value = ''">
      </div>
      <div class="col">
        <select class="form-control mr-1 selectStatus" v-model="isActive" @change="FILTER_BY_ACTIVE(isActive)" @blur="isActive = 'all'" >
          <option selected v-bind:value="'all'">Both</option>
          <option v-bind:value="true">Active</option>
          <option v-bind:value="false">Not Active</option>
        </select>
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="By Registered" @input="FILTER_BY_REGISTERED($event.target.value)" @blur="$event.target.value = ''">
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Filter by country" @input="FILTER_BY_COUNTRY($event.target.value)" @blur="$event.target.value = ''">
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Last State"  @input="FILTER_BY_STATE($event.target.value)" @blur="$event.target.value = ''">
      </div>
    </div>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default { 
  data(){
    return {
      isActive: 'all',
    }
  },
  methods:{
    ...mapMutations([
      'FILTER_BY_ACTIVE',
      'FILTER_BY_NAME',
      'FILTER_BY_COUNTRY',
      'FILTER_BY_STATE',
      'FILTER_BY_REGISTERED',
      'FILTER_BY_BALANCE'
    ])
  }
}
</script>

<style>

</style>