import { getModelForClass, prop } from "@typegoose/typegoose";
import { model, Schema, Document, Model } from "mongoose";
import { Publicacao } from "./publicacao";
// Substituir class Publicacao por import Publicacao

class User {
  @prop({ required: [true, "O campo Nick Name é Obrigatorio"] })
  public nickname!: String;

  @prop({ required: [true, "A idade é obrigatória"] })
  public idade!: Number;

  @prop()
  public criadoEm!: Date;
  
  @prop()
  public publicacoes? : [Publicacao]
}


// interface IUser extends Document {
//   nickname: String,
//   idade: Number,
//   criadoEm: Date,
//   publicacoes: []
// }

// const UserSchema = new Schema(
//   {
//     nickname: {
//       type: String,
//       required: [true, "O campo Nick Name é Obrigatorio"]
//     },
//     idade: {
//       type: Number,
//       min: [0, "0 idade minima"],
//       required: [true, "A idade é obrigatoria"],

//     },
//     criadoEm: {
//       type: Date,
//     },
//     publicacoes: [PublicacaoSchema]

//   }

// );
const UserModel = getModelForClass(User);
// const UserMode: Model<IUser> = model("User", UserSchema);

export {  UserModel }