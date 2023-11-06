<script>
  export default {
    data() {
      return {
        tree_data: null,
      };
    },
    computed: {
      rotateScreen() {
        return (
          document.querySelector(".tf-tree > ul > li")?.scrollWidth >
          window?.innerWidth
        );
      },
    },
    methods: {
      getData() {
        this.tree_data = {
          name: "Root",
          id: 1,
          link: "https://google.com",
          children: [
            {
              name: "Child 1",
              id: 2,
              link: "https://google.com",
              children: [
              
              ],
            },
           
            {
              name: "Child 3",
              id: 7,
              link: "https://google.com",
              children: [
                {
                  name: "Grandchild 3",
                  id: 8,
                  link: "https://google.com",
                  children: [
                    {
                      name: "Grandchild 4",
                      link: "https://google.com",
                      id: 9,
                    },
                    {
                      name: "Grandchild 5",
                      link: "https://google.com",
                      id: 10,
                    },
                  ],
                },
                {
                  name: "Grandchild 4",
                  link: "https://google.com",
                  id: 11,
                },
              ],
            },
          ],
        };
      },
      treeBuilder(data, container, id, root) {
        let li;

        if (root) {
          const ul = document.createElement("ul");
          li = document.createElement("li");
          const link = document.createElement("a");
          link.setAttribute("href", data?.link);
          const span = document.createElement("span");
          link?.classList.add("tf-nc");
          span.innerText = data?.name;
          link.appendChild(span);
          li.appendChild(link);
          ul.appendChild(li);
          container?.appendChild(ul);
        } else {
          li = document.getElementById(`li_${id}`);
          const link = document.createElement("a");
          link.setAttribute("href", data?.link);
          const span = document.createElement("span");
          link?.classList.add("tf-nc");
          span.innerText = data?.name;
          link.appendChild(span);
          li.appendChild(link);
        }
        if (data?.children) {
          const ulChild = document.createElement("ul");
          data?.children?.forEach((child) => {
            const liChild = document.createElement("li");
            ulChild?.appendChild(liChild);
            liChild.setAttribute("id", `li_${child.id}`);
            li.appendChild(ulChild);

            this.treeBuilder(child, liChild, child.id, false);
          });
        }
      },
    },
     mounted() {
      setTimeout(() => {
        this.getData();
        console.log({ data: this.tree_data });
        this.treeBuilder(
          this.tree_data,
          document.querySelector(".tf-tree"),
          null,
          true
        );
        console.log({ rotateScreen: this.rotateScreen });
      }, 500);
    },
  };
</script>

<template>
  <div class="wrapper">
    <div class="tf-tree"></div>
  </div>
</template>

