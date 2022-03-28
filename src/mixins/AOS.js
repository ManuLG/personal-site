import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default {
    mounted () {
        AOS.init()

        this.$root.$on('bv::collapse::state', _ => {
            setTimeout(_ => {
                AOS.refreshHard()
            }, 10)
        })
    }
}
