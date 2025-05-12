const {model} = require("mongoose")
const {UserSchema} = require("../schemas/UserSchema")

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const UsersModel = new model("User", UserSchema);

module.exports = {UsersModel};