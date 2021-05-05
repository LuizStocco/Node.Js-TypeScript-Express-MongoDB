import { getModelForClass, prop } from "@typegoose/typegoose";

class Noticia{

  @prop ({ required:[ true,"O nome é Obrigatorio" ]})
  public nome!: String;

  @prop ({required: [true, "A categoria é Obrigado"]})
  public categoria!: String;

  @prop ({required: [true, "A conteudo é Obrigado"]})
  public conteudo!: String;

  @prop ()
  public criadoEm!:Date;


}

const NoticiaModel = getModelForClass(Noticia)
export {NoticiaModel, Noticia}







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
//   }
// );
