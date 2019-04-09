let app = new Vue({
  el: '#app',
  data: {
    text: '',
    items: []
  },
  methods: {
    addItem: function() {
      if (this.text.length > 0) {
        this.items.unshift({
          id: Date.now(),
          text: this.text,
          done: false
        });
      }
      this.clearInput(); 
    },
    clearInput: function() {
      this.text = '';
    },
    markItemAsDone: function(id) {
      let itemIndex = this.items.findIndex(
        function(item) {
          return item.id == id;
        }
      );
      let item = this.items[itemIndex];
      item.done = !item.done;
      if (item.done) {
        this.items.push(this.items.splice(itemIndex, 1)[0]);
      } else {
        this.items.unshift(this.items.splice(itemIndex, 1)[0]);
      }
    }
  }
});