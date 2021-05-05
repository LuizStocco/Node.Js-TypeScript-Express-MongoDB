import { getModelForClass, prop } from "@typegoose/typegoose";
]
class Games{

  @prop ({required:[true,"Nick Name é obrigatorio"] })
  public nickname!: String;

  @prop ({required: [true,"O genero é obrigatorio"]})
  public genero!:String;

  @prop ()
  public criadoEm!: Date;
 
  @prop ()
  public desenvolvedora!: String;
 
 
  @prop ()
  public anoLancamento!: Number;

}

const GamesController = getModelForClass(Games)

// export { GamesModel, Games }












// const GameSchema = new Schema(

//   {
//     nome: {
//       type: String,
//       required: [true, "O campo Nick Name é Obrigatorio"]
//     },
//     genero: {

//       type: String,
//       required: [true, "O genero do game é obrigatorio"],

//     },
//     desenvolvedora: {

//       type: String,
//       required: [true, "O Desenvolvedor é"],

//     },
//     anoLancamento: {

//       type: Date,
//       required: [true, "O ano de lançamento é obrigatorio"],

//     },
//     criadoEm: {
//       type: Date,

//     },
//   }

// );