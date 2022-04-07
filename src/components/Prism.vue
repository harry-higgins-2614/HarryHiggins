<template>

<pre :class="'language-' + props.language">
    <code>
        {{ props.code }}
    </code>
    </pre>
</template>
<script setup>
import { defineProps } from "vue"

const props = defineProps({
    language: String,
    code: String
})

</script>
