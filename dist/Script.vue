
<script>
export default {
  name: "ProductView",
 mounted() {
    this.loadScripts();
},
methods: {
    loadScripts() {
      const scriptUrls = [
        '@/assets/assets/vendor/jquery/jquery.min.js',
        '@/assets/assets/vendor/bootstrap/js/bootstrap.min.js',
        '@/assets/assets/js/isotope.min.js',
        '@/assets/assets/js/owl-carousel.js',
        '@/assets/assets/js/counter.js',
        '@/assets/assets/js/custom.js',
      ];

      const head = document.getElementsByTagName('head')[0];

      scriptUrls.forEach((scriptUrl) => {
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;
        head.appendChild(script);
      });
    },
 },
};
</script>
