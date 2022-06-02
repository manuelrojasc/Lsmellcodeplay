export default {
    template:`
      <section>
        <h1>survey</h1>
        <form @submit.prevent="save">
          <button type="submit">Submit</button>
        </form>
      </section>
    `,
    methods: {
      save() {  
        alert("this.save");
      }
    }
}