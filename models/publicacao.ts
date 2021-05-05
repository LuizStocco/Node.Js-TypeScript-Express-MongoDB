import { getModelForClass, prop } from "@typegoose/typegoose";

class Publicacao{

  @prop ({ required: [true, "A categoria é obrigatoria "] })
  public categoria!: String;

  @prop ({ required: [true, "O titulo é Obrigatorio"] })
  public titulo!: String;

  @prop ({ required: [true, "O conteudo é Obrigaturio"] })
  public conteudo!:String;
  
  @prop ()
  public criadoEm!: Date;
  
  @prop ({required: [true,"O Usuario é Obrigatorio" ]})
  public usuarioId!:String;
}

// const PublicacaoSchema = new Schema(
//   {
//     categoria: {
//       type: String,
//       required: [true, "A categoria é obrigatoria"],
//     },
//     titulo: {
//       type: String,
//       required: [true, "é Obrigatorio"]
//     },
//     conteudo: {
//       type: String,
//       required: [true, " é Obrigatorio"]
//     },
//     criadoEm: {
//       type: Date,
//     },
//     usuarioId: { type: String, required: [true, 'e Obrigatório'] }
//   }

// );


// const PublicacaoModel = model("Publicacao", PublicacaoSchema, "publicacoes");

const PublicacaoModel = getModelForClass(Publicacao)

export { PublicacaoModel, Publicacao, }