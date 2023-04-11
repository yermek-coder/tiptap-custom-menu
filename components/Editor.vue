<template>
  <ClientOnly>
    <!-- Use the component in the right place of the template -->
    <tiptap-vuetify
      v-model="content"
      :extensions="extensions"
      :toolbar-attributes="{ color: 'black' }"
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
  data: () => ({
    // declare extensions you want to use
    extensions: [
      History,
      [
        Snippets,
        {
          options: {
            list: [
              {
                title: "Item 1",
                value:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
              },
              {
                title: "Item 2",
                value: "Modi similique dolorem, architecto velit libero",
              },
              {
                title: "Item 3",
                value:
                  "voluptatem iste fugit repudiandae tempore atque cumque inventore quaerat accusamus alias ullam quos error ratione officiis",
              },
            ],
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
  }),
};
</script>
