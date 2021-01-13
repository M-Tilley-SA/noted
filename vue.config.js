module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                  @import "@/assets/styles/styles.scss";
                  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,300&display=swap');
              `,
      },
    },
  },
}