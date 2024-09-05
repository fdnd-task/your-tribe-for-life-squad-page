<script>
	export let data;
    import ButtonComponent from './button.svelte';
</script>

<h1>Example:</h1>
<h2>{data.persons[2].name}</h2>
<p>{data.persons[2].prefix} {data.persons[2].surname}</p>

<ButtonComponent />


<style>
    button{

        background-color: #ffdddd;
        color: black;
        font-size: 16px;
        padding: 16px 30px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        text-align: center;
    }
</style>