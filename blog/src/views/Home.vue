<template>
  <h1 ref="header">Home Page</h1>
  <p> My name is {{ name }} - my age is {{ age }}</p>
  <p>
    Person => name= {{ person.name }} | age is {{ person.age }}
  </p>
  <h1>{{ count }}</h1>
  <button @click="sayHello">Say</button>
  <button @click="count++" >inc count</button>
  <button @click="age++" >Inc Age</button>
  <p>
    <input type="text" v-model="name" >
  </p>

  <hr>

  <input type="text" v-model="search"> <span>{{ search }}</span>
  <div v-for="course in result">{{ course }}</div>

</template>

<script>
// @ is an alias to /src
import {reactive, ref, computed, watch, watchEffect} from 'vue'
export default {
  name: 'Home',
  setup(){

    let header = ref(null);

    //my data
    let name= ref('Salim ELABOUDI');
    let age = ref(33);
    let person = reactive({name: "ISRAE ELABOUDI", age: 6});

    const search = ref('');
    const courses = ref(['angular', 'laravel','vueJS', 'php', 'NodeJS']);

    // Computed
    const result = computed(() => {
      return courses.value.filter(course => course.includes(search.value))
    });

    //Watch
    watch(search, () => {
      console.log('i watch ', search.value);
    })

    watchEffect(() => {
      console.log('watch EFFECT', search.value);
    })

    //my methods
    const sayHello = () => {
        console.log(header.value)
        header.value.classList.add('my-2')
        header.value.textContent = "salim vous souhaite les bienvenue";
        name.value = 'Adam';
        person.name = "Bouchra";
        person.age = 30;
      }
    

    return {
        name, age, sayHello, header, person, search, courses,result
      }
  },

  data() {
    return {
      count: 0
    }
  },
  
  
}
</script>
