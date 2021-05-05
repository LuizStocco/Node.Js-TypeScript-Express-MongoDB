import { getModelForClass, prop } from "@typegoose/typegoose";
  class Forum {
    @prop ({ required:[ true,"O nome do Topico é Obrigatorio" ]})
    public nome!: String;

    @prop ({required: [true, "A categoria é Obrigado"]})
    public categoria!: String;

  }


// const ForumSchema = new Schema(
//   {
//     nome: {
//       type: String,
//       required: [true, "Dê um nome para o forum"]
//     },
//     categoria: {

//       type: String,
//       required: [true, "A categoria é obrigatoria"],

//     },

//   }

// );

// export default model("Forum", ForumSchema)
const ForumModel = getModelForClass(Forum)
export { ForumModel , Forum ,}