<template>
    <div>
        <div class="spinner"  ><div class="lds-facebook"><div></div><div></div><div></div></div>  </div>
    </div>
</template>
<script>
export default {
    created(){
        this.$store.dispatch('destroyToken')
        this.$store.dispatch('clearTodos')
        .then(response => {
                this.$router.push({ path:'/' })
            })
    }
}
</script>