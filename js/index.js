tailwind.config = {
    theme: {
      container: {
        center: true,
        width: {
            default:"100%",
          tablet: "600px",
          ltablet:"960px",
          desktop: "1200px",
        },
        padding: {
          default: "20px",
        },
      },
      screens: {
        tablet: "640px",
        ltablet:"1000px",
        desktop: "1240px",
      },
      extends: {
        colors: {},
      },
    },
  };