module.exports = {
  setupConfig: {
    introMessage:
      "Welcome to Startup In A Box.\n\n   Please provide values as required to setup your new project.\n   Thanks for using this boilerplate.\n\n   Brought to you by:\n   Owusu K <adjeibohyen@hotmail.co.uk>",
  },
  resetConfig: {
    introMessage:
      "Thanks for choosing Startup In A Box.\n\n  Brought to you by:\n   Owusu K <adjeibohyen@hotmail.co.uk>",
  },

  organisation: {
    companyName: {
      field: "companyName",
      prompt: "Project or company name",
      placeholder: "My Startup",
    },
    companyDescription: {
      field: "companyDescription",
      prompt: "Project or company description",
      placeholder: "A cool startup company!",
    },
    maintainerName: {
      field: "maintainerName",
      prompt: "Maintainer name",
      placeholder: "Jo Blog",
    },
    maintainerEmail: {
      field: "maintainerEmail",
      prompt: "Maintainer email",
      placeholder: "jo.blog@email.com",
    },
  },
  analytics: {
    gtagEnable: {
      field: "gtagEnable",
      prompt: "Enable Google analytics (y/N)",
    },
    gtagID: {
      field: "gtagID",
      prompt: "Google Analytics ID",
      placeholder: "G-xxxxxx",
    },
  },

  strapiConfig: {
    dataBaseHost: {
      field: "DATABASE_HOST",
      prompt: "Database host",
      placeholder: "127.0.0.1",
    },
    dataBasePort: {
      field: "DATABASE_PORT",
      prompt: "Database Port",
      placeholder: "3308",
    },
    dataBaseName: {
      field: "DATABASE_NAME",
      prompt: "Database Name",
      placeholder: "mysql_db",
    },
    dataBaseUsername: {
      field: "DATABASE_USERNAME",
      prompt: "Database Username",
      placeholder: "root",
    },
    dataBasePassword: {
      field: "DATABASE_PASSWORD",
      prompt: "Database Password",
      placeholder: "root",
    },
    cmsAdminUser: {
      field: "CMS_ADMIN_USER",
      prompt: "CMS username",
      placeholder: "root",
    },
    cmsAdminEmail: {
      field: "CMS_ADMIN_EMAIL",
      prompt: "CMS email",
      placeholder: "my_startup",
    },
    cmsAdminPassword: {
      field: "CMS_ADMIN_PASSWORD",
      prompt: "CMS Password",
      placeholder: "Root_admin_123",
    },
    JWTToken: {
      field: "JWT_SECRET",
      prompt: "Secret string",
      placeholder: "6302e01a-6044-4239-a32f-8a4728cd622a",
    },
  },
};
