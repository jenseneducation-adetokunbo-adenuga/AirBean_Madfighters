    <template>
<main v-bind="order in order" class="wrapper">
    <p id="order"> Ordernummer: <span style="font-weight:700;">{{order.orderNr}}</span></p>
    <img class="drone" src="../assets/graphics/drone.svg" alt="drone">
    <h1 id="order-heading">Din beställning är på väg!</h1>
    <p id="ETA">{{order.eta}} minuter</p>
    <button class="btn">Ok, cool!</button>
</main>
</template>

<script>
export default {
        // From Ade ????
  name: "OrderStatus",
  computed: {
    order() {
      return this.$store.state.order;
    }
  },
  //_______________
    created() {
        this.$store.dispatch("getApiOrder");

}
}
</script>

<style scoped>

:root {
    background: #E5674E;
}
.wrapper {
    text-align: center;
    padding:3%;
    background: #E5674E;
    height:100vh;
    }
p {
    font-family: montserrat, helvetica, sans-serif;
    font-size: 1.4em;
    margin: 16px 0;
    color: #fff;
}

#order {
    font-family: montserrat, helvetica, sans-serif;
    margin: 16px 0;
    font-size: 1em;
}


#order-heading{
    font-family: 'playfair display';
    font-size: 4em;
    font-weight: 700;
    line-height: 1.4em;
    color: #fff;
} 

.btn {
    width: 10em;
    height: 3em;
    border-radius: 250px;
    font-size: 1.5em;
    font-family: 'Playfair Display';
    font-weight: 700;
    margin-top: 9%;
}

 .drone {  
        animation:rotate 6s ease-in-out infinite alternate ;

}
@keyframes rotate { 
    0%  { transform: translate(0.2rem, 1.0rem) rotate(-2.5deg)}
    25% {transform: translate(-0.2rem, 0.7rem) rotate(2deg) }
    50% {transform: translate(0.0rem, 0.2rem) rotate(-2deg)}
    75% {transform: translate(0.2rem, 0.5rem) }
    100% {transform: translate(-0.1rem, -0.2rem) rotate(0.5deg)} 
    } 

</style>
    
    
