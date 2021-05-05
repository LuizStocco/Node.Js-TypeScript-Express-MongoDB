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

//Fiz alteraçao nos modelos do projeto ultilizando  typegosse  para facilitar  o  desenvolvimento e futuras  adequacoes 
