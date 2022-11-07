<script>
  import "../node_modules/bulma/css/bulma.css";
  import { Grid } from "gridjs";
  import { onMount } from "svelte";
  import "gridjs/dist/theme/mermaid.css";
  let container;
  let columns = null;
  export let query;
  let tableData = null;
  onMount(async () => {
    console.log(query);
    var table = document.createElement("div");
    table.setAttribute("id", "tabledata");
    // table.classList.add("container");
    var fetchData = new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/query/${query}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          resolve(data);
        });
    });
    tableData = new Grid({
      search: true,
      sort: true,
      data: await fetchData,
      style: {
        th: {
          "background-color": "hsl(206, 70%, 96%)",
        },
        td: {
          "background-color": "hsl(142, 52%, 96%)",
        },
      },
    });
    tableData.render(table);
    container.appendChild(table);
  });
</script>

<div bind:this={container} class="output columns is-centered " />

<!-- //select * from compartment limit 3 -->
