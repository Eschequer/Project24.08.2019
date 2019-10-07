<template>
  <div class="answer-card">
    <h1>That's Correct!</h1>
    <hr>
    <button @click="setNextQuizCard">Next Question</button>
  </div>
</template>

<script>
    export default {
        name: "AnswerCard",
        data() {
            return {

            }
        },
        methods: {
            setNextQuizCard() {
                this.$emit('setCorrectAnswer', false);
            }
        }
    }
</script>

<style scoped lang="scss">
  .answer-card {
    width: 80%;
    background-color: palegoldenrod;
    text-align: center;
    padding: 10px;
    margin-top: 20px;
    border: 2px solid lightgray;

    button {
      padding: 7px;
      background: dodgerblue;
      color: white;
      cursor: pointer;
      border-radius: 5px;
    }

    button:hover {
      background-color: darken(dodgerblue, 20);
    }
  }

</style>
