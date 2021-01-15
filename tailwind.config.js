module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    // Must be done in order, or they will override one another.
    backgroundColor: ["responsive", "hover", "active", "focus"],
  },
  plugins: [],
};
