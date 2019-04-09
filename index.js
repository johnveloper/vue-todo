let app = new Vue({
  el: '#app',
  data: {
    text: '',
    items: [],
    settingsModalShown: false,
    helpModalShown: false,
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
    handleItemTap: function(id, e) {
      let itemIndex = this.items.findIndex(
        function(item) {
          return item.id == id;
        }
      );
      if (e.shiftKey) { // remove item
        this.items.splice(itemIndex, 1);
      } else { // toggle completion and move to the top/bottom
        let item = this.items[itemIndex];
        item.done = !item.done;
        if (item.done) {
          this.items.push(this.items.splice(itemIndex, 1)[0]);
        } else {
          this.items.unshift(this.items.splice(itemIndex, 1)[0]);
        }
      }
    },
    toggleSettingsModal: function() {
      this.settingsModalShown = !this.settingsModalShown;
    },
    toggleHelpModal: function() {
      this.helpModalShown = !this.helpModalShown;
    },
  }
});