<template>
    <div>
        <h2>Article Component</h2>
        <h2 :="$attrs">{{ title }}</h2>
        <h2>Likes: {{ likes }}</h2>
        <h2>Published: {{ isPublished ? 'Yes' : 'No' }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Article',
    props: {
        title: {
            type: String,
            required: true,
            default: 'Default Article Title'
        },
        likes: Number,
        isPublished: Boolean,
    },
    inheritAttrs: false,
}
</script>

<style>

</style>