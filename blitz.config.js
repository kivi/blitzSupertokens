// const { sessionMiddleware, simpleRolesIsAuthorized } = require("@blitzjs/server")

let supertokens = require("supertokens-node")
let Session = require("supertokens-node/recipe/session")
let EmailPassword = require("supertokens-node/recipe/emailpassword")

console.log("Init super tokens")

supertokens.init({
  supertokens: {
    connectionURI: "https://localhost:3567",
  },
  appInfo: {
    appName: "Blitz meets supertokens",
    apiDomain: "http://localhost:3000", // Example: "https://api.supertokens.io",
    websiteDomain: "http://localhost:3000",
  },
  recipeList: [
    EmailPassword.init(), // initializes signin / sign up features
    Session.init(), // initializes session features
  ],
})

module.exports = {
  middleware: [supertokens.middleware(), supertokens.errorHandler()],
  /* Uncomment this to customize the webpack config
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    return config
  },
  */
}
