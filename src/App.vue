<template>
  <div>
    <h2>Биржевой стакан</h2>
    <div class="order-book">
      <div class="bids">
        <h3>Ордера на покупку</h3>
        <table>
          <thead>
            <tr>
              <th>Цена</th>
              <th>Количество</th>
              <th>Наш ордер</th>
            </tr>
          </thead>
          <PageTableItem
          :items="bids"
          />
        </table>
      </div>
      <div class="asks">
        <h3>Ордера на продажу</h3>
        <table>
          <thead>
            <tr>
              <th>Цена</th>
              <th>Количество</th>
              <th>Наш ордер</th>
            </tr>
          </thead>
          <PageTableItem
          :items="asks"
          />
        </table>
      </div>
    </div>
    <p>Спред: {{ spread }}</p>
  </div>
</template>

<script>
import PageTableItem from '@/components/PageTableItem.vue';

export default {
  components: {
    PageTableItem
  },
  computed: {
    bids() {
      return this.$store.state.orderBook.bids || [];
    },
    asks() {
      return this.$store.state.orderBook.asks || [];
    },
    spread() {
      const bidsLength = this.bids.length;
      const asksLength = this.asks.length;
      if (bidsLength > 0 && asksLength > 0) {
        const highestBid = this.bids[0][0];
        const lowestAsk = this.asks[0][0];
        return lowestAsk - highestBid;
      }
      return 0;
    },
  },
  created() {
    this.$store.dispatch('fetchOrderBook');
  },
};
</script>

<style>
.order-book {
  display: flex;
}
.bids, .asks {
flex: 1;
}
table {
width: 100%;
}
th, td {
text-align: left;
padding: 8px;
}
th {
background-color: #f2f2f2;
}
tr:nth-child(even) {
background-color: #f9f9f9;
}
span {
font-size: 18px;
}
</style>