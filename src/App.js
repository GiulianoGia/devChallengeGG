export default {
  data() {
    return {
      active: false,
      input: "",
      items: [],
    };
  },
  methods: {
    deleteItem() {
      var input = document.getElementById('inputfield')
      this.input = '';
    },
    selectItem(item) {
      var input = document.getElementById("inputfield");
      input.value = item;
    },
    returnResult: function (results) {
      this.items = results;
    },
    fetchApi: function () {
      
      if (inputfield.value == "") {
        this.active = false;
        this.items = [];
      }
      else {
        this.active = true;
        fetch(`http://transport.opendata.ch/v1/locations?query=${this.input}`)
          .then((response) => response.json())
          .then((data) => this.returnResult(data.stations));
      }
    },
  },
};
