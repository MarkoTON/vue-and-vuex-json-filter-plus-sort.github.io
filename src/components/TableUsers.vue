<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col" >#</th>
          <th scope="col" class="clickable" @click="SORT_BY_NAME" v-on:click="orderName = !orderName">Full Name <i class=" fas" :class="{'fa-sort-alpha-down' : !orderName,'fa-sort-alpha-up': orderName }"></i></th>
          <th scope="col" class="clickable" @click="SORT_BY_BALANCE" v-on:click="orderBalance = !orderBalance">Balance <i class=" fas " :class="{'fa-sort-amount-down' : !orderBalance,'fa-sort-amount-up': orderBalance }"></i></th>
          <th scope="col" class="clickable" @click="SORT_BY_IS_ACTIVE" v-on:click="orderActive = !orderActive">Is Active <i class=" fas " :class="{'fa-toggle-on' : !orderActive,'fa-toggle-off': orderActive }"></i></th>
          <th scope="col" class="clickable" @click="SORT_BY_DATE" v-on:click="orderDate = !orderDate">Registered <i class=" fas " :class="{'fa-sort-numeric-up' : !orderDate,'fa-sort-numeric-down': orderDate }"></i></th>
          <th scope="col" class="clickable" @click="SORT_BY_COUNTRY" v-on:click="orderCountry = !orderCountry">Country <i class=" fas " :class="{'fa-sort-alpha-down' : !orderCountry,'fa-sort-alpha-up': orderCountry }"></i></th>
          <th scope="col" class="clickable" @click="SORT_BY_CITY" v-on:click="orderState = !orderState">State <i class=" fas " :class="{'fa-sort-alpha-down' : !orderState,'fa-sort-alpha-up': orderState }"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in paginatedData" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.fullName}}</td>
          <td>{{item.balance}}</td>
          <td>{{item.isActive}}</td>
          <td>{{item.registered}}</td>
          <td>{{item.country}}</td>
          <td>{{item.name}}</td>
        </tr>
      </tbody>
    </table> 
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  data() {
    return {
      orderName: true,
      orderBalance: false,
      orderActive: false,
      orderDate: true,
      orderCountry: true,
      orderState: true,
      users: []
    }
  },
  computed:{
    // All users from API ready to loop
    ...mapGetters(['paginatedData']),
  },
  methods:{
    ...mapMutations([
      'SORT_BY_NAME',
      'SORT_BY_COUNTRY',
      'SORT_BY_CITY',
      'SORT_BY_BALANCE',
      'SORT_BY_IS_ACTIVE',
      'SORT_BY_DATE'
    ])
  },
}
</script>

<style>

</style>