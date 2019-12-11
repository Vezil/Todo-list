<template>
    <div>
        
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