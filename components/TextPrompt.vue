<template>
  <div>
    <div class="d-flex flex-wrap" style="gap: 0.63rem" v-if="editor">
      <v-btn
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        bold
      </v-btn>
      <v-btn
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        italic
      </v-btn>
      <v-btn
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        strike
      </v-btn>
      <v-btn
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
      >
        code
      </v-btn>
      <v-btn @click="editor.chain().focus().unsetAllMarks().run()">
        clear marks
      </v-btn>
      <v-btn @click="editor.chain().focus().clearNodes().run()">
        clear nodes
      </v-btn>
      <v-btn
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }"
      >
        paragraph
      </v-btn>
      <v-btn
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        h1
      </v-btn>
      <v-btn
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        h2
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Dropdown
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in menuItems" :key="index">
            <v-list-item-title @click="item.action">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <editor-content class="mt-6" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
      menuItems: [
        { title: "Click Me", action: () => this.pasteText("Click Me") },
        { title: "Click Me 2", action: () => this.pasteText("Click Me 2") },
        { title: "Click Me 3", action: () => this.pasteText("Click Me 3") },
        { title: "Click Me 4", action: () => this.pasteText("Click Me 4") },
      ],
    };
  },

  mounted() {
    this.editor = new Editor({
      content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
      extensions: [StarterKit],
    });
  },

  beforeDestroy() {
    this.editor.destroy();
  },

  methods: {
    pasteText(text) {
      this.editor.commands.insertContent(text);
    },
  },
};
</script>
