const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");
const mongoose = require("mongoose");

const HomePage = require("../models/homePageModel");
const Courses = require("../models/course/course.model");
const CourseTypes = require("../models/course/courseTypes.model");

const globalParent = {
  name: "Courses",
  icon: "fas fa-cogs"
};

AdminBro.registerAdapter(AdminBroMongoose);
const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: "/admin",
  softwareBrothers: true,
  dashboard: {
    handler: async () => {},
    component: AdminBro.bundle("../dashboard")
  },
  branding: {
    logo:
      "data:image/jpeg;base64,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",
    companyName: "Gitedu"
  },
  resources: [
    {
      resource: HomePage,
      options: {
        parent: {
          name: "Information",
          icon: "fas fa-home"
        },
        properties: {
          about_us: { type: "richtext" }
        }
      }
    },
    {
      resource: Courses,
      options: {
        properties: {
          averageTableOfSalary: { type: "richtext" },
          description: { type: "richtext" },
          situation: {
            availableValues: [
              { value: "շուտով", label: "Շուտով" },
              { value: "ընդունելություն", label: "Ընդունելություն" }
            ]
          }
        },
        listProperties: ["title", "type", "options"],
        parent: globalParent
      }
    },
    {
      resource: CourseTypes,
      options: {
        listProperties: ["name", "courses", "color"],

        parent: globalParent
      }
    }
  ]
});

const ADMIN = {
  email: "hr.ovakimyan.03@gmail.com",
  password: "12345678"
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: "admin-login",
  cookiePassword: "admin-password",
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN;
    }
    return null;
  }
});

module.exports = router;
