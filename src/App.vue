<template>
  <div id="app">
    <h1>The Super Quiz</h1>
    <hr>
    <transition name="flip" mode="out-in" appear>
      <component :is="correctAnswer ? 'answer-card' : 'question-card'"
                 @setCorrectAnswer="correctAnswer = $event"

      ></component>
    </transition>
  </div>
</template>

<script>
  import QuestionCard from "./components/QuestionCard";
  import AnswerCard from "./components/AnswerCard";

    export default {
        name: 'app',
        components: {
            QuestionCard,
            AnswerCard
        },
        data () {
            return {
              correctAnswer: false
            }
        },
        computed: {

        },
        methods: {

        },
        created() {
            console.log(`App is created`);
        }
    }
</script>

<style lang="scss" src="./App.scss">

</style>
