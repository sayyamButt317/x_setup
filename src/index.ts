import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';



async function init(){

  const app = express();
const PORT = Number(process.env.PORT) || 8000;

app.use(express.json());

  //Create Graphql Server
const Graphqlserver = new ApolloServer({
  typeDefs:`
  type Query {
    message: String!
    say(name:String):String
  }
  `,
  resolvers:{
    Query:{
      message:()=>`Hey there! i am GraphQl Server`,
      say:(_,{name}:{name:String}) => `hey ${name}, How are you?`
    }
  },
});

//start the GraphQl Server
await Graphqlserver.start();

app.get('/', function (req, res) {
  res.json({message:`server is up and running`});
});

app.use(
  '/graphql',
  expressMiddleware(Graphqlserver)
);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
}
init();