<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    font-weight: normal;
  }
  body {
    margin: 0;
    padding: 0;
  }
  a {
    color: #252525;
    text-decoration: none;
  }
  .wrapper {
    width: 100vw;
    height: 100vh;
    background: #f5f5f5;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
  }
  @media only screen and (max-width: 1024px) {
    .wrapper {
      align-items: flex-start;
    }
  }
  .text-center {
    text-align: center;
  }
  .tf-tree {
  font-size: 12px;
  overflow: auto;
}
.tf-tree * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.tf-tree ul {
  display: inline-flex;
}
.tf-tree li {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 1em;
  position: relative;
}
.tf-tree li ul {
  margin: 2em 0;
}
.tf-tree li li:before {
  border-top: 0.0625em solid #000;
  content: "";
  display: block;
  height: 0.0625em;
  left: -0.03125em;
  position: absolute;
  top: -1.03125em;
  width: 100%;
}
.tf-tree li li:first-child:before {
  left: calc(50% - 0.03125em);
  max-width: calc(50% + 0.0625em);
}
.tf-tree li li:last-child:before {
  left: auto;
  max-width: calc(50% + 0.0625em);
  right: calc(50% - 0.03125em);
}
.tf-tree li li:only-child:before {
  display: none;
}
.tf-tree li li:only-child > .tf-nc:before,
.tf-tree li li:only-child > .tf-node-content:before {
  height: 1.0625em;
  top: -1.0625em;
}
.tf-tree .tf-nc,
.tf-tree .tf-node-content {
  border: 0.0625em solid #000;
  display: inline-block;
  padding: 0.5em 1em;
  position: relative;
}
.tf-tree .tf-nc:before,
.tf-tree .tf-node-content:before {
  top: -1.03125em;
}
.tf-tree .tf-nc:after,
.tf-tree .tf-nc:before,
.tf-tree .tf-node-content:after,
.tf-tree .tf-node-content:before {
  border-left: 0.0625em solid #000;
  content: "";
  display: block;
  height: 1em;
  left: calc(50% - 0.03125em);
  position: absolute;
  width: 0.0625em;
}
.tf-tree .tf-nc:after,
.tf-tree .tf-node-content:after {
  top: calc(100% + 0.03125em);
}
.tf-tree .tf-nc:only-child:after,
.tf-tree .tf-node-content:only-child:after,
.tf-tree > ul > li > .tf-nc:before,
.tf-tree > ul > li > .tf-node-content:before {
  display: none;
}
.tf-tree.tf-gap-sm li {
  padding: 0 0.6em;
}
.tf-tree.tf-gap-sm li > .tf-nc:before,
.tf-tree.tf-gap-sm li > .tf-node-content:before {
  height: 0.6em;
  top: -0.6em;
}
.tf-tree.tf-gap-sm li > .tf-nc:after,
.tf-tree.tf-gap-sm li > .tf-node-content:after {
  height: 0.6em;
}
.tf-tree.tf-gap-sm li ul {
  margin: 1.2em 0;
}
.tf-tree.tf-gap-sm li li:before {
  top: -0.63125em;
}
.tf-tree.tf-gap-sm li li:only-child > .tf-nc:before,
.tf-tree.tf-gap-sm li li:only-child > .tf-node-content:before {
  height: 0.6625em;
  top: -0.6625em;
}
.tf-tree.tf-gap-lg li {
  padding: 0 1.5em;
}
.tf-tree.tf-gap-lg li > .tf-nc:before,
.tf-tree.tf-gap-lg li > .tf-node-content:before {
  height: 1.5em;
  top: -1.5em;
}
.tf-tree.tf-gap-lg li > .tf-nc:after,
.tf-tree.tf-gap-lg li > .tf-node-content:after {
  height: 1.5em;
}
.tf-tree.tf-gap-lg li ul {
  margin: 3em 0;
}
.tf-tree.tf-gap-lg li li:before {
  top: -1.53125em;
}
.tf-tree.tf-gap-lg li li:only-child > .tf-nc:before,
.tf-tree.tf-gap-lg li li:only-child > .tf-node-content:before {
  height: 1.5625em;
  top: -1.5625em;
}
.tf-tree li.tf-dotted-children .tf-nc:after,
.tf-tree li.tf-dotted-children .tf-nc:before,
.tf-tree li.tf-dotted-children .tf-node-content:after,
.tf-tree li.tf-dotted-children .tf-node-content:before {
  border-left-style: dotted;
}
.tf-tree li.tf-dotted-children li:before {
  border-top-style: dotted;
}
.tf-tree li.tf-dotted-children > .tf-nc:before,
.tf-tree li.tf-dotted-children > .tf-node-content:before {
  border-left-style: solid;
}
.tf-tree li.tf-dashed-children .tf-nc:after,
.tf-tree li.tf-dashed-children .tf-nc:before,
.tf-tree li.tf-dashed-children .tf-node-content:after,
.tf-tree li.tf-dashed-children .tf-node-content:before {
  border-left-style: dashed;
}
.tf-tree li.tf-dashed-children li:before {
  border-top-style: dashed;
}
.tf-tree li.tf-dashed-children > .tf-nc:before,
.tf-tree li.tf-dashed-children > .tf-node-content:before {
  border-left-style: solid;
}

</style>
