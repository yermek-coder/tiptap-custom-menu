<template>
  <ClientOnly>
    <!-- Use the component in the right place of the template -->
    <tiptap-vuetify
      v-model="content"
      :extensions="extensions"
      :toolbar-attributes="{ color: 'black' }"
      id="id-we-need"
    />

    <template #placeholder> Loading... </template>
  </ClientOnly>
</template>

<script>
// import the component and the necessary extensions
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Snippets,
} from "../vendors/tiptap/bundle-esm";

export default {
  // specify TiptapVuetify component in "components"
  components: { TiptapVuetify },
  data() {
    return {
      extensions: [
        History,
        [
          Snippets,
          {
            options: {
              list: [
                {
                  title: "Item 1",
                  content:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
                  onClick: this.appendContent,
                },
                {
                  title: "Item 2",
                  content: "Modi similique dolorem, architecto velit libero",
                  onClick: this.appendContent,
                },
                {
                  title: "Item 3",
                  content:
                    "voluptatem iste fugit repudiandae tempore atque cumque inventore quaerat accusamus alias ullam quos error ratione officiis",
                  onClick: this.appendContent,
                },
              ],
              tooltip: "some tooltip",
              iconSrc: require("~/assets/ai-blue.jpg"),
            },
          },
        ],
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [
          Heading,
          {
            options: {
              levels: [1, 2, 3],
            },
          },
        ],
        Bold,
        Link,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak,
      ],
      // starting editor's content
      content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `,
    };
  },
  methods: {
    appendContent({ editor }) {
      const words = "1. apple\n2. orange\n3. grape".split(" ");
      words.forEach((word, index) => {
        if (word.includes("\n")) {
          word = word.replace("\n", "<br>");
        }
        let content = editor.getHTML();
        if (index !== 0) {
          // insert new content inside last paragraph if one exists.
          // without this new p tag will be created each time we insert,
          // but we only need it once.
          content = content.substring(0, content.length - 4);
        }

        editor.setContent(content + (index === 0 ? "" : " ") + word);
      });

      // the ID
      const editorEl = editor.view.dom;
      const ID = editorEl.closest(".tiptap-vuetify-editor").getAttribute("id");
      console.log("ID", ID);
    },
  },
};
</script>
