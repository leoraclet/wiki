import DefaultTheme from 'vitepress/theme';
import Layout from './components/Layout.vue'
import ElementPlus from 'element-plus'

// CSS
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css' // required for dark mode
import './custom.css';

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.use(ElementPlus); // Register component library
    },
}