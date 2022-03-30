import { Produto } from "../models/Produto";

const axios = require('axios')

const emailSenderURL = "http://localhost:3334";

export class ProductServices{
    SendNotification(produto: Produto){
      console.log(produto)
        axios.post(emailSenderURL+'/email/enviar', produto)
          .then(function (response: Response) {
            console.log(response);
          })
          .catch(function (error: Error) {
            console.log(error);
          });
    }
}