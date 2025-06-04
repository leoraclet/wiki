import DefaultTheme from 'vitepress/theme';
import './custom.css';
import MyLayout from './Layout.vue'

//export default DefaultTheme;

export default {
    extends: DefaultTheme,
    // override the Layout with a wrapper component that
    // injects the slots
    Layout: MyLayout
